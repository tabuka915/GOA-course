function calculateAge() {
    const dobInput = document.getElementById('dob');
    const dob = new Date(dobInput.value);
    const today = new Date();
    
    if (isNaN(dob.getTime())) {
        document.getElementById('ageResult').textContent = 'Please enter a valid date of birth.';
        return;
    }
    
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();
    
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }
    
    document.getElementById('ageResult').textContent = `You are ${age} years old.`;
}
