"use client";
import React, { useRef, useState } from "react";

export default function ContainerTransformDemo() {
  const cardRef = useRef(null);
  const [originRect, setOriginRect] = useState(null);
  const [overlay, setOverlay] = useState(null); // {top,left,width,height,radius} or null
  const [showCard, setShowCard] = useState(true);
  const [showDetail, setShowDetail] = useState(false);
  const [animating, setAnimating] = useState(null); // 'opening' | 'closing' | null

  const FULL_PADDING = 40;

  const openDetail = () => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setOriginRect(rect);

    // ẩn card gốc ngay
    setShowCard(false);

    // bắt đầu animation mở
    setAnimating("opening");
    setOverlay({
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
      radius: 9999,
    });

    // animate sang fullscreen (1 frame sau)
    requestAnimationFrame(() => {
      setOverlay({
        top: FULL_PADDING,
        left: FULL_PADDING,
        width: window.innerWidth - FULL_PADDING * 2,
        height: window.innerHeight - FULL_PADDING * 2,
        radius: 24,
      });
    });
  };

  // gọi khi kết thúc transition của overlay
  const onOverlayTransitionEnd = (e) => {
    // chỉ xử lý khi đang animating và một trong các thuộc tính layout kết thúc
    if (!animating) return;
    const prop = e.propertyName;
    if (!["top", "left", "width", "height"].includes(prop)) return;

    if (animating === "opening") {
      // mở xong -> remove overlay, show detail
      setOverlay(null);
      setShowDetail(true);
      setAnimating(null);
      return;
    }

    if (animating === "closing") {
      // đóng xong -> remove overlay, show card
      setOverlay(null);
      setShowCard(true);
      setAnimating(null);
      return;
    }
  };

  const closeDetail = () => {
    if (!originRect) {
      // fallback nếu ko có originRect: hide detail
      setShowDetail(false);
      return;
    }

    // bắt đầu overlay từ fullscreen
    setAnimating("closing");
    setOverlay({
      top: FULL_PADDING,
      left: FULL_PADDING,
      width: window.innerWidth - FULL_PADDING * 2,
      height: window.innerHeight - FULL_PADDING * 2,
      radius: 24,
    });

    // ẩn nội dung detail ngay (nó sẽ không block overlay)
    setShowDetail(false);

    // animate về vị trí origin (1 frame sau)
    requestAnimationFrame(() => {
      setOverlay({
        top: originRect.top,
        left: originRect.left,
        width: originRect.width,
        height: originRect.height,
        radius: 16,
      });
    });
  };

  return (
    <div className="p-8">
      {/* Card gốc */}
      {showCard && (
        <div
          ref={cardRef}
          onClick={openDetail}
          className="w-48 h-32 bg-white rounded-xl shadow-lg cursor-pointer flex items-center justify-center text-white text-lg"
        >
          Card
        </div>
      )}

      {/* Overlay animate (xuất hiện khi đang mở/đóng) */}
      {overlay && (
        <div
          onTransitionEnd={onOverlayTransitionEnd}
          style={{
            position: "fixed",
            top: overlay.top,
            left: overlay.left,
            width: overlay.width,
            height: overlay.height,
            background: "white",
            borderRadius: overlay.radius,
            boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
            transition: "top 400ms cubic-bezier(0.4,0,0.2,1), left 400ms cubic-bezier(0.4,0,0.2,1), width 400ms cubic-bezier(0.4,0,0.2,1), height 400ms cubic-bezier(0.4,0,0.2,1), border-radius 400ms",
            zIndex: 50,
            overflow: "hidden",
          }}
        />
      )}

      {/* Detail view */}
      {showDetail && (
        <div className="fixed inset-10 bg-white rounded-2xl shadow-xl p-6 z-40 flex flex-col">
          <h2 className="text-2xl font-bold mb-4">Detail View</h2>
          <p className="mb-4">Đây là nội dung chi tiết sau khi transform.</p>
          <div className="mt-auto">
            <button
              onClick={closeDetail}
              className="px-4 py-2 bg-red-500 text-white rounded-lg"
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
