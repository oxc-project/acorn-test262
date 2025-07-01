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
        "name": "return1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 16
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
              "type": "TSBooleanKeyword",
              "start": 20,
              "end": 27
            },
            "start": 18,
            "end": 27
          },
          "start": 17,
          "end": 27
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 30,
            "end": 31
          },
          "start": 30,
          "end": 31
        },
        "start": 28,
        "end": 31
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 46,
                "end": 47
              },
              "consequent": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 51,
                "end": 52
              },
              "alternate": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 56,
                "end": 57
              },
              "start": 46,
              "end": 57
            },
            "start": 38,
            "end": 59
          }
        ],
        "start": 32,
        "end": 61
      },
      "expression": false,
      "start": 0,
      "end": 61
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getAny",
        "optional": false,
        "typeAnnotation": null,
        "start": 80,
        "end": 86
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 90,
          "end": 93
        },
        "start": 88,
        "end": 93
      },
      "body": null,
      "expression": false,
      "start": 63,
      "end": 94
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "return2",
        "optional": false,
        "typeAnnotation": null,
        "start": 105,
        "end": 112
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
              "type": "TSStringKeyword",
              "start": 116,
              "end": 122
            },
            "start": 114,
            "end": 122
          },
          "start": 113,
          "end": 122
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 125,
          "end": 131
        },
        "start": 123,
        "end": 131
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 145,
                    "end": 146
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "startsWith",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 147,
                    "end": 157
                  },
                  "optional": false,
                  "computed": false,
                  "start": 145,
                  "end": 157
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 158,
                    "end": 161
                  }
                ],
                "optional": false,
                "start": 145,
                "end": 162
              },
              "consequent": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getAny",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 165,
                  "end": 171
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 165,
                "end": 173
              },
              "alternate": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 176,
                "end": 177
              },
              "start": 145,
              "end": 177
            },
            "start": 138,
            "end": 178
          }
        ],
        "start": 132,
        "end": 180
      },
      "expression": false,
      "start": 96,
      "end": 180
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "return3",
        "optional": false,
        "typeAnnotation": null,
        "start": 191,
        "end": 198
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
              "type": "TSStringKeyword",
              "start": 202,
              "end": 208
            },
            "start": 200,
            "end": 208
          },
          "start": 199,
          "end": 208
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 211,
          "end": 217
        },
        "start": 209,
        "end": 217
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 231,
                    "end": 232
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "startsWith",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 233,
                    "end": 243
                  },
                  "optional": false,
                  "computed": false,
                  "start": 231,
                  "end": 243
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 244,
                    "end": 247
                  }
                ],
                "optional": false,
                "start": 231,
                "end": 248
              },
              "consequent": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 251,
                "end": 254
              },
              "alternate": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 257,
                "end": 258
              },
              "start": 231,
              "end": 258
            },
            "start": 224,
            "end": 259
          }
        ],
        "start": 218,
        "end": 261
      },
      "expression": false,
      "start": 182,
      "end": 261
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "return4",
        "optional": false,
        "typeAnnotation": null,
        "start": 272,
        "end": 279
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
              "type": "TSStringKeyword",
              "start": 283,
              "end": 289
            },
            "start": 281,
            "end": 289
          },
          "start": 280,
          "end": 289
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 292,
          "end": 298
        },
        "start": 290,
        "end": 298
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 313,
                      "end": 314
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "startsWith",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 315,
                      "end": 325
                    },
                    "optional": false,
                    "computed": false,
                    "start": 313,
                    "end": 325
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 326,
                      "end": 329
                    }
                  ],
                  "optional": false,
                  "start": 313,
                  "end": 330
                },
                "consequent": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getAny",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 333,
                    "end": 339
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 333,
                  "end": 341
                },
                "alternate": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 344,
                  "end": 345
                },
                "start": 313,
                "end": 345
              },
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 350,
                "end": 356
              },
              "start": 312,
              "end": 356
            },
            "start": 305,
            "end": 357
          }
        ],
        "start": 299,
        "end": 359
      },
      "expression": false,
      "start": 263,
      "end": 359
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
            "name": "return5",
            "optional": false,
            "typeAnnotation": null,
            "start": 367,
            "end": 374
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "type": "TSStringKeyword",
                    "start": 381,
                    "end": 387
                  },
                  "start": 379,
                  "end": 387
                },
                "start": 378,
                "end": 387
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 390,
                "end": 396
              },
              "start": 388,
              "end": 396
            },
            "body": {
              "type": "ConditionalExpression",
              "test": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 400,
                    "end": 401
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "startsWith",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 402,
                    "end": 412
                  },
                  "optional": false,
                  "computed": false,
                  "start": 400,
                  "end": 412
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 413,
                    "end": 416
                  }
                ],
                "optional": false,
                "start": 400,
                "end": 417
              },
              "consequent": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getAny",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 420,
                  "end": 426
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 420,
                "end": 428
              },
              "alternate": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 431,
                "end": 432
              },
              "start": 400,
              "end": 432
            },
            "id": null,
            "generator": false,
            "start": 377,
            "end": 432
          },
          "definite": false,
          "start": 367,
          "end": 432
        }
      ],
      "declare": false,
      "start": 361,
      "end": 433
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
            "name": "return6",
            "optional": false,
            "typeAnnotation": null,
            "start": 441,
            "end": 448
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "type": "TSStringKeyword",
                    "start": 455,
                    "end": 461
                  },
                  "start": 453,
                  "end": 461
                },
                "start": 452,
                "end": 461
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 464,
                "end": 470
              },
              "start": 462,
              "end": 470
            },
            "body": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 475,
                      "end": 476
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "startsWith",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 477,
                      "end": 487
                    },
                    "optional": false,
                    "computed": false,
                    "start": 475,
                    "end": 487
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 488,
                      "end": 491
                    }
                  ],
                  "optional": false,
                  "start": 475,
                  "end": 492
                },
                "consequent": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getAny",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 495,
                    "end": 501
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 495,
                  "end": 503
                },
                "alternate": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 506,
                  "end": 507
                },
                "start": 475,
                "end": 507
              },
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 512,
                "end": 518
              },
              "start": 474,
              "end": 518
            },
            "id": null,
            "generator": false,
            "start": 451,
            "end": 518
          },
          "definite": false,
          "start": 441,
          "end": 518
        }
      ],
      "declare": false,
      "start": 435,
      "end": 519
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 519
}
```
