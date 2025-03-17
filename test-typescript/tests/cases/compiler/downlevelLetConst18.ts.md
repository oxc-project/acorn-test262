__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 335,
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 23,
            "end": 24,
            "id": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "let",
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
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 69,
            "end": 70,
            "id": {
              "type": "Identifier",
              "start": 69,
              "end": 70,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "let",
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
              "name": "foo1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 116,
            "end": 117,
            "id": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "let",
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
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "directive": null
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 159,
            "end": 164,
            "id": {
              "type": "Identifier",
              "start": 159,
              "end": 160,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "kind": "const",
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
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "directive": null
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 204,
            "end": 205,
            "id": {
              "type": "Identifier",
              "start": 204,
              "end": 205,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "let",
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
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 219,
                    "end": 222,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 222,
                    "end": 230,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "directive": null
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "init",
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 245,
            "end": 246,
            "id": {
              "type": "Identifier",
              "start": 245,
              "end": 246,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "let",
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 264,
                    "end": 267,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 267,
                    "end": 282,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "get",
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 298,
            "end": 299,
            "id": {
              "type": "Identifier",
              "start": 298,
              "end": 299,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "let",
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 317,
                    "end": 320,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 320,
                    "end": 329,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 321,
                        "end": 322,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
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
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "directive": null
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "set",
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
