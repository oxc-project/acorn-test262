__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 117,
  "end": 1516,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 117,
      "end": 770,
      "id": {
        "type": "Identifier",
        "start": 124,
        "end": 138,
        "name": "TargetIsPublic",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 139,
        "end": 770,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 160,
            "end": 206,
            "id": {
              "type": "Identifier",
              "start": 166,
              "end": 170,
              "name": "Base",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 171,
              "end": 206,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 181,
                  "end": 200,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 188,
                    "end": 191,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 191,
                    "end": 199,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 193,
                      "end": 199
                    }
                  },
                  "accessibility": "public"
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 212,
            "end": 252,
            "id": {
              "type": "Identifier",
              "start": 222,
              "end": 223,
              "name": "I",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 224,
              "end": 252,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 234,
                  "end": 246,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 234,
                    "end": 237,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 237,
                    "end": 245,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 239,
                      "end": 245
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 258,
            "end": 281,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 262,
                "end": 281,
                "id": {
                  "type": "Identifier",
                  "start": 262,
                  "end": 281,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 263,
                    "end": 281,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 265,
                      "end": 281,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 267,
                          "end": 279,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 267,
                            "end": 270,
                            "name": "foo",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 270,
                            "end": 278,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 272,
                              "end": 278
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 286,
            "end": 298,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 290,
                "end": 297,
                "id": {
                  "type": "Identifier",
                  "start": 290,
                  "end": 297,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 291,
                    "end": 297,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 293,
                      "end": 297,
                      "typeName": {
                        "type": "Identifier",
                        "start": 293,
                        "end": 297,
                        "name": "Base",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 303,
            "end": 312,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 307,
                "end": 311,
                "id": {
                  "type": "Identifier",
                  "start": 307,
                  "end": 311,
                  "name": "i",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 308,
                    "end": 311,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 310,
                      "end": 311,
                      "typeName": {
                        "type": "Identifier",
                        "start": 310,
                        "end": 311,
                        "name": "I",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 333,
            "end": 376,
            "id": {
              "type": "Identifier",
              "start": 339,
              "end": 340,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 341,
              "end": 376,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 351,
                  "end": 370,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 358,
                    "end": 361,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 361,
                    "end": 369,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 363,
                      "end": 369
                    }
                  },
                  "accessibility": "public"
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 382,
            "end": 426,
            "id": {
              "type": "Identifier",
              "start": 388,
              "end": 389,
              "name": "E",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 390,
              "end": 426,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 400,
                  "end": 420,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 408,
                    "end": 411,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 411,
                    "end": 419,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 413,
                      "end": 419
                    }
                  },
                  "accessibility": "private"
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "VariableDeclaration",
            "start": 431,
            "end": 440,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 435,
                "end": 439,
                "id": {
                  "type": "Identifier",
                  "start": 435,
                  "end": 439,
                  "name": "d",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 436,
                    "end": 439,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 438,
                      "end": 439,
                      "typeName": {
                        "type": "Identifier",
                        "start": 438,
                        "end": 439,
                        "name": "D",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 445,
            "end": 454,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 449,
                "end": 453,
                "id": {
                  "type": "Identifier",
                  "start": 449,
                  "end": 453,
                  "name": "e",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 450,
                    "end": 453,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 452,
                      "end": 453,
                      "typeName": {
                        "type": "Identifier",
                        "start": 452,
                        "end": 453,
                        "name": "E",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 460,
            "end": 466,
            "expression": {
              "type": "AssignmentExpression",
              "start": 460,
              "end": 465,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 460,
                "end": 461,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 464,
                "end": 465,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 471,
            "end": 477,
            "expression": {
              "type": "AssignmentExpression",
              "start": 471,
              "end": 476,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 471,
                "end": 472,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 475,
                "end": 476,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 482,
            "end": 488,
            "expression": {
              "type": "AssignmentExpression",
              "start": 482,
              "end": 487,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 482,
                "end": 483,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 486,
                "end": 487,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 493,
            "end": 499,
            "expression": {
              "type": "AssignmentExpression",
              "start": 493,
              "end": 498,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 493,
                "end": 494,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 497,
                "end": 498,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 514,
            "end": 520,
            "expression": {
              "type": "AssignmentExpression",
              "start": 514,
              "end": 519,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 514,
                "end": 515,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 518,
                "end": 519,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 525,
            "end": 531,
            "expression": {
              "type": "AssignmentExpression",
              "start": 525,
              "end": 530,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 525,
                "end": 526,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 529,
                "end": 530,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 536,
            "end": 542,
            "expression": {
              "type": "AssignmentExpression",
              "start": 536,
              "end": 541,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 536,
                "end": 537,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 540,
                "end": 541,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 547,
            "end": 553,
            "expression": {
              "type": "AssignmentExpression",
              "start": 547,
              "end": 552,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 547,
                "end": 548,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 551,
                "end": 552,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 568,
            "end": 574,
            "expression": {
              "type": "AssignmentExpression",
              "start": 568,
              "end": 573,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 568,
                "end": 569,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 572,
                "end": 573,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 579,
            "end": 585,
            "expression": {
              "type": "AssignmentExpression",
              "start": 579,
              "end": 584,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 579,
                "end": 580,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 583,
                "end": 584,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 590,
            "end": 596,
            "expression": {
              "type": "AssignmentExpression",
              "start": 590,
              "end": 595,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 590,
                "end": 591,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 594,
                "end": 595,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 601,
            "end": 607,
            "expression": {
              "type": "AssignmentExpression",
              "start": 601,
              "end": 606,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 601,
                "end": 602,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 605,
                "end": 606,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 622,
            "end": 628,
            "expression": {
              "type": "AssignmentExpression",
              "start": 622,
              "end": 627,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 622,
                "end": 623,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 626,
                "end": 627,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 633,
            "end": 639,
            "expression": {
              "type": "AssignmentExpression",
              "start": 633,
              "end": 638,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 633,
                "end": 634,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 637,
                "end": 638,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 644,
            "end": 650,
            "expression": {
              "type": "AssignmentExpression",
              "start": 644,
              "end": 649,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 644,
                "end": 645,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 648,
                "end": 649,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 655,
            "end": 661,
            "expression": {
              "type": "AssignmentExpression",
              "start": 655,
              "end": 660,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 655,
                "end": 656,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 659,
                "end": 660,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 676,
            "end": 682,
            "expression": {
              "type": "AssignmentExpression",
              "start": 676,
              "end": 681,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 676,
                "end": 677,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 680,
                "end": 681,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 697,
            "end": 703,
            "expression": {
              "type": "AssignmentExpression",
              "start": 697,
              "end": 702,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 697,
                "end": 698,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 701,
                "end": 702,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 718,
            "end": 724,
            "expression": {
              "type": "AssignmentExpression",
              "start": 718,
              "end": 723,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 718,
                "end": 719,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 722,
                "end": 723,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 739,
            "end": 745,
            "expression": {
              "type": "AssignmentExpression",
              "start": 739,
              "end": 744,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 739,
                "end": 740,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 743,
                "end": 744,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 760,
            "end": 766,
            "expression": {
              "type": "AssignmentExpression",
              "start": 760,
              "end": 765,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 760,
                "end": 761,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 764,
                "end": 765,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 772,
      "end": 1516,
      "id": {
        "type": "Identifier",
        "start": 779,
        "end": 793,
        "name": "TargetIsPublic",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 794,
        "end": 1516,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 815,
            "end": 862,
            "id": {
              "type": "Identifier",
              "start": 821,
              "end": 825,
              "name": "Base",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 826,
              "end": 862,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 836,
                  "end": 856,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 844,
                    "end": 847,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 847,
                    "end": 855,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 849,
                      "end": 855
                    }
                  },
                  "accessibility": "private"
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 868,
            "end": 900,
            "id": {
              "type": "Identifier",
              "start": 878,
              "end": 879,
              "name": "I",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 888,
                "end": 892,
                "expression": {
                  "type": "Identifier",
                  "start": 888,
                  "end": 892,
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 893,
              "end": 900,
              "body": []
            },
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 906,
            "end": 929,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 910,
                "end": 929,
                "id": {
                  "type": "Identifier",
                  "start": 910,
                  "end": 929,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 911,
                    "end": 929,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 913,
                      "end": 929,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 915,
                          "end": 927,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 915,
                            "end": 918,
                            "name": "foo",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 918,
                            "end": 926,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 920,
                              "end": 926
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 934,
            "end": 946,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 938,
                "end": 945,
                "id": {
                  "type": "Identifier",
                  "start": 938,
                  "end": 945,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 939,
                    "end": 945,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 941,
                      "end": 945,
                      "typeName": {
                        "type": "Identifier",
                        "start": 941,
                        "end": 945,
                        "name": "Base",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 951,
            "end": 960,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 955,
                "end": 959,
                "id": {
                  "type": "Identifier",
                  "start": 955,
                  "end": 959,
                  "name": "i",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 956,
                    "end": 959,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 958,
                      "end": 959,
                      "typeName": {
                        "type": "Identifier",
                        "start": 958,
                        "end": 959,
                        "name": "I",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 981,
            "end": 1024,
            "id": {
              "type": "Identifier",
              "start": 987,
              "end": 988,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 989,
              "end": 1024,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 999,
                  "end": 1018,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1006,
                    "end": 1009,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1009,
                    "end": 1017,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1011,
                      "end": 1017
                    }
                  },
                  "accessibility": "public"
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 1030,
            "end": 1074,
            "id": {
              "type": "Identifier",
              "start": 1036,
              "end": 1037,
              "name": "E",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 1038,
              "end": 1074,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 1048,
                  "end": 1068,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1056,
                    "end": 1059,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1059,
                    "end": 1067,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1061,
                      "end": 1067
                    }
                  },
                  "accessibility": "private"
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "VariableDeclaration",
            "start": 1080,
            "end": 1089,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1084,
                "end": 1088,
                "id": {
                  "type": "Identifier",
                  "start": 1084,
                  "end": 1088,
                  "name": "d",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1085,
                    "end": 1088,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1087,
                      "end": 1088,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1087,
                        "end": 1088,
                        "name": "D",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1094,
            "end": 1103,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1098,
                "end": 1102,
                "id": {
                  "type": "Identifier",
                  "start": 1098,
                  "end": 1102,
                  "name": "e",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1099,
                    "end": 1102,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1101,
                      "end": 1102,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1101,
                        "end": 1102,
                        "name": "E",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1109,
            "end": 1115,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1109,
              "end": 1114,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1109,
                "end": 1110,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1113,
                "end": 1114,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1129,
            "end": 1135,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1129,
              "end": 1134,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1129,
                "end": 1130,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1133,
                "end": 1134,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1149,
            "end": 1155,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1149,
              "end": 1154,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1149,
                "end": 1150,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1153,
                "end": 1154,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1160,
            "end": 1166,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1160,
              "end": 1165,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1160,
                "end": 1161,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1164,
                "end": 1165,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1181,
            "end": 1187,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1181,
              "end": 1186,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1181,
                "end": 1182,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1185,
                "end": 1186,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1201,
            "end": 1207,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1201,
              "end": 1206,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1201,
                "end": 1202,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1205,
                "end": 1206,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1212,
            "end": 1218,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1212,
              "end": 1217,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1212,
                "end": 1213,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1216,
                "end": 1217,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1232,
            "end": 1238,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1232,
              "end": 1237,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1232,
                "end": 1233,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1236,
                "end": 1237,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1252,
            "end": 1258,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1252,
              "end": 1257,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1252,
                "end": 1253,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1256,
                "end": 1257,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1268,
            "end": 1274,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1268,
              "end": 1273,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1268,
                "end": 1269,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1272,
                "end": 1273,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1288,
            "end": 1294,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1288,
              "end": 1293,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1288,
                "end": 1289,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1292,
                "end": 1293,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1299,
            "end": 1305,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1299,
              "end": 1304,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1299,
                "end": 1300,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1303,
                "end": 1304,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1319,
            "end": 1325,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1319,
              "end": 1324,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1319,
                "end": 1320,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1323,
                "end": 1324,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1339,
            "end": 1345,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1339,
              "end": 1344,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1339,
                "end": 1340,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1343,
                "end": 1344,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1351,
            "end": 1357,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1351,
              "end": 1356,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1351,
                "end": 1352,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1355,
                "end": 1356,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1362,
            "end": 1368,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1362,
              "end": 1367,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1362,
                "end": 1363,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1366,
                "end": 1367,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1382,
            "end": 1388,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1382,
              "end": 1387,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1382,
                "end": 1383,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1386,
                "end": 1387,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1402,
            "end": 1408,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1402,
              "end": 1407,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1402,
                "end": 1403,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1406,
                "end": 1407,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1423,
            "end": 1429,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1423,
              "end": 1428,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1423,
                "end": 1424,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1427,
                "end": 1428,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1444,
            "end": 1450,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1444,
              "end": 1449,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1444,
                "end": 1445,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1448,
                "end": 1449,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1465,
            "end": 1471,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1465,
              "end": 1470,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1465,
                "end": 1466,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1469,
                "end": 1470,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1486,
            "end": 1492,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1486,
              "end": 1491,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1486,
                "end": 1487,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1490,
                "end": 1491,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1507,
            "end": 1513,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1507,
              "end": 1512,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1507,
                "end": 1508,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1511,
                "end": 1512,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
