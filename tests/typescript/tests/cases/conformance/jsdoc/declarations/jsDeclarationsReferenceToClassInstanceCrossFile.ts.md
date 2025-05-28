__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 119,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 86,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 15,
        "decorators": [],
        "name": "Rectangle",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 16,
        "end": 86,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 22,
            "end": 84,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 33,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 33,
              "end": 84,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 36,
                "end": 84,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 46,
                    "end": 78,
                    "expression": {
                      "type": "CallExpression",
                      "start": 46,
                      "end": 77,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 46,
                        "end": 57,
                        "object": {
                          "type": "Identifier",
                          "start": 46,
                          "end": 53,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 54,
                          "end": 57,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 58,
                          "end": 76,
                          "value": "I'm a rectangle!",
                          "raw": "\"I'm a rectangle!\""
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 88,
      "end": 119,
      "expression": {
        "type": "AssignmentExpression",
        "start": 88,
        "end": 118,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 88,
          "end": 102,
          "object": {
            "type": "Identifier",
            "start": 88,
            "end": 94,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 95,
            "end": 102,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 105,
          "end": 118,
          "properties": [
            {
              "type": "Property",
              "start": 107,
              "end": 116,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 107,
                "end": 116,
                "decorators": [],
                "name": "Rectangle",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 107,
                "end": 116,
                "decorators": [],
                "name": "Rectangle",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ]
        }
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
  "end": 423,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 43,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 42,
          "id": {
            "type": "ObjectPattern",
            "start": 6,
            "end": 17,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 7,
                "end": 16,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 7,
                  "end": 16,
                  "decorators": [],
                  "name": "Rectangle",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 7,
                  "end": 16,
                  "decorators": [],
                  "name": "Rectangle",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 20,
            "end": 42,
            "callee": {
              "type": "Identifier",
              "start": 20,
              "end": 27,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 28,
                "end": 41,
                "value": "./rectangle",
                "raw": "'./rectangle'"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 45,
      "end": 393,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 57,
        "decorators": [],
        "name": "Render",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 58,
        "end": 393,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 64,
            "end": 190,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 64,
              "end": 75,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 75,
              "end": 190,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 78,
                "end": 190,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 166,
                    "end": 184,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 166,
                      "end": 183,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 166,
                        "end": 178,
                        "object": {
                          "type": "ThisExpression",
                          "start": 166,
                          "end": 170
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 171,
                          "end": 178,
                          "decorators": [],
                          "name": "objects",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "start": 181,
                        "end": 183,
                        "elements": []
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 280,
            "end": 391,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 280,
              "end": 292,
              "decorators": [],
              "name": "addRectangle",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 292,
              "end": 391,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 295,
                "end": 391,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 305,
                    "end": 333,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 311,
                        "end": 332,
                        "id": {
                          "type": "Identifier",
                          "start": 311,
                          "end": 314,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "NewExpression",
                          "start": 317,
                          "end": 332,
                          "callee": {
                            "type": "Identifier",
                            "start": 321,
                            "end": 330,
                            "decorators": [],
                            "name": "Rectangle",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": []
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 342,
                    "end": 365,
                    "expression": {
                      "type": "CallExpression",
                      "start": 342,
                      "end": 364,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 342,
                        "end": 359,
                        "object": {
                          "type": "MemberExpression",
                          "start": 342,
                          "end": 354,
                          "object": {
                            "type": "ThisExpression",
                            "start": 342,
                            "end": 346
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 347,
                            "end": 354,
                            "decorators": [],
                            "name": "objects",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 355,
                          "end": 359,
                          "decorators": [],
                          "name": "push",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 360,
                          "end": 363,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 374,
                    "end": 385,
                    "argument": {
                      "type": "Identifier",
                      "start": 381,
                      "end": 384,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 395,
      "end": 423,
      "expression": {
        "type": "AssignmentExpression",
        "start": 395,
        "end": 422,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 395,
          "end": 409,
          "object": {
            "type": "Identifier",
            "start": 395,
            "end": 401,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 402,
            "end": 409,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 412,
          "end": 422,
          "properties": [
            {
              "type": "Property",
              "start": 414,
              "end": 420,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 414,
                "end": 420,
                "decorators": [],
                "name": "Render",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 414,
                "end": 420,
                "decorators": [],
                "name": "Render",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ]
        }
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
  "end": 127,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 36,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 35,
          "id": {
            "type": "ObjectPattern",
            "start": 6,
            "end": 14,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 7,
                "end": 13,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 7,
                  "end": 13,
                  "decorators": [],
                  "name": "Render",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 7,
                  "end": 13,
                  "decorators": [],
                  "name": "Render",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 17,
            "end": 35,
            "callee": {
              "type": "Identifier",
              "start": 17,
              "end": 24,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 25,
                "end": 34,
                "value": "./index",
                "raw": "\"./index\""
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 37,
      "end": 63,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 41,
          "end": 62,
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 47,
            "decorators": [],
            "name": "render",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 50,
            "end": 62,
            "callee": {
              "type": "Identifier",
              "start": 54,
              "end": 60,
              "decorators": [],
              "name": "Render",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 65,
      "end": 87,
      "expression": {
        "type": "CallExpression",
        "start": 65,
        "end": 86,
        "callee": {
          "type": "MemberExpression",
          "start": 65,
          "end": 84,
          "object": {
            "type": "Identifier",
            "start": 65,
            "end": 71,
            "decorators": [],
            "name": "render",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 72,
            "end": 84,
            "decorators": [],
            "name": "addRectangle",
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
    },
    {
      "type": "ExpressionStatement",
      "start": 88,
      "end": 127,
      "expression": {
        "type": "CallExpression",
        "start": 88,
        "end": 126,
        "callee": {
          "type": "MemberExpression",
          "start": 88,
          "end": 99,
          "object": {
            "type": "Identifier",
            "start": 88,
            "end": 95,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 96,
            "end": 99,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 100,
            "end": 109,
            "value": "Objects",
            "raw": "\"Objects\""
          },
          {
            "type": "MemberExpression",
            "start": 111,
            "end": 125,
            "object": {
              "type": "Identifier",
              "start": 111,
              "end": 117,
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 118,
              "end": 125,
              "decorators": [],
              "name": "objects",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
