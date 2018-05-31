#!/bin/bash  
git add .  
read -p "Commit description: " desc  
git commit -m "$desc" 
git push origin master
echo -n "Your site has been updated. Please wait a few minutes and do a hard refresh so see changes."