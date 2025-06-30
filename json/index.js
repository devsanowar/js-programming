fetch('package.json')  // package.json ফাইল থেকে ডেটা লোড করার জন্য request পাঠানো হচ্ছে
.then(response => response.json())  // response কে JSON ফরম্যাটে (JavaScript object) কনভার্ট করা হচ্ছে
.then(package => {   // JSON ডেটা আসার পর 'package' নামে ভেরিয়েবল পেয়ে তার ভিতরের ডেটা ব্যবহার করা হবে
    console.log(package.name);       // package.json এর "name" প্রপার্টি কনসোলে দেখানো হচ্ছে
    console.log(package.version);    // package.json এর "version" প্রপার্টি কনসোলে দেখানো হচ্ছে
    console.log(package.age);        // package.json এর "age" প্রপার্টি কনসোলে দেখানো হচ্ছে
    console.log(package.is_student); // package.json এর "is_student" প্রপার্টি কনসোলে দেখানো হচ্ছে
    // console.log(package.skills);
    for(let i = 0; i <= package.skills.length; i++){
        console.log(package.skills[i]);
    }
})
.catch(error => {     // যদি কোনো এরর হয় (যেমন ফাইল পাওয়া না যাওয়া, নেটওয়ার্ক সমস্যা) তাহলে এখানে হ্যান্ডেল করা হবে
    console.log("Error loading json", error); // এরর মেসেজ কনসোলে দেখানো হবে
})
