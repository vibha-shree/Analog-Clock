setInterval(() => {
      let d = new Date();
      let htime = d.getHours();
      let mtime = d.getMinutes();
      let stime = d.getSeconds();
      hrotation = 30*htime + mtime/2;
      mrotation = 6*mtime;
      srotation = 6*stime;
hour.style.transform = `rotateZ(${hrotation}deg)`;
minute.style.transform = `rotateZ(${mrotation}deg)`;
second.style.transform = `rotateZ(${srotation}deg)`;
}, 1000);
