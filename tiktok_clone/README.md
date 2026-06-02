Logic Play/Pause được tôi xử lý như sau:
- Gọi một biến "observer" có nhiệm vụ quan sát hành vi lướt tới hoặc lướt qua video của người dùng.
- "thresshold" là điều kiện để "observer" biết thế nào là video đang lướt tới hoặc đi, ở bài này tôi để là 0.6 ám chỉ việc video chiếm 60% diện tích màn hình. 
- "entry.isInteresting" có nhiệm vụ kiểm tra video đang đi vào màn hình hay đi ra khỏi màn hình:
    + Nó sẽ trả về một biến Boole mang tên "isIntersecting".
    + Nếu true tức là video được lướt tới đã chiếm trên 60% màn hình => lệnh play "videoRef.current?.play().catch(() => {});" sẽ được thực thi.
    + Nếu false tức là video đã bị lướt qua và chiếm dưới 60% màn hình => lệnh pause "videoRef.current?.pause();" sẽ được thực thi.
    + "if (videoRef.current) videoRef.current.currentTime = 0; " lệnh này để reset lại video về dây đầu tiên sau khi bị lướt qua.
- Lệnh "if (videoRef.current) observer.observe(videoRef.current);" vế đầu để kiểm tra màn hình có đang chạy video không, vế sau là để gia lệnh cho "observer" bắt đầu quan sát trang thái hiển thị của video.
- Lệnh "return () => {if (videoRef.current) observer.unobserve(videoRef.current);};" để gia lệnh cho "observer" ngừng quan sát để không chạy ngầm tránh tốn bộ nhớ.
 