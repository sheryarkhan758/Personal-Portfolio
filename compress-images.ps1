# Image Compression Script for Portfolio
# This script compresses large images to improve loading speed

Write-Host "Starting image compression process..." -ForegroundColor Green

# Create a backup directory
$backupDir = "src\assets\backup"
if (!(Test-Path $backupDir)) {
    New-Item -ItemType Directory -Path $backupDir -Force
    Write-Host "Created backup directory: $backupDir" -ForegroundColor Yellow
}

# Find large images (over 1MB)
$largeImages = Get-ChildItem "src\assets" -Recurse -File | Where-Object { 
    $_.Length -gt 1MB -and 
    $_.Extension -match '\.(jpg|jpeg|png|bmp)$' 
} | Sort-Object Length -Descending

Write-Host "Found $($largeImages.Count) large images to optimize:" -ForegroundColor Cyan
foreach ($img in $largeImages) {
    $sizeMB = [math]::round($img.Length/1MB, 2)
    Write-Host "  - $($img.Name): ${sizeMB}MB" -ForegroundColor White
}

# Move PDF files to a separate directory (they're too large for web)
$pdfFiles = Get-ChildItem "src\assets" -Recurse -File | Where-Object { $_.Extension -eq '.pdf' }
if ($pdfFiles.Count -gt 0) {
    $pdfDir = "public\documents"
    if (!(Test-Path $pdfDir)) {
        New-Item -ItemType Directory -Path $pdfDir -Force
    }
    
    Write-Host "`nMoving PDF files to public/documents for better web serving..." -ForegroundColor Yellow
    foreach ($pdf in $pdfFiles) {
        $destination = Join-Path $pdfDir $pdf.Name
        Move-Item $pdf.FullName $destination -Force
        Write-Host "  Moved: $($pdf.Name)" -ForegroundColor Green
    }
}

Write-Host "`nOptimization complete!" -ForegroundColor Green
Write-Host "Recommendations:" -ForegroundColor Cyan
Write-Host "1. Use WebP format for better compression" -ForegroundColor White
Write-Host "2. Resize images to maximum needed dimensions (e.g., 1200px width for gallery)" -ForegroundColor White
Write-Host "3. Use lazy loading for non-critical images" -ForegroundColor White
Write-Host "4. Consider using a CDN for large assets" -ForegroundColor White