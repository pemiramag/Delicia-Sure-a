$content = [System.IO.File]::ReadAllText("gemini_full.html", [System.Text.Encoding]::UTF8)

# Find all script tags
$scripts = [regex]::Matches($content, '<script[^>]*>([\s\S]*?)</script>')
Write-Host "Total script tags: $($scripts.Count)"

$i = 0
foreach ($s in $scripts) {
    $i++
    $txt = $s.Groups[1].Value
    if ($txt -match '(?i)plato|nariñ|delicia|cuy|catambuco|restaurante|estrella') {
        Write-Host "Script $i MATCHES keywords! Length: $($txt.Length)"
        $txt | Out-File -Encoding UTF8 "script_match_$i.txt"
    }
}
