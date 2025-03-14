contextualTypesNegatedTypeLikeConstraintInGenericMappedType3.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 959,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 84,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 15,
        "decorators": [],
        "name": "MappedOmit",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 42,
        "end": 84,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 50,
          "end": 57,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 56,
            "end": 57,
            "typeName": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 45,
          "end": 46,
          "decorators": [],
          "name": "P",
          "optional": false
        },
        "nameType": {
          "type": "TSTypeReference",
          "start": 61,
          "end": 74,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 68,
            "end": 74,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 69,
                "end": 70,
                "typeName": {
                  "type": "Identifier",
                  "start": 69,
                  "end": 70,
                  "decorators": [],
                  "name": "P",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 72,
                "end": 73,
                "typeName": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 73,
                  "decorators": [],
                  "name": "K",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 61,
            "end": 68,
            "decorators": [],
            "name": "Exclude",
            "optional": false
          }
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 77,
          "end": 81,
          "indexType": {
            "type": "TSTypeReference",
            "start": 79,
            "end": 80,
            "typeName": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "decorators": [],
              "name": "P",
              "optional": false
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 77,
            "end": 78,
            "typeName": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 15,
        "end": 39,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 19,
            "end": 38,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 29,
              "end": 38,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 35,
                "end": 38
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 86,
      "end": 214,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 108,
        "decorators": [],
        "name": "IntrinsicElements",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 111,
        "end": 213,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 115,
            "end": 161,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 115,
              "end": 118,
              "decorators": [],
              "name": "div",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 118,
              "end": 160,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 120,
                "end": 160,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 126,
                    "end": 156,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 126,
                      "end": 134,
                      "decorators": [],
                      "name": "onChange",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 134,
                      "end": 155,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 136,
                        "end": 155,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 137,
                            "end": 146,
                            "decorators": [],
                            "name": "ev",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 139,
                              "end": 146,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 141,
                                "end": 146,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 141,
                                  "end": 146,
                                  "decorators": [],
                                  "name": "Event",
                                  "optional": false
                                }
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 148,
                          "end": 155,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 151,
                            "end": 155
                          }
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 164,
            "end": 211,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 164,
              "end": 168,
              "decorators": [],
              "name": "span",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 168,
              "end": 210,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 170,
                "end": 210,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 176,
                    "end": 206,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 176,
                      "end": 184,
                      "decorators": [],
                      "name": "onChange",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 184,
                      "end": 205,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 186,
                        "end": 205,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 187,
                            "end": 196,
                            "decorators": [],
                            "name": "ev",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 189,
                              "end": 196,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 191,
                                "end": 196,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 191,
                                  "end": 196,
                                  "decorators": [],
                                  "name": "Event",
                                  "optional": false
                                }
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 198,
                          "end": 205,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 201,
                            "end": 205
                          }
                        }
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 216,
      "end": 259,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 221,
        "end": 232,
        "decorators": [],
        "name": "ElementType",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 235,
        "end": 258,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 241,
          "end": 258,
          "typeName": {
            "type": "Identifier",
            "start": 241,
            "end": 258,
            "decorators": [],
            "name": "IntrinsicElements",
            "optional": false
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 261,
      "end": 299,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 265,
          "end": 298,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 265,
            "end": 281,
            "decorators": [],
            "name": "DEFAULT_TABS_TAG",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 284,
            "end": 298,
            "expression": {
              "type": "Literal",
              "start": 284,
              "end": 289,
              "raw": "\"div\"",
              "value": "div"
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 293,
              "end": 298,
              "typeName": {
                "type": "Identifier",
                "start": 293,
                "end": 298,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 301,
      "end": 429,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 306,
        "end": 311,
        "decorators": [],
        "name": "Props",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 356,
        "end": 428,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 356,
            "end": 414,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 366,
              "end": 414,
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 370,
                  "end": 393,
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 388,
                    "end": 392,
                    "typeName": {
                      "type": "Identifier",
                      "start": 388,
                      "end": 392,
                      "decorators": [],
                      "name": "TTag",
                      "optional": false
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 370,
                    "end": 387,
                    "typeName": {
                      "type": "Identifier",
                      "start": 370,
                      "end": 387,
                      "decorators": [],
                      "name": "IntrinsicElements",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "TSTypeOperator",
                  "start": 397,
                  "end": 412,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 403,
                    "end": 412,
                    "typeName": {
                      "type": "Identifier",
                      "start": 403,
                      "end": 412,
                      "decorators": [],
                      "name": "Overrides",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 356,
              "end": 366,
              "decorators": [],
              "name": "MappedOmit",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 419,
            "end": 428,
            "typeName": {
              "type": "Identifier",
              "start": 419,
              "end": 428,
              "decorators": [],
              "name": "Overrides",
              "optional": false
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 311,
        "end": 353,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 312,
            "end": 336,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 325,
              "end": 336,
              "typeName": {
                "type": "Identifier",
                "start": 325,
                "end": 336,
                "decorators": [],
                "name": "ElementType",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 312,
              "end": 316,
              "decorators": [],
              "name": "TTag",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 338,
            "end": 352,
            "const": false,
            "default": {
              "type": "TSTypeLiteral",
              "start": 350,
              "end": 352,
              "members": []
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 338,
              "end": 347,
              "decorators": [],
              "name": "Overrides",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 431,
      "end": 670,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 436,
        "end": 449,
        "decorators": [],
        "name": "TabGroupProps",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 504,
        "end": 669,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 509,
          "end": 669,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 513,
              "end": 517,
              "typeName": {
                "type": "Identifier",
                "start": 513,
                "end": 517,
                "decorators": [],
                "name": "TTag",
                "optional": false
              }
            },
            {
              "type": "TSTypeLiteral",
              "start": 521,
              "end": 667,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 527,
                  "end": 549,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 527,
                    "end": 539,
                    "decorators": [],
                    "name": "defaultIndex",
                    "optional": false
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 540,
                    "end": 548,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 542,
                      "end": 548
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 554,
                  "end": 589,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 554,
                    "end": 562,
                    "decorators": [],
                    "name": "onChange",
                    "optional": false
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 563,
                    "end": 588,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 565,
                      "end": 588,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 566,
                          "end": 579,
                          "decorators": [],
                          "name": "index",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 571,
                            "end": 579,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 573,
                              "end": 579
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 581,
                        "end": 588,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 584,
                          "end": 588
                        }
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 594,
                  "end": 617,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 594,
                    "end": 607,
                    "decorators": [],
                    "name": "selectedIndex",
                    "optional": false
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 608,
                    "end": 616,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 610,
                      "end": 616
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 622,
                  "end": 641,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 622,
                    "end": 630,
                    "decorators": [],
                    "name": "vertical",
                    "optional": false
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 631,
                    "end": 640,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 633,
                      "end": 640
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 646,
                  "end": 663,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 646,
                    "end": 652,
                    "decorators": [],
                    "name": "manual",
                    "optional": false
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 653,
                    "end": 662,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 655,
                      "end": 662
                    }
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 504,
          "end": 509,
          "decorators": [],
          "name": "Props",
          "optional": false
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 449,
        "end": 501,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 450,
            "end": 500,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 463,
              "end": 474,
              "typeName": {
                "type": "Identifier",
                "start": 463,
                "end": 474,
                "decorators": [],
                "name": "ElementType",
                "optional": false
              }
            },
            "default": {
              "type": "TSTypeQuery",
              "start": 477,
              "end": 500,
              "exprName": {
                "type": "Identifier",
                "start": 484,
                "end": 500,
                "decorators": [],
                "name": "DEFAULT_TABS_TAG",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 450,
              "end": 454,
              "decorators": [],
              "name": "TTag",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 672,
      "end": 812,
      "body": {
        "type": "TSInterfaceBody",
        "start": 710,
        "end": 812,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 714,
            "end": 810,
            "params": [
              {
                "type": "Identifier",
                "start": 772,
                "end": 798,
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 777,
                  "end": 798,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 779,
                    "end": 798,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 792,
                      "end": 798,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 793,
                          "end": 797,
                          "typeName": {
                            "type": "Identifier",
                            "start": 793,
                            "end": 797,
                            "decorators": [],
                            "name": "TTag",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 779,
                      "end": 792,
                      "decorators": [],
                      "name": "TabGroupProps",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 803,
              "end": 809,
              "typeAnnotation": {
                "type": "TSNullKeyword",
                "start": 805,
                "end": 809
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 714,
              "end": 766,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 715,
                  "end": 765,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 728,
                    "end": 739,
                    "typeName": {
                      "type": "Identifier",
                      "start": 728,
                      "end": 739,
                      "decorators": [],
                      "name": "ElementType",
                      "optional": false
                    }
                  },
                  "default": {
                    "type": "TSTypeQuery",
                    "start": 742,
                    "end": 765,
                    "exprName": {
                      "type": "Identifier",
                      "start": 749,
                      "end": 765,
                      "decorators": [],
                      "name": "DEFAULT_TABS_TAG",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 715,
                    "end": 719,
                    "decorators": [],
                    "name": "TTag",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 682,
        "end": 709,
        "decorators": [],
        "name": "_internal_ComponentTabGroup",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 814,
      "end": 864,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 826,
          "end": 863,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 826,
            "end": 863,
            "decorators": [],
            "name": "TabGroup",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 834,
              "end": 863,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 836,
                "end": 863,
                "typeName": {
                  "type": "Identifier",
                  "start": 836,
                  "end": 863,
                  "decorators": [],
                  "name": "_internal_ComponentTabGroup",
                  "optional": false
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
      "start": 866,
      "end": 958,
      "expression": {
        "type": "CallExpression",
        "start": 866,
        "end": 957,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 875,
            "end": 956,
            "properties": [
              {
                "type": "Property",
                "start": 879,
                "end": 894,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 879,
                  "end": 891,
                  "decorators": [],
                  "name": "defaultIndex",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 893,
                  "end": 894,
                  "raw": "0",
                  "value": 0
                }
              },
              {
                "type": "Property",
                "start": 898,
                "end": 953,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 898,
                  "end": 906,
                  "decorators": [],
                  "name": "onChange",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 908,
                  "end": 953,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 919,
                    "end": 953,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 925,
                        "end": 949,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 931,
                            "end": 948,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 931,
                              "end": 940,
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 932,
                                "end": 940,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 934,
                                  "end": 940
                                }
                              }
                            },
                            "init": {
                              "type": "Identifier",
                              "start": 943,
                              "end": 948,
                              "decorators": [],
                              "name": "index",
                              "optional": false
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "const"
                      }
                    ]
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 909,
                      "end": 914,
                      "decorators": [],
                      "name": "index",
                      "optional": false
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 866,
          "end": 874,
          "decorators": [],
          "name": "TabGroup",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
