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
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 40,
                "end": 47
              },
              "start": 38,
              "end": 47
            },
            "start": 34,
            "end": 47
          },
          "init": null,
          "definite": false,
          "start": 34,
          "end": 47
        }
      ],
      "declare": true,
      "start": 22,
      "end": 48
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 59,
        "end": 63
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 79,
                          "end": 85
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 88,
                          "end": 94
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 97,
                          "end": 104
                        }
                      ],
                      "start": 79,
                      "end": 104
                    },
                    "start": 77,
                    "end": 104
                  },
                  "start": 76,
                  "end": 104
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 107,
                  "end": 108
                },
                "definite": false,
                "start": 76,
                "end": 108
              }
            ],
            "declare": false,
            "start": 72,
            "end": 109
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 125
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 148,
                        "end": 149
                      },
                      "prefix": true,
                      "start": 141,
                      "end": 149
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "string",
                      "raw": "\"string\"",
                      "start": 154,
                      "end": 162
                    },
                    "start": 141,
                    "end": 162
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 178,
                            "end": 179
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 182,
                                "end": 183
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "slice",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 184,
                                "end": 189
                              },
                              "optional": false,
                              "computed": false,
                              "start": 182,
                              "end": 189
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 182,
                            "end": 191
                          },
                          "start": 178,
                          "end": 191
                        },
                        "directive": null,
                        "start": 178,
                        "end": 192
                      }
                    ],
                    "start": 164,
                    "end": 202
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 230,
                            "end": 231
                          },
                          "right": {
                            "type": "Literal",
                            "value": "abc",
                            "raw": "\"abc\"",
                            "start": 234,
                            "end": 239
                          },
                          "start": 230,
                          "end": 239
                        },
                        "directive": null,
                        "start": 230,
                        "end": 240
                      }
                    ],
                    "start": 216,
                    "end": 250
                  },
                  "start": 137,
                  "end": 250
                }
              ],
              "start": 127,
              "end": 256
            },
            "start": 114,
            "end": 256
          }
        ],
        "start": 66,
        "end": 258
      },
      "expression": false,
      "start": 50,
      "end": 258
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 269,
        "end": 273
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 289,
                          "end": 295
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 298,
                          "end": 304
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 307,
                          "end": 314
                        }
                      ],
                      "start": 289,
                      "end": 314
                    },
                    "start": 287,
                    "end": 314
                  },
                  "start": 286,
                  "end": 314
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 317,
                  "end": 318
                },
                "definite": false,
                "start": 286,
                "end": 318
              }
            ],
            "declare": false,
            "start": 282,
            "end": 319
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 331,
              "end": 335
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 358,
                        "end": 359
                      },
                      "prefix": true,
                      "start": 351,
                      "end": 359
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "number",
                      "raw": "\"number\"",
                      "start": 364,
                      "end": 372
                    },
                    "start": 351,
                    "end": 372
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 388,
                            "end": 389
                          },
                          "right": {
                            "type": "Literal",
                            "value": "abc",
                            "raw": "\"abc\"",
                            "start": 392,
                            "end": 397
                          },
                          "start": 388,
                          "end": 397
                        },
                        "directive": null,
                        "start": 388,
                        "end": 398
                      }
                    ],
                    "start": 374,
                    "end": 408
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 436,
                            "end": 437
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 440,
                                "end": 441
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "slice",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 442,
                                "end": 447
                              },
                              "optional": false,
                              "computed": false,
                              "start": 440,
                              "end": 447
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 440,
                            "end": 449
                          },
                          "start": 436,
                          "end": 449
                        },
                        "directive": null,
                        "start": 436,
                        "end": 450
                      }
                    ],
                    "start": 422,
                    "end": 460
                  },
                  "start": 347,
                  "end": 460
                }
              ],
              "start": 337,
              "end": 466
            },
            "start": 324,
            "end": 466
          }
        ],
        "start": 276,
        "end": 468
      },
      "expression": false,
      "start": 260,
      "end": 468
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 468
}
```
