var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('zhihu', { title: '知乎榜' });
});

router.get('/users/:name',function(req,res,next){
	var name = req.params.name.toLowerCase();
	var subtitle = '';
	switch(name){
		case 'top_follower_count':
			subtitle='按关注者人数';
		break;
		case 'top_voteup_count':
			subtitle='按获得赞同数';
		break;
		case 'top_thanked_count':
			subtitle='按获得感谢数';
		break;
		case 'top_favorited_count':
			subtitle='按获得收藏数';
		break;
		case 'top_articles_count':
			subtitle='按发表文章数';
		break;
		case 'top_question_count':
			subtitle='按提问数量';
		break;
		case 'top_answer_count':
			subtitle='按回答数量';
		break;
		case 'top_markedanswers_count':
			subtitle='按被收录答案数';
		break;
		default:
			throw new Error('404');
		break;
	}
	res.render('zhihu_users',{title:'知乎用户榜',subtitle: subtitle,name: name});
});

router.get('/answers/:name',function(req,res,next){
	var name = req.params.name.toLowerCase();
	var subtitle = '';
	switch(name){
		case 'top_comment_count':
			subtitle='按关注者人数';
		break;
		case 'top_voteup_count':
			subtitle='按获得赞同数';
		break;
		default:
			throw new Error('404');
		break;
	}
	res.render('zhihu_answers',{title:'知乎用户榜',subtitle: subtitle,name: name});
});

router.get('/articles/:name',function(req,res,next){
	var name = req.params.name.toLowerCase();
	var subtitle = '';
	switch(name){
		case 'top_comment_count':
			subtitle='按关注者人数';
		break;
		case 'top_voteup_count':
			subtitle='按获得赞同数';
		break;
		default:
			throw new Error('404');
		break;
	}
	res.render('zhihu_articles',{title:'知乎用户榜',subtitle: subtitle,name: name});
});

router.get('/favlists/:name',function(req,res,next){
	var name = req.params.name.toLowerCase();
	var subtitle = '';
	switch(name){
		case 'top_follower_count':
			subtitle='按关注者人数';
		break;
		default:
			throw new Error('404');
		break;
	}
	res.render('zhihu_favlists',{title:'知乎用户榜',subtitle: subtitle,name: name});
});

router.get('/questions/:name',function(req,res,next){
	var name = req.params.name.toLowerCase();
	var subtitle = '';
	switch(name){
		case 'top_answer_count':
			subtitle='按关注者人数';
		break;
		case 'top_follower_count':
			subtitle='按获得赞同数';
		break;
		default:
			throw new Error('404');
		break;
	}
	res.render('zhihu_questions',{title:'知乎用户榜',subtitle: subtitle,name: name});
});

router.get('/zhuanlans/:name',function(req,res,next){
	var name = req.params.name.toLowerCase();
	var subtitle = '';
	switch(name){
		case 'top_followers_count':
			subtitle='按获得赞同数';
		break;
		default:
			throw new Error('404');
		break;
	}
	res.render('zhihu_zhuanlans',{title:'知乎用户榜',subtitle: subtitle,name: name});
});

module.exports = router;
