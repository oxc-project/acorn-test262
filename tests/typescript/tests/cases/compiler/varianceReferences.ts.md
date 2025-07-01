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
        "name": "NumericConstraint",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 22
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 28
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 37,
              "end": 43
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 23,
            "end": 43
          }
        ],
        "start": 22,
        "end": 44
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Value",
          "optional": false,
          "typeAnnotation": null,
          "start": 47,
          "end": 52
        },
        "typeArguments": null,
        "start": 47,
        "end": 52
      },
      "declare": false,
      "start": 0,
      "end": 53
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "VarianceConstrainedNumber",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 85
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 98
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 107,
              "end": 113
            },
            "default": null,
            "in": true,
            "out": true,
            "const": false,
            "start": 86,
            "end": 113
          }
        ],
        "start": 85,
        "end": 114
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "NumericConstraint",
          "optional": false,
          "typeAnnotation": null,
          "start": 119,
          "end": 136
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Value",
                "optional": false,
                "typeAnnotation": null,
                "start": 137,
                "end": 142
              },
              "typeArguments": null,
              "start": 137,
              "end": 142
            }
          ],
          "start": 136,
          "end": 143
        },
        "start": 119,
        "end": 143
      },
      "declare": false,
      "start": 55,
      "end": 144
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
            "name": "vcn1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VarianceConstrainedNumber",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 164,
                  "end": 189
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 190,
                        "end": 191
                      },
                      "start": 190,
                      "end": 191
                    }
                  ],
                  "start": 189,
                  "end": 192
                },
                "start": 164,
                "end": 192
              },
              "start": 162,
              "end": 192
            },
            "start": 158,
            "end": 192
          },
          "init": null,
          "definite": false,
          "start": 158,
          "end": 192
        }
      ],
      "declare": true,
      "start": 146,
      "end": 193
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
            "name": "vcn12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VarianceConstrainedNumber",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 213,
                  "end": 238
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 239,
                            "end": 240
                          },
                          "start": 239,
                          "end": 240
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 243,
                            "end": 244
                          },
                          "start": 243,
                          "end": 244
                        }
                      ],
                      "start": 239,
                      "end": 244
                    }
                  ],
                  "start": 238,
                  "end": 245
                },
                "start": 213,
                "end": 245
              },
              "start": 211,
              "end": 245
            },
            "start": 206,
            "end": 245
          },
          "init": null,
          "definite": false,
          "start": 206,
          "end": 245
        }
      ],
      "declare": true,
      "start": 194,
      "end": 246
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "vcn1",
          "optional": false,
          "typeAnnotation": null,
          "start": 248,
          "end": 252
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "vcn12",
          "optional": false,
          "typeAnnotation": null,
          "start": 255,
          "end": 260
        },
        "start": 248,
        "end": 260
      },
      "directive": null,
      "start": 248,
      "end": 261
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "vcn12",
          "optional": false,
          "typeAnnotation": null,
          "start": 262,
          "end": 267
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "vcn1",
          "optional": false,
          "typeAnnotation": null,
          "start": 270,
          "end": 274
        },
        "start": 262,
        "end": 274
      },
      "directive": null,
      "start": 262,
      "end": 275
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Unconstrained",
        "optional": false,
        "typeAnnotation": null,
        "start": 282,
        "end": 295
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 296,
              "end": 301
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 296,
            "end": 301
          }
        ],
        "start": 295,
        "end": 302
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Value",
          "optional": false,
          "typeAnnotation": null,
          "start": 305,
          "end": 310
        },
        "typeArguments": null,
        "start": 305,
        "end": 310
      },
      "declare": false,
      "start": 277,
      "end": 311
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "VarianceUnconstrained",
        "optional": false,
        "typeAnnotation": null,
        "start": 318,
        "end": 339
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 347,
              "end": 352
            },
            "constraint": null,
            "default": null,
            "in": true,
            "out": true,
            "const": false,
            "start": 340,
            "end": 352
          }
        ],
        "start": 339,
        "end": 353
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Unconstrained",
          "optional": false,
          "typeAnnotation": null,
          "start": 356,
          "end": 369
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Value",
                "optional": false,
                "typeAnnotation": null,
                "start": 370,
                "end": 375
              },
              "typeArguments": null,
              "start": 370,
              "end": 375
            }
          ],
          "start": 369,
          "end": 376
        },
        "start": 356,
        "end": 376
      },
      "declare": false,
      "start": 313,
      "end": 377
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
            "name": "vu1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VarianceUnconstrained",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 396,
                  "end": 417
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 418,
                        "end": 419
                      },
                      "start": 418,
                      "end": 419
                    }
                  ],
                  "start": 417,
                  "end": 420
                },
                "start": 396,
                "end": 420
              },
              "start": 394,
              "end": 420
            },
            "start": 391,
            "end": 420
          },
          "init": null,
          "definite": false,
          "start": 391,
          "end": 420
        }
      ],
      "declare": true,
      "start": 379,
      "end": 421
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
            "name": "vu12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VarianceUnconstrained",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 440,
                  "end": 461
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 462,
                            "end": 463
                          },
                          "start": 462,
                          "end": 463
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 466,
                            "end": 467
                          },
                          "start": 466,
                          "end": 467
                        }
                      ],
                      "start": 462,
                      "end": 467
                    }
                  ],
                  "start": 461,
                  "end": 468
                },
                "start": 440,
                "end": 468
              },
              "start": 438,
              "end": 468
            },
            "start": 434,
            "end": 468
          },
          "init": null,
          "definite": false,
          "start": 434,
          "end": 468
        }
      ],
      "declare": true,
      "start": 422,
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
          "name": "vu1",
          "optional": false,
          "typeAnnotation": null,
          "start": 471,
          "end": 474
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "vu12",
          "optional": false,
          "typeAnnotation": null,
          "start": 477,
          "end": 481
        },
        "start": 471,
        "end": 481
      },
      "directive": null,
      "start": 471,
      "end": 482
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "vu12",
          "optional": false,
          "typeAnnotation": null,
          "start": 483,
          "end": 487
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "vu1",
          "optional": false,
          "typeAnnotation": null,
          "start": 490,
          "end": 493
        },
        "start": 483,
        "end": 493
      },
      "directive": null,
      "start": 483,
      "end": 494
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Level3of3Unconstrained",
        "optional": false,
        "typeAnnotation": null,
        "start": 501,
        "end": 523
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 524,
              "end": 529
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 524,
            "end": 529
          }
        ],
        "start": 523,
        "end": 530
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Value",
          "optional": false,
          "typeAnnotation": null,
          "start": 533,
          "end": 538
        },
        "typeArguments": null,
        "start": 533,
        "end": 538
      },
      "declare": false,
      "start": 496,
      "end": 539
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Level2of3Unconstrained",
        "optional": false,
        "typeAnnotation": null,
        "start": 545,
        "end": 567
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 568,
              "end": 573
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 568,
            "end": 573
          }
        ],
        "start": 567,
        "end": 574
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Level3of3Unconstrained",
          "optional": false,
          "typeAnnotation": null,
          "start": 577,
          "end": 599
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Value",
                "optional": false,
                "typeAnnotation": null,
                "start": 600,
                "end": 605
              },
              "typeArguments": null,
              "start": 600,
              "end": 605
            }
          ],
          "start": 599,
          "end": 606
        },
        "start": 577,
        "end": 606
      },
      "declare": false,
      "start": 540,
      "end": 607
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Level1of3Unconstrained",
        "optional": false,
        "typeAnnotation": null,
        "start": 613,
        "end": 635
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 636,
              "end": 641
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 636,
            "end": 641
          }
        ],
        "start": 635,
        "end": 642
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Level2of3Unconstrained",
          "optional": false,
          "typeAnnotation": null,
          "start": 645,
          "end": 667
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Value",
                "optional": false,
                "typeAnnotation": null,
                "start": 668,
                "end": 673
              },
              "typeArguments": null,
              "start": 668,
              "end": 673
            }
          ],
          "start": 667,
          "end": 674
        },
        "start": 645,
        "end": 674
      },
      "declare": false,
      "start": 608,
      "end": 675
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "VarianceDeepUnconstrained",
        "optional": false,
        "typeAnnotation": null,
        "start": 682,
        "end": 707
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 715,
              "end": 720
            },
            "constraint": null,
            "default": null,
            "in": true,
            "out": true,
            "const": false,
            "start": 708,
            "end": 720
          }
        ],
        "start": 707,
        "end": 721
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Level1of3Unconstrained",
          "optional": false,
          "typeAnnotation": null,
          "start": 724,
          "end": 746
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Value",
                "optional": false,
                "typeAnnotation": null,
                "start": 747,
                "end": 752
              },
              "typeArguments": null,
              "start": 747,
              "end": 752
            }
          ],
          "start": 746,
          "end": 753
        },
        "start": 724,
        "end": 753
      },
      "declare": false,
      "start": 677,
      "end": 754
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
            "name": "vdu1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VarianceDeepUnconstrained",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 774,
                  "end": 799
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 800,
                        "end": 801
                      },
                      "start": 800,
                      "end": 801
                    }
                  ],
                  "start": 799,
                  "end": 802
                },
                "start": 774,
                "end": 802
              },
              "start": 772,
              "end": 802
            },
            "start": 768,
            "end": 802
          },
          "init": null,
          "definite": false,
          "start": 768,
          "end": 802
        }
      ],
      "declare": true,
      "start": 756,
      "end": 803
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
            "name": "vdu12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VarianceDeepUnconstrained",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 823,
                  "end": 848
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 849,
                            "end": 850
                          },
                          "start": 849,
                          "end": 850
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 853,
                            "end": 854
                          },
                          "start": 853,
                          "end": 854
                        }
                      ],
                      "start": 849,
                      "end": 854
                    }
                  ],
                  "start": 848,
                  "end": 855
                },
                "start": 823,
                "end": 855
              },
              "start": 821,
              "end": 855
            },
            "start": 816,
            "end": 855
          },
          "init": null,
          "definite": false,
          "start": 816,
          "end": 855
        }
      ],
      "declare": true,
      "start": 804,
      "end": 856
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "vdu1",
          "optional": false,
          "typeAnnotation": null,
          "start": 858,
          "end": 862
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "vdu12",
          "optional": false,
          "typeAnnotation": null,
          "start": 865,
          "end": 870
        },
        "start": 858,
        "end": 870
      },
      "directive": null,
      "start": 858,
      "end": 871
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "vdu12",
          "optional": false,
          "typeAnnotation": null,
          "start": 872,
          "end": 877
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "vdu1",
          "optional": false,
          "typeAnnotation": null,
          "start": 880,
          "end": 884
        },
        "start": 872,
        "end": 884
      },
      "directive": null,
      "start": 872,
      "end": 885
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Shape",
        "optional": false,
        "typeAnnotation": null,
        "start": 897,
        "end": 902
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 903,
              "end": 908
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 903,
            "end": 908
          }
        ],
        "start": 902,
        "end": 909
      },
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 914,
              "end": 919
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 921,
                  "end": 926
                },
                "typeArguments": null,
                "start": 921,
                "end": 926
              },
              "start": 919,
              "end": 926
            },
            "accessibility": null,
            "static": false,
            "start": 914,
            "end": 927
          }
        ],
        "start": 910,
        "end": 929
      },
      "declare": false,
      "start": 887,
      "end": 929
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "VarianceShape",
        "optional": false,
        "typeAnnotation": null,
        "start": 936,
        "end": 949
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 957,
              "end": 962
            },
            "constraint": null,
            "default": null,
            "in": true,
            "out": true,
            "const": false,
            "start": 950,
            "end": 962
          }
        ],
        "start": 949,
        "end": 963
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Shape",
          "optional": false,
          "typeAnnotation": null,
          "start": 966,
          "end": 971
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Value",
                "optional": false,
                "typeAnnotation": null,
                "start": 972,
                "end": 977
              },
              "typeArguments": null,
              "start": 972,
              "end": 977
            }
          ],
          "start": 971,
          "end": 978
        },
        "start": 966,
        "end": 978
      },
      "declare": false,
      "start": 931,
      "end": 979
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
            "name": "vs1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VarianceShape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 998,
                  "end": 1011
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1012,
                        "end": 1013
                      },
                      "start": 1012,
                      "end": 1013
                    }
                  ],
                  "start": 1011,
                  "end": 1014
                },
                "start": 998,
                "end": 1014
              },
              "start": 996,
              "end": 1014
            },
            "start": 993,
            "end": 1014
          },
          "init": null,
          "definite": false,
          "start": 993,
          "end": 1014
        }
      ],
      "declare": true,
      "start": 981,
      "end": 1015
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
            "name": "vs12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VarianceShape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1034,
                  "end": 1047
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1048,
                            "end": 1049
                          },
                          "start": 1048,
                          "end": 1049
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 1052,
                            "end": 1053
                          },
                          "start": 1052,
                          "end": 1053
                        }
                      ],
                      "start": 1048,
                      "end": 1053
                    }
                  ],
                  "start": 1047,
                  "end": 1054
                },
                "start": 1034,
                "end": 1054
              },
              "start": 1032,
              "end": 1054
            },
            "start": 1028,
            "end": 1054
          },
          "init": null,
          "definite": false,
          "start": 1028,
          "end": 1054
        }
      ],
      "declare": true,
      "start": 1016,
      "end": 1055
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "vs1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1057,
          "end": 1060
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "vs12",
          "optional": false,
          "typeAnnotation": null,
          "start": 1063,
          "end": 1067
        },
        "start": 1057,
        "end": 1067
      },
      "directive": null,
      "start": 1057,
      "end": 1068
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "vs12",
          "optional": false,
          "typeAnnotation": null,
          "start": 1069,
          "end": 1073
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "vs1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1076,
          "end": 1079
        },
        "start": 1069,
        "end": 1079
      },
      "directive": null,
      "start": 1069,
      "end": 1080
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Level3of3Shape",
        "optional": false,
        "typeAnnotation": null,
        "start": 1092,
        "end": 1106
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 1107,
              "end": 1112
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1107,
            "end": 1112
          }
        ],
        "start": 1106,
        "end": 1113
      },
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 1118,
              "end": 1123
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1125,
                  "end": 1130
                },
                "typeArguments": null,
                "start": 1125,
                "end": 1130
              },
              "start": 1123,
              "end": 1130
            },
            "accessibility": null,
            "static": false,
            "start": 1118,
            "end": 1131
          }
        ],
        "start": 1114,
        "end": 1133
      },
      "declare": false,
      "start": 1082,
      "end": 1133
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Level2of3Shape",
        "optional": false,
        "typeAnnotation": null,
        "start": 1140,
        "end": 1154
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 1155,
              "end": 1160
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1155,
            "end": 1160
          }
        ],
        "start": 1154,
        "end": 1161
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Level3of3Shape",
          "optional": false,
          "typeAnnotation": null,
          "start": 1164,
          "end": 1178
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Value",
                "optional": false,
                "typeAnnotation": null,
                "start": 1179,
                "end": 1184
              },
              "typeArguments": null,
              "start": 1179,
              "end": 1184
            }
          ],
          "start": 1178,
          "end": 1185
        },
        "start": 1164,
        "end": 1185
      },
      "declare": false,
      "start": 1135,
      "end": 1186
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Level1of3Shape",
        "optional": false,
        "typeAnnotation": null,
        "start": 1192,
        "end": 1206
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 1207,
              "end": 1212
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1207,
            "end": 1212
          }
        ],
        "start": 1206,
        "end": 1213
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Level2of3Shape",
          "optional": false,
          "typeAnnotation": null,
          "start": 1216,
          "end": 1230
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Value",
                "optional": false,
                "typeAnnotation": null,
                "start": 1231,
                "end": 1236
              },
              "typeArguments": null,
              "start": 1231,
              "end": 1236
            }
          ],
          "start": 1230,
          "end": 1237
        },
        "start": 1216,
        "end": 1237
      },
      "declare": false,
      "start": 1187,
      "end": 1238
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "VarianceDeepShape",
        "optional": false,
        "typeAnnotation": null,
        "start": 1245,
        "end": 1262
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 1270,
              "end": 1275
            },
            "constraint": null,
            "default": null,
            "in": true,
            "out": true,
            "const": false,
            "start": 1263,
            "end": 1275
          }
        ],
        "start": 1262,
        "end": 1276
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Level1of3Shape",
          "optional": false,
          "typeAnnotation": null,
          "start": 1279,
          "end": 1293
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Value",
                "optional": false,
                "typeAnnotation": null,
                "start": 1294,
                "end": 1299
              },
              "typeArguments": null,
              "start": 1294,
              "end": 1299
            }
          ],
          "start": 1293,
          "end": 1300
        },
        "start": 1279,
        "end": 1300
      },
      "declare": false,
      "start": 1240,
      "end": 1301
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
            "name": "vds1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VarianceDeepShape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1321,
                  "end": 1338
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1339,
                        "end": 1340
                      },
                      "start": 1339,
                      "end": 1340
                    }
                  ],
                  "start": 1338,
                  "end": 1341
                },
                "start": 1321,
                "end": 1341
              },
              "start": 1319,
              "end": 1341
            },
            "start": 1315,
            "end": 1341
          },
          "init": null,
          "definite": false,
          "start": 1315,
          "end": 1341
        }
      ],
      "declare": true,
      "start": 1303,
      "end": 1342
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
            "name": "vds12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VarianceDeepShape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1362,
                  "end": 1379
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1380,
                            "end": 1381
                          },
                          "start": 1380,
                          "end": 1381
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 1384,
                            "end": 1385
                          },
                          "start": 1384,
                          "end": 1385
                        }
                      ],
                      "start": 1380,
                      "end": 1385
                    }
                  ],
                  "start": 1379,
                  "end": 1386
                },
                "start": 1362,
                "end": 1386
              },
              "start": 1360,
              "end": 1386
            },
            "start": 1355,
            "end": 1386
          },
          "init": null,
          "definite": false,
          "start": 1355,
          "end": 1386
        }
      ],
      "declare": true,
      "start": 1343,
      "end": 1387
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "vds1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1389,
          "end": 1393
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "vds12",
          "optional": false,
          "typeAnnotation": null,
          "start": 1396,
          "end": 1401
        },
        "start": 1389,
        "end": 1401
      },
      "directive": null,
      "start": 1389,
      "end": 1402
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "vds12",
          "optional": false,
          "typeAnnotation": null,
          "start": 1403,
          "end": 1408
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "vds1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1411,
          "end": 1415
        },
        "start": 1403,
        "end": 1415
      },
      "directive": null,
      "start": 1403,
      "end": 1416
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1416
}
```
