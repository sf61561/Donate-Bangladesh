document.getElementById('btn-Donation').addEventListener('click',function(event){
    event.preventDefault();
    document.getElementById('btn-Donation').classList.add('fixed-bg');
    document.getElementById('btn-history').classList.remove('fixed-bg');
    document.getElementById('donation').classList.remove('hidden');
    document.getElementById('history').classList.add('hidden');
})

document.getElementById('btn-history').addEventListener('click',function(event){
    event.preventDefault();
    document.getElementById('btn-history').classList.add('fixed-bg');
    document.getElementById('btn-Donation').classList.remove('fixed-bg');
    document.getElementById('donation').classList.add('hidden');
    document.getElementById('history').classList.remove('hidden');
});

document.getElementById('btn-blog').addEventListener('click',function(){
    window.location.href="blog.html";
});

document.getElementById('btn-noakhali').addEventListener('click',function(event){
    event.preventDefault();
    donation=document.getElementById('donation-noakhali').value;
    if(donation===''){
        Swal.fire({
            icon: 'error',
            text: 'Please Enter Valid Amount',
            confirmButtonColor: '#d33'
        });
    }
    else{
        donation=parseFloat(donation);
        const donation1=document.getElementById('noakhali-donation').innerText.split(' ');
        const balance=document.getElementById('balance').innerText.split(' ');
        balance[0]=parseFloat(balance[0]);
        donation1[0]=parseFloat(donation1[0]);
        if(balance[0]>=donation){
            balance[0]-=donation;
            donation1[0]+=donation;
            const donation2=String(donation1[0])+" "+donation1[1];
            document.getElementById('noakhali-donation').innerText=donation2;
            const balance1=String(balance[0])+" "+balance[1];
            document.getElementById('balance').innerText=balance1;
            document.getElementById('donation-noakhali').value='';
            Swal.fire({
                icon: 'success',
                title: 'Payment Successful!',
                confirmButtonColor: '#28a745'
            });
            const don_noakhali=document.getElementById('history');
            const div=document.createElement('div');
            const h1=document.createElement('h1');
            h1.innerText=String(donation)+' Taka is Donated for Flood Relief in Noakhali,Bangladesh';
            h1.classList.add('text-base','md:text-lg','lg:text-xl','xl:text-3xl','mt-10','font-bold');
            div.appendChild(h1);
            const h4=document.createElement('h4');
            const date = new Date();
            h4.innerText="Date: "+date;
            h4.classList.add('text-sm','md:text-base','lg:text-lg','xl:text-xl','mt-2','md:mt-3','lg:mt-4','xl:mt-5');
            div.appendChild(h4);
            don_noakhali.appendChild(div);
        }
        else{
            Swal.fire({
            icon: 'error',
            title: 'Payment Failed',
            text: 'Insufficient balance in your account.',
            confirmButtonColor: '#d33'
            });
            document.getElementById('donation-noakhali').value='';
        }
    }
})

document.getElementById('btn-feni').addEventListener('click',function(event){
    event.preventDefault();
    donation=document.getElementById('donation-feni').value;
    if(donation===''){
        Swal.fire({
            icon: 'error',
            text: 'Please Enter Valid Amount',
            confirmButtonColor: '#d33'
        });
    }
    else{
        donation=parseFloat(donation);
        const donation1=document.getElementById('feni-donation').innerText.split(' ');
        const balance=document.getElementById('balance').innerText.split(' ');
        balance[0]=parseFloat(balance[0]);
        donation1[0]=parseFloat(donation1[0]);
        if(balance[0]>=donation){
            balance[0]-=donation;
            donation1[0]+=donation;
            const donation2=String(donation1[0])+" "+donation1[1];
            document.getElementById('feni-donation').innerText=donation2;
            const balance1=String(balance[0])+" "+balance[1];
            document.getElementById('balance').innerText=balance1;
            document.getElementById('donation-feni').value='';
            Swal.fire({
                icon: 'success',
                title: 'Payment Successful!',
                confirmButtonColor: '#28a745'
            });
            const don_feni=document.getElementById('history');
            const div=document.createElement('div');
            const h1=document.createElement('h1');
            h1.innerText=String(donation)+' Taka is Donated for famine-2024 at Feni, Bangladesh';
            h1.classList.add('text-base','md:text-lg','lg:text-xl','xl:text-3xl','mt-10','font-bold');
            div.appendChild(h1);
            const h4=document.createElement('h4');
            const date = new Date();
            h4.innerText="Date: "+date;
            h4.classList.add('text-sm','md:text-base','lg:text-lg','xl:text-xl','mt-2','md:mt-3','lg:mt-4','xl:mt-5');
            div.appendChild(h4);
            don_feni.appendChild(div);
        }
        else{
            Swal.fire({
            icon: 'error',
            title: 'Payment Failed',
            text: 'Insufficient balance in your account.',
            confirmButtonColor: '#d33'
            });
            document.getElementById('donation-feni').value='';
        }
    }
})

document.getElementById('btn-quota').addEventListener('click',function(){
    donation=document.getElementById('donation-quota').value;
    if(donation===''){
        Swal.fire({
            icon: 'error',
            text: 'Please Enter Valid Amount',
            confirmButtonColor: '#d33'
        });
    }
    else{
        donation=parseFloat(donation);
        const donation1=document.getElementById('quota-donation').innerText.split(' ');
        const balance=document.getElementById('balance').innerText.split(' ');
        balance[0]=parseFloat(balance[0]);
        donation1[0]=parseFloat(donation1[0]);
        if(balance[0]>=donation){
            balance[0]-=donation;
            donation1[0]+=donation;
            const donation2=String(donation1[0])+" "+donation1[1];
            document.getElementById('quota-donation').innerText=donation2;
            const balance1=String(balance[0])+" "+balance[1];
            document.getElementById('balance').innerText=balance1;
            document.getElementById('donation-quota').value='';
            Swal.fire({
                icon: 'success',
                title: 'Payment Successful!',
                confirmButtonColor: '#28a745'
            });
            const don_quota=document.getElementById('history');
            const div=document.createElement('div');
            const h1=document.createElement('h1');
            h1.innerText=String(donation)+' Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh';
            h1.classList.add('text-base','md:text-lg','lg:text-xl','xl:text-3xl','mt-10','font-bold');
            div.appendChild(h1);
            const h4=document.createElement('h4');
            const date = new Date();
            h4.innerText="Date: "+date;
            h4.classList.add('text-sm','md:text-base','lg:text-lg','xl:text-xl','mt-2','md:mt-3','lg:mt-4','xl:mt-5');
            div.appendChild(h4);
            don_quota.appendChild(div);
        }
        else{
            Swal.fire({
            icon: 'error',
            title: 'Payment Failed',
            text: 'Insufficient balance in your account.',
            confirmButtonColor: '#d33'
            });
            document.getElementById('donation-quota').value='';
        }
    }
})