var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('zhihu', { title: 'ZHIHU TOP' });
});

router.get('/users/:name',function(req,res,next){
	var name = req.params.name.toLowerCase();
	var subtitle = '';
	switch(name){
		case 'top_thanked_count':
			subtitle='TOP Thanked COUNT';
		break;
		default:
			throw new Error('该文章不存在');
		break;
	}
	res.render('zhihu_users',{title:'zhihu users ',subtitle: subtitle,name: name});
});

module.exports = router;
