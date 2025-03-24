__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1416,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 53,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 22,
        "decorators": [],
        "name": "NumericConstraint",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 47,
        "end": 52,
        "typeArguments": null,
        "typeName": {
          "type": "Identifier",
          "start": 47,
          "end": 52,
          "decorators": [],
          "name": "Value",
          "optional": false,
          "typeAnnotation": null
        }
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
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 37,
              "end": 43
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 23,
              "end": 28,
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 55,
      "end": 144,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 85,
        "decorators": [],
        "name": "VarianceConstrainedNumber",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 119,
        "end": 143,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 136,
          "end": 143,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 137,
              "end": 142,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 137,
                "end": 142,
                "decorators": [],
                "name": "Value",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 119,
          "end": 136,
          "decorators": [],
          "name": "NumericConstraint",
          "optional": false,
          "typeAnnotation": null
        }
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
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 107,
              "end": 113
            },
            "default": null,
            "in": true,
            "name": {
              "type": "Identifier",
              "start": 93,
              "end": 98,
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null
            },
            "out": true
          }
        ]
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 158,
            "end": 192,
            "decorators": [],
            "name": "vcn1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 162,
              "end": 192,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 164,
                "end": 192,
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
                        "raw": "1",
                        "value": 1
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 164,
                  "end": 189,
                  "decorators": [],
                  "name": "VarianceConstrainedNumber",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 206,
            "end": 245,
            "decorators": [],
            "name": "vcn12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 211,
              "end": 245,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 213,
                "end": 245,
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
                            "raw": "1",
                            "value": 1
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
                            "raw": "2",
                            "value": 2
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 213,
                  "end": 238,
                  "decorators": [],
                  "name": "VarianceConstrainedNumber",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 248,
      "end": 261,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 248,
        "end": 260,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 248,
          "end": 252,
          "decorators": [],
          "name": "vcn1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 255,
          "end": 260,
          "decorators": [],
          "name": "vcn12",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 262,
      "end": 275,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 262,
        "end": 274,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 262,
          "end": 267,
          "decorators": [],
          "name": "vcn12",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 270,
          "end": 274,
          "decorators": [],
          "name": "vcn1",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 277,
      "end": 311,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 282,
        "end": 295,
        "decorators": [],
        "name": "Unconstrained",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 305,
        "end": 310,
        "typeArguments": null,
        "typeName": {
          "type": "Identifier",
          "start": 305,
          "end": 310,
          "decorators": [],
          "name": "Value",
          "optional": false,
          "typeAnnotation": null
        }
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 296,
              "end": 301,
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 313,
      "end": 377,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 318,
        "end": 339,
        "decorators": [],
        "name": "VarianceUnconstrained",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 356,
        "end": 376,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 369,
          "end": 376,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 370,
              "end": 375,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 370,
                "end": 375,
                "decorators": [],
                "name": "Value",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 356,
          "end": 369,
          "decorators": [],
          "name": "Unconstrained",
          "optional": false,
          "typeAnnotation": null
        }
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": true,
            "name": {
              "type": "Identifier",
              "start": 347,
              "end": 352,
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null
            },
            "out": true
          }
        ]
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 391,
            "end": 420,
            "decorators": [],
            "name": "vu1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 394,
              "end": 420,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 396,
                "end": 420,
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
                        "raw": "1",
                        "value": 1
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 396,
                  "end": 417,
                  "decorators": [],
                  "name": "VarianceUnconstrained",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 434,
            "end": 468,
            "decorators": [],
            "name": "vu12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 438,
              "end": 468,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 440,
                "end": 468,
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
                            "raw": "1",
                            "value": 1
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
                            "raw": "2",
                            "value": 2
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 440,
                  "end": 461,
                  "decorators": [],
                  "name": "VarianceUnconstrained",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 471,
      "end": 482,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 471,
        "end": 481,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 471,
          "end": 474,
          "decorators": [],
          "name": "vu1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 477,
          "end": 481,
          "decorators": [],
          "name": "vu12",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 483,
      "end": 494,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 483,
        "end": 493,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 483,
          "end": 487,
          "decorators": [],
          "name": "vu12",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 490,
          "end": 493,
          "decorators": [],
          "name": "vu1",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 496,
      "end": 539,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 501,
        "end": 523,
        "decorators": [],
        "name": "Level3of3Unconstrained",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 533,
        "end": 538,
        "typeArguments": null,
        "typeName": {
          "type": "Identifier",
          "start": 533,
          "end": 538,
          "decorators": [],
          "name": "Value",
          "optional": false,
          "typeAnnotation": null
        }
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 524,
              "end": 529,
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 540,
      "end": 607,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 545,
        "end": 567,
        "decorators": [],
        "name": "Level2of3Unconstrained",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 577,
        "end": 606,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 599,
          "end": 606,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 600,
              "end": 605,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 600,
                "end": 605,
                "decorators": [],
                "name": "Value",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 577,
          "end": 599,
          "decorators": [],
          "name": "Level3of3Unconstrained",
          "optional": false,
          "typeAnnotation": null
        }
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 568,
              "end": 573,
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 608,
      "end": 675,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 613,
        "end": 635,
        "decorators": [],
        "name": "Level1of3Unconstrained",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 645,
        "end": 674,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 667,
          "end": 674,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 668,
              "end": 673,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 668,
                "end": 673,
                "decorators": [],
                "name": "Value",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 645,
          "end": 667,
          "decorators": [],
          "name": "Level2of3Unconstrained",
          "optional": false,
          "typeAnnotation": null
        }
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 636,
              "end": 641,
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 677,
      "end": 754,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 682,
        "end": 707,
        "decorators": [],
        "name": "VarianceDeepUnconstrained",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 724,
        "end": 753,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 746,
          "end": 753,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 747,
              "end": 752,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 747,
                "end": 752,
                "decorators": [],
                "name": "Value",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 724,
          "end": 746,
          "decorators": [],
          "name": "Level1of3Unconstrained",
          "optional": false,
          "typeAnnotation": null
        }
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": true,
            "name": {
              "type": "Identifier",
              "start": 715,
              "end": 720,
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null
            },
            "out": true
          }
        ]
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 768,
            "end": 802,
            "decorators": [],
            "name": "vdu1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 772,
              "end": 802,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 774,
                "end": 802,
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
                        "raw": "1",
                        "value": 1
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 774,
                  "end": 799,
                  "decorators": [],
                  "name": "VarianceDeepUnconstrained",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 816,
            "end": 855,
            "decorators": [],
            "name": "vdu12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 821,
              "end": 855,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 823,
                "end": 855,
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
                            "raw": "1",
                            "value": 1
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
                            "raw": "2",
                            "value": 2
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 823,
                  "end": 848,
                  "decorators": [],
                  "name": "VarianceDeepUnconstrained",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 858,
      "end": 871,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 858,
        "end": 870,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 858,
          "end": 862,
          "decorators": [],
          "name": "vdu1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 865,
          "end": 870,
          "decorators": [],
          "name": "vdu12",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 872,
      "end": 885,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 872,
        "end": 884,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 872,
          "end": 877,
          "decorators": [],
          "name": "vdu12",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 880,
          "end": 884,
          "decorators": [],
          "name": "vdu1",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 887,
      "end": 929,
      "body": {
        "type": "TSInterfaceBody",
        "start": 910,
        "end": 929,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 914,
            "end": 927,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 914,
              "end": 919,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 919,
              "end": 926,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 921,
                "end": 926,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 921,
                  "end": 926,
                  "decorators": [],
                  "name": "Value",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 897,
        "end": 902,
        "decorators": [],
        "name": "Shape",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 902,
        "end": 909,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 903,
            "end": 908,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 903,
              "end": 908,
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 931,
      "end": 979,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 936,
        "end": 949,
        "decorators": [],
        "name": "VarianceShape",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 966,
        "end": 978,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 971,
          "end": 978,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 972,
              "end": 977,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 972,
                "end": 977,
                "decorators": [],
                "name": "Value",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 966,
          "end": 971,
          "decorators": [],
          "name": "Shape",
          "optional": false,
          "typeAnnotation": null
        }
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": true,
            "name": {
              "type": "Identifier",
              "start": 957,
              "end": 962,
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null
            },
            "out": true
          }
        ]
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 993,
            "end": 1014,
            "decorators": [],
            "name": "vs1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 996,
              "end": 1014,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 998,
                "end": 1014,
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
                        "raw": "1",
                        "value": 1
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 998,
                  "end": 1011,
                  "decorators": [],
                  "name": "VarianceShape",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1028,
            "end": 1054,
            "decorators": [],
            "name": "vs12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1032,
              "end": 1054,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1034,
                "end": 1054,
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
                            "raw": "1",
                            "value": 1
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
                            "raw": "2",
                            "value": 2
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1034,
                  "end": 1047,
                  "decorators": [],
                  "name": "VarianceShape",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 1057,
      "end": 1068,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1057,
        "end": 1067,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1057,
          "end": 1060,
          "decorators": [],
          "name": "vs1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1063,
          "end": 1067,
          "decorators": [],
          "name": "vs12",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1069,
      "end": 1080,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1069,
        "end": 1079,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1069,
          "end": 1073,
          "decorators": [],
          "name": "vs12",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1076,
          "end": 1079,
          "decorators": [],
          "name": "vs1",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1082,
      "end": 1133,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1114,
        "end": 1133,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1118,
            "end": 1131,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1118,
              "end": 1123,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1123,
              "end": 1130,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1125,
                "end": 1130,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1125,
                  "end": 1130,
                  "decorators": [],
                  "name": "Value",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1092,
        "end": 1106,
        "decorators": [],
        "name": "Level3of3Shape",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1106,
        "end": 1113,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1107,
            "end": 1112,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1107,
              "end": 1112,
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1135,
      "end": 1186,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1140,
        "end": 1154,
        "decorators": [],
        "name": "Level2of3Shape",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1164,
        "end": 1185,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1178,
          "end": 1185,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1179,
              "end": 1184,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1179,
                "end": 1184,
                "decorators": [],
                "name": "Value",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1164,
          "end": 1178,
          "decorators": [],
          "name": "Level3of3Shape",
          "optional": false,
          "typeAnnotation": null
        }
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1155,
              "end": 1160,
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1187,
      "end": 1238,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1192,
        "end": 1206,
        "decorators": [],
        "name": "Level1of3Shape",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1216,
        "end": 1237,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1230,
          "end": 1237,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1231,
              "end": 1236,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1231,
                "end": 1236,
                "decorators": [],
                "name": "Value",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1216,
          "end": 1230,
          "decorators": [],
          "name": "Level2of3Shape",
          "optional": false,
          "typeAnnotation": null
        }
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1207,
              "end": 1212,
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1240,
      "end": 1301,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1245,
        "end": 1262,
        "decorators": [],
        "name": "VarianceDeepShape",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1279,
        "end": 1300,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1293,
          "end": 1300,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1294,
              "end": 1299,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1294,
                "end": 1299,
                "decorators": [],
                "name": "Value",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1279,
          "end": 1293,
          "decorators": [],
          "name": "Level1of3Shape",
          "optional": false,
          "typeAnnotation": null
        }
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": true,
            "name": {
              "type": "Identifier",
              "start": 1270,
              "end": 1275,
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null
            },
            "out": true
          }
        ]
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1315,
            "end": 1341,
            "decorators": [],
            "name": "vds1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1319,
              "end": 1341,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1321,
                "end": 1341,
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
                        "raw": "1",
                        "value": 1
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1321,
                  "end": 1338,
                  "decorators": [],
                  "name": "VarianceDeepShape",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1355,
            "end": 1386,
            "decorators": [],
            "name": "vds12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1360,
              "end": 1386,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1362,
                "end": 1386,
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
                            "raw": "1",
                            "value": 1
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
                            "raw": "2",
                            "value": 2
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1362,
                  "end": 1379,
                  "decorators": [],
                  "name": "VarianceDeepShape",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 1389,
      "end": 1402,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1389,
        "end": 1401,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1389,
          "end": 1393,
          "decorators": [],
          "name": "vds1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1396,
          "end": 1401,
          "decorators": [],
          "name": "vds12",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1403,
      "end": 1416,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1403,
        "end": 1415,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 1403,
          "end": 1408,
          "decorators": [],
          "name": "vds12",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 1411,
          "end": 1415,
          "decorators": [],
          "name": "vds1",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
