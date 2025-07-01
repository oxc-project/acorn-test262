__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "'use strict'",
        "start": 0,
        "end": 12
      },
      "directive": "use strict",
      "start": 0,
      "end": 12
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 24
            },
            "init": null,
            "definite": false,
            "start": 23,
            "end": 24
          }
        ],
        "declare": false,
        "start": 19,
        "end": 24
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 47
            },
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 52,
                    "end": 53
                  },
                  "directive": null,
                  "start": 52,
                  "end": 53
                }
              ],
              "start": 50,
              "end": 55
            },
            "expression": false,
            "start": 35,
            "end": 55
          },
          {
            "type": "EmptyStatement",
            "start": 55,
            "end": 56
          }
        ],
        "start": 29,
        "end": 58
      },
      "start": 14,
      "end": 58
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 69,
              "end": 70
            },
            "init": null,
            "definite": false,
            "start": 69,
            "end": 70
          }
        ],
        "declare": false,
        "start": 65,
        "end": 70
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 94
            },
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 99,
                    "end": 100
                  },
                  "directive": null,
                  "start": 99,
                  "end": 100
                }
              ],
              "start": 97,
              "end": 102
            },
            "expression": false,
            "start": 81,
            "end": 102
          },
          {
            "type": "EmptyStatement",
            "start": 102,
            "end": 103
          }
        ],
        "start": 75,
        "end": 105
      },
      "start": 60,
      "end": 105
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 117
            },
            "init": null,
            "definite": false,
            "start": 116,
            "end": 117
          }
        ],
        "declare": false,
        "start": 112,
        "end": 117
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 137,
                        "end": 138
                      },
                      "directive": null,
                      "start": 137,
                      "end": 138
                    }
                  ],
                  "start": 135,
                  "end": 140
                },
                "id": null,
                "generator": false,
                "start": 129,
                "end": 140
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 128,
              "end": 143
            },
            "directive": null,
            "start": 128,
            "end": 144
          }
        ],
        "start": 122,
        "end": 146
      },
      "start": 107,
      "end": 146
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 160
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 163,
              "end": 164
            },
            "definite": false,
            "start": 159,
            "end": 164
          }
        ],
        "declare": false,
        "start": 153,
        "end": 164
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 184,
                        "end": 185
                      },
                      "directive": null,
                      "start": 184,
                      "end": 185
                    }
                  ],
                  "start": 182,
                  "end": 187
                },
                "id": null,
                "generator": false,
                "start": 176,
                "end": 187
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 175,
              "end": 190
            },
            "directive": null,
            "start": 175,
            "end": 191
          }
        ],
        "start": 169,
        "end": 193
      },
      "start": 148,
      "end": 193
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 204,
              "end": 205
            },
            "init": null,
            "definite": false,
            "start": 204,
            "end": 205
          }
        ],
        "declare": false,
        "start": 200,
        "end": 205
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 219,
                    "end": 222
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
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 227,
                            "end": 228
                          },
                          "directive": null,
                          "start": 227,
                          "end": 228
                        }
                      ],
                      "start": 225,
                      "end": 230
                    },
                    "expression": false,
                    "start": 222,
                    "end": 230
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 219,
                  "end": 230
                }
              ],
              "start": 217,
              "end": 231
            },
            "directive": null,
            "start": 216,
            "end": 232
          }
        ],
        "start": 210,
        "end": 234
      },
      "start": 195,
      "end": 234
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 245,
              "end": 246
            },
            "init": null,
            "definite": false,
            "start": 245,
            "end": 246
          }
        ],
        "declare": false,
        "start": 241,
        "end": 246
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "get",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 264,
                    "end": 267
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 279,
                            "end": 280
                          },
                          "start": 272,
                          "end": 280
                        }
                      ],
                      "start": 270,
                      "end": 282
                    },
                    "expression": false,
                    "start": 267,
                    "end": 282
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 260,
                  "end": 282
                }
              ],
              "start": 258,
              "end": 284
            },
            "directive": null,
            "start": 257,
            "end": 285
          }
        ],
        "start": 251,
        "end": 287
      },
      "start": 236,
      "end": 287
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 298,
              "end": 299
            },
            "init": null,
            "definite": false,
            "start": 298,
            "end": 299
          }
        ],
        "declare": false,
        "start": 294,
        "end": 299
      },
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "set",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 317,
                    "end": 320
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 321,
                        "end": 322
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 326,
                            "end": 327
                          },
                          "directive": null,
                          "start": 326,
                          "end": 327
                        }
                      ],
                      "start": 324,
                      "end": 329
                    },
                    "expression": false,
                    "start": 320,
                    "end": 329
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 313,
                  "end": 329
                }
              ],
              "start": 311,
              "end": 331
            },
            "directive": null,
            "start": 310,
            "end": 332
          }
        ],
        "start": 304,
        "end": 334
      },
      "start": 289,
      "end": 334
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 334
}
```
