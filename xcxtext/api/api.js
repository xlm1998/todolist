 
 const apikey='0b2bdeda43b5688921839c8ecb20399b'


module.exports={
    move250:`https://api.douban.com/v2/movie/top250?apikey=${apikey}`,
    hotmove:`https://api.douban.com/v2/movie/in_theaters?apikey=${apikey}`,
    shangmove:`https://api.douban.com/v2/movie/coming_soon?apikey=${apikey}`,
    details:`https://api.douban.com/v2/movie/subject/:id?apikey=${apikey}`
}