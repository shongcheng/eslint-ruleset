#!/usr/bin/env bash

INTERVAL_MINUTES=${INTERVAL_MINUTES:-10}
BRANCH="auto-backups/${HOSTNAME}"
BASENAME=$(basename "$PWD")
BACKUP_DIR="../.auto-backups/${BASENAME}"

set -e

mkdir -p "${BACKUP_DIR}"
(cd "${BACKUP_DIR}" && [[ "$(git rev-parse --abbrev-ref HEAD)" == "${BRANCH}" ]] \
  || git checkout -b ${BRANCH} && git push --set-upstream origin "${BRANCH}")
while true
do
  rclone sync . "${BACKUP_DIR}"/ \
    --exclude .auto-backups/ \
    --exclude .git/ \
    --exclude .gradle/ \
    --exclude-from .gitignore
  set +e
  (cd "${BACKUP_DIR}" && pwd && git add . && git commit -m "auto-commit_$(date +"%Y-%m-%d_%H:%M:%S")" \
    && git push \
    ; git log --oneline -1)
  set -e
  pwd
  INTERVAL_SEC=$(( $INTERVAL_MINUTES * 60 ))
  echo "sleeping ${INTERVAL_MINUTES}m..."
  echo
  sleep $INTERVAL_SEC

done
