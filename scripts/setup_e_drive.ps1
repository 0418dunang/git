$ErrorActionPreference = "Stop"

$resourceRoot = "E:\oldcare-resources"
$pythonRoot = Join-Path $resourceRoot "python"
$cacheRoot = Join-Path $resourceRoot "cache"
$dataRoot = Join-Path $resourceRoot "data"
$modelRoot = Join-Path $resourceRoot "models"

New-Item -ItemType Directory -Force -Path $resourceRoot, $pythonRoot, $cacheRoot, $dataRoot, $modelRoot | Out-Null

$env:OLDCARE_RESOURCE_ROOT = $resourceRoot
$env:PIP_CACHE_DIR = Join-Path $cacheRoot "pip"
$env:HF_HOME = $modelRoot
$env:TRANSFORMERS_CACHE = Join-Path $modelRoot "transformers"

$conda = Get-Command conda -ErrorAction SilentlyContinue
$pythonPath = Join-Path $pythonRoot "env\python.exe"
if ($conda -and -not (Test-Path $pythonPath)) {
  conda create -y -p (Join-Path $pythonRoot "env") python=3.11 pip
}

if (-not (Test-Path $pythonPath)) {
  $pythonPath = (Get-Command python -ErrorAction Stop).Source
}

& $pythonPath -m pip install --cache-dir $env:PIP_CACHE_DIR -r (Join-Path $PSScriptRoot "..\backend\requirements.txt")
Write-Host "Resource root: $resourceRoot"
Write-Host "Python: $pythonPath"
Write-Host "Model cache: $env:HF_HOME"
