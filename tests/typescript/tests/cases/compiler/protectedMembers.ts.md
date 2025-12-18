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
    "end": 37,
    "range": [
      32,
      37
    ]
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 38,
    "end": 40,
    "range": [
      38,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 47,
    "end": 56,
    "range": [
      47,
      56
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 60,
    "end": 66,
    "range": [
      60,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 72,
    "end": 81,
    "range": [
      72,
      81
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 82,
    "end": 88,
    "range": [
      82,
      88
    ]
  },
  {
    "type": "Identifier",
    "value": "sx",
    "start": 89,
    "end": 91,
    "range": [
      89,
      91
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 93,
    "end": 99,
    "range": [
      93,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 105,
    "end": 114,
    "range": [
      105,
      114
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 129,
    "end": 135,
    "range": [
      129,
      135
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 136,
    "end": 140,
    "range": [
      136,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 154,
    "end": 163,
    "range": [
      154,
      163
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 164,
    "end": 170,
    "range": [
      164,
      170
    ]
  },
  {
    "type": "Identifier",
    "value": "sf",
    "start": 171,
    "end": 173,
    "range": [
      171,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 186,
    "end": 192,
    "range": [
      186,
      192
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 193,
    "end": 197,
    "range": [
      193,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Identifier",
    "value": "sx",
    "start": 198,
    "end": 200,
    "range": [
      198,
      200
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 200,
    "end": 201,
    "range": [
      200,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 256,
    "end": 261,
    "range": [
      256,
      261
    ]
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 262,
    "end": 264,
    "range": [
      262,
      264
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 265,
    "end": 272,
    "range": [
      265,
      272
    ]
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 273,
    "end": 275,
    "range": [
      273,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 282,
    "end": 291,
    "range": [
      282,
      291
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 306,
    "end": 312,
    "range": [
      306,
      312
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 313,
    "end": 318,
    "range": [
      313,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 320,
    "end": 321,
    "range": [
      320,
      321
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 321,
    "end": 322,
    "range": [
      321,
      322
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 323,
    "end": 324,
    "range": [
      323,
      324
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 325,
    "end": 329,
    "range": [
      325,
      329
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 329,
    "end": 330,
    "range": [
      329,
      330
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 343,
    "end": 352,
    "range": [
      343,
      352
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 353,
    "end": 359,
    "range": [
      353,
      359
    ]
  },
  {
    "type": "Identifier",
    "value": "sf",
    "start": 360,
    "end": 362,
    "range": [
      360,
      362
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 375,
    "end": 381,
    "range": [
      375,
      381
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 382,
    "end": 387,
    "range": [
      382,
      387
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 387,
    "end": 388,
    "range": [
      387,
      388
    ]
  },
  {
    "type": "Identifier",
    "value": "sf",
    "start": 388,
    "end": 390,
    "range": [
      388,
      390
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 390,
    "end": 391,
    "range": [
      390,
      391
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 391,
    "end": 392,
    "range": [
      391,
      392
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 395,
    "end": 399,
    "range": [
      395,
      399
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 399,
    "end": 400,
    "range": [
      399,
      400
    ]
  },
  {
    "type": "Identifier",
    "value": "sx",
    "start": 400,
    "end": 402,
    "range": [
      400,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 402,
    "end": 403,
    "range": [
      402,
      403
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 462,
    "end": 467,
    "range": [
      462,
      467
    ]
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 468,
    "end": 470,
    "range": [
      468,
      470
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 471,
    "end": 478,
    "range": [
      471,
      478
    ]
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 479,
    "end": 481,
    "range": [
      479,
      481
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 482,
    "end": 483,
    "range": [
      482,
      483
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 488,
    "end": 489,
    "range": [
      488,
      489
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 491,
    "end": 497,
    "range": [
      491,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 503,
    "end": 509,
    "range": [
      503,
      509
    ]
  },
  {
    "type": "Identifier",
    "value": "sx",
    "start": 510,
    "end": 512,
    "range": [
      510,
      512
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 512,
    "end": 513,
    "range": [
      512,
      513
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 514,
    "end": 520,
    "range": [
      514,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 526,
    "end": 527,
    "range": [
      526,
      527
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 527,
    "end": 528,
    "range": [
      527,
      528
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 528,
    "end": 529,
    "range": [
      528,
      529
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 530,
    "end": 531,
    "range": [
      530,
      531
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 540,
    "end": 546,
    "range": [
      540,
      546
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 547,
    "end": 552,
    "range": [
      547,
      552
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 552,
    "end": 553,
    "range": [
      552,
      553
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 553,
    "end": 554,
    "range": [
      553,
      554
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 554,
    "end": 555,
    "range": [
      554,
      555
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 555,
    "end": 556,
    "range": [
      555,
      556
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 556,
    "end": 557,
    "range": [
      556,
      557
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 562,
    "end": 563,
    "range": [
      562,
      563
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 568,
    "end": 574,
    "range": [
      568,
      574
    ]
  },
  {
    "type": "Identifier",
    "value": "sf",
    "start": 575,
    "end": 577,
    "range": [
      575,
      577
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 577,
    "end": 578,
    "range": [
      577,
      578
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 578,
    "end": 579,
    "range": [
      578,
      579
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 580,
    "end": 581,
    "range": [
      580,
      581
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 590,
    "end": 596,
    "range": [
      590,
      596
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 597,
    "end": 602,
    "range": [
      597,
      602
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 602,
    "end": 603,
    "range": [
      602,
      603
    ]
  },
  {
    "type": "Identifier",
    "value": "sf",
    "start": 603,
    "end": 605,
    "range": [
      603,
      605
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 605,
    "end": 606,
    "range": [
      605,
      606
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 606,
    "end": 607,
    "range": [
      606,
      607
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 607,
    "end": 608,
    "range": [
      607,
      608
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 613,
    "end": 614,
    "range": [
      613,
      614
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 618,
    "end": 621,
    "range": [
      618,
      621
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 622,
    "end": 624,
    "range": [
      622,
      624
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 626,
    "end": 628,
    "range": [
      626,
      628
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 630,
    "end": 633,
    "range": [
      630,
      633
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 634,
    "end": 636,
    "range": [
      634,
      636
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 638,
    "end": 640,
    "range": [
      638,
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
    "value": "var",
    "start": 642,
    "end": 645,
    "range": [
      642,
      645
    ]
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 646,
    "end": 648,
    "range": [
      646,
      648
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 648,
    "end": 649,
    "range": [
      648,
      649
    ]
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 650,
    "end": 652,
    "range": [
      650,
      652
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 688,
    "end": 690,
    "range": [
      688,
      690
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 690,
    "end": 691,
    "range": [
      690,
      691
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 691,
    "end": 692,
    "range": [
      691,
      692
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 692,
    "end": 693,
    "range": [
      692,
      693
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 694,
    "end": 696,
    "range": [
      694,
      696
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 696,
    "end": 697,
    "range": [
      696,
      697
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 697,
    "end": 698,
    "range": [
      697,
      698
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 698,
    "end": 699,
    "range": [
      698,
      699
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 699,
    "end": 700,
    "range": [
      699,
      700
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 700,
    "end": 701,
    "range": [
      700,
      701
    ]
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 702,
    "end": 704,
    "range": [
      702,
      704
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 704,
    "end": 705,
    "range": [
      704,
      705
    ]
  },
  {
    "type": "Identifier",
    "value": "sx",
    "start": 705,
    "end": 707,
    "range": [
      705,
      707
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 707,
    "end": 708,
    "range": [
      707,
      708
    ]
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 709,
    "end": 711,
    "range": [
      709,
      711
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 711,
    "end": 712,
    "range": [
      711,
      712
    ]
  },
  {
    "type": "Identifier",
    "value": "sf",
    "start": 712,
    "end": 714,
    "range": [
      712,
      714
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 714,
    "end": 715,
    "range": [
      714,
      715
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 715,
    "end": 716,
    "range": [
      715,
      716
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 716,
    "end": 717,
    "range": [
      716,
      717
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 752,
    "end": 754,
    "range": [
      752,
      754
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 754,
    "end": 755,
    "range": [
      754,
      755
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 755,
    "end": 756,
    "range": [
      755,
      756
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 756,
    "end": 757,
    "range": [
      756,
      757
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 758,
    "end": 760,
    "range": [
      758,
      760
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 760,
    "end": 761,
    "range": [
      760,
      761
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 761,
    "end": 762,
    "range": [
      761,
      762
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 762,
    "end": 763,
    "range": [
      762,
      763
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 763,
    "end": 764,
    "range": [
      763,
      764
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 764,
    "end": 765,
    "range": [
      764,
      765
    ]
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 766,
    "end": 768,
    "range": [
      766,
      768
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 768,
    "end": 769,
    "range": [
      768,
      769
    ]
  },
  {
    "type": "Identifier",
    "value": "sx",
    "start": 769,
    "end": 771,
    "range": [
      769,
      771
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 771,
    "end": 772,
    "range": [
      771,
      772
    ]
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 773,
    "end": 775,
    "range": [
      773,
      775
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 775,
    "end": 776,
    "range": [
      775,
      776
    ]
  },
  {
    "type": "Identifier",
    "value": "sf",
    "start": 776,
    "end": 778,
    "range": [
      776,
      778
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 778,
    "end": 779,
    "range": [
      778,
      779
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 779,
    "end": 780,
    "range": [
      779,
      780
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 780,
    "end": 781,
    "range": [
      780,
      781
    ]
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 812,
    "end": 814,
    "range": [
      812,
      814
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 814,
    "end": 815,
    "range": [
      814,
      815
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 815,
    "end": 816,
    "range": [
      815,
      816
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 816,
    "end": 817,
    "range": [
      816,
      817
    ]
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 818,
    "end": 820,
    "range": [
      818,
      820
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 820,
    "end": 821,
    "range": [
      820,
      821
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 821,
    "end": 822,
    "range": [
      821,
      822
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 822,
    "end": 823,
    "range": [
      822,
      823
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 823,
    "end": 824,
    "range": [
      823,
      824
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 826,
    "end": 828,
    "range": [
      826,
      828
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 828,
    "end": 829,
    "range": [
      828,
      829
    ]
  },
  {
    "type": "Identifier",
    "value": "sx",
    "start": 829,
    "end": 831,
    "range": [
      829,
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
    "type": "Identifier",
    "value": "C3",
    "start": 833,
    "end": 835,
    "range": [
      833,
      835
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 835,
    "end": 836,
    "range": [
      835,
      836
    ]
  },
  {
    "type": "Identifier",
    "value": "sf",
    "start": 836,
    "end": 838,
    "range": [
      836,
      838
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 838,
    "end": 839,
    "range": [
      838,
      839
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 839,
    "end": 840,
    "range": [
      839,
      840
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 840,
    "end": 841,
    "range": [
      840,
      841
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 843,
    "end": 848,
    "range": [
      843,
      848
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 849,
    "end": 850,
    "range": [
      849,
      850
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 851,
    "end": 852,
    "range": [
      851,
      852
    ]
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 857,
    "end": 866,
    "range": [
      857,
      866
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 867,
    "end": 868,
    "range": [
      867,
      868
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 868,
    "end": 869,
    "range": [
      868,
      869
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 870,
    "end": 871,
    "range": [
      870,
      871
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 873,
    "end": 878,
    "range": [
      873,
      878
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 879,
    "end": 880,
    "range": [
      879,
      880
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 881,
    "end": 888,
    "range": [
      881,
      888
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 889,
    "end": 890,
    "range": [
      889,
      890
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 891,
    "end": 892,
    "range": [
      891,
      892
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 897,
    "end": 898,
    "range": [
      897,
      898
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 898,
    "end": 899,
    "range": [
      898,
      899
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 900,
    "end": 901,
    "range": [
      900,
      901
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 903,
    "end": 908,
    "range": [
      903,
      908
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 909,
    "end": 910,
    "range": [
      909,
      910
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 911,
    "end": 918,
    "range": [
      911,
      918
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 919,
    "end": 920,
    "range": [
      919,
      920
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 921,
    "end": 922,
    "range": [
      921,
      922
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 927,
    "end": 928,
    "range": [
      927,
      928
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 928,
    "end": 929,
    "range": [
      928,
      929
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 934,
    "end": 940,
    "range": [
      934,
      940
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 941,
    "end": 944,
    "range": [
      941,
      944
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 944,
    "end": 945,
    "range": [
      944,
      945
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 945,
    "end": 946,
    "range": [
      945,
      946
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 946,
    "end": 947,
    "range": [
      946,
      947
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 948,
    "end": 949,
    "range": [
      948,
      949
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 949,
    "end": 950,
    "range": [
      949,
      950
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 951,
    "end": 952,
    "range": [
      951,
      952
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 952,
    "end": 953,
    "range": [
      952,
      953
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 954,
    "end": 955,
    "range": [
      954,
      955
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 955,
    "end": 956,
    "range": [
      955,
      956
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 957,
    "end": 958,
    "range": [
      957,
      958
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 958,
    "end": 959,
    "range": [
      958,
      959
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 960,
    "end": 961,
    "range": [
      960,
      961
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 961,
    "end": 962,
    "range": [
      961,
      962
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 963,
    "end": 964,
    "range": [
      963,
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
    "value": "D",
    "start": 966,
    "end": 967,
    "range": [
      966,
      967
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 967,
    "end": 968,
    "range": [
      967,
      968
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 969,
    "end": 970,
    "range": [
      969,
      970
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 970,
    "end": 971,
    "range": [
      970,
      971
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 972,
    "end": 973,
    "range": [
      972,
      973
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 973,
    "end": 974,
    "range": [
      973,
      974
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 975,
    "end": 976,
    "range": [
      975,
      976
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 985,
    "end": 986,
    "range": [
      985,
      986
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 986,
    "end": 987,
    "range": [
      986,
      987
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 987,
    "end": 988,
    "range": [
      987,
      988
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 989,
    "end": 990,
    "range": [
      989,
      990
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 991,
    "end": 992,
    "range": [
      991,
      992
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 992,
    "end": 993,
    "range": [
      992,
      993
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1061,
    "end": 1062,
    "range": [
      1061,
      1062
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1062,
    "end": 1063,
    "range": [
      1062,
      1063
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1063,
    "end": 1064,
    "range": [
      1063,
      1064
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1065,
    "end": 1066,
    "range": [
      1065,
      1066
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1067,
    "end": 1068,
    "range": [
      1067,
      1068
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1068,
    "end": 1069,
    "range": [
      1068,
      1069
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1137,
    "end": 1138,
    "range": [
      1137,
      1138
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1138,
    "end": 1139,
    "range": [
      1138,
      1139
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1139,
    "end": 1140,
    "range": [
      1139,
      1140
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1141,
    "end": 1142,
    "range": [
      1141,
      1142
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1143,
    "end": 1144,
    "range": [
      1143,
      1144
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1144,
    "end": 1145,
    "range": [
      1144,
      1145
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1154,
    "end": 1155,
    "range": [
      1154,
      1155
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1155,
    "end": 1156,
    "range": [
      1155,
      1156
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1156,
    "end": 1157,
    "range": [
      1156,
      1157
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1158,
    "end": 1159,
    "range": [
      1158,
      1159
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1160,
    "end": 1161,
    "range": [
      1160,
      1161
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1161,
    "end": 1162,
    "range": [
      1161,
      1162
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1171,
    "end": 1172,
    "range": [
      1171,
      1172
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1172,
    "end": 1173,
    "range": [
      1172,
      1173
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1173,
    "end": 1174,
    "range": [
      1173,
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
    "type": "Numeric",
    "value": "1",
    "start": 1177,
    "end": 1178,
    "range": [
      1177,
      1178
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1178,
    "end": 1179,
    "range": [
      1178,
      1179
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1184,
    "end": 1185,
    "range": [
      1184,
      1185
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1186,
    "end": 1187,
    "range": [
      1186,
      1187
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1189,
    "end": 1194,
    "range": [
      1189,
      1194
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1195,
    "end": 1196,
    "range": [
      1195,
      1196
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1197,
    "end": 1204,
    "range": [
      1197,
      1204
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1205,
    "end": 1206,
    "range": [
      1205,
      1206
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1207,
    "end": 1208,
    "range": [
      1207,
      1208
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1213,
    "end": 1214,
    "range": [
      1213,
      1214
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1214,
    "end": 1215,
    "range": [
      1214,
      1215
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1216,
    "end": 1217,
    "range": [
      1216,
      1217
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1219,
    "end": 1228,
    "range": [
      1219,
      1228
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1229,
    "end": 1230,
    "range": [
      1229,
      1230
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1231,
    "end": 1238,
    "range": [
      1231,
      1238
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1239,
    "end": 1240,
    "range": [
      1239,
      1240
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1241,
    "end": 1242,
    "range": [
      1241,
      1242
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1247,
    "end": 1248,
    "range": [
      1247,
      1248
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1248,
    "end": 1249,
    "range": [
      1248,
      1249
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1250,
    "end": 1251,
    "range": [
      1250,
      1251
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1253,
    "end": 1258,
    "range": [
      1253,
      1258
    ]
  },
  {
    "type": "Identifier",
    "value": "CC",
    "start": 1259,
    "end": 1261,
    "range": [
      1259,
      1261
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1262,
    "end": 1263,
    "range": [
      1262,
      1263
    ]
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 1268,
    "end": 1277,
    "range": [
      1268,
      1277
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1278,
    "end": 1289,
    "range": [
      1278,
      1289
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1289,
    "end": 1290,
    "range": [
      1289,
      1290
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1290,
    "end": 1291,
    "range": [
      1290,
      1291
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1292,
    "end": 1293,
    "range": [
      1292,
      1293
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1298,
    "end": 1299,
    "range": [
      1298,
      1299
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1300,
    "end": 1301,
    "range": [
      1300,
      1301
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1303,
    "end": 1308,
    "range": [
      1303,
      1308
    ]
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 1309,
    "end": 1311,
    "range": [
      1309,
      1311
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1312,
    "end": 1313,
    "range": [
      1312,
      1313
    ]
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 1318,
    "end": 1327,
    "range": [
      1318,
      1327
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1328,
    "end": 1329,
    "range": [
      1328,
      1329
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1329,
    "end": 1330,
    "range": [
      1329,
      1330
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1331,
    "end": 1332,
    "range": [
      1331,
      1332
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1333,
    "end": 1338,
    "range": [
      1333,
      1338
    ]
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 1339,
    "end": 1341,
    "range": [
      1339,
      1341
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1342,
    "end": 1343,
    "range": [
      1342,
      1343
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1348,
    "end": 1349,
    "range": [
      1348,
      1349
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1349,
    "end": 1350,
    "range": [
      1349,
      1350
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1351,
    "end": 1352,
    "range": [
      1351,
      1352
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1353,
    "end": 1356,
    "range": [
      1353,
      1356
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1357,
    "end": 1359,
    "range": [
      1357,
      1359
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1359,
    "end": 1360,
    "range": [
      1359,
      1360
    ]
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 1361,
    "end": 1363,
    "range": [
      1361,
      1363
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1363,
    "end": 1364,
    "range": [
      1363,
      1364
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1365,
    "end": 1368,
    "range": [
      1365,
      1368
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1369,
    "end": 1371,
    "range": [
      1369,
      1371
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1371,
    "end": 1372,
    "range": [
      1371,
      1372
    ]
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 1373,
    "end": 1375,
    "range": [
      1373,
      1375
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1375,
    "end": 1376,
    "range": [
      1375,
      1376
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1377,
    "end": 1379,
    "range": [
      1377,
      1379
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1380,
    "end": 1381,
    "range": [
      1380,
      1381
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1382,
    "end": 1384,
    "range": [
      1382,
      1384
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1384,
    "end": 1385,
    "range": [
      1384,
      1385
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 1423,
    "end": 1425,
    "range": [
      1423,
      1425
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1426,
    "end": 1427,
    "range": [
      1426,
      1427
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1428,
    "end": 1430,
    "range": [
      1428,
      1430
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1430,
    "end": 1431,
    "range": [
      1430,
      1431
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1482,
    "end": 1487,
    "range": [
      1482,
      1487
    ]
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 1488,
    "end": 1490,
    "range": [
      1488,
      1490
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1491,
    "end": 1492,
    "range": [
      1491,
      1492
    ]
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 1497,
    "end": 1506,
    "range": [
      1497,
      1506
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1507,
    "end": 1508,
    "range": [
      1507,
      1508
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1508,
    "end": 1509,
    "range": [
      1508,
      1509
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1510,
    "end": 1511,
    "range": [
      1510,
      1511
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1512,
    "end": 1517,
    "range": [
      1512,
      1517
    ]
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 1518,
    "end": 1520,
    "range": [
      1518,
      1520
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1521,
    "end": 1528,
    "range": [
      1521,
      1528
    ]
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 1529,
    "end": 1531,
    "range": [
      1529,
      1531
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1532,
    "end": 1533,
    "range": [
      1532,
      1533
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1538,
    "end": 1539,
    "range": [
      1538,
      1539
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1539,
    "end": 1540,
    "range": [
      1539,
      1540
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1541,
    "end": 1542,
    "range": [
      1541,
      1542
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1544,
    "end": 1549,
    "range": [
      1544,
      1549
    ]
  },
  {
    "type": "Identifier",
    "value": "A3",
    "start": 1550,
    "end": 1552,
    "range": [
      1550,
      1552
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1553,
    "end": 1554,
    "range": [
      1553,
      1554
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1559,
    "end": 1560,
    "range": [
      1559,
      1560
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1560,
    "end": 1561,
    "range": [
      1560,
      1561
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1562,
    "end": 1563,
    "range": [
      1562,
      1563
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1611,
    "end": 1616,
    "range": [
      1611,
      1616
    ]
  },
  {
    "type": "Identifier",
    "value": "B3",
    "start": 1617,
    "end": 1619,
    "range": [
      1617,
      1619
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1620,
    "end": 1627,
    "range": [
      1620,
      1627
    ]
  },
  {
    "type": "Identifier",
    "value": "A3",
    "start": 1628,
    "end": 1630,
    "range": [
      1628,
      1630
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1631,
    "end": 1632,
    "range": [
      1631,
      1632
    ]
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 1637,
    "end": 1646,
    "range": [
      1637,
      1646
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1647,
    "end": 1648,
    "range": [
      1647,
      1648
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1648,
    "end": 1649,
    "range": [
      1648,
      1649
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1650,
    "end": 1651,
    "range": [
      1650,
      1651
    ]
  }
]
```
