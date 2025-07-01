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
        "start": 74,
        "end": 78
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
              "start": 81,
              "end": 84
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 86,
                "end": 92
              },
              "start": 84,
              "end": 92
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
            "start": 81,
            "end": 93
          }
        ],
        "start": 79,
        "end": 95
      },
      "abstract": false,
      "declare": false,
      "start": 68,
      "end": 95
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
        "start": 102,
        "end": 109
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 118,
        "end": 122
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
              "start": 125,
              "end": 128
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 130,
                "end": 136
              },
              "start": 128,
              "end": 136
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
            "start": 125,
            "end": 137
          }
        ],
        "start": 123,
        "end": 139
      },
      "abstract": false,
      "declare": false,
      "start": 96,
      "end": 139
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
        "start": 146,
        "end": 154
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 163,
        "end": 170
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
              "start": 173,
              "end": 176
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 178,
                "end": 184
              },
              "start": 176,
              "end": 184
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
            "start": 173,
            "end": 185
          }
        ],
        "start": 171,
        "end": 187
      },
      "abstract": false,
      "declare": false,
      "start": 140,
      "end": 187
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TargetHasOptional",
        "optional": false,
        "typeAnnotation": null,
        "start": 196,
        "end": 213
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
              "start": 245,
              "end": 246
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
                    "start": 257,
                    "end": 260
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
                        "start": 263,
                        "end": 267
                      },
                      "typeArguments": null,
                      "start": 263,
                      "end": 267
                    },
                    "start": 261,
                    "end": 267
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 257,
                  "end": 267
                }
              ],
              "start": 247,
              "end": 273
            },
            "declare": false,
            "start": 235,
            "end": 273
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
                        "start": 285,
                        "end": 286
                      },
                      "typeArguments": null,
                      "start": 285,
                      "end": 286
                    },
                    "start": 283,
                    "end": 286
                  },
                  "start": 282,
                  "end": 286
                },
                "init": null,
                "definite": false,
                "start": 282,
                "end": 286
              }
            ],
            "declare": false,
            "start": 278,
            "end": 287
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
                            "start": 302,
                            "end": 305
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
                                "start": 308,
                                "end": 312
                              },
                              "typeArguments": null,
                              "start": 308,
                              "end": 312
                            },
                            "start": 306,
                            "end": 312
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 302,
                          "end": 313
                        }
                      ],
                      "start": 300,
                      "end": 315
                    },
                    "start": 298,
                    "end": 315
                  },
                  "start": 297,
                  "end": 315
                },
                "init": null,
                "definite": false,
                "start": 297,
                "end": 315
              }
            ],
            "declare": false,
            "start": 293,
            "end": 315
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
                        "start": 334,
                        "end": 335
                      },
                      "typeArguments": null,
                      "start": 327,
                      "end": 335
                    },
                    "start": 325,
                    "end": 335
                  },
                  "start": 324,
                  "end": 335
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
                        "start": 340,
                        "end": 343
                      },
                      "value": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 349,
                          "end": 353
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 345,
                        "end": 355
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 340,
                      "end": 355
                    }
                  ],
                  "start": 338,
                  "end": 357
                },
                "definite": false,
                "start": 324,
                "end": 357
              }
            ],
            "declare": false,
            "start": 320,
            "end": 357
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 388,
              "end": 389
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
                    "start": 400,
                    "end": 403
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
                        "start": 405,
                        "end": 409
                      },
                      "typeArguments": null,
                      "start": 405,
                      "end": 409
                    },
                    "start": 403,
                    "end": 409
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 400,
                  "end": 410
                }
              ],
              "start": 390,
              "end": 416
            },
            "declare": false,
            "start": 378,
            "end": 416
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 431,
              "end": 432
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
                    "start": 443,
                    "end": 446
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
                        "start": 448,
                        "end": 455
                      },
                      "typeArguments": null,
                      "start": 448,
                      "end": 455
                    },
                    "start": 446,
                    "end": 455
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 443,
                  "end": 456
                }
              ],
              "start": 433,
              "end": 462
            },
            "declare": false,
            "start": 421,
            "end": 462
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 477,
              "end": 478
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
                    "start": 489,
                    "end": 492
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
                        "start": 495,
                        "end": 502
                      },
                      "typeArguments": null,
                      "start": 495,
                      "end": 502
                    },
                    "start": 493,
                    "end": 502
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 489,
                  "end": 503
                }
              ],
              "start": 479,
              "end": 509
            },
            "declare": false,
            "start": 467,
            "end": 509
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
                        "start": 521,
                        "end": 522
                      },
                      "typeArguments": null,
                      "start": 521,
                      "end": 522
                    },
                    "start": 519,
                    "end": 522
                  },
                  "start": 518,
                  "end": 522
                },
                "init": null,
                "definite": false,
                "start": 518,
                "end": 522
              }
            ],
            "declare": false,
            "start": 514,
            "end": 523
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
                        "start": 535,
                        "end": 536
                      },
                      "typeArguments": null,
                      "start": 535,
                      "end": 536
                    },
                    "start": 533,
                    "end": 536
                  },
                  "start": 532,
                  "end": 536
                },
                "init": null,
                "definite": false,
                "start": 532,
                "end": 536
              }
            ],
            "declare": false,
            "start": 528,
            "end": 537
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
                        "start": 549,
                        "end": 550
                      },
                      "typeArguments": null,
                      "start": 549,
                      "end": 550
                    },
                    "start": 547,
                    "end": 550
                  },
                  "start": 546,
                  "end": 550
                },
                "init": null,
                "definite": false,
                "start": 546,
                "end": 550
              }
            ],
            "declare": false,
            "start": 542,
            "end": 551
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
                "start": 571,
                "end": 572
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
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
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 582,
                "end": 583
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
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
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 593,
                "end": 594
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
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
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 604,
                "end": 605
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
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
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 616,
                "end": 617
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 620,
                "end": 621
              },
              "start": 616,
              "end": 621
            },
            "directive": null,
            "start": 616,
            "end": 622
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
                "start": 627,
                "end": 628
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 631,
                "end": 632
              },
              "start": 627,
              "end": 632
            },
            "directive": null,
            "start": 627,
            "end": 633
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
                "start": 638,
                "end": 639
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 642,
                "end": 643
              },
              "start": 638,
              "end": 643
            },
            "directive": null,
            "start": 638,
            "end": 644
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
                "start": 649,
                "end": 650
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 653,
                "end": 654
              },
              "start": 649,
              "end": 654
            },
            "directive": null,
            "start": 649,
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
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 661,
                "end": 662
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 665,
                "end": 666
              },
              "start": 661,
              "end": 666
            },
            "directive": null,
            "start": 661,
            "end": 667
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
                "start": 672,
                "end": 673
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
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
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 683,
                "end": 684
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
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
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 694,
                "end": 695
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
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
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 705,
                "end": 706
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
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
          }
        ],
        "start": 214,
        "end": 713
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 189,
      "end": 713
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SourceHasOptional",
        "optional": false,
        "typeAnnotation": null,
        "start": 722,
        "end": 739
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
              "start": 771,
              "end": 772
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
                    "start": 783,
                    "end": 786
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
                        "start": 788,
                        "end": 792
                      },
                      "typeArguments": null,
                      "start": 788,
                      "end": 792
                    },
                    "start": 786,
                    "end": 792
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 783,
                  "end": 792
                }
              ],
              "start": 773,
              "end": 798
            },
            "declare": false,
            "start": 761,
            "end": 798
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
                        "start": 810,
                        "end": 811
                      },
                      "typeArguments": null,
                      "start": 810,
                      "end": 811
                    },
                    "start": 808,
                    "end": 811
                  },
                  "start": 807,
                  "end": 811
                },
                "init": null,
                "definite": false,
                "start": 807,
                "end": 811
              }
            ],
            "declare": false,
            "start": 803,
            "end": 812
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
                            "start": 827,
                            "end": 830
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
                                "start": 832,
                                "end": 836
                              },
                              "typeArguments": null,
                              "start": 832,
                              "end": 836
                            },
                            "start": 830,
                            "end": 836
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 827,
                          "end": 837
                        }
                      ],
                      "start": 825,
                      "end": 839
                    },
                    "start": 823,
                    "end": 839
                  },
                  "start": 822,
                  "end": 839
                },
                "init": null,
                "definite": false,
                "start": 822,
                "end": 839
              }
            ],
            "declare": false,
            "start": 818,
            "end": 839
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
                  "start": 848,
                  "end": 849
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
                        "start": 854,
                        "end": 857
                      },
                      "value": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 863,
                          "end": 867
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 859,
                        "end": 869
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 854,
                      "end": 869
                    }
                  ],
                  "start": 852,
                  "end": 871
                },
                "definite": false,
                "start": 848,
                "end": 871
              }
            ],
            "declare": false,
            "start": 844,
            "end": 871
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 902,
              "end": 903
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
                    "start": 914,
                    "end": 917
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
                        "start": 920,
                        "end": 924
                      },
                      "typeArguments": null,
                      "start": 920,
                      "end": 924
                    },
                    "start": 918,
                    "end": 924
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 914,
                  "end": 925
                }
              ],
              "start": 904,
              "end": 931
            },
            "declare": false,
            "start": 892,
            "end": 931
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 946,
              "end": 947
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
                    "start": 958,
                    "end": 961
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
                        "start": 964,
                        "end": 971
                      },
                      "typeArguments": null,
                      "start": 964,
                      "end": 971
                    },
                    "start": 962,
                    "end": 971
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 958,
                  "end": 972
                }
              ],
              "start": 948,
              "end": 978
            },
            "declare": false,
            "start": 936,
            "end": 978
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 993,
              "end": 994
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
                    "start": 1005,
                    "end": 1008
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
                        "start": 1010,
                        "end": 1017
                      },
                      "typeArguments": null,
                      "start": 1010,
                      "end": 1017
                    },
                    "start": 1008,
                    "end": 1017
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1005,
                  "end": 1018
                }
              ],
              "start": 995,
              "end": 1024
            },
            "declare": false,
            "start": 983,
            "end": 1024
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
                        "start": 1036,
                        "end": 1037
                      },
                      "typeArguments": null,
                      "start": 1036,
                      "end": 1037
                    },
                    "start": 1034,
                    "end": 1037
                  },
                  "start": 1033,
                  "end": 1037
                },
                "init": null,
                "definite": false,
                "start": 1033,
                "end": 1037
              }
            ],
            "declare": false,
            "start": 1029,
            "end": 1038
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
                        "start": 1050,
                        "end": 1051
                      },
                      "typeArguments": null,
                      "start": 1050,
                      "end": 1051
                    },
                    "start": 1048,
                    "end": 1051
                  },
                  "start": 1047,
                  "end": 1051
                },
                "init": null,
                "definite": false,
                "start": 1047,
                "end": 1051
              }
            ],
            "declare": false,
            "start": 1043,
            "end": 1052
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
                        "start": 1064,
                        "end": 1065
                      },
                      "typeArguments": null,
                      "start": 1064,
                      "end": 1065
                    },
                    "start": 1062,
                    "end": 1065
                  },
                  "start": 1061,
                  "end": 1065
                },
                "init": null,
                "definite": false,
                "start": 1061,
                "end": 1065
              }
            ],
            "declare": false,
            "start": 1057,
            "end": 1066
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
                "start": 1072,
                "end": 1073
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1076,
                "end": 1077
              },
              "start": 1072,
              "end": 1077
            },
            "directive": null,
            "start": 1072,
            "end": 1078
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
                "start": 1092,
                "end": 1093
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1096,
                "end": 1097
              },
              "start": 1092,
              "end": 1097
            },
            "directive": null,
            "start": 1092,
            "end": 1098
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
                "start": 1112,
                "end": 1113
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 1116,
                "end": 1117
              },
              "start": 1112,
              "end": 1117
            },
            "directive": null,
            "start": 1112,
            "end": 1118
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
                "start": 1129,
                "end": 1130
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1133,
                "end": 1134
              },
              "start": 1129,
              "end": 1134
            },
            "directive": null,
            "start": 1129,
            "end": 1135
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
                "start": 1147,
                "end": 1148
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1151,
                "end": 1152
              },
              "start": 1147,
              "end": 1152
            },
            "directive": null,
            "start": 1147,
            "end": 1153
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
                "start": 1167,
                "end": 1168
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1171,
                "end": 1172
              },
              "start": 1167,
              "end": 1172
            },
            "directive": null,
            "start": 1167,
            "end": 1173
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
                "start": 1187,
                "end": 1188
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
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
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1204,
                "end": 1205
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1208,
                "end": 1209
              },
              "start": 1204,
              "end": 1209
            },
            "directive": null,
            "start": 1204,
            "end": 1210
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
                "start": 1222,
                "end": 1223
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 1226,
                "end": 1227
              },
              "start": 1222,
              "end": 1227
            },
            "directive": null,
            "start": 1222,
            "end": 1228
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
                "start": 1242,
                "end": 1243
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1246,
                "end": 1247
              },
              "start": 1242,
              "end": 1247
            },
            "directive": null,
            "start": 1242,
            "end": 1248
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
                "start": 1262,
                "end": 1263
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 1266,
                "end": 1267
              },
              "start": 1262,
              "end": 1267
            },
            "directive": null,
            "start": 1262,
            "end": 1268
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
                "start": 1279,
                "end": 1280
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1283,
                "end": 1284
              },
              "start": 1279,
              "end": 1284
            },
            "directive": null,
            "start": 1279,
            "end": 1285
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
                "start": 1296,
                "end": 1297
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 1300,
                "end": 1301
              },
              "start": 1296,
              "end": 1301
            },
            "directive": null,
            "start": 1296,
            "end": 1302
          }
        ],
        "start": 740,
        "end": 1310
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 715,
      "end": 1310
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 68,
  "end": 1310
}
```
