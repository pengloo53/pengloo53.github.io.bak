---
title: 技术价值 —— 传统企业信息化转型
date: 2020-05-15
tags: [产品技术之旅,信息化]
---

> 这是《我的产品技术之旅》的系列文章，每篇文章，我都尽量保证是一个完整的故事，但不可避免会有些前后关联，毕竟这是一个成长的过程。

这篇文章继续介绍学习 Node Web 的第二个阶段：解决问题，从单点实际问题出发，规划系统功能，提升效率。

第一阶段仅仅是对开发的练习，并没有去考虑做这个事情的价值，单纯是自己感兴趣，而去学习而已。

后来，接触了一些比较大的项目管理工作，我渐渐感受到，协同办公效率低下所带来的痛苦。于是，为了解决这个问题，我又做了一些尝试。起初是为了解决我自己的问题，后面也对他人产生了一些影响，感觉还是挺有意义的。

### 低效的项目管理
中间有一段时间，部门领导担任一个集团大项目的项目经理，而我为了协助部门领导，承担了一些项目资料收集整理，项目周报，项目文档的一些工作。

那时公司还没有项目管理系统，这些工作的协作，需要借助 office 和 email 等工具来处理，由于项目范围比较大，分为了 5 个小组同时开展工作，每周我都要处理 5 个小组发过来的周报相关内容，然后汇总到一块，交给部门领导审核，最后邮件发送到所有项目成员。

如果只是这样的话，似乎没多大的工作量，关键的问题是：

1. 每个小组并不能够一次性准确的把周报内容提供给你，通常情况下，你的邮件列表是这样的：
   - xxx 小组 —— 周报 v1_20xx-xx-xx
   - yyy 小组 —— 周报 v1
   - aaa 小组 —— 周报 v1
   - yyy 小组 —— 周报 v1.1 更新
   - zzz 小组 —— 周报 v1
   - xxx 小组 —— 周报 v1.1_20xx-xx-xx 更新版
   - bbb 小组 —— 周报 v1
   - xxx 小组 —— 周报 v1.2_20xx-xx-xx 最终版
   - ccc 小组 —— 周报 v1
   - ......
2. 即便你提供了统一的模板，你收到的内容格式依然是五花八门。例如：
   - 对于列表，有的人是这样写的：`1、`，有的人是这样写的：`1.`，甚至有的人这样写：`1。`
   - 对于重点内容，有的人加粗，有的人加大字体，有的人换字体颜色，有的人换底色

这还仅仅只是针对周报的汇总工作，另外，还有 Excel 类，例如：开发清单。更新汇总的时候，更是头疼，当开发团队那边更新了列表，发给你的时候，你却不知道到底哪行更新了什么。

这办公效率，这沟通成本，明明每天都忙得不要不要的，却感觉似乎什么也没干，不禁感叹，时间都去哪了？

这就是办公效率低下，最典型的例子，重复的干着这样的工作，确实有点头疼，所以，我做了一个项目周报系统。

![](/image/the_travel_about_product_and_technology/2020-05-13-21-22-11.png)

由于自己当时技术且时间有限，它的页面很粗糙，功能也不完整，仅仅是满足了我上述工作中的部分痛点诉求，即便这样，也帮我省了很多事。

在基础功能开发完成后，就直接上线了，怀着忐忑的心情，给项目成员发了邮件，让大家将本周的周报，按照这个系统的方式，提交给我。

起初，我以为大家会觉得麻烦，毕竟习惯这东西是很难改变的，但是，用了几周之后，反馈还不错，偶尔还给我提个 Bug 啥的。

这个项目完结之后，我也调离了这个部门，这个系统也就下线了。

再后来，项目组里的一个同事，看到集团在举行 TopCoder 大赛，想要邀请我一块去参加这个活动，参赛作品就拿这个周报系统，我倒是受宠若惊。

但由于新部门的工作有点忙，也就放弃了，我把系统的源代码都给了她，她跟其它同事去参加比赛了。

虽然最后没拿到啥奖，但是，我做的这个系统，真的有人觉得有用，我还是很开心的。

开发这个系统，所使用的技术栈几乎和前一个没有多大的区别，很多功能模块都是直接 copy 的，因为要保证上线速度，早上线一周，就少一周的折磨。

虽然技术能力没有啥提升，但是，意义却是重大的，我开始尝试利用技术的手段，去改变身边的一些工作流程。

### 一次职业选择
来到新的部门，离产品技术更远了，虽然职级晋升了，但却是我职业生涯的至暗时刻。也是在那个时候，让我产生了对未来职业的思考。

在起初的部门里，虽然「内部产品经理」这个岗位没多少成就感，但是，与部门领导以及同事之间的相处，还是非常愉快的。毕竟是我的第一份岗位，从中学到了很多产品经理的基本功。

