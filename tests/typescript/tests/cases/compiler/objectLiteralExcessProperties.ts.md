__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Book",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 14
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
              "name": "foreword",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 29
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 31,
                "end": 37
              },
              "start": 29,
              "end": 37
            },
            "accessibility": null,
            "static": false,
            "start": 21,
            "end": 38
          }
        ],
        "start": 15,
        "end": 40
      },
      "declare": false,
      "start": 0,
      "end": 40
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Cover",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 57
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "color",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 69
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 72,
                "end": 78
              },
              "start": 70,
              "end": 78
            },
            "accessibility": null,
            "static": false,
            "start": 64,
            "end": 79
          }
        ],
        "start": 58,
        "end": 81
      },
      "declare": false,
      "start": 42,
      "end": 81
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
            "name": "b1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Book",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 91,
                  "end": 95
                },
                "typeArguments": null,
                "start": 91,
                "end": 95
              },
              "start": 89,
              "end": 95
            },
            "start": 87,
            "end": 95
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
                  "name": "forword",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 100,
                  "end": 107
                },
                "value": {
                  "type": "Literal",
                  "value": "oops",
                  "raw": "\"oops\"",
                  "start": 109,
                  "end": 115
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 100,
                "end": 115
              }
            ],
            "start": 98,
            "end": 117
          },
          "definite": false,
          "start": 87,
          "end": 117
        }
      ],
      "declare": false,
      "start": 83,
      "end": 118
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
            "name": "b2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Book",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 128,
                      "end": 132
                    },
                    "typeArguments": null,
                    "start": 128,
                    "end": 132
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 135,
                    "end": 141
                  }
                ],
                "start": 128,
                "end": 141
              },
              "start": 126,
              "end": 141
            },
            "start": 124,
            "end": 141
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
                  "name": "foreward",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 146,
                  "end": 154
                },
                "value": {
                  "type": "Literal",
                  "value": "nope",
                  "raw": "\"nope\"",
                  "start": 156,
                  "end": 162
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 146,
                "end": 162
              }
            ],
            "start": 144,
            "end": 164
          },
          "definite": false,
          "start": 124,
          "end": 164
        }
      ],
      "declare": false,
      "start": 120,
      "end": 165
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
            "name": "b3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Book",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 175,
                      "end": 179
                    },
                    "typeArguments": null,
                    "start": 175,
                    "end": 179
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Book",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 183,
                        "end": 187
                      },
                      "typeArguments": null,
                      "start": 183,
                      "end": 187
                    },
                    "start": 183,
                    "end": 189
                  }
                ],
                "start": 175,
                "end": 190
              },
              "start": 173,
              "end": 190
            },
            "start": 171,
            "end": 190
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foreword",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 196,
                      "end": 204
                    },
                    "value": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 206,
                      "end": 213
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 196,
                    "end": 213
                  }
                ],
                "start": 194,
                "end": 215
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "forwards",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 219,
                      "end": 227
                    },
                    "value": {
                      "type": "Literal",
                      "value": "back",
                      "raw": "\"back\"",
                      "start": 229,
                      "end": 235
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 219,
                    "end": 235
                  }
                ],
                "start": 217,
                "end": 237
              }
            ],
            "start": 193,
            "end": 238
          },
          "definite": false,
          "start": 171,
          "end": 238
        }
      ],
      "declare": false,
      "start": 167,
      "end": 239
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
            "name": "b4",
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
                      "name": "Book",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 249,
                      "end": 253
                    },
                    "typeArguments": null,
                    "start": 249,
                    "end": 253
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Cover",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 256,
                      "end": 261
                    },
                    "typeArguments": null,
                    "start": 256,
                    "end": 261
                  }
                ],
                "start": 249,
                "end": 261
              },
              "start": 247,
              "end": 261
            },
            "start": 245,
            "end": 261
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
                  "name": "foreword",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 266,
                  "end": 274
                },
                "value": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 276,
                  "end": 280
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 266,
                "end": 280
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "colour",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 282,
                  "end": 288
                },
                "value": {
                  "type": "Literal",
                  "value": "blue",
                  "raw": "\"blue\"",
                  "start": 290,
                  "end": 296
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 282,
                "end": 296
              }
            ],
            "start": 264,
            "end": 298
          },
          "definite": false,
          "start": 245,
          "end": 298
        }
      ],
      "declare": false,
      "start": 241,
      "end": 299
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
            "name": "b5",
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
                      "name": "Book",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 309,
                      "end": 313
                    },
                    "typeArguments": null,
                    "start": 309,
                    "end": 313
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Cover",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 316,
                      "end": 321
                    },
                    "typeArguments": null,
                    "start": 316,
                    "end": 321
                  }
                ],
                "start": 309,
                "end": 321
              },
              "start": 307,
              "end": 321
            },
            "start": 305,
            "end": 321
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
                  "name": "foreward",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 326,
                  "end": 334
                },
                "value": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 336,
                  "end": 340
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 326,
                "end": 340
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "color",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 342,
                  "end": 347
                },
                "value": {
                  "type": "Literal",
                  "value": "blue",
                  "raw": "\"blue\"",
                  "start": 349,
                  "end": 355
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 342,
                "end": 355
              }
            ],
            "start": 324,
            "end": 357
          },
          "definite": false,
          "start": 305,
          "end": 357
        }
      ],
      "declare": false,
      "start": 301,
      "end": 358
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
            "name": "b6",
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
                      "name": "Book",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 368,
                      "end": 372
                    },
                    "typeArguments": null,
                    "start": 368,
                    "end": 372
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Cover",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 375,
                      "end": 380
                    },
                    "typeArguments": null,
                    "start": 375,
                    "end": 380
                  }
                ],
                "start": 368,
                "end": 380
              },
              "start": 366,
              "end": 380
            },
            "start": 364,
            "end": 380
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
                  "name": "foreword",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 385,
                  "end": 393
                },
                "value": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 395,
                  "end": 399
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 385,
                "end": 399
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "color",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 401,
                  "end": 406
                },
                "value": {
                  "type": "Literal",
                  "value": "blue",
                  "raw": "\"blue\"",
                  "start": 408,
                  "end": 414
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 401,
                "end": 414
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "price",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 416,
                  "end": 421
                },
                "value": {
                  "type": "Literal",
                  "value": 10.99,
                  "raw": "10.99",
                  "start": 423,
                  "end": 428
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 416,
                "end": 428
              }
            ],
            "start": 383,
            "end": 430
          },
          "definite": false,
          "start": 364,
          "end": 430
        }
      ],
      "declare": false,
      "start": 360,
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
            "name": "b7",
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
                      "name": "Book",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 441,
                      "end": 445
                    },
                    "typeArguments": null,
                    "start": 441,
                    "end": 445
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 448,
                    "end": 454
                  }
                ],
                "start": 441,
                "end": 454
              },
              "start": 439,
              "end": 454
            },
            "start": 437,
            "end": 454
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
                  "name": "foreword",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 459,
                  "end": 467
                },
                "value": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 469,
                  "end": 473
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 459,
                "end": 473
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "price",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 475,
                  "end": 480
                },
                "value": {
                  "type": "Literal",
                  "value": 10.99,
                  "raw": "10.99",
                  "start": 482,
                  "end": 487
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 475,
                "end": 487
              }
            ],
            "start": 457,
            "end": 489
          },
          "definite": false,
          "start": 437,
          "end": 489
        }
      ],
      "declare": false,
      "start": 433,
      "end": 490
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
            "name": "b8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Cover",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 500,
                      "end": 505
                    },
                    "typeArguments": null,
                    "start": 500,
                    "end": 505
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Cover",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 508,
                        "end": 513
                      },
                      "typeArguments": null,
                      "start": 508,
                      "end": 513
                    },
                    "start": 508,
                    "end": 515
                  }
                ],
                "start": 500,
                "end": 515
              },
              "start": 498,
              "end": 515
            },
            "start": 496,
            "end": 515
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
                  "name": "couleur",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 520,
                  "end": 527
                },
                "value": {
                  "type": "Literal",
                  "value": "non",
                  "raw": "\"non\"",
                  "start": 530,
                  "end": 535
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 520,
                "end": 535
              }
            ],
            "start": 518,
            "end": 537
          },
          "definite": false,
          "start": 496,
          "end": 537
        }
      ],
      "declare": false,
      "start": 492,
      "end": 538
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
            "name": "b9",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Book",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 548,
                      "end": 552
                    },
                    "typeArguments": null,
                    "start": 548,
                    "end": 552
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Book",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 555,
                        "end": 559
                      },
                      "typeArguments": null,
                      "start": 555,
                      "end": 559
                    },
                    "start": 555,
                    "end": 561
                  }
                ],
                "start": 548,
                "end": 561
              },
              "start": 546,
              "end": 561
            },
            "start": 544,
            "end": 561
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
                  "name": "forewarned",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 566,
                  "end": 576
                },
                "value": {
                  "type": "Literal",
                  "value": "still no",
                  "raw": "\"still no\"",
                  "start": 578,
                  "end": 588
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 566,
                "end": 588
              }
            ],
            "start": 564,
            "end": 590
          },
          "definite": false,
          "start": 544,
          "end": 590
        }
      ],
      "declare": false,
      "start": 540,
      "end": 591
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Indexed",
        "optional": false,
        "typeAnnotation": null,
        "start": 603,
        "end": 610
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 621,
                    "end": 627
                  },
                  "start": 619,
                  "end": 627
                },
                "start": 618,
                "end": 627
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Cover",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 630,
                  "end": 635
                },
                "typeArguments": null,
                "start": 630,
                "end": 635
              },
              "start": 628,
              "end": 635
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 617,
            "end": 636
          }
        ],
        "start": 611,
        "end": 638
      },
      "declare": false,
      "start": 593,
      "end": 638
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
            "name": "b10",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Indexed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 649,
                  "end": 656
                },
                "typeArguments": null,
                "start": 649,
                "end": 656
              },
              "start": 647,
              "end": 656
            },
            "start": 644,
            "end": 656
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 661,
                  "end": 662
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 664,
                  "end": 667
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 661,
                "end": 667
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "1",
                  "raw": "'1'",
                  "start": 669,
                  "end": 672
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 674,
                  "end": 677
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 669,
                "end": 677
              }
            ],
            "start": 659,
            "end": 679
          },
          "definite": false,
          "start": 644,
          "end": 679
        }
      ],
      "declare": false,
      "start": 640,
      "end": 680
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
            "name": "b11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Indexed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 697,
                  "end": 704
                },
                "typeArguments": null,
                "start": 697,
                "end": 704
              },
              "start": 695,
              "end": 704
            },
            "start": 692,
            "end": 704
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 709,
                  "end": 710
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "colour",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 714,
                        "end": 720
                      },
                      "value": {
                        "type": "Literal",
                        "value": "blue",
                        "raw": "\"blue\"",
                        "start": 722,
                        "end": 728
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 714,
                      "end": 728
                    }
                  ],
                  "start": 712,
                  "end": 730
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 709,
                "end": 730
              }
            ],
            "start": 707,
            "end": 732
          },
          "definite": false,
          "start": 692,
          "end": 732
        }
      ],
      "declare": false,
      "start": 688,
      "end": 733
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 812,
        "end": 816
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
              "start": 817,
              "end": 818
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IFoo",
                "optional": false,
                "typeAnnotation": null,
                "start": 827,
                "end": 831
              },
              "typeArguments": null,
              "start": 827,
              "end": 831
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 817,
            "end": 831
          }
        ],
        "start": 816,
        "end": 832
      },
      "params": [],
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
                  "name": "obj1",
                  "optional": false,
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
                        "start": 903,
                        "end": 904
                      },
                      "typeArguments": null,
                      "start": 903,
                      "end": 904
                    },
                    "start": 901,
                    "end": 904
                  },
                  "start": 897,
                  "end": 904
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
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 909,
                        "end": 913
                      },
                      "value": {
                        "type": "Literal",
                        "value": "test",
                        "raw": "\"test\"",
                        "start": 915,
                        "end": 921
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 909,
                      "end": 921
                    }
                  ],
                  "start": 907,
                  "end": 923
                },
                "definite": false,
                "start": 897,
                "end": 923
              }
            ],
            "declare": false,
            "start": 891,
            "end": 924
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
                  "name": "obj2",
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
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1010,
                            "end": 1011
                          },
                          "typeArguments": null,
                          "start": 1010,
                          "end": 1011
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
                                "name": "prop",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1016,
                                "end": 1020
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSBooleanKeyword",
                                  "start": 1022,
                                  "end": 1029
                                },
                                "start": 1020,
                                "end": 1029
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 1016,
                              "end": 1029
                            }
                          ],
                          "start": 1014,
                          "end": 1031
                        }
                      ],
                      "start": 1010,
                      "end": 1031
                    },
                    "start": 1008,
                    "end": 1031
                  },
                  "start": 1004,
                  "end": 1031
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
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1036,
                        "end": 1040
                      },
                      "value": {
                        "type": "Literal",
                        "value": "test",
                        "raw": "\"test\"",
                        "start": 1042,
                        "end": 1048
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1036,
                      "end": 1048
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1050,
                        "end": 1054
                      },
                      "value": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 1056,
                        "end": 1060
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1050,
                      "end": 1060
                    }
                  ],
                  "start": 1034,
                  "end": 1062
                },
                "definite": false,
                "start": 1004,
                "end": 1062
              }
            ],
            "declare": false,
            "start": 998,
            "end": 1063
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
                  "name": "obj3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1146,
                            "end": 1147
                          },
                          "typeArguments": null,
                          "start": 1146,
                          "end": 1147
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
                                "name": "prop",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1152,
                                "end": 1156
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSBooleanKeyword",
                                  "start": 1158,
                                  "end": 1165
                                },
                                "start": 1156,
                                "end": 1165
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 1152,
                              "end": 1165
                            }
                          ],
                          "start": 1150,
                          "end": 1167
                        }
                      ],
                      "start": 1146,
                      "end": 1167
                    },
                    "start": 1144,
                    "end": 1167
                  },
                  "start": 1140,
                  "end": 1167
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
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1172,
                        "end": 1176
                      },
                      "value": {
                        "type": "Literal",
                        "value": "test",
                        "raw": "\"test\"",
                        "start": 1178,
                        "end": 1184
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1172,
                      "end": 1184
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1186,
                        "end": 1190
                      },
                      "value": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 1192,
                        "end": 1196
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1186,
                      "end": 1196
                    }
                  ],
                  "start": 1170,
                  "end": 1198
                },
                "definite": false,
                "start": 1140,
                "end": 1198
              }
            ],
            "declare": false,
            "start": 1134,
            "end": 1199
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
                  "name": "obj4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSIntersectionType",
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1282,
                                "end": 1283
                              },
                              "typeArguments": null,
                              "start": 1282,
                              "end": 1283
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
                                    "name": "prop",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1288,
                                    "end": 1292
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSBooleanKeyword",
                                      "start": 1294,
                                      "end": 1301
                                    },
                                    "start": 1292,
                                    "end": 1301
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 1288,
                                  "end": 1301
                                }
                              ],
                              "start": 1286,
                              "end": 1303
                            }
                          ],
                          "start": 1282,
                          "end": 1303
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
                                "name": "name",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1308,
                                "end": 1312
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 1314,
                                  "end": 1320
                                },
                                "start": 1312,
                                "end": 1320
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 1308,
                              "end": 1320
                            }
                          ],
                          "start": 1306,
                          "end": 1322
                        }
                      ],
                      "start": 1282,
                      "end": 1322
                    },
                    "start": 1280,
                    "end": 1322
                  },
                  "start": 1276,
                  "end": 1322
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
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1327,
                        "end": 1331
                      },
                      "value": {
                        "type": "Literal",
                        "value": "test",
                        "raw": "\"test\"",
                        "start": 1333,
                        "end": 1339
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1327,
                      "end": 1339
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1341,
                        "end": 1345
                      },
                      "value": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 1347,
                        "end": 1351
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1341,
                      "end": 1351
                    }
                  ],
                  "start": 1325,
                  "end": 1353
                },
                "definite": false,
                "start": 1276,
                "end": 1353
              }
            ],
            "declare": false,
            "start": 1270,
            "end": 1354
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
                  "name": "obj5",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSObjectKeyword",
                          "start": 1438,
                          "end": 1444
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
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1449,
                                "end": 1450
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 1452,
                                  "end": 1458
                                },
                                "start": 1450,
                                "end": 1458
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 1449,
                              "end": 1458
                            }
                          ],
                          "start": 1447,
                          "end": 1460
                        }
                      ],
                      "start": 1438,
                      "end": 1460
                    },
                    "start": 1436,
                    "end": 1460
                  },
                  "start": 1432,
                  "end": 1460
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
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1465,
                        "end": 1466
                      },
                      "value": {
                        "type": "Literal",
                        "value": "abc",
                        "raw": "'abc'",
                        "start": 1468,
                        "end": 1473
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1465,
                      "end": 1473
                    }
                  ],
                  "start": 1463,
                  "end": 1475
                },
                "definite": false,
                "start": 1432,
                "end": 1475
              }
            ],
            "declare": false,
            "start": 1426,
            "end": 1475
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
                  "name": "obj6",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSObjectKeyword",
                          "start": 1548,
                          "end": 1554
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
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1559,
                                "end": 1560
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 1562,
                                  "end": 1568
                                },
                                "start": 1560,
                                "end": 1568
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 1559,
                              "end": 1568
                            }
                          ],
                          "start": 1557,
                          "end": 1570
                        }
                      ],
                      "start": 1548,
                      "end": 1570
                    },
                    "start": 1546,
                    "end": 1570
                  },
                  "start": 1542,
                  "end": 1570
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
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1575,
                        "end": 1576
                      },
                      "value": {
                        "type": "Literal",
                        "value": "abc",
                        "raw": "'abc'",
                        "start": 1578,
                        "end": 1583
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1575,
                      "end": 1583
                    }
                  ],
                  "start": 1573,
                  "end": 1585
                },
                "definite": false,
                "start": 1542,
                "end": 1585
              }
            ],
            "declare": false,
            "start": 1536,
            "end": 1585
          }
        ],
        "start": 835,
        "end": 1587
      },
      "expression": false,
      "start": 803,
      "end": 1587
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1587
}
```
