__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 920,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 57,
      "end": 101,
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 77,
        "decorators": [],
        "name": "ExactProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 82,
              "end": 87,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
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
                      "value": "A",
                      "raw": "\"A\""
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
                      "value": "B",
                      "raw": "\"B\""
                    }
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
      "type": "TSInterfaceDeclaration",
      "start": 102,
      "end": 181,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 129,
        "decorators": [],
        "name": "FunctionComponent",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 130,
              "end": 131,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "start": 134,
              "end": 136,
              "members": []
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 138,
        "end": 181,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 142,
            "end": 179,
            "typeParameters": null,
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
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 154,
                      "end": 166,
                      "decorators": [],
                      "name": "ReactElement",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 182,
      "end": 237,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 196,
        "end": 205,
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 205,
        "end": 208,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 206,
            "end": 207,
            "name": {
              "type": "Identifier",
              "start": 206,
              "end": 207,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 209,
        "end": 237,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 213,
            "end": 235,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 213,
              "end": 224,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 224,
              "end": 235,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 238,
      "end": 306,
      "id": {
        "type": "Identifier",
        "start": 248,
        "end": 262,
        "decorators": [],
        "name": "ComponentClass",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 263,
              "end": 264,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "start": 267,
              "end": 269,
              "members": []
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 271,
        "end": 306,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 275,
            "end": 304,
            "typeParameters": null,
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
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
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
                "typeName": {
                  "type": "Identifier",
                  "start": 291,
                  "end": 300,
                  "decorators": [],
                  "name": "Component",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 308,
      "end": 445,
      "id": {
        "type": "Identifier",
        "start": 318,
        "end": 330,
        "decorators": [],
        "name": "ReactElement",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 334,
              "end": 335,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 353,
                    "end": 374,
                    "decorators": [],
                    "name": "JSXElementConstructor",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 401,
                    "end": 422,
                    "decorators": [],
                    "name": "JSXElementConstructor",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                  }
                }
              ]
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 435,
              "end": 439,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 447,
      "end": 563,
      "id": {
        "type": "Identifier",
        "start": 452,
        "end": 473,
        "decorators": [],
        "name": "JSXElementConstructor",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 474,
              "end": 475,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
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
        "type": "TSUnionType",
        "start": 481,
        "end": 562,
        "types": [
          {
            "type": "TSFunctionType",
            "start": 484,
            "end": 522,
            "typeParameters": null,
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
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 498,
                      "end": 510,
                      "decorators": [],
                      "name": "ReactElement",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
            "typeParameters": null,
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
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
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
                "typeName": {
                  "type": "Identifier",
                  "start": 547,
                  "end": 556,
                  "decorators": [],
                  "name": "Component",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                }
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 565,
      "end": 706,
      "id": {
        "type": "Identifier",
        "start": 582,
        "end": 603,
        "decorators": [],
        "name": "createElementIsolated",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 603,
        "end": 617,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 604,
            "end": 616,
            "name": {
              "type": "Identifier",
              "start": 604,
              "end": 605,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 614,
              "end": 616,
              "members": []
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 627,
                    "end": 644,
                    "decorators": [],
                    "name": "FunctionComponent",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 650,
                  "end": 667,
                  "typeName": {
                    "type": "Identifier",
                    "start": 650,
                    "end": 664,
                    "decorators": [],
                    "name": "ComponentClass",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
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
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
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
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 708,
      "end": 771,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 720,
          "end": 770,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 737,
                  "end": 758,
                  "decorators": [],
                  "name": "JSXElementConstructor",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 772,
      "end": 827,
      "expression": {
        "type": "CallExpression",
        "start": 772,
        "end": 826,
        "callee": {
          "type": "Identifier",
          "start": 772,
          "end": 793,
          "decorators": [],
          "name": "createElementIsolated",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 794,
            "end": 809,
            "decorators": [],
            "name": "WrapperIsolated",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 813,
                  "end": 818,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 820,
                  "end": 823,
                  "value": "C",
                  "raw": "\"C\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 829,
      "end": 856,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 843,
          "end": 855,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 857,
      "end": 881,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 871,
          "end": 880,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 882,
      "end": 920,
      "expression": {
        "type": "CallExpression",
        "start": 882,
        "end": 919,
        "callee": {
          "type": "MemberExpression",
          "start": 882,
          "end": 895,
          "object": {
            "type": "MemberExpression",
            "start": 882,
            "end": 889,
            "object": {
              "type": "ArrayExpression",
              "start": 882,
              "end": 884,
              "elements": []
            },
            "property": {
              "type": "Identifier",
              "start": 885,
              "end": 889,
              "decorators": [],
              "name": "push",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 890,
            "end": 895,
            "decorators": [],
            "name": "apply",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 896,
            "end": 901,
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "MemberExpression",
            "start": 903,
            "end": 918,
            "object": {
              "type": "Identifier",
              "start": 903,
              "end": 907,
              "decorators": [],
              "name": "stat",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 908,
              "end": 918,
              "decorators": [],
              "name": "properties",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
