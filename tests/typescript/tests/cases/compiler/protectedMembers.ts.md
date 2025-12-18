__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 38,
        "end": 40
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 58
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 60,
                "end": 66
              },
              "start": 58,
              "end": 66
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 47,
            "end": 67
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sx",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 91
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 93,
                "end": 99
              },
              "start": 91,
              "end": 99
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 72,
            "end": 100
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 115,
              "end": 116
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 136,
                        "end": 140
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 141,
                        "end": 142
                      },
                      "optional": false,
                      "computed": false,
                      "start": 136,
                      "end": 142
                    },
                    "start": 129,
                    "end": 143
                  }
                ],
                "start": 119,
                "end": 149
              },
              "expression": false,
              "start": 116,
              "end": 149
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 105,
            "end": 149
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sf",
              "optional": false,
              "typeAnnotation": null,
              "start": 171,
              "end": 173
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 193,
                        "end": 197
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "sx",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 198,
                        "end": 200
                      },
                      "optional": false,
                      "computed": false,
                      "start": 193,
                      "end": 200
                    },
                    "start": 186,
                    "end": 201
                  }
                ],
                "start": 176,
                "end": 207
              },
              "expression": false,
              "start": 173,
              "end": 207
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 154,
            "end": 207
          }
        ],
        "start": 41,
        "end": 209
      },
      "abstract": false,
      "declare": false,
      "start": 32,
      "end": 209
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 262,
        "end": 264
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 273,
        "end": 275
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 292,
              "end": 293
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 313,
                            "end": 318
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "f",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 319,
                            "end": 320
                          },
                          "optional": false,
                          "computed": false,
                          "start": 313,
                          "end": 320
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 313,
                        "end": 322
                      },
                      "operator": "+",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 325,
                          "end": 329
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 330,
                          "end": 331
                        },
                        "optional": false,
                        "computed": false,
                        "start": 325,
                        "end": 331
                      },
                      "start": 313,
                      "end": 331
                    },
                    "start": 306,
                    "end": 332
                  }
                ],
                "start": 296,
                "end": 338
              },
              "expression": false,
              "start": 293,
              "end": 338
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 282,
            "end": 338
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sf",
              "optional": false,
              "typeAnnotation": null,
              "start": 360,
              "end": 362
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 382,
                            "end": 387
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "sf",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 388,
                            "end": 390
                          },
                          "optional": false,
                          "computed": false,
                          "start": 382,
                          "end": 390
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 382,
                        "end": 392
                      },
                      "operator": "+",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 395,
                          "end": 399
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "sx",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 400,
                          "end": 402
                        },
                        "optional": false,
                        "computed": false,
                        "start": 395,
                        "end": 402
                      },
                      "start": 382,
                      "end": 402
                    },
                    "start": 375,
                    "end": 403
                  }
                ],
                "start": 365,
                "end": 409
              },
              "expression": false,
              "start": 362,
              "end": 409
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 343,
            "end": 409
          }
        ],
        "start": 276,
        "end": 411
      },
      "abstract": false,
      "declare": false,
      "start": 256,
      "end": 411
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 468,
        "end": 470
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 479,
        "end": 481
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 488,
              "end": 489
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 491,
                "end": 497
              },
              "start": 489,
              "end": 497
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 488,
            "end": 498
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sx",
              "optional": false,
              "typeAnnotation": null,
              "start": 510,
              "end": 512
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 514,
                "end": 520
              },
              "start": 512,
              "end": 520
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 503,
            "end": 521
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 526,
              "end": 527
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
                          "type": "Super",
                          "start": 547,
                          "end": 552
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 553,
                          "end": 554
                        },
                        "optional": false,
                        "computed": false,
                        "start": 547,
                        "end": 554
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 547,
                      "end": 556
                    },
                    "start": 540,
                    "end": 557
                  }
                ],
                "start": 530,
                "end": 563
              },
              "expression": false,
              "start": 527,
              "end": 563
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 526,
            "end": 563
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sf",
              "optional": false,
              "typeAnnotation": null,
              "start": 575,
              "end": 577
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
                          "type": "Super",
                          "start": 597,
                          "end": 602
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "sf",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 603,
                          "end": 605
                        },
                        "optional": false,
                        "computed": false,
                        "start": 597,
                        "end": 605
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 597,
                      "end": 607
                    },
                    "start": 590,
                    "end": 608
                  }
                ],
                "start": 580,
                "end": 614
              },
              "expression": false,
              "start": 577,
              "end": 614
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 568,
            "end": 614
          }
        ],
        "start": 482,
        "end": 616
      },
      "abstract": false,
      "declare": false,
      "start": 462,
      "end": 616
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
            "name": "c1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 626,
                  "end": 628
                },
                "typeArguments": null,
                "start": 626,
                "end": 628
              },
              "start": 624,
              "end": 628
            },
            "start": 622,
            "end": 628
          },
          "init": null,
          "definite": false,
          "start": 622,
          "end": 628
        }
      ],
      "declare": false,
      "start": 618,
      "end": 629
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
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 638,
                  "end": 640
                },
                "typeArguments": null,
                "start": 638,
                "end": 640
              },
              "start": 636,
              "end": 640
            },
            "start": 634,
            "end": 640
          },
          "init": null,
          "definite": false,
          "start": 634,
          "end": 640
        }
      ],
      "declare": false,
      "start": 630,
      "end": 641
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
            "name": "c3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 650,
                  "end": 652
                },
                "typeArguments": null,
                "start": 650,
                "end": 652
              },
              "start": 648,
              "end": 652
            },
            "start": 646,
            "end": 652
          },
          "init": null,
          "definite": false,
          "start": 646,
          "end": 652
        }
      ],
      "declare": false,
      "start": 642,
      "end": 653
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "c1",
          "optional": false,
          "typeAnnotation": null,
          "start": 688,
          "end": 690
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 691,
          "end": 692
        },
        "optional": false,
        "computed": false,
        "start": 688,
        "end": 692
      },
      "directive": null,
      "start": 688,
      "end": 693
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
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 694,
            "end": 696
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 697,
            "end": 698
          },
          "optional": false,
          "computed": false,
          "start": 694,
          "end": 698
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 694,
        "end": 700
      },
      "directive": null,
      "start": 694,
      "end": 701
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null,
          "start": 702,
          "end": 704
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "sx",
          "optional": false,
          "typeAnnotation": null,
          "start": 705,
          "end": 707
        },
        "optional": false,
        "computed": false,
        "start": 702,
        "end": 707
      },
      "directive": null,
      "start": 702,
      "end": 708
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
            "name": "C1",
            "optional": false,
            "typeAnnotation": null,
            "start": 709,
            "end": 711
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "sf",
            "optional": false,
            "typeAnnotation": null,
            "start": 712,
            "end": 714
          },
          "optional": false,
          "computed": false,
          "start": 709,
          "end": 714
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 709,
        "end": 716
      },
      "directive": null,
      "start": 709,
      "end": 717
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "c2",
          "optional": false,
          "typeAnnotation": null,
          "start": 752,
          "end": 754
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 755,
          "end": 756
        },
        "optional": false,
        "computed": false,
        "start": 752,
        "end": 756
      },
      "directive": null,
      "start": 752,
      "end": 757
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
            "name": "c2",
            "optional": false,
            "typeAnnotation": null,
            "start": 758,
            "end": 760
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 761,
            "end": 762
          },
          "optional": false,
          "computed": false,
          "start": 758,
          "end": 762
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 758,
        "end": 764
      },
      "directive": null,
      "start": 758,
      "end": 765
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "C2",
          "optional": false,
          "typeAnnotation": null,
          "start": 766,
          "end": 768
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "sx",
          "optional": false,
          "typeAnnotation": null,
          "start": 769,
          "end": 771
        },
        "optional": false,
        "computed": false,
        "start": 766,
        "end": 771
      },
      "directive": null,
      "start": 766,
      "end": 772
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
            "name": "C2",
            "optional": false,
            "typeAnnotation": null,
            "start": 773,
            "end": 775
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "sf",
            "optional": false,
            "typeAnnotation": null,
            "start": 776,
            "end": 778
          },
          "optional": false,
          "computed": false,
          "start": 773,
          "end": 778
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 773,
        "end": 780
      },
      "directive": null,
      "start": 773,
      "end": 781
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "c3",
          "optional": false,
          "typeAnnotation": null,
          "start": 812,
          "end": 814
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 815,
          "end": 816
        },
        "optional": false,
        "computed": false,
        "start": 812,
        "end": 816
      },
      "directive": null,
      "start": 812,
      "end": 817
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
            "name": "c3",
            "optional": false,
            "typeAnnotation": null,
            "start": 818,
            "end": 820
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 821,
            "end": 822
          },
          "optional": false,
          "computed": false,
          "start": 818,
          "end": 822
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 818,
        "end": 824
      },
      "directive": null,
      "start": 818,
      "end": 825
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "C3",
          "optional": false,
          "typeAnnotation": null,
          "start": 826,
          "end": 828
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "sx",
          "optional": false,
          "typeAnnotation": null,
          "start": 829,
          "end": 831
        },
        "optional": false,
        "computed": false,
        "start": 826,
        "end": 831
      },
      "directive": null,
      "start": 826,
      "end": 832
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
            "name": "C3",
            "optional": false,
            "typeAnnotation": null,
            "start": 833,
            "end": 835
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "sf",
            "optional": false,
            "typeAnnotation": null,
            "start": 836,
            "end": 838
          },
          "optional": false,
          "computed": false,
          "start": 833,
          "end": 838
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 833,
        "end": 840
      },
      "directive": null,
      "start": 833,
      "end": 841
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 849,
        "end": 850
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 867,
              "end": 868
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 857,
            "end": 869
          }
        ],
        "start": 851,
        "end": 871
      },
      "abstract": false,
      "declare": false,
      "start": 843,
      "end": 871
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 879,
        "end": 880
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 889,
        "end": 890
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 897,
              "end": 898
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 897,
            "end": 899
          }
        ],
        "start": 891,
        "end": 901
      },
      "abstract": false,
      "declare": false,
      "start": 873,
      "end": 901
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 909,
        "end": 910
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 919,
        "end": 920
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 927,
              "end": 928
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 927,
            "end": 929
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 941,
              "end": 944
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 948,
                        "end": 949
                      },
                      "typeArguments": null,
                      "start": 948,
                      "end": 949
                    },
                    "start": 946,
                    "end": 949
                  },
                  "start": 945,
                  "end": 949
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 954,
                        "end": 955
                      },
                      "typeArguments": null,
                      "start": 954,
                      "end": 955
                    },
                    "start": 952,
                    "end": 955
                  },
                  "start": 951,
                  "end": 955
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 960,
                        "end": 961
                      },
                      "typeArguments": null,
                      "start": 960,
                      "end": 961
                    },
                    "start": 958,
                    "end": 961
                  },
                  "start": 957,
                  "end": 961
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 966,
                        "end": 967
                      },
                      "typeArguments": null,
                      "start": 966,
                      "end": 967
                    },
                    "start": 964,
                    "end": 967
                  },
                  "start": 963,
                  "end": 967
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 972,
                        "end": 973
                      },
                      "typeArguments": null,
                      "start": 972,
                      "end": 973
                    },
                    "start": 970,
                    "end": 973
                  },
                  "start": 969,
                  "end": 973
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 985,
                          "end": 986
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 987,
                          "end": 988
                        },
                        "optional": false,
                        "computed": false,
                        "start": 985,
                        "end": 988
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 991,
                        "end": 992
                      },
                      "start": 985,
                      "end": 992
                    },
                    "directive": null,
                    "start": 985,
                    "end": 993
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1061,
                          "end": 1062
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1063,
                          "end": 1064
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1061,
                        "end": 1064
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1067,
                        "end": 1068
                      },
                      "start": 1061,
                      "end": 1068
                    },
                    "directive": null,
                    "start": 1061,
                    "end": 1069
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
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1137,
                          "end": 1138
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1139,
                          "end": 1140
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1137,
                        "end": 1140
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1143,
                        "end": 1144
                      },
                      "start": 1137,
                      "end": 1144
                    },
                    "directive": null,
                    "start": 1137,
                    "end": 1145
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
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1154,
                          "end": 1155
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1156,
                          "end": 1157
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1154,
                        "end": 1157
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1160,
                        "end": 1161
                      },
                      "start": 1154,
                      "end": 1161
                    },
                    "directive": null,
                    "start": 1154,
                    "end": 1162
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
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1171,
                          "end": 1172
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1173,
                          "end": 1174
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1171,
                        "end": 1174
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1177,
                        "end": 1178
                      },
                      "start": 1171,
                      "end": 1178
                    },
                    "directive": null,
                    "start": 1171,
                    "end": 1179
                  }
                ],
                "start": 975,
                "end": 1185
              },
              "expression": false,
              "start": 944,
              "end": 1185
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 934,
            "end": 1185
          }
        ],
        "start": 921,
        "end": 1187
      },
      "abstract": false,
      "declare": false,
      "start": 903,
      "end": 1187
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 1195,
        "end": 1196
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 1205,
        "end": 1206
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 1213,
              "end": 1214
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1213,
            "end": 1215
          }
        ],
        "start": 1207,
        "end": 1217
      },
      "abstract": false,
      "declare": false,
      "start": 1189,
      "end": 1217
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 1229,
        "end": 1230
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 1239,
            "end": 1240
          },
          "typeArguments": null,
          "start": 1239,
          "end": 1240
        }
      ],
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
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 1247,
              "end": 1248
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false,
            "start": 1247,
            "end": 1249
          }
        ],
        "start": 1241,
        "end": 1251
      },
      "declare": false,
      "start": 1219,
      "end": 1251
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CC",
        "optional": false,
        "typeAnnotation": null,
        "start": 1259,
        "end": 1261
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1278,
              "end": 1289
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
                "body": [],
                "start": 1292,
                "end": 1299
              },
              "expression": false,
              "start": 1289,
              "end": 1299
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 1268,
            "end": 1299
          }
        ],
        "start": 1262,
        "end": 1301
      },
      "abstract": false,
      "declare": false,
      "start": 1253,
      "end": 1301
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1309,
        "end": 1311
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1328,
              "end": 1329
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 1318,
            "end": 1330
          }
        ],
        "start": 1312,
        "end": 1332
      },
      "abstract": false,
      "declare": false,
      "start": 1303,
      "end": 1332
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1339,
        "end": 1341
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1348,
              "end": 1349
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1348,
            "end": 1350
          }
        ],
        "start": 1342,
        "end": 1352
      },
      "abstract": false,
      "declare": false,
      "start": 1333,
      "end": 1352
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1361,
                  "end": 1363
                },
                "typeArguments": null,
                "start": 1361,
                "end": 1363
              },
              "start": 1359,
              "end": 1363
            },
            "start": 1357,
            "end": 1363
          },
          "init": null,
          "definite": false,
          "start": 1357,
          "end": 1363
        }
      ],
      "declare": false,
      "start": 1353,
      "end": 1364
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
                  "name": "B1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1373,
                  "end": 1375
                },
                "typeArguments": null,
                "start": 1373,
                "end": 1375
              },
              "start": 1371,
              "end": 1375
            },
            "start": 1369,
            "end": 1375
          },
          "init": null,
          "definite": false,
          "start": 1369,
          "end": 1375
        }
      ],
      "declare": false,
      "start": 1365,
      "end": 1376
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1377,
          "end": 1379
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1382,
          "end": 1384
        },
        "start": 1377,
        "end": 1384
      },
      "directive": null,
      "start": 1377,
      "end": 1385
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1423,
          "end": 1425
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1428,
          "end": 1430
        },
        "start": 1423,
        "end": 1430
      },
      "directive": null,
      "start": 1423,
      "end": 1431
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1488,
        "end": 1490
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1507,
              "end": 1508
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 1497,
            "end": 1509
          }
        ],
        "start": 1491,
        "end": 1511
      },
      "abstract": false,
      "declare": false,
      "start": 1482,
      "end": 1511
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1518,
        "end": 1520
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1529,
        "end": 1531
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1538,
              "end": 1539
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1538,
            "end": 1540
          }
        ],
        "start": 1532,
        "end": 1542
      },
      "abstract": false,
      "declare": false,
      "start": 1512,
      "end": 1542
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1550,
        "end": 1552
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1559,
              "end": 1560
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1559,
            "end": 1561
          }
        ],
        "start": 1553,
        "end": 1563
      },
      "abstract": false,
      "declare": false,
      "start": 1544,
      "end": 1563
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1617,
        "end": 1619
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1628,
        "end": 1630
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1647,
              "end": 1648
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 1637,
            "end": 1649
          }
        ],
        "start": 1631,
        "end": 1651
      },
      "abstract": false,
      "declare": false,
      "start": 1611,
      "end": 1651
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 32,
  "end": 1652
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 32,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 38,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 47,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 60,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 72,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 82,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "sx",
    "start": 89,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 93,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 105,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 129,
    "end": 135
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 136,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 148,
    "end": 149
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 154,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 164,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "sf",
    "start": 171,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 176,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 186,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 193,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "sx",
    "start": 198,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 208,
    "end": 209
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 256,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 262,
    "end": 264
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 265,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 273,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 276,
    "end": 277
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 282,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 296,
    "end": 297
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 306,
    "end": 312
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 313,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 323,
    "end": 324
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 325,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 337,
    "end": 338
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 343,
    "end": 352
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 353,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "sf",
    "start": 360,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 365,
    "end": 366
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 375,
    "end": 381
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 382,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "sf",
    "start": 388,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 393,
    "end": 394
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 395,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "sx",
    "start": 400,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 410,
    "end": 411
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 462,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 468,
    "end": 470
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 471,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 479,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 491,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 497,
    "end": 498
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 503,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "sx",
    "start": 510,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 514,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 530,
    "end": 531
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 540,
    "end": 546
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 547,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 562,
    "end": 563
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 568,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "sf",
    "start": 575,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 580,
    "end": 581
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 590,
    "end": 596
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 597,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "sf",
    "start": 603,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 615,
    "end": 616
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 618,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 622,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 626,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 628,
    "end": 629
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 630,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 634,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 638,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 640,
    "end": 641
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 642,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 646,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 648,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 650,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 688,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 690,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 694,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 696,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 702,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "sx",
    "start": 705,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 709,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "sf",
    "start": 712,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 716,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 752,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 756,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 758,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 760,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 764,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 766,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 768,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "sx",
    "start": 769,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 773,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "sf",
    "start": 776,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 812,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 816,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 818,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 820,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 824,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 826,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 828,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "sx",
    "start": 829,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 831,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 833,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "sf",
    "start": 836,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 840,
    "end": 841
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 843,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 851,
    "end": 852
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 857,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 870,
    "end": 871
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 873,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 879,
    "end": 880
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 881,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 891,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 897,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 898,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 900,
    "end": 901
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 903,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 909,
    "end": 910
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 911,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 921,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 927,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 928,
    "end": 929
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 934,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 941,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 944,
    "end": 945
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 946,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 949,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 952,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 955,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 958,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 960,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 961,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 964,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 967,
    "end": 968
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 970,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 975,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 985,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 986,
    "end": 987
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 987,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 989,
    "end": 990
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 992,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1189,
    "end": 1194
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1197,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1219,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1231,
    "end": 1238
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1253,
    "end": 1258
  },
  {
    "type": "Identifier",
    "value": "CC",
    "start": 1259,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 1268,
    "end": 1277
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1278,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1303,
    "end": 1308
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 1309,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 1318,
    "end": 1327
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1333,
    "end": 1338
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 1339,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1353,
    "end": 1356
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1357,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 1361,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1365,
    "end": 1368
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1369,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 1373,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1377,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1382,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1423,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1428,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1482,
    "end": 1487
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 1488,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 1497,
    "end": 1506
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1512,
    "end": 1517
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 1518,
    "end": 1520
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1521,
    "end": 1528
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 1529,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1544,
    "end": 1549
  },
  {
    "type": "Identifier",
    "value": "A3",
    "start": 1550,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1611,
    "end": 1616
  },
  {
    "type": "Identifier",
    "value": "B3",
    "start": 1617,
    "end": 1619
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1620,
    "end": 1627
  },
  {
    "type": "Identifier",
    "value": "A3",
    "start": 1628,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 1637,
    "end": 1646
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1650,
    "end": 1651
  }
]
```
