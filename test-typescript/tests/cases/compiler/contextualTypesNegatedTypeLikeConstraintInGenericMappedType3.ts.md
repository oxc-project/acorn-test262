__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 15,
        "name": "MappedOmit",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 19,
            "end": 38,
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 42,
        "end": 84,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 45,
          "end": 57,
          "name": {
            "type": "Identifier",
            "start": 45,
            "end": 46,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": {
          "type": "TSTypeReference",
          "start": 61,
          "end": 74,
          "typeName": {
            "type": "Identifier",
            "start": 61,
            "end": 68,
            "name": "Exclude",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                  "name": "P",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 72,
                "end": 73,
                "typeName": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 73,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 77,
          "end": 81,
          "objectType": {
            "type": "TSTypeReference",
            "start": 77,
            "end": 78,
            "typeName": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 79,
            "end": 80,
            "typeName": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "optional": null,
        "readonly": null,
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 45,
          "end": 46,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 86,
      "end": 214,
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 108,
        "name": "IntrinsicElements",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 115,
              "end": 118,
              "name": "div",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 126,
                      "end": 134,
                      "name": "onChange",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 134,
                      "end": 155,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 136,
                        "end": 155,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 137,
                            "end": 146,
                            "name": "ev",
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
                          "start": 148,
                          "end": 155,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 151,
                            "end": 155
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
            "start": 164,
            "end": 211,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 164,
              "end": 168,
              "name": "span",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 176,
                      "end": 184,
                      "name": "onChange",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 184,
                      "end": 205,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 186,
                        "end": 205,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 187,
                            "end": 196,
                            "name": "ev",
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
                          "start": 198,
                          "end": 205,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 201,
                            "end": 205
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
      "start": 216,
      "end": 259,
      "id": {
        "type": "Identifier",
        "start": 221,
        "end": 232,
        "name": "ElementType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
      "start": 261,
      "end": 299,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 265,
          "end": 298,
          "id": {
            "type": "Identifier",
            "start": 265,
            "end": 281,
            "name": "DEFAULT_TABS_TAG",
            "typeAnnotation": null,
            "decorators": [],
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
              "value": "div",
              "raw": "\"div\""
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 293,
              "end": 298,
              "typeName": {
                "type": "Identifier",
                "start": 293,
                "end": 298,
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
      "start": 301,
      "end": 429,
      "id": {
        "type": "Identifier",
        "start": 306,
        "end": 311,
        "name": "Props",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 312,
              "end": 316,
              "name": "TTag",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 325,
              "end": 336,
              "typeName": {
                "type": "Identifier",
                "start": 325,
                "end": 336,
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
            "start": 338,
            "end": 352,
            "name": {
              "type": "Identifier",
              "start": 338,
              "end": 347,
              "name": "Overrides",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "start": 350,
              "end": 352,
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
        "start": 356,
        "end": 428,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 356,
            "end": 414,
            "typeName": {
              "type": "Identifier",
              "start": 356,
              "end": 366,
              "name": "MappedOmit",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 366,
              "end": 414,
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 370,
                  "end": 393,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 370,
                    "end": 387,
                    "typeName": {
                      "type": "Identifier",
                      "start": 370,
                      "end": 387,
                      "name": "IntrinsicElements",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 388,
                    "end": 392,
                    "typeName": {
                      "type": "Identifier",
                      "start": 388,
                      "end": 392,
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
            "start": 419,
            "end": 428,
            "typeName": {
              "type": "Identifier",
              "start": 419,
              "end": 428,
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
      "start": 431,
      "end": 670,
      "id": {
        "type": "Identifier",
        "start": 436,
        "end": 449,
        "name": "TabGroupProps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 450,
              "end": 454,
              "name": "TTag",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 463,
              "end": 474,
              "typeName": {
                "type": "Identifier",
                "start": 463,
                "end": 474,
                "name": "ElementType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": {
              "type": "TSTypeQuery",
              "start": 477,
              "end": 500,
              "exprName": {
                "type": "Identifier",
                "start": 484,
                "end": 500,
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
        "start": 504,
        "end": 669,
        "typeName": {
          "type": "Identifier",
          "start": 504,
          "end": 509,
          "name": "Props",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "name": "TTag",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
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
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 527,
                    "end": 539,
                    "name": "defaultIndex",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 540,
                    "end": 548,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 542,
                      "end": 548
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 554,
                  "end": 589,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 554,
                    "end": 562,
                    "name": "onChange",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 563,
                    "end": 588,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 565,
                      "end": 588,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 566,
                          "end": 579,
                          "name": "index",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 571,
                            "end": 579,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 573,
                              "end": 579
                            }
                          },
                          "decorators": [],
                          "optional": false
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
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 594,
                  "end": 617,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 594,
                    "end": 607,
                    "name": "selectedIndex",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 608,
                    "end": 616,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 610,
                      "end": 616
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 622,
                  "end": 641,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 622,
                    "end": 630,
                    "name": "vertical",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 631,
                    "end": 640,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 633,
                      "end": 640
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 646,
                  "end": 663,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 646,
                    "end": 652,
                    "name": "manual",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 653,
                    "end": 662,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 655,
                      "end": 662
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
      "start": 672,
      "end": 812,
      "id": {
        "type": "Identifier",
        "start": 682,
        "end": 709,
        "name": "_internal_ComponentTabGroup",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 710,
        "end": 812,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 714,
            "end": 810,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 714,
              "end": 766,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 715,
                  "end": 765,
                  "name": {
                    "type": "Identifier",
                    "start": 715,
                    "end": 719,
                    "name": "TTag",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 728,
                    "end": 739,
                    "typeName": {
                      "type": "Identifier",
                      "start": 728,
                      "end": 739,
                      "name": "ElementType",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "default": {
                    "type": "TSTypeQuery",
                    "start": 742,
                    "end": 765,
                    "exprName": {
                      "type": "Identifier",
                      "start": 749,
                      "end": 765,
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
                "start": 772,
                "end": 798,
                "name": "props",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 777,
                  "end": 798,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 779,
                    "end": 798,
                    "typeName": {
                      "type": "Identifier",
                      "start": 779,
                      "end": 792,
                      "name": "TabGroupProps",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
              "start": 803,
              "end": 809,
              "typeAnnotation": {
                "type": "TSNullKeyword",
                "start": 805,
                "end": 809
              }
            }
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 826,
            "end": 863,
            "name": "TabGroup",
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
      "start": 866,
      "end": 958,
      "expression": {
        "type": "CallExpression",
        "start": 866,
        "end": 957,
        "callee": {
          "type": "Identifier",
          "start": 866,
          "end": 874,
          "name": "TabGroup",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 879,
                  "end": 891,
                  "name": "defaultIndex",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 893,
                  "end": 894,
                  "value": 0,
                  "raw": "0"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 898,
                "end": 953,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 898,
                  "end": 906,
                  "name": "onChange",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 908,
                  "end": 953,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 909,
                      "end": 914,
                      "name": "index",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
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
                            "id": {
                              "type": "Identifier",
                              "start": 931,
                              "end": 940,
                              "name": "i",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 932,
                                "end": 940,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 934,
                                  "end": 940
                                }
                              },
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "Identifier",
                              "start": 943,
                              "end": 948,
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
