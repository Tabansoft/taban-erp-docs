# صورتحساب‌های بانکی (Bank Statements)
توضیح: موجودیت Header برای فایلی که از بانک دریافت می‌کنید (برای مغایرت‌گیری).

فیلدها:

Statement_ID (PK)

Bank_Account_ID (FK)

Statement_Date

Opening_Balance

Closing_Balance

ردیف صورتحساب بانکی (Bank Statement Line)

توضیح: ردیف‌های داخل فایل صورتحساب بانک.

فیلدها:

Statement_Line_ID (PK)

Statement_ID (FK)

Transaction_Date

Amount_Debit

Amount_Credit

Description (شرحی که بانک می‌زند)

Reconciled (Boolean - آیا این ردیف مغایرت‌گیری شده؟)