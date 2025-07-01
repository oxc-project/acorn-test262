__ESTREE_TEST__:PASS:
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
