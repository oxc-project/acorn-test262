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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 17,
                "end": 24
              },
              "start": 15,
              "end": 24
            },
            "start": 14,
            "end": 24
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 24
        }
      ],
      "declare": true,
      "start": 0,
      "end": 25
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
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 43,
                "end": 49
              },
              "start": 41,
              "end": 49
            },
            "start": 40,
            "end": 49
          },
          "init": null,
          "definite": false,
          "start": 40,
          "end": 49
        }
      ],
      "declare": true,
      "start": 26,
      "end": 50
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
            "name": "sn",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 69,
                    "end": 75
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 78,
                    "end": 84
                  }
                ],
                "start": 69,
                "end": 84
              },
              "start": 67,
              "end": 84
            },
            "start": 65,
            "end": 84
          },
          "init": null,
          "definite": false,
          "start": 65,
          "end": 84
        }
      ],
      "declare": true,
      "start": 51,
      "end": 85
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 104,
        "end": 106
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 107,
              "end": 108
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 107,
            "end": 108
          }
        ],
        "start": 106,
        "end": 109
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 113,
                "end": 114
              },
              "typeArguments": null,
              "start": 113,
              "end": 114
            },
            "start": 111,
            "end": 114
          },
          "start": 110,
          "end": 114
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 119,
                  "end": 125
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 128,
                    "end": 129
                  },
                  "typeArguments": null,
                  "start": 128,
                  "end": 129
                }
              ],
              "start": 119,
              "end": 129
            },
            "start": 117,
            "end": 129
          },
          "start": 116,
          "end": 129
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 133
          },
          "typeArguments": null,
          "start": 132,
          "end": 133
        },
        "start": 130,
        "end": 133
      },
      "body": null,
      "expression": false,
      "start": 87,
      "end": 134
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 142,
            "end": 144
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 147,
              "end": 149
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 150,
                "end": 151
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 153,
                "end": 154
              }
            ],
            "optional": false,
            "start": 147,
            "end": 155
          },
          "definite": false,
          "start": 142,
          "end": 155
        }
      ],
      "declare": false,
      "start": 136,
      "end": 156
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
            "name": "a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 173,
            "end": 175
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 178,
              "end": 180
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 181,
                "end": 182
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 184,
                "end": 191
              }
            ],
            "optional": false,
            "start": 178,
            "end": 192
          },
          "definite": false,
          "start": 173,
          "end": 192
        }
      ],
      "declare": false,
      "start": 167,
      "end": 193
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
            "name": "a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 206,
            "end": 208
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 211,
              "end": 213
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 214,
                "end": 215
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sn",
                "optional": false,
                "typeAnnotation": null,
                "start": 217,
                "end": 219
              }
            ],
            "optional": false,
            "start": 211,
            "end": 220
          },
          "definite": false,
          "start": 206,
          "end": 220
        }
      ],
      "declare": false,
      "start": 200,
      "end": 221
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
            "name": "a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 239,
            "end": 241
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 244,
              "end": 246
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 247,
                "end": 256
              },
              {
                "type": "Literal",
                "value": "abc",
                "raw": "\"abc\"",
                "start": 258,
                "end": 263
              }
            ],
            "optional": false,
            "start": 244,
            "end": 264
          },
          "definite": false,
          "start": 239,
          "end": 264
        }
      ],
      "declare": false,
      "start": 233,
      "end": 265
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
            "name": "a5",
            "optional": false,
            "typeAnnotation": null,
            "start": 286,
            "end": 288
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 291,
              "end": 293
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 294,
                "end": 299
              },
              {
                "type": "Literal",
                "value": "bar",
                "raw": "\"bar\"",
                "start": 301,
                "end": 306
              }
            ],
            "optional": false,
            "start": 291,
            "end": 307
          },
          "definite": false,
          "start": 286,
          "end": 307
        }
      ],
      "declare": false,
      "start": 280,
      "end": 308
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
            "name": "a6",
            "optional": false,
            "typeAnnotation": null,
            "start": 325,
            "end": 327
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 330,
              "end": 332
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 333,
                "end": 337
              },
              {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 339,
                "end": 344
              }
            ],
            "optional": false,
            "start": 330,
            "end": 345
          },
          "definite": false,
          "start": 325,
          "end": 345
        }
      ],
      "declare": false,
      "start": 319,
      "end": 346
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
            "name": "a7",
            "optional": false,
            "typeAnnotation": null,
            "start": 365,
            "end": 367
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 370,
              "end": 372
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 373,
                "end": 380
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 382,
                "end": 383
              }
            ],
            "optional": false,
            "start": 370,
            "end": 384
          },
          "definite": false,
          "start": 365,
          "end": 384
        }
      ],
      "declare": false,
      "start": 359,
      "end": 385
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 414,
        "end": 416
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 417,
              "end": 418
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 417,
            "end": 418
          }
        ],
        "start": 416,
        "end": 419
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 428,
                  "end": 434
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 436,
                    "end": 437
                  },
                  "typeArguments": null,
                  "start": 436,
                  "end": 437
                }
              ],
              "start": 427,
              "end": 438
            },
            "start": 425,
            "end": 438
          },
          "start": 420,
          "end": 438
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 441,
            "end": 442
          },
          "typeArguments": null,
          "start": 441,
          "end": 442
        },
        "start": 439,
        "end": 442
      },
      "body": null,
      "expression": false,
      "start": 397,
      "end": 443
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
            "typeAnnotation": null,
            "start": 449,
            "end": 451
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 454,
              "end": 456
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 458,
                    "end": 466
                  },
                  {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 468,
                    "end": 472
                  }
                ],
                "start": 457,
                "end": 473
              }
            ],
            "optional": false,
            "start": 454,
            "end": 474
          },
          "definite": false,
          "start": 449,
          "end": 474
        }
      ],
      "declare": false,
      "start": 445,
      "end": 475
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 506,
        "end": 508
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 509,
              "end": 510
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 509,
            "end": 510
          }
        ],
        "start": 508,
        "end": 511
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
                  "type": "TSStringKeyword",
                  "start": 515,
                  "end": 521
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 524,
                    "end": 529
                  },
                  "start": 524,
                  "end": 529
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 532,
                    "end": 533
                  },
                  "typeArguments": null,
                  "start": 532,
                  "end": 533
                }
              ],
              "start": 515,
              "end": 533
            },
            "start": 513,
            "end": 533
          },
          "start": 512,
          "end": 533
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 536,
            "end": 537
          },
          "typeArguments": null,
          "start": 536,
          "end": 537
        },
        "start": 534,
        "end": 537
      },
      "body": null,
      "expression": false,
      "start": 489,
      "end": 538
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
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 546,
            "end": 548
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null,
              "start": 551,
              "end": 553
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 554,
                "end": 555
              }
            ],
            "optional": false,
            "start": 551,
            "end": 556
          },
          "definite": false,
          "start": 546,
          "end": 556
        }
      ],
      "declare": false,
      "start": 540,
      "end": 557
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
            "name": "c2",
            "optional": false,
            "typeAnnotation": null,
            "start": 570,
            "end": 572
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null,
              "start": 575,
              "end": 577
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sn",
                "optional": false,
                "typeAnnotation": null,
                "start": 578,
                "end": 580
              }
            ],
            "optional": false,
            "start": 575,
            "end": 581
          },
          "definite": false,
          "start": 570,
          "end": 581
        }
      ],
      "declare": false,
      "start": 564,
      "end": 582
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
            "name": "c3",
            "optional": false,
            "typeAnnotation": null,
            "start": 600,
            "end": 602
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null,
              "start": 605,
              "end": 607
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 608,
                "end": 612
              }
            ],
            "optional": false,
            "start": 605,
            "end": 613
          },
          "definite": false,
          "start": 600,
          "end": 613
        }
      ],
      "declare": false,
      "start": 594,
      "end": 614
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
            "name": "c4",
            "optional": false,
            "typeAnnotation": null,
            "start": 630,
            "end": 632
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null,
              "start": 635,
              "end": 637
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 638,
                "end": 639
              }
            ],
            "optional": false,
            "start": 635,
            "end": 640
          },
          "definite": false,
          "start": 630,
          "end": 640
        }
      ],
      "declare": false,
      "start": 624,
      "end": 641
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
            "name": "c5",
            "optional": false,
            "typeAnnotation": null,
            "start": 657,
            "end": 659
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null,
              "start": 662,
              "end": 664
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "abc",
                "raw": "\"abc\"",
                "start": 665,
                "end": 670
              }
            ],
            "optional": false,
            "start": 662,
            "end": 671
          },
          "definite": false,
          "start": 657,
          "end": 671
        }
      ],
      "declare": false,
      "start": 651,
      "end": 672
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 701,
        "end": 703
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 704,
              "end": 705
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 704,
            "end": 705
          }
        ],
        "start": 703,
        "end": 706
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
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 710,
                  "end": 716
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 719,
                    "end": 720
                  },
                  "typeArguments": null,
                  "start": 719,
                  "end": 720
                }
              ],
              "start": 710,
              "end": 720
            },
            "start": 708,
            "end": 720
          },
          "start": 707,
          "end": 720
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 723,
            "end": 724
          },
          "typeArguments": null,
          "start": 723,
          "end": 724
        },
        "start": 721,
        "end": 724
      },
      "body": null,
      "expression": false,
      "start": 684,
      "end": 725
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
            "name": "d1",
            "optional": false,
            "typeAnnotation": null,
            "start": 733,
            "end": 735
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null,
              "start": 738,
              "end": 740
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "abc",
                "raw": "\"abc\"",
                "start": 741,
                "end": 746
              }
            ],
            "optional": false,
            "start": 738,
            "end": 747
          },
          "definite": false,
          "start": 733,
          "end": 747
        }
      ],
      "declare": false,
      "start": 727,
      "end": 748
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
            "name": "d2",
            "optional": false,
            "typeAnnotation": null,
            "start": 755,
            "end": 757
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null,
              "start": 760,
              "end": 762
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 763,
                "end": 764
              }
            ],
            "optional": false,
            "start": 760,
            "end": 765
          },
          "definite": false,
          "start": 755,
          "end": 765
        }
      ],
      "declare": false,
      "start": 749,
      "end": 766
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
            "name": "d3",
            "optional": false,
            "typeAnnotation": null,
            "start": 773,
            "end": 775
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null,
              "start": 778,
              "end": 780
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 781,
                "end": 783
              }
            ],
            "optional": false,
            "start": 778,
            "end": 784
          },
          "definite": false,
          "start": 773,
          "end": 784
        }
      ],
      "declare": false,
      "start": 767,
      "end": 785
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 814,
          "end": 817
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
                "start": 818,
                "end": 819
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 818,
              "end": 819
            }
          ],
          "start": 817,
          "end": 820
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 827,
                "end": 831
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 832,
                      "end": 833
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 832,
                    "end": 833
                  }
                ],
                "start": 831,
                "end": 834
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
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
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 842,
                                "end": 843
                              },
                              "typeArguments": null,
                              "start": 842,
                              "end": 843
                            },
                            "start": 840,
                            "end": 843
                          },
                          "start": 839,
                          "end": 843
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 848,
                                "end": 849
                              },
                              "typeArguments": null,
                              "start": 848,
                              "end": 849
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Foo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 852,
                                "end": 855
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 856,
                                      "end": 857
                                    },
                                    "typeArguments": null,
                                    "start": 856,
                                    "end": 857
                                  }
                                ],
                                "start": 855,
                                "end": 858
                              },
                              "start": 852,
                              "end": 858
                            }
                          ],
                          "start": 848,
                          "end": 858
                        },
                        "start": 845,
                        "end": 858
                      },
                      "start": 838,
                      "end": 858
                    },
                    "start": 836,
                    "end": 858
                  },
                  "start": 835,
                  "end": 858
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 863,
                        "end": 864
                      },
                      "typeArguments": null,
                      "start": 863,
                      "end": 864
                    },
                    "start": 861,
                    "end": 864
                  },
                  "start": 860,
                  "end": 864
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 867,
                    "end": 870
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 871,
                          "end": 872
                        },
                        "typeArguments": null,
                        "start": 871,
                        "end": 872
                      }
                    ],
                    "start": 870,
                    "end": 873
                  },
                  "start": 867,
                  "end": 873
                },
                "start": 865,
                "end": 873
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 827,
              "end": 874
            }
          ],
          "start": 821,
          "end": 876
        },
        "declare": false,
        "start": 804,
        "end": 876
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 797,
      "end": 876
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 894,
          "end": 897
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
                "start": 898,
                "end": 899
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 898,
              "end": 899
            }
          ],
          "start": 897,
          "end": 900
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 907,
                "end": 911
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 912,
                      "end": 913
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 912,
                    "end": 913
                  }
                ],
                "start": 911,
                "end": 914
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
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
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 922,
                                "end": 923
                              },
                              "typeArguments": null,
                              "start": 922,
                              "end": 923
                            },
                            "start": 920,
                            "end": 923
                          },
                          "start": 919,
                          "end": 923
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "S",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 928,
                                "end": 929
                              },
                              "typeArguments": null,
                              "start": 928,
                              "end": 929
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Bar",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 932,
                                "end": 935
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "S",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 936,
                                      "end": 937
                                    },
                                    "typeArguments": null,
                                    "start": 936,
                                    "end": 937
                                  }
                                ],
                                "start": 935,
                                "end": 938
                              },
                              "start": 932,
                              "end": 938
                            }
                          ],
                          "start": 928,
                          "end": 938
                        },
                        "start": 925,
                        "end": 938
                      },
                      "start": 918,
                      "end": 938
                    },
                    "start": 916,
                    "end": 938
                  },
                  "start": 915,
                  "end": 938
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 943,
                        "end": 944
                      },
                      "typeArguments": null,
                      "start": 943,
                      "end": 944
                    },
                    "start": 941,
                    "end": 944
                  },
                  "start": 940,
                  "end": 944
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 947,
                    "end": 950
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "S",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 951,
                          "end": 952
                        },
                        "typeArguments": null,
                        "start": 951,
                        "end": 952
                      }
                    ],
                    "start": 950,
                    "end": 953
                  },
                  "start": 947,
                  "end": 953
                },
                "start": 945,
                "end": 953
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 907,
              "end": 954
            }
          ],
          "start": 901,
          "end": 956
        },
        "declare": false,
        "start": 884,
        "end": 956
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 877,
      "end": 956
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "qux",
        "optional": false,
        "typeAnnotation": null,
        "start": 967,
        "end": 970
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p1",
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
                "start": 975,
                "end": 978
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSVoidKeyword",
                    "start": 979,
                    "end": 983
                  }
                ],
                "start": 978,
                "end": 984
              },
              "start": 975,
              "end": 984
            },
            "start": 973,
            "end": 984
          },
          "start": 971,
          "end": 984
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 990,
                "end": 993
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSVoidKeyword",
                    "start": 994,
                    "end": 998
                  }
                ],
                "start": 993,
                "end": 999
              },
              "start": 990,
              "end": 999
            },
            "start": 988,
            "end": 999
          },
          "start": 986,
          "end": 999
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
                "name": "p1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1007,
                "end": 1009
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "p2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1012,
                "end": 1014
              },
              "start": 1007,
              "end": 1014
            },
            "directive": null,
            "start": 1007,
            "end": 1015
          }
        ],
        "start": 1001,
        "end": 1017
      },
      "expression": false,
      "start": 958,
      "end": 1017
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1059,
        "end": 1062
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 1063,
              "end": 1064
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1063,
            "end": 1064
          }
        ],
        "start": 1062,
        "end": 1065
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
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1069,
                    "end": 1070
                  },
                  "typeArguments": null,
                  "start": 1069,
                  "end": 1070
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1073,
                    "end": 1080
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1081,
                          "end": 1082
                        },
                        "typeArguments": null,
                        "start": 1081,
                        "end": 1082
                      }
                    ],
                    "start": 1080,
                    "end": 1083
                  },
                  "start": 1073,
                  "end": 1083
                }
              ],
              "start": 1069,
              "end": 1083
            },
            "start": 1067,
            "end": 1083
          },
          "start": 1066,
          "end": 1083
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1086,
          "end": 1090
        },
        "start": 1084,
        "end": 1090
      },
      "body": null,
      "expression": false,
      "start": 1042,
      "end": 1091
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
                      "value": false,
                      "raw": "false",
                      "start": 1107,
                      "end": 1112
                    },
                    "start": 1107,
                    "end": 1112
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1115,
                      "end": 1122
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 1123,
                            "end": 1127
                          },
                          "start": 1123,
                          "end": 1127
                        }
                      ],
                      "start": 1122,
                      "end": 1128
                    },
                    "start": 1115,
                    "end": 1128
                  }
                ],
                "start": 1107,
                "end": 1128
              },
              "start": 1105,
              "end": 1128
            },
            "start": 1104,
            "end": 1128
          },
          "init": null,
          "definite": false,
          "start": 1104,
          "end": 1128
        }
      ],
      "declare": true,
      "start": 1092,
      "end": 1129
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 1130,
          "end": 1133
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1134,
            "end": 1135
          }
        ],
        "optional": false,
        "start": 1130,
        "end": 1136
      },
      "directive": null,
      "start": 1130,
      "end": 1137
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 1156,
        "end": 1159
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 1160,
              "end": 1161
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1160,
            "end": 1161
          }
        ],
        "start": 1159,
        "end": 1162
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1166,
                "end": 1167
              },
              "typeArguments": null,
              "start": 1166,
              "end": 1167
            },
            "start": 1164,
            "end": 1167
          },
          "start": 1163,
          "end": 1167
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 1172,
                  "end": 1178
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1181,
                    "end": 1182
                  },
                  "typeArguments": null,
                  "start": 1181,
                  "end": 1182
                }
              ],
              "start": 1172,
              "end": 1182
            },
            "start": 1170,
            "end": 1182
          },
          "start": 1169,
          "end": 1182
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1185,
            "end": 1186
          },
          "typeArguments": null,
          "start": 1185,
          "end": 1186
        },
        "start": 1183,
        "end": 1186
      },
      "body": null,
      "expression": false,
      "start": 1139,
      "end": 1187
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 1194,
            "end": 1195
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 1198,
              "end": 1201
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1202,
                "end": 1203
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1205,
                "end": 1206
              }
            ],
            "optional": false,
            "start": 1198,
            "end": 1207
          },
          "definite": false,
          "start": 1194,
          "end": 1207
        }
      ],
      "declare": false,
      "start": 1188,
      "end": 1208
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
            "name": "containsPromises",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 1263,
                  "end": 1269
                },
                "start": 1256,
                "end": 1269
              },
              "start": 1254,
              "end": 1269
            },
            "start": 1238,
            "end": 1269
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 1272,
              "end": 1278
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1272,
            "end": 1280
          },
          "definite": false,
          "start": 1238,
          "end": 1280
        }
      ],
      "declare": false,
      "start": 1232,
      "end": 1281
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DeepPromised",
        "optional": false,
        "typeAnnotation": null,
        "start": 1288,
        "end": 1300
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
              "start": 1301,
              "end": 1302
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1301,
            "end": 1302
          }
        ],
        "start": 1300,
        "end": 1303
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": true,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "containsPromises",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1313,
                  "end": 1329
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 1333,
                      "end": 1337
                    },
                    "start": 1333,
                    "end": 1337
                  },
                  "start": 1331,
                  "end": 1337
                },
                "accessibility": null,
                "static": false,
                "start": 1312,
                "end": 1337
              }
            ],
            "start": 1310,
            "end": 1339
          },
          {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "TKey",
              "optional": false,
              "typeAnnotation": null,
              "start": 1349,
              "end": 1353
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1363,
                  "end": 1364
                },
                "typeArguments": null,
                "start": 1363,
                "end": 1364
              },
              "start": 1357,
              "end": 1364
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1367,
                      "end": 1368
                    },
                    "typeArguments": null,
                    "start": 1367,
                    "end": 1368
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TKey",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1369,
                      "end": 1373
                    },
                    "typeArguments": null,
                    "start": 1369,
                    "end": 1373
                  },
                  "start": 1367,
                  "end": 1374
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DeepPromised",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1377,
                    "end": 1389
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1390,
                            "end": 1391
                          },
                          "typeArguments": null,
                          "start": 1390,
                          "end": 1391
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TKey",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1392,
                            "end": 1396
                          },
                          "typeArguments": null,
                          "start": 1392,
                          "end": 1396
                        },
                        "start": 1390,
                        "end": 1397
                      }
                    ],
                    "start": 1389,
                    "end": 1398
                  },
                  "start": 1377,
                  "end": 1398
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1401,
                    "end": 1408
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "DeepPromised",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1409,
                          "end": 1421
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSIndexedAccessType",
                              "objectType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1422,
                                  "end": 1423
                                },
                                "typeArguments": null,
                                "start": 1422,
                                "end": 1423
                              },
                              "indexType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TKey",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1424,
                                  "end": 1428
                                },
                                "typeArguments": null,
                                "start": 1424,
                                "end": 1428
                              },
                              "start": 1422,
                              "end": 1429
                            }
                          ],
                          "start": 1421,
                          "end": 1430
                        },
                        "start": 1409,
                        "end": 1430
                      }
                    ],
                    "start": 1408,
                    "end": 1431
                  },
                  "start": 1401,
                  "end": 1431
                }
              ],
              "start": 1367,
              "end": 1431
            },
            "optional": false,
            "readonly": null,
            "start": 1346,
            "end": 1433
          }
        ],
        "start": 1310,
        "end": 1433
      },
      "declare": false,
      "start": 1283,
      "end": 1434
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fun",
        "optional": false,
        "typeAnnotation": null,
        "start": 1451,
        "end": 1454
      },
      "generator": false,
      "async": true,
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
              "start": 1455,
              "end": 1456
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1455,
            "end": 1456
          }
        ],
        "start": 1454,
        "end": 1457
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "deepPromised",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DeepPromised",
                "optional": false,
                "typeAnnotation": null,
                "start": 1472,
                "end": 1484
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1485,
                      "end": 1486
                    },
                    "typeArguments": null,
                    "start": 1485,
                    "end": 1486
                  }
                ],
                "start": 1484,
                "end": 1487
              },
              "start": 1472,
              "end": 1487
            },
            "start": 1470,
            "end": 1487
          },
          "start": 1458,
          "end": 1487
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
                  "name": "deepPromisedWithIndexer",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "DeepPromised",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1526,
                        "end": 1538
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSIndexSignature",
                                "parameters": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "name",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 1548,
                                        "end": 1554
                                      },
                                      "start": 1546,
                                      "end": 1554
                                    },
                                    "start": 1542,
                                    "end": 1554
                                  }
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSUnionType",
                                    "types": [
                                      {
                                        "type": "TSTypeLiteral",
                                        "members": [],
                                        "start": 1557,
                                        "end": 1559
                                      },
                                      {
                                        "type": "TSNullKeyword",
                                        "start": 1562,
                                        "end": 1566
                                      },
                                      {
                                        "type": "TSUndefinedKeyword",
                                        "start": 1569,
                                        "end": 1578
                                      }
                                    ],
                                    "start": 1557,
                                    "end": 1578
                                  },
                                  "start": 1555,
                                  "end": 1578
                                },
                                "readonly": false,
                                "static": false,
                                "accessibility": null,
                                "start": 1541,
                                "end": 1578
                              }
                            ],
                            "start": 1539,
                            "end": 1580
                          }
                        ],
                        "start": 1538,
                        "end": 1581
                      },
                      "start": 1526,
                      "end": 1581
                    },
                    "start": 1524,
                    "end": 1581
                  },
                  "start": 1501,
                  "end": 1581
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "deepPromised",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1584,
                  "end": 1596
                },
                "definite": false,
                "start": 1501,
                "end": 1596
              }
            ],
            "declare": false,
            "start": 1495,
            "end": 1597
          },
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1613,
                    "end": 1618
                  },
                  "init": null,
                  "definite": false,
                  "start": 1613,
                  "end": 1618
                }
              ],
              "declare": false,
              "start": 1607,
              "end": 1618
            },
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1622,
                  "end": 1628
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "values",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1629,
                  "end": 1635
                },
                "optional": false,
                "computed": false,
                "start": 1622,
                "end": 1635
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "deepPromisedWithIndexer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1636,
                  "end": 1659
                }
              ],
              "optional": false,
              "start": 1622,
              "end": 1660
            },
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
                        "name": "awaitedValue",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1678,
                        "end": 1690
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1699,
                          "end": 1704
                        },
                        "start": 1693,
                        "end": 1704
                      },
                      "definite": false,
                      "start": 1678,
                      "end": 1704
                    }
                  ],
                  "declare": false,
                  "start": 1672,
                  "end": 1705
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "awaitedValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1718,
                    "end": 1730
                  },
                  "consequent": {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fun",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1750,
                          "end": 1753
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "awaitedValue",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1754,
                            "end": 1766
                          }
                        ],
                        "optional": false,
                        "start": 1750,
                        "end": 1767
                      },
                      "start": 1744,
                      "end": 1767
                    },
                    "directive": null,
                    "start": 1744,
                    "end": 1768
                  },
                  "alternate": null,
                  "start": 1714,
                  "end": 1768
                }
              ],
              "start": 1662,
              "end": 1774
            },
            "start": 1602,
            "end": 1774
          }
        ],
        "start": 1489,
        "end": 1776
      },
      "expression": false,
      "start": 1436,
      "end": 1776
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Deep",
        "optional": false,
        "typeAnnotation": null,
        "start": 1805,
        "end": 1809
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
              "start": 1810,
              "end": 1811
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1810,
            "end": 1811
          }
        ],
        "start": 1809,
        "end": 1812
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 1818,
          "end": 1819
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1829,
              "end": 1830
            },
            "typeArguments": null,
            "start": 1829,
            "end": 1830
          },
          "start": 1823,
          "end": 1830
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1833,
                  "end": 1834
                },
                "typeArguments": null,
                "start": 1833,
                "end": 1834
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1835,
                  "end": 1836
                },
                "typeArguments": null,
                "start": 1835,
                "end": 1836
              },
              "start": 1833,
              "end": 1837
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Deep",
                "optional": false,
                "typeAnnotation": null,
                "start": 1840,
                "end": 1844
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1845,
                        "end": 1846
                      },
                      "typeArguments": null,
                      "start": 1845,
                      "end": 1846
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1847,
                        "end": 1848
                      },
                      "typeArguments": null,
                      "start": 1847,
                      "end": 1848
                    },
                    "start": 1845,
                    "end": 1849
                  }
                ],
                "start": 1844,
                "end": 1850
              },
              "start": 1840,
              "end": 1850
            }
          ],
          "start": 1833,
          "end": 1850
        },
        "optional": false,
        "readonly": null,
        "start": 1815,
        "end": 1852
      },
      "declare": false,
      "start": 1800,
      "end": 1853
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "baz",
        "optional": false,
        "typeAnnotation": null,
        "start": 1872,
        "end": 1875
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 1876,
              "end": 1877
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1876,
            "end": 1877
          }
        ],
        "start": 1875,
        "end": 1878
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "dp",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Deep",
                "optional": false,
                "typeAnnotation": null,
                "start": 1883,
                "end": 1887
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1888,
                      "end": 1889
                    },
                    "typeArguments": null,
                    "start": 1888,
                    "end": 1889
                  }
                ],
                "start": 1887,
                "end": 1890
              },
              "start": 1883,
              "end": 1890
            },
            "start": 1881,
            "end": 1890
          },
          "start": 1879,
          "end": 1890
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1893,
            "end": 1894
          },
          "typeArguments": null,
          "start": 1893,
          "end": 1894
        },
        "start": 1891,
        "end": 1894
      },
      "body": null,
      "expression": false,
      "start": 1855,
      "end": 1895
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
            "name": "xx",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1914,
                      "end": 1915
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 1917,
                            "end": 1923
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 1926,
                            "end": 1935
                          }
                        ],
                        "start": 1917,
                        "end": 1935
                      },
                      "start": 1915,
                      "end": 1935
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1914,
                    "end": 1935
                  }
                ],
                "start": 1912,
                "end": 1937
              },
              "start": 1910,
              "end": 1937
            },
            "start": 1908,
            "end": 1937
          },
          "init": null,
          "definite": false,
          "start": 1908,
          "end": 1937
        }
      ],
      "declare": true,
      "start": 1896,
      "end": 1938
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "baz",
          "optional": false,
          "typeAnnotation": null,
          "start": 1940,
          "end": 1943
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "xx",
            "optional": false,
            "typeAnnotation": null,
            "start": 1944,
            "end": 1946
          }
        ],
        "optional": false,
        "start": 1940,
        "end": 1947
      },
      "directive": null,
      "start": 1940,
      "end": 1948
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1948
}
```
