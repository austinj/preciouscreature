# Check if a directory is provided as an argument
param (
    [string]$Directory = $(Read-Host -Prompt "Enter the directory path")
)

# Check if the directory exists
if (-Not (Test-Path -Path $Directory -PathType Container)) {
    Write-Host "Directory $Directory does not exist."
    exit
}

# Function to get image dimensions using .NET methods
function Get-ImageDimensions {
    param (
        [string]$ImagePath
    )

    try {
        # Load the image using System.Drawing.Image
        Add-Type -AssemblyName System.Drawing
        $image = [System.Drawing.Image]::FromFile($ImagePath)

        # Output the image dimensions
        $dimensions = "$($image.Width)x$($image.Height)"
        $image.Dispose()

        return $dimensions
    } catch {
        Write-Host "Error loading image: $ImagePath"
    }
}

# Get all image files in the directory
$imageExtensions = @('*.jpg', '*.jpeg', '*.png', '*.gif')

foreach ($extension in $imageExtensions) {
    $images = Get-ChildItem -Path $Directory -Filter $extension

    foreach ($image in $images) {
        $dimensions = Get-ImageDimensions -ImagePath $image.FullName
        if ($dimensions) {
            Write-Host "File: $($image.Name) - Dimensions: $dimensions"
        }
    }
}
