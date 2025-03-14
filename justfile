# Copied from oxc-project/oxc/justfile
[unix]
clone-submodule dir url sha:
  cd {{dir}} || git init {{dir}}
  cd {{dir}} && git remote add origin {{url}} || true
  cd {{dir}} && git fetch --depth=1 origin {{sha}} && git reset --hard {{sha}} && git clean -f -q

[windows]
clone-submodule dir url sha:
  if (-not (Test-Path {{dir}}/.git)) { git init {{dir}} }
  cd {{dir}} ; if ((git remote) -notcontains 'origin') { git remote add origin {{url}} } else { git remote set-url origin {{url}} }
  cd {{dir}} ; git fetch --depth=1 origin {{sha}} ; git reset --hard {{sha}} ; git clean -f -q
