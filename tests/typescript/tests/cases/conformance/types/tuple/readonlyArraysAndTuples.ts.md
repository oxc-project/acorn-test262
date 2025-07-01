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
        "name": "T10",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 8
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSArrayType",
        "elementType": {
          "type": "TSStringKeyword",
          "start": 11,
          "end": 17
        },
        "start": 11,
        "end": 19
      },
      "declare": false,
      "start": 0,
      "end": 20
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T11",
        "optional": false,
        "typeAnnotation": null,
        "start": 26,
        "end": 29
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Array",
          "optional": false,
          "typeAnnotation": null,
          "start": 32,
          "end": 37
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 38,
              "end": 44
            }
          ],
          "start": 37,
          "end": 45
        },
        "start": 32,
        "end": 45
      },
      "declare": false,
      "start": 21,
      "end": 46
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T12",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 55
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "readonly",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSStringKeyword",
            "start": 67,
            "end": 73
          },
          "start": 67,
          "end": 75
        },
        "start": 58,
        "end": 75
      },
      "declare": false,
      "start": 47,
      "end": 76
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T13",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 85
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReadonlyArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 88,
          "end": 101
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 102,
              "end": 108
            }
          ],
          "start": 101,
          "end": 109
        },
        "start": 88,
        "end": 109
      },
      "declare": false,
      "start": 77,
      "end": 110
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T20",
        "optional": false,
        "typeAnnotation": null,
        "start": 117,
        "end": 120
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSNumberKeyword",
            "start": 124,
            "end": 130
          },
          {
            "type": "TSNumberKeyword",
            "start": 132,
            "end": 138
          }
        ],
        "start": 123,
        "end": 139
      },
      "declare": false,
      "start": 112,
      "end": 140
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T21",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 149
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "readonly",
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNumberKeyword",
              "start": 162,
              "end": 168
            },
            {
              "type": "TSNumberKeyword",
              "start": 170,
              "end": 176
            }
          ],
          "start": 161,
          "end": 177
        },
        "start": 152,
        "end": 177
      },
      "declare": false,
      "start": 141,
      "end": 178
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T30",
        "optional": false,
        "typeAnnotation": null,
        "start": 185,
        "end": 188
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "readonly",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 200,
          "end": 206
        },
        "start": 191,
        "end": 206
      },
      "declare": false,
      "start": 180,
      "end": 207
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T31",
        "optional": false,
        "typeAnnotation": null,
        "start": 223,
        "end": 226
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
              "start": 227,
              "end": 228
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 227,
            "end": 228
          }
        ],
        "start": 226,
        "end": 229
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "readonly",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 241,
            "end": 242
          },
          "typeArguments": null,
          "start": 241,
          "end": 242
        },
        "start": 232,
        "end": 242
      },
      "declare": false,
      "start": 218,
      "end": 243
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T32",
        "optional": false,
        "typeAnnotation": null,
        "start": 259,
        "end": 262
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "readonly",
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "operator": "readonly",
          "typeAnnotation": {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSStringKeyword",
              "start": 283,
              "end": 289
            },
            "start": 283,
            "end": 291
          },
          "start": 274,
          "end": 291
        },
        "start": 265,
        "end": 291
      },
      "declare": false,
      "start": 254,
      "end": 292
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T33",
        "optional": false,
        "typeAnnotation": null,
        "start": 308,
        "end": 311
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "readonly",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 323,
            "end": 328
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 329,
                "end": 335
              }
            ],
            "start": 328,
            "end": 336
          },
          "start": 323,
          "end": 336
        },
        "start": 314,
        "end": 336
      },
      "declare": false,
      "start": 303,
      "end": 337
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 358,
        "end": 360
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ma",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 365,
                "end": 371
              },
              "start": 365,
              "end": 373
            },
            "start": 363,
            "end": 373
          },
          "start": 361,
          "end": 373
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ra",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 388,
                  "end": 394
                },
                "start": 388,
                "end": 396
              },
              "start": 379,
              "end": 396
            },
            "start": 377,
            "end": 396
          },
          "start": 375,
          "end": 396
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "mt",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 403,
                  "end": 409
                },
                {
                  "type": "TSStringKeyword",
                  "start": 411,
                  "end": 417
                }
              ],
              "start": 402,
              "end": 418
            },
            "start": 400,
            "end": 418
          },
          "start": 398,
          "end": 418
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "rt",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 434,
                    "end": 440
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 442,
                    "end": 448
                  }
                ],
                "start": 433,
                "end": 449
              },
              "start": 424,
              "end": 449
            },
            "start": 422,
            "end": 449
          },
          "start": 420,
          "end": 449
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
                "name": "ma",
                "optional": false,
                "typeAnnotation": null,
                "start": 457,
                "end": 459
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ra",
                "optional": false,
                "typeAnnotation": null,
                "start": 462,
                "end": 464
              },
              "start": 457,
              "end": 464
            },
            "directive": null,
            "start": 457,
            "end": 465
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "ma",
                "optional": false,
                "typeAnnotation": null,
                "start": 480,
                "end": 482
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "mt",
                "optional": false,
                "typeAnnotation": null,
                "start": 485,
                "end": 487
              },
              "start": 480,
              "end": 487
            },
            "directive": null,
            "start": 480,
            "end": 488
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "ma",
                "optional": false,
                "typeAnnotation": null,
                "start": 493,
                "end": 495
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "rt",
                "optional": false,
                "typeAnnotation": null,
                "start": 498,
                "end": 500
              },
              "start": 493,
              "end": 500
            },
            "directive": null,
            "start": 493,
            "end": 501
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "ra",
                "optional": false,
                "typeAnnotation": null,
                "start": 516,
                "end": 518
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ma",
                "optional": false,
                "typeAnnotation": null,
                "start": 521,
                "end": 523
              },
              "start": 516,
              "end": 523
            },
            "directive": null,
            "start": 516,
            "end": 524
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "ra",
                "optional": false,
                "typeAnnotation": null,
                "start": 529,
                "end": 531
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "mt",
                "optional": false,
                "typeAnnotation": null,
                "start": 534,
                "end": 536
              },
              "start": 529,
              "end": 536
            },
            "directive": null,
            "start": 529,
            "end": 537
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "ra",
                "optional": false,
                "typeAnnotation": null,
                "start": 542,
                "end": 544
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "rt",
                "optional": false,
                "typeAnnotation": null,
                "start": 547,
                "end": 549
              },
              "start": 542,
              "end": 549
            },
            "directive": null,
            "start": 542,
            "end": 550
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "mt",
                "optional": false,
                "typeAnnotation": null,
                "start": 555,
                "end": 557
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ma",
                "optional": false,
                "typeAnnotation": null,
                "start": 560,
                "end": 562
              },
              "start": 555,
              "end": 562
            },
            "directive": null,
            "start": 555,
            "end": 563
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "mt",
                "optional": false,
                "typeAnnotation": null,
                "start": 578,
                "end": 580
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ra",
                "optional": false,
                "typeAnnotation": null,
                "start": 583,
                "end": 585
              },
              "start": 578,
              "end": 585
            },
            "directive": null,
            "start": 578,
            "end": 586
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "mt",
                "optional": false,
                "typeAnnotation": null,
                "start": 601,
                "end": 603
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "rt",
                "optional": false,
                "typeAnnotation": null,
                "start": 606,
                "end": 608
              },
              "start": 601,
              "end": 608
            },
            "directive": null,
            "start": 601,
            "end": 609
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "rt",
                "optional": false,
                "typeAnnotation": null,
                "start": 624,
                "end": 626
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ma",
                "optional": false,
                "typeAnnotation": null,
                "start": 629,
                "end": 631
              },
              "start": 624,
              "end": 631
            },
            "directive": null,
            "start": 624,
            "end": 632
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "rt",
                "optional": false,
                "typeAnnotation": null,
                "start": 647,
                "end": 649
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ra",
                "optional": false,
                "typeAnnotation": null,
                "start": 652,
                "end": 654
              },
              "start": 647,
              "end": 654
            },
            "directive": null,
            "start": 647,
            "end": 655
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "rt",
                "optional": false,
                "typeAnnotation": null,
                "start": 670,
                "end": 672
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "mt",
                "optional": false,
                "typeAnnotation": null,
                "start": 675,
                "end": 677
              },
              "start": 670,
              "end": 677
            },
            "directive": null,
            "start": 670,
            "end": 678
          }
        ],
        "start": 451,
        "end": 680
      },
      "expression": false,
      "start": 349,
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
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 706,
                      "end": 712
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 714,
                      "end": 720
                    },
                    {
                      "type": "TSRestType",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 725,
                          "end": 731
                        },
                        "start": 725,
                        "end": 733
                      },
                      "start": 722,
                      "end": 733
                    }
                  ],
                  "start": 705,
                  "end": 734
                },
                "start": 697,
                "end": 734
              },
              "start": 695,
              "end": 734
            },
            "start": 694,
            "end": 734
          },
          "init": null,
          "definite": false,
          "start": 694,
          "end": 734
        }
      ],
      "declare": true,
      "start": 682,
      "end": 735
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
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 736,
            "end": 737
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 738,
            "end": 739
          },
          "optional": false,
          "computed": true,
          "start": 736,
          "end": 740
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 743,
          "end": 744
        },
        "start": 736,
        "end": 744
      },
      "directive": null,
      "start": 736,
      "end": 745
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
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 762,
            "end": 763
          },
          "property": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 764,
            "end": 765
          },
          "optional": false,
          "computed": true,
          "start": 762,
          "end": 766
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 769,
          "end": 770
        },
        "start": 762,
        "end": 770
      },
      "directive": null,
      "start": 762,
      "end": 771
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
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 788,
            "end": 789
          },
          "property": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 790,
            "end": 791
          },
          "optional": false,
          "computed": true,
          "start": 788,
          "end": 792
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 795,
          "end": 796
        },
        "start": 788,
        "end": 796
      },
      "directive": null,
      "start": 788,
      "end": 797
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 821,
            "end": 822
          },
          "property": {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 823,
            "end": 824
          },
          "optional": false,
          "computed": true,
          "start": 821,
          "end": 825
        },
        "prefix": true,
        "start": 814,
        "end": 825
      },
      "directive": null,
      "start": 814,
      "end": 826
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
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 840,
            "end": 841
          },
          "property": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 842,
              "end": 843
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 846,
              "end": 847
            },
            "start": 842,
            "end": 847
          },
          "optional": false,
          "computed": true,
          "start": 840,
          "end": 848
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 851,
          "end": 852
        },
        "start": 840,
        "end": 852
      },
      "directive": null,
      "start": 840,
      "end": 853
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
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 866,
            "end": 867
          },
          "property": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 868,
              "end": 869
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 872,
              "end": 873
            },
            "start": 868,
            "end": 873
          },
          "optional": false,
          "computed": true,
          "start": 866,
          "end": 874
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 877,
          "end": 878
        },
        "start": 866,
        "end": 878
      },
      "directive": null,
      "start": 866,
      "end": 879
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 899,
            "end": 900
          },
          "property": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 901,
              "end": 902
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 905,
              "end": 906
            },
            "start": 901,
            "end": 906
          },
          "optional": false,
          "computed": true,
          "start": 899,
          "end": 907
        },
        "prefix": true,
        "start": 892,
        "end": 907
      },
      "directive": null,
      "start": 892,
      "end": 908
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 917
}
```
