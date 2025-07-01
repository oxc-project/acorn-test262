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
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
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
              "type": "TSUnionType",
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
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 19,
                        "end": 23
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 25,
                            "end": 30
                          },
                          "start": 25,
                          "end": 30
                        },
                        "start": 23,
                        "end": 30
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 19,
                      "end": 31
                    },
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
                        "start": 32,
                        "end": 33
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 35,
                          "end": 41
                        },
                        "start": 33,
                        "end": 41
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 32,
                      "end": 41
                    }
                  ],
                  "start": 17,
                  "end": 43
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
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 48,
                        "end": 52
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 54,
                            "end": 58
                          },
                          "start": 54,
                          "end": 58
                        },
                        "start": 52,
                        "end": 58
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 48,
                      "end": 59
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 60,
                        "end": 61
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 63,
                          "end": 69
                        },
                        "start": 61,
                        "end": 69
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 60,
                      "end": 69
                    }
                  ],
                  "start": 46,
                  "end": 71
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
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 76,
                        "end": 80
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 82,
                          "end": 88
                        },
                        "start": 80,
                        "end": 88
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 76,
                      "end": 89
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 90,
                        "end": 91
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 93,
                          "end": 99
                        },
                        "start": 91,
                        "end": 99
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 90,
                      "end": 99
                    }
                  ],
                  "start": 74,
                  "end": 101
                }
              ],
              "start": 17,
              "end": 101
            },
            "start": 15,
            "end": 101
          },
          "start": 13,
          "end": 101
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 113,
                  "end": 114
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 115,
                  "end": 119
                },
                "optional": false,
                "computed": false,
                "start": 113,
                "end": 119
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 124,
                "end": 129
              },
              "start": 113,
              "end": 129
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 141,
                      "end": 142
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 143,
                      "end": 144
                    },
                    "optional": false,
                    "computed": false,
                    "start": 141,
                    "end": 144
                  },
                  "directive": null,
                  "start": 141,
                  "end": 145
                }
              ],
              "start": 131,
              "end": 151
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 165,
                    "end": 166
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 167,
                    "end": 171
                  },
                  "optional": false,
                  "computed": false,
                  "start": 165,
                  "end": 171
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 176,
                  "end": 180
                },
                "start": 165,
                "end": 180
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 192,
                        "end": 193
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 194,
                        "end": 195
                      },
                      "optional": false,
                      "computed": false,
                      "start": 192,
                      "end": 195
                    },
                    "directive": null,
                    "start": 192,
                    "end": 196
                  }
                ],
                "start": 182,
                "end": 202
              },
              "alternate": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 222,
                        "end": 223
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 224,
                        "end": 225
                      },
                      "optional": false,
                      "computed": false,
                      "start": 222,
                      "end": 225
                    },
                    "directive": null,
                    "start": 222,
                    "end": 226
                  }
                ],
                "start": 212,
                "end": 232
              },
              "start": 161,
              "end": 232
            },
            "start": 109,
            "end": 232
          }
        ],
        "start": 103,
        "end": 234
      },
      "expression": false,
      "start": 0,
      "end": 234
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 245,
        "end": 248
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
              "type": "TSUnionType",
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
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 255,
                        "end": 259
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 261,
                            "end": 266
                          },
                          "start": 261,
                          "end": 266
                        },
                        "start": 259,
                        "end": 266
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 255,
                      "end": 267
                    },
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
                        "start": 268,
                        "end": 269
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 271,
                          "end": 277
                        },
                        "start": 269,
                        "end": 277
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 268,
                      "end": 277
                    }
                  ],
                  "start": 253,
                  "end": 279
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
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 284,
                        "end": 288
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 290,
                            "end": 294
                          },
                          "start": 290,
                          "end": 294
                        },
                        "start": 288,
                        "end": 294
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 284,
                      "end": 295
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 296,
                        "end": 297
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 299,
                          "end": 305
                        },
                        "start": 297,
                        "end": 305
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 296,
                      "end": 305
                    }
                  ],
                  "start": 282,
                  "end": 307
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
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 312,
                        "end": 316
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 318,
                          "end": 324
                        },
                        "start": 316,
                        "end": 324
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 312,
                      "end": 325
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 326,
                        "end": 327
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 329,
                          "end": 335
                        },
                        "start": 327,
                        "end": 335
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 326,
                      "end": 335
                    }
                  ],
                  "start": 310,
                  "end": 337
                }
              ],
              "start": 253,
              "end": 337
            },
            "start": 251,
            "end": 337
          },
          "start": 249,
          "end": 337
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 353,
                "end": 354
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 355,
                "end": 359
              },
              "optional": false,
              "computed": false,
              "start": 353,
              "end": 359
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 376,
                  "end": 381
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 395,
                        "end": 396
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 397,
                        "end": 398
                      },
                      "optional": false,
                      "computed": false,
                      "start": 395,
                      "end": 398
                    },
                    "directive": null,
                    "start": 395,
                    "end": 399
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 412,
                    "end": 418
                  }
                ],
                "start": 371,
                "end": 418
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 432,
                  "end": 436
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 450,
                        "end": 451
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 452,
                        "end": 453
                      },
                      "optional": false,
                      "computed": false,
                      "start": 450,
                      "end": 453
                    },
                    "directive": null,
                    "start": 450,
                    "end": 454
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 467,
                    "end": 473
                  }
                ],
                "start": 427,
                "end": 473
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 503,
                        "end": 504
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 505,
                        "end": 506
                      },
                      "optional": false,
                      "computed": false,
                      "start": 503,
                      "end": 506
                    },
                    "directive": null,
                    "start": 503,
                    "end": 507
                  }
                ],
                "start": 482,
                "end": 507
              }
            ],
            "start": 345,
            "end": 513
          }
        ],
        "start": 339,
        "end": 515
      },
      "expression": false,
      "start": 236,
      "end": 515
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f13",
        "optional": false,
        "typeAnnotation": null,
        "start": 526,
        "end": 529
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
              "type": "TSUnionType",
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
                        "start": 535,
                        "end": 536
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNullKeyword",
                          "start": 538,
                          "end": 542
                        },
                        "start": 536,
                        "end": 542
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 535,
                      "end": 543
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 544,
                        "end": 545
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 547,
                          "end": 553
                        },
                        "start": 545,
                        "end": 553
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 544,
                      "end": 553
                    }
                  ],
                  "start": 533,
                  "end": 555
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
                        "start": 560,
                        "end": 561
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 563,
                          "end": 569
                        },
                        "start": 561,
                        "end": 569
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 560,
                      "end": 570
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 571,
                        "end": 572
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 574,
                          "end": 580
                        },
                        "start": 572,
                        "end": 580
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 571,
                      "end": 580
                    }
                  ],
                  "start": 558,
                  "end": 582
                }
              ],
              "start": 533,
              "end": 582
            },
            "start": 531,
            "end": 582
          },
          "start": 530,
          "end": 582
        }
      ],
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
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 590,
                "end": 591
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 596,
                      "end": 597
                    },
                    "value": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 599,
                      "end": 603
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 596,
                    "end": 603
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 605,
                      "end": 606
                    },
                    "value": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 608,
                      "end": 613
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 605,
                    "end": 613
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 615,
                      "end": 616
                    },
                    "value": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 618,
                      "end": 619
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 615,
                    "end": 619
                  }
                ],
                "start": 594,
                "end": 620
              },
              "start": 590,
              "end": 620
            },
            "directive": null,
            "start": 590,
            "end": 621
          }
        ],
        "start": 584,
        "end": 633
      },
      "expression": false,
      "start": 517,
      "end": 633
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f14",
        "optional": false,
        "typeAnnotation": null,
        "start": 644,
        "end": 647
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 648,
              "end": 649
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 648,
            "end": 649
          }
        ],
        "start": 647,
        "end": 650
      },
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
                        "start": 656,
                        "end": 657
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 659,
                            "end": 660
                          },
                          "start": 659,
                          "end": 660
                        },
                        "start": 657,
                        "end": 660
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 656,
                      "end": 661
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 662,
                        "end": 663
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 665,
                          "end": 671
                        },
                        "start": 663,
                        "end": 671
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 662,
                      "end": 671
                    }
                  ],
                  "start": 654,
                  "end": 673
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
                        "start": 678,
                        "end": 679
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 681,
                            "end": 682
                          },
                          "typeArguments": null,
                          "start": 681,
                          "end": 682
                        },
                        "start": 679,
                        "end": 682
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 678,
                      "end": 683
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 684,
                        "end": 685
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 687,
                          "end": 693
                        },
                        "start": 685,
                        "end": 693
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 684,
                      "end": 693
                    }
                  ],
                  "start": 676,
                  "end": 695
                }
              ],
              "start": 654,
              "end": 695
            },
            "start": 652,
            "end": 695
          },
          "start": 651,
          "end": 695
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 707,
                  "end": 708
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 709,
                  "end": 710
                },
                "optional": false,
                "computed": false,
                "start": 707,
                "end": 710
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 715,
                "end": 716
              },
              "start": 707,
              "end": 716
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 728,
                      "end": 729
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 730,
                      "end": 731
                    },
                    "optional": false,
                    "computed": false,
                    "start": 728,
                    "end": 731
                  },
                  "directive": null,
                  "start": 728,
                  "end": 732
                }
              ],
              "start": 718,
              "end": 748
            },
            "alternate": null,
            "start": 703,
            "end": 748
          }
        ],
        "start": 697,
        "end": 750
      },
      "expression": false,
      "start": 635,
      "end": 750
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Result",
        "optional": false,
        "typeAnnotation": null,
        "start": 757,
        "end": 763
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 764,
              "end": 765
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 764,
            "end": 765
          }
        ],
        "start": 763,
        "end": 766
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 771,
                  "end": 776
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUndefinedKeyword",
                    "start": 779,
                    "end": 788
                  },
                  "start": 777,
                  "end": 788
                },
                "accessibility": null,
                "static": false,
                "start": 771,
                "end": 789
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 790,
                  "end": 795
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 797,
                      "end": 798
                    },
                    "typeArguments": null,
                    "start": 797,
                    "end": 798
                  },
                  "start": 795,
                  "end": 798
                },
                "accessibility": null,
                "static": false,
                "start": 790,
                "end": 798
              }
            ],
            "start": 769,
            "end": 800
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
                  "name": "error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 805,
                  "end": 810
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 812,
                      "end": 817
                    },
                    "typeArguments": null,
                    "start": 812,
                    "end": 817
                  },
                  "start": 810,
                  "end": 817
                },
                "accessibility": null,
                "static": false,
                "start": 805,
                "end": 817
              }
            ],
            "start": 803,
            "end": 819
          }
        ],
        "start": 769,
        "end": 819
      },
      "declare": false,
      "start": 752,
      "end": 820
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f15",
        "optional": false,
        "typeAnnotation": null,
        "start": 831,
        "end": 834
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Result",
                "optional": false,
                "typeAnnotation": null,
                "start": 838,
                "end": 844
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 845,
                    "end": 851
                  }
                ],
                "start": 844,
                "end": 852
              },
              "start": 838,
              "end": 852
            },
            "start": 836,
            "end": 852
          },
          "start": 835,
          "end": 852
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 865,
                  "end": 866
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 867,
                  "end": 872
                },
                "optional": false,
                "computed": false,
                "start": 865,
                "end": 872
              },
              "prefix": true,
              "start": 864,
              "end": 872
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 884,
                      "end": 885
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 886,
                      "end": 891
                    },
                    "optional": false,
                    "computed": false,
                    "start": 884,
                    "end": 891
                  },
                  "directive": null,
                  "start": 884,
                  "end": 892
                }
              ],
              "start": 874,
              "end": 898
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 918,
                        "end": 919
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 920,
                        "end": 925
                      },
                      "optional": false,
                      "computed": false,
                      "start": 918,
                      "end": 925
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "message",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 926,
                      "end": 933
                    },
                    "optional": false,
                    "computed": false,
                    "start": 918,
                    "end": 933
                  },
                  "directive": null,
                  "start": 918,
                  "end": 934
                }
              ],
              "start": 908,
              "end": 940
            },
            "start": 860,
            "end": 940
          }
        ],
        "start": 854,
        "end": 942
      },
      "expression": false,
      "start": 822,
      "end": 942
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f15",
          "optional": false,
          "typeAnnotation": null,
          "start": 944,
          "end": 947
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 950,
                  "end": 955
                },
                "value": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 957,
                  "end": 959
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 950,
                "end": 959
              }
            ],
            "start": 948,
            "end": 961
          }
        ],
        "optional": false,
        "start": 944,
        "end": 962
      },
      "directive": null,
      "start": 944,
      "end": 963
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f15",
          "optional": false,
          "typeAnnotation": null,
          "start": 964,
          "end": 967
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 970,
                  "end": 975
                },
                "value": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Error",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 981,
                    "end": 986
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "boom",
                      "raw": "\"boom\"",
                      "start": 987,
                      "end": 993
                    }
                  ],
                  "start": 977,
                  "end": 994
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 970,
                "end": 994
              }
            ],
            "start": 968,
            "end": 996
          }
        ],
        "optional": false,
        "start": 964,
        "end": 997
      },
      "directive": null,
      "start": 964,
      "end": 998
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WithError",
        "optional": false,
        "typeAnnotation": null,
        "start": 1032,
        "end": 1041
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "error",
              "optional": false,
              "typeAnnotation": null,
              "start": 1048,
              "end": 1053
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1055,
                  "end": 1060
                },
                "typeArguments": null,
                "start": 1055,
                "end": 1060
              },
              "start": 1053,
              "end": 1060
            },
            "accessibility": null,
            "static": false,
            "start": 1048,
            "end": 1060
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 1065,
              "end": 1069
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNullKeyword",
                "start": 1071,
                "end": 1075
              },
              "start": 1069,
              "end": 1075
            },
            "accessibility": null,
            "static": false,
            "start": 1065,
            "end": 1075
          }
        ],
        "start": 1042,
        "end": 1077
      },
      "declare": false,
      "start": 1022,
      "end": 1077
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WithoutError",
        "optional": false,
        "typeAnnotation": null,
        "start": 1089,
        "end": 1101
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Data",
              "optional": false,
              "typeAnnotation": null,
              "start": 1102,
              "end": 1106
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1102,
            "end": 1106
          }
        ],
        "start": 1101,
        "end": 1107
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "error",
              "optional": false,
              "typeAnnotation": null,
              "start": 1114,
              "end": 1119
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNullKeyword",
                "start": 1121,
                "end": 1125
              },
              "start": 1119,
              "end": 1125
            },
            "accessibility": null,
            "static": false,
            "start": 1114,
            "end": 1125
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 1130,
              "end": 1134
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1136,
                  "end": 1140
                },
                "typeArguments": null,
                "start": 1136,
                "end": 1140
              },
              "start": 1134,
              "end": 1140
            },
            "accessibility": null,
            "static": false,
            "start": 1130,
            "end": 1140
          }
        ],
        "start": 1108,
        "end": 1142
      },
      "declare": false,
      "start": 1079,
      "end": 1142
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DataCarrier",
        "optional": false,
        "typeAnnotation": null,
        "start": 1149,
        "end": 1160
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Data",
              "optional": false,
              "typeAnnotation": null,
              "start": 1161,
              "end": 1165
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1161,
            "end": 1165
          }
        ],
        "start": 1160,
        "end": 1166
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "WithError",
              "optional": false,
              "typeAnnotation": null,
              "start": 1169,
              "end": 1178
            },
            "typeArguments": null,
            "start": 1169,
            "end": 1178
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "WithoutError",
              "optional": false,
              "typeAnnotation": null,
              "start": 1181,
              "end": 1193
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Data",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1194,
                    "end": 1198
                  },
                  "typeArguments": null,
                  "start": 1194,
                  "end": 1198
                }
              ],
              "start": 1193,
              "end": 1199
            },
            "start": 1181,
            "end": 1199
          }
        ],
        "start": 1169,
        "end": 1199
      },
      "declare": false,
      "start": 1144,
      "end": 1199
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f20",
        "optional": false,
        "typeAnnotation": null,
        "start": 1210,
        "end": 1213
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Data",
              "optional": false,
              "typeAnnotation": null,
              "start": 1214,
              "end": 1218
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1214,
            "end": 1218
          }
        ],
        "start": 1213,
        "end": 1219
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "carrier",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DataCarrier",
                "optional": false,
                "typeAnnotation": null,
                "start": 1229,
                "end": 1240
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Data",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1241,
                      "end": 1245
                    },
                    "typeArguments": null,
                    "start": 1241,
                    "end": 1245
                  }
                ],
                "start": 1240,
                "end": 1246
              },
              "start": 1229,
              "end": 1246
            },
            "start": 1227,
            "end": 1246
          },
          "start": 1220,
          "end": 1246
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "carrier",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1258,
                  "end": 1265
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1266,
                  "end": 1271
                },
                "optional": false,
                "computed": false,
                "start": 1258,
                "end": 1271
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1276,
                "end": 1280
              },
              "start": 1258,
              "end": 1280
            },
            "consequent": {
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
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNullKeyword",
                            "start": 1305,
                            "end": 1309
                          },
                          "start": 1303,
                          "end": 1309
                        },
                        "start": 1298,
                        "end": 1309
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "carrier",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1312,
                          "end": 1319
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "error",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1320,
                          "end": 1325
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1312,
                        "end": 1325
                      },
                      "definite": false,
                      "start": 1298,
                      "end": 1325
                    }
                  ],
                  "declare": false,
                  "start": 1292,
                  "end": 1325
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
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Data",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1346,
                              "end": 1350
                            },
                            "typeArguments": null,
                            "start": 1346,
                            "end": 1350
                          },
                          "start": 1344,
                          "end": 1350
                        },
                        "start": 1340,
                        "end": 1350
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "carrier",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1353,
                          "end": 1360
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1361,
                          "end": 1365
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1353,
                        "end": 1365
                      },
                      "definite": false,
                      "start": 1340,
                      "end": 1365
                    }
                  ],
                  "declare": false,
                  "start": 1334,
                  "end": 1365
                }
              ],
              "start": 1282,
              "end": 1371
            },
            "alternate": {
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
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Error",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1400,
                              "end": 1405
                            },
                            "typeArguments": null,
                            "start": 1400,
                            "end": 1405
                          },
                          "start": 1398,
                          "end": 1405
                        },
                        "start": 1393,
                        "end": 1405
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "carrier",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1408,
                          "end": 1415
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "error",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1416,
                          "end": 1421
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1408,
                        "end": 1421
                      },
                      "definite": false,
                      "start": 1393,
                      "end": 1421
                    }
                  ],
                  "declare": false,
                  "start": 1387,
                  "end": 1421
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
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNullKeyword",
                            "start": 1442,
                            "end": 1446
                          },
                          "start": 1440,
                          "end": 1446
                        },
                        "start": 1436,
                        "end": 1446
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "carrier",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1449,
                          "end": 1456
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1457,
                          "end": 1461
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1449,
                        "end": 1461
                      },
                      "definite": false,
                      "start": 1436,
                      "end": 1461
                    }
                  ],
                  "declare": false,
                  "start": 1430,
                  "end": 1461
                }
              ],
              "start": 1377,
              "end": 1467
            },
            "start": 1254,
            "end": 1467
          }
        ],
        "start": 1248,
        "end": 1469
      },
      "expression": false,
      "start": 1201,
      "end": 1469
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1498,
        "end": 1501
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
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "tag",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1506,
                  "end": 1509
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 1511,
                      "end": 1515
                    },
                    "start": 1511,
                    "end": 1515
                  },
                  "start": 1509,
                  "end": 1515
                },
                "accessibility": null,
                "static": false,
                "start": 1506,
                "end": 1516
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1517,
                  "end": 1518
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1520,
                    "end": 1526
                  },
                  "start": 1518,
                  "end": 1526
                },
                "accessibility": null,
                "static": false,
                "start": 1517,
                "end": 1526
              }
            ],
            "start": 1504,
            "end": 1528
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
                  "name": "tag",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1533,
                  "end": 1536
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 1538,
                      "end": 1543
                    },
                    "start": 1538,
                    "end": 1543
                  },
                  "start": 1536,
                  "end": 1543
                },
                "accessibility": null,
                "static": false,
                "start": 1533,
                "end": 1544
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1545,
                  "end": 1546
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1548,
                    "end": 1554
                  },
                  "start": 1546,
                  "end": 1554
                },
                "accessibility": null,
                "static": false,
                "start": 1545,
                "end": 1554
              }
            ],
            "start": 1531,
            "end": 1556
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSIndexSignature",
                "parameters": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1565,
                        "end": 1571
                      },
                      "start": 1563,
                      "end": 1571
                    },
                    "start": 1562,
                    "end": 1571
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1574,
                    "end": 1580
                  },
                  "start": 1572,
                  "end": 1580
                },
                "readonly": false,
                "static": false,
                "accessibility": null,
                "start": 1561,
                "end": 1580
              }
            ],
            "start": 1559,
            "end": 1582
          }
        ],
        "start": 1504,
        "end": 1582
      },
      "declare": false,
      "start": 1493,
      "end": 1583
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f30",
        "optional": false,
        "typeAnnotation": null,
        "start": 1594,
        "end": 1597
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1603,
                "end": 1606
              },
              "typeArguments": null,
              "start": 1603,
              "end": 1606
            },
            "start": 1601,
            "end": 1606
          },
          "start": 1598,
          "end": 1606
        }
      ],
      "returnType": null,
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
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1618,
                "end": 1621
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "tag",
                "optional": false,
                "typeAnnotation": null,
                "start": 1622,
                "end": 1625
              },
              "optional": false,
              "computed": false,
              "start": 1618,
              "end": 1625
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1637,
                    "end": 1640
                  },
                  "directive": null,
                  "start": 1637,
                  "end": 1641
                }
              ],
              "start": 1627,
              "end": 1647
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1667,
                    "end": 1670
                  },
                  "directive": null,
                  "start": 1667,
                  "end": 1671
                }
              ],
              "start": 1657,
              "end": 1677
            },
            "start": 1614,
            "end": 1677
          }
        ],
        "start": 1608,
        "end": 1679
      },
      "expression": false,
      "start": 1585,
      "end": 1679
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f31",
        "optional": false,
        "typeAnnotation": null,
        "start": 1690,
        "end": 1693
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1699,
                "end": 1702
              },
              "typeArguments": null,
              "start": 1699,
              "end": 1702
            },
            "start": 1697,
            "end": 1702
          },
          "start": 1694,
          "end": 1702
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1714,
                  "end": 1717
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "tag",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1718,
                  "end": 1721
                },
                "optional": false,
                "computed": false,
                "start": 1714,
                "end": 1721
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 1726,
                "end": 1730
              },
              "start": 1714,
              "end": 1730
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1742,
                    "end": 1745
                  },
                  "directive": null,
                  "start": 1742,
                  "end": 1746
                }
              ],
              "start": 1732,
              "end": 1752
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1772,
                    "end": 1775
                  },
                  "directive": null,
                  "start": 1772,
                  "end": 1776
                }
              ],
              "start": 1762,
              "end": 1782
            },
            "start": 1710,
            "end": 1782
          }
        ],
        "start": 1704,
        "end": 1784
      },
      "expression": false,
      "start": 1681,
      "end": 1784
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 1813,
        "end": 1814
      },
      "typeParameters": null,
      "typeAnnotation": {
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 1823,
              "end": 1827
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 1829,
                  "end": 1832
                },
                "start": 1829,
                "end": 1832
              },
              "start": 1827,
              "end": 1832
            },
            "accessibility": null,
            "static": false,
            "start": 1823,
            "end": 1833
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 1838,
              "end": 1842
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1844,
                "end": 1850
              },
              "start": 1842,
              "end": 1850
            },
            "accessibility": null,
            "static": false,
            "start": 1838,
            "end": 1850
          }
        ],
        "start": 1817,
        "end": 1852
      },
      "declare": false,
      "start": 1808,
      "end": 1852
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1858,
        "end": 1859
      },
      "typeParameters": null,
      "typeAnnotation": {
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 1868,
              "end": 1872
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "'b'",
                  "start": 1874,
                  "end": 1877
                },
                "start": 1874,
                "end": 1877
              },
              "start": 1872,
              "end": 1877
            },
            "accessibility": null,
            "static": false,
            "start": 1868,
            "end": 1878
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 1883,
              "end": 1887
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1889,
                "end": 1895
              },
              "start": 1887,
              "end": 1895
            },
            "accessibility": null,
            "static": false,
            "start": 1883,
            "end": 1895
          }
        ],
        "start": 1862,
        "end": 1897
      },
      "declare": false,
      "start": 1853,
      "end": 1897
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1903,
        "end": 1904
      },
      "typeParameters": null,
      "typeAnnotation": {
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 1913,
              "end": 1917
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "c",
                  "raw": "'c'",
                  "start": 1919,
                  "end": 1922
                },
                "start": 1919,
                "end": 1922
              },
              "start": 1917,
              "end": 1922
            },
            "accessibility": null,
            "static": false,
            "start": 1913,
            "end": 1923
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "other",
              "optional": false,
              "typeAnnotation": null,
              "start": 1928,
              "end": 1933
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1935,
                "end": 1941
              },
              "start": 1933,
              "end": 1941
            },
            "accessibility": null,
            "static": false,
            "start": 1928,
            "end": 1941
          }
        ],
        "start": 1907,
        "end": 1943
      },
      "declare": false,
      "start": 1898,
      "end": 1943
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "abc",
        "optional": false,
        "typeAnnotation": null,
        "start": 1950,
        "end": 1953
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1956,
              "end": 1957
            },
            "typeArguments": null,
            "start": 1956,
            "end": 1957
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1960,
              "end": 1961
            },
            "typeArguments": null,
            "start": 1960,
            "end": 1961
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 1964,
              "end": 1965
            },
            "typeArguments": null,
            "start": 1964,
            "end": 1965
          }
        ],
        "start": 1956,
        "end": 1965
      },
      "declare": false,
      "start": 1945,
      "end": 1966
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 1977,
        "end": 1978
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "problem",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "abc",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1988,
                    "end": 1991
                  },
                  "typeArguments": null,
                  "start": 1988,
                  "end": 1991
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1995,
                        "end": 1996
                      },
                      "typeArguments": null,
                      "start": 1995,
                      "end": 1996
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1999,
                        "end": 2000
                      },
                      "typeArguments": null,
                      "start": 1999,
                      "end": 2000
                    }
                  ],
                  "start": 1995,
                  "end": 2000
                }
              ],
              "start": 1988,
              "end": 2001
            },
            "start": 1986,
            "end": 2001
          },
          "start": 1979,
          "end": 2001
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "problem",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2013,
                  "end": 2020
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2021,
                  "end": 2025
                },
                "optional": false,
                "computed": false,
                "start": 2013,
                "end": 2025
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "b",
                "raw": "'b'",
                "start": 2030,
                "end": 2033
              },
              "start": 2013,
              "end": 2033
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "problem",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2045,
                      "end": 2052
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2053,
                      "end": 2057
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2045,
                    "end": 2057
                  },
                  "directive": null,
                  "start": 2045,
                  "end": 2058
                }
              ],
              "start": 2035,
              "end": 2064
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "problem",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2084,
                      "end": 2091
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "other",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2092,
                      "end": 2097
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2084,
                    "end": 2097
                  },
                  "directive": null,
                  "start": 2084,
                  "end": 2098
                }
              ],
              "start": 2074,
              "end": 2104
            },
            "start": 2009,
            "end": 2104
          }
        ],
        "start": 2003,
        "end": 2106
      },
      "expression": false,
      "start": 1968,
      "end": 2106
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RuntimeValue",
        "optional": false,
        "typeAnnotation": null,
        "start": 2113,
        "end": 2125
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
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2136,
                  "end": 2140
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "number",
                      "raw": "'number'",
                      "start": 2142,
                      "end": 2150
                    },
                    "start": 2142,
                    "end": 2150
                  },
                  "start": 2140,
                  "end": 2150
                },
                "accessibility": null,
                "static": false,
                "start": 2136,
                "end": 2151
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2152,
                  "end": 2157
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2159,
                    "end": 2165
                  },
                  "start": 2157,
                  "end": 2165
                },
                "accessibility": null,
                "static": false,
                "start": 2152,
                "end": 2165
              }
            ],
            "start": 2134,
            "end": 2167
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
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2176,
                  "end": 2180
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "string",
                      "raw": "'string'",
                      "start": 2182,
                      "end": 2190
                    },
                    "start": 2182,
                    "end": 2190
                  },
                  "start": 2180,
                  "end": 2190
                },
                "accessibility": null,
                "static": false,
                "start": 2176,
                "end": 2191
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2192,
                  "end": 2197
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2199,
                    "end": 2205
                  },
                  "start": 2197,
                  "end": 2205
                },
                "accessibility": null,
                "static": false,
                "start": 2192,
                "end": 2205
              }
            ],
            "start": 2174,
            "end": 2207
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
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2216,
                  "end": 2220
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "boolean",
                      "raw": "'boolean'",
                      "start": 2222,
                      "end": 2231
                    },
                    "start": 2222,
                    "end": 2231
                  },
                  "start": 2220,
                  "end": 2231
                },
                "accessibility": null,
                "static": false,
                "start": 2216,
                "end": 2232
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2233,
                  "end": 2238
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 2240,
                    "end": 2247
                  },
                  "start": 2238,
                  "end": 2247
                },
                "accessibility": null,
                "static": false,
                "start": 2233,
                "end": 2247
              }
            ],
            "start": 2214,
            "end": 2249
          }
        ],
        "start": 2132,
        "end": 2249
      },
      "declare": false,
      "start": 2108,
      "end": 2250
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2261,
        "end": 2265
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
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RuntimeValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2269,
                    "end": 2281
                  },
                  "typeArguments": null,
                  "start": 2269,
                  "end": 2281
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
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2286,
                        "end": 2290
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "number",
                            "raw": "'number'",
                            "start": 2292,
                            "end": 2300
                          },
                          "start": 2292,
                          "end": 2300
                        },
                        "start": 2290,
                        "end": 2300
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2286,
                      "end": 2300
                    }
                  ],
                  "start": 2284,
                  "end": 2302
                }
              ],
              "start": 2269,
              "end": 2302
            },
            "start": 2267,
            "end": 2302
          },
          "start": 2266,
          "end": 2302
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2314,
                  "end": 2315
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2316,
                  "end": 2320
                },
                "optional": false,
                "computed": false,
                "start": 2314,
                "end": 2320
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "number",
                "raw": "'number'",
                "start": 2325,
                "end": 2333
              },
              "start": 2314,
              "end": 2333
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2345,
                      "end": 2346
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2347,
                      "end": 2352
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2345,
                    "end": 2352
                  },
                  "directive": null,
                  "start": 2345,
                  "end": 2353
                }
              ],
              "start": 2335,
              "end": 2370
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2390,
                      "end": 2391
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2392,
                      "end": 2397
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2390,
                    "end": 2397
                  },
                  "directive": null,
                  "start": 2390,
                  "end": 2398
                }
              ],
              "start": 2380,
              "end": 2415
            },
            "start": 2310,
            "end": 2415
          }
        ],
        "start": 2304,
        "end": 2417
      },
      "expression": false,
      "start": 2252,
      "end": 2417
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2428,
        "end": 2432
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
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RuntimeValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2436,
                    "end": 2448
                  },
                  "typeArguments": null,
                  "start": 2436,
                  "end": 2448
                },
                {
                  "type": "TSUnionType",
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
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2454,
                            "end": 2458
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "number",
                                "raw": "'number'",
                                "start": 2460,
                                "end": 2468
                              },
                              "start": 2460,
                              "end": 2468
                            },
                            "start": 2458,
                            "end": 2468
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 2454,
                          "end": 2468
                        }
                      ],
                      "start": 2452,
                      "end": 2470
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
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2475,
                            "end": 2479
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "string",
                                "raw": "'string'",
                                "start": 2481,
                                "end": 2489
                              },
                              "start": 2481,
                              "end": 2489
                            },
                            "start": 2479,
                            "end": 2489
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 2475,
                          "end": 2489
                        }
                      ],
                      "start": 2473,
                      "end": 2491
                    }
                  ],
                  "start": 2452,
                  "end": 2491
                }
              ],
              "start": 2436,
              "end": 2492
            },
            "start": 2434,
            "end": 2492
          },
          "start": 2433,
          "end": 2492
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2504,
                  "end": 2505
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2506,
                  "end": 2510
                },
                "optional": false,
                "computed": false,
                "start": 2504,
                "end": 2510
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "number",
                "raw": "'number'",
                "start": 2515,
                "end": 2523
              },
              "start": 2504,
              "end": 2523
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2535,
                      "end": 2536
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2537,
                      "end": 2542
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2535,
                    "end": 2542
                  },
                  "directive": null,
                  "start": 2535,
                  "end": 2543
                }
              ],
              "start": 2525,
              "end": 2560
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2580,
                      "end": 2581
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2582,
                      "end": 2587
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2580,
                    "end": 2587
                  },
                  "directive": null,
                  "start": 2580,
                  "end": 2588
                }
              ],
              "start": 2570,
              "end": 2605
            },
            "start": 2500,
            "end": 2605
          }
        ],
        "start": 2494,
        "end": 2607
      },
      "expression": false,
      "start": 2419,
      "end": 2607
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2607
}
```
