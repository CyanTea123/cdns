document.addEventListener('DOMContentLoaded', function() {
    // 表单提交处理
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('感谢您的留言！我们将尽快回复您。');
        this.reset();
    });
});