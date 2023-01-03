# 1.Nodejs setup:
To setup node we will start setup nvm (Node Version Manager) using brew, follow these steps:

Make sure that you have brew installed on your system. You can check this by running the following command:

```python
brew --version
```
If brew is not installed, you can install it by following the instructions at https://brew.sh/.

Install nvm using brew:

```python
brew install nvm
```
This will install nvm and add it to your $PATH.

Open a new terminal window or source the ~/.bashrc or ~/.zshrc file to enable nvm:

```python
source ~/.bashrc
```

Verify that nvm has been installed correctly by running the following command:

```python
nvm --version
```
This should print the version number of nvm that you have installed.

Install the version of Node.js that you want to use with nvm. For example, to install the latest version of Node.js, you can run the following command:

```python
nvm install node
```
You can also specify a specific version of Node.js to install. For example, to install version 16.14.1, you can run:

```python
nvm install 16.14.1
```
That's it! You should now have nvm set up on your system, and you can use it to manage multiple versions of Node.js.

To switch between different versions of Node.js, you can use the nvm use command. For example, to switch to the version of Node.js that you installed in step 5, you can run:

```python
nvm use node
```

You can also set a default version of Node.js to use when you open new terminal windows. To do this, you can use the nvm alias command. For example, to set the latest version of Node.js as the default, you can run:

```python
nvm alias default node
```


# 2. npm and package.json
Package.json is a file that contains metadata about a project in the JavaScript programming language. It is usually located in the root directory of a project and contains information such as the project's name, version, description, and a list of its dependencies.
```python
npm init -y
```
