__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "my",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 6
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "my",
              "optional": false,
              "typeAnnotation": null,
              "start": 9,
              "end": 11
            },
            "operator": "||",
            "right": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 15,
              "end": 17
            },
            "start": 9,
            "end": 17
          },
          "definite": false,
          "start": 4,
          "end": 17
        }
      ],
      "declare": false,
      "start": 0,
      "end": 18
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "my",
            "optional": false,
            "typeAnnotation": null,
            "start": 19,
            "end": 21
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "app",
            "optional": false,
            "typeAnnotation": null,
            "start": 22,
            "end": 25
          },
          "optional": false,
          "computed": false,
          "start": 19,
          "end": 25
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "my",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 30
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "app",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 34
            },
            "optional": false,
            "computed": false,
            "start": 28,
            "end": 34
          },
          "operator": "||",
          "right": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 38,
            "end": 40
          },
          "start": 28,
          "end": 40
        },
        "start": 19,
        "end": 40
      },
      "directive": null,
      "start": 19,
      "end": 41
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "my",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 45
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "app",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 49
            },
            "optional": false,
            "computed": false,
            "start": 43,
            "end": 49
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Application",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 61
          },
          "optional": false,
          "computed": false,
          "start": 43,
          "end": 61
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Application",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 83,
                        "end": 94
                      },
                      "init": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 109,
                          "end": 122
                        },
                        "expression": false,
                        "start": 97,
                        "end": 122
                      },
                      "definite": false,
                      "start": 83,
                      "end": 122
                    }
                  ],
                  "declare": false,
                  "start": 79,
                  "end": 123
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Application",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 131,
                    "end": 142
                  },
                  "start": 124,
                  "end": 143
                }
              ],
              "start": 77,
              "end": 145
            },
            "expression": false,
            "start": 65,
            "end": 145
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 64,
          "end": 148
        },
        "start": 43,
        "end": 148
      },
      "directive": null,
      "start": 43,
      "end": 149
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "my",
              "optional": false,
              "typeAnnotation": null,
              "start": 150,
              "end": 152
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "app",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 156
            },
            "optional": false,
            "computed": false,
            "start": 150,
            "end": 156
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Application",
            "optional": false,
            "typeAnnotation": null,
            "start": 157,
            "end": 168
          },
          "optional": false,
          "computed": false,
          "start": 150,
          "end": 168
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 150,
        "end": 170
      },
      "directive": null,
      "start": 150,
      "end": 170
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 171
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "min",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 7
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "window",
                "optional": false,
                "typeAnnotation": null,
                "start": 10,
                "end": 16
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "min",
                "optional": false,
                "typeAnnotation": null,
                "start": 17,
                "end": 20
              },
              "optional": false,
              "computed": false,
              "start": 10,
              "end": 20
            },
            "operator": "||",
            "right": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 24,
              "end": 26
            },
            "start": 10,
            "end": 26
          },
          "definite": false,
          "start": 4,
          "end": 26
        }
      ],
      "declare": false,
      "start": 0,
      "end": 27
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "min",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 31
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "app",
            "optional": false,
            "typeAnnotation": null,
            "start": 32,
            "end": 35
          },
          "optional": false,
          "computed": false,
          "start": 28,
          "end": 35
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "min",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 41
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "app",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 45
            },
            "optional": false,
            "computed": false,
            "start": 38,
            "end": 45
          },
          "operator": "||",
          "right": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 49,
            "end": 51
          },
          "start": 38,
          "end": 51
        },
        "start": 28,
        "end": 51
      },
      "directive": null,
      "start": 28,
      "end": 52
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "min",
              "optional": false,
              "typeAnnotation": null,
              "start": 54,
              "end": 57
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "app",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 61
            },
            "optional": false,
            "computed": false,
            "start": 54,
            "end": 61
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Application",
            "optional": false,
            "typeAnnotation": null,
            "start": 62,
            "end": 73
          },
          "optional": false,
          "computed": false,
          "start": 54,
          "end": 73
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Application",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 95,
                        "end": 106
                      },
                      "init": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 121,
                          "end": 134
                        },
                        "expression": false,
                        "start": 109,
                        "end": 134
                      },
                      "definite": false,
                      "start": 95,
                      "end": 134
                    }
                  ],
                  "declare": false,
                  "start": 91,
                  "end": 135
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Application",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 143,
                    "end": 154
                  },
                  "start": 136,
                  "end": 155
                }
              ],
              "start": 89,
              "end": 157
            },
            "expression": false,
            "start": 77,
            "end": 157
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 76,
          "end": 160
        },
        "start": 54,
        "end": 160
      },
      "directive": null,
      "start": 54,
      "end": 161
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "min",
              "optional": false,
              "typeAnnotation": null,
              "start": 162,
              "end": 165
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "app",
              "optional": false,
              "typeAnnotation": null,
              "start": 166,
              "end": 169
            },
            "optional": false,
            "computed": false,
            "start": 162,
            "end": 169
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Application",
            "optional": false,
            "typeAnnotation": null,
            "start": 170,
            "end": 181
          },
          "optional": false,
          "computed": false,
          "start": 162,
          "end": 181
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 162,
        "end": 183
      },
      "directive": null,
      "start": 162,
      "end": 183
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 183
}
```
