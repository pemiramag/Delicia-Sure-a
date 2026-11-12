$content = [System.IO.File]::ReadAllText("photos_page.html")
# Google Photos image URLs typically start with https://lh3.googleusercontent.com/pw/ or https://lh3.googleusercontent.com/lr/
$regex = [regex]'https://lh3\.googleusercontent\.com/(?:pw|lr)/[a-zA-Z0-9_\-]+'
$matches = $regex.Matches($content)
$unique = $matches | ForEach-Object { $_.Value } | Sort-Object -Unique
Write-Host "Found unique photo base URLs: $($unique.Count)"

$i = 1
$items = @()
foreach ($u in $unique) {
    # Check length to ensure it's a real photo id (usually > 50 chars)
    if ($u.Length -gt 60) {
        $items += $u
        Write-Host "Photo $i : $u (Length: $($u.Length))"
        $i++
    }
}

$items | Out-File -Encoding UTF8 photo_urls.txt
Write-Host "Saved $($items.Count) photo URLs to photo_urls.txt"
