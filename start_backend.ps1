$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$resourceRoot = "E:\oldcare-resources"
if (Test-Path $resourceRoot) {
  $env:OLDCARE_RESOURCE_ROOT = $resourceRoot
  $env:PIP_CACHE_DIR = Join-Path $resourceRoot "cache\pip"
  $env:HF_HOME = Join-Path $resourceRoot "models"
}

$pythonPath = Join-Path $resourceRoot "python\env\python.exe"
if (-not (Test-Path $pythonPath)) {
  $pythonPath = (Get-Command python -ErrorAction Stop).Source
}
& $pythonPath -m uvicorn backend.main:app --host 127.0.0.1 --port 8000 --app-dir $root
