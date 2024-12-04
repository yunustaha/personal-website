/** @type {import('next').NextConfig} */
const nextConfig = {
    //Path'te sayfayi yenilediginde o path'i acmasini sagliyor.
    trailingSlash: true,
    //build alirken static html dosyasi vermesi icin.
    // output: 'export',
    //resimlerin build sonrasi gorunmesi icin.
    // images: {
    //     unoptimized: true
    // },
}

module.exports = nextConfig
