function parse_git_branch {
  git branch --no-color 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/(\1)/'
}

PS1="\[\033[01;35m\]\u@\h:\[\033[01;34m\]\$(parse_git_branch) \[\033[01;32m\]\w \[\033[01;34m\]→\[\e[0m\]"

export GPG_TTY=$(tty)
alias ls="ls -G -g"
alias ll="ls -la"
alias ..="cd .."

eval "$(thefuck --alias)"
source ~/.git-completion.bash

