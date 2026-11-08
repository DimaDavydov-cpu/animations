/* Penta Sketch: the built-in asset library. Files come from the repo's ../Assets folder;
 * w / h are the size an asset is dropped at (@2x images are listed at half size). */
(function () {
  const PS = (window.PS = window.PS || {});
  PS.LIBRARY = [
    {"id": "fiverr-logo", "name": "Fiverr logo", "group": "Brand", "src": "../Assets/Fiverr_logo.svg", "w": 120, "h": 36},
    {"id": "top-rated", "name": "Top rated badge", "group": "Brand", "src": "../Assets/top_rated.svg", "w": 119, "h": 20},
    {"id": "vetted-pro", "name": "Vetted Pro badge", "group": "Brand", "src": "../Assets/vetted_pro.svg", "w": 85, "h": 20},
    {"id": "level-2", "name": "Level 2 badge", "group": "Brand", "src": "../Assets/level2.svg", "w": 86, "h": 20},
    {"id": "beta", "name": "Beta tag", "group": "Brand", "src": "../Assets/beta.svg", "w": 43, "h": 20},
    {"id": "search", "name": "Search", "group": "Icons", "src": "../Assets/search.svg", "w": 16, "h": 16},
    {"id": "star", "name": "Star", "group": "Icons", "src": "../Assets/star.svg", "w": 16, "h": 16},
    {"id": "star-outlined", "name": "Star outlined", "group": "Icons", "src": "../Assets/star-outlined.svg", "w": 16, "h": 16},
    {"id": "loved", "name": "Loved", "group": "Icons", "src": "../Assets/loved.svg", "w": 16, "h": 16},
    {"id": "info", "name": "Info", "group": "Icons", "src": "../Assets/info.svg", "w": 16, "h": 16},
    {"id": "help", "name": "Help", "group": "Icons", "src": "../Assets/help.svg", "w": 16, "h": 16},
    {"id": "history", "name": "History", "group": "Icons", "src": "../Assets/history.svg", "w": 24, "h": 24},
    {"id": "inbox", "name": "Inbox", "group": "Icons", "src": "../Assets/inbox.svg", "w": 16, "h": 16},
    {"id": "notifications", "name": "Notifications", "group": "Icons", "src": "../Assets/notifications.svg", "w": 16, "h": 16},
    {"id": "envelope", "name": "Envelope", "group": "Icons", "src": "../Assets/envelope.svg", "w": 16, "h": 16},
    {"id": "attach", "name": "Attach", "group": "Icons", "src": "../Assets/attach.svg", "w": 16, "h": 16},
    {"id": "schedule", "name": "Schedule", "group": "Icons", "src": "../Assets/schedule.svg", "w": 16, "h": 16},
    {"id": "tag", "name": "Tag", "group": "Icons", "src": "../Assets/tag.svg", "w": 16, "h": 16},
    {"id": "video", "name": "Video", "group": "Icons", "src": "../Assets/video.svg", "w": 16, "h": 16},
    {"id": "brief", "name": "Brief", "group": "Icons", "src": "../Assets/brief.svg", "w": 16, "h": 16},
    {"id": "briefs", "name": "Briefs", "group": "Icons", "src": "../Assets/briefs.svg", "w": 24, "h": 24},
    {"id": "magic", "name": "Magic", "group": "Icons", "src": "../Assets/magic.svg", "w": 16, "h": 16},
    {"id": "cats", "name": "Categories", "group": "Icons", "src": "../Assets/cats.svg", "w": 16, "h": 16},
    {"id": "close", "name": "Close", "group": "Icons", "src": "../Assets/close.svg", "w": 16, "h": 16},
    {"id": "down", "name": "Chevron down", "group": "Icons", "src": "../Assets/down.svg", "w": 16, "h": 16},
    {"id": "forward", "name": "Forward", "group": "Icons", "src": "../Assets/forward.svg", "w": 16, "h": 16},
    {"id": "reply", "name": "Reply", "group": "Icons", "src": "../Assets/reply.svg", "w": 16, "h": 16},
    {"id": "emoji", "name": "Emoji", "group": "Icons", "src": "../Assets/emojy.svg", "w": 16, "h": 16},
    {"id": "avatar", "name": "Avatar", "group": "Images", "src": "../Assets/Avatar@2x.png", "w": 48, "h": 48},
    {"id": "avatar-2", "name": "Avatar 2", "group": "Images", "src": "../Assets/Avatar2@2x.png", "w": 103, "h": 103},
    {"id": "freelancer-1", "name": "Freelancer 1", "group": "Images", "src": "../Assets/freelancer_1.png", "w": 240, "h": 240},
    {"id": "freelancer-2", "name": "Freelancer 2", "group": "Images", "src": "../Assets/freelancer_2.png", "w": 240, "h": 240},
    {"id": "client-1", "name": "Client 1", "group": "Images", "src": "../Assets/cl_1.png", "w": 219, "h": 220},
    {"id": "client-2", "name": "Client 2", "group": "Images", "src": "../Assets/cl_2.png", "w": 219, "h": 220},
    {"id": "anagrama", "name": "Anagrama", "group": "Images", "src": "../Assets/anagrama.png", "w": 572, "h": 570}
  ];
  PS.libraryAsset = (id) => PS.LIBRARY.find((a) => a.id === id);
})();
