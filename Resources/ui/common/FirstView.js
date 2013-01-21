//FirstView Component Constructor
function FirstView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView({layout:"vertical"});
	
	//label using localization-ready strings from <app dir>/i18n/en/strings.xml
	var label = Ti.UI.createLabel({
		color:'#000000',
		text:String.format(L('welcome'),'Titanium'),
		height:'auto',
		width:'auto'
	});
	self.add(label);
	
	//Add behavior for UI
	label.addEventListener('click', function(e) {
		alert(e.source.text);
	});
	
	
	//----------------------
	//	通常のボタン
	//----------------------
	//ビュー（コンテナ）
	var normalButtonView = Ti.UI.createView({
		layout:"horizontal",
		borderWidth:1,
		height:Ti.UI.SIZE,
		width:Ti.UI.SIZE,
	})
	self.add(normalButtonView);
	//ボタン
	var button = Ti.UI.createButton({
		title:"button",
		backgroundImage:"image/icon01.png",
	 	backgroundSelectedImage:"image/icon02.png",
		backgroundDisabledImage:"image/icon03.png",
		backgroundFocusedImage:"image/icon04.png",//Android専用のプロパティ
		height:64,
		width:64,
		layout:"composite"
	})
	normalButtonView.add(button);
	button.addEventListener('click', function(e) {
		alert(e.source.title);
	});
	//ラベル
	var label = Ti.UI.createLabel({
		text:"通常のボタン",
		layout:"composite",
		borderWidth:1,
		width:Ti.UI.SIZE,
	})
	normalButtonView.add(label);
	

	//----------------------
	//	無効化されたボタン
	//----------------------
	//ビュー（コンテナ）
	var disableButtonView = Ti.UI.createView({
		layout:"horizontal",
		borderWidth:1,
		height:Ti.UI.SIZE,
	})
	self.add(disableButtonView);
	//ボタン
	var button2 = Ti.UI.createButton({
		title:"button2",
		backgroundImage:"image/icon01.png",
	 	backgroundSelectedImage:"image/icon02.png",
		backgroundDisabledImage:"image/icon03.png",
		backgroundFocusedImage:"image/icon04.png",//Android専用のプロパティ
		height:64,
		width:64,
		enabled:false
	})
	disableButtonView.add(button2);
	button2.addEventListener('click', function(e) {
		alert(e.source.title);
	});
	//ラベル
	var label = Ti.UI.createLabel({
		text:"通常のボタン"
	})
	disableButtonView.add(label);
	
	return self;
}

module.exports = FirstView;
