function calculateMonthlyPayment() {
    // รับข้อมูลจากฟอร์ม
    const principal = parseFloat(document.getElementById('principal').value);
    const annualInterestRate = parseFloat(document.getElementById('interestRate').value);
    const numPayments = parseInt(document.getElementById('numPayments').value, 10);

    // ตรวจสอบค่าที่ป้อนไม่เป็นศูนย์
    if (isNaN(principal) || isNaN(annualInterestRate) || isNaN(numPayments) || principal <= 0 || annualInterestRate < 0 || numPayments <= 0) {
        document.getElementById('monthlyPayment').textContent = "กรุณากรอกข้อมูลให้ถูกต้อง";
        return;
    }

    // แปลงอัตราดอกเบี้ยประจำปีเป็นอัตราดอกเบี้ยรายเดือน
    const monthlyInterestRate = annualInterestRate / 12 / 100;

    let monthlyPayment;

    if (monthlyInterestRate === 0) {
        // กรณีไม่มีดอกเบี้ย
        monthlyPayment = principal / numPayments;
    } else {
        // ใช้สูตรการคำนวณการผ่อนชำระเงินกู้
        monthlyPayment = (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numPayments));
    }

    // แสดงผลลัพธ์
    document.getElementById('monthlyPayment').textContent = `การผ่อนชำระต่อเดือน: ${monthlyPayment.toFixed(2)} บาท`;
}
