__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 171,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 18,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 17,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 6,
            "decorators": [],
            "name": "my",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 9,
            "end": 17,
            "left": {
              "type": "Identifier",
              "start": 9,
              "end": 11,
              "decorators": [],
              "name": "my",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "||",
            "right": {
              "type": "ObjectExpression",
              "start": 15,
              "end": 17,
              "properties": []
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 19,
      "end": 41,
      "expression": {
        "type": "AssignmentExpression",
        "start": 19,
        "end": 40,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 19,
          "end": 25,
          "object": {
            "type": "Identifier",
            "start": 19,
            "end": 21,
            "decorators": [],
            "name": "my",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 22,
            "end": 25,
            "decorators": [],
            "name": "app",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "LogicalExpression",
          "start": 28,
          "end": 40,
          "left": {
            "type": "MemberExpression",
            "start": 28,
            "end": 34,
            "object": {
              "type": "Identifier",
              "start": 28,
              "end": 30,
              "decorators": [],
              "name": "my",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 31,
              "end": 34,
              "decorators": [],
              "name": "app",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "operator": "||",
          "right": {
            "type": "ObjectExpression",
            "start": 38,
            "end": 40,
            "properties": []
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 43,
      "end": 149,
      "expression": {
        "type": "AssignmentExpression",
        "start": 43,
        "end": 148,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 43,
          "end": 61,
          "object": {
            "type": "MemberExpression",
            "start": 43,
            "end": 49,
            "object": {
              "type": "Identifier",
              "start": 43,
              "end": 45,
              "decorators": [],
              "name": "my",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 46,
              "end": 49,
              "decorators": [],
              "name": "app",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 50,
            "end": 61,
            "decorators": [],
            "name": "Application",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "CallExpression",
          "start": 64,
          "end": 148,
          "callee": {
            "type": "FunctionExpression",
            "start": 65,
            "end": 145,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 77,
              "end": 145,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 79,
                  "end": 123,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 83,
                      "end": 122,
                      "id": {
                        "type": "Identifier",
                        "start": 83,
                        "end": 94,
                        "decorators": [],
                        "name": "Application",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "FunctionExpression",
                        "start": 97,
                        "end": 122,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 109,
                          "end": 122,
                          "body": []
                        },
                        "expression": false
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ReturnStatement",
                  "start": 124,
                  "end": 143,
                  "argument": {
                    "type": "Identifier",
                    "start": 131,
                    "end": 142,
                    "decorators": [],
                    "name": "Application",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 150,
      "end": 170,
      "expression": {
        "type": "CallExpression",
        "start": 150,
        "end": 170,
        "callee": {
          "type": "MemberExpression",
          "start": 150,
          "end": 168,
          "object": {
            "type": "MemberExpression",
            "start": 150,
            "end": 156,
            "object": {
              "type": "Identifier",
              "start": 150,
              "end": 152,
              "decorators": [],
              "name": "my",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 153,
              "end": 156,
              "decorators": [],
              "name": "app",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 157,
            "end": 168,
            "decorators": [],
            "name": "Application",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 183,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 27,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 26,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "decorators": [],
            "name": "min",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 10,
            "end": 26,
            "left": {
              "type": "MemberExpression",
              "start": 10,
              "end": 20,
              "object": {
                "type": "Identifier",
                "start": 10,
                "end": 16,
                "decorators": [],
                "name": "window",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 17,
                "end": 20,
                "decorators": [],
                "name": "min",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "operator": "||",
            "right": {
              "type": "ObjectExpression",
              "start": 24,
              "end": 26,
              "properties": []
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 28,
      "end": 52,
      "expression": {
        "type": "AssignmentExpression",
        "start": 28,
        "end": 51,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 28,
          "end": 35,
          "object": {
            "type": "Identifier",
            "start": 28,
            "end": 31,
            "decorators": [],
            "name": "min",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 32,
            "end": 35,
            "decorators": [],
            "name": "app",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "LogicalExpression",
          "start": 38,
          "end": 51,
          "left": {
            "type": "MemberExpression",
            "start": 38,
            "end": 45,
            "object": {
              "type": "Identifier",
              "start": 38,
              "end": 41,
              "decorators": [],
              "name": "min",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 42,
              "end": 45,
              "decorators": [],
              "name": "app",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "operator": "||",
          "right": {
            "type": "ObjectExpression",
            "start": 49,
            "end": 51,
            "properties": []
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 54,
      "end": 161,
      "expression": {
        "type": "AssignmentExpression",
        "start": 54,
        "end": 160,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 54,
          "end": 73,
          "object": {
            "type": "MemberExpression",
            "start": 54,
            "end": 61,
            "object": {
              "type": "Identifier",
              "start": 54,
              "end": 57,
              "decorators": [],
              "name": "min",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 58,
              "end": 61,
              "decorators": [],
              "name": "app",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 62,
            "end": 73,
            "decorators": [],
            "name": "Application",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "CallExpression",
          "start": 76,
          "end": 160,
          "callee": {
            "type": "FunctionExpression",
            "start": 77,
            "end": 157,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 89,
              "end": 157,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 91,
                  "end": 135,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 95,
                      "end": 134,
                      "id": {
                        "type": "Identifier",
                        "start": 95,
                        "end": 106,
                        "decorators": [],
                        "name": "Application",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "FunctionExpression",
                        "start": 109,
                        "end": 134,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 121,
                          "end": 134,
                          "body": []
                        },
                        "expression": false
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ReturnStatement",
                  "start": 136,
                  "end": 155,
                  "argument": {
                    "type": "Identifier",
                    "start": 143,
                    "end": 154,
                    "decorators": [],
                    "name": "Application",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 162,
      "end": 183,
      "expression": {
        "type": "CallExpression",
        "start": 162,
        "end": 183,
        "callee": {
          "type": "MemberExpression",
          "start": 162,
          "end": 181,
          "object": {
            "type": "MemberExpression",
            "start": 162,
            "end": 169,
            "object": {
              "type": "Identifier",
              "start": 162,
              "end": 165,
              "decorators": [],
              "name": "min",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 166,
              "end": 169,
              "decorators": [],
              "name": "app",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 170,
            "end": 181,
            "decorators": [],
            "name": "Application",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
