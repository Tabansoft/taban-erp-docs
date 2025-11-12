# نام فایل خروجی
$out = "merged.md"

# اگر از قبل وجود داشته باشد، حذف شود
Remove-Item $out -ErrorAction SilentlyContinue

# گرفتن همه فایل‌های md زیرشاخه‌های docs
Get-ChildItem -Path ".\docs" -Filter "*.md" -File -Recurse |
    Sort-Object FullName |  # مرتب‌سازی بر اساس مسیر کامل (تضمین ساختار تو در تو)
    ForEach-Object {
        Add-Content -Path $out -Value ""
        Get-Content -Path $_.FullName -Raw | Add-Content -Path $out
    }