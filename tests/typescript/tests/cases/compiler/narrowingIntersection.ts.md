__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FooAndBaz",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 61
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 66,
                  "end": 69
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 71,
                    "end": 78
                  },
                  "start": 69,
                  "end": 78
                },
                "accessibility": null,
                "static": false,
                "start": 66,
                "end": 78
              }
            ],
            "start": 64,
            "end": 80
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 85,
                  "end": 88
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 90,
                    "end": 97
                  },
                  "start": 88,
                  "end": 97
                },
                "accessibility": null,
                "static": false,
                "start": 85,
                "end": 97
              }
            ],
            "start": 83,
            "end": 99
          }
        ],
        "start": 64,
        "end": 99
      },
      "declare": false,
      "start": 47,
      "end": 100
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Disjoint",
        "optional": false,
        "typeAnnotation": null,
        "start": 107,
        "end": 115
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": true,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 132,
                  "end": 137
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 139,
                    "end": 145
                  },
                  "start": 137,
                  "end": 145
                },
                "accessibility": null,
                "static": false,
                "start": 123,
                "end": 146
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": true,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "err",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 156,
                  "end": 159
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNeverKeyword",
                    "start": 162,
                    "end": 167
                  },
                  "start": 160,
                  "end": 167
                },
                "accessibility": null,
                "static": false,
                "start": 147,
                "end": 168
              }
            ],
            "start": 121,
            "end": 170
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": true,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 185,
                  "end": 190
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNeverKeyword",
                    "start": 193,
                    "end": 198
                  },
                  "start": 191,
                  "end": 198
                },
                "accessibility": null,
                "static": false,
                "start": 176,
                "end": 199
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": true,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "err",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 209,
                  "end": 212
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FooAndBaz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 214,
                      "end": 223
                    },
                    "typeArguments": null,
                    "start": 214,
                    "end": 223
                  },
                  "start": 212,
                  "end": 223
                },
                "accessibility": null,
                "static": false,
                "start": 200,
                "end": 224
              }
            ],
            "start": 174,
            "end": 226
          }
        ],
        "start": 119,
        "end": 226
      },
      "declare": false,
      "start": 102,
      "end": 227
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 238,
        "end": 243
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "result",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Disjoint",
                "optional": false,
                "typeAnnotation": null,
                "start": 252,
                "end": 260
              },
              "typeArguments": null,
              "start": 252,
              "end": 260
            },
            "start": 250,
            "end": 260
          },
          "start": 244,
          "end": 260
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 263,
          "end": 269
        },
        "start": 261,
        "end": 269
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": null,
                "start": 280,
                "end": 286
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "err",
                "optional": false,
                "typeAnnotation": null,
                "start": 287,
                "end": 290
              },
              "optional": false,
              "computed": false,
              "start": 280,
              "end": 290
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 308,
                      "end": 314
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "err",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 315,
                      "end": 318
                    },
                    "optional": false,
                    "computed": false,
                    "start": 308,
                    "end": 318
                  },
                  "start": 302,
                  "end": 319
                }
              ],
              "start": 292,
              "end": 325
            },
            "alternate": null,
            "start": 276,
            "end": 325
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": null,
                "start": 361,
                "end": 367
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 368,
                "end": 373
              },
              "optional": false,
              "computed": false,
              "start": 361,
              "end": 373
            },
            "start": 354,
            "end": 374
          }
        ],
        "start": 270,
        "end": 376
      },
      "expression": false,
      "start": 229,
      "end": 376
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TrivialIntersection",
        "optional": false,
        "typeAnnotation": null,
        "start": 383,
        "end": 402
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 407,
                  "end": 408
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 410,
                      "end": 411
                    },
                    "start": 410,
                    "end": 411
                  },
                  "start": 408,
                  "end": 411
                },
                "accessibility": null,
                "static": false,
                "start": 407,
                "end": 411
              }
            ],
            "start": 405,
            "end": 413
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 418,
                  "end": 419
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 421,
                      "end": 422
                    },
                    "start": 421,
                    "end": 422
                  },
                  "start": 419,
                  "end": 422
                },
                "accessibility": null,
                "static": false,
                "start": 418,
                "end": 422
              }
            ],
            "start": 416,
            "end": 424
          }
        ],
        "start": 405,
        "end": 424
      },
      "declare": false,
      "start": 378,
      "end": 425
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "want0",
        "optional": false,
        "typeAnnotation": null,
        "start": 436,
        "end": 441
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
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 445,
                "end": 446
              },
              "start": 445,
              "end": 446
            },
            "start": 443,
            "end": 446
          },
          "start": 442,
          "end": 446
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 448,
        "end": 450
      },
      "expression": false,
      "start": 427,
      "end": 450
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 461,
        "end": 466
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 470,
                    "end": 471
                  },
                  "start": 470,
                  "end": 471
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TrivialIntersection",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 474,
                    "end": 493
                  },
                  "typeArguments": null,
                  "start": 474,
                  "end": 493
                }
              ],
              "start": 470,
              "end": 493
            },
            "start": 468,
            "end": 493
          },
          "start": 467,
          "end": 493
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 505,
                "end": 506
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 511,
                "end": 512
              },
              "start": 505,
              "end": 512
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "want0",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 524,
                      "end": 529
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 530,
                        "end": 531
                      }
                    ],
                    "optional": false,
                    "start": 524,
                    "end": 532
                  },
                  "directive": null,
                  "start": 524,
                  "end": 533
                }
              ],
              "start": 514,
              "end": 568
            },
            "alternate": null,
            "start": 501,
            "end": 568
          }
        ],
        "start": 495,
        "end": 570
      },
      "expression": false,
      "start": 452,
      "end": 570
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 47,
  "end": 570
}
```
