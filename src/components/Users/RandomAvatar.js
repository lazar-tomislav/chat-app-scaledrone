export default function randomAvatar () {
    const avatars = [
        "/assets/images/SCR-20230724-mist.png",
        "/assets/images/SCR-20230724-mivs.png",
        "/assets/images/SCR-20230724-miwx.png",
        "/assets/images/SCR-20230724-mixz.png",
        "/assets/images/SCR-20230724-mizm.png",
        "/assets/images/SCR-20230724-mjaz.png",
    ];
    const avatar = avatars[Math.floor(Math.random() * avatars.length)];
    return avatar;
  };
  

  