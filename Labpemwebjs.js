document.getElementById('yesButton').addEventListener('click', function() {
    alert("Anyone else hear that ominous bell tolling???? 😂 😂 😂 no?? just me?????? 😭 😭 😭 😭 😭 😭 😭");
    const img = document.createElement('img');
    img.src = 'Foto/mizu5.webp';
    img.alt = 'A happy image';
    img.style.maxWidth = '100%';
    img.style.borderRadius = '10px';

    const message = document.createElement('p');
    message.textContent = "Anyone else hear that ominous bell tolling???? &#128514; &#128514; &#128514; no?? just me?????? &#128557; &#128557; &#128557; &#128557; &#128557; &#128557; &#128557;";
    message.style.color = '#f44336';
    message.style.fontSize = '18px';

    const responseDiv = document.getElementById('response');
    responseDiv.innerHTML = '';
    responseDiv.appendChild(img);
});

document.getElementById('noButton').addEventListener('click', function() {
    const message = document.createElement('p');
    message.textContent = "Watch.";
    message.style.color = '#f44336';
    message.style.fontSize = '18px';

    const responseDiv = document.getElementById('response');
    responseDiv.innerHTML = '';
    responseDiv.appendChild(message);

    const link = document.createElement('a');
    link.href = 'https://youtu.be/qdh3kHkj17g?si=Vmjrfw6zOz_TbRSY';
    link.textContent = 'Mizu5.';
    
    responseDiv.appendChild(link);
});
