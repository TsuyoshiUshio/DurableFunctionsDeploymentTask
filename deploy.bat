copy deployready.js deployready
copy taskmod.js deployready

IF EXIST deployready\node_modules (
    RD /s /q deployready\node_modules
)
xcopy /Y /I /S node_modules deployready\\node_modules

IF EXIST deploytostaging\node_modules (
    RD /s /q deploytostaging\node_modules
)
xcopy /Y /I /S node_modules deploytostaging\\node_modules

IF EXIST swap\node_modules (
    RD /s /q swap\node_modules
)
xcopy /Y /I /S node_modules swap\\node_modules


IF EXIST cleanup\node_modules (
    RD /s /q cleanup\node_modules
)
xcopy /Y /I /S node_modules cleanup\\node_modules