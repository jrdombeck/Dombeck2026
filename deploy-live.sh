#!/bin/bash
set -e
echo "=== Deploying LongForm AI ==="
cd /home/team/web
echo "=== npm install vercel ==="
npm install -g vercel 2>&1 | tail -5
echo "=== vercel deploy ==="
vercel --prod --yes 2>&1