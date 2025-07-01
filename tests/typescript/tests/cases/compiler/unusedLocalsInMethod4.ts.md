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
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
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
              "start": 11,
              "end": 12
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 11,
            "end": 12
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "NonNull",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 21
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 30,
              "end": 32
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 14,
            "end": 32
          }
        ],
        "start": 10,
        "end": 33
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 50,
                        "end": 56
                      },
                      "start": 50,
                      "end": 58
                    },
                    "start": 48,
                    "end": 58
                  },
                  "start": 46,
                  "end": 58
                },
                "init": null,
                "definite": false,
                "start": 46,
                "end": 58
              }
            ],
            "declare": false,
            "start": 42,
            "end": 59
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
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "start": 88,
                            "end": 94
                          },
                          "start": 88,
                          "end": 96
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 99,
                          "end": 103
                        }
                      ],
                      "start": 88,
                      "end": 103
                    },
                    "start": 86,
                    "end": 103
                  },
                  "start": 84,
                  "end": 103
                },
                "init": null,
                "definite": false,
                "start": 84,
                "end": 103
              }
            ],
            "declare": false,
            "start": 80,
            "end": 104
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
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "start": 133,
                            "end": 139
                          },
                          "start": 133,
                          "end": 141
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 144,
                          "end": 153
                        }
                      ],
                      "start": 133,
                      "end": 153
                    },
                    "start": 131,
                    "end": 153
                  },
                  "start": 129,
                  "end": 153
                },
                "init": null,
                "definite": false,
                "start": 129,
                "end": 153
              }
            ],
            "declare": false,
            "start": 125,
            "end": 154
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
                  "name": "x4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "start": 187,
                            "end": 193
                          },
                          "start": 187,
                          "end": 195
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 198,
                          "end": 207
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 210,
                          "end": 214
                        }
                      ],
                      "start": 187,
                      "end": 214
                    },
                    "start": 185,
                    "end": 214
                  },
                  "start": 183,
                  "end": 214
                },
                "init": null,
                "definite": false,
                "start": 183,
                "end": 214
              }
            ],
            "declare": false,
            "start": 179,
            "end": 215
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
                  "name": "x5",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 249,
                        "end": 255
                      },
                      "start": 249,
                      "end": 257
                    },
                    "start": 247,
                    "end": 257
                  },
                  "start": 244,
                  "end": 257
                },
                "init": null,
                "definite": true,
                "start": 244,
                "end": 257
              }
            ],
            "declare": false,
            "start": 240,
            "end": 258
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
                  "name": "x6",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 291,
                      "end": 294
                    },
                    "start": 289,
                    "end": 294
                  },
                  "start": 287,
                  "end": 294
                },
                "init": null,
                "definite": false,
                "start": 287,
                "end": 294
              }
            ],
            "declare": false,
            "start": 283,
            "end": 295
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
                  "name": "x7",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 328,
                      "end": 335
                    },
                    "start": 326,
                    "end": 335
                  },
                  "start": 324,
                  "end": 335
                },
                "init": null,
                "definite": false,
                "start": 324,
                "end": 335
              }
            ],
            "declare": false,
            "start": 320,
            "end": 336
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
                  "name": "x8",
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
                        "start": 369,
                        "end": 370
                      },
                      "typeArguments": null,
                      "start": 369,
                      "end": 370
                    },
                    "start": 367,
                    "end": 370
                  },
                  "start": 365,
                  "end": 370
                },
                "init": null,
                "definite": false,
                "start": 365,
                "end": 370
              }
            ],
            "declare": false,
            "start": 361,
            "end": 371
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
                  "name": "x9",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NonNull",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 400,
                        "end": 407
                      },
                      "typeArguments": null,
                      "start": 400,
                      "end": 407
                    },
                    "start": 398,
                    "end": 407
                  },
                  "start": 396,
                  "end": 407
                },
                "init": null,
                "definite": false,
                "start": 396,
                "end": 407
              }
            ],
            "declare": false,
            "start": 392,
            "end": 408
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
                  "name": "x10",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NonNull",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 438,
                        "end": 445
                      },
                      "typeArguments": null,
                      "start": 438,
                      "end": 445
                    },
                    "start": 436,
                    "end": 445
                  },
                  "start": 433,
                  "end": 445
                },
                "init": null,
                "definite": false,
                "start": 433,
                "end": 445
              }
            ],
            "declare": false,
            "start": 429,
            "end": 446
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
                  "name": "x11",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NonNull",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 480,
                        "end": 487
                      },
                      "typeArguments": null,
                      "start": 480,
                      "end": 487
                    },
                    "start": 478,
                    "end": 487
                  },
                  "start": 475,
                  "end": 487
                },
                "init": null,
                "definite": false,
                "start": 475,
                "end": 487
              }
            ],
            "declare": false,
            "start": 471,
            "end": 488
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 523,
              "end": 526
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 539,
                        "end": 546
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 547,
                        "end": 550
                      },
                      "optional": false,
                      "computed": false,
                      "start": 539,
                      "end": 550
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 551,
                        "end": 553
                      }
                    ],
                    "optional": false,
                    "start": 539,
                    "end": 554
                  },
                  "directive": null,
                  "start": 539,
                  "end": 555
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 564,
                        "end": 571
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 572,
                        "end": 575
                      },
                      "optional": false,
                      "computed": false,
                      "start": 564,
                      "end": 575
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 576,
                        "end": 578
                      }
                    ],
                    "optional": false,
                    "start": 564,
                    "end": 579
                  },
                  "directive": null,
                  "start": 564,
                  "end": 580
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 589,
                        "end": 596
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 597,
                        "end": 600
                      },
                      "optional": false,
                      "computed": false,
                      "start": 589,
                      "end": 600
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 601,
                        "end": 603
                      }
                    ],
                    "optional": false,
                    "start": 589,
                    "end": 604
                  },
                  "directive": null,
                  "start": 589,
                  "end": 605
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 614,
                        "end": 621
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 622,
                        "end": 625
                      },
                      "optional": false,
                      "computed": false,
                      "start": 614,
                      "end": 625
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 626,
                        "end": 628
                      }
                    ],
                    "optional": false,
                    "start": 614,
                    "end": 629
                  },
                  "directive": null,
                  "start": 614,
                  "end": 630
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 639,
                        "end": 646
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 647,
                        "end": 650
                      },
                      "optional": false,
                      "computed": false,
                      "start": 639,
                      "end": 650
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 651,
                        "end": 653
                      }
                    ],
                    "optional": false,
                    "start": 639,
                    "end": 654
                  },
                  "directive": null,
                  "start": 639,
                  "end": 655
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 664,
                        "end": 671
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 672,
                        "end": 675
                      },
                      "optional": false,
                      "computed": false,
                      "start": 664,
                      "end": 675
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x6",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 676,
                        "end": 678
                      }
                    ],
                    "optional": false,
                    "start": 664,
                    "end": 679
                  },
                  "directive": null,
                  "start": 664,
                  "end": 680
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 689,
                        "end": 696
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 697,
                        "end": 700
                      },
                      "optional": false,
                      "computed": false,
                      "start": 689,
                      "end": 700
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x7",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 701,
                        "end": 703
                      }
                    ],
                    "optional": false,
                    "start": 689,
                    "end": 704
                  },
                  "directive": null,
                  "start": 689,
                  "end": 705
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 714,
                        "end": 721
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 722,
                        "end": 725
                      },
                      "optional": false,
                      "computed": false,
                      "start": 714,
                      "end": 725
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x8",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 726,
                        "end": 728
                      }
                    ],
                    "optional": false,
                    "start": 714,
                    "end": 729
                  },
                  "directive": null,
                  "start": 714,
                  "end": 730
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 739,
                        "end": 746
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 747,
                        "end": 750
                      },
                      "optional": false,
                      "computed": false,
                      "start": 739,
                      "end": 750
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x9",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 751,
                        "end": 753
                      }
                    ],
                    "optional": false,
                    "start": 739,
                    "end": 754
                  },
                  "directive": null,
                  "start": 739,
                  "end": 755
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 764,
                        "end": 771
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 772,
                        "end": 775
                      },
                      "optional": false,
                      "computed": false,
                      "start": 764,
                      "end": 775
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x10",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 776,
                        "end": 779
                      }
                    ],
                    "optional": false,
                    "start": 764,
                    "end": 780
                  },
                  "directive": null,
                  "start": 764,
                  "end": 781
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 790,
                        "end": 797
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 798,
                        "end": 801
                      },
                      "optional": false,
                      "computed": false,
                      "start": 790,
                      "end": 801
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x11",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 802,
                        "end": 805
                      }
                    ],
                    "optional": false,
                    "start": 790,
                    "end": 806
                  },
                  "directive": null,
                  "start": 790,
                  "end": 807
                }
              ],
              "start": 529,
              "end": 813
            },
            "expression": false,
            "start": 514,
            "end": 813
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 827,
              "end": 830
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
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
                      "name": "x11",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 843,
                      "end": 846
                    },
                    "right": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 849,
                        "end": 851
                      },
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 855,
                        "end": 858
                      },
                      "start": 849,
                      "end": 858
                    },
                    "start": 843,
                    "end": 858
                  },
                  "directive": null,
                  "start": 843,
                  "end": 859
                }
              ],
              "start": 833,
              "end": 865
            },
            "expression": false,
            "start": 818,
            "end": 865
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
                "start": 870,
                "end": 873
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 870,
              "end": 875
            },
            "directive": null,
            "start": 870,
            "end": 876
          }
        ],
        "start": 36,
        "end": 878
      },
      "expression": false,
      "start": 0,
      "end": 878
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 889,
        "end": 891
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
              "start": 892,
              "end": 893
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 892,
            "end": 893
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "NonNull",
              "optional": false,
              "typeAnnotation": null,
              "start": 895,
              "end": 902
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 911,
              "end": 913
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 895,
            "end": 913
          }
        ],
        "start": 891,
        "end": 914
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 931,
                        "end": 937
                      },
                      "start": 931,
                      "end": 939
                    },
                    "start": 929,
                    "end": 939
                  },
                  "start": 927,
                  "end": 939
                },
                "init": null,
                "definite": false,
                "start": 927,
                "end": 939
              }
            ],
            "declare": false,
            "start": 923,
            "end": 940
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
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "start": 969,
                            "end": 975
                          },
                          "start": 969,
                          "end": 977
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 980,
                          "end": 984
                        }
                      ],
                      "start": 969,
                      "end": 984
                    },
                    "start": 967,
                    "end": 984
                  },
                  "start": 965,
                  "end": 984
                },
                "init": null,
                "definite": false,
                "start": 965,
                "end": 984
              }
            ],
            "declare": false,
            "start": 961,
            "end": 985
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
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "start": 1014,
                            "end": 1020
                          },
                          "start": 1014,
                          "end": 1022
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 1025,
                          "end": 1034
                        }
                      ],
                      "start": 1014,
                      "end": 1034
                    },
                    "start": 1012,
                    "end": 1034
                  },
                  "start": 1010,
                  "end": 1034
                },
                "init": null,
                "definite": false,
                "start": 1010,
                "end": 1034
              }
            ],
            "declare": false,
            "start": 1006,
            "end": 1035
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
                  "name": "x4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "start": 1068,
                            "end": 1074
                          },
                          "start": 1068,
                          "end": 1076
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 1079,
                          "end": 1088
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 1091,
                          "end": 1095
                        }
                      ],
                      "start": 1068,
                      "end": 1095
                    },
                    "start": 1066,
                    "end": 1095
                  },
                  "start": 1064,
                  "end": 1095
                },
                "init": null,
                "definite": false,
                "start": 1064,
                "end": 1095
              }
            ],
            "declare": false,
            "start": 1060,
            "end": 1096
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
                  "name": "x5",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 1130,
                        "end": 1136
                      },
                      "start": 1130,
                      "end": 1138
                    },
                    "start": 1128,
                    "end": 1138
                  },
                  "start": 1125,
                  "end": 1138
                },
                "init": null,
                "definite": true,
                "start": 1125,
                "end": 1138
              }
            ],
            "declare": false,
            "start": 1121,
            "end": 1139
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
                  "name": "x6",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1172,
                      "end": 1175
                    },
                    "start": 1170,
                    "end": 1175
                  },
                  "start": 1168,
                  "end": 1175
                },
                "init": null,
                "definite": false,
                "start": 1168,
                "end": 1175
              }
            ],
            "declare": false,
            "start": 1164,
            "end": 1176
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
                  "name": "x7",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 1209,
                      "end": 1216
                    },
                    "start": 1207,
                    "end": 1216
                  },
                  "start": 1205,
                  "end": 1216
                },
                "init": null,
                "definite": false,
                "start": 1205,
                "end": 1216
              }
            ],
            "declare": false,
            "start": 1201,
            "end": 1217
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
                  "name": "x8",
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
                        "start": 1250,
                        "end": 1251
                      },
                      "typeArguments": null,
                      "start": 1250,
                      "end": 1251
                    },
                    "start": 1248,
                    "end": 1251
                  },
                  "start": 1246,
                  "end": 1251
                },
                "init": null,
                "definite": false,
                "start": 1246,
                "end": 1251
              }
            ],
            "declare": false,
            "start": 1242,
            "end": 1252
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
                  "name": "x9",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NonNull",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1281,
                        "end": 1288
                      },
                      "typeArguments": null,
                      "start": 1281,
                      "end": 1288
                    },
                    "start": 1279,
                    "end": 1288
                  },
                  "start": 1277,
                  "end": 1288
                },
                "init": null,
                "definite": false,
                "start": 1277,
                "end": 1288
              }
            ],
            "declare": false,
            "start": 1273,
            "end": 1289
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1311,
                  "end": 1318
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1319,
                  "end": 1322
                },
                "optional": false,
                "computed": false,
                "start": 1311,
                "end": 1322
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1323,
                  "end": 1325
                }
              ],
              "optional": false,
              "start": 1311,
              "end": 1326
            },
            "directive": null,
            "start": 1311,
            "end": 1327
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1332,
                  "end": 1339
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1340,
                  "end": 1343
                },
                "optional": false,
                "computed": false,
                "start": 1332,
                "end": 1343
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1344,
                  "end": 1346
                }
              ],
              "optional": false,
              "start": 1332,
              "end": 1347
            },
            "directive": null,
            "start": 1332,
            "end": 1348
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1353,
                  "end": 1360
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1361,
                  "end": 1364
                },
                "optional": false,
                "computed": false,
                "start": 1353,
                "end": 1364
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1365,
                  "end": 1367
                }
              ],
              "optional": false,
              "start": 1353,
              "end": 1368
            },
            "directive": null,
            "start": 1353,
            "end": 1369
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1374,
                  "end": 1381
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1382,
                  "end": 1385
                },
                "optional": false,
                "computed": false,
                "start": 1374,
                "end": 1385
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1386,
                  "end": 1388
                }
              ],
              "optional": false,
              "start": 1374,
              "end": 1389
            },
            "directive": null,
            "start": 1374,
            "end": 1390
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1395,
                  "end": 1402
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1403,
                  "end": 1406
                },
                "optional": false,
                "computed": false,
                "start": 1395,
                "end": 1406
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1407,
                  "end": 1409
                }
              ],
              "optional": false,
              "start": 1395,
              "end": 1410
            },
            "directive": null,
            "start": 1395,
            "end": 1411
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1416,
                  "end": 1423
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1424,
                  "end": 1427
                },
                "optional": false,
                "computed": false,
                "start": 1416,
                "end": 1427
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1428,
                  "end": 1430
                }
              ],
              "optional": false,
              "start": 1416,
              "end": 1431
            },
            "directive": null,
            "start": 1416,
            "end": 1432
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1437,
                  "end": 1444
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1445,
                  "end": 1448
                },
                "optional": false,
                "computed": false,
                "start": 1437,
                "end": 1448
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1449,
                  "end": 1451
                }
              ],
              "optional": false,
              "start": 1437,
              "end": 1452
            },
            "directive": null,
            "start": 1437,
            "end": 1453
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1458,
                  "end": 1465
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1466,
                  "end": 1469
                },
                "optional": false,
                "computed": false,
                "start": 1458,
                "end": 1469
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1470,
                  "end": 1472
                }
              ],
              "optional": false,
              "start": 1458,
              "end": 1473
            },
            "directive": null,
            "start": 1458,
            "end": 1474
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1479,
                  "end": 1486
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1487,
                  "end": 1490
                },
                "optional": false,
                "computed": false,
                "start": 1479,
                "end": 1490
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1491,
                  "end": 1493
                }
              ],
              "optional": false,
              "start": 1479,
              "end": 1494
            },
            "directive": null,
            "start": 1479,
            "end": 1495
          }
        ],
        "start": 917,
        "end": 1497
      },
      "expression": false,
      "start": 880,
      "end": 1497
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1508,
        "end": 1510
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 1526,
                        "end": 1532
                      },
                      "start": 1526,
                      "end": 1534
                    },
                    "start": 1524,
                    "end": 1534
                  },
                  "start": 1523,
                  "end": 1534
                },
                "init": null,
                "definite": false,
                "start": 1523,
                "end": 1534
              }
            ],
            "declare": false,
            "start": 1519,
            "end": 1535
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1568,
              "end": 1571
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1584,
                        "end": 1585
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1586,
                        "end": 1594
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1584,
                      "end": 1594
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1584,
                    "end": 1596
                  },
                  "directive": null,
                  "start": 1584,
                  "end": 1597
                }
              ],
              "start": 1574,
              "end": 1603
            },
            "expression": false,
            "start": 1559,
            "end": 1603
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
                "start": 1608,
                "end": 1611
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1608,
              "end": 1613
            },
            "directive": null,
            "start": 1608,
            "end": 1614
          }
        ],
        "start": 1513,
        "end": 1616
      },
      "expression": false,
      "start": 1499,
      "end": 1616
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1627,
        "end": 1629
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                      "type": "TSNumberKeyword",
                      "start": 1645,
                      "end": 1651
                    },
                    "start": 1643,
                    "end": 1651
                  },
                  "start": 1642,
                  "end": 1651
                },
                "init": null,
                "definite": false,
                "start": 1642,
                "end": 1651
              }
            ],
            "declare": false,
            "start": 1638,
            "end": 1652
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1691,
                    "end": 1694
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1718,
                                "end": 1719
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "toString",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1720,
                                "end": 1728
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1718,
                              "end": 1728
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1718,
                            "end": 1730
                          },
                          "start": 1711,
                          "end": 1731
                        }
                      ],
                      "start": 1697,
                      "end": 1741
                    },
                    "expression": false,
                    "start": 1694,
                    "end": 1741
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1691,
                  "end": 1741
                }
              ],
              "start": 1681,
              "end": 1747
            },
            "start": 1674,
            "end": 1748
          }
        ],
        "start": 1632,
        "end": 1750
      },
      "expression": false,
      "start": 1618,
      "end": 1750
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
                "type": "TSNumberKeyword",
                "start": 1767,
                "end": 1773
              },
              "start": 1765,
              "end": 1773
            },
            "start": 1764,
            "end": 1773
          },
          "init": null,
          "definite": false,
          "start": 1764,
          "end": 1773
        }
      ],
      "declare": true,
      "start": 1752,
      "end": 1774
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1805,
        "end": 1807
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1816,
                  "end": 1817
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1818,
                  "end": 1826
                },
                "optional": false,
                "computed": false,
                "start": 1816,
                "end": 1826
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1816,
              "end": 1828
            },
            "directive": null,
            "start": 1816,
            "end": 1829
          }
        ],
        "start": 1810,
        "end": 1831
      },
      "expression": false,
      "start": 1796,
      "end": 1831
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 1847,
        "end": 1849
      },
      "exportKind": "value",
      "start": 1832,
      "end": 1850
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1861,
        "end": 1863
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1881,
                      "end": 1887
                    },
                    "start": 1879,
                    "end": 1887
                  },
                  "start": 1876,
                  "end": 1887
                },
                "init": null,
                "definite": false,
                "start": 1876,
                "end": 1887
              }
            ],
            "declare": false,
            "start": 1872,
            "end": 1888
          },
          {
            "type": "ForInStatement",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "key",
              "optional": false,
              "typeAnnotation": null,
              "start": 1921,
              "end": 1924
            },
            "right": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 1928,
              "end": 1930
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1942,
                        "end": 1949
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1950,
                        "end": 1953
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1942,
                      "end": 1953
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1954,
                        "end": 1957
                      }
                    ],
                    "optional": false,
                    "start": 1942,
                    "end": 1958
                  },
                  "directive": null,
                  "start": 1942,
                  "end": 1959
                }
              ],
              "start": 1932,
              "end": 1965
            },
            "start": 1916,
            "end": 1965
          }
        ],
        "start": 1866,
        "end": 1967
      },
      "expression": false,
      "start": 1852,
      "end": 1967
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1978,
        "end": 1980
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1998,
                      "end": 2004
                    },
                    "start": 1996,
                    "end": 2004
                  },
                  "start": 1993,
                  "end": 2004
                },
                "init": null,
                "definite": false,
                "start": 1993,
                "end": 2004
              }
            ],
            "declare": false,
            "start": 1989,
            "end": 2005
          },
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "key",
              "optional": false,
              "typeAnnotation": null,
              "start": 2038,
              "end": 2041
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 2045,
              "end": 2047
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2059,
                        "end": 2066
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2067,
                        "end": 2070
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2059,
                      "end": 2070
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2071,
                        "end": 2074
                      }
                    ],
                    "optional": false,
                    "start": 2059,
                    "end": 2075
                  },
                  "directive": null,
                  "start": 2059,
                  "end": 2076
                }
              ],
              "start": 2049,
              "end": 2082
            },
            "start": 2033,
            "end": 2082
          }
        ],
        "start": 1983,
        "end": 2084
      },
      "expression": false,
      "start": 1969,
      "end": 2084
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f8",
        "optional": false,
        "typeAnnotation": null,
        "start": 2095,
        "end": 2097
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ff",
              "optional": false,
              "typeAnnotation": null,
              "start": 2115,
              "end": 2117
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2134,
                        "end": 2135
                      },
                      "init": null,
                      "definite": false,
                      "start": 2134,
                      "end": 2135
                    }
                  ],
                  "declare": false,
                  "start": 2130,
                  "end": 2136
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
                        "name": "rest",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [],
                            "start": 2155,
                            "end": 2157
                          },
                          "start": 2153,
                          "end": 2157
                        },
                        "start": 2149,
                        "end": 2157
                      },
                      "init": null,
                      "definite": false,
                      "start": 2149,
                      "end": 2157
                    }
                  ],
                  "declare": false,
                  "start": 2145,
                  "end": 2158
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "ArrayPattern",
                      "decorators": [],
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2189,
                          "end": 2190
                        },
                        {
                          "type": "RestElement",
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "rest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2195,
                            "end": 2199
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "value": null,
                          "start": 2192,
                          "end": 2199
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2188,
                      "end": 2200
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2203,
                        "end": 2206
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 2203,
                      "end": 2208
                    },
                    "start": 2188,
                    "end": 2208
                  },
                  "directive": null,
                  "start": 2188,
                  "end": 2209
                }
              ],
              "start": 2120,
              "end": 2215
            },
            "expression": false,
            "start": 2106,
            "end": 2215
          }
        ],
        "start": 2100,
        "end": 2217
      },
      "expression": false,
      "start": 2086,
      "end": 2217
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 2235,
        "end": 2238
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNumberKeyword",
              "start": 2243,
              "end": 2249
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 2254,
                  "end": 2260
                },
                "start": 2254,
                "end": 2262
              },
              "start": 2251,
              "end": 2262
            }
          ],
          "start": 2242,
          "end": 2263
        },
        "start": 2240,
        "end": 2263
      },
      "body": null,
      "expression": false,
      "start": 2218,
      "end": 2264
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f9",
        "optional": false,
        "typeAnnotation": null,
        "start": 2275,
        "end": 2277
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2297,
                      "end": 2303
                    },
                    "start": 2295,
                    "end": 2303
                  },
                  "start": 2294,
                  "end": 2303
                },
                "init": null,
                "definite": false,
                "start": 2294,
                "end": 2303
              }
            ],
            "declare": false,
            "start": 2288,
            "end": 2304
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 2348,
              "end": 2351
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2370,
                        "end": 2371
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2374,
                        "end": 2375
                      },
                      "definite": false,
                      "start": 2370,
                      "end": 2375
                    }
                  ],
                  "declare": false,
                  "start": 2366,
                  "end": 2376
                }
              ],
              "start": 2354,
              "end": 2384
            },
            "expression": false,
            "start": 2339,
            "end": 2384
          }
        ],
        "start": 2280,
        "end": 2388
      },
      "expression": false,
      "start": 2266,
      "end": 2388
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "rw",
        "optional": false,
        "typeAnnotation": null,
        "start": 2402,
        "end": 2404
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2420,
                      "end": 2426
                    },
                    "start": 2418,
                    "end": 2426
                  },
                  "start": 2417,
                  "end": 2426
                },
                "init": null,
                "definite": false,
                "start": 2417,
                "end": 2426
              }
            ],
            "declare": false,
            "start": 2413,
            "end": 2427
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "inside",
              "optional": false,
              "typeAnnotation": null,
              "start": 2458,
              "end": 2464
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UpdateExpression",
                    "operator": "++",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2477,
                      "end": 2478
                    },
                    "start": 2477,
                    "end": 2480
                  },
                  "directive": null,
                  "start": 2477,
                  "end": 2481
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2490,
                        "end": 2497
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2498,
                        "end": 2501
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2490,
                      "end": 2501
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2502,
                        "end": 2503
                      }
                    ],
                    "optional": false,
                    "start": 2490,
                    "end": 2504
                  },
                  "directive": null,
                  "start": 2490,
                  "end": 2505
                }
              ],
              "start": 2467,
              "end": 2518
            },
            "expression": false,
            "start": 2449,
            "end": 2518
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "inside",
                "optional": false,
                "typeAnnotation": null,
                "start": 2523,
                "end": 2529
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2523,
              "end": 2531
            },
            "directive": null,
            "start": 2523,
            "end": 2532
          }
        ],
        "start": 2407,
        "end": 2534
      },
      "expression": false,
      "start": 2393,
      "end": 2534
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "rw",
          "optional": false,
          "typeAnnotation": null,
          "start": 2535,
          "end": 2537
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2535,
        "end": 2539
      },
      "directive": null,
      "start": 2535,
      "end": 2540
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createBinder",
        "optional": false,
        "typeAnnotation": null,
        "start": 2551,
        "end": 2563
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
                  "name": "file",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2582,
                      "end": 2588
                    },
                    "start": 2580,
                    "end": 2588
                  },
                  "start": 2576,
                  "end": 2588
                },
                "init": null,
                "definite": false,
                "start": 2576,
                "end": 2588
              }
            ],
            "declare": false,
            "start": 2572,
            "end": 2589
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bindSourceFile",
              "optional": false,
              "typeAnnotation": null,
              "start": 2626,
              "end": 2640
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2644,
                    "end": 2650
                  },
                  "start": 2642,
                  "end": 2650
                },
                "start": 2641,
                "end": 2650
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
                      "name": "file",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2662,
                      "end": 2666
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2669,
                      "end": 2670
                    },
                    "start": 2662,
                    "end": 2670
                  },
                  "directive": null,
                  "start": 2662,
                  "end": 2671
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "file",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2681,
                        "end": 2685
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2686,
                        "end": 2694
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2681,
                      "end": 2694
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 2681,
                    "end": 2696
                  },
                  "directive": null,
                  "start": 2681,
                  "end": 2697
                }
              ],
              "start": 2652,
              "end": 2703
            },
            "expression": false,
            "start": 2617,
            "end": 2703
          }
        ],
        "start": 2566,
        "end": 2705
      },
      "expression": false,
      "start": 2542,
      "end": 2705
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "transformClassFields",
        "optional": false,
        "typeAnnotation": null,
        "start": 2716,
        "end": 2736
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ClassPropertySubstitutionFlags",
              "optional": false,
              "typeAnnotation": null,
              "start": 2750,
              "end": 2780
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ClassAliases",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2791,
                    "end": 2803
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2806,
                      "end": 2807
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 2811,
                      "end": 2812
                    },
                    "start": 2806,
                    "end": 2812
                  },
                  "computed": false,
                  "start": 2791,
                  "end": 2812
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ClassStaticThisOrSuperReference",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2822,
                    "end": 2853
                  },
                  "initializer": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2856,
                      "end": 2857
                    },
                    "operator": "<<",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2861,
                      "end": 2862
                    },
                    "start": 2856,
                    "end": 2862
                  },
                  "computed": false,
                  "start": 2822,
                  "end": 2862
                }
              ],
              "start": 2781,
              "end": 2869
            },
            "const": false,
            "declare": false,
            "start": 2745,
            "end": 2869
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
                  "name": "enabledSubstitutions",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ClassPropertySubstitutionFlags",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2901,
                        "end": 2931
                      },
                      "typeArguments": null,
                      "start": 2901,
                      "end": 2931
                    },
                    "start": 2899,
                    "end": 2931
                  },
                  "start": 2879,
                  "end": 2931
                },
                "init": null,
                "definite": false,
                "start": 2879,
                "end": 2931
              }
            ],
            "declare": false,
            "start": 2875,
            "end": 2932
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "enableSubstitutionForClassAliases",
              "optional": false,
              "typeAnnotation": null,
              "start": 2965,
              "end": 2998
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "|=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "enabledSubstitutions",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3011,
                      "end": 3031
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ClassPropertySubstitutionFlags",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3035,
                        "end": 3065
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ClassAliases",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3066,
                        "end": 3078
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3035,
                      "end": 3078
                    },
                    "start": 3011,
                    "end": 3078
                  },
                  "directive": null,
                  "start": 3011,
                  "end": 3079
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "enabledSubstitutions",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3089,
                        "end": 3109
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3110,
                        "end": 3118
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3089,
                      "end": 3118
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 3089,
                    "end": 3120
                  },
                  "directive": null,
                  "start": 3089,
                  "end": 3121
                }
              ],
              "start": 3001,
              "end": 3127
            },
            "expression": false,
            "start": 2956,
            "end": 3127
          }
        ],
        "start": 2739,
        "end": 3129
      },
      "expression": false,
      "start": 2707,
      "end": 3129
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 3129
}
```
