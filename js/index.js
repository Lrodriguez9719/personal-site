const SERVER_URL = 'https://video-streaming.live';

async function loadVideos() {
  const container = document.getElementById('videoContainer');

  try {
    const response = await fetch(`${SERVER_URL}/videos`);
    const videos = await response.json();

    container.innerHTML = '';

    videos.forEach(video => {
      // Create card HTML structure
      const card = document.createElement('div');
      card.className = 'video-card';

      card.innerHTML = `
                        <div class="video-wrapper">
                            <video controls preload="metadata">
                                <source src="${SERVER_URL}/video/${video.filename}" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div class="video-info">
                            <div class="video-title">${video.title}</div>
                            <div style="color: var(--text-secondary); font-size: 0.9rem;">${video.artist}</div>
                            <span class="tag">${video.description || 'Music Video'}</span>
                        </div>
                    `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error('Error loading videos:', error);
    container.innerHTML = '<p>Error connecting to video server.</p>';
  }
}

document.addEventListener('DOMContentLoaded', loadVideos);