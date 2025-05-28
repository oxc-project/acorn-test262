__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 334,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 12,
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 12,
        "value": "use strict",
        "raw": "'use strict'"
      },
      "directive": "use strict"
    },
    {
      "type": "ForStatement",
      "start": 14,
      "end": 58,
      "init": {
        "type": "VariableDeclaration",
        "start": 19,
        "end": 24,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 23,
            "end": 24,
            "id": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 29,
        "end": 58,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 35,
            "end": 55,
            "id": {
              "type": "Identifier",
              "start": 44,
              "end": 47,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 50,
              "end": 55,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 52,
                  "end": 53,
                  "expression": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 53,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "expression": false
          },
          {
            "type": "EmptyStatement",
            "start": 55,
            "end": 56
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 60,
      "end": 105,
      "init": {
        "type": "VariableDeclaration",
        "start": 65,
        "end": 70,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 69,
            "end": 70,
            "id": {
              "type": "Identifier",
              "start": 69,
              "end": 70,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 75,
        "end": 105,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 81,
            "end": 102,
            "id": {
              "type": "Identifier",
              "start": 90,
              "end": 94,
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 97,
              "end": 102,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 99,
                  "end": 100,
                  "expression": {
                    "type": "Identifier",
                    "start": 99,
                    "end": 100,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "expression": false
          },
          {
            "type": "EmptyStatement",
            "start": 102,
            "end": 103
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 107,
      "end": 146,
      "init": {
        "type": "VariableDeclaration",
        "start": 112,
        "end": 117,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 116,
            "end": 117,
            "id": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 122,
        "end": 146,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 128,
            "end": 144,
            "expression": {
              "type": "CallExpression",
              "start": 128,
              "end": 143,
              "callee": {
                "type": "ArrowFunctionExpression",
                "start": 129,
                "end": 140,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 135,
                  "end": 140,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 137,
                      "end": 138,
                      "expression": {
                        "type": "Identifier",
                        "start": 137,
                        "end": 138,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "directive": null
                    }
                  ]
                },
                "id": null,
                "generator": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 148,
      "end": 193,
      "init": {
        "type": "VariableDeclaration",
        "start": 153,
        "end": 164,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 159,
            "end": 164,
            "id": {
              "type": "Identifier",
              "start": 159,
              "end": 160,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 163,
              "end": 164,
              "value": 1,
              "raw": "1"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 169,
        "end": 193,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 175,
            "end": 191,
            "expression": {
              "type": "CallExpression",
              "start": 175,
              "end": 190,
              "callee": {
                "type": "ArrowFunctionExpression",
                "start": 176,
                "end": 187,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 182,
                  "end": 187,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 184,
                      "end": 185,
                      "expression": {
                        "type": "Identifier",
                        "start": 184,
                        "end": 185,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "directive": null
                    }
                  ]
                },
                "id": null,
                "generator": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 195,
      "end": 234,
      "init": {
        "type": "VariableDeclaration",
        "start": 200,
        "end": 205,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 204,
            "end": 205,
            "id": {
              "type": "Identifier",
              "start": 204,
              "end": 205,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 210,
        "end": 234,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 216,
            "end": 232,
            "expression": {
              "type": "ObjectExpression",
              "start": 217,
              "end": 231,
              "properties": [
                {
                  "type": "Property",
                  "start": 219,
                  "end": 230,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 219,
                    "end": 222,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 222,
                    "end": 230,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 225,
                      "end": 230,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 227,
                          "end": 228,
                          "expression": {
                            "type": "Identifier",
                            "start": 227,
                            "end": 228,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "directive": null
                        }
                      ]
                    },
                    "expression": false
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 236,
      "end": 287,
      "init": {
        "type": "VariableDeclaration",
        "start": 241,
        "end": 246,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 245,
            "end": 246,
            "id": {
              "type": "Identifier",
              "start": 245,
              "end": 246,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 251,
        "end": 287,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 257,
            "end": 285,
            "expression": {
              "type": "ObjectExpression",
              "start": 258,
              "end": 284,
              "properties": [
                {
                  "type": "Property",
                  "start": 260,
                  "end": 282,
                  "kind": "get",
                  "key": {
                    "type": "Identifier",
                    "start": 264,
                    "end": 267,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 267,
                    "end": 282,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 270,
                      "end": 282,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 272,
                          "end": 280,
                          "argument": {
                            "type": "Identifier",
                            "start": 279,
                            "end": 280,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 289,
      "end": 334,
      "init": {
        "type": "VariableDeclaration",
        "start": 294,
        "end": 299,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 298,
            "end": 299,
            "id": {
              "type": "Identifier",
              "start": 298,
              "end": 299,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 304,
        "end": 334,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 310,
            "end": 332,
            "expression": {
              "type": "ObjectExpression",
              "start": 311,
              "end": 331,
              "properties": [
                {
                  "type": "Property",
                  "start": 313,
                  "end": 329,
                  "kind": "set",
                  "key": {
                    "type": "Identifier",
                    "start": 317,
                    "end": 320,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 320,
                    "end": 329,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 321,
                        "end": 322,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 324,
                      "end": 329,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 326,
                          "end": 327,
                          "expression": {
                            "type": "Identifier",
                            "start": 326,
                            "end": 327,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "directive": null
                        }
                      ]
                    },
                    "expression": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
