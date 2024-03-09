async function fetchProfileData(){
    const url = "https://raw.githubusercontent.com/Alochio/iphoneAPI/main/data/profile.json";
    const fetching = await fetch(url);
    return await fetching.json();
}
