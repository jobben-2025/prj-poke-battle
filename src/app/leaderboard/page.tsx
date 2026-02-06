import React from 'react';

import { getLeaderboard } from '../lib/leaderboard';

export default async function LeaderboardPage() {
  const scores = await getLeaderboard();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Top Scores</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b text-left">
            <th className="p-2">Rank</th>
            <th className="p-2">User</th>
            <th className="p-2 text-right">Score</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((row, index) => (
            <tr key={row._id} className="border-b hover:bg-gray-50">
              <td className="p-2">{index + 1}</td>
              <td className="p-2">{row.username}</td>
              <td className="p-2 text-right font-mono">{row.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}