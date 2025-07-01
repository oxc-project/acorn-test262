__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Rectangle",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 15
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 33
            },
            "value": {
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 46,
                          "end": 53
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 54,
                          "end": 57
                        },
                        "optional": false,
                        "computed": false,
                        "start": 46,
                        "end": 57
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "I'm a rectangle!",
                          "raw": "\"I'm a rectangle!\"",
                          "start": 58,
                          "end": 76
                        }
                      ],
                      "optional": false,
                      "start": 46,
                      "end": 77
                    },
                    "directive": null,
                    "start": 46,
                    "end": 78
                  }
                ],
                "start": 36,
                "end": 84
              },
              "expression": false,
              "start": 33,
              "end": 84
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 22,
            "end": 84
          }
        ],
        "start": 16,
        "end": 86
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 86
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
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 88,
            "end": 94
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 95,
            "end": 102
          },
          "optional": false,
          "computed": false,
          "start": 88,
          "end": 102
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "Rectangle",
                "optional": false,
                "typeAnnotation": null,
                "start": 107,
                "end": 116
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "Rectangle",
                "optional": false,
                "typeAnnotation": null,
                "start": 107,
                "end": 116
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 107,
              "end": 116
            }
          ],
          "start": 105,
          "end": 118
        },
        "start": 88,
        "end": 118
      },
      "directive": null,
      "start": 88,
      "end": 119
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 119
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Rectangle",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7,
                  "end": 16
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Rectangle",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7,
                  "end": 16
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 7,
                "end": 16
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 17
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 27
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./rectangle",
                "raw": "'./rectangle'",
                "start": 28,
                "end": 41
              }
            ],
            "optional": false,
            "start": 20,
            "end": 42
          },
          "definite": false,
          "start": 6,
          "end": 42
        }
      ],
      "declare": false,
      "start": 0,
      "end": 43
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Render",
        "optional": false,
        "typeAnnotation": null,
        "start": 51,
        "end": 57
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 75
            },
            "value": {
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 166,
                          "end": 170
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "objects",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 171,
                          "end": 178
                        },
                        "optional": false,
                        "computed": false,
                        "start": 166,
                        "end": 178
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "elements": [],
                        "start": 181,
                        "end": 183
                      },
                      "start": 166,
                      "end": 183
                    },
                    "directive": null,
                    "start": 166,
                    "end": 184
                  }
                ],
                "start": 78,
                "end": 190
              },
              "expression": false,
              "start": 75,
              "end": 190
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 64,
            "end": 190
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "addRectangle",
              "optional": false,
              "typeAnnotation": null,
              "start": 280,
              "end": 292
            },
            "value": {
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
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 311,
                          "end": 314
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Rectangle",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 321,
                            "end": 330
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 317,
                          "end": 332
                        },
                        "definite": false,
                        "start": 311,
                        "end": 332
                      }
                    ],
                    "declare": false,
                    "start": 305,
                    "end": 333
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
                            "type": "ThisExpression",
                            "start": 342,
                            "end": 346
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "objects",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 347,
                            "end": 354
                          },
                          "optional": false,
                          "computed": false,
                          "start": 342,
                          "end": 354
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "push",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 355,
                          "end": 359
                        },
                        "optional": false,
                        "computed": false,
                        "start": 342,
                        "end": 359
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 360,
                          "end": 363
                        }
                      ],
                      "optional": false,
                      "start": 342,
                      "end": 364
                    },
                    "directive": null,
                    "start": 342,
                    "end": 365
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 381,
                      "end": 384
                    },
                    "start": 374,
                    "end": 385
                  }
                ],
                "start": 295,
                "end": 391
              },
              "expression": false,
              "start": 292,
              "end": 391
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 280,
            "end": 391
          }
        ],
        "start": 58,
        "end": 393
      },
      "abstract": false,
      "declare": false,
      "start": 45,
      "end": 393
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
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 395,
            "end": 401
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 402,
            "end": 409
          },
          "optional": false,
          "computed": false,
          "start": 395,
          "end": 409
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "Render",
                "optional": false,
                "typeAnnotation": null,
                "start": 414,
                "end": 420
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "Render",
                "optional": false,
                "typeAnnotation": null,
                "start": 414,
                "end": 420
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 414,
              "end": 420
            }
          ],
          "start": 412,
          "end": 422
        },
        "start": 395,
        "end": 422
      },
      "directive": null,
      "start": 395,
      "end": 423
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 423
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Render",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7,
                  "end": 13
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Render",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7,
                  "end": 13
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 7,
                "end": 13
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 14
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 24
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./index",
                "raw": "\"./index\"",
                "start": 25,
                "end": 34
              }
            ],
            "optional": false,
            "start": 17,
            "end": 35
          },
          "definite": false,
          "start": 6,
          "end": 35
        }
      ],
      "declare": false,
      "start": 0,
      "end": 36
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "render",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 47
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Render",
              "optional": false,
              "typeAnnotation": null,
              "start": 54,
              "end": 60
            },
            "typeArguments": null,
            "arguments": [],
            "start": 50,
            "end": 62
          },
          "definite": false,
          "start": 41,
          "end": 62
        }
      ],
      "declare": false,
      "start": 37,
      "end": 63
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "render",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 71
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "addRectangle",
            "optional": false,
            "typeAnnotation": null,
            "start": 72,
            "end": 84
          },
          "optional": false,
          "computed": false,
          "start": 65,
          "end": 84
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 65,
        "end": 86
      },
      "directive": null,
      "start": 65,
      "end": 87
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 88,
            "end": 95
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 96,
            "end": 99
          },
          "optional": false,
          "computed": false,
          "start": 88,
          "end": 99
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "Objects",
            "raw": "\"Objects\"",
            "start": 100,
            "end": 109
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null,
              "start": 111,
              "end": 117
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "objects",
              "optional": false,
              "typeAnnotation": null,
              "start": 118,
              "end": 125
            },
            "optional": false,
            "computed": false,
            "start": 111,
            "end": 125
          }
        ],
        "optional": false,
        "start": 88,
        "end": 126
      },
      "directive": null,
      "start": 88,
      "end": 127
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 127
}
```
