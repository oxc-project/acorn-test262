__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 867,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 128,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 22,
        "name": "IntrinsicElements",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 25,
        "end": 127,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 29,
            "end": 75,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 32,
              "name": "div",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 74,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 34,
                "end": 74,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 40,
                    "end": 70,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 40,
                      "end": 48,
                      "name": "onChange",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 48,
                      "end": 69,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 50,
                        "end": 69,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 51,
                            "end": 60,
                            "name": "ev",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 53,
                              "end": 60,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 55,
                                "end": 60,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 55,
                                  "end": 60,
                                  "name": "Event",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 62,
                          "end": 69,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 65,
                            "end": 69
                          }
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 78,
            "end": 125,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 82,
              "name": "span",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 82,
              "end": 124,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 84,
                "end": 124,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 90,
                    "end": 120,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 90,
                      "end": 98,
                      "name": "onChange",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 98,
                      "end": 119,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 100,
                        "end": 119,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 101,
                            "end": 110,
                            "name": "ev",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 103,
                              "end": 110,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 105,
                                "end": 110,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 105,
                                  "end": 110,
                                  "name": "Event",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 112,
                          "end": 119,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 115,
                            "end": 119
                          }
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
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
      "start": 130,
      "end": 173,
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 146,
        "name": "ElementType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 149,
        "end": 172,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 155,
          "end": 172,
          "typeName": {
            "type": "Identifier",
            "start": 155,
            "end": 172,
            "name": "IntrinsicElements",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 175,
      "end": 213,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 179,
          "end": 212,
          "id": {
            "type": "Identifier",
            "start": 179,
            "end": 195,
            "name": "DEFAULT_TABS_TAG",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 198,
            "end": 212,
            "expression": {
              "type": "Literal",
              "start": 198,
              "end": 203,
              "value": "div",
              "raw": "\"div\""
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 207,
              "end": 212,
              "typeName": {
                "type": "Identifier",
                "start": 207,
                "end": 212,
                "name": "const",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 215,
      "end": 337,
      "id": {
        "type": "Identifier",
        "start": 220,
        "end": 225,
        "name": "Props",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 225,
        "end": 267,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 226,
            "end": 250,
            "name": {
              "type": "Identifier",
              "start": 226,
              "end": 230,
              "name": "TTag",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 239,
              "end": 250,
              "typeName": {
                "type": "Identifier",
                "start": 239,
                "end": 250,
                "name": "ElementType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 252,
            "end": 266,
            "name": {
              "type": "Identifier",
              "start": 252,
              "end": 261,
              "name": "Overrides",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "start": 264,
              "end": 266,
              "members": []
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 270,
        "end": 336,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 270,
            "end": 322,
            "typeName": {
              "type": "Identifier",
              "start": 270,
              "end": 274,
              "name": "Omit",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 274,
              "end": 322,
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 278,
                  "end": 301,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 278,
                    "end": 295,
                    "typeName": {
                      "type": "Identifier",
                      "start": 278,
                      "end": 295,
                      "name": "IntrinsicElements",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 296,
                    "end": 300,
                    "typeName": {
                      "type": "Identifier",
                      "start": 296,
                      "end": 300,
                      "name": "TTag",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "TSTypeOperator",
                  "start": 305,
                  "end": 320,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 311,
                    "end": 320,
                    "typeName": {
                      "type": "Identifier",
                      "start": 311,
                      "end": 320,
                      "name": "Overrides",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              ]
            }
          },
          {
            "type": "TSTypeReference",
            "start": 327,
            "end": 336,
            "typeName": {
              "type": "Identifier",
              "start": 327,
              "end": 336,
              "name": "Overrides",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 339,
      "end": 578,
      "id": {
        "type": "Identifier",
        "start": 344,
        "end": 357,
        "name": "TabGroupProps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 357,
        "end": 409,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 358,
            "end": 408,
            "name": {
              "type": "Identifier",
              "start": 358,
              "end": 362,
              "name": "TTag",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 371,
              "end": 382,
              "typeName": {
                "type": "Identifier",
                "start": 371,
                "end": 382,
                "name": "ElementType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": {
              "type": "TSTypeQuery",
              "start": 385,
              "end": 408,
              "exprName": {
                "type": "Identifier",
                "start": 392,
                "end": 408,
                "name": "DEFAULT_TABS_TAG",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 412,
        "end": 577,
        "typeName": {
          "type": "Identifier",
          "start": 412,
          "end": 417,
          "name": "Props",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 417,
          "end": 577,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 421,
              "end": 425,
              "typeName": {
                "type": "Identifier",
                "start": 421,
                "end": 425,
                "name": "TTag",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeLiteral",
              "start": 429,
              "end": 575,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 435,
                  "end": 457,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 435,
                    "end": 447,
                    "name": "defaultIndex",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 448,
                    "end": 456,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 450,
                      "end": 456
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 462,
                  "end": 497,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 462,
                    "end": 470,
                    "name": "onChange",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 471,
                    "end": 496,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 473,
                      "end": 496,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 474,
                          "end": 487,
                          "name": "index",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 479,
                            "end": 487,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 481,
                              "end": 487
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 489,
                        "end": 496,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 492,
                          "end": 496
                        }
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 502,
                  "end": 525,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 502,
                    "end": 515,
                    "name": "selectedIndex",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 516,
                    "end": 524,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 518,
                      "end": 524
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 530,
                  "end": 549,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 530,
                    "end": 538,
                    "name": "vertical",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 539,
                    "end": 548,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 541,
                      "end": 548
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 554,
                  "end": 571,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 554,
                    "end": 560,
                    "name": "manual",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 561,
                    "end": 570,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 563,
                      "end": 570
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 580,
      "end": 720,
      "id": {
        "type": "Identifier",
        "start": 590,
        "end": 617,
        "name": "_internal_ComponentTabGroup",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 618,
        "end": 720,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 622,
            "end": 718,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 622,
              "end": 674,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 623,
                  "end": 673,
                  "name": {
                    "type": "Identifier",
                    "start": 623,
                    "end": 627,
                    "name": "TTag",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 636,
                    "end": 647,
                    "typeName": {
                      "type": "Identifier",
                      "start": 636,
                      "end": 647,
                      "name": "ElementType",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "default": {
                    "type": "TSTypeQuery",
                    "start": 650,
                    "end": 673,
                    "exprName": {
                      "type": "Identifier",
                      "start": 657,
                      "end": 673,
                      "name": "DEFAULT_TABS_TAG",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 680,
                "end": 706,
                "name": "props",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 685,
                  "end": 706,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 687,
                    "end": 706,
                    "typeName": {
                      "type": "Identifier",
                      "start": 687,
                      "end": 700,
                      "name": "TabGroupProps",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 700,
                      "end": 706,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 701,
                          "end": 705,
                          "typeName": {
                            "type": "Identifier",
                            "start": 701,
                            "end": 705,
                            "name": "TTag",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 711,
              "end": 717,
              "typeAnnotation": {
                "type": "TSNullKeyword",
                "start": 713,
                "end": 717
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 722,
      "end": 772,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 734,
          "end": 771,
          "id": {
            "type": "Identifier",
            "start": 734,
            "end": 771,
            "name": "TabGroup",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 742,
              "end": 771,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 744,
                "end": 771,
                "typeName": {
                  "type": "Identifier",
                  "start": 744,
                  "end": 771,
                  "name": "_internal_ComponentTabGroup",
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
      "kind": "let",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 774,
      "end": 866,
      "expression": {
        "type": "CallExpression",
        "start": 774,
        "end": 865,
        "callee": {
          "type": "Identifier",
          "start": 774,
          "end": 782,
          "name": "TabGroup",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 783,
            "end": 864,
            "properties": [
              {
                "type": "Property",
                "start": 787,
                "end": 802,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 787,
                  "end": 799,
                  "name": "defaultIndex",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 801,
                  "end": 802,
                  "value": 0,
                  "raw": "0"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 806,
                "end": 861,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 806,
                  "end": 814,
                  "name": "onChange",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 816,
                  "end": 861,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 817,
                      "end": 822,
                      "name": "index",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 827,
                    "end": 861,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 833,
                        "end": 857,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 839,
                            "end": 856,
                            "id": {
                              "type": "Identifier",
                              "start": 839,
                              "end": 848,
                              "name": "i",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 840,
                                "end": 848,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 842,
                                  "end": 848
                                }
                              },
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "Identifier",
                              "start": 851,
                              "end": 856,
                              "name": "index",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "definite": false
                          }
                        ],
                        "kind": "const",
                        "declare": false
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