一晃 3 年过去了，在传统的大企业里，管理岗是唯一的晋升途径。虽然企业明面上说有多条晋升途径，然而，傻子都知道，在这种环境下，走向管理岗，才是最明智的选择。

我算是比较幸运的吧，算是比较早获得晋升资格的。管理职级晋升，谁又会不愿意呢，就算你对管理啥的提不起什么兴趣，但对薪资总在乎吧。

新的岗位不再直接处理一线的业务，更多的是收集信息，汇报以及管理。在这个层面上，很多工作就不再那么具体而单纯，对或错，全凭主观意识。

在新的岗位上，一下子让我接触了太多的「虚」，这个「虚」似乎与我的性格天生不合，一度让我很煎熬，我想做点实际的事情，能直接产生价值的那种，而这个工作，却是在不同部门间、上层下层间，不停的和稀泥。

与直属领导的冲突，点燃了这根导火索，即便被认为是不够成熟，意气用事，我也坚持要离开，下定决心的那种，上面磨磨叽叽，我就自己去争取，最后，我找到了接受我的岗位，直接脱离了原来的组织，甚至是换了行业。

当时，还写了一篇文章：[关键时刻不怯场的勇气](/2018/07/07/change)。

虽然这段经历仅仅只是一次再普通不过的职业选择， 但是，对我后续的发展，还是起了很大的影响。至少能确定的有两点：

1. 企业的管理岗，不是我的方向
2. 产品和技术，是我一直想做的事情，产品范围可能是效率类

### 企业信息化道路
在担任项目管理的工作时，所要面对的是 5 个项目小组，协作起来已经是够麻烦了。

而这个岗位需要协作的范围更广了，我需要与集团内十几家公司的十几个部门协作，从他们那获取我想要的信息，也就是收集别人的数据（包括表格，报告等），然后汇总到一起，最终形成一份资料，提供给上层领导，必要的时候，还要做 PPT 汇报。

不仅需要协作的部门多了，而且所要处理的事项也多了，传统 office + email 的办公方式，带来的不再是麻烦，而是恶心。

当然，我从来都不是一个埋头苦干的人，不出意外，我又开发了一个系统。

![](/image/the_travel_about_product_and_technology/2020-05-13-21-24-33.png)

这个系统的规划初期，是为了把我的所有的线下数据线上化，并提供协同功能，解决我收集汇总数据的繁琐环节。

由于上述「职业选择」的问题，这个系统只实现了一部分功能，我就离开了。

这个系统的开发，从技术成长的角度，有一些进步，如上图所示，我开始套用前端模版了，开发效率和界面视觉上，都有了很大的改善。

说到这，你可能有疑惑，那么多第三方的协作平台，你就不知道用一个？

还真不行，传统就传统在这里，企业内部网络是限制的，云端工具一个也用不了。说是为了保密，但很多时候，都是为了所谓的保密工作而保密。

当然，我并非指保密不重要，但至少需要区分对待，就因为没人去做「区分」这个脏活累活，那么，只能一棒子打死。可是，有些一棒子又打不死，就出现了各种「残废」状态。

有可能你又要问了，这么大的公司，难道不知道这个问题的严重吗，员工效率低下，自然会影响到公司的效益呀。既然不让用第三方，为什么自己不上线一套协作办公的软件平台？

这个问题嘛，得分几点来看：

1. 这个活大多是基层员工干的，领导层根本感知不到，领导只知道什么时候要报告，至于你是加班加点整理出来的，还是系统一键导出的，跟他又有什么关系
2. 领导也没有那么不堪，趋势还是能看到的，规划肯定是有了，至于实施嘛，就没那么着急了，毕竟不是战略性指标，你看现在那些互联网巨头，最开始还不是都用的第三方的，后面才自主研发的
3. 自主研发基本没戏，主营业务不是这个方向，也没那个能力，采购回来的吧，又是各种水火不融，而我们又非要死守着那点固有习惯，一点不适应就嗷嗷叫，很多系统即便部署上了，使用频次也不高，我记得当时的 KM 系统就是这样的状态

所以，综上所述，传统大企业的信息化转型道路，走得非常的艰难。

我在公司的这段时期，刚好经历了转型的这个过程，有趣的是，我前面刚做了知识库的小站点，集团就上线了 KM 以及 3KS 系统；我刚做完项目周报收集的系统，我们组织就成立了一个 PM（项目管理）系统的项目，第二年就上线了。

当然，这只是巧合，我开发的这些小 demo，自然不能够跟市场中成熟的专业产品相提并论，但从中能看出来，传统行业信息化转型，企业内部协同办公是一个急需提升效率的方向。