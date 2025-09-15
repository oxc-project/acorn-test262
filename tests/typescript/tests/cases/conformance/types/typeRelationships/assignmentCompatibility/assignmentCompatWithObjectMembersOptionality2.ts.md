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
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 143,
        "end": 147
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
              "start": 150,
              "end": 153
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 155,
                "end": 161
              },
              "start": 153,
              "end": 161
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
            "start": 150,
            "end": 162
          }
        ],
        "start": 148,
        "end": 164
      },
      "abstract": false,
      "declare": false,
      "start": 137,
      "end": 164
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 171,
        "end": 178
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 187,
        "end": 191
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 194,
              "end": 197
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 199,
                "end": 205
              },
              "start": 197,
              "end": 205
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
            "start": 194,
            "end": 206
          }
        ],
        "start": 192,
        "end": 208
      },
      "abstract": false,
      "declare": false,
      "start": 165,
      "end": 208
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null,
        "start": 215,
        "end": 223
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 232,
        "end": 239
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
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 242,
              "end": 245
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 247,
                "end": 253
              },
              "start": 245,
              "end": 253
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
            "start": 242,
            "end": 254
          }
        ],
        "start": 240,
        "end": 256
      },
      "abstract": false,
      "declare": false,
      "start": 209,
      "end": 256
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TargetHasOptional",
        "optional": false,
        "typeAnnotation": null,
        "start": 268,
        "end": 285
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 317,
              "end": 318
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
                    "name": "opt",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 329,
                    "end": 332
                  },
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
                        "start": 335,
                        "end": 339
                      },
                      "typeArguments": null,
                      "start": 335,
                      "end": 339
                    },
                    "start": 333,
                    "end": 339
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 329,
                  "end": 339
                }
              ],
              "start": 319,
              "end": 345
            },
            "declare": false,
            "start": 307,
            "end": 345
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
                        "start": 357,
                        "end": 358
                      },
                      "typeArguments": null,
                      "start": 357,
                      "end": 358
                    },
                    "start": 355,
                    "end": 358
                  },
                  "start": 354,
                  "end": 358
                },
                "init": null,
                "definite": false,
                "start": 354,
                "end": 358
              }
            ],
            "declare": false,
            "start": 350,
            "end": 359
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
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "opt",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 374,
                            "end": 377
                          },
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
                                "start": 380,
                                "end": 384
                              },
                              "typeArguments": null,
                              "start": 380,
                              "end": 384
                            },
                            "start": 378,
                            "end": 384
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 374,
                          "end": 385
                        }
                      ],
                      "start": 372,
                      "end": 387
                    },
                    "start": 370,
                    "end": 387
                  },
                  "start": 369,
                  "end": 387
                },
                "init": null,
                "definite": false,
                "start": 369,
                "end": 387
              }
            ],
            "declare": false,
            "start": 365,
            "end": 387
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
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 406,
                        "end": 407
                      },
                      "typeArguments": null,
                      "start": 399,
                      "end": 407
                    },
                    "start": 397,
                    "end": 407
                  },
                  "start": 396,
                  "end": 407
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
                        "name": "opt",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 412,
                        "end": 415
                      },
                      "value": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 421,
                          "end": 425
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 417,
                        "end": 427
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 412,
                      "end": 427
                    }
                  ],
                  "start": 410,
                  "end": 429
                },
                "definite": false,
                "start": 396,
                "end": 429
              }
            ],
            "declare": false,
            "start": 392,
            "end": 429
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 460,
              "end": 461
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
                    "name": "other",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 472,
                    "end": 477
                  },
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
                        "start": 479,
                        "end": 483
                      },
                      "typeArguments": null,
                      "start": 479,
                      "end": 483
                    },
                    "start": 477,
                    "end": 483
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 472,
                  "end": 484
                }
              ],
              "start": 462,
              "end": 490
            },
            "declare": false,
            "start": 450,
            "end": 490
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 505,
              "end": 506
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
                    "name": "other",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 517,
                    "end": 522
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 524,
                        "end": 531
                      },
                      "typeArguments": null,
                      "start": 524,
                      "end": 531
                    },
                    "start": 522,
                    "end": 531
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 517,
                  "end": 532
                }
              ],
              "start": 507,
              "end": 538
            },
            "declare": false,
            "start": 495,
            "end": 538
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 553,
              "end": 554
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
                    "name": "other",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 565,
                    "end": 570
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 573,
                        "end": 580
                      },
                      "typeArguments": null,
                      "start": 573,
                      "end": 580
                    },
                    "start": 571,
                    "end": 580
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 565,
                  "end": 581
                }
              ],
              "start": 555,
              "end": 587
            },
            "declare": false,
            "start": 543,
            "end": 587
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
                        "start": 599,
                        "end": 600
                      },
                      "typeArguments": null,
                      "start": 599,
                      "end": 600
                    },
                    "start": 597,
                    "end": 600
                  },
                  "start": 596,
                  "end": 600
                },
                "init": null,
                "definite": false,
                "start": 596,
                "end": 600
              }
            ],
            "declare": false,
            "start": 592,
            "end": 601
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
                        "start": 613,
                        "end": 614
                      },
                      "typeArguments": null,
                      "start": 613,
                      "end": 614
                    },
                    "start": 611,
                    "end": 614
                  },
                  "start": 610,
                  "end": 614
                },
                "init": null,
                "definite": false,
                "start": 610,
                "end": 614
              }
            ],
            "declare": false,
            "start": 606,
            "end": 615
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "F",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 627,
                        "end": 628
                      },
                      "typeArguments": null,
                      "start": 627,
                      "end": 628
                    },
                    "start": 625,
                    "end": 628
                  },
                  "start": 624,
                  "end": 628
                },
                "init": null,
                "definite": false,
                "start": 624,
                "end": 628
              }
            ],
            "declare": false,
            "start": 620,
            "end": 629
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 675,
                "end": 676
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 679,
                "end": 680
              },
              "start": 675,
              "end": 680
            },
            "directive": null,
            "start": 675,
            "end": 681
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 686,
                "end": 687
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 690,
                "end": 691
              },
              "start": 686,
              "end": 691
            },
            "directive": null,
            "start": 686,
            "end": 692
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 697,
                "end": 698
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 701,
                "end": 702
              },
              "start": 697,
              "end": 702
            },
            "directive": null,
            "start": 697,
            "end": 703
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
                "start": 708,
                "end": 709
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 712,
                "end": 713
              },
              "start": 708,
              "end": 713
            },
            "directive": null,
            "start": 708,
            "end": 714
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
                "start": 719,
                "end": 720
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 723,
                "end": 724
              },
              "start": 719,
              "end": 724
            },
            "directive": null,
            "start": 719,
            "end": 725
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
                "start": 730,
                "end": 731
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 734,
                "end": 735
              },
              "start": 730,
              "end": 735
            },
            "directive": null,
            "start": 730,
            "end": 736
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
                "start": 741,
                "end": 742
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 745,
                "end": 746
              },
              "start": 741,
              "end": 746
            },
            "directive": null,
            "start": 741,
            "end": 747
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
                "start": 752,
                "end": 753
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 756,
                "end": 757
              },
              "start": 752,
              "end": 757
            },
            "directive": null,
            "start": 752,
            "end": 758
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
                "start": 763,
                "end": 764
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
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
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 785,
                "end": 786
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 789,
                "end": 790
              },
              "start": 785,
              "end": 790
            },
            "directive": null,
            "start": 785,
            "end": 791
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
                "start": 796,
                "end": 797
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 800,
                "end": 801
              },
              "start": 796,
              "end": 801
            },
            "directive": null,
            "start": 796,
            "end": 802
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
                "start": 807,
                "end": 808
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 811,
                "end": 812
              },
              "start": 807,
              "end": 812
            },
            "directive": null,
            "start": 807,
            "end": 813
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
                "start": 818,
                "end": 819
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 822,
                "end": 823
              },
              "start": 818,
              "end": 823
            },
            "directive": null,
            "start": 818,
            "end": 824
          }
        ],
        "start": 286,
        "end": 826
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 258,
      "end": 826
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SourceHasOptional",
        "optional": false,
        "typeAnnotation": null,
        "start": 838,
        "end": 855
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 887,
              "end": 888
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
                    "name": "opt",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 899,
                    "end": 902
                  },
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
                        "start": 904,
                        "end": 908
                      },
                      "typeArguments": null,
                      "start": 904,
                      "end": 908
                    },
                    "start": 902,
                    "end": 908
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 899,
                  "end": 908
                }
              ],
              "start": 889,
              "end": 914
            },
            "declare": false,
            "start": 877,
            "end": 914
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
                        "start": 926,
                        "end": 927
                      },
                      "typeArguments": null,
                      "start": 926,
                      "end": 927
                    },
                    "start": 924,
                    "end": 927
                  },
                  "start": 923,
                  "end": 927
                },
                "init": null,
                "definite": false,
                "start": 923,
                "end": 927
              }
            ],
            "declare": false,
            "start": 919,
            "end": 928
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
                            "name": "opt",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 943,
                            "end": 946
                          },
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
                                "start": 948,
                                "end": 952
                              },
                              "typeArguments": null,
                              "start": 948,
                              "end": 952
                            },
                            "start": 946,
                            "end": 952
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 943,
                          "end": 953
                        }
                      ],
                      "start": 941,
                      "end": 955
                    },
                    "start": 939,
                    "end": 955
                  },
                  "start": 938,
                  "end": 955
                },
                "init": null,
                "definite": false,
                "start": 938,
                "end": 955
              }
            ],
            "declare": false,
            "start": 934,
            "end": 955
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
                  "typeAnnotation": null,
                  "start": 964,
                  "end": 965
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
                        "name": "opt",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 970,
                        "end": 973
                      },
                      "value": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 979,
                          "end": 983
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 975,
                        "end": 985
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 970,
                      "end": 985
                    }
                  ],
                  "start": 968,
                  "end": 987
                },
                "definite": false,
                "start": 964,
                "end": 987
              }
            ],
            "declare": false,
            "start": 960,
            "end": 987
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 1018,
              "end": 1019
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
                    "name": "other",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1030,
                    "end": 1035
                  },
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
                        "start": 1038,
                        "end": 1042
                      },
                      "typeArguments": null,
                      "start": 1038,
                      "end": 1042
                    },
                    "start": 1036,
                    "end": 1042
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1030,
                  "end": 1043
                }
              ],
              "start": 1020,
              "end": 1049
            },
            "declare": false,
            "start": 1008,
            "end": 1049
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 1064,
              "end": 1065
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
                    "name": "other",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1076,
                    "end": 1081
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1084,
                        "end": 1091
                      },
                      "typeArguments": null,
                      "start": 1084,
                      "end": 1091
                    },
                    "start": 1082,
                    "end": 1091
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1076,
                  "end": 1092
                }
              ],
              "start": 1066,
              "end": 1098
            },
            "declare": false,
            "start": 1054,
            "end": 1098
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 1113,
              "end": 1114
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
                    "name": "other",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1125,
                    "end": 1130
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1132,
                        "end": 1139
                      },
                      "typeArguments": null,
                      "start": 1132,
                      "end": 1139
                    },
                    "start": 1130,
                    "end": 1139
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1125,
                  "end": 1140
                }
              ],
              "start": 1115,
              "end": 1146
            },
            "declare": false,
            "start": 1103,
            "end": 1146
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
                        "start": 1158,
                        "end": 1159
                      },
                      "typeArguments": null,
                      "start": 1158,
                      "end": 1159
                    },
                    "start": 1156,
                    "end": 1159
                  },
                  "start": 1155,
                  "end": 1159
                },
                "init": null,
                "definite": false,
                "start": 1155,
                "end": 1159
              }
            ],
            "declare": false,
            "start": 1151,
            "end": 1160
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
                        "start": 1172,
                        "end": 1173
                      },
                      "typeArguments": null,
                      "start": 1172,
                      "end": 1173
                    },
                    "start": 1170,
                    "end": 1173
                  },
                  "start": 1169,
                  "end": 1173
                },
                "init": null,
                "definite": false,
                "start": 1169,
                "end": 1173
              }
            ],
            "declare": false,
            "start": 1165,
            "end": 1174
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "F",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1186,
                        "end": 1187
                      },
                      "typeArguments": null,
                      "start": 1186,
                      "end": 1187
                    },
                    "start": 1184,
                    "end": 1187
                  },
                  "start": 1183,
                  "end": 1187
                },
                "init": null,
                "definite": false,
                "start": 1183,
                "end": 1187
              }
            ],
            "declare": false,
            "start": 1179,
            "end": 1188
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1194,
                "end": 1195
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1198,
                "end": 1199
              },
              "start": 1194,
              "end": 1199
            },
            "directive": null,
            "start": 1194,
            "end": 1200
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1214,
                "end": 1215
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1218,
                "end": 1219
              },
              "start": 1214,
              "end": 1219
            },
            "directive": null,
            "start": 1214,
            "end": 1220
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1234,
                "end": 1235
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 1238,
                "end": 1239
              },
              "start": 1234,
              "end": 1239
            },
            "directive": null,
            "start": 1234,
            "end": 1240
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1254,
                "end": 1255
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1258,
                "end": 1259
              },
              "start": 1254,
              "end": 1259
            },
            "directive": null,
            "start": 1254,
            "end": 1260
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
                "start": 1272,
                "end": 1273
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1276,
                "end": 1277
              },
              "start": 1272,
              "end": 1277
            },
            "directive": null,
            "start": 1272,
            "end": 1278
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
                "start": 1292,
                "end": 1293
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1296,
                "end": 1297
              },
              "start": 1292,
              "end": 1297
            },
            "directive": null,
            "start": 1292,
            "end": 1298
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
                "start": 1312,
                "end": 1313
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 1316,
                "end": 1317
              },
              "start": 1312,
              "end": 1317
            },
            "directive": null,
            "start": 1312,
            "end": 1318
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
                "start": 1332,
                "end": 1333
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1336,
                "end": 1337
              },
              "start": 1332,
              "end": 1337
            },
            "directive": null,
            "start": 1332,
            "end": 1338
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
                "start": 1350,
                "end": 1351
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1354,
                "end": 1355
              },
              "start": 1350,
              "end": 1355
            },
            "directive": null,
            "start": 1350,
            "end": 1356
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
                "start": 1370,
                "end": 1371
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1374,
                "end": 1375
              },
              "start": 1370,
              "end": 1375
            },
            "directive": null,
            "start": 1370,
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
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1390,
                "end": 1391
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 1394,
                "end": 1395
              },
              "start": 1390,
              "end": 1395
            },
            "directive": null,
            "start": 1390,
            "end": 1396
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
                "start": 1410,
                "end": 1411
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1414,
                "end": 1415
              },
              "start": 1410,
              "end": 1415
            },
            "directive": null,
            "start": 1410,
            "end": 1416
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
                "start": 1427,
                "end": 1428
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1431,
                "end": 1432
              },
              "start": 1427,
              "end": 1432
            },
            "directive": null,
            "start": 1427,
            "end": 1433
          }
        ],
        "start": 856,
        "end": 1441
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 828,
      "end": 1441
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 137,
  "end": 1441
}
```
