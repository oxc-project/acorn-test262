__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TargetIsPublic",
        "optional": false,
        "typeAnnotation": null,
        "start": 127,
        "end": 141
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 173
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 191,
                    "end": 194
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 196,
                      "end": 202
                    },
                    "start": 194,
                    "end": 202
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 184,
                  "end": 203
                }
              ],
              "start": 174,
              "end": 209
            },
            "abstract": false,
            "declare": false,
            "start": 163,
            "end": 209
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 225,
              "end": 226
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 237,
                    "end": 240
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 242,
                      "end": 248
                    },
                    "start": 240,
                    "end": 248
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 237,
                  "end": 249
                }
              ],
              "start": 227,
              "end": 255
            },
            "declare": false,
            "start": 215,
            "end": 255
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
                  "name": "a",
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
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 270,
                            "end": 273
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 275,
                              "end": 281
                            },
                            "start": 273,
                            "end": 281
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 270,
                          "end": 282
                        }
                      ],
                      "start": 268,
                      "end": 284
                    },
                    "start": 266,
                    "end": 284
                  },
                  "start": 265,
                  "end": 284
                },
                "init": null,
                "definite": false,
                "start": 265,
                "end": 284
              }
            ],
            "declare": false,
            "start": 261,
            "end": 284
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 296,
                        "end": 300
                      },
                      "typeArguments": null,
                      "start": 296,
                      "end": 300
                    },
                    "start": 294,
                    "end": 300
                  },
                  "start": 293,
                  "end": 300
                },
                "init": null,
                "definite": false,
                "start": 293,
                "end": 300
              }
            ],
            "declare": false,
            "start": 289,
            "end": 301
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
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 313,
                        "end": 314
                      },
                      "typeArguments": null,
                      "start": 313,
                      "end": 314
                    },
                    "start": 311,
                    "end": 314
                  },
                  "start": 310,
                  "end": 314
                },
                "init": null,
                "definite": false,
                "start": 310,
                "end": 314
              }
            ],
            "declare": false,
            "start": 306,
            "end": 315
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
              "start": 342,
              "end": 343
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 361,
                    "end": 364
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 366,
                      "end": 372
                    },
                    "start": 364,
                    "end": 372
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 354,
                  "end": 373
                }
              ],
              "start": 344,
              "end": 379
            },
            "abstract": false,
            "declare": false,
            "start": 336,
            "end": 379
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 391,
              "end": 392
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 411,
                    "end": 414
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 416,
                      "end": 422
                    },
                    "start": 414,
                    "end": 422
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 403,
                  "end": 423
                }
              ],
              "start": 393,
              "end": 429
            },
            "abstract": false,
            "declare": false,
            "start": 385,
            "end": 429
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
                  "start": 438,
                  "end": 442
                },
                "init": null,
                "definite": false,
                "start": 438,
                "end": 442
              }
            ],
            "declare": false,
            "start": 434,
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
                        "start": 455,
                        "end": 456
                      },
                      "typeArguments": null,
                      "start": 455,
                      "end": 456
                    },
                    "start": 453,
                    "end": 456
                  },
                  "start": 452,
                  "end": 456
                },
                "init": null,
                "definite": false,
                "start": 452,
                "end": 456
              }
            ],
            "declare": false,
            "start": 448,
            "end": 457
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 463,
                "end": 464
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 467,
                "end": 468
              },
              "start": 463,
              "end": 468
            },
            "directive": null,
            "start": 463,
            "end": 469
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 474,
                "end": 475
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 478,
                "end": 479
              },
              "start": 474,
              "end": 479
            },
            "directive": null,
            "start": 474,
            "end": 480
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 485,
                "end": 486
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 489,
                "end": 490
              },
              "start": 485,
              "end": 490
            },
            "directive": null,
            "start": 485,
            "end": 491
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 496,
                "end": 497
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 500,
                "end": 501
              },
              "start": 496,
              "end": 501
            },
            "directive": null,
            "start": 496,
            "end": 502
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 517,
                "end": 518
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 521,
                "end": 522
              },
              "start": 517,
              "end": 522
            },
            "directive": null,
            "start": 517,
            "end": 523
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 528,
                "end": 529
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 532,
                "end": 533
              },
              "start": 528,
              "end": 533
            },
            "directive": null,
            "start": 528,
            "end": 534
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 539,
                "end": 540
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 543,
                "end": 544
              },
              "start": 539,
              "end": 544
            },
            "directive": null,
            "start": 539,
            "end": 545
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 550,
                "end": 551
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 554,
                "end": 555
              },
              "start": 550,
              "end": 555
            },
            "directive": null,
            "start": 550,
            "end": 556
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 571,
                "end": 572
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 575,
                "end": 576
              },
              "start": 571,
              "end": 576
            },
            "directive": null,
            "start": 571,
            "end": 577
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 582,
                "end": 583
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 586,
                "end": 587
              },
              "start": 582,
              "end": 587
            },
            "directive": null,
            "start": 582,
            "end": 588
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 593,
                "end": 594
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 597,
                "end": 598
              },
              "start": 593,
              "end": 598
            },
            "directive": null,
            "start": 593,
            "end": 599
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 604,
                "end": 605
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 608,
                "end": 609
              },
              "start": 604,
              "end": 609
            },
            "directive": null,
            "start": 604,
            "end": 610
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 625,
                "end": 626
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 629,
                "end": 630
              },
              "start": 625,
              "end": 630
            },
            "directive": null,
            "start": 625,
            "end": 631
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 636,
                "end": 637
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 640,
                "end": 641
              },
              "start": 636,
              "end": 641
            },
            "directive": null,
            "start": 636,
            "end": 642
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 647,
                "end": 648
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 651,
                "end": 652
              },
              "start": 647,
              "end": 652
            },
            "directive": null,
            "start": 647,
            "end": 653
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 658,
                "end": 659
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 662,
                "end": 663
              },
              "start": 658,
              "end": 663
            },
            "directive": null,
            "start": 658,
            "end": 664
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 679,
                "end": 680
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 683,
                "end": 684
              },
              "start": 679,
              "end": 684
            },
            "directive": null,
            "start": 679,
            "end": 685
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 700,
                "end": 701
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 704,
                "end": 705
              },
              "start": 700,
              "end": 705
            },
            "directive": null,
            "start": 700,
            "end": 706
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 721,
                "end": 722
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 725,
                "end": 726
              },
              "start": 721,
              "end": 726
            },
            "directive": null,
            "start": 721,
            "end": 727
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 742,
                "end": 743
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 746,
                "end": 747
              },
              "start": 742,
              "end": 747
            },
            "directive": null,
            "start": 742,
            "end": 748
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 763,
                "end": 764
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 767,
                "end": 768
              },
              "start": 763,
              "end": 768
            },
            "directive": null,
            "start": 763,
            "end": 769
          }
        ],
        "start": 142,
        "end": 773
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 117,
      "end": 773
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TargetIsPublic",
        "optional": false,
        "typeAnnotation": null,
        "start": 785,
        "end": 799
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 827,
              "end": 831
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 850,
                    "end": 853
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 855,
                      "end": 861
                    },
                    "start": 853,
                    "end": 861
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 842,
                  "end": 862
                }
              ],
              "start": 832,
              "end": 868
            },
            "abstract": false,
            "declare": false,
            "start": 821,
            "end": 868
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 884,
              "end": 885
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 894,
                  "end": 898
                },
                "typeArguments": null,
                "start": 894,
                "end": 898
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 899,
              "end": 906
            },
            "declare": false,
            "start": 874,
            "end": 906
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
                  "name": "a",
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
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 921,
                            "end": 924
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 926,
                              "end": 932
                            },
                            "start": 924,
                            "end": 932
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 921,
                          "end": 933
                        }
                      ],
                      "start": 919,
                      "end": 935
                    },
                    "start": 917,
                    "end": 935
                  },
                  "start": 916,
                  "end": 935
                },
                "init": null,
                "definite": false,
                "start": 916,
                "end": 935
              }
            ],
            "declare": false,
            "start": 912,
            "end": 935
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 947,
                        "end": 951
                      },
                      "typeArguments": null,
                      "start": 947,
                      "end": 951
                    },
                    "start": 945,
                    "end": 951
                  },
                  "start": 944,
                  "end": 951
                },
                "init": null,
                "definite": false,
                "start": 944,
                "end": 951
              }
            ],
            "declare": false,
            "start": 940,
            "end": 952
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
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 964,
                        "end": 965
                      },
                      "typeArguments": null,
                      "start": 964,
                      "end": 965
                    },
                    "start": 962,
                    "end": 965
                  },
                  "start": 961,
                  "end": 965
                },
                "init": null,
                "definite": false,
                "start": 961,
                "end": 965
              }
            ],
            "declare": false,
            "start": 957,
            "end": 966
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
              "start": 993,
              "end": 994
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1012,
                    "end": 1015
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1017,
                      "end": 1023
                    },
                    "start": 1015,
                    "end": 1023
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 1005,
                  "end": 1024
                }
              ],
              "start": 995,
              "end": 1030
            },
            "abstract": false,
            "declare": false,
            "start": 987,
            "end": 1030
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 1042,
              "end": 1043
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1062,
                    "end": 1065
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1067,
                      "end": 1073
                    },
                    "start": 1065,
                    "end": 1073
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 1054,
                  "end": 1074
                }
              ],
              "start": 1044,
              "end": 1080
            },
            "abstract": false,
            "declare": false,
            "start": 1036,
            "end": 1080
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
                        "start": 1093,
                        "end": 1094
                      },
                      "typeArguments": null,
                      "start": 1093,
                      "end": 1094
                    },
                    "start": 1091,
                    "end": 1094
                  },
                  "start": 1090,
                  "end": 1094
                },
                "init": null,
                "definite": false,
                "start": 1090,
                "end": 1094
              }
            ],
            "declare": false,
            "start": 1086,
            "end": 1095
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
                        "start": 1107,
                        "end": 1108
                      },
                      "typeArguments": null,
                      "start": 1107,
                      "end": 1108
                    },
                    "start": 1105,
                    "end": 1108
                  },
                  "start": 1104,
                  "end": 1108
                },
                "init": null,
                "definite": false,
                "start": 1104,
                "end": 1108
              }
            ],
            "declare": false,
            "start": 1100,
            "end": 1109
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1115,
                "end": 1116
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1119,
                "end": 1120
              },
              "start": 1115,
              "end": 1120
            },
            "directive": null,
            "start": 1115,
            "end": 1121
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1135,
                "end": 1136
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1139,
                "end": 1140
              },
              "start": 1135,
              "end": 1140
            },
            "directive": null,
            "start": 1135,
            "end": 1141
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1155,
                "end": 1156
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1159,
                "end": 1160
              },
              "start": 1155,
              "end": 1160
            },
            "directive": null,
            "start": 1155,
            "end": 1161
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1166,
                "end": 1167
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1170,
                "end": 1171
              },
              "start": 1166,
              "end": 1171
            },
            "directive": null,
            "start": 1166,
            "end": 1172
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1187,
                "end": 1188
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1191,
                "end": 1192
              },
              "start": 1187,
              "end": 1192
            },
            "directive": null,
            "start": 1187,
            "end": 1193
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1207,
                "end": 1208
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1211,
                "end": 1212
              },
              "start": 1207,
              "end": 1212
            },
            "directive": null,
            "start": 1207,
            "end": 1213
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1218,
                "end": 1219
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1222,
                "end": 1223
              },
              "start": 1218,
              "end": 1223
            },
            "directive": null,
            "start": 1218,
            "end": 1224
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1238,
                "end": 1239
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1242,
                "end": 1243
              },
              "start": 1238,
              "end": 1243
            },
            "directive": null,
            "start": 1238,
            "end": 1244
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1258,
                "end": 1259
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1262,
                "end": 1263
              },
              "start": 1258,
              "end": 1263
            },
            "directive": null,
            "start": 1258,
            "end": 1264
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1274,
                "end": 1275
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1278,
                "end": 1279
              },
              "start": 1274,
              "end": 1279
            },
            "directive": null,
            "start": 1274,
            "end": 1280
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1294,
                "end": 1295
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1298,
                "end": 1299
              },
              "start": 1294,
              "end": 1299
            },
            "directive": null,
            "start": 1294,
            "end": 1300
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1305,
                "end": 1306
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1309,
                "end": 1310
              },
              "start": 1305,
              "end": 1310
            },
            "directive": null,
            "start": 1305,
            "end": 1311
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1325,
                "end": 1326
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1329,
                "end": 1330
              },
              "start": 1325,
              "end": 1330
            },
            "directive": null,
            "start": 1325,
            "end": 1331
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1345,
                "end": 1346
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1349,
                "end": 1350
              },
              "start": 1345,
              "end": 1350
            },
            "directive": null,
            "start": 1345,
            "end": 1351
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1357,
                "end": 1358
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1361,
                "end": 1362
              },
              "start": 1357,
              "end": 1362
            },
            "directive": null,
            "start": 1357,
            "end": 1363
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1368,
                "end": 1369
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1372,
                "end": 1373
              },
              "start": 1368,
              "end": 1373
            },
            "directive": null,
            "start": 1368,
            "end": 1374
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1388,
                "end": 1389
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1392,
                "end": 1393
              },
              "start": 1388,
              "end": 1393
            },
            "directive": null,
            "start": 1388,
            "end": 1394
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1408,
                "end": 1409
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1412,
                "end": 1413
              },
              "start": 1408,
              "end": 1413
            },
            "directive": null,
            "start": 1408,
            "end": 1414
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1429,
                "end": 1430
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1433,
                "end": 1434
              },
              "start": 1429,
              "end": 1434
            },
            "directive": null,
            "start": 1429,
            "end": 1435
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1450,
                "end": 1451
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1454,
                "end": 1455
              },
              "start": 1450,
              "end": 1455
            },
            "directive": null,
            "start": 1450,
            "end": 1456
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1471,
                "end": 1472
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 1475,
                "end": 1476
              },
              "start": 1471,
              "end": 1476
            },
            "directive": null,
            "start": 1471,
            "end": 1477
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1492,
                "end": 1493
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1496,
                "end": 1497
              },
              "start": 1492,
              "end": 1497
            },
            "directive": null,
            "start": 1492,
            "end": 1498
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1513,
                "end": 1514
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1517,
                "end": 1518
              },
              "start": 1513,
              "end": 1518
            },
            "directive": null,
            "start": 1513,
            "end": 1519
          }
        ],
        "start": 800,
        "end": 1522
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 775,
      "end": 1522
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 117,
  "end": 1522
}
```
