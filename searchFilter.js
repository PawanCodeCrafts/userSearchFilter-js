let users = [
    {
        name: "elisa Doe",
        pic: "https://plus.unsplash.com/premium_photo-1673792686302-7555a74de717?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        bio: "Web developer and coffee enthusiast."
    },
    {
        name: "janie Smith",
        pic: 'https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500',
        bio: "Graphic designer who loves nature."
    },
    {
        name: "michael Lee",
        pic: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
        bio: "Full-stack developer and gamer."
    },
    {
        name: "emily Davis",
        pic: "https://plus.unsplash.com/premium_photo-1668896123988-b1566bb54579?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        bio: "Digital marketer and traveler."
    },
    {
        name: "david Brown",
        pic: "https://plus.unsplash.com/premium_photo-1664015982598-283bcdc9cae8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWVufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
        bio: "Entrepreneur and tech blogger."
    },
    {
        name: "sophia Wilson",
        pic: "https://images.unsplash.com/photo-1596434300655-e48d3ff3dd5e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        bio: "UX/UI designer with a love for art."
    },
    {
        name: "chris Johnson",
        pic: "https://i.pravatar.cc/150?img=7",
        bio: "Software engineer and musician."
    },
    {
        name: "olivia Martinez",
        pic: "https://images.unsplash.com/photo-1596434300655-e48d3ff3dd5e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
        bio: "Content writer and book lover."
    },
    {
        name: "daniel Anderson",
        pic: "https://plus.unsplash.com/premium_photo-1661765722951-7c001baba43e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJveXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
        bio: "Data analyst who enjoys hiking."
    },
    {
        name: "john Thompson",
        pic: "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJveXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
        bio: "Photographer and foodie."
    },
    {
        name: "matthew Garcia",
        pic: "https://images.unsplash.com/photo-1519764622345-23439dd774f7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym95fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
        bio: "Tech enthusiast and blogger."
    },
    {
        name: "isabella Martinez",
        pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
        bio: "Yoga instructor and wellness advocate."
    },
];

// sare users show krna
// filter krna har baar input krne pe
//   show krna filtered users

let maindiv = document.querySelector('.maindiv');

function showUsers(arr) {

    maindiv.innerHTML = '';

    arr.forEach(function (user) {

        const card = document.createElement('div');
        card.classList.add('card');

        const image = document.createElement('img');
        image.src = user.pic;
        image.classList.add('bg-img')

        const blurLayer = document.createElement('div');
        blurLayer.style.backgroundImage = `url(${user.pic})`;
        blurLayer.classList.add('blurred-layer');

        const content = document.createElement('div');
        content.classList.add('content');

        const h3 = document.createElement('h3');
        h3.textContent = user.name;

        const para = document.createElement('p');
        para.textContent = user.bio;

        // append

        content.appendChild(h3);
        content.appendChild(para);

        card.appendChild(image);
        card.appendChild(blurLayer);
        card.appendChild(content);


        document.querySelector('.maindiv').appendChild(card);

    });

}
showUsers(users);

let searchInp = document.querySelector('#searchInp');

function handleSearch() {

    let filterUser = users.filter((user) => {
        return user.name.toLowerCase().startsWith(searchInp.value.trim().toLowerCase());
    });
    if (filterUser.length === 0) {
        maindiv.innerHTML = `
    <div class="no-users">
        <h3>Sorry! No users found 😔</h3>
        <p>Try searching with a different name.</p>
    </div>
`;

        return;
    }
    showUsers(filterUser);
}

function debounce(func, delay) {
    let timeout; // stores the timer
    return function () {
        clearTimeout(timeout);       // stop the previous timer
        timeout = setTimeout(func, delay); // start a new timer
    }
}

// searchInp.addEventListener('input',handleSearch)
searchInp.addEventListener('input', debounce(handleSearch, 200));

