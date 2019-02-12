const express = require('express');
const router = express.Router();
const Post = require('../../models/post');

router.get('/', (req, res) => {
    Post.find({},(err,post)=>{
        if(err) throw err;
        return res.render('home',{
            posts:post
        });
    })
   
});
router.get('/save', (req, res) => {
    let newPost = new Post({
        title:'another post',
        content : `<p>This blog post shows a few different types of content that’s supported and styled with Bootstrap.
        Basic typography, images, and code are all supported.</p>
    <hr>
    <p>Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur ridiculus
        mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere
        consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
    <blockquote>
        <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare
            vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
    </blockquote>
    <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet
        fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
    <h2>Heading</h2>
    <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo
        luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac
        consectetur ac, vestibulum at eros.</p>
    <h3>Sub-heading</h3>
    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
    <pre><code>Example code block</code></pre>
    <p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce
        dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>
    <h3>Sub-heading</h3>
    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia
        bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus,
        tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
    <ul>
        <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
        <li>Donec id elit non mi porta gravida at eget metus.</li>
        <li>Nulla vitae elit libero, a pharetra augue.</li>
    </ul>
    <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
    <ol>
        <li>Vestibulum id ligula porta felis euismod semper.</li>
        <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
        <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
    </ol>
    <p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>`,
        slug:'another-post',
        img:'https://roocket.ir/public/image/2018/1/21/1516505980bootstrap4-cover-1.jpg'
    });
    newPost.save((err)=>{
        if(err) throw(err);
        res.send('Saved!');
    })
});
router.get('/post/:postName', (req, res) => {
    Post.findOne({slug:req.params.postName},(err,content)=>{

        if(err) throw err;
        return res.render('post',{
            post:content
        });
    })
});

module.exports = router;