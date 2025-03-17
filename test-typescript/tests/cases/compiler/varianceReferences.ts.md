__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1417,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 53,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 22,
        "name": "NumericConstraint",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 22,
        "end": 44,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 23,
            "end": 43,
            "name": {
              "type": "Identifier",
              "start": 23,
              "end": 28,
              "name": "Value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 37,
              "end": 43
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 47,
        "end": 52,
        "typeName": {
          "type": "Identifier",
          "start": 47,
          "end": 52,
          "name": "Value",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 55,
      "end": 144,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 85,
        "name": "VarianceConstrainedNumber",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 85,
        "end": 114,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 86,
            "end": 113,
            "name": {
              "type": "Identifier",
              "start": 93,
              "end": 98,
              "name": "Value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 107,
              "end": 113
            },
            "default": null,
            "in": true,
            "out": true,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 119,
        "end": 143,
        "typeName": {
          "type": "Identifier",
          "start": 119,
          "end": 136,
          "name": "NumericConstraint",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 136,
          "end": 143,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 137,
              "end": 142,
              "typeName": {
                "type": "Identifier",
                "start": 137,
                "end": 142,
                "name": "Value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 146,
      "end": 193,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 158,
          "end": 192,
          "id": {
            "type": "Identifier",
            "start": 158,
            "end": 192,
            "name": "vcn1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 162,
              "end": 192,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 164,
                "end": 192,
                "typeName": {
                  "type": "Identifier",
                  "start": 164,
                  "end": 189,
                  "name": "VarianceConstrainedNumber",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 189,
                  "end": 192,
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "start": 190,
                      "end": 191,
                      "literal": {
                        "type": "Literal",
                        "start": 190,
                        "end": 191,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 194,
      "end": 246,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 206,
          "end": 245,
          "id": {
            "type": "Identifier",
            "start": 206,
            "end": 245,
            "name": "vcn12",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 211,
              "end": 245,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 213,
                "end": 245,
                "typeName": {
                  "type": "Identifier",
                  "start": 213,
                  "end": 238,
                  "name": "VarianceConstrainedNumber",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 238,
                  "end": 245,
                  "params": [
                    {
                      "type": "TSUnionType",
                      "start": 239,
                      "end": 244,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 239,
                          "end": 240,
                          "literal": {
                            "type": "Literal",
                            "start": 239,
                            "end": 240,
                            "value": 1,
                            "raw": "1"
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 243,
                          "end": 244,
                          "literal": {
                            "type": "Literal",
                            "start": 243,
                            "end": 244,
                            "value": 2,
                            "raw": "2"
                          }
                        }
                      ]
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 248,
      "end": 261,
      "expression": {
        "type": "AssignmentExpression",
        "start": 248,
        "end": 260,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 248,
          "end": 252,
          "name": "vcn1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 255,
          "end": 260,
          "name": "vcn12",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 262,
      "end": 275,
      "expression": {
        "type": "AssignmentExpression",
        "start": 262,
        "end": 274,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 262,
          "end": 267,
          "name": "vcn12",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 270,
          "end": 274,
          "name": "vcn1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 277,
      "end": 311,
      "id": {
        "type": "Identifier",
        "start": 282,
        "end": 295,
        "name": "Unconstrained",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 295,
        "end": 302,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 296,
            "end": 301,
            "name": {
              "type": "Identifier",
              "start": 296,
              "end": 301,
              "name": "Value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 305,
        "end": 310,
        "typeName": {
          "type": "Identifier",
          "start": 305,
          "end": 310,
          "name": "Value",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 313,
      "end": 377,
      "id": {
        "type": "Identifier",
        "start": 318,
        "end": 339,
        "name": "VarianceUnconstrained",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 339,
        "end": 353,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 340,
            "end": 352,
            "name": {
              "type": "Identifier",
              "start": 347,
              "end": 352,
              "name": "Value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": true,
            "out": true,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 356,
        "end": 376,
        "typeName": {
          "type": "Identifier",
          "start": 356,
          "end": 369,
          "name": "Unconstrained",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 369,
          "end": 376,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 370,
              "end": 375,
              "typeName": {
                "type": "Identifier",
                "start": 370,
                "end": 375,
                "name": "Value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 379,
      "end": 421,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 391,
          "end": 420,
          "id": {
            "type": "Identifier",
            "start": 391,
            "end": 420,
            "name": "vu1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 394,
              "end": 420,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 396,
                "end": 420,
                "typeName": {
                  "type": "Identifier",
                  "start": 396,
                  "end": 417,
                  "name": "VarianceUnconstrained",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 417,
                  "end": 420,
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "start": 418,
                      "end": 419,
                      "literal": {
                        "type": "Literal",
                        "start": 418,
                        "end": 419,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 422,
      "end": 469,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 434,
          "end": 468,
          "id": {
            "type": "Identifier",
            "start": 434,
            "end": 468,
            "name": "vu12",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 438,
              "end": 468,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 440,
                "end": 468,
                "typeName": {
                  "type": "Identifier",
                  "start": 440,
                  "end": 461,
                  "name": "VarianceUnconstrained",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 461,
                  "end": 468,
                  "params": [
                    {
                      "type": "TSUnionType",
                      "start": 462,
                      "end": 467,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 462,
                          "end": 463,
                          "literal": {
                            "type": "Literal",
                            "start": 462,
                            "end": 463,
                            "value": 1,
                            "raw": "1"
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 466,
                          "end": 467,
                          "literal": {
                            "type": "Literal",
                            "start": 466,
                            "end": 467,
                            "value": 2,
                            "raw": "2"
                          }
                        }
                      ]
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 471,
      "end": 482,
      "expression": {
        "type": "AssignmentExpression",
        "start": 471,
        "end": 481,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 471,
          "end": 474,
          "name": "vu1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 477,
          "end": 481,
          "name": "vu12",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 483,
      "end": 494,
      "expression": {
        "type": "AssignmentExpression",
        "start": 483,
        "end": 493,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 483,
          "end": 487,
          "name": "vu12",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 490,
          "end": 493,
          "name": "vu1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 496,
      "end": 539,
      "id": {
        "type": "Identifier",
        "start": 501,
        "end": 523,
        "name": "Level3of3Unconstrained",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 523,
        "end": 530,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 524,
            "end": 529,
            "name": {
              "type": "Identifier",
              "start": 524,
              "end": 529,
              "name": "Value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 533,
        "end": 538,
        "typeName": {
          "type": "Identifier",
          "start": 533,
          "end": 538,
          "name": "Value",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 540,
      "end": 607,
      "id": {
        "type": "Identifier",
        "start": 545,
        "end": 567,
        "name": "Level2of3Unconstrained",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 567,
        "end": 574,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 568,
            "end": 573,
            "name": {
              "type": "Identifier",
              "start": 568,
              "end": 573,
              "name": "Value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 577,
        "end": 606,
        "typeName": {
          "type": "Identifier",
          "start": 577,
          "end": 599,
          "name": "Level3of3Unconstrained",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 599,
          "end": 606,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 600,
              "end": 605,
              "typeName": {
                "type": "Identifier",
                "start": 600,
                "end": 605,
                "name": "Value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 608,
      "end": 675,
      "id": {
        "type": "Identifier",
        "start": 613,
        "end": 635,
        "name": "Level1of3Unconstrained",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 635,
        "end": 642,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 636,
            "end": 641,
            "name": {
              "type": "Identifier",
              "start": 636,
              "end": 641,
              "name": "Value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 645,
        "end": 674,
        "typeName": {
          "type": "Identifier",
          "start": 645,
          "end": 667,
          "name": "Level2of3Unconstrained",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 667,
          "end": 674,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 668,
              "end": 673,
              "typeName": {
                "type": "Identifier",
                "start": 668,
                "end": 673,
                "name": "Value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 677,
      "end": 754,
      "id": {
        "type": "Identifier",
        "start": 682,
        "end": 707,
        "name": "VarianceDeepUnconstrained",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 707,
        "end": 721,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 708,
            "end": 720,
            "name": {
              "type": "Identifier",
              "start": 715,
              "end": 720,
              "name": "Value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": true,
            "out": true,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 724,
        "end": 753,
        "typeName": {
          "type": "Identifier",
          "start": 724,
          "end": 746,
          "name": "Level1of3Unconstrained",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 746,
          "end": 753,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 747,
              "end": 752,
              "typeName": {
                "type": "Identifier",
                "start": 747,
                "end": 752,
                "name": "Value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 756,
      "end": 803,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 768,
          "end": 802,
          "id": {
            "type": "Identifier",
            "start": 768,
            "end": 802,
            "name": "vdu1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 772,
              "end": 802,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 774,
                "end": 802,
                "typeName": {
                  "type": "Identifier",
                  "start": 774,
                  "end": 799,
                  "name": "VarianceDeepUnconstrained",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 799,
                  "end": 802,
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "start": 800,
                      "end": 801,
                      "literal": {
                        "type": "Literal",
                        "start": 800,
                        "end": 801,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 804,
      "end": 856,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 816,
          "end": 855,
          "id": {
            "type": "Identifier",
            "start": 816,
            "end": 855,
            "name": "vdu12",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 821,
              "end": 855,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 823,
                "end": 855,
                "typeName": {
                  "type": "Identifier",
                  "start": 823,
                  "end": 848,
                  "name": "VarianceDeepUnconstrained",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 848,
                  "end": 855,
                  "params": [
                    {
                      "type": "TSUnionType",
                      "start": 849,
                      "end": 854,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 849,
                          "end": 850,
                          "literal": {
                            "type": "Literal",
                            "start": 849,
                            "end": 850,
                            "value": 1,
                            "raw": "1"
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 853,
                          "end": 854,
                          "literal": {
                            "type": "Literal",
                            "start": 853,
                            "end": 854,
                            "value": 2,
                            "raw": "2"
                          }
                        }
                      ]
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 858,
      "end": 871,
      "expression": {
        "type": "AssignmentExpression",
        "start": 858,
        "end": 870,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 858,
          "end": 862,
          "name": "vdu1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 865,
          "end": 870,
          "name": "vdu12",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 872,
      "end": 885,
      "expression": {
        "type": "AssignmentExpression",
        "start": 872,
        "end": 884,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 872,
          "end": 877,
          "name": "vdu12",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 880,
          "end": 884,
          "name": "vdu1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 887,
      "end": 929,
      "id": {
        "type": "Identifier",
        "start": 897,
        "end": 902,
        "name": "Shape",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 902,
        "end": 909,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 903,
            "end": 908,
            "name": {
              "type": "Identifier",
              "start": 903,
              "end": 908,
              "name": "Value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 910,
        "end": 929,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 914,
            "end": 927,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 914,
              "end": 919,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 919,
              "end": 926,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 921,
                "end": 926,
                "typeName": {
                  "type": "Identifier",
                  "start": 921,
                  "end": 926,
                  "name": "Value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "type": "TSTypeAliasDeclaration",
      "start": 931,
      "end": 979,
      "id": {
        "type": "Identifier",
        "start": 936,
        "end": 949,
        "name": "VarianceShape",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 949,
        "end": 963,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 950,
            "end": 962,
            "name": {
              "type": "Identifier",
              "start": 957,
              "end": 962,
              "name": "Value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": true,
            "out": true,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 966,
        "end": 978,
        "typeName": {
          "type": "Identifier",
          "start": 966,
          "end": 971,
          "name": "Shape",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 971,
          "end": 978,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 972,
              "end": 977,
              "typeName": {
                "type": "Identifier",
                "start": 972,
                "end": 977,
                "name": "Value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 981,
      "end": 1015,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 993,
          "end": 1014,
          "id": {
            "type": "Identifier",
            "start": 993,
            "end": 1014,
            "name": "vs1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 996,
              "end": 1014,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 998,
                "end": 1014,
                "typeName": {
                  "type": "Identifier",
                  "start": 998,
                  "end": 1011,
                  "name": "VarianceShape",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1011,
                  "end": 1014,
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "start": 1012,
                      "end": 1013,
                      "literal": {
                        "type": "Literal",
                        "start": 1012,
                        "end": 1013,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 1016,
      "end": 1055,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1028,
          "end": 1054,
          "id": {
            "type": "Identifier",
            "start": 1028,
            "end": 1054,
            "name": "vs12",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1032,
              "end": 1054,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1034,
                "end": 1054,
                "typeName": {
                  "type": "Identifier",
                  "start": 1034,
                  "end": 1047,
                  "name": "VarianceShape",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1047,
                  "end": 1054,
                  "params": [
                    {
                      "type": "TSUnionType",
                      "start": 1048,
                      "end": 1053,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 1048,
                          "end": 1049,
                          "literal": {
                            "type": "Literal",
                            "start": 1048,
                            "end": 1049,
                            "value": 1,
                            "raw": "1"
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 1052,
                          "end": 1053,
                          "literal": {
                            "type": "Literal",
                            "start": 1052,
                            "end": 1053,
                            "value": 2,
                            "raw": "2"
                          }
                        }
                      ]
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 1057,
      "end": 1068,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1057,
        "end": 1067,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1057,
          "end": 1060,
          "name": "vs1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1063,
          "end": 1067,
          "name": "vs12",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1069,
      "end": 1080,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1069,
        "end": 1079,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1069,
          "end": 1073,
          "name": "vs12",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1076,
          "end": 1079,
          "name": "vs1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1082,
      "end": 1133,
      "id": {
        "type": "Identifier",
        "start": 1092,
        "end": 1106,
        "name": "Level3of3Shape",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1106,
        "end": 1113,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1107,
            "end": 1112,
            "name": {
              "type": "Identifier",
              "start": 1107,
              "end": 1112,
              "name": "Value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 1114,
        "end": 1133,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1118,
            "end": 1131,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1118,
              "end": 1123,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1123,
              "end": 1130,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1125,
                "end": 1130,
                "typeName": {
                  "type": "Identifier",
                  "start": 1125,
                  "end": 1130,
                  "name": "Value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "type": "TSTypeAliasDeclaration",
      "start": 1135,
      "end": 1186,
      "id": {
        "type": "Identifier",
        "start": 1140,
        "end": 1154,
        "name": "Level2of3Shape",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1154,
        "end": 1161,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1155,
            "end": 1160,
            "name": {
              "type": "Identifier",
              "start": 1155,
              "end": 1160,
              "name": "Value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1164,
        "end": 1185,
        "typeName": {
          "type": "Identifier",
          "start": 1164,
          "end": 1178,
          "name": "Level3of3Shape",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1178,
          "end": 1185,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1179,
              "end": 1184,
              "typeName": {
                "type": "Identifier",
                "start": 1179,
                "end": 1184,
                "name": "Value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1187,
      "end": 1238,
      "id": {
        "type": "Identifier",
        "start": 1192,
        "end": 1206,
        "name": "Level1of3Shape",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1206,
        "end": 1213,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1207,
            "end": 1212,
            "name": {
              "type": "Identifier",
              "start": 1207,
              "end": 1212,
              "name": "Value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1216,
        "end": 1237,
        "typeName": {
          "type": "Identifier",
          "start": 1216,
          "end": 1230,
          "name": "Level2of3Shape",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1230,
          "end": 1237,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1231,
              "end": 1236,
              "typeName": {
                "type": "Identifier",
                "start": 1231,
                "end": 1236,
                "name": "Value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1240,
      "end": 1301,
      "id": {
        "type": "Identifier",
        "start": 1245,
        "end": 1262,
        "name": "VarianceDeepShape",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1262,
        "end": 1276,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1263,
            "end": 1275,
            "name": {
              "type": "Identifier",
              "start": 1270,
              "end": 1275,
              "name": "Value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": true,
            "out": true,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1279,
        "end": 1300,
        "typeName": {
          "type": "Identifier",
          "start": 1279,
          "end": 1293,
          "name": "Level1of3Shape",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1293,
          "end": 1300,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1294,
              "end": 1299,
              "typeName": {
                "type": "Identifier",
                "start": 1294,
                "end": 1299,
                "name": "Value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1303,
      "end": 1342,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1315,
          "end": 1341,
          "id": {
            "type": "Identifier",
            "start": 1315,
            "end": 1341,
            "name": "vds1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1319,
              "end": 1341,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1321,
                "end": 1341,
                "typeName": {
                  "type": "Identifier",
                  "start": 1321,
                  "end": 1338,
                  "name": "VarianceDeepShape",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1338,
                  "end": 1341,
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "start": 1339,
                      "end": 1340,
                      "literal": {
                        "type": "Literal",
                        "start": 1339,
                        "end": 1340,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 1343,
      "end": 1387,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1355,
          "end": 1386,
          "id": {
            "type": "Identifier",
            "start": 1355,
            "end": 1386,
            "name": "vds12",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1360,
              "end": 1386,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1362,
                "end": 1386,
                "typeName": {
                  "type": "Identifier",
                  "start": 1362,
                  "end": 1379,
                  "name": "VarianceDeepShape",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1379,
                  "end": 1386,
                  "params": [
                    {
                      "type": "TSUnionType",
                      "start": 1380,
                      "end": 1385,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 1380,
                          "end": 1381,
                          "literal": {
                            "type": "Literal",
                            "start": 1380,
                            "end": 1381,
                            "value": 1,
                            "raw": "1"
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 1384,
                          "end": 1385,
                          "literal": {
                            "type": "Literal",
                            "start": 1384,
                            "end": 1385,
                            "value": 2,
                            "raw": "2"
                          }
                        }
                      ]
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 1389,
      "end": 1402,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1389,
        "end": 1401,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1389,
          "end": 1393,
          "name": "vds1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1396,
          "end": 1401,
          "name": "vds12",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1403,
      "end": 1416,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1403,
        "end": 1415,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1403,
          "end": 1408,
          "name": "vds12",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 1411,
          "end": 1415,
          "name": "vds1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
