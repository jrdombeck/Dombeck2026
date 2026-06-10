#!/bin/bash
echo "=== Current user ==="
whoami
echo "=== Git check ==="
git --version 2>&1 || echo "Git not available"
echo "=== Vercel check ==="
which vercel 2>&1 || echo "Vercel not available"
echo "=== Node check ==="
node --version 2>&1 || echo "Node not available"
echo "=== npm check ==="
npm --version 2>&1 || echo "npm not available"
echo "=== Web dir ==="
ls -la /home/team/web/
echo "=== Team legal ==="
ls -la /home/team/shared/legal/