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
        "start": 265,
        "end": 282
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
              "start": 314,
              "end": 315
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
                    "start": 326,
                    "end": 329
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
                        "start": 332,
                        "end": 336
                      },
                      "typeArguments": null,
                      "start": 332,
                      "end": 336
                    },
                    "start": 330,
                    "end": 336
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 326,
                  "end": 336
                }
              ],
              "start": 316,
              "end": 342
            },
            "declare": false,
            "start": 304,
            "end": 342
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
                        "start": 354,
                        "end": 355
                      },
                      "typeArguments": null,
                      "start": 354,
                      "end": 355
                    },
                    "start": 352,
                    "end": 355
                  },
                  "start": 351,
                  "end": 355
                },
                "init": null,
                "definite": false,
                "start": 351,
                "end": 355
              }
            ],
            "declare": false,
            "start": 347,
            "end": 356
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
                            "start": 371,
                            "end": 374
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
                                "start": 377,
                                "end": 381
                              },
                              "typeArguments": null,
                              "start": 377,
                              "end": 381
                            },
                            "start": 375,
                            "end": 381
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 371,
                          "end": 382
                        }
                      ],
                      "start": 369,
                      "end": 384
                    },
                    "start": 367,
                    "end": 384
                  },
                  "start": 366,
                  "end": 384
                },
                "init": null,
                "definite": false,
                "start": 366,
                "end": 384
              }
            ],
            "declare": false,
            "start": 362,
            "end": 384
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
                        "start": 403,
                        "end": 404
                      },
                      "typeArguments": null,
                      "start": 396,
                      "end": 404
                    },
                    "start": 394,
                    "end": 404
                  },
                  "start": 393,
                  "end": 404
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
                        "start": 409,
                        "end": 412
                      },
                      "value": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 418,
                          "end": 422
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 414,
                        "end": 424
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 409,
                      "end": 424
                    }
                  ],
                  "start": 407,
                  "end": 426
                },
                "definite": false,
                "start": 393,
                "end": 426
              }
            ],
            "declare": false,
            "start": 389,
            "end": 426
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 457,
              "end": 458
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
                    "start": 469,
                    "end": 474
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
                        "start": 476,
                        "end": 480
                      },
                      "typeArguments": null,
                      "start": 476,
                      "end": 480
                    },
                    "start": 474,
                    "end": 480
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 469,
                  "end": 481
                }
              ],
              "start": 459,
              "end": 487
            },
            "declare": false,
            "start": 447,
            "end": 487
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 502,
              "end": 503
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
                    "start": 514,
                    "end": 519
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
                        "start": 521,
                        "end": 528
                      },
                      "typeArguments": null,
                      "start": 521,
                      "end": 528
                    },
                    "start": 519,
                    "end": 528
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 514,
                  "end": 529
                }
              ],
              "start": 504,
              "end": 535
            },
            "declare": false,
            "start": 492,
            "end": 535
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 550,
              "end": 551
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
                    "start": 562,
                    "end": 567
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
                        "start": 570,
                        "end": 577
                      },
                      "typeArguments": null,
                      "start": 570,
                      "end": 577
                    },
                    "start": 568,
                    "end": 577
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 562,
                  "end": 578
                }
              ],
              "start": 552,
              "end": 584
            },
            "declare": false,
            "start": 540,
            "end": 584
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
                        "start": 596,
                        "end": 597
                      },
                      "typeArguments": null,
                      "start": 596,
                      "end": 597
                    },
                    "start": 594,
                    "end": 597
                  },
                  "start": 593,
                  "end": 597
                },
                "init": null,
                "definite": false,
                "start": 593,
                "end": 597
              }
            ],
            "declare": false,
            "start": 589,
            "end": 598
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
                        "start": 610,
                        "end": 611
                      },
                      "typeArguments": null,
                      "start": 610,
                      "end": 611
                    },
                    "start": 608,
                    "end": 611
                  },
                  "start": 607,
                  "end": 611
                },
                "init": null,
                "definite": false,
                "start": 607,
                "end": 611
              }
            ],
            "declare": false,
            "start": 603,
            "end": 612
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
                        "start": 624,
                        "end": 625
                      },
                      "typeArguments": null,
                      "start": 624,
                      "end": 625
                    },
                    "start": 622,
                    "end": 625
                  },
                  "start": 621,
                  "end": 625
                },
                "init": null,
                "definite": false,
                "start": 621,
                "end": 625
              }
            ],
            "declare": false,
            "start": 617,
            "end": 626
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
                "start": 672,
                "end": 673
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 676,
                "end": 677
              },
              "start": 672,
              "end": 677
            },
            "directive": null,
            "start": 672,
            "end": 678
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
                "start": 683,
                "end": 684
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 687,
                "end": 688
              },
              "start": 683,
              "end": 688
            },
            "directive": null,
            "start": 683,
            "end": 689
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
                "start": 694,
                "end": 695
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 698,
                "end": 699
              },
              "start": 694,
              "end": 699
            },
            "directive": null,
            "start": 694,
            "end": 700
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
                "start": 705,
                "end": 706
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 709,
                "end": 710
              },
              "start": 705,
              "end": 710
            },
            "directive": null,
            "start": 705,
            "end": 711
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
                "start": 716,
                "end": 717
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 720,
                "end": 721
              },
              "start": 716,
              "end": 721
            },
            "directive": null,
            "start": 716,
            "end": 722
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
                "start": 727,
                "end": 728
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 731,
                "end": 732
              },
              "start": 727,
              "end": 732
            },
            "directive": null,
            "start": 727,
            "end": 733
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
                "start": 738,
                "end": 739
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 742,
                "end": 743
              },
              "start": 738,
              "end": 743
            },
            "directive": null,
            "start": 738,
            "end": 744
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
                "start": 749,
                "end": 750
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 753,
                "end": 754
              },
              "start": 749,
              "end": 754
            },
            "directive": null,
            "start": 749,
            "end": 755
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
                "start": 760,
                "end": 761
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 764,
                "end": 765
              },
              "start": 760,
              "end": 765
            },
            "directive": null,
            "start": 760,
            "end": 766
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
                "start": 782,
                "end": 783
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 786,
                "end": 787
              },
              "start": 782,
              "end": 787
            },
            "directive": null,
            "start": 782,
            "end": 788
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
                "start": 793,
                "end": 794
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 797,
                "end": 798
              },
              "start": 793,
              "end": 798
            },
            "directive": null,
            "start": 793,
            "end": 799
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
                "start": 804,
                "end": 805
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 808,
                "end": 809
              },
              "start": 804,
              "end": 809
            },
            "directive": null,
            "start": 804,
            "end": 810
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
                "start": 815,
                "end": 816
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 819,
                "end": 820
              },
              "start": 815,
              "end": 820
            },
            "directive": null,
            "start": 815,
            "end": 821
          }
        ],
        "start": 283,
        "end": 823
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 258,
      "end": 823
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SourceHasOptional",
        "optional": false,
        "typeAnnotation": null,
        "start": 832,
        "end": 849
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
              "start": 881,
              "end": 882
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
                    "start": 893,
                    "end": 896
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
                        "start": 898,
                        "end": 902
                      },
                      "typeArguments": null,
                      "start": 898,
                      "end": 902
                    },
                    "start": 896,
                    "end": 902
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 893,
                  "end": 902
                }
              ],
              "start": 883,
              "end": 908
            },
            "declare": false,
            "start": 871,
            "end": 908
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
                        "start": 920,
                        "end": 921
                      },
                      "typeArguments": null,
                      "start": 920,
                      "end": 921
                    },
                    "start": 918,
                    "end": 921
                  },
                  "start": 917,
                  "end": 921
                },
                "init": null,
                "definite": false,
                "start": 917,
                "end": 921
              }
            ],
            "declare": false,
            "start": 913,
            "end": 922
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
                            "start": 937,
                            "end": 940
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
                                "start": 942,
                                "end": 946
                              },
                              "typeArguments": null,
                              "start": 942,
                              "end": 946
                            },
                            "start": 940,
                            "end": 946
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 937,
                          "end": 947
                        }
                      ],
                      "start": 935,
                      "end": 949
                    },
                    "start": 933,
                    "end": 949
                  },
                  "start": 932,
                  "end": 949
                },
                "init": null,
                "definite": false,
                "start": 932,
                "end": 949
              }
            ],
            "declare": false,
            "start": 928,
            "end": 949
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
                  "start": 958,
                  "end": 959
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
                        "start": 964,
                        "end": 967
                      },
                      "value": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 973,
                          "end": 977
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 969,
                        "end": 979
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 964,
                      "end": 979
                    }
                  ],
                  "start": 962,
                  "end": 981
                },
                "definite": false,
                "start": 958,
                "end": 981
              }
            ],
            "declare": false,
            "start": 954,
            "end": 981
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 1012,
              "end": 1013
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
                    "start": 1024,
                    "end": 1029
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
                        "start": 1032,
                        "end": 1036
                      },
                      "typeArguments": null,
                      "start": 1032,
                      "end": 1036
                    },
                    "start": 1030,
                    "end": 1036
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1024,
                  "end": 1037
                }
              ],
              "start": 1014,
              "end": 1043
            },
            "declare": false,
            "start": 1002,
            "end": 1043
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 1058,
              "end": 1059
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
                    "start": 1070,
                    "end": 1075
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
                        "start": 1078,
                        "end": 1085
                      },
                      "typeArguments": null,
                      "start": 1078,
                      "end": 1085
                    },
                    "start": 1076,
                    "end": 1085
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1070,
                  "end": 1086
                }
              ],
              "start": 1060,
              "end": 1092
            },
            "declare": false,
            "start": 1048,
            "end": 1092
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 1107,
              "end": 1108
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
                    "start": 1119,
                    "end": 1124
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
                        "start": 1126,
                        "end": 1133
                      },
                      "typeArguments": null,
                      "start": 1126,
                      "end": 1133
                    },
                    "start": 1124,
                    "end": 1133
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1119,
                  "end": 1134
                }
              ],
              "start": 1109,
              "end": 1140
            },
            "declare": false,
            "start": 1097,
            "end": 1140
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
                        "start": 1152,
                        "end": 1153
                      },
                      "typeArguments": null,
                      "start": 1152,
                      "end": 1153
                    },
                    "start": 1150,
                    "end": 1153
                  },
                  "start": 1149,
                  "end": 1153
                },
                "init": null,
                "definite": false,
                "start": 1149,
                "end": 1153
              }
            ],
            "declare": false,
            "start": 1145,
            "end": 1154
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
                "init": null,
                "definite": false,
                "start": 1163,
                "end": 1167
              }
            ],
            "declare": false,
            "start": 1159,
            "end": 1168
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
                        "start": 1180,
                        "end": 1181
                      },
                      "typeArguments": null,
                      "start": 1180,
                      "end": 1181
                    },
                    "start": 1178,
                    "end": 1181
                  },
                  "start": 1177,
                  "end": 1181
                },
                "init": null,
                "definite": false,
                "start": 1177,
                "end": 1181
              }
            ],
            "declare": false,
            "start": 1173,
            "end": 1182
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
                "start": 1188,
                "end": 1189
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1192,
                "end": 1193
              },
              "start": 1188,
              "end": 1193
            },
            "directive": null,
            "start": 1188,
            "end": 1194
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
                "start": 1208,
                "end": 1209
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1212,
                "end": 1213
              },
              "start": 1208,
              "end": 1213
            },
            "directive": null,
            "start": 1208,
            "end": 1214
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
                "start": 1228,
                "end": 1229
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 1232,
                "end": 1233
              },
              "start": 1228,
              "end": 1233
            },
            "directive": null,
            "start": 1228,
            "end": 1234
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
                "start": 1248,
                "end": 1249
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1252,
                "end": 1253
              },
              "start": 1248,
              "end": 1253
            },
            "directive": null,
            "start": 1248,
            "end": 1254
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
                "start": 1266,
                "end": 1267
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1270,
                "end": 1271
              },
              "start": 1266,
              "end": 1271
            },
            "directive": null,
            "start": 1266,
            "end": 1272
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
                "start": 1286,
                "end": 1287
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1290,
                "end": 1291
              },
              "start": 1286,
              "end": 1291
            },
            "directive": null,
            "start": 1286,
            "end": 1292
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
                "start": 1306,
                "end": 1307
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 1310,
                "end": 1311
              },
              "start": 1306,
              "end": 1311
            },
            "directive": null,
            "start": 1306,
            "end": 1312
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
                "start": 1326,
                "end": 1327
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1330,
                "end": 1331
              },
              "start": 1326,
              "end": 1331
            },
            "directive": null,
            "start": 1326,
            "end": 1332
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
                "start": 1344,
                "end": 1345
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1348,
                "end": 1349
              },
              "start": 1344,
              "end": 1349
            },
            "directive": null,
            "start": 1344,
            "end": 1350
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
                "start": 1364,
                "end": 1365
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1368,
                "end": 1369
              },
              "start": 1364,
              "end": 1369
            },
            "directive": null,
            "start": 1364,
            "end": 1370
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
                "start": 1384,
                "end": 1385
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 1388,
                "end": 1389
              },
              "start": 1384,
              "end": 1389
            },
            "directive": null,
            "start": 1384,
            "end": 1390
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
                "start": 1404,
                "end": 1405
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1408,
                "end": 1409
              },
              "start": 1404,
              "end": 1409
            },
            "directive": null,
            "start": 1404,
            "end": 1410
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
                "start": 1421,
                "end": 1422
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1425,
                "end": 1426
              },
              "start": 1421,
              "end": 1426
            },
            "directive": null,
            "start": 1421,
            "end": 1427
          }
        ],
        "start": 850,
        "end": 1435
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 825,
      "end": 1435
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 137,
  "end": 1435
}
```
