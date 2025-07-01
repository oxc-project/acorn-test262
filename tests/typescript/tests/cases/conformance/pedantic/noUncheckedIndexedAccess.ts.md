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
        "name": "CheckBooleanOnly",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 21
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
              "start": 22,
              "end": 23
            },
            "constraint": {
              "type": "TSBooleanKeyword",
              "start": 32,
              "end": 39
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 22,
            "end": 39
          }
        ],
        "start": 21,
        "end": 40
      },
      "typeAnnotation": {
        "type": "TSAnyKeyword",
        "start": 43,
        "end": 46
      },
      "declare": false,
      "start": 0,
      "end": 47
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T_ERR1",
        "optional": false,
        "typeAnnotation": null,
        "start": 103,
        "end": 109
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "CheckBooleanOnly",
          "optional": false,
          "typeAnnotation": null,
          "start": 112,
          "end": 128
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSBooleanKeyword",
                  "start": 129,
                  "end": 136
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 139,
                  "end": 148
                }
              ],
              "start": 129,
              "end": 148
            }
          ],
          "start": 128,
          "end": 149
        },
        "start": 112,
        "end": 149
      },
      "declare": false,
      "start": 98,
      "end": 150
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NumericEnum1",
        "optional": false,
        "typeAnnotation": null,
        "start": 157,
        "end": 169
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 172,
              "end": 173
            },
            "initializer": null,
            "computed": false,
            "start": 172,
            "end": 173
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 175,
              "end": 176
            },
            "initializer": null,
            "computed": false,
            "start": 175,
            "end": 176
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 178,
              "end": 179
            },
            "initializer": null,
            "computed": false,
            "start": 178,
            "end": 179
          }
        ],
        "start": 170,
        "end": 181
      },
      "const": false,
      "declare": false,
      "start": 152,
      "end": 181
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NumericEnum2",
        "optional": false,
        "typeAnnotation": null,
        "start": 187,
        "end": 199
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 202,
              "end": 203
            },
            "initializer": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 206,
              "end": 207
            },
            "computed": false,
            "start": 202,
            "end": 207
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 209,
              "end": 210
            },
            "initializer": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 213,
              "end": 214
            },
            "computed": false,
            "start": 209,
            "end": 214
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 217,
              "end": 218
            },
            "initializer": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 221,
              "end": 222
            },
            "computed": false,
            "start": 217,
            "end": 222
          }
        ],
        "start": 200,
        "end": 224
      },
      "const": false,
      "declare": false,
      "start": 182,
      "end": 224
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringEnum1",
        "optional": false,
        "typeAnnotation": null,
        "start": 230,
        "end": 241
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 244,
              "end": 245
            },
            "initializer": {
              "type": "Literal",
              "value": "Alpha",
              "raw": "\"Alpha\"",
              "start": 248,
              "end": 255
            },
            "computed": false,
            "start": 244,
            "end": 255
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 257,
              "end": 258
            },
            "initializer": {
              "type": "Literal",
              "value": "Beta",
              "raw": "\"Beta\"",
              "start": 261,
              "end": 267
            },
            "computed": false,
            "start": 257,
            "end": 267
          }
        ],
        "start": 242,
        "end": 269
      },
      "const": false,
      "declare": false,
      "start": 225,
      "end": 269
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
            "name": "strMap",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
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
                        "start": 296,
                        "end": 305
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 308,
                        "end": 315
                      },
                      "start": 306,
                      "end": 315
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 295,
                    "end": 315
                  }
                ],
                "start": 293,
                "end": 317
              },
              "start": 291,
              "end": 317
            },
            "start": 285,
            "end": 317
          },
          "init": null,
          "definite": false,
          "start": 285,
          "end": 317
        }
      ],
      "declare": true,
      "start": 271,
      "end": 318
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
            "name": "e1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 363,
                "end": 370
              },
              "start": 361,
              "end": 370
            },
            "start": 359,
            "end": 370
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 373,
              "end": 379
            },
            "property": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 380,
              "end": 385
            },
            "optional": false,
            "computed": true,
            "start": 373,
            "end": 386
          },
          "definite": false,
          "start": 359,
          "end": 386
        }
      ],
      "declare": false,
      "start": 353,
      "end": 387
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
            "name": "e2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 398,
                "end": 405
              },
              "start": 396,
              "end": 405
            },
            "start": 394,
            "end": 405
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 408,
              "end": 414
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 415,
              "end": 418
            },
            "optional": false,
            "computed": false,
            "start": 408,
            "end": 418
          },
          "definite": false,
          "start": 394,
          "end": 418
        }
      ],
      "declare": false,
      "start": 388,
      "end": 419
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
            "name": "e3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 430,
                "end": 437
              },
              "start": 428,
              "end": 437
            },
            "start": 426,
            "end": 437
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 440,
              "end": 446
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 447,
              "end": 448
            },
            "optional": false,
            "computed": true,
            "start": 440,
            "end": 449
          },
          "definite": false,
          "start": 426,
          "end": 449
        }
      ],
      "declare": false,
      "start": 420,
      "end": 450
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
            "name": "e4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 461,
                "end": 468
              },
              "start": 459,
              "end": 468
            },
            "start": 457,
            "end": 468
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 471,
              "end": 477
            },
            "property": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 478,
                "end": 479
              },
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 483,
                    "end": 489
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 492,
                    "end": 498
                  }
                ],
                "start": 483,
                "end": 498
              },
              "start": 478,
              "end": 498
            },
            "optional": false,
            "computed": true,
            "start": 471,
            "end": 499
          },
          "definite": false,
          "start": 457,
          "end": 499
        }
      ],
      "declare": false,
      "start": 451,
      "end": 500
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
            "name": "e5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 511,
                "end": 518
              },
              "start": 509,
              "end": 518
            },
            "start": 507,
            "end": 518
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 521,
              "end": 527
            },
            "property": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 528,
                "end": 529
              },
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 533,
                    "end": 539
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 542,
                      "end": 543
                    },
                    "start": 542,
                    "end": 543
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 546,
                      "end": 547
                    },
                    "start": 546,
                    "end": 547
                  }
                ],
                "start": 533,
                "end": 547
              },
              "start": 528,
              "end": 547
            },
            "optional": false,
            "computed": true,
            "start": 521,
            "end": 548
          },
          "definite": false,
          "start": 507,
          "end": 548
        }
      ],
      "declare": false,
      "start": 501,
      "end": 549
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
            "name": "e6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 560,
                "end": 567
              },
              "start": 558,
              "end": 567
            },
            "start": 556,
            "end": 567
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 570,
              "end": 576
            },
            "property": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 577,
                "end": 578
              },
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 582,
                      "end": 583
                    },
                    "start": 582,
                    "end": 583
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 586,
                      "end": 587
                    },
                    "start": 586,
                    "end": 587
                  }
                ],
                "start": 582,
                "end": 587
              },
              "start": 577,
              "end": 587
            },
            "optional": false,
            "computed": true,
            "start": 570,
            "end": 588
          },
          "definite": false,
          "start": 556,
          "end": 588
        }
      ],
      "declare": false,
      "start": 550,
      "end": 589
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
            "name": "e7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 600,
                "end": 607
              },
              "start": 598,
              "end": 607
            },
            "start": 596,
            "end": 607
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 610,
              "end": 616
            },
            "property": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 617,
                "end": 622
              },
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 626,
                      "end": 631
                    },
                    "start": 626,
                    "end": 631
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "baz",
                      "raw": "\"baz\"",
                      "start": 634,
                      "end": 639
                    },
                    "start": 634,
                    "end": 639
                  }
                ],
                "start": 626,
                "end": 639
              },
              "start": 617,
              "end": 639
            },
            "optional": false,
            "computed": true,
            "start": 610,
            "end": 640
          },
          "definite": false,
          "start": 596,
          "end": 640
        }
      ],
      "declare": false,
      "start": 590,
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
            "name": "e8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 652,
                "end": 659
              },
              "start": 650,
              "end": 659
            },
            "start": 648,
            "end": 659
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 662,
              "end": 668
            },
            "property": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumericEnum1",
                "optional": false,
                "typeAnnotation": null,
                "start": 669,
                "end": 681
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 682,
                "end": 683
              },
              "optional": false,
              "computed": false,
              "start": 669,
              "end": 683
            },
            "optional": false,
            "computed": true,
            "start": 662,
            "end": 684
          },
          "definite": false,
          "start": 648,
          "end": 684
        }
      ],
      "declare": false,
      "start": 642,
      "end": 685
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
            "name": "e9",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 696,
                "end": 703
              },
              "start": 694,
              "end": 703
            },
            "start": 692,
            "end": 703
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 706,
              "end": 712
            },
            "property": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumericEnum2",
                "optional": false,
                "typeAnnotation": null,
                "start": 713,
                "end": 725
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 726,
                "end": 727
              },
              "optional": false,
              "computed": false,
              "start": 713,
              "end": 727
            },
            "optional": false,
            "computed": true,
            "start": 706,
            "end": 728
          },
          "definite": false,
          "start": 692,
          "end": 728
        }
      ],
      "declare": false,
      "start": 686,
      "end": 729
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
            "name": "e10",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 741,
                "end": 748
              },
              "start": 739,
              "end": 748
            },
            "start": 736,
            "end": 748
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 751,
              "end": 757
            },
            "property": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "StringEnum1",
                "optional": false,
                "typeAnnotation": null,
                "start": 758,
                "end": 769
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 770,
                "end": 771
              },
              "optional": false,
              "computed": false,
              "start": 758,
              "end": 771
            },
            "optional": false,
            "computed": true,
            "start": 751,
            "end": 772
          },
          "definite": false,
          "start": 736,
          "end": 772
        }
      ],
      "declare": false,
      "start": 730,
      "end": 773
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
            "name": "e11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 785,
                "end": 792
              },
              "start": 783,
              "end": 792
            },
            "start": 780,
            "end": 792
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 795,
              "end": 801
            },
            "property": {
              "type": "TSAsExpression",
              "expression": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StringEnum1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 802,
                  "end": 813
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 814,
                  "end": 815
                },
                "optional": false,
                "computed": false,
                "start": 802,
                "end": 815
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StringEnum1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 819,
                  "end": 830
                },
                "typeArguments": null,
                "start": 819,
                "end": 830
              },
              "start": 802,
              "end": 830
            },
            "optional": false,
            "computed": true,
            "start": 795,
            "end": 831
          },
          "definite": false,
          "start": 780,
          "end": 831
        }
      ],
      "declare": false,
      "start": 774,
      "end": 832
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
            "name": "e12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 844,
                "end": 851
              },
              "start": 842,
              "end": 851
            },
            "start": 839,
            "end": 851
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 854,
              "end": 860
            },
            "property": {
              "type": "TSAsExpression",
              "expression": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NumericEnum1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 861,
                  "end": 873
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 874,
                  "end": 875
                },
                "optional": false,
                "computed": false,
                "start": 861,
                "end": 875
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NumericEnum1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 879,
                  "end": 891
                },
                "typeArguments": null,
                "start": 879,
                "end": 891
              },
              "start": 861,
              "end": 891
            },
            "optional": false,
            "computed": true,
            "start": 854,
            "end": 892
          },
          "definite": false,
          "start": 839,
          "end": 892
        }
      ],
      "declare": false,
      "start": 833,
      "end": 893
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
            "name": "e13",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 905,
                "end": 912
              },
              "start": 903,
              "end": 912
            },
            "start": 900,
            "end": 912
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 915,
              "end": 921
            },
            "property": {
              "type": "TSAsExpression",
              "expression": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NumericEnum2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 922,
                  "end": 934
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 935,
                  "end": 936
                },
                "optional": false,
                "computed": false,
                "start": 922,
                "end": 936
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NumericEnum2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 940,
                  "end": 952
                },
                "typeArguments": null,
                "start": 940,
                "end": 952
              },
              "start": 922,
              "end": 952
            },
            "optional": false,
            "computed": true,
            "start": 915,
            "end": 953
          },
          "definite": false,
          "start": 900,
          "end": 953
        }
      ],
      "declare": false,
      "start": 894,
      "end": 954
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
            "name": "e14",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 966,
                "end": 973
              },
              "start": 964,
              "end": 973
            },
            "start": 961,
            "end": 973
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 976,
              "end": 982
            },
            "property": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 983,
                "end": 987
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 991,
                "end": 994
              },
              "start": 983,
              "end": 994
            },
            "optional": false,
            "computed": true,
            "start": 976,
            "end": 995
          },
          "definite": false,
          "start": 961,
          "end": 995
        }
      ],
      "declare": false,
      "start": 955,
      "end": 996
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
            "name": "ok1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 1025,
                    "end": 1032
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 1035,
                    "end": 1044
                  }
                ],
                "start": 1025,
                "end": 1044
              },
              "start": 1023,
              "end": 1044
            },
            "start": 1020,
            "end": 1044
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 1047,
              "end": 1053
            },
            "property": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 1054,
              "end": 1059
            },
            "optional": false,
            "computed": true,
            "start": 1047,
            "end": 1060
          },
          "definite": false,
          "start": 1020,
          "end": 1060
        }
      ],
      "declare": false,
      "start": 1014,
      "end": 1061
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
            "name": "ok2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 1073,
                    "end": 1080
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 1083,
                    "end": 1092
                  }
                ],
                "start": 1073,
                "end": 1092
              },
              "start": 1071,
              "end": 1092
            },
            "start": 1068,
            "end": 1092
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 1095,
              "end": 1101
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 1102,
              "end": 1105
            },
            "optional": false,
            "computed": false,
            "start": 1095,
            "end": 1105
          },
          "definite": false,
          "start": 1068,
          "end": 1105
        }
      ],
      "declare": false,
      "start": 1062,
      "end": 1106
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T_OK1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1113,
        "end": 1118
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "CheckBooleanOnly",
          "optional": false,
          "typeAnnotation": null,
          "start": 1121,
          "end": 1137
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1146,
                  "end": 1152
                },
                "typeArguments": null,
                "start": 1139,
                "end": 1152
              },
              "indexType": {
                "type": "TSStringKeyword",
                "start": 1154,
                "end": 1160
              },
              "start": 1138,
              "end": 1161
            }
          ],
          "start": 1137,
          "end": 1162
        },
        "start": 1121,
        "end": 1162
      },
      "declare": false,
      "start": 1108,
      "end": 1163
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T_OK2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1169,
        "end": 1174
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "CheckBooleanOnly",
          "optional": false,
          "typeAnnotation": null,
          "start": 1177,
          "end": 1193
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1202,
                  "end": 1208
                },
                "typeArguments": null,
                "start": 1195,
                "end": 1208
              },
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 1210,
                  "end": 1215
                },
                "start": 1210,
                "end": 1215
              },
              "start": 1194,
              "end": 1216
            }
          ],
          "start": 1193,
          "end": 1217
        },
        "start": 1177,
        "end": 1217
      },
      "declare": false,
      "start": 1164,
      "end": 1218
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T_OK3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1224,
        "end": 1229
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "CheckBooleanOnly",
          "optional": false,
          "typeAnnotation": null,
          "start": 1232,
          "end": 1248
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1257,
                  "end": 1263
                },
                "typeArguments": null,
                "start": 1250,
                "end": 1263
              },
              "indexType": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "\"bar\"",
                      "start": 1265,
                      "end": 1270
                    },
                    "start": 1265,
                    "end": 1270
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "baz",
                      "raw": "\"baz\"",
                      "start": 1273,
                      "end": 1278
                    },
                    "start": 1273,
                    "end": 1278
                  }
                ],
                "start": 1265,
                "end": 1278
              },
              "start": 1249,
              "end": 1279
            }
          ],
          "start": 1248,
          "end": 1280
        },
        "start": 1232,
        "end": 1280
      },
      "declare": false,
      "start": 1219,
      "end": 1281
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T_OK4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1287,
        "end": 1292
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "CheckBooleanOnly",
          "optional": false,
          "typeAnnotation": null,
          "start": 1295,
          "end": 1311
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1320,
                  "end": 1326
                },
                "typeArguments": null,
                "start": 1313,
                "end": 1326
              },
              "indexType": {
                "type": "TSNumberKeyword",
                "start": 1328,
                "end": 1334
              },
              "start": 1312,
              "end": 1335
            }
          ],
          "start": 1311,
          "end": 1336
        },
        "start": 1295,
        "end": 1336
      },
      "declare": false,
      "start": 1282,
      "end": 1337
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T_OK5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1343,
        "end": 1348
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "CheckBooleanOnly",
          "optional": false,
          "typeAnnotation": null,
          "start": 1351,
          "end": 1367
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1376,
                  "end": 1382
                },
                "typeArguments": null,
                "start": 1369,
                "end": 1382
              },
              "indexType": {
                "type": "TSAnyKeyword",
                "start": 1384,
                "end": 1387
              },
              "start": 1368,
              "end": 1388
            }
          ],
          "start": 1367,
          "end": 1389
        },
        "start": 1351,
        "end": 1389
      },
      "declare": false,
      "start": 1338,
      "end": 1390
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "strMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 1448,
            "end": 1454
          },
          "property": {
            "type": "Literal",
            "value": "baz",
            "raw": "\"baz\"",
            "start": 1455,
            "end": 1460
          },
          "optional": false,
          "computed": true,
          "start": 1448,
          "end": 1461
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 1464,
          "end": 1473
        },
        "start": 1448,
        "end": 1473
      },
      "directive": null,
      "start": 1448,
      "end": 1474
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "strMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 1475,
            "end": 1481
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "qua",
            "optional": false,
            "typeAnnotation": null,
            "start": 1482,
            "end": 1485
          },
          "optional": false,
          "computed": false,
          "start": 1475,
          "end": 1485
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 1488,
          "end": 1497
        },
        "start": 1475,
        "end": 1497
      },
      "directive": null,
      "start": 1475,
      "end": 1498
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "strMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 1499,
            "end": 1505
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 1506,
            "end": 1507
          },
          "optional": false,
          "computed": true,
          "start": 1499,
          "end": 1508
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 1511,
          "end": 1520
        },
        "start": 1499,
        "end": 1520
      },
      "directive": null,
      "start": 1499,
      "end": 1521
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "strMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 1522,
            "end": 1528
          },
          "property": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1529,
              "end": 1533
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1537,
              "end": 1540
            },
            "start": 1529,
            "end": 1540
          },
          "optional": false,
          "computed": true,
          "start": 1522,
          "end": 1541
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 1544,
          "end": 1553
        },
        "start": 1522,
        "end": 1553
      },
      "directive": null,
      "start": 1522,
      "end": 1554
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
            "name": "numMap",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1618,
                            "end": 1624
                          },
                          "start": 1616,
                          "end": 1624
                        },
                        "start": 1615,
                        "end": 1624
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1627,
                        "end": 1634
                      },
                      "start": 1625,
                      "end": 1634
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 1614,
                    "end": 1634
                  }
                ],
                "start": 1612,
                "end": 1636
              },
              "start": 1610,
              "end": 1636
            },
            "start": 1604,
            "end": 1636
          },
          "init": null,
          "definite": false,
          "start": 1604,
          "end": 1636
        }
      ],
      "declare": true,
      "start": 1590,
      "end": 1637
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
            "name": "num_ok1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1682,
                "end": 1689
              },
              "start": 1680,
              "end": 1689
            },
            "start": 1673,
            "end": 1689
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "numMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 1692,
              "end": 1698
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1699,
              "end": 1700
            },
            "optional": false,
            "computed": true,
            "start": 1692,
            "end": 1701
          },
          "definite": false,
          "start": 1673,
          "end": 1701
        }
      ],
      "declare": false,
      "start": 1667,
      "end": 1702
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
            "name": "num_ok2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1718,
                "end": 1725
              },
              "start": 1716,
              "end": 1725
            },
            "start": 1709,
            "end": 1725
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "numMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 1728,
              "end": 1734
            },
            "property": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1735,
                "end": 1736
              },
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1740,
                "end": 1746
              },
              "start": 1735,
              "end": 1746
            },
            "optional": false,
            "computed": true,
            "start": 1728,
            "end": 1747
          },
          "definite": false,
          "start": 1709,
          "end": 1747
        }
      ],
      "declare": false,
      "start": 1703,
      "end": 1748
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
            "name": "num_ok3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1764,
                "end": 1771
              },
              "start": 1762,
              "end": 1771
            },
            "start": 1755,
            "end": 1771
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "numMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 1774,
              "end": 1780
            },
            "property": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1781,
                "end": 1782
              },
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 1786,
                      "end": 1787
                    },
                    "start": 1786,
                    "end": 1787
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1790,
                      "end": 1791
                    },
                    "start": 1790,
                    "end": 1791
                  }
                ],
                "start": 1786,
                "end": 1791
              },
              "start": 1781,
              "end": 1791
            },
            "optional": false,
            "computed": true,
            "start": 1774,
            "end": 1792
          },
          "definite": false,
          "start": 1755,
          "end": 1792
        }
      ],
      "declare": false,
      "start": 1749,
      "end": 1793
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
            "name": "num_ok4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1809,
                "end": 1816
              },
              "start": 1807,
              "end": 1816
            },
            "start": 1800,
            "end": 1816
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "numMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 1819,
              "end": 1825
            },
            "property": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumericEnum1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1826,
                "end": 1838
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1839,
                "end": 1840
              },
              "optional": false,
              "computed": false,
              "start": 1826,
              "end": 1840
            },
            "optional": false,
            "computed": true,
            "start": 1819,
            "end": 1841
          },
          "definite": false,
          "start": 1800,
          "end": 1841
        }
      ],
      "declare": false,
      "start": 1794,
      "end": 1842
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
            "name": "num_ok5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1858,
                "end": 1865
              },
              "start": 1856,
              "end": 1865
            },
            "start": 1849,
            "end": 1865
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "numMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 1868,
              "end": 1874
            },
            "property": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumericEnum2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1875,
                "end": 1887
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1888,
                "end": 1889
              },
              "optional": false,
              "computed": false,
              "start": 1875,
              "end": 1889
            },
            "optional": false,
            "computed": true,
            "start": 1868,
            "end": 1890
          },
          "definite": false,
          "start": 1849,
          "end": 1890
        }
      ],
      "declare": false,
      "start": 1843,
      "end": 1891
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "generic1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1914,
        "end": 1922
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
              "start": 1923,
              "end": 1924
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1939,
                          "end": 1945
                        },
                        "start": 1937,
                        "end": 1945
                      },
                      "start": 1936,
                      "end": 1945
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 1948,
                      "end": 1955
                    },
                    "start": 1946,
                    "end": 1955
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 1935,
                  "end": 1955
                }
              ],
              "start": 1933,
              "end": 1957
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1923,
            "end": 1957
          }
        ],
        "start": 1922,
        "end": 1958
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
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
                "start": 1964,
                "end": 1965
              },
              "typeArguments": null,
              "start": 1964,
              "end": 1965
            },
            "start": 1962,
            "end": 1965
          },
          "start": 1959,
          "end": 1965
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 1968,
          "end": 1975
        },
        "start": 1966,
        "end": 1975
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2009,
                "end": 2012
              },
              "property": {
                "type": "Literal",
                "value": "blah",
                "raw": "\"blah\"",
                "start": 2013,
                "end": 2019
              },
              "optional": false,
              "computed": true,
              "start": 2009,
              "end": 2020
            },
            "start": 2002,
            "end": 2021
          }
        ],
        "start": 1976,
        "end": 2023
      },
      "expression": false,
      "start": 1905,
      "end": 2023
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "generic2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2033,
        "end": 2041
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
              "start": 2042,
              "end": 2043
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2058,
                          "end": 2064
                        },
                        "start": 2056,
                        "end": 2064
                      },
                      "start": 2055,
                      "end": 2064
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 2067,
                      "end": 2074
                    },
                    "start": 2065,
                    "end": 2074
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 2054,
                  "end": 2074
                }
              ],
              "start": 2052,
              "end": 2076
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2042,
            "end": 2076
          }
        ],
        "start": 2041,
        "end": 2077
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
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
                "start": 2083,
                "end": 2084
              },
              "typeArguments": null,
              "start": 2083,
              "end": 2084
            },
            "start": 2081,
            "end": 2084
          },
          "start": 2078,
          "end": 2084
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 2087,
          "end": 2094
        },
        "start": 2085,
        "end": 2094
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSNonNullExpression",
              "expression": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2125,
                  "end": 2128
                },
                "property": {
                  "type": "Literal",
                  "value": "blah",
                  "raw": "\"blah\"",
                  "start": 2129,
                  "end": 2135
                },
                "optional": false,
                "computed": true,
                "start": 2125,
                "end": 2136
              },
              "start": 2125,
              "end": 2137
            },
            "start": 2118,
            "end": 2138
          }
        ],
        "start": 2095,
        "end": 2140
      },
      "expression": false,
      "start": 2024,
      "end": 2140
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "generic3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2150,
        "end": 2158
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
              "start": 2159,
              "end": 2160
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 2169,
              "end": 2175
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2159,
            "end": 2175
          }
        ],
        "start": 2158,
        "end": 2176
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
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
                "start": 2182,
                "end": 2183
              },
              "typeArguments": null,
              "start": 2182,
              "end": 2183
            },
            "start": 2180,
            "end": 2183
          },
          "start": 2177,
          "end": 2183
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 2186,
          "end": 2193
        },
        "start": 2184,
        "end": 2193
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "strMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 2227,
                "end": 2233
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2234,
                "end": 2237
              },
              "optional": false,
              "computed": true,
              "start": 2227,
              "end": 2238
            },
            "start": 2220,
            "end": 2239
          }
        ],
        "start": 2194,
        "end": 2241
      },
      "expression": false,
      "start": 2141,
      "end": 2241
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
            "name": "obj1",
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2311,
                      "end": 2312
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2314,
                        "end": 2320
                      },
                      "start": 2312,
                      "end": 2320
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2311,
                    "end": 2321
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
                      "start": 2322,
                      "end": 2323
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2325,
                        "end": 2331
                      },
                      "start": 2323,
                      "end": 2331
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2322,
                    "end": 2332
                  },
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2339,
                            "end": 2345
                          },
                          "start": 2337,
                          "end": 2345
                        },
                        "start": 2334,
                        "end": 2345
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 2348,
                            "end": 2354
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 2357,
                            "end": 2363
                          }
                        ],
                        "start": 2348,
                        "end": 2363
                      },
                      "start": 2346,
                      "end": 2363
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 2333,
                    "end": 2363
                  }
                ],
                "start": 2309,
                "end": 2365
              },
              "start": 2307,
              "end": 2365
            },
            "start": 2303,
            "end": 2365
          },
          "init": null,
          "definite": false,
          "start": 2303,
          "end": 2365
        }
      ],
      "declare": true,
      "start": 2289,
      "end": 2366
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2367,
          "end": 2371
        },
        "property": {
          "type": "Literal",
          "value": "x",
          "raw": "\"x\"",
          "start": 2372,
          "end": 2375
        },
        "optional": false,
        "computed": true,
        "start": 2367,
        "end": 2376
      },
      "directive": null,
      "start": 2367,
      "end": 2377
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
            "start": 2384,
            "end": 2385
          },
          "init": {
            "type": "Literal",
            "value": "y",
            "raw": "\"y\"",
            "start": 2388,
            "end": 2391
          },
          "definite": false,
          "start": 2384,
          "end": 2391
        }
      ],
      "declare": false,
      "start": 2378,
      "end": 2392
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2393,
          "end": 2397
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 2398,
          "end": 2399
        },
        "optional": false,
        "computed": true,
        "start": 2393,
        "end": 2400
      },
      "directive": null,
      "start": 2393,
      "end": 2401
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
            "name": "yy",
            "optional": false,
            "typeAnnotation": null,
            "start": 2406,
            "end": 2408
          },
          "init": {
            "type": "Literal",
            "value": "y",
            "raw": "\"y\"",
            "start": 2411,
            "end": 2414
          },
          "definite": false,
          "start": 2406,
          "end": 2414
        }
      ],
      "declare": false,
      "start": 2402,
      "end": 2415
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2416,
          "end": 2420
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "yy",
          "optional": false,
          "typeAnnotation": null,
          "start": 2421,
          "end": 2423
        },
        "optional": false,
        "computed": true,
        "start": 2416,
        "end": 2424
      },
      "directive": null,
      "start": 2416,
      "end": 2425
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
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 2430,
            "end": 2431
          },
          "init": {
            "type": "Literal",
            "value": "z",
            "raw": "\"z\"",
            "start": 2434,
            "end": 2437
          },
          "definite": false,
          "start": 2430,
          "end": 2437
        }
      ],
      "declare": false,
      "start": 2426,
      "end": 2438
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj1",
          "optional": false,
          "typeAnnotation": null,
          "start": 2439,
          "end": 2443
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null,
          "start": 2444,
          "end": 2445
        },
        "optional": false,
        "computed": true,
        "start": 2439,
        "end": 2446
      },
      "directive": null,
      "start": 2439,
      "end": 2447
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
            "name": "strMapUnion",
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
                        "type": "TSIndexSignature",
                        "parameters": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 2506,
                                "end": 2512
                              },
                              "start": 2504,
                              "end": 2512
                            },
                            "start": 2503,
                            "end": 2512
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 2515,
                            "end": 2522
                          },
                          "start": 2513,
                          "end": 2522
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 2502,
                        "end": 2522
                      }
                    ],
                    "start": 2500,
                    "end": 2524
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
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 2533,
                                "end": 2539
                              },
                              "start": 2531,
                              "end": 2539
                            },
                            "start": 2530,
                            "end": 2539
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2542,
                            "end": 2548
                          },
                          "start": 2540,
                          "end": 2548
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 2529,
                        "end": 2548
                      }
                    ],
                    "start": 2527,
                    "end": 2550
                  }
                ],
                "start": 2500,
                "end": 2550
              },
              "start": 2498,
              "end": 2550
            },
            "start": 2487,
            "end": 2550
          },
          "init": null,
          "definite": false,
          "start": 2487,
          "end": 2550
        }
      ],
      "declare": true,
      "start": 2473,
      "end": 2551
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
            "name": "f1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 2578,
                    "end": 2585
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2588,
                    "end": 2594
                  }
                ],
                "start": 2578,
                "end": 2594
              },
              "start": 2576,
              "end": 2594
            },
            "start": 2574,
            "end": 2594
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMapUnion",
              "optional": false,
              "typeAnnotation": null,
              "start": 2597,
              "end": 2608
            },
            "property": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 2609,
              "end": 2614
            },
            "optional": false,
            "computed": true,
            "start": 2597,
            "end": 2615
          },
          "definite": false,
          "start": 2574,
          "end": 2615
        }
      ],
      "declare": false,
      "start": 2568,
      "end": 2616
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
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 2669,
                  "end": 2675
                },
                "start": 2662,
                "end": 2675
              },
              "start": 2660,
              "end": 2675
            },
            "start": 2659,
            "end": 2675
          },
          "init": null,
          "definite": false,
          "start": 2659,
          "end": 2675
        }
      ],
      "declare": true,
      "start": 2645,
      "end": 2676
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
            "name": "symbolMap",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": true,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2705,
                      "end": 2706
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2709,
                        "end": 2715
                      },
                      "start": 2707,
                      "end": 2715
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2704,
                    "end": 2715
                  }
                ],
                "start": 2702,
                "end": 2717
              },
              "start": 2700,
              "end": 2717
            },
            "start": 2691,
            "end": 2717
          },
          "init": null,
          "definite": false,
          "start": 2691,
          "end": 2717
        }
      ],
      "declare": true,
      "start": 2677,
      "end": 2718
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
            "name": "e15",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2730,
                "end": 2736
              },
              "start": 2728,
              "end": 2736
            },
            "start": 2725,
            "end": 2736
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "symbolMap",
              "optional": false,
              "typeAnnotation": null,
              "start": 2739,
              "end": 2748
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 2749,
              "end": 2750
            },
            "optional": false,
            "computed": true,
            "start": 2739,
            "end": 2751
          },
          "definite": false,
          "start": 2725,
          "end": 2751
        }
      ],
      "declare": false,
      "start": 2719,
      "end": 2752
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "symbolMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 2766,
            "end": 2775
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 2776,
            "end": 2777
          },
          "optional": false,
          "computed": true,
          "start": 2766,
          "end": 2778
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 2781,
          "end": 2790
        },
        "start": 2766,
        "end": 2790
      },
      "directive": null,
      "start": 2766,
      "end": 2791
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
            "name": "nonEmptyStringArray",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2864,
                    "end": 2870
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 2875,
                        "end": 2881
                      },
                      "start": 2875,
                      "end": 2883
                    },
                    "start": 2872,
                    "end": 2883
                  }
                ],
                "start": 2863,
                "end": 2884
              },
              "start": 2861,
              "end": 2884
            },
            "start": 2842,
            "end": 2884
          },
          "init": null,
          "definite": false,
          "start": 2842,
          "end": 2884
        }
      ],
      "declare": true,
      "start": 2828,
      "end": 2885
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
            "name": "variadicOk1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2905,
                "end": 2911
              },
              "start": 2903,
              "end": 2911
            },
            "start": 2892,
            "end": 2911
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonEmptyStringArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 2914,
              "end": 2933
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2934,
              "end": 2935
            },
            "optional": false,
            "computed": true,
            "start": 2914,
            "end": 2936
          },
          "definite": false,
          "start": 2892,
          "end": 2936
        }
      ],
      "declare": false,
      "start": 2886,
      "end": 2937
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
            "name": "variadicError1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2974,
                "end": 2980
              },
              "start": 2972,
              "end": 2980
            },
            "start": 2958,
            "end": 2980
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonEmptyStringArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 2983,
              "end": 3002
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 3003,
              "end": 3004
            },
            "optional": false,
            "computed": true,
            "start": 2983,
            "end": 3005
          },
          "definite": false,
          "start": 2958,
          "end": 3005
        }
      ],
      "declare": false,
      "start": 2952,
      "end": 3006
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
            "name": "myRecord1",
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
                      "start": 3073,
                      "end": 3074
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3076,
                        "end": 3082
                      },
                      "start": 3074,
                      "end": 3082
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3073,
                    "end": 3083
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
                      "start": 3084,
                      "end": 3085
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3087,
                        "end": 3093
                      },
                      "start": 3085,
                      "end": 3093
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3084,
                    "end": 3093
                  }
                ],
                "start": 3071,
                "end": 3095
              },
              "start": 3069,
              "end": 3095
            },
            "start": 3060,
            "end": 3095
          },
          "init": null,
          "definite": false,
          "start": 3060,
          "end": 3095
        }
      ],
      "declare": true,
      "start": 3046,
      "end": 3096
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
            "name": "myRecord2",
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
                      "start": 3124,
                      "end": 3125
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3127,
                        "end": 3133
                      },
                      "start": 3125,
                      "end": 3133
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3124,
                    "end": 3134
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
                      "start": 3135,
                      "end": 3136
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3138,
                        "end": 3144
                      },
                      "start": 3136,
                      "end": 3144
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3135,
                    "end": 3145
                  },
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3152,
                            "end": 3158
                          },
                          "start": 3150,
                          "end": 3158
                        },
                        "start": 3147,
                        "end": 3158
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3161,
                        "end": 3167
                      },
                      "start": 3159,
                      "end": 3167
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 3146,
                    "end": 3167
                  }
                ],
                "start": 3122,
                "end": 3169
              },
              "start": 3120,
              "end": 3169
            },
            "start": 3111,
            "end": 3169
          },
          "init": null,
          "definite": false,
          "start": 3111,
          "end": 3169
        }
      ],
      "declare": true,
      "start": 3097,
      "end": 3170
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
            "name": "fn1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3177,
            "end": 3180
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3184,
                    "end": 3187
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myRecord1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3209,
                        "end": 3218
                      },
                      "typeArguments": null,
                      "start": 3202,
                      "end": 3218
                    },
                    "start": 3196,
                    "end": 3218
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3184,
                  "end": 3218
                }
              ],
              "start": 3183,
              "end": 3219
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3225,
                      "end": 3228
                    },
                    "typeArguments": null,
                    "start": 3225,
                    "end": 3228
                  },
                  "start": 3223,
                  "end": 3228
                },
                "start": 3220,
                "end": 3228
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3231,
                "end": 3237
              },
              "start": 3229,
              "end": 3237
            },
            "body": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "myRecord1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3241,
                "end": 3250
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null,
                "start": 3251,
                "end": 3254
              },
              "optional": false,
              "computed": true,
              "start": 3241,
              "end": 3255
            },
            "id": null,
            "generator": false,
            "start": 3183,
            "end": 3255
          },
          "definite": false,
          "start": 3177,
          "end": 3255
        }
      ],
      "declare": false,
      "start": 3171,
      "end": 3256
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
            "name": "fn2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3276,
            "end": 3279
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3283,
                    "end": 3286
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myRecord1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3308,
                        "end": 3317
                      },
                      "typeArguments": null,
                      "start": 3301,
                      "end": 3317
                    },
                    "start": 3295,
                    "end": 3317
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3283,
                  "end": 3317
                }
              ],
              "start": 3282,
              "end": 3318
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3324,
                      "end": 3327
                    },
                    "typeArguments": null,
                    "start": 3324,
                    "end": 3327
                  },
                  "start": 3322,
                  "end": 3327
                },
                "start": 3319,
                "end": 3327
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3330,
                "end": 3336
              },
              "start": 3328,
              "end": 3336
            },
            "body": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "myRecord2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3340,
                "end": 3349
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null,
                "start": 3350,
                "end": 3353
              },
              "optional": false,
              "computed": true,
              "start": 3340,
              "end": 3354
            },
            "id": null,
            "generator": false,
            "start": 3282,
            "end": 3354
          },
          "definite": false,
          "start": 3276,
          "end": 3354
        }
      ],
      "declare": false,
      "start": 3270,
      "end": 3355
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
            "name": "fn3",
            "optional": false,
            "typeAnnotation": null,
            "start": 3375,
            "end": 3378
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3382,
                    "end": 3385
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myRecord2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3407,
                        "end": 3416
                      },
                      "typeArguments": null,
                      "start": 3400,
                      "end": 3416
                    },
                    "start": 3394,
                    "end": 3416
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3382,
                  "end": 3416
                }
              ],
              "start": 3381,
              "end": 3417
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3423,
                      "end": 3426
                    },
                    "typeArguments": null,
                    "start": 3423,
                    "end": 3426
                  },
                  "start": 3421,
                  "end": 3426
                },
                "start": 3418,
                "end": 3426
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myRecord2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3437,
                        "end": 3446
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3447,
                        "end": 3450
                      },
                      "optional": false,
                      "computed": true,
                      "start": 3437,
                      "end": 3451
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3454,
                      "end": 3463
                    },
                    "start": 3437,
                    "end": 3463
                  },
                  "directive": null,
                  "start": 3437,
                  "end": 3464
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3494,
                            "end": 3500
                          },
                          "start": 3492,
                          "end": 3500
                        },
                        "start": 3491,
                        "end": 3500
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myRecord2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3503,
                          "end": 3512
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3513,
                          "end": 3516
                        },
                        "optional": false,
                        "computed": true,
                        "start": 3503,
                        "end": 3517
                      },
                      "definite": false,
                      "start": 3491,
                      "end": 3517
                    }
                  ],
                  "declare": false,
                  "start": 3485,
                  "end": 3518
                }
              ],
              "start": 3431,
              "end": 3536
            },
            "id": null,
            "generator": false,
            "start": 3381,
            "end": 3536
          },
          "definite": false,
          "start": 3375,
          "end": 3536
        }
      ],
      "declare": false,
      "start": 3369,
      "end": 3537
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3538
}
```
