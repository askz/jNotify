function rand() {
  return Math.random();
}


function notify     (title, body) {
    tag = rand();
    if (!'Notification' in window) {
        console.log('Unsupported browser lol.');
        return;
    }

    console.log(Notification.permission);
    if (Notification.permission === 'default') {
        Notification.requestPermission(function () {
            notify();
        });
    }
    else if (Notification.permission === 'granted') {
        var n = new Notification(
                    title,
                    {
                      'body': body + '\n' + tag,
                      'tag' : tag
                    }
                );
        n.onshow = function () {
            console.log('Just showed up!');
        }

        n.onerror = function () {
            console.log('Cannot present notification :(');
        }

        n.onclick = function () {
            console.log('Clicked!');
            this.close();
        };

        n.onclose = function () {
            console.log('Notification closed');
        };
    }
    
    else if (Notification.permission === 'denied') {
        console.log('Notification permission = denied');
        return;
    }
};

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
};

function  waitingForNews(refreshTime)
{
    while (true)
    {

        var t = refreshTime * 1000;
        sleep(t);
    }
};