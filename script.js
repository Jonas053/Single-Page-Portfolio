// 小工具: 取得當前年分
document.addEventListener('DOMContentLoaded', function(){
	const y = new Date().getFullYear();
	const el = document.getElementById('year');
	if(el) el.textContent = y;

	// 導覽切換（手機）
	const toggle = document.querySelector('.nav-toggle');
	const nav = document.querySelector('.nav');
	if(toggle && nav){
		toggle.addEventListener('click', function(){
			const expanded = this.getAttribute('aria-expanded') === 'true';
			this.setAttribute('aria-expanded', String(!expanded));
			nav.style.display = expanded ? 'none' : 'flex';
		});
	}

	// 平滑捲動（內部連結）
	document.querySelectorAll('a[href^="#"]').forEach(a=>{
		a.addEventListener('click', function(e){
			const target = document.querySelector(this.getAttribute('href'));
			if(target){
				e.preventDefault();
				target.scrollIntoView({behavior:'smooth',block:'start'});
				// close nav on mobile after click
				if(window.innerWidth <= 700 && nav){nav.style.display='none'; if(toggle) toggle.setAttribute('aria-expanded','false');}
			}
		});
	});
});
