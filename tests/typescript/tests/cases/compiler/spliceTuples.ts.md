__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "sb",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 19,
                    "end": 25
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 27,
                    "end": 34
                  }
                ],
                "start": 18,
                "end": 35
              },
              "start": 16,
              "end": 35
            },
            "start": 14,
            "end": 35
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 35
        }
      ],
      "declare": true,
      "start": 0,
      "end": 36
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "k1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 47,
                    "end": 53
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 55,
                    "end": 61
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 63,
                    "end": 70
                  }
                ],
                "start": 46,
                "end": 71
              },
              "start": 44,
              "end": 71
            },
            "start": 42,
            "end": 71
          },
          "init": null,
          "definite": false,
          "start": 42,
          "end": 71
        }
      ],
      "declare": false,
      "start": 38,
      "end": 72
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "k1",
          "optional": false,
          "typeAnnotation": null,
          "start": 73,
          "end": 75
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 79,
              "end": 80
            },
            {
              "type": "SpreadElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "sb",
                "optional": false,
                "typeAnnotation": null,
                "start": 85,
                "end": 87
              },
              "start": 82,
              "end": 87
            }
          ],
          "start": 78,
          "end": 88
        },
        "start": 73,
        "end": 88
      },
      "directive": null,
      "start": 73,
      "end": 89
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "k2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 100,
                    "end": 106
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 108,
                    "end": 114
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 116,
                    "end": 123
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 125,
                    "end": 131
                  }
                ],
                "start": 99,
                "end": 132
              },
              "start": 97,
              "end": 132
            },
            "start": 95,
            "end": 132
          },
          "init": null,
          "definite": false,
          "start": 95,
          "end": 132
        }
      ],
      "declare": false,
      "start": 91,
      "end": 133
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "k2",
          "optional": false,
          "typeAnnotation": null,
          "start": 134,
          "end": 136
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 140,
              "end": 141
            },
            {
              "type": "SpreadElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "sb",
                "optional": false,
                "typeAnnotation": null,
                "start": 146,
                "end": 148
              },
              "start": 143,
              "end": 148
            },
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 150,
              "end": 151
            }
          ],
          "start": 139,
          "end": 152
        },
        "start": 134,
        "end": 152
      },
      "directive": null,
      "start": 134,
      "end": 153
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
            "name": "sb_",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 175,
                    "end": 181
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSBooleanKeyword",
                        "start": 186,
                        "end": 193
                      },
                      "start": 186,
                      "end": 195
                    },
                    "start": 183,
                    "end": 195
                  }
                ],
                "start": 174,
                "end": 196
              },
              "start": 172,
              "end": 196
            },
            "start": 169,
            "end": 196
          },
          "init": null,
          "definite": false,
          "start": 169,
          "end": 196
        }
      ],
      "declare": true,
      "start": 155,
      "end": 197
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "k3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 208,
                    "end": 214
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 216,
                    "end": 222
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSBooleanKeyword",
                        "start": 227,
                        "end": 234
                      },
                      "start": 227,
                      "end": 236
                    },
                    "start": 224,
                    "end": 236
                  }
                ],
                "start": 207,
                "end": 237
              },
              "start": 205,
              "end": 237
            },
            "start": 203,
            "end": 237
          },
          "init": null,
          "definite": false,
          "start": 203,
          "end": 237
        }
      ],
      "declare": false,
      "start": 199,
      "end": 238
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "k3",
          "optional": false,
          "typeAnnotation": null,
          "start": 239,
          "end": 241
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 245,
              "end": 246
            },
            {
              "type": "SpreadElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "sb_",
                "optional": false,
                "typeAnnotation": null,
                "start": 251,
                "end": 254
              },
              "start": 248,
              "end": 254
            }
          ],
          "start": 244,
          "end": 255
        },
        "start": 239,
        "end": 255
      },
      "directive": null,
      "start": 239,
      "end": 256
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
            "name": "sbb_",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 279,
                    "end": 285
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 287,
                    "end": 294
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSBooleanKeyword",
                        "start": 299,
                        "end": 306
                      },
                      "start": 299,
                      "end": 308
                    },
                    "start": 296,
                    "end": 308
                  }
                ],
                "start": 278,
                "end": 309
              },
              "start": 276,
              "end": 309
            },
            "start": 272,
            "end": 309
          },
          "init": null,
          "definite": false,
          "start": 272,
          "end": 309
        }
      ],
      "declare": true,
      "start": 258,
      "end": 310
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "k4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 321,
                    "end": 327
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 329,
                    "end": 335
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSBooleanKeyword",
                        "start": 340,
                        "end": 347
                      },
                      "start": 340,
                      "end": 349
                    },
                    "start": 337,
                    "end": 349
                  }
                ],
                "start": 320,
                "end": 350
              },
              "start": 318,
              "end": 350
            },
            "start": 316,
            "end": 350
          },
          "init": null,
          "definite": false,
          "start": 316,
          "end": 350
        }
      ],
      "declare": false,
      "start": 312,
      "end": 351
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "k4",
          "optional": false,
          "typeAnnotation": null,
          "start": 352,
          "end": 354
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 358,
              "end": 359
            },
            {
              "type": "SpreadElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "sbb_",
                "optional": false,
                "typeAnnotation": null,
                "start": 364,
                "end": 368
              },
              "start": 361,
              "end": 368
            }
          ],
          "start": 357,
          "end": 369
        },
        "start": 352,
        "end": 369
      },
      "directive": null,
      "start": 352,
      "end": 370
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "k5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 381,
                    "end": 387
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 389,
                    "end": 395
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 397,
                    "end": 404
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSBooleanKeyword",
                        "start": 409,
                        "end": 416
                      },
                      "start": 409,
                      "end": 418
                    },
                    "start": 406,
                    "end": 418
                  }
                ],
                "start": 380,
                "end": 419
              },
              "start": 378,
              "end": 419
            },
            "start": 376,
            "end": 419
          },
          "init": null,
          "definite": false,
          "start": 376,
          "end": 419
        }
      ],
      "declare": false,
      "start": 372,
      "end": 420
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "k5",
          "optional": false,
          "typeAnnotation": null,
          "start": 421,
          "end": 423
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 427,
              "end": 428
            },
            {
              "type": "SpreadElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "sbb_",
                "optional": false,
                "typeAnnotation": null,
                "start": 433,
                "end": 437
              },
              "start": 430,
              "end": 437
            }
          ],
          "start": 426,
          "end": 438
        },
        "start": 421,
        "end": 438
      },
      "directive": null,
      "start": 421,
      "end": 439
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "k6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 450,
                    "end": 456
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 458,
                    "end": 464
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 466,
                    "end": 473
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 475,
                    "end": 482
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSBooleanKeyword",
                        "start": 487,
                        "end": 494
                      },
                      "start": 487,
                      "end": 496
                    },
                    "start": 484,
                    "end": 496
                  }
                ],
                "start": 449,
                "end": 497
              },
              "start": 447,
              "end": 497
            },
            "start": 445,
            "end": 497
          },
          "init": null,
          "definite": false,
          "start": 445,
          "end": 497
        }
      ],
      "declare": false,
      "start": 441,
      "end": 498
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "k6",
          "optional": false,
          "typeAnnotation": null,
          "start": 499,
          "end": 501
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 505,
              "end": 506
            },
            {
              "type": "SpreadElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "sbb_",
                "optional": false,
                "typeAnnotation": null,
                "start": 511,
                "end": 515
              },
              "start": 508,
              "end": 515
            }
          ],
          "start": 504,
          "end": 516
        },
        "start": 499,
        "end": 516
      },
      "directive": null,
      "start": 499,
      "end": 517
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 517
}
```
