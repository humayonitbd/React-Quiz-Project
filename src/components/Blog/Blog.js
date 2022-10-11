import React from 'react';

const Blog = () => {
    return (
        <div className='lg:w-9/12 mx-auto mt-10'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
            রিঅ্যাক্ট-রাউটার এর উদ্দেশ্য কি ?
            </div>
            <div className="collapse-content"> 
            <p>রিঅ্যাক্ট রাউটার হল রিঅ্যাক্টে রাউটিং করার জন্য একটি স্ট্যান্ডার্ড লাইব্রেরি। এটি একটি প্রতিক্রিয়া অ্যাপ্লিকেশনে বিভিন্ন উপাদানের ভিউগুলির মধ্যে নেভিগেশন সক্ষম করে, ব্রাউজার URL পরিবর্তন করার অনুমতি দেয় এবং UI কে URL এর সাথে সিঙ্কে রাখে । প্রতিক্রিয়া রাউটার বর্তমান অবস্থান বা URL এর জন্য একটি রাষ্ট্রীয় ধারক। এটি অবস্থানের ট্র্যাক রাখে এবং এটি পরিবর্তন হওয়ার সাথে সাথে বিভিন্ন Route রেন্ডার করে, এবং এটি আপনাকে Link s এবং history API ব্যবহার করে অবস্থান আপডেট করার সরঞ্জামও দেয়।</p>
            </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
            Context api কিভাবে কাজ করে ?
            </div>
            <div className="collapse-content"> 
                <p>রিঅ্যাক্ট কনটেক্সট এপিআই হল একটি রিঅ্যাক্ট অ্যাপের জন্য কার্যকরভাবে গ্লোবাল ভেরিয়েবল তৈরি করার একটি উপায় যা চারপাশে পাস করা যেতে পারে। এটি "প্রপ ড্রিলিং" বা দাদা-দাদি থেকে শিশু থেকে পিতা-মাতার কাছে প্রপস সরানোর বিকল্প। রেডক্স ব্যবহার করে রাজ্য পরিচালনার জন্য প্রসঙ্গটিকে একটি সহজ, হালকা পদ্ধতি হিসাবেও উল্লেখ করা হয়।</p>
            </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
             useRef কি ?
            </div>
            <div className="collapse-content"> 
                <p>মূলত, useRef হল একটি "বক্স" এর মত যা তার বর্তমান সম্পত্তিতে একটি পরিবর্তনযোগ্য মান ধরে রাখতে পারে। আপনি প্রাথমিকভাবে DOM অ্যাক্সেস করার উপায় হিসাবে refs এর সাথে পরিচিত হতে পারেন। আপনি div ref= myRef  এর সাথে প্রতিক্রিয়া করার জন্য একটি রেফ অবজেক্ট পাস করলে, যখনই সেই নোডটি পরিবর্তন হয় তখন React তার .current প্রপার্টি সংশ্লিষ্ট DOM নোডে সেট করবে or UseRef Hook আপনাকে রেন্ডারের মধ্যে মান বজায় রাখতে দেয়। এটি একটি পরিবর্তনযোগ্য মান সংরক্ষণ করতে ব্যবহার করা যেতে পারে যা আপডেট করার সময় পুনরায় রেন্ডারের কারণ হয় না। এটি সরাসরি একটি DOM উপাদান অ্যাক্সেস করতে ব্যবহার করা যেতে পারে । অপরিহার্য অ্যানিমেশন ট্রিগার বা তৃতীয় পক্ষের লাইব্রেরিগুলিকে সংহত করার প্রয়োজন হয় তবে useRef ব্যবহার  হয় । একটি উপাদান পুনরায় রেন্ডারকে ট্রিগার করে না। এই আচরণ রাষ্ট্র এবং প্রপস ফাংশন বিপরীত. একটি রেফ দুটি উপায়ে তৈরি করা যেতে পারে- useRef হুক দ্বারা বা createRef ফাংশন দ্বারা। useRef: userRef হল একটি হুক যা একই রেফ ব্যবহার করে।</p>
            </div>
            </div>
        </div>
    );
};

export default Blog;