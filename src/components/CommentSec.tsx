import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

interface Comment {
  id: string;
  author: string;
  text: string;
}

interface CommentSecProps {
  postId: string;
}

export default function CommentSection({ postId }: CommentSecProps) {
  const [comments, setComment] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [editCommentId, setEditCommentId] = useState<string | null>(null);

  const handleAddComment = () => {
    if (newComment.trim() && authorName.trim()) {
      const newCommentObj: Comment = {
        id: new Date().toISOString(),
        author: authorName,
        text: newComment,
      };
      setComment([...comments, newCommentObj]);
      setNewComment("");
      setAuthorName("");
    }
  };

  const handleEditComment = (commentID: string) => {
    const commentToEdit = comments.find((comment) => comment.id === commentID);
    if (commentToEdit) {
      setAuthorName(commentToEdit.text);
      setAuthorName(commentToEdit.author);
      setEditCommentId(commentID);
    }
  };

  const handleSaveEditComment = () => {
    if (newComment.trim() && authorName.trim() && editCommentId) {
      const updatedComments = comments.map((comments) =>
        comments.id === editCommentId
          ? { ...comments, text: newComment, author: authorName }
          : comments
      );
      setComment(updatedComments);
      setNewComment("");
      setAuthorName("");
      setEditCommentId(null);
    }
  };

  return (
    <div className="mt-8 m-3">
      <h2 className="text-2xl ml-3 font-semibold">Comments</h2>
      <div className="mt-4 space-y-4">
        {comments.length > 0 ? (
          comments.map((comments) => (
            <Card key={comments.id}>
              <CardContent className="p-4">
                <div className="font-semibold">{comments.author}</div>
                <p>{comments.text}</p>
                <Button
                  onClick={() => handleEditComment(comments.id)}
                  className="mt-2 text-blue-500"
                  asChild={null}
                >
                  Edit
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-slate-400 m-3">No Comment Yet</p>
        )}
      </div>
      <div className="mt-6 m-3">
        <Input
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          placeholder="Your Name"
          className="w-full border-gray-300 mb-2"
        />
      </div>
      <div className="mt-6 m-3">
        <Input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
          className="w-full border-gray-300 mb-2"
        />
        <Button
          onClick={editCommentId ? handleSaveEditComment : handleAddComment}
          className="mt-4 bg-blue-500 text-white ml-5"
          asChild={null}
        >
          {editCommentId ? "Save" : "Submit"}
        </Button>
      </div>
    </div>
  );
}
