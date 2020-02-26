# 外卖小程序
## 需求描述
某快餐品牌推出了它独家的外卖应用，用户可以在手机上直接下单。该应用会根据用户选择的菜品(Item)、数量(Count)和优惠方式(Sales Promotion)进行计算，告诉用户需要支付的金额(Charge)。

优惠活动有多种形式。假设用户一次只能使用一种优惠，那么使用哪种优惠省钱最多就会是一个让用户头疼的问题。所以该外卖应用为了方便用户，在用户下单时，会自动选择最优惠的方式并计算出最终金额让用户确认。

我们需要实现一个名为bestCharge的函数，它能够接收用户选择的菜品和数量（以特定格式呈现）作为输入，然后返回计算后的汇总信息。

**已知：**

* 该店的菜品每一个都有一个唯一的id

* 当前的优惠方式有:

  * 满30减6元
  * 指定菜品半价

* 除菜品外没有其它收费（如送餐费、餐盒费等）

* 如果两种优惠方式省钱一样多，则使用前一种优惠方式


### 下面是测试案例：

#### AC1: Input

```
ITEM0001 x 1,ITEM0013 x 2,ITEM0022 x 1
```

#### Output

```
============= 订餐明细 =============
黄焖鸡 x 1 = 18元
肉夹馍 x 2 = 12元
凉皮 x 1 = 8元
-----------------------------------
使用优惠:
指定菜品半价(黄焖鸡，凉皮)，省13元
-----------------------------------
总计：25元
===================================
```



#### AC2: Input

```
ITEM0013 x 4,ITEM0022 x 1
```

#### Output

```
============= 订餐明细 =============
肉夹馍 x 4 = 24元
凉皮 x 1 = 8元
-----------------------------------
使用优惠:
满30减6元，省6元
-----------------------------------
总计：26元
===================================
```



#### AC3: Input

```
ITEM0013 x 4
```

#### Output

```
============= 订餐明细 =============
肉夹馍 x 4 = 24元
-----------------------------------
总计：24元
===================================
```



## 项目说明：

#### 1. 文件及文件夹说明：

* **spec:** 该文件夹为测试所在文件夹，里面包含了项目的所有单元测试的文件。
* **SRC：** 该文件为源码所在文件，里面是外卖小程序的所有源代码。
* **best-charge.js: ** 该文件为外卖小程序的入口文件。
* **requirement.md: **  该文件提供了为完成该程序所需要的所有知识点以及相关学习资料。
* **package.json: ** 包含该项目的一些说明，依赖的资源库和运行该程序的命令等。

#### 2. 分支说明：

* **master: ** 该分支为未实现分支，主要包括了所有测试和部分已实现的脚手架代码，您需要基于此分支进行开发。
* **answer: ** 该分支已经实现外卖小程序，源代码全部包含在src文件夹中，如果您在master分支上面实现功能时遇到了困难，您可以切换到该分支上面进行参考。

