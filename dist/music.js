const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: truet,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    audio: [{
            name: '世间美好与你环环相扣',
            artist: 'artist1',
            url: '//music.163.com/outchain/player?type=2&id=1399534395&auto=1&height=66',
            cover: 'https://ae01.alicdn.com/kf/H036acf4ce24d4f16b595af39e40aace9w.jpg',
        },
        {
            name: 'name2',
            artist: 'artist2',
            url: 'url2.mp3',
            cover: 'cover2.jpg',
        }
    ]
});