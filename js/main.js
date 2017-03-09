$(function(){

	var showFriends = (function(){
		var btnShow = $('.btn-show');

		// при натисненні на кнопку .btn-show
		btnShow.click(function(){
			var btnShowI = $('.btn-show>i');

			// зміна стрілки на праву і навпаки
			btnShowI.toggleClass('fa-angle-left').toggleClass('fa-angle-right');
			
		});
	})();






}) // end ready