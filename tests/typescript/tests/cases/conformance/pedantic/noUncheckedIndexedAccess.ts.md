__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4,
    "range": [
      0,
      4
    ]
  },
  {
    "type": "Identifier",
    "value": "CheckBooleanOnly",
    "start": 5,
    "end": 21,
    "range": [
      5,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 24,
    "end": 31,
    "range": [
      24,
      31
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 32,
    "end": 39,
    "range": [
      32,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 43,
    "end": 46,
    "range": [
      43,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 98,
    "end": 102,
    "range": [
      98,
      102
    ]
  },
  {
    "type": "Identifier",
    "value": "T_ERR1",
    "start": 103,
    "end": 109,
    "range": [
      103,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Identifier",
    "value": "CheckBooleanOnly",
    "start": 112,
    "end": 128,
    "range": [
      112,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 129,
    "end": 136,
    "range": [
      129,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 139,
    "end": 148,
    "range": [
      139,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 152,
    "end": 156,
    "range": [
      152,
      156
    ]
  },
  {
    "type": "Identifier",
    "value": "NumericEnum1",
    "start": 157,
    "end": 169,
    "range": [
      157,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 182,
    "end": 186,
    "range": [
      182,
      186
    ]
  },
  {
    "type": "Identifier",
    "value": "NumericEnum2",
    "start": 187,
    "end": 199,
    "range": [
      187,
      199
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 200,
    "end": 201,
    "range": [
      200,
      201
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 225,
    "end": 229,
    "range": [
      225,
      229
    ]
  },
  {
    "type": "Identifier",
    "value": "StringEnum1",
    "start": 230,
    "end": 241,
    "range": [
      230,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "String",
    "value": "\"Alpha\"",
    "start": 248,
    "end": 255,
    "range": [
      248,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "String",
    "value": "\"Beta\"",
    "start": 261,
    "end": 267,
    "range": [
      261,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 271,
    "end": 278,
    "range": [
      271,
      278
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 279,
    "end": 284,
    "range": [
      279,
      284
    ]
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 285,
    "end": 291,
    "range": [
      285,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 295,
    "end": 296,
    "range": [
      295,
      296
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 299,
    "end": 305,
    "range": [
      299,
      305
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 308,
    "end": 315,
    "range": [
      308,
      315
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 353,
    "end": 358,
    "range": [
      353,
      358
    ]
  },
  {
    "type": "Identifier",
    "value": "e1",
    "start": 359,
    "end": 361,
    "range": [
      359,
      361
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 363,
    "end": 370,
    "range": [
      363,
      370
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 371,
    "end": 372,
    "range": [
      371,
      372
    ]
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 373,
    "end": 379,
    "range": [
      373,
      379
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 379,
    "end": 380,
    "range": [
      379,
      380
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 380,
    "end": 385,
    "range": [
      380,
      385
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 385,
    "end": 386,
    "range": [
      385,
      386
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 388,
    "end": 393,
    "range": [
      388,
      393
    ]
  },
  {
    "type": "Identifier",
    "value": "e2",
    "start": 394,
    "end": 396,
    "range": [
      394,
      396
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 398,
    "end": 405,
    "range": [
      398,
      405
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 408,
    "end": 414,
    "range": [
      408,
      414
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 415,
    "end": 418,
    "range": [
      415,
      418
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 420,
    "end": 425,
    "range": [
      420,
      425
    ]
  },
  {
    "type": "Identifier",
    "value": "e3",
    "start": 426,
    "end": 428,
    "range": [
      426,
      428
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 428,
    "end": 429,
    "range": [
      428,
      429
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 430,
    "end": 437,
    "range": [
      430,
      437
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 438,
    "end": 439,
    "range": [
      438,
      439
    ]
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 440,
    "end": 446,
    "range": [
      440,
      446
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 447,
    "end": 448,
    "range": [
      447,
      448
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 449,
    "end": 450,
    "range": [
      449,
      450
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 451,
    "end": 456,
    "range": [
      451,
      456
    ]
  },
  {
    "type": "Identifier",
    "value": "e4",
    "start": 457,
    "end": 459,
    "range": [
      457,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 461,
    "end": 468,
    "range": [
      461,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 469,
    "end": 470,
    "range": [
      469,
      470
    ]
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 471,
    "end": 477,
    "range": [
      471,
      477
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 477,
    "end": 478,
    "range": [
      477,
      478
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 480,
    "end": 482,
    "range": [
      480,
      482
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 483,
    "end": 489,
    "range": [
      483,
      489
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 492,
    "end": 498,
    "range": [
      492,
      498
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 501,
    "end": 506,
    "range": [
      501,
      506
    ]
  },
  {
    "type": "Identifier",
    "value": "e5",
    "start": 507,
    "end": 509,
    "range": [
      507,
      509
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 509,
    "end": 510,
    "range": [
      509,
      510
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 511,
    "end": 518,
    "range": [
      511,
      518
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 519,
    "end": 520,
    "range": [
      519,
      520
    ]
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 521,
    "end": 527,
    "range": [
      521,
      527
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 527,
    "end": 528,
    "range": [
      527,
      528
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 528,
    "end": 529,
    "range": [
      528,
      529
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 530,
    "end": 532,
    "range": [
      530,
      532
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 533,
    "end": 539,
    "range": [
      533,
      539
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 540,
    "end": 541,
    "range": [
      540,
      541
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 542,
    "end": 543,
    "range": [
      542,
      543
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 544,
    "end": 545,
    "range": [
      544,
      545
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 546,
    "end": 547,
    "range": [
      546,
      547
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 547,
    "end": 548,
    "range": [
      547,
      548
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 550,
    "end": 555,
    "range": [
      550,
      555
    ]
  },
  {
    "type": "Identifier",
    "value": "e6",
    "start": 556,
    "end": 558,
    "range": [
      556,
      558
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 558,
    "end": 559,
    "range": [
      558,
      559
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 560,
    "end": 567,
    "range": [
      560,
      567
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 568,
    "end": 569,
    "range": [
      568,
      569
    ]
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 570,
    "end": 576,
    "range": [
      570,
      576
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 577,
    "end": 578,
    "range": [
      577,
      578
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 579,
    "end": 581,
    "range": [
      579,
      581
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 584,
    "end": 585,
    "range": [
      584,
      585
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 586,
    "end": 587,
    "range": [
      586,
      587
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 587,
    "end": 588,
    "range": [
      587,
      588
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 588,
    "end": 589,
    "range": [
      588,
      589
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 590,
    "end": 595,
    "range": [
      590,
      595
    ]
  },
  {
    "type": "Identifier",
    "value": "e7",
    "start": 596,
    "end": 598,
    "range": [
      596,
      598
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 598,
    "end": 599,
    "range": [
      598,
      599
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 600,
    "end": 607,
    "range": [
      600,
      607
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 608,
    "end": 609,
    "range": [
      608,
      609
    ]
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 610,
    "end": 616,
    "range": [
      610,
      616
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 617,
    "end": 622,
    "range": [
      617,
      622
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 623,
    "end": 625,
    "range": [
      623,
      625
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 626,
    "end": 631,
    "range": [
      626,
      631
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 632,
    "end": 633,
    "range": [
      632,
      633
    ]
  },
  {
    "type": "String",
    "value": "\"baz\"",
    "start": 634,
    "end": 639,
    "range": [
      634,
      639
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 639,
    "end": 640,
    "range": [
      639,
      640
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 640,
    "end": 641,
    "range": [
      640,
      641
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 642,
    "end": 647,
    "range": [
      642,
      647
    ]
  },
  {
    "type": "Identifier",
    "value": "e8",
    "start": 648,
    "end": 650,
    "range": [
      648,
      650
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 650,
    "end": 651,
    "range": [
      650,
      651
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 652,
    "end": 659,
    "range": [
      652,
      659
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 660,
    "end": 661,
    "range": [
      660,
      661
    ]
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 662,
    "end": 668,
    "range": [
      662,
      668
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 668,
    "end": 669,
    "range": [
      668,
      669
    ]
  },
  {
    "type": "Identifier",
    "value": "NumericEnum1",
    "start": 669,
    "end": 681,
    "range": [
      669,
      681
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 681,
    "end": 682,
    "range": [
      681,
      682
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 682,
    "end": 683,
    "range": [
      682,
      683
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 683,
    "end": 684,
    "range": [
      683,
      684
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 684,
    "end": 685,
    "range": [
      684,
      685
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 686,
    "end": 691,
    "range": [
      686,
      691
    ]
  },
  {
    "type": "Identifier",
    "value": "e9",
    "start": 692,
    "end": 694,
    "range": [
      692,
      694
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 694,
    "end": 695,
    "range": [
      694,
      695
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 696,
    "end": 703,
    "range": [
      696,
      703
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 704,
    "end": 705,
    "range": [
      704,
      705
    ]
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 706,
    "end": 712,
    "range": [
      706,
      712
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 712,
    "end": 713,
    "range": [
      712,
      713
    ]
  },
  {
    "type": "Identifier",
    "value": "NumericEnum2",
    "start": 713,
    "end": 725,
    "range": [
      713,
      725
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 725,
    "end": 726,
    "range": [
      725,
      726
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 726,
    "end": 727,
    "range": [
      726,
      727
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 727,
    "end": 728,
    "range": [
      727,
      728
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 728,
    "end": 729,
    "range": [
      728,
      729
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 730,
    "end": 735,
    "range": [
      730,
      735
    ]
  },
  {
    "type": "Identifier",
    "value": "e10",
    "start": 736,
    "end": 739,
    "range": [
      736,
      739
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 739,
    "end": 740,
    "range": [
      739,
      740
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 741,
    "end": 748,
    "range": [
      741,
      748
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 749,
    "end": 750,
    "range": [
      749,
      750
    ]
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 751,
    "end": 757,
    "range": [
      751,
      757
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 757,
    "end": 758,
    "range": [
      757,
      758
    ]
  },
  {
    "type": "Identifier",
    "value": "StringEnum1",
    "start": 758,
    "end": 769,
    "range": [
      758,
      769
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 769,
    "end": 770,
    "range": [
      769,
      770
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 770,
    "end": 771,
    "range": [
      770,
      771
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 771,
    "end": 772,
    "range": [
      771,
      772
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 772,
    "end": 773,
    "range": [
      772,
      773
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 774,
    "end": 779,
    "range": [
      774,
      779
    ]
  },
  {
    "type": "Identifier",
    "value": "e11",
    "start": 780,
    "end": 783,
    "range": [
      780,
      783
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 783,
    "end": 784,
    "range": [
      783,
      784
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 785,
    "end": 792,
    "range": [
      785,
      792
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 793,
    "end": 794,
    "range": [
      793,
      794
    ]
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 795,
    "end": 801,
    "range": [
      795,
      801
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 801,
    "end": 802,
    "range": [
      801,
      802
    ]
  },
  {
    "type": "Identifier",
    "value": "StringEnum1",
    "start": 802,
    "end": 813,
    "range": [
      802,
      813
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 813,
    "end": 814,
    "range": [
      813,
      814
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 814,
    "end": 815,
    "range": [
      814,
      815
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 816,
    "end": 818,
    "range": [
      816,
      818
    ]
  },
  {
    "type": "Identifier",
    "value": "StringEnum1",
    "start": 819,
    "end": 830,
    "range": [
      819,
      830
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 830,
    "end": 831,
    "range": [
      830,
      831
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 831,
    "end": 832,
    "range": [
      831,
      832
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 833,
    "end": 838,
    "range": [
      833,
      838
    ]
  },
  {
    "type": "Identifier",
    "value": "e12",
    "start": 839,
    "end": 842,
    "range": [
      839,
      842
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 842,
    "end": 843,
    "range": [
      842,
      843
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 844,
    "end": 851,
    "range": [
      844,
      851
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 852,
    "end": 853,
    "range": [
      852,
      853
    ]
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 854,
    "end": 860,
    "range": [
      854,
      860
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 860,
    "end": 861,
    "range": [
      860,
      861
    ]
  },
  {
    "type": "Identifier",
    "value": "NumericEnum1",
    "start": 861,
    "end": 873,
    "range": [
      861,
      873
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 873,
    "end": 874,
    "range": [
      873,
      874
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 874,
    "end": 875,
    "range": [
      874,
      875
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 876,
    "end": 878,
    "range": [
      876,
      878
    ]
  },
  {
    "type": "Identifier",
    "value": "NumericEnum1",
    "start": 879,
    "end": 891,
    "range": [
      879,
      891
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 891,
    "end": 892,
    "range": [
      891,
      892
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 892,
    "end": 893,
    "range": [
      892,
      893
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 894,
    "end": 899,
    "range": [
      894,
      899
    ]
  },
  {
    "type": "Identifier",
    "value": "e13",
    "start": 900,
    "end": 903,
    "range": [
      900,
      903
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 903,
    "end": 904,
    "range": [
      903,
      904
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 905,
    "end": 912,
    "range": [
      905,
      912
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 913,
    "end": 914,
    "range": [
      913,
      914
    ]
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 915,
    "end": 921,
    "range": [
      915,
      921
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 921,
    "end": 922,
    "range": [
      921,
      922
    ]
  },
  {
    "type": "Identifier",
    "value": "NumericEnum2",
    "start": 922,
    "end": 934,
    "range": [
      922,
      934
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 934,
    "end": 935,
    "range": [
      934,
      935
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 935,
    "end": 936,
    "range": [
      935,
      936
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 937,
    "end": 939,
    "range": [
      937,
      939
    ]
  },
  {
    "type": "Identifier",
    "value": "NumericEnum2",
    "start": 940,
    "end": 952,
    "range": [
      940,
      952
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 952,
    "end": 953,
    "range": [
      952,
      953
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 953,
    "end": 954,
    "range": [
      953,
      954
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 955,
    "end": 960,
    "range": [
      955,
      960
    ]
  },
  {
    "type": "Identifier",
    "value": "e14",
    "start": 961,
    "end": 964,
    "range": [
      961,
      964
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 964,
    "end": 965,
    "range": [
      964,
      965
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 966,
    "end": 973,
    "range": [
      966,
      973
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 974,
    "end": 975,
    "range": [
      974,
      975
    ]
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 976,
    "end": 982,
    "range": [
      976,
      982
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 982,
    "end": 983,
    "range": [
      982,
      983
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 983,
    "end": 987,
    "range": [
      983,
      987
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 988,
    "end": 990,
    "range": [
      988,
      990
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 991,
    "end": 994,
    "range": [
      991,
      994
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 994,
    "end": 995,
    "range": [
      994,
      995
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 995,
    "end": 996,
    "range": [
      995,
      996
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1014,
    "end": 1019,
    "range": [
      1014,
      1019
    ]
  },
  {
    "type": "Identifier",
    "value": "ok1",
    "start": 1020,
    "end": 1023,
    "range": [
      1020,
      1023
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1023,
    "end": 1024,
    "range": [
      1023,
      1024
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1025,
    "end": 1032,
    "range": [
      1025,
      1032
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1033,
    "end": 1034,
    "range": [
      1033,
      1034
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1035,
    "end": 1044,
    "range": [
      1035,
      1044
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1045,
    "end": 1046,
    "range": [
      1045,
      1046
    ]
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 1047,
    "end": 1053,
    "range": [
      1047,
      1053
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1053,
    "end": 1054,
    "range": [
      1053,
      1054
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 1054,
    "end": 1059,
    "range": [
      1054,
      1059
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1059,
    "end": 1060,
    "range": [
      1059,
      1060
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1060,
    "end": 1061,
    "range": [
      1060,
      1061
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1062,
    "end": 1067,
    "range": [
      1062,
      1067
    ]
  },
  {
    "type": "Identifier",
    "value": "ok2",
    "start": 1068,
    "end": 1071,
    "range": [
      1068,
      1071
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1071,
    "end": 1072,
    "range": [
      1071,
      1072
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1073,
    "end": 1080,
    "range": [
      1073,
      1080
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1081,
    "end": 1082,
    "range": [
      1081,
      1082
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1083,
    "end": 1092,
    "range": [
      1083,
      1092
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1093,
    "end": 1094,
    "range": [
      1093,
      1094
    ]
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 1095,
    "end": 1101,
    "range": [
      1095,
      1101
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1101,
    "end": 1102,
    "range": [
      1101,
      1102
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1102,
    "end": 1105,
    "range": [
      1102,
      1105
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1105,
    "end": 1106,
    "range": [
      1105,
      1106
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1108,
    "end": 1112,
    "range": [
      1108,
      1112
    ]
  },
  {
    "type": "Identifier",
    "value": "T_OK1",
    "start": 1113,
    "end": 1118,
    "range": [
      1113,
      1118
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1119,
    "end": 1120,
    "range": [
      1119,
      1120
    ]
  },
  {
    "type": "Identifier",
    "value": "CheckBooleanOnly",
    "start": 1121,
    "end": 1137,
    "range": [
      1121,
      1137
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1137,
    "end": 1138,
    "range": [
      1137,
      1138
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1138,
    "end": 1139,
    "range": [
      1138,
      1139
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1139,
    "end": 1145,
    "range": [
      1139,
      1145
    ]
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 1146,
    "end": 1152,
    "range": [
      1146,
      1152
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1152,
    "end": 1153,
    "range": [
      1152,
      1153
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1153,
    "end": 1154,
    "range": [
      1153,
      1154
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1154,
    "end": 1160,
    "range": [
      1154,
      1160
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1160,
    "end": 1161,
    "range": [
      1160,
      1161
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1161,
    "end": 1162,
    "range": [
      1161,
      1162
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1162,
    "end": 1163,
    "range": [
      1162,
      1163
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1164,
    "end": 1168,
    "range": [
      1164,
      1168
    ]
  },
  {
    "type": "Identifier",
    "value": "T_OK2",
    "start": 1169,
    "end": 1174,
    "range": [
      1169,
      1174
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1175,
    "end": 1176,
    "range": [
      1175,
      1176
    ]
  },
  {
    "type": "Identifier",
    "value": "CheckBooleanOnly",
    "start": 1177,
    "end": 1193,
    "range": [
      1177,
      1193
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1193,
    "end": 1194,
    "range": [
      1193,
      1194
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1194,
    "end": 1195,
    "range": [
      1194,
      1195
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1195,
    "end": 1201,
    "range": [
      1195,
      1201
    ]
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 1202,
    "end": 1208,
    "range": [
      1202,
      1208
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1208,
    "end": 1209,
    "range": [
      1208,
      1209
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1209,
    "end": 1210,
    "range": [
      1209,
      1210
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 1210,
    "end": 1215,
    "range": [
      1210,
      1215
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1215,
    "end": 1216,
    "range": [
      1215,
      1216
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1216,
    "end": 1217,
    "range": [
      1216,
      1217
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1217,
    "end": 1218,
    "range": [
      1217,
      1218
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1219,
    "end": 1223,
    "range": [
      1219,
      1223
    ]
  },
  {
    "type": "Identifier",
    "value": "T_OK3",
    "start": 1224,
    "end": 1229,
    "range": [
      1224,
      1229
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1230,
    "end": 1231,
    "range": [
      1230,
      1231
    ]
  },
  {
    "type": "Identifier",
    "value": "CheckBooleanOnly",
    "start": 1232,
    "end": 1248,
    "range": [
      1232,
      1248
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1248,
    "end": 1249,
    "range": [
      1248,
      1249
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1249,
    "end": 1250,
    "range": [
      1249,
      1250
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1250,
    "end": 1256,
    "range": [
      1250,
      1256
    ]
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 1257,
    "end": 1263,
    "range": [
      1257,
      1263
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1263,
    "end": 1264,
    "range": [
      1263,
      1264
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1264,
    "end": 1265,
    "range": [
      1264,
      1265
    ]
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 1265,
    "end": 1270,
    "range": [
      1265,
      1270
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1271,
    "end": 1272,
    "range": [
      1271,
      1272
    ]
  },
  {
    "type": "String",
    "value": "\"baz\"",
    "start": 1273,
    "end": 1278,
    "range": [
      1273,
      1278
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1278,
    "end": 1279,
    "range": [
      1278,
      1279
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1279,
    "end": 1280,
    "range": [
      1279,
      1280
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1280,
    "end": 1281,
    "range": [
      1280,
      1281
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1282,
    "end": 1286,
    "range": [
      1282,
      1286
    ]
  },
  {
    "type": "Identifier",
    "value": "T_OK4",
    "start": 1287,
    "end": 1292,
    "range": [
      1287,
      1292
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1293,
    "end": 1294,
    "range": [
      1293,
      1294
    ]
  },
  {
    "type": "Identifier",
    "value": "CheckBooleanOnly",
    "start": 1295,
    "end": 1311,
    "range": [
      1295,
      1311
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1311,
    "end": 1312,
    "range": [
      1311,
      1312
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1312,
    "end": 1313,
    "range": [
      1312,
      1313
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1313,
    "end": 1319,
    "range": [
      1313,
      1319
    ]
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 1320,
    "end": 1326,
    "range": [
      1320,
      1326
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1326,
    "end": 1327,
    "range": [
      1326,
      1327
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1327,
    "end": 1328,
    "range": [
      1327,
      1328
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1328,
    "end": 1334,
    "range": [
      1328,
      1334
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1334,
    "end": 1335,
    "range": [
      1334,
      1335
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1335,
    "end": 1336,
    "range": [
      1335,
      1336
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1336,
    "end": 1337,
    "range": [
      1336,
      1337
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1338,
    "end": 1342,
    "range": [
      1338,
      1342
    ]
  },
  {
    "type": "Identifier",
    "value": "T_OK5",
    "start": 1343,
    "end": 1348,
    "range": [
      1343,
      1348
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1349,
    "end": 1350,
    "range": [
      1349,
      1350
    ]
  },
  {
    "type": "Identifier",
    "value": "CheckBooleanOnly",
    "start": 1351,
    "end": 1367,
    "range": [
      1351,
      1367
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1367,
    "end": 1368,
    "range": [
      1367,
      1368
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1368,
    "end": 1369,
    "range": [
      1368,
      1369
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1369,
    "end": 1375,
    "range": [
      1369,
      1375
    ]
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 1376,
    "end": 1382,
    "range": [
      1376,
      1382
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1382,
    "end": 1383,
    "range": [
      1382,
      1383
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1383,
    "end": 1384,
    "range": [
      1383,
      1384
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1384,
    "end": 1387,
    "range": [
      1384,
      1387
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1387,
    "end": 1388,
    "range": [
      1387,
      1388
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1388,
    "end": 1389,
    "range": [
      1388,
      1389
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1389,
    "end": 1390,
    "range": [
      1389,
      1390
    ]
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 1448,
    "end": 1454,
    "range": [
      1448,
      1454
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1454,
    "end": 1455,
    "range": [
      1454,
      1455
    ]
  },
  {
    "type": "String",
    "value": "\"baz\"",
    "start": 1455,
    "end": 1460,
    "range": [
      1455,
      1460
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1460,
    "end": 1461,
    "range": [
      1460,
      1461
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1462,
    "end": 1463,
    "range": [
      1462,
      1463
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1464,
    "end": 1473,
    "range": [
      1464,
      1473
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1473,
    "end": 1474,
    "range": [
      1473,
      1474
    ]
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 1475,
    "end": 1481,
    "range": [
      1475,
      1481
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1481,
    "end": 1482,
    "range": [
      1481,
      1482
    ]
  },
  {
    "type": "Identifier",
    "value": "qua",
    "start": 1482,
    "end": 1485,
    "range": [
      1482,
      1485
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1486,
    "end": 1487,
    "range": [
      1486,
      1487
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1488,
    "end": 1497,
    "range": [
      1488,
      1497
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1497,
    "end": 1498,
    "range": [
      1497,
      1498
    ]
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 1499,
    "end": 1505,
    "range": [
      1499,
      1505
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1505,
    "end": 1506,
    "range": [
      1505,
      1506
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1506,
    "end": 1507,
    "range": [
      1506,
      1507
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1507,
    "end": 1508,
    "range": [
      1507,
      1508
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1509,
    "end": 1510,
    "range": [
      1509,
      1510
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1511,
    "end": 1520,
    "range": [
      1511,
      1520
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1520,
    "end": 1521,
    "range": [
      1520,
      1521
    ]
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 1522,
    "end": 1528,
    "range": [
      1522,
      1528
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1528,
    "end": 1529,
    "range": [
      1528,
      1529
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1529,
    "end": 1533,
    "range": [
      1529,
      1533
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1534,
    "end": 1536,
    "range": [
      1534,
      1536
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1537,
    "end": 1540,
    "range": [
      1537,
      1540
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1540,
    "end": 1541,
    "range": [
      1540,
      1541
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1542,
    "end": 1543,
    "range": [
      1542,
      1543
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1544,
    "end": 1553,
    "range": [
      1544,
      1553
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1553,
    "end": 1554,
    "range": [
      1553,
      1554
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1590,
    "end": 1597,
    "range": [
      1590,
      1597
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1598,
    "end": 1603,
    "range": [
      1598,
      1603
    ]
  },
  {
    "type": "Identifier",
    "value": "numMap",
    "start": 1604,
    "end": 1610,
    "range": [
      1604,
      1610
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1610,
    "end": 1611,
    "range": [
      1610,
      1611
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1612,
    "end": 1613,
    "range": [
      1612,
      1613
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1614,
    "end": 1615,
    "range": [
      1614,
      1615
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1615,
    "end": 1616,
    "range": [
      1615,
      1616
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1616,
    "end": 1617,
    "range": [
      1616,
      1617
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1618,
    "end": 1624,
    "range": [
      1618,
      1624
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1624,
    "end": 1625,
    "range": [
      1624,
      1625
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1625,
    "end": 1626,
    "range": [
      1625,
      1626
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1627,
    "end": 1634,
    "range": [
      1627,
      1634
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1635,
    "end": 1636,
    "range": [
      1635,
      1636
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1636,
    "end": 1637,
    "range": [
      1636,
      1637
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1667,
    "end": 1672,
    "range": [
      1667,
      1672
    ]
  },
  {
    "type": "Identifier",
    "value": "num_ok1",
    "start": 1673,
    "end": 1680,
    "range": [
      1673,
      1680
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1680,
    "end": 1681,
    "range": [
      1680,
      1681
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1682,
    "end": 1689,
    "range": [
      1682,
      1689
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1690,
    "end": 1691,
    "range": [
      1690,
      1691
    ]
  },
  {
    "type": "Identifier",
    "value": "numMap",
    "start": 1692,
    "end": 1698,
    "range": [
      1692,
      1698
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1698,
    "end": 1699,
    "range": [
      1698,
      1699
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1699,
    "end": 1700,
    "range": [
      1699,
      1700
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1700,
    "end": 1701,
    "range": [
      1700,
      1701
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1701,
    "end": 1702,
    "range": [
      1701,
      1702
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1703,
    "end": 1708,
    "range": [
      1703,
      1708
    ]
  },
  {
    "type": "Identifier",
    "value": "num_ok2",
    "start": 1709,
    "end": 1716,
    "range": [
      1709,
      1716
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1716,
    "end": 1717,
    "range": [
      1716,
      1717
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1718,
    "end": 1725,
    "range": [
      1718,
      1725
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1726,
    "end": 1727,
    "range": [
      1726,
      1727
    ]
  },
  {
    "type": "Identifier",
    "value": "numMap",
    "start": 1728,
    "end": 1734,
    "range": [
      1728,
      1734
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1734,
    "end": 1735,
    "range": [
      1734,
      1735
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1735,
    "end": 1736,
    "range": [
      1735,
      1736
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1737,
    "end": 1739,
    "range": [
      1737,
      1739
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1740,
    "end": 1746,
    "range": [
      1740,
      1746
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1746,
    "end": 1747,
    "range": [
      1746,
      1747
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1747,
    "end": 1748,
    "range": [
      1747,
      1748
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1749,
    "end": 1754,
    "range": [
      1749,
      1754
    ]
  },
  {
    "type": "Identifier",
    "value": "num_ok3",
    "start": 1755,
    "end": 1762,
    "range": [
      1755,
      1762
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1762,
    "end": 1763,
    "range": [
      1762,
      1763
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1764,
    "end": 1771,
    "range": [
      1764,
      1771
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1772,
    "end": 1773,
    "range": [
      1772,
      1773
    ]
  },
  {
    "type": "Identifier",
    "value": "numMap",
    "start": 1774,
    "end": 1780,
    "range": [
      1774,
      1780
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1780,
    "end": 1781,
    "range": [
      1780,
      1781
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1781,
    "end": 1782,
    "range": [
      1781,
      1782
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1783,
    "end": 1785,
    "range": [
      1783,
      1785
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1786,
    "end": 1787,
    "range": [
      1786,
      1787
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1788,
    "end": 1789,
    "range": [
      1788,
      1789
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1790,
    "end": 1791,
    "range": [
      1790,
      1791
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1791,
    "end": 1792,
    "range": [
      1791,
      1792
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1792,
    "end": 1793,
    "range": [
      1792,
      1793
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1794,
    "end": 1799,
    "range": [
      1794,
      1799
    ]
  },
  {
    "type": "Identifier",
    "value": "num_ok4",
    "start": 1800,
    "end": 1807,
    "range": [
      1800,
      1807
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1807,
    "end": 1808,
    "range": [
      1807,
      1808
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1809,
    "end": 1816,
    "range": [
      1809,
      1816
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1817,
    "end": 1818,
    "range": [
      1817,
      1818
    ]
  },
  {
    "type": "Identifier",
    "value": "numMap",
    "start": 1819,
    "end": 1825,
    "range": [
      1819,
      1825
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1825,
    "end": 1826,
    "range": [
      1825,
      1826
    ]
  },
  {
    "type": "Identifier",
    "value": "NumericEnum1",
    "start": 1826,
    "end": 1838,
    "range": [
      1826,
      1838
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1838,
    "end": 1839,
    "range": [
      1838,
      1839
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1839,
    "end": 1840,
    "range": [
      1839,
      1840
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1840,
    "end": 1841,
    "range": [
      1840,
      1841
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1841,
    "end": 1842,
    "range": [
      1841,
      1842
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1843,
    "end": 1848,
    "range": [
      1843,
      1848
    ]
  },
  {
    "type": "Identifier",
    "value": "num_ok5",
    "start": 1849,
    "end": 1856,
    "range": [
      1849,
      1856
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1856,
    "end": 1857,
    "range": [
      1856,
      1857
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1858,
    "end": 1865,
    "range": [
      1858,
      1865
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1866,
    "end": 1867,
    "range": [
      1866,
      1867
    ]
  },
  {
    "type": "Identifier",
    "value": "numMap",
    "start": 1868,
    "end": 1874,
    "range": [
      1868,
      1874
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1874,
    "end": 1875,
    "range": [
      1874,
      1875
    ]
  },
  {
    "type": "Identifier",
    "value": "NumericEnum2",
    "start": 1875,
    "end": 1887,
    "range": [
      1875,
      1887
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1887,
    "end": 1888,
    "range": [
      1887,
      1888
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1888,
    "end": 1889,
    "range": [
      1888,
      1889
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1889,
    "end": 1890,
    "range": [
      1889,
      1890
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1890,
    "end": 1891,
    "range": [
      1890,
      1891
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1905,
    "end": 1913,
    "range": [
      1905,
      1913
    ]
  },
  {
    "type": "Identifier",
    "value": "generic1",
    "start": 1914,
    "end": 1922,
    "range": [
      1914,
      1922
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1922,
    "end": 1923,
    "range": [
      1922,
      1923
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1923,
    "end": 1924,
    "range": [
      1923,
      1924
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1925,
    "end": 1932,
    "range": [
      1925,
      1932
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1933,
    "end": 1934,
    "range": [
      1933,
      1934
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1935,
    "end": 1936,
    "range": [
      1935,
      1936
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1936,
    "end": 1937,
    "range": [
      1936,
      1937
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1937,
    "end": 1938,
    "range": [
      1937,
      1938
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1939,
    "end": 1945,
    "range": [
      1939,
      1945
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1945,
    "end": 1946,
    "range": [
      1945,
      1946
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1946,
    "end": 1947,
    "range": [
      1946,
      1947
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1948,
    "end": 1955,
    "range": [
      1948,
      1955
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1956,
    "end": 1957,
    "range": [
      1956,
      1957
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1957,
    "end": 1958,
    "range": [
      1957,
      1958
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1958,
    "end": 1959,
    "range": [
      1958,
      1959
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1959,
    "end": 1962,
    "range": [
      1959,
      1962
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1962,
    "end": 1963,
    "range": [
      1962,
      1963
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1964,
    "end": 1965,
    "range": [
      1964,
      1965
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1965,
    "end": 1966,
    "range": [
      1965,
      1966
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1966,
    "end": 1967,
    "range": [
      1966,
      1967
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1968,
    "end": 1975,
    "range": [
      1968,
      1975
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1976,
    "end": 1977,
    "range": [
      1976,
      1977
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2002,
    "end": 2008,
    "range": [
      2002,
      2008
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2009,
    "end": 2012,
    "range": [
      2009,
      2012
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2012,
    "end": 2013,
    "range": [
      2012,
      2013
    ]
  },
  {
    "type": "String",
    "value": "\"blah\"",
    "start": 2013,
    "end": 2019,
    "range": [
      2013,
      2019
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2019,
    "end": 2020,
    "range": [
      2019,
      2020
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2020,
    "end": 2021,
    "range": [
      2020,
      2021
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2022,
    "end": 2023,
    "range": [
      2022,
      2023
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2024,
    "end": 2032,
    "range": [
      2024,
      2032
    ]
  },
  {
    "type": "Identifier",
    "value": "generic2",
    "start": 2033,
    "end": 2041,
    "range": [
      2033,
      2041
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2041,
    "end": 2042,
    "range": [
      2041,
      2042
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2042,
    "end": 2043,
    "range": [
      2042,
      2043
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2044,
    "end": 2051,
    "range": [
      2044,
      2051
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2052,
    "end": 2053,
    "range": [
      2052,
      2053
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2054,
    "end": 2055,
    "range": [
      2054,
      2055
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2055,
    "end": 2056,
    "range": [
      2055,
      2056
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2056,
    "end": 2057,
    "range": [
      2056,
      2057
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2058,
    "end": 2064,
    "range": [
      2058,
      2064
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2064,
    "end": 2065,
    "range": [
      2064,
      2065
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2065,
    "end": 2066,
    "range": [
      2065,
      2066
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2067,
    "end": 2074,
    "range": [
      2067,
      2074
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2075,
    "end": 2076,
    "range": [
      2075,
      2076
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2076,
    "end": 2077,
    "range": [
      2076,
      2077
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2077,
    "end": 2078,
    "range": [
      2077,
      2078
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2078,
    "end": 2081,
    "range": [
      2078,
      2081
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2081,
    "end": 2082,
    "range": [
      2081,
      2082
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2083,
    "end": 2084,
    "range": [
      2083,
      2084
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2084,
    "end": 2085,
    "range": [
      2084,
      2085
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2085,
    "end": 2086,
    "range": [
      2085,
      2086
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2087,
    "end": 2094,
    "range": [
      2087,
      2094
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2095,
    "end": 2096,
    "range": [
      2095,
      2096
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2118,
    "end": 2124,
    "range": [
      2118,
      2124
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2125,
    "end": 2128,
    "range": [
      2125,
      2128
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2128,
    "end": 2129,
    "range": [
      2128,
      2129
    ]
  },
  {
    "type": "String",
    "value": "\"blah\"",
    "start": 2129,
    "end": 2135,
    "range": [
      2129,
      2135
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2135,
    "end": 2136,
    "range": [
      2135,
      2136
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2136,
    "end": 2137,
    "range": [
      2136,
      2137
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2137,
    "end": 2138,
    "range": [
      2137,
      2138
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2139,
    "end": 2140,
    "range": [
      2139,
      2140
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2141,
    "end": 2149,
    "range": [
      2141,
      2149
    ]
  },
  {
    "type": "Identifier",
    "value": "generic3",
    "start": 2150,
    "end": 2158,
    "range": [
      2150,
      2158
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2158,
    "end": 2159,
    "range": [
      2158,
      2159
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2159,
    "end": 2160,
    "range": [
      2159,
      2160
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2161,
    "end": 2168,
    "range": [
      2161,
      2168
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2169,
    "end": 2175,
    "range": [
      2169,
      2175
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2175,
    "end": 2176,
    "range": [
      2175,
      2176
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2176,
    "end": 2177,
    "range": [
      2176,
      2177
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2177,
    "end": 2180,
    "range": [
      2177,
      2180
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2180,
    "end": 2181,
    "range": [
      2180,
      2181
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2182,
    "end": 2183,
    "range": [
      2182,
      2183
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2183,
    "end": 2184,
    "range": [
      2183,
      2184
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2184,
    "end": 2185,
    "range": [
      2184,
      2185
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2186,
    "end": 2193,
    "range": [
      2186,
      2193
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2194,
    "end": 2195,
    "range": [
      2194,
      2195
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2220,
    "end": 2226,
    "range": [
      2220,
      2226
    ]
  },
  {
    "type": "Identifier",
    "value": "strMap",
    "start": 2227,
    "end": 2233,
    "range": [
      2227,
      2233
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2233,
    "end": 2234,
    "range": [
      2233,
      2234
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2234,
    "end": 2237,
    "range": [
      2234,
      2237
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2237,
    "end": 2238,
    "range": [
      2237,
      2238
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2238,
    "end": 2239,
    "range": [
      2238,
      2239
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2240,
    "end": 2241,
    "range": [
      2240,
      2241
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2289,
    "end": 2296,
    "range": [
      2289,
      2296
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2297,
    "end": 2302,
    "range": [
      2297,
      2302
    ]
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 2303,
    "end": 2307,
    "range": [
      2303,
      2307
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2307,
    "end": 2308,
    "range": [
      2307,
      2308
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2309,
    "end": 2310,
    "range": [
      2309,
      2310
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2311,
    "end": 2312,
    "range": [
      2311,
      2312
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2312,
    "end": 2313,
    "range": [
      2312,
      2313
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2314,
    "end": 2320,
    "range": [
      2314,
      2320
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2320,
    "end": 2321,
    "range": [
      2320,
      2321
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2322,
    "end": 2323,
    "range": [
      2322,
      2323
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2323,
    "end": 2324,
    "range": [
      2323,
      2324
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2325,
    "end": 2331,
    "range": [
      2325,
      2331
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2331,
    "end": 2332,
    "range": [
      2331,
      2332
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2333,
    "end": 2334,
    "range": [
      2333,
      2334
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2334,
    "end": 2337,
    "range": [
      2334,
      2337
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2337,
    "end": 2338,
    "range": [
      2337,
      2338
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2339,
    "end": 2345,
    "range": [
      2339,
      2345
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2345,
    "end": 2346,
    "range": [
      2345,
      2346
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2346,
    "end": 2347,
    "range": [
      2346,
      2347
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2348,
    "end": 2354,
    "range": [
      2348,
      2354
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2355,
    "end": 2356,
    "range": [
      2355,
      2356
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2357,
    "end": 2363,
    "range": [
      2357,
      2363
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2364,
    "end": 2365,
    "range": [
      2364,
      2365
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2365,
    "end": 2366,
    "range": [
      2365,
      2366
    ]
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 2367,
    "end": 2371,
    "range": [
      2367,
      2371
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2371,
    "end": 2372,
    "range": [
      2371,
      2372
    ]
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 2372,
    "end": 2375,
    "range": [
      2372,
      2375
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2375,
    "end": 2376,
    "range": [
      2375,
      2376
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2376,
    "end": 2377,
    "range": [
      2376,
      2377
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2378,
    "end": 2383,
    "range": [
      2378,
      2383
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2384,
    "end": 2385,
    "range": [
      2384,
      2385
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2386,
    "end": 2387,
    "range": [
      2386,
      2387
    ]
  },
  {
    "type": "String",
    "value": "\"y\"",
    "start": 2388,
    "end": 2391,
    "range": [
      2388,
      2391
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2391,
    "end": 2392,
    "range": [
      2391,
      2392
    ]
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 2393,
    "end": 2397,
    "range": [
      2393,
      2397
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2397,
    "end": 2398,
    "range": [
      2397,
      2398
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2398,
    "end": 2399,
    "range": [
      2398,
      2399
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2399,
    "end": 2400,
    "range": [
      2399,
      2400
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2400,
    "end": 2401,
    "range": [
      2400,
      2401
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2402,
    "end": 2405,
    "range": [
      2402,
      2405
    ]
  },
  {
    "type": "Identifier",
    "value": "yy",
    "start": 2406,
    "end": 2408,
    "range": [
      2406,
      2408
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2409,
    "end": 2410,
    "range": [
      2409,
      2410
    ]
  },
  {
    "type": "String",
    "value": "\"y\"",
    "start": 2411,
    "end": 2414,
    "range": [
      2411,
      2414
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2414,
    "end": 2415,
    "range": [
      2414,
      2415
    ]
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 2416,
    "end": 2420,
    "range": [
      2416,
      2420
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2420,
    "end": 2421,
    "range": [
      2420,
      2421
    ]
  },
  {
    "type": "Identifier",
    "value": "yy",
    "start": 2421,
    "end": 2423,
    "range": [
      2421,
      2423
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2423,
    "end": 2424,
    "range": [
      2423,
      2424
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2424,
    "end": 2425,
    "range": [
      2424,
      2425
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2426,
    "end": 2429,
    "range": [
      2426,
      2429
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2430,
    "end": 2431,
    "range": [
      2430,
      2431
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2432,
    "end": 2433,
    "range": [
      2432,
      2433
    ]
  },
  {
    "type": "String",
    "value": "\"z\"",
    "start": 2434,
    "end": 2437,
    "range": [
      2434,
      2437
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2437,
    "end": 2438,
    "range": [
      2437,
      2438
    ]
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 2439,
    "end": 2443,
    "range": [
      2439,
      2443
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2443,
    "end": 2444,
    "range": [
      2443,
      2444
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2444,
    "end": 2445,
    "range": [
      2444,
      2445
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2445,
    "end": 2446,
    "range": [
      2445,
      2446
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2446,
    "end": 2447,
    "range": [
      2446,
      2447
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2473,
    "end": 2480,
    "range": [
      2473,
      2480
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2481,
    "end": 2486,
    "range": [
      2481,
      2486
    ]
  },
  {
    "type": "Identifier",
    "value": "strMapUnion",
    "start": 2487,
    "end": 2498,
    "range": [
      2487,
      2498
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2498,
    "end": 2499,
    "range": [
      2498,
      2499
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2500,
    "end": 2501,
    "range": [
      2500,
      2501
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2502,
    "end": 2503,
    "range": [
      2502,
      2503
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2503,
    "end": 2504,
    "range": [
      2503,
      2504
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2504,
    "end": 2505,
    "range": [
      2504,
      2505
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2506,
    "end": 2512,
    "range": [
      2506,
      2512
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2512,
    "end": 2513,
    "range": [
      2512,
      2513
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2513,
    "end": 2514,
    "range": [
      2513,
      2514
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2515,
    "end": 2522,
    "range": [
      2515,
      2522
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2523,
    "end": 2524,
    "range": [
      2523,
      2524
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2525,
    "end": 2526,
    "range": [
      2525,
      2526
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2527,
    "end": 2528,
    "range": [
      2527,
      2528
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2529,
    "end": 2530,
    "range": [
      2529,
      2530
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2530,
    "end": 2531,
    "range": [
      2530,
      2531
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2531,
    "end": 2532,
    "range": [
      2531,
      2532
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2533,
    "end": 2539,
    "range": [
      2533,
      2539
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2539,
    "end": 2540,
    "range": [
      2539,
      2540
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2540,
    "end": 2541,
    "range": [
      2540,
      2541
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2542,
    "end": 2548,
    "range": [
      2542,
      2548
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2549,
    "end": 2550,
    "range": [
      2549,
      2550
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2550,
    "end": 2551,
    "range": [
      2550,
      2551
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2568,
    "end": 2573,
    "range": [
      2568,
      2573
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 2574,
    "end": 2576,
    "range": [
      2574,
      2576
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2576,
    "end": 2577,
    "range": [
      2576,
      2577
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2578,
    "end": 2585,
    "range": [
      2578,
      2585
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2586,
    "end": 2587,
    "range": [
      2586,
      2587
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2588,
    "end": 2594,
    "range": [
      2588,
      2594
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2595,
    "end": 2596,
    "range": [
      2595,
      2596
    ]
  },
  {
    "type": "Identifier",
    "value": "strMapUnion",
    "start": 2597,
    "end": 2608,
    "range": [
      2597,
      2608
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2608,
    "end": 2609,
    "range": [
      2608,
      2609
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 2609,
    "end": 2614,
    "range": [
      2609,
      2614
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2614,
    "end": 2615,
    "range": [
      2614,
      2615
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2615,
    "end": 2616,
    "range": [
      2615,
      2616
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2645,
    "end": 2652,
    "range": [
      2645,
      2652
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2653,
    "end": 2658,
    "range": [
      2653,
      2658
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2659,
    "end": 2660,
    "range": [
      2659,
      2660
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2660,
    "end": 2661,
    "range": [
      2660,
      2661
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 2662,
    "end": 2668,
    "range": [
      2662,
      2668
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 2669,
    "end": 2675,
    "range": [
      2669,
      2675
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2675,
    "end": 2676,
    "range": [
      2675,
      2676
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2677,
    "end": 2684,
    "range": [
      2677,
      2684
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2685,
    "end": 2690,
    "range": [
      2685,
      2690
    ]
  },
  {
    "type": "Identifier",
    "value": "symbolMap",
    "start": 2691,
    "end": 2700,
    "range": [
      2691,
      2700
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2700,
    "end": 2701,
    "range": [
      2700,
      2701
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2702,
    "end": 2703,
    "range": [
      2702,
      2703
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2704,
    "end": 2705,
    "range": [
      2704,
      2705
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2705,
    "end": 2706,
    "range": [
      2705,
      2706
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2706,
    "end": 2707,
    "range": [
      2706,
      2707
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2707,
    "end": 2708,
    "range": [
      2707,
      2708
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2709,
    "end": 2715,
    "range": [
      2709,
      2715
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2716,
    "end": 2717,
    "range": [
      2716,
      2717
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2717,
    "end": 2718,
    "range": [
      2717,
      2718
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2719,
    "end": 2724,
    "range": [
      2719,
      2724
    ]
  },
  {
    "type": "Identifier",
    "value": "e15",
    "start": 2725,
    "end": 2728,
    "range": [
      2725,
      2728
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2728,
    "end": 2729,
    "range": [
      2728,
      2729
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2730,
    "end": 2736,
    "range": [
      2730,
      2736
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2737,
    "end": 2738,
    "range": [
      2737,
      2738
    ]
  },
  {
    "type": "Identifier",
    "value": "symbolMap",
    "start": 2739,
    "end": 2748,
    "range": [
      2739,
      2748
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2748,
    "end": 2749,
    "range": [
      2748,
      2749
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2749,
    "end": 2750,
    "range": [
      2749,
      2750
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2750,
    "end": 2751,
    "range": [
      2750,
      2751
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2751,
    "end": 2752,
    "range": [
      2751,
      2752
    ]
  },
  {
    "type": "Identifier",
    "value": "symbolMap",
    "start": 2766,
    "end": 2775,
    "range": [
      2766,
      2775
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2775,
    "end": 2776,
    "range": [
      2775,
      2776
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2776,
    "end": 2777,
    "range": [
      2776,
      2777
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2777,
    "end": 2778,
    "range": [
      2777,
      2778
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2779,
    "end": 2780,
    "range": [
      2779,
      2780
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2781,
    "end": 2790,
    "range": [
      2781,
      2790
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2790,
    "end": 2791,
    "range": [
      2790,
      2791
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2828,
    "end": 2835,
    "range": [
      2828,
      2835
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2836,
    "end": 2841,
    "range": [
      2836,
      2841
    ]
  },
  {
    "type": "Identifier",
    "value": "nonEmptyStringArray",
    "start": 2842,
    "end": 2861,
    "range": [
      2842,
      2861
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2861,
    "end": 2862,
    "range": [
      2861,
      2862
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2863,
    "end": 2864,
    "range": [
      2863,
      2864
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2864,
    "end": 2870,
    "range": [
      2864,
      2870
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2870,
    "end": 2871,
    "range": [
      2870,
      2871
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2872,
    "end": 2875,
    "range": [
      2872,
      2875
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2875,
    "end": 2881,
    "range": [
      2875,
      2881
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2881,
    "end": 2882,
    "range": [
      2881,
      2882
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2882,
    "end": 2883,
    "range": [
      2882,
      2883
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2883,
    "end": 2884,
    "range": [
      2883,
      2884
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2884,
    "end": 2885,
    "range": [
      2884,
      2885
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2886,
    "end": 2891,
    "range": [
      2886,
      2891
    ]
  },
  {
    "type": "Identifier",
    "value": "variadicOk1",
    "start": 2892,
    "end": 2903,
    "range": [
      2892,
      2903
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2903,
    "end": 2904,
    "range": [
      2903,
      2904
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2905,
    "end": 2911,
    "range": [
      2905,
      2911
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2912,
    "end": 2913,
    "range": [
      2912,
      2913
    ]
  },
  {
    "type": "Identifier",
    "value": "nonEmptyStringArray",
    "start": 2914,
    "end": 2933,
    "range": [
      2914,
      2933
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2933,
    "end": 2934,
    "range": [
      2933,
      2934
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2934,
    "end": 2935,
    "range": [
      2934,
      2935
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2935,
    "end": 2936,
    "range": [
      2935,
      2936
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2936,
    "end": 2937,
    "range": [
      2936,
      2937
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2952,
    "end": 2957,
    "range": [
      2952,
      2957
    ]
  },
  {
    "type": "Identifier",
    "value": "variadicError1",
    "start": 2958,
    "end": 2972,
    "range": [
      2958,
      2972
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2972,
    "end": 2973,
    "range": [
      2972,
      2973
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2974,
    "end": 2980,
    "range": [
      2974,
      2980
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2981,
    "end": 2982,
    "range": [
      2981,
      2982
    ]
  },
  {
    "type": "Identifier",
    "value": "nonEmptyStringArray",
    "start": 2983,
    "end": 3002,
    "range": [
      2983,
      3002
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3002,
    "end": 3003,
    "range": [
      3002,
      3003
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3003,
    "end": 3004,
    "range": [
      3003,
      3004
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3004,
    "end": 3005,
    "range": [
      3004,
      3005
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3005,
    "end": 3006,
    "range": [
      3005,
      3006
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3046,
    "end": 3053,
    "range": [
      3046,
      3053
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3054,
    "end": 3059,
    "range": [
      3054,
      3059
    ]
  },
  {
    "type": "Identifier",
    "value": "myRecord1",
    "start": 3060,
    "end": 3069,
    "range": [
      3060,
      3069
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3069,
    "end": 3070,
    "range": [
      3069,
      3070
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3071,
    "end": 3072,
    "range": [
      3071,
      3072
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3073,
    "end": 3074,
    "range": [
      3073,
      3074
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3074,
    "end": 3075,
    "range": [
      3074,
      3075
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3076,
    "end": 3082,
    "range": [
      3076,
      3082
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3082,
    "end": 3083,
    "range": [
      3082,
      3083
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3084,
    "end": 3085,
    "range": [
      3084,
      3085
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3085,
    "end": 3086,
    "range": [
      3085,
      3086
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3087,
    "end": 3093,
    "range": [
      3087,
      3093
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3094,
    "end": 3095,
    "range": [
      3094,
      3095
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3095,
    "end": 3096,
    "range": [
      3095,
      3096
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3097,
    "end": 3104,
    "range": [
      3097,
      3104
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3105,
    "end": 3110,
    "range": [
      3105,
      3110
    ]
  },
  {
    "type": "Identifier",
    "value": "myRecord2",
    "start": 3111,
    "end": 3120,
    "range": [
      3111,
      3120
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3120,
    "end": 3121,
    "range": [
      3120,
      3121
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3122,
    "end": 3123,
    "range": [
      3122,
      3123
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3124,
    "end": 3125,
    "range": [
      3124,
      3125
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3125,
    "end": 3126,
    "range": [
      3125,
      3126
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3127,
    "end": 3133,
    "range": [
      3127,
      3133
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3133,
    "end": 3134,
    "range": [
      3133,
      3134
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3135,
    "end": 3136,
    "range": [
      3135,
      3136
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3136,
    "end": 3137,
    "range": [
      3136,
      3137
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3138,
    "end": 3144,
    "range": [
      3138,
      3144
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3144,
    "end": 3145,
    "range": [
      3144,
      3145
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3146,
    "end": 3147,
    "range": [
      3146,
      3147
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3147,
    "end": 3150,
    "range": [
      3147,
      3150
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3150,
    "end": 3151,
    "range": [
      3150,
      3151
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3152,
    "end": 3158,
    "range": [
      3152,
      3158
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3158,
    "end": 3159,
    "range": [
      3158,
      3159
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3159,
    "end": 3160,
    "range": [
      3159,
      3160
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3161,
    "end": 3167,
    "range": [
      3161,
      3167
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3168,
    "end": 3169,
    "range": [
      3168,
      3169
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3169,
    "end": 3170,
    "range": [
      3169,
      3170
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3171,
    "end": 3176,
    "range": [
      3171,
      3176
    ]
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 3177,
    "end": 3180,
    "range": [
      3177,
      3180
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3181,
    "end": 3182,
    "range": [
      3181,
      3182
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3183,
    "end": 3184,
    "range": [
      3183,
      3184
    ]
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 3184,
    "end": 3187,
    "range": [
      3184,
      3187
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3188,
    "end": 3195,
    "range": [
      3188,
      3195
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3196,
    "end": 3201,
    "range": [
      3196,
      3201
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3202,
    "end": 3208,
    "range": [
      3202,
      3208
    ]
  },
  {
    "type": "Identifier",
    "value": "myRecord1",
    "start": 3209,
    "end": 3218,
    "range": [
      3209,
      3218
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3218,
    "end": 3219,
    "range": [
      3218,
      3219
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3219,
    "end": 3220,
    "range": [
      3219,
      3220
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3220,
    "end": 3223,
    "range": [
      3220,
      3223
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3223,
    "end": 3224,
    "range": [
      3223,
      3224
    ]
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 3225,
    "end": 3228,
    "range": [
      3225,
      3228
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3228,
    "end": 3229,
    "range": [
      3228,
      3229
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3229,
    "end": 3230,
    "range": [
      3229,
      3230
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3231,
    "end": 3237,
    "range": [
      3231,
      3237
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3238,
    "end": 3240,
    "range": [
      3238,
      3240
    ]
  },
  {
    "type": "Identifier",
    "value": "myRecord1",
    "start": 3241,
    "end": 3250,
    "range": [
      3241,
      3250
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3250,
    "end": 3251,
    "range": [
      3250,
      3251
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3251,
    "end": 3254,
    "range": [
      3251,
      3254
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3254,
    "end": 3255,
    "range": [
      3254,
      3255
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3255,
    "end": 3256,
    "range": [
      3255,
      3256
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3270,
    "end": 3275,
    "range": [
      3270,
      3275
    ]
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 3276,
    "end": 3279,
    "range": [
      3276,
      3279
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3280,
    "end": 3281,
    "range": [
      3280,
      3281
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3282,
    "end": 3283,
    "range": [
      3282,
      3283
    ]
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 3283,
    "end": 3286,
    "range": [
      3283,
      3286
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3287,
    "end": 3294,
    "range": [
      3287,
      3294
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3295,
    "end": 3300,
    "range": [
      3295,
      3300
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3301,
    "end": 3307,
    "range": [
      3301,
      3307
    ]
  },
  {
    "type": "Identifier",
    "value": "myRecord1",
    "start": 3308,
    "end": 3317,
    "range": [
      3308,
      3317
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3317,
    "end": 3318,
    "range": [
      3317,
      3318
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3318,
    "end": 3319,
    "range": [
      3318,
      3319
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3319,
    "end": 3322,
    "range": [
      3319,
      3322
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3322,
    "end": 3323,
    "range": [
      3322,
      3323
    ]
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 3324,
    "end": 3327,
    "range": [
      3324,
      3327
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3327,
    "end": 3328,
    "range": [
      3327,
      3328
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3328,
    "end": 3329,
    "range": [
      3328,
      3329
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3330,
    "end": 3336,
    "range": [
      3330,
      3336
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3337,
    "end": 3339,
    "range": [
      3337,
      3339
    ]
  },
  {
    "type": "Identifier",
    "value": "myRecord2",
    "start": 3340,
    "end": 3349,
    "range": [
      3340,
      3349
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3349,
    "end": 3350,
    "range": [
      3349,
      3350
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3350,
    "end": 3353,
    "range": [
      3350,
      3353
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3353,
    "end": 3354,
    "range": [
      3353,
      3354
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3354,
    "end": 3355,
    "range": [
      3354,
      3355
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3369,
    "end": 3374,
    "range": [
      3369,
      3374
    ]
  },
  {
    "type": "Identifier",
    "value": "fn3",
    "start": 3375,
    "end": 3378,
    "range": [
      3375,
      3378
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3379,
    "end": 3380,
    "range": [
      3379,
      3380
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3381,
    "end": 3382,
    "range": [
      3381,
      3382
    ]
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 3382,
    "end": 3385,
    "range": [
      3382,
      3385
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3386,
    "end": 3393,
    "range": [
      3386,
      3393
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3394,
    "end": 3399,
    "range": [
      3394,
      3399
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3400,
    "end": 3406,
    "range": [
      3400,
      3406
    ]
  },
  {
    "type": "Identifier",
    "value": "myRecord2",
    "start": 3407,
    "end": 3416,
    "range": [
      3407,
      3416
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3416,
    "end": 3417,
    "range": [
      3416,
      3417
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3417,
    "end": 3418,
    "range": [
      3417,
      3418
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3418,
    "end": 3421,
    "range": [
      3418,
      3421
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3421,
    "end": 3422,
    "range": [
      3421,
      3422
    ]
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 3423,
    "end": 3426,
    "range": [
      3423,
      3426
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3426,
    "end": 3427,
    "range": [
      3426,
      3427
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3428,
    "end": 3430,
    "range": [
      3428,
      3430
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3431,
    "end": 3432,
    "range": [
      3431,
      3432
    ]
  },
  {
    "type": "Identifier",
    "value": "myRecord2",
    "start": 3437,
    "end": 3446,
    "range": [
      3437,
      3446
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3446,
    "end": 3447,
    "range": [
      3446,
      3447
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3447,
    "end": 3450,
    "range": [
      3447,
      3450
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3450,
    "end": 3451,
    "range": [
      3450,
      3451
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3452,
    "end": 3453,
    "range": [
      3452,
      3453
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3454,
    "end": 3463,
    "range": [
      3454,
      3463
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3463,
    "end": 3464,
    "range": [
      3463,
      3464
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3485,
    "end": 3490,
    "range": [
      3485,
      3490
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 3491,
    "end": 3492,
    "range": [
      3491,
      3492
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3492,
    "end": 3493,
    "range": [
      3492,
      3493
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3494,
    "end": 3500,
    "range": [
      3494,
      3500
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3501,
    "end": 3502,
    "range": [
      3501,
      3502
    ]
  },
  {
    "type": "Identifier",
    "value": "myRecord2",
    "start": 3503,
    "end": 3512,
    "range": [
      3503,
      3512
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3512,
    "end": 3513,
    "range": [
      3512,
      3513
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3513,
    "end": 3516,
    "range": [
      3513,
      3516
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3516,
    "end": 3517,
    "range": [
      3516,
      3517
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3517,
    "end": 3518,
    "range": [
      3517,
      3518
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3535,
    "end": 3536,
    "range": [
      3535,
      3536
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3536,
    "end": 3537,
    "range": [
      3536,
      3537
    ]
  }
]
```
