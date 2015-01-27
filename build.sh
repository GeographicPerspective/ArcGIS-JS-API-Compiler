#!/usr/bin/env bash

set -e

# Base directory for this entire project
BASEDIR=$(cd $(dirname $0) && pwd)

# Source directory for unbuilt code
SRCDIR="$BASEDIR/src"

# Directory containing dojo build utilities
TOOLSDIR="$SRCDIR/util/buildscripts"

# Destination directory for built code
DISTDIR="$BASEDIR/dist"

# Main application package build configuration
PROFILE="$BASEDIR/profiles/app.profile.js"

# Configuration over. Main application start up!

if [ ! -d "$TOOLSDIR" ]; then
	echo "Can't find Dojo build tools -- did you initialise submodules? (git submodule update --init --recursive)"
	exit 1
fi

if [ ! -d node_modules ]; then
	echo "Can't find Node.js dependencies -- did you install them? (npm install)"
	exit 1
fi

echo "Building application with $PROFILE to $DISTDIR."

echo -n "Deleting dist folder..."
rm -rf "$DISTDIR"
echo " Done"

echo -n "Creating index.html..."
mkdir "$DISTDIR"
cp "$SRCDIR/index.html" "$DISTDIR/index.html"
echo " Done"

# # Copy & minify index.html to dist
# cat "$SRCDIR/index.html" | \
# perl -pe 's/\/\/.*$//gm;       # Strip JS comments' |
# perl -pe 's/\n/ /g;            # Replace newlines with whitespace' |
# perl -pe 's/<\!--.*?-->//g;    # Strip HTML comments' |
# perl -pe 's/isDebug: *true,//; # Remove isDebug' |
# perl -pe 's/\s+/ /g;           # Collapse whitespace' > "$DISTDIR/index.html"

# echo -n "Compiling css..."
# node_modules/.bin/stylus -c "$SRCDIR/app/resources/app.styl"
# echo " Done"

echo -n "Compiling code..."
"$TOOLSDIR/build.sh" --profile "$PROFILE" --releaseDir "$DISTDIR" $@
echo " Done"
