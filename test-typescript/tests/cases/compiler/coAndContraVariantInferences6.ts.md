coAndContraVariantInferences6.ts
```json
{
  "type": "Program",
  "start": 57,
  "end": 921,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 57,
      "end": 101,
      "body": {
        "type": "TSInterfaceBody",
        "start": 78,
        "end": 101,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 82,
            "end": 99,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 82,
              "end": 87,
              "decorators": [],
              "name": "value",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 87,
              "end": 98,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 89,
                "end": 98,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 89,
                    "end": 92,
                    "literal": {
                      "type": "Literal",
                      "start": 89,
                      "end": 92,
                      "raw": "\"A\"",
                      "value": "A"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 95,
                    "end": 98,
                    "literal": {
                      "type": "Literal",
                      "start": 95,
                      "end": 98,
                      "raw": "\"B\"",
                      "value": "B"
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 77,
        "decorators": [],
        "name": "ExactProps",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 102,
      "end": 181,
      "body": {
        "type": "TSInterfaceBody",
        "start": 138,
        "end": 181,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 142,
            "end": 179,
            "params": [
              {
                "type": "Identifier",
                "start": 143,
                "end": 151,
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 148,
                  "end": 151,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 150,
                    "end": 151,
                    "typeName": {
                      "type": "Identifier",
                      "start": 150,
                      "end": 151,
                      "decorators": [],
                      "name": "P",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 152,
              "end": 178,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 154,
                "end": 178,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 154,
                    "end": 171,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 166,
                      "end": 171,
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 167,
                          "end": 170
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 154,
                      "end": 166,
                      "decorators": [],
                      "name": "ReactElement",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 174,
                    "end": 178
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 129,
        "decorators": [],
        "name": "FunctionComponent",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 129,
        "end": 137,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 130,
            "end": 136,
            "const": false,
            "default": {
              "type": "TSTypeLiteral",
              "start": 134,
              "end": 136,
              "members": []
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 130,
              "end": 131,
              "decorators": [],
              "name": "P",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 182,
      "end": 237,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 209,
        "end": 237,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 213,
            "end": 235,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 213,
              "end": 224,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 224,
              "end": 235,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 225,
                  "end": 233,
                  "decorators": [],
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 230,
                    "end": 233,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 232,
                      "end": 233,
                      "typeName": {
                        "type": "Identifier",
                        "start": 232,
                        "end": 233,
                        "decorators": [],
                        "name": "P",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 196,
        "end": 205,
        "decorators": [],
        "name": "Component",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 205,
        "end": 208,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 206,
            "end": 207,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 206,
              "end": 207,
              "decorators": [],
              "name": "P",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 238,
      "end": 306,
      "body": {
        "type": "TSInterfaceBody",
        "start": 271,
        "end": 306,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 275,
            "end": 304,
            "params": [
              {
                "type": "Identifier",
                "start": 280,
                "end": 288,
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 285,
                  "end": 288,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 287,
                    "end": 288,
                    "typeName": {
                      "type": "Identifier",
                      "start": 287,
                      "end": 288,
                      "decorators": [],
                      "name": "P",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 289,
              "end": 303,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 291,
                "end": 303,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 300,
                  "end": 303,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 301,
                      "end": 302,
                      "typeName": {
                        "type": "Identifier",
                        "start": 301,
                        "end": 302,
                        "decorators": [],
                        "name": "P",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 291,
                  "end": 300,
                  "decorators": [],
                  "name": "Component",
                  "optional": false
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
        "start": 248,
        "end": 262,
        "decorators": [],
        "name": "ComponentClass",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 262,
        "end": 270,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 263,
            "end": 269,
            "const": false,
            "default": {
              "type": "TSTypeLiteral",
              "start": 267,
              "end": 269,
              "members": []
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 263,
              "end": 264,
              "decorators": [],
              "name": "P",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 308,
      "end": 445,
      "body": {
        "type": "TSInterfaceBody",
        "start": 431,
        "end": 445,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 435,
            "end": 443,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 435,
              "end": 439,
              "decorators": [],
              "name": "type",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 439,
              "end": 442,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 441,
                "end": 442,
                "typeName": {
                  "type": "Identifier",
                  "start": 441,
                  "end": 442,
                  "decorators": [],
                  "name": "T",
                  "optional": false
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
        "start": 318,
        "end": 330,
        "decorators": [],
        "name": "ReactElement",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 330,
        "end": 430,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 334,
            "end": 427,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 344,
              "end": 379,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 344,
                  "end": 350
                },
                {
                  "type": "TSTypeReference",
                  "start": 353,
                  "end": 379,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 374,
                    "end": 379,
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 375,
                        "end": 378
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 353,
                    "end": 374,
                    "decorators": [],
                    "name": "JSXElementConstructor",
                    "optional": false
                  }
                }
              ]
            },
            "default": {
              "type": "TSUnionType",
              "start": 386,
              "end": 427,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 388,
                  "end": 394
                },
                {
                  "type": "TSTypeReference",
                  "start": 401,
                  "end": 427,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 422,
                    "end": 427,
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 423,
                        "end": 426
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 401,
                    "end": 422,
                    "decorators": [],
                    "name": "JSXElementConstructor",
                    "optional": false
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 334,
              "end": 335,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 447,
      "end": 563,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 452,
        "end": 473,
        "decorators": [],
        "name": "JSXElementConstructor",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 481,
        "end": 562,
        "types": [
          {
            "type": "TSFunctionType",
            "start": 484,
            "end": 522,
            "params": [
              {
                "type": "Identifier",
                "start": 485,
                "end": 493,
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 490,
                  "end": 493,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 492,
                    "end": 493,
                    "typeName": {
                      "type": "Identifier",
                      "start": 492,
                      "end": 493,
                      "decorators": [],
                      "name": "P",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 495,
              "end": 522,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 498,
                "end": 522,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 498,
                    "end": 515,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 510,
                      "end": 515,
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 511,
                          "end": 514
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 498,
                      "end": 510,
                      "decorators": [],
                      "name": "ReactElement",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 518,
                    "end": 522
                  }
                ]
              }
            }
          },
          {
            "type": "TSConstructorType",
            "start": 529,
            "end": 561,
            "abstract": false,
            "params": [
              {
                "type": "Identifier",
                "start": 534,
                "end": 542,
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 539,
                  "end": 542,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 541,
                    "end": 542,
                    "typeName": {
                      "type": "Identifier",
                      "start": 541,
                      "end": 542,
                      "decorators": [],
                      "name": "P",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 544,
              "end": 561,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 547,
                "end": 561,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 556,
                  "end": 561,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 557,
                      "end": 560
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 547,
                  "end": 556,
                  "decorators": [],
                  "name": "Component",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 473,
        "end": 476,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 474,
            "end": 475,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 474,
              "end": 475,
              "decorators": [],
              "name": "P",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 565,
      "end": 706,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 582,
        "end": 603,
        "decorators": [],
        "name": "createElementIsolated",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 621,
          "end": 676,
          "decorators": [],
          "name": "type",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 625,
            "end": 676,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 627,
              "end": 676,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 627,
                  "end": 647,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 644,
                    "end": 647,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 645,
                        "end": 646,
                        "typeName": {
                          "type": "Identifier",
                          "start": 645,
                          "end": 646,
                          "decorators": [],
                          "name": "P",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 627,
                    "end": 644,
                    "decorators": [],
                    "name": "FunctionComponent",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 650,
                  "end": 667,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 664,
                    "end": 667,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 665,
                        "end": 666,
                        "typeName": {
                          "type": "Identifier",
                          "start": 665,
                          "end": 666,
                          "decorators": [],
                          "name": "P",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 650,
                    "end": 664,
                    "decorators": [],
                    "name": "ComponentClass",
                    "optional": false
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "start": 670,
                  "end": 676
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 680,
          "end": 696,
          "decorators": [],
          "name": "props",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 686,
            "end": 696,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 688,
              "end": 696,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 688,
                  "end": 689,
                  "typeName": {
                    "type": "Identifier",
                    "start": 688,
                    "end": 689,
                    "decorators": [],
                    "name": "P",
                    "optional": false
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "start": 692,
                  "end": 696
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 699,
        "end": 705,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 701,
          "end": 705
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 603,
        "end": 617,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 604,
            "end": 616,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 614,
              "end": 616,
              "members": []
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 604,
              "end": 605,
              "decorators": [],
              "name": "P",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 708,
      "end": 771,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 720,
          "end": 770,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 720,
            "end": 770,
            "decorators": [],
            "name": "WrapperIsolated",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 735,
              "end": 770,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 737,
                "end": 770,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 758,
                  "end": 770,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 759,
                      "end": 769,
                      "typeName": {
                        "type": "Identifier",
                        "start": 759,
                        "end": 769,
                        "decorators": [],
                        "name": "ExactProps",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 737,
                  "end": 758,
                  "decorators": [],
                  "name": "JSXElementConstructor",
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
      "start": 772,
      "end": 827,
      "expression": {
        "type": "CallExpression",
        "start": 772,
        "end": 826,
        "arguments": [
          {
            "type": "Identifier",
            "start": 794,
            "end": 809,
            "decorators": [],
            "name": "WrapperIsolated",
            "optional": false
          },
          {
            "type": "ObjectExpression",
            "start": 811,
            "end": 825,
            "properties": [
              {
                "type": "Property",
                "start": 813,
                "end": 823,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 813,
                  "end": 818,
                  "decorators": [],
                  "name": "value",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 820,
                  "end": 823,
                  "raw": "\"C\"",
                  "value": "C"
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 772,
          "end": 793,
          "decorators": [],
          "name": "createElementIsolated",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 829,
      "end": 856,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 843,
          "end": 855,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 843,
            "end": 855,
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 848,
              "end": 855,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 850,
                "end": 855,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 850,
                  "end": 853
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 857,
      "end": 881,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 871,
          "end": 880,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 871,
            "end": 880,
            "decorators": [],
            "name": "stat",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 875,
              "end": 880,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 877,
                "end": 880
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 882,
      "end": 920,
      "expression": {
        "type": "CallExpression",
        "start": 882,
        "end": 919,
        "arguments": [
          {
            "type": "Identifier",
            "start": 896,
            "end": 901,
            "decorators": [],
            "name": "props",
            "optional": false
          },
          {
            "type": "MemberExpression",
            "start": 903,
            "end": 918,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 903,
              "end": 907,
              "decorators": [],
              "name": "stat",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 908,
              "end": 918,
              "decorators": [],
              "name": "properties",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 882,
          "end": 895,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 882,
            "end": 889,
            "computed": false,
            "object": {
              "type": "ArrayExpression",
              "start": 882,
              "end": 884,
              "elements": []
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 885,
              "end": 889,
              "decorators": [],
              "name": "push",
              "optional": false
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 890,
            "end": 895,
            "decorators": [],
            "name": "apply",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
