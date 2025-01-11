import React, { useState } from 'react';

const CommentsSection = () => {
  const [comments, setComments] = useState([
    {
      author: 'John Doe',
      time: '2 hours ago',
      body: "This is a sample comment. It's great to see how HTML and CSS come together to create beautiful pages."
    },
    {
      author: 'Jane Smith',
      time: '1 day ago',
      body: "I totally agree! It's amazing how simple and powerful HTML and CSS are for web design."
    },
    {
      author: 'Alice Johnson',
      time: '3 days ago',
      body: "Great example! The layout and styling are clean and easy to follow."
    },
    {
      author: 'Bob Brown',
      time: '1 week ago',
      body: "Nice work! I would love to see more examples of how CSS can be used in creative ways."
    },
  ]);

  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        { author: 'Anonymous', time: 'Just now', body: newComment },
      ]);
      setNewComment('');
    }
  };

  return (
    <div className="bg-gray-100 p-8">
      <div className="comment-section bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold text-center mb-4">Comments</h2>

        {/* Comment input */}
        <div className="mb-4">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md mb-2"
            placeholder="Add a comment..."
            rows="4"
          />
          <button
            onClick={handleAddComment}
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
          >
            Post Comment
          </button>
        </div>

        {/* Display comments */}
        <div>
          {comments.length === 0 ? (
            <p className="text-gray-500">No comments yet. Be the first to comment!</p>
          ) : (
            comments.map((comment, index) => (
              <div key={index} className="comment border-b border-gray-200 py-4 last:border-b-0">
                <div className="comment-header font-bold text-gray-900">
                  {comment.author} <span className="comment-time text-sm text-gray-500">{comment.time}</span>
                </div>
                <div className="comment-body text-gray-700 mt-2">
                  {comment.body}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentsSection;
