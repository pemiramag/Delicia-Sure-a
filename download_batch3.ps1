$urls = Get-Content photo_urls.txt
$galleryDir = "public\gallery"

Write-Host "Descargando fotos 51 a $($urls.Count)..."
for ($i = 50; $i -lt $urls.Count; $i++) {
    $u = $urls[$i]
    $idx = ($i + 1).ToString("D2")
    $dest = "$galleryDir\delicia_surena_$idx.jpg"
    $fetchUrl = "$u=w1200"
    
    curl.exe -sL $fetchUrl -o $dest
    $size = (Get-Item $dest).Length
    if ($size -gt 1000) {
        Write-Host "Descargada foto $idx -> $dest ($([Math]::Round($size/1024)) KB)"
    } else {
        Remove-Item $dest -Force -ErrorAction SilentlyContinue
    }
}
Write-Host "Descarga completa de todo el álbum."
