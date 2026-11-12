$content = [System.IO.File]::ReadAllText("gemini_full.html", [System.Text.Encoding]::UTF8)

# Look for AF_initDataCallback or WIZ_global_data
$dataMatches = [regex]::Matches($content, 'AF_initDataCallback\s*\(\s*\{[\s\S]*?\}\s*\)\s*;')
Write-Host "AF_initDataCallback matches: $($dataMatches.Count)"

$out = @()
foreach ($m in $dataMatches) {
    if ($m.Value -match '(?i)plato|cuy|nariñ|catambuco|restaurante|sureñ|menú|menu') {
        $out += $m.Value
    }
}
Write-Host "Relevant data blocks: $($out.Count)"
$out | Out-File -Encoding UTF8 gemini_data_blocks.txt
