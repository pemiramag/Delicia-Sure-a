$urls = Get-Content photo_urls.txt
$galleryDir = "public\gallery"
New-Item -ItemType Directory -Force -Path $galleryDir | Out-Null

Write-Host "Iniciando descarga de fotografías del álbum de Google Photos ($($urls.Count) fotos disponibles)..."

# Download the first 24 photos
$count = 0
for ($i = 0; $i -lt [Math]::Min($urls.Count, 24); $i++) {
    $u = $urls[$i]
    $idx = ($i + 1).ToString("D2")
    $dest = "$galleryDir\delicia_surena_$idx.jpg"
    $fetchUrl = "$u=w1200"
    
    curl.exe -sL $fetchUrl -o $dest
    $size = (Get-Item $dest).Length
    if ($size -gt 1000) {
        Write-Host "Descargada foto $idx -> $dest ($([Math]::Round($size/1024)) KB)"
        $count++
    } else {
        Remove-Item $dest -Force -ErrorAction SilentlyContinue
    }
}

Write-Host "Total fotos descargadas exitosamente: $count"
