__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 17,
                    "end": 18
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 22,
                      "end": 26
                    },
                    "start": 20,
                    "end": 26
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 17,
                  "end": 26
                }
              ],
              "start": 15,
              "end": 28
            },
            "start": 13,
            "end": 28
          },
          "start": 12,
          "end": 28
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 35,
                    "end": 36
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 41,
                          "end": 47
                        },
                        "start": 39,
                        "end": 47
                      },
                      "start": 37,
                      "end": 47
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 50,
                      "end": 54
                    },
                    "start": 48,
                    "end": 54
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 35,
                  "end": 54
                }
              ],
              "start": 33,
              "end": 56
            },
            "start": 31,
            "end": 56
          },
          "start": 30,
          "end": 56
        }
      ],
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
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 68,
                  "end": 69
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "UnaryExpression",
                      "operator": "!",
                      "argument": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 74,
                        "end": 78
                      },
                      "prefix": true,
                      "start": 73,
                      "end": 78
                    },
                    "prefix": true,
                    "start": 72,
                    "end": 78
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 81,
                    "end": 82
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 85,
                    "end": 86
                  },
                  "start": 72,
                  "end": 86
                },
                "definite": false,
                "start": 68,
                "end": 86
              }
            ],
            "declare": false,
            "start": 64,
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
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 120,
                  "end": 121
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 122,
                  "end": 123
                },
                "optional": false,
                "computed": false,
                "start": 120,
                "end": 123
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 120,
              "end": 125
            },
            "directive": null,
            "start": 120,
            "end": 126
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
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 131,
                  "end": 132
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 133,
                  "end": 134
                },
                "optional": false,
                "computed": false,
                "start": 131,
                "end": 134
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "'hello'",
                  "start": 135,
                  "end": 142
                }
              ],
              "optional": false,
              "start": 131,
              "end": 143
            },
            "directive": null,
            "start": 131,
            "end": 144
          }
        ],
        "start": 58,
        "end": 146
      },
      "expression": false,
      "start": 0,
      "end": 146
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 157,
        "end": 159
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 165,
                    "end": 166
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
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
                              "start": 170,
                              "end": 176
                            },
                            {
                              "type": "TSUndefinedKeyword",
                              "start": 179,
                              "end": 188
                            }
                          ],
                          "start": 170,
                          "end": 188
                        },
                        "start": 168,
                        "end": 188
                      },
                      "start": 167,
                      "end": 188
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 191,
                      "end": 195
                    },
                    "start": 189,
                    "end": 195
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 165,
                  "end": 195
                }
              ],
              "start": 163,
              "end": 197
            },
            "start": 161,
            "end": 197
          },
          "start": 160,
          "end": 197
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 204,
                    "end": 205
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 210,
                          "end": 216
                        },
                        "start": 208,
                        "end": 216
                      },
                      "start": 206,
                      "end": 216
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 219,
                      "end": 223
                    },
                    "start": 217,
                    "end": 223
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 204,
                  "end": 223
                }
              ],
              "start": 202,
              "end": 225
            },
            "start": 200,
            "end": 225
          },
          "start": 199,
          "end": 225
        }
      ],
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
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 237,
                  "end": 238
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "UnaryExpression",
                      "operator": "!",
                      "argument": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 243,
                        "end": 247
                      },
                      "prefix": true,
                      "start": 242,
                      "end": 247
                    },
                    "prefix": true,
                    "start": 241,
                    "end": 247
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 250,
                    "end": 251
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 254,
                    "end": 255
                  },
                  "start": 241,
                  "end": 255
                },
                "definite": false,
                "start": 237,
                "end": 255
              }
            ],
            "declare": false,
            "start": 233,
            "end": 256
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
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 289,
                  "end": 290
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 291,
                  "end": 292
                },
                "optional": false,
                "computed": false,
                "start": 289,
                "end": 292
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 289,
              "end": 294
            },
            "directive": null,
            "start": 289,
            "end": 295
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
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 300,
                  "end": 301
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 302,
                  "end": 303
                },
                "optional": false,
                "computed": false,
                "start": 300,
                "end": 303
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "'hello'",
                  "start": 304,
                  "end": 311
                }
              ],
              "optional": false,
              "start": 300,
              "end": 312
            },
            "directive": null,
            "start": 300,
            "end": 313
          }
        ],
        "start": 227,
        "end": 315
      },
      "expression": false,
      "start": 148,
      "end": 315
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 326,
        "end": 328
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 338,
                  "end": 342
                },
                "start": 335,
                "end": 342
              },
              "start": 332,
              "end": 342
            },
            "start": 330,
            "end": 342
          },
          "start": 329,
          "end": 342
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 352,
                      "end": 358
                    },
                    "start": 350,
                    "end": 358
                  },
                  "start": 348,
                  "end": 358
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 363,
                  "end": 367
                },
                "start": 360,
                "end": 367
              },
              "start": 347,
              "end": 367
            },
            "start": 345,
            "end": 367
          },
          "start": 344,
          "end": 367
        }
      ],
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 379,
                  "end": 380
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "UnaryExpression",
                      "operator": "!",
                      "argument": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 385,
                        "end": 389
                      },
                      "prefix": true,
                      "start": 384,
                      "end": 389
                    },
                    "prefix": true,
                    "start": 383,
                    "end": 389
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 392,
                    "end": 393
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 396,
                    "end": 397
                  },
                  "start": 383,
                  "end": 397
                },
                "definite": false,
                "start": 379,
                "end": 397
              }
            ],
            "declare": false,
            "start": 375,
            "end": 398
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 428,
                "end": 429
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 428,
              "end": 431
            },
            "directive": null,
            "start": 428,
            "end": 432
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 437,
                "end": 438
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "'hello'",
                  "start": 439,
                  "end": 446
                }
              ],
              "optional": false,
              "start": 437,
              "end": 447
            },
            "directive": null,
            "start": 437,
            "end": 448
          }
        ],
        "start": 369,
        "end": 450
      },
      "expression": false,
      "start": 317,
      "end": 450
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 461,
        "end": 463
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
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
                          "start": 471,
                          "end": 477
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 480,
                          "end": 489
                        }
                      ],
                      "start": 471,
                      "end": 489
                    },
                    "start": 469,
                    "end": 489
                  },
                  "start": 468,
                  "end": 489
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 494,
                  "end": 498
                },
                "start": 491,
                "end": 498
              },
              "start": 467,
              "end": 498
            },
            "start": 465,
            "end": 498
          },
          "start": 464,
          "end": 498
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 508,
                      "end": 514
                    },
                    "start": 506,
                    "end": 514
                  },
                  "start": 504,
                  "end": 514
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 519,
                  "end": 523
                },
                "start": 516,
                "end": 523
              },
              "start": 503,
              "end": 523
            },
            "start": 501,
            "end": 523
          },
          "start": 500,
          "end": 523
        }
      ],
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 535,
                  "end": 536
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "UnaryExpression",
                      "operator": "!",
                      "argument": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 541,
                        "end": 545
                      },
                      "prefix": true,
                      "start": 540,
                      "end": 545
                    },
                    "prefix": true,
                    "start": 539,
                    "end": 545
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 548,
                    "end": 549
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 552,
                    "end": 553
                  },
                  "start": 539,
                  "end": 553
                },
                "definite": false,
                "start": 535,
                "end": 553
              }
            ],
            "declare": false,
            "start": 531,
            "end": 554
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 584,
                "end": 585
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 584,
              "end": 587
            },
            "directive": null,
            "start": 584,
            "end": 588
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 593,
                "end": 594
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "'hello'",
                  "start": 595,
                  "end": 602
                }
              ],
              "optional": false,
              "start": 593,
              "end": 603
            },
            "directive": null,
            "start": 593,
            "end": 604
          }
        ],
        "start": 525,
        "end": 606
      },
      "expression": false,
      "start": 452,
      "end": 606
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 617,
        "end": 619
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
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
                          "start": 627,
                          "end": 633
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 636,
                          "end": 645
                        }
                      ],
                      "start": 627,
                      "end": 645
                    },
                    "start": 625,
                    "end": 645
                  },
                  "start": 624,
                  "end": 645
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 650,
                  "end": 654
                },
                "start": 647,
                "end": 654
              },
              "start": 623,
              "end": 654
            },
            "start": 621,
            "end": 654
          },
          "start": 620,
          "end": 654
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "hello",
                        "raw": "'hello'",
                        "start": 664,
                        "end": 671
                      },
                      "start": 664,
                      "end": 671
                    },
                    "start": 662,
                    "end": 671
                  },
                  "start": 660,
                  "end": 671
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 676,
                  "end": 680
                },
                "start": 673,
                "end": 680
              },
              "start": 659,
              "end": 680
            },
            "start": 657,
            "end": 680
          },
          "start": 656,
          "end": 680
        }
      ],
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 692,
                  "end": 693
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "UnaryExpression",
                      "operator": "!",
                      "argument": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 698,
                        "end": 702
                      },
                      "prefix": true,
                      "start": 697,
                      "end": 702
                    },
                    "prefix": true,
                    "start": 696,
                    "end": 702
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 705,
                    "end": 706
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 709,
                    "end": 710
                  },
                  "start": 696,
                  "end": 710
                },
                "definite": false,
                "start": 692,
                "end": 710
              }
            ],
            "declare": false,
            "start": 688,
            "end": 711
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 742,
                "end": 743
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 742,
              "end": 745
            },
            "directive": null,
            "start": 742,
            "end": 746
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 751,
                "end": 752
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "'hello'",
                  "start": 753,
                  "end": 760
                }
              ],
              "optional": false,
              "start": 751,
              "end": 761
            },
            "directive": null,
            "start": 751,
            "end": 762
          }
        ],
        "start": 682,
        "end": 764
      },
      "expression": false,
      "start": 608,
      "end": 764
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 775,
        "end": 777
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
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
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "hello",
                            "raw": "'hello'",
                            "start": 785,
                            "end": 792
                          },
                          "start": 785,
                          "end": 792
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 795,
                          "end": 804
                        }
                      ],
                      "start": 785,
                      "end": 804
                    },
                    "start": 783,
                    "end": 804
                  },
                  "start": 782,
                  "end": 804
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 809,
                  "end": 813
                },
                "start": 806,
                "end": 813
              },
              "start": 781,
              "end": 813
            },
            "start": 779,
            "end": 813
          },
          "start": 778,
          "end": 813
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 823,
                      "end": 829
                    },
                    "start": 821,
                    "end": 829
                  },
                  "start": 819,
                  "end": 829
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 834,
                  "end": 838
                },
                "start": 831,
                "end": 838
              },
              "start": 818,
              "end": 838
            },
            "start": 816,
            "end": 838
          },
          "start": 815,
          "end": 838
        }
      ],
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 850,
                  "end": 851
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "UnaryExpression",
                      "operator": "!",
                      "argument": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 856,
                        "end": 860
                      },
                      "prefix": true,
                      "start": 855,
                      "end": 860
                    },
                    "prefix": true,
                    "start": 854,
                    "end": 860
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 863,
                    "end": 864
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 867,
                    "end": 868
                  },
                  "start": 854,
                  "end": 868
                },
                "definite": false,
                "start": 850,
                "end": 868
              }
            ],
            "declare": false,
            "start": 846,
            "end": 869
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 911,
                "end": 912
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 911,
              "end": 914
            },
            "directive": null,
            "start": 911,
            "end": 915
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 930,
                "end": 931
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "'hello'",
                  "start": 932,
                  "end": 939
                }
              ],
              "optional": false,
              "start": 930,
              "end": 940
            },
            "directive": null,
            "start": 930,
            "end": 941
          }
        ],
        "start": 840,
        "end": 943
      },
      "expression": false,
      "start": 766,
      "end": 943
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 950,
        "end": 951
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 960,
              "end": 961
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 965,
                "end": 969
              },
              "start": 963,
              "end": 969
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 960,
            "end": 970
          }
        ],
        "start": 954,
        "end": 972
      },
      "declare": false,
      "start": 945,
      "end": 972
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 979,
        "end": 980
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 989,
              "end": 990
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 995,
                    "end": 1001
                  },
                  "start": 993,
                  "end": 1001
                },
                "start": 991,
                "end": 1001
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1004,
                "end": 1008
              },
              "start": 1002,
              "end": 1008
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 989,
            "end": 1009
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 1014,
              "end": 1015
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1019,
                "end": 1023
              },
              "start": 1017,
              "end": 1023
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1014,
            "end": 1024
          }
        ],
        "start": 983,
        "end": 1026
      },
      "declare": false,
      "start": 974,
      "end": 1026
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1037,
        "end": 1040
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1044,
                "end": 1045
              },
              "typeArguments": null,
              "start": 1044,
              "end": 1045
            },
            "start": 1042,
            "end": 1045
          },
          "start": 1041,
          "end": 1045
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1050,
                "end": 1051
              },
              "typeArguments": null,
              "start": 1050,
              "end": 1051
            },
            "start": 1048,
            "end": 1051
          },
          "start": 1047,
          "end": 1051
        }
      ],
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
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1063,
                  "end": 1064
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "UnaryExpression",
                      "operator": "!",
                      "argument": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 1069,
                        "end": 1073
                      },
                      "prefix": true,
                      "start": 1068,
                      "end": 1073
                    },
                    "prefix": true,
                    "start": 1067,
                    "end": 1073
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1076,
                    "end": 1077
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1080,
                    "end": 1081
                  },
                  "start": 1067,
                  "end": 1081
                },
                "definite": false,
                "start": 1063,
                "end": 1081
              }
            ],
            "declare": false,
            "start": 1059,
            "end": 1082
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
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1097,
                  "end": 1098
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1099,
                  "end": 1100
                },
                "optional": false,
                "computed": false,
                "start": 1097,
                "end": 1100
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1097,
              "end": 1102
            },
            "directive": null,
            "start": 1097,
            "end": 1103
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
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1108,
                  "end": 1109
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1110,
                  "end": 1111
                },
                "optional": false,
                "computed": false,
                "start": 1108,
                "end": 1111
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "'hello'",
                  "start": 1112,
                  "end": 1119
                }
              ],
              "optional": false,
              "start": 1108,
              "end": 1120
            },
            "directive": null,
            "start": 1108,
            "end": 1121
          }
        ],
        "start": 1053,
        "end": 1123
      },
      "expression": false,
      "start": 1028,
      "end": 1123
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReturnVal",
        "optional": false,
        "typeAnnotation": null,
        "start": 1157,
        "end": 1166
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "something",
              "optional": false,
              "typeAnnotation": null,
              "start": 1173,
              "end": 1182
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1186,
                "end": 1190
              },
              "start": 1184,
              "end": 1190
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1173,
            "end": 1191
          }
        ],
        "start": 1167,
        "end": 1193
      },
      "declare": false,
      "start": 1147,
      "end": 1193
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ReturnVal",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1204,
                  "end": 1213
                },
                "typeArguments": null,
                "start": 1204,
                "end": 1213
              },
              "start": 1202,
              "end": 1213
            },
            "start": 1201,
            "end": 1213
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "something",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1218,
                  "end": 1227
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
                    "body": [],
                    "start": 1230,
                    "end": 1233
                  },
                  "expression": false,
                  "start": 1227,
                  "end": 1233
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1218,
                "end": 1233
              }
            ],
            "start": 1216,
            "end": 1235
          },
          "definite": false,
          "start": 1201,
          "end": 1235
        }
      ],
      "declare": false,
      "start": 1195,
      "end": 1235
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "val",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ReturnVal",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1256,
                  "end": 1265
                },
                "typeArguments": null,
                "start": 1256,
                "end": 1265
              },
              "start": 1254,
              "end": 1265
            },
            "start": 1251,
            "end": 1265
          },
          "init": null,
          "definite": false,
          "start": 1251,
          "end": 1265
        }
      ],
      "declare": true,
      "start": 1237,
      "end": 1266
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "run",
        "optional": false,
        "typeAnnotation": null,
        "start": 1276,
        "end": 1279
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "something",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1291,
                    "end": 1300
                  },
                  "computed": false,
                  "optional": true,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1306,
                          "end": 1312
                        },
                        "start": 1304,
                        "end": 1312
                      },
                      "start": 1302,
                      "end": 1312
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 1315,
                      "end": 1319
                    },
                    "start": 1313,
                    "end": 1319
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1291,
                  "end": 1319
                }
              ],
              "start": 1289,
              "end": 1321
            },
            "start": 1287,
            "end": 1321
          },
          "start": 1280,
          "end": 1321
        }
      ],
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
                  "name": "something",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1335,
                  "end": 1344
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "options",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1347,
                      "end": 1354
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "something",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1355,
                      "end": 1364
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1347,
                    "end": 1364
                  },
                  "operator": "??",
                  "right": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1368,
                      "end": 1371
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "something",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1372,
                      "end": 1381
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1368,
                    "end": 1381
                  },
                  "start": 1347,
                  "end": 1381
                },
                "definite": false,
                "start": 1335,
                "end": 1381
              }
            ],
            "declare": false,
            "start": 1329,
            "end": 1382
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "something",
                "optional": false,
                "typeAnnotation": null,
                "start": 1387,
                "end": 1396
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 1397,
                  "end": 1399
                }
              ],
              "optional": false,
              "start": 1387,
              "end": 1400
            },
            "directive": null,
            "start": 1387,
            "end": 1401
          }
        ],
        "start": 1323,
        "end": 1403
      },
      "expression": false,
      "start": 1267,
      "end": 1403
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1403
}
```
