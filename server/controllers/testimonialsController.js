const path = require('path')
class Testimonials{
    getAll(req,res){
        console.log("!")
        return res.json(
            [ {image:"../image/testimonialst/testimonialst-1.jpg",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum id magnam nisi qui voluptate. Debitis earum ex laboriosam laudantium praesentium quaerat quia quisquam rem sed tempore. Corporis earum, eius exercitationem, minima molestias nemo nisi obcaecati quae quis quisquam similique voluptates! Blanditiis distinctio ea eos est iste laborum quia rerum voluptatem."
            ,name:"Петрова А.А.",position:"Директор компании DDDD"},
            {image:"../image/testimonialst/testimonialst-2.jpg",text:"sdfaaaaaaaaaaaaaaaaaaaaaaaaafffffff",name:"Иванов Д.Д.",position:" Директор компании DDDD"}
            ]
        )
    }
}

module.exports = new Testimonials();