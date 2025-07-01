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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeLiteral",
                  "members": [],
                  "start": 7,
                  "end": 9
                },
                "start": 7,
                "end": 11
              },
              "start": 5,
              "end": 11
            },
            "start": 4,
            "end": 11
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 16,
                    "end": 17
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 19,
                    "end": 20
                  },
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 22,
                    "end": 23
                  }
                ],
                "start": 15,
                "end": 24
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 27,
                    "end": 34
                  }
                ],
                "start": 26,
                "end": 35
              }
            ],
            "start": 14,
            "end": 36
          },
          "definite": false,
          "start": 4,
          "end": 36
        }
      ],
      "declare": false,
      "start": 0,
      "end": 37
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 49
            },
            "init": null,
            "definite": false,
            "start": 48,
            "end": 49
          }
        ],
        "declare": false,
        "start": 44,
        "end": 49
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 53,
        "end": 54
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForInStatement",
            "left": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "j",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 71,
                    "end": 72
                  },
                  "init": null,
                  "definite": false,
                  "start": 71,
                  "end": 72
                }
              ],
              "declare": false,
              "start": 67,
              "end": 72
            },
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 76,
                "end": 77
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 78,
                "end": 79
              },
              "optional": false,
              "computed": true,
              "start": 76,
              "end": 80
            },
            "body": {
              "type": "BlockStatement",
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
                        "name": "_j",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 144,
                        "end": 146
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 149,
                            "end": 150
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 151,
                            "end": 152
                          },
                          "optional": false,
                          "computed": true,
                          "start": 149,
                          "end": 153
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "j",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 154,
                          "end": 155
                        },
                        "optional": false,
                        "computed": true,
                        "start": 149,
                        "end": 156
                      },
                      "definite": false,
                      "start": 144,
                      "end": 156
                    }
                  ],
                  "declare": false,
                  "start": 140,
                  "end": 157
                }
              ],
              "start": 82,
              "end": 163
            },
            "start": 62,
            "end": 163
          },
          {
            "type": "ForInStatement",
            "left": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 178,
                    "end": 179
                  },
                  "init": null,
                  "definite": false,
                  "start": 178,
                  "end": 179
                }
              ],
              "declare": false,
              "start": 174,
              "end": 179
            },
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 183,
                "end": 184
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 185,
                "end": 186
              },
              "optional": false,
              "computed": true,
              "start": 183,
              "end": 187
            },
            "body": {
              "type": "BlockStatement",
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
                        "name": "k1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 203,
                        "end": 205
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 208,
                          "end": 209
                        },
                        "property": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 210,
                          "end": 211
                        },
                        "optional": false,
                        "computed": true,
                        "start": 208,
                        "end": 212
                      },
                      "definite": false,
                      "start": 203,
                      "end": 212
                    }
                  ],
                  "declare": false,
                  "start": 199,
                  "end": 213
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 274,
                        "end": 276
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 279,
                          "end": 281
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 282,
                          "end": 283
                        },
                        "optional": false,
                        "computed": true,
                        "start": 279,
                        "end": 284
                      },
                      "definite": false,
                      "start": 274,
                      "end": 284
                    }
                  ],
                  "declare": false,
                  "start": 270,
                  "end": 285
                }
              ],
              "start": 189,
              "end": 291
            },
            "start": 169,
            "end": 291
          }
        ],
        "start": 56,
        "end": 293
      },
      "start": 39,
      "end": 293
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 304,
              "end": 305
            },
            "init": null,
            "definite": false,
            "start": 304,
            "end": 305
          }
        ],
        "declare": false,
        "start": 300,
        "end": 305
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 309,
        "end": 310
      },
      "body": {
        "type": "BlockStatement",
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 367,
                  "end": 368
                },
                "init": null,
                "definite": false,
                "start": 367,
                "end": 368
              }
            ],
            "declare": false,
            "start": 363,
            "end": 369
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 379,
                  "end": 380
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 383,
                    "end": 384
                  },
                  "operator": "||",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 388,
                    "end": 389
                  },
                  "start": 383,
                  "end": 389
                },
                "definite": false,
                "start": 379,
                "end": 389
              }
            ],
            "declare": false,
            "start": 375,
            "end": 390
          }
        ],
        "start": 312,
        "end": 392
      },
      "start": 295,
      "end": 392
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "idx",
            "optional": false,
            "typeAnnotation": null,
            "start": 398,
            "end": 401
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 404,
            "end": 405
          },
          "definite": false,
          "start": 398,
          "end": 405
        }
      ],
      "declare": false,
      "start": 394,
      "end": 406
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 411,
            "end": 412
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 416,
                "end": 417
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 419,
                "end": 420
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 422,
                "end": 423
              },
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 425,
                "end": 426
              },
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 428,
                "end": 429
              }
            ],
            "start": 415,
            "end": 430
          },
          "definite": false,
          "start": 411,
          "end": 430
        }
      ],
      "declare": false,
      "start": 407,
      "end": 431
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 477,
            "end": 478
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 482,
                  "end": 484
                }
              ],
              "start": 481,
              "end": 485
            },
            "operator": "||",
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 489,
              "end": 491
            },
            "start": 481,
            "end": 491
          },
          "definite": false,
          "start": 477,
          "end": 491
        }
      ],
      "declare": false,
      "start": 473,
      "end": 492
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null,
          "start": 499,
          "end": 500
        },
        "property": {
          "type": "UpdateExpression",
          "operator": "++",
          "prefix": false,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "idx",
            "optional": false,
            "typeAnnotation": null,
            "start": 501,
            "end": 504
          },
          "start": 501,
          "end": 506
        },
        "optional": false,
        "computed": true,
        "start": 499,
        "end": 507
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null,
        "start": 511,
        "end": 512
      },
      "body": {
        "type": "EmptyStatement",
        "start": 513,
        "end": 514
      },
      "start": 494,
      "end": 514
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 514
}
```
