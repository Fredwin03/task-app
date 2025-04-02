export const timeAgo = (created: string) => {
    const currentTime = Date.now();
    const createdTime = new Date(created).getTime();
  
    let duration = (currentTime - createdTime) / (1000 * 60 * 60 * 24 * 365);
    if (duration >= 1) return Math.floor(duration) == 1 ? Math.floor(duration) + " year ago" : Math.floor(duration) + " years ago";
  
    duration = (currentTime - createdTime) / (1000 * 60 * 60 * 24 * 30);
    if (duration >= 1) return Math.floor(duration) == 1 ? Math.floor(duration) + " month ago" : Math.floor(duration) + " months ago";
  
    duration = (currentTime - createdTime) / (1000 * 60 * 60 * 24 * 7);
    if (duration >= 1) return Math.floor(duration) == 1 ? Math.floor(duration) + " week ago" : Math.floor(duration) +  "weeks ago";
  
    duration = (currentTime - createdTime) / (1000 * 60 * 60 * 24);
    if (duration >= 1) return Math.floor(duration) == 1 ? Math.floor(duration) + " day ago" : Math.floor(duration) + " days ago";
  
    duration = (currentTime - createdTime) / (1000 * 60 * 60);
    if (duration >= 1) return Math.floor(duration) == 1 ? Math.floor(duration) + " hour ago" : Math.floor(duration) + " hours ago";
  
    return "Just now";
  };