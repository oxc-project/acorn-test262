__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExactProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 77
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 87
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "A",
                      "raw": "\"A\"",
                      "start": 89,
                      "end": 92
                    },
                    "start": 89,
                    "end": 92
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "B",
                      "raw": "\"B\"",
                      "start": 95,
                      "end": 98
                    },
                    "start": 95,
                    "end": 98
                  }
                ],
                "start": 89,
                "end": 98
              },
              "start": 87,
              "end": 98
            },
            "accessibility": null,
            "static": false,
            "start": 82,
            "end": 99
          }
        ],
        "start": 78,
        "end": 101
      },
      "declare": false,
      "start": 57,
      "end": 101
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FunctionComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 112,
        "end": 129
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 130,
              "end": 131
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 134,
              "end": 136
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 130,
            "end": 136
          }
        ],
        "start": 129,
        "end": 137
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 150,
                      "end": 151
                    },
                    "typeArguments": null,
                    "start": 150,
                    "end": 151
                  },
                  "start": 148,
                  "end": 151
                },
                "start": 143,
                "end": 151
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ReactElement",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 154,
                      "end": 166
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 167,
                          "end": 170
                        }
                      ],
                      "start": 166,
                      "end": 171
                    },
                    "start": 154,
                    "end": 171
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 174,
                    "end": 178
                  }
                ],
                "start": 154,
                "end": 178
              },
              "start": 152,
              "end": 178
            },
            "start": 142,
            "end": 179
          }
        ],
        "start": 138,
        "end": 181
      },
      "declare": false,
      "start": 102,
      "end": 181
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null,
        "start": 196,
        "end": 205
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 206,
              "end": 207
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 206,
            "end": 207
          }
        ],
        "start": 205,
        "end": 208
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 213,
              "end": 224
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 232,
                        "end": 233
                      },
                      "typeArguments": null,
                      "start": 232,
                      "end": 233
                    },
                    "start": 230,
                    "end": 233
                  },
                  "start": 225,
                  "end": 233
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 224,
              "end": 235
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 213,
            "end": 235
          }
        ],
        "start": 209,
        "end": 237
      },
      "abstract": false,
      "declare": true,
      "start": 182,
      "end": 237
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 248,
        "end": 262
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 263,
              "end": 264
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 267,
              "end": 269
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 263,
            "end": 269
          }
        ],
        "start": 262,
        "end": 270
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 287,
                      "end": 288
                    },
                    "typeArguments": null,
                    "start": 287,
                    "end": 288
                  },
                  "start": 285,
                  "end": 288
                },
                "start": 280,
                "end": 288
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Component",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 291,
                  "end": 300
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 301,
                        "end": 302
                      },
                      "typeArguments": null,
                      "start": 301,
                      "end": 302
                    }
                  ],
                  "start": 300,
                  "end": 303
                },
                "start": 291,
                "end": 303
              },
              "start": 289,
              "end": 303
            },
            "start": 275,
            "end": 304
          }
        ],
        "start": 271,
        "end": 306
      },
      "declare": false,
      "start": 238,
      "end": 306
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReactElement",
        "optional": false,
        "typeAnnotation": null,
        "start": 318,
        "end": 330
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 334,
              "end": 335
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 344,
                  "end": 350
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "JSXElementConstructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 353,
                    "end": 374
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 375,
                        "end": 378
                      }
                    ],
                    "start": 374,
                    "end": 379
                  },
                  "start": 353,
                  "end": 379
                }
              ],
              "start": 344,
              "end": 379
            },
            "default": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 388,
                  "end": 394
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "JSXElementConstructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 401,
                    "end": 422
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 423,
                        "end": 426
                      }
                    ],
                    "start": 422,
                    "end": 427
                  },
                  "start": 401,
                  "end": 427
                }
              ],
              "start": 386,
              "end": 427
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 334,
            "end": 427
          }
        ],
        "start": 330,
        "end": 430
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 435,
              "end": 439
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 441,
                  "end": 442
                },
                "typeArguments": null,
                "start": 441,
                "end": 442
              },
              "start": 439,
              "end": 442
            },
            "accessibility": null,
            "static": false,
            "start": 435,
            "end": 443
          }
        ],
        "start": 431,
        "end": 445
      },
      "declare": false,
      "start": 308,
      "end": 445
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JSXElementConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 452,
        "end": 473
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 474,
              "end": 475
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 474,
            "end": 475
          }
        ],
        "start": 473,
        "end": 476
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSFunctionType",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 492,
                      "end": 493
                    },
                    "typeArguments": null,
                    "start": 492,
                    "end": 493
                  },
                  "start": 490,
                  "end": 493
                },
                "start": 485,
                "end": 493
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ReactElement",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 498,
                      "end": 510
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 511,
                          "end": 514
                        }
                      ],
                      "start": 510,
                      "end": 515
                    },
                    "start": 498,
                    "end": 515
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 518,
                    "end": 522
                  }
                ],
                "start": 498,
                "end": 522
              },
              "start": 495,
              "end": 522
            },
            "start": 484,
            "end": 522
          },
          {
            "type": "TSConstructorType",
            "abstract": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 541,
                      "end": 542
                    },
                    "typeArguments": null,
                    "start": 541,
                    "end": 542
                  },
                  "start": 539,
                  "end": 542
                },
                "start": 534,
                "end": 542
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Component",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 547,
                  "end": 556
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 557,
                      "end": 560
                    }
                  ],
                  "start": 556,
                  "end": 561
                },
                "start": 547,
                "end": 561
              },
              "start": 544,
              "end": 561
            },
            "start": 529,
            "end": 561
          }
        ],
        "start": 481,
        "end": 562
      },
      "declare": false,
      "start": 447,
      "end": 563
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createElementIsolated",
        "optional": false,
        "typeAnnotation": null,
        "start": 582,
        "end": 603
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 604,
              "end": 605
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 614,
              "end": 616
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 604,
            "end": 616
          }
        ],
        "start": 603,
        "end": 617
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "type",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "FunctionComponent",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 627,
                    "end": 644
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 645,
                          "end": 646
                        },
                        "typeArguments": null,
                        "start": 645,
                        "end": 646
                      }
                    ],
                    "start": 644,
                    "end": 647
                  },
                  "start": 627,
                  "end": 647
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ComponentClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 650,
                    "end": 664
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 665,
                          "end": 666
                        },
                        "typeArguments": null,
                        "start": 665,
                        "end": 666
                      }
                    ],
                    "start": 664,
                    "end": 667
                  },
                  "start": 650,
                  "end": 667
                },
                {
                  "type": "TSStringKeyword",
                  "start": 670,
                  "end": 676
                }
              ],
              "start": 627,
              "end": 676
            },
            "start": 625,
            "end": 676
          },
          "start": 621,
          "end": 676
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 688,
                    "end": 689
                  },
                  "typeArguments": null,
                  "start": 688,
                  "end": 689
                },
                {
                  "type": "TSNullKeyword",
                  "start": 692,
                  "end": 696
                }
              ],
              "start": 688,
              "end": 696
            },
            "start": 686,
            "end": 696
          },
          "start": 680,
          "end": 696
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 701,
          "end": 705
        },
        "start": 699,
        "end": 705
      },
      "body": null,
      "expression": false,
      "start": 565,
      "end": 706
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
            "name": "WrapperIsolated",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "JSXElementConstructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 737,
                  "end": 758
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ExactProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 759,
                        "end": 769
                      },
                      "typeArguments": null,
                      "start": 759,
                      "end": 769
                    }
                  ],
                  "start": 758,
                  "end": 770
                },
                "start": 737,
                "end": 770
              },
              "start": 735,
              "end": 770
            },
            "start": 720,
            "end": 770
          },
          "init": null,
          "definite": false,
          "start": 720,
          "end": 770
        }
      ],
      "declare": true,
      "start": 708,
      "end": 771
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "createElementIsolated",
          "optional": false,
          "typeAnnotation": null,
          "start": 772,
          "end": 793
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "WrapperIsolated",
            "optional": false,
            "typeAnnotation": null,
            "start": 794,
            "end": 809
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 813,
                  "end": 818
                },
                "value": {
                  "type": "Literal",
                  "value": "C",
                  "raw": "\"C\"",
                  "start": 820,
                  "end": 823
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 813,
                "end": 823
              }
            ],
            "start": 811,
            "end": 825
          }
        ],
        "optional": false,
        "start": 772,
        "end": 826
      },
      "directive": null,
      "start": 772,
      "end": 827
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 850,
                  "end": 853
                },
                "start": 850,
                "end": 855
              },
              "start": 848,
              "end": 855
            },
            "start": 843,
            "end": 855
          },
          "init": null,
          "definite": false,
          "start": 843,
          "end": 855
        }
      ],
      "declare": true,
      "start": 829,
      "end": 856
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "stat",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 877,
                "end": 880
              },
              "start": 875,
              "end": 880
            },
            "start": 871,
            "end": 880
          },
          "init": null,
          "definite": false,
          "start": 871,
          "end": 880
        }
      ],
      "declare": true,
      "start": 857,
      "end": 881
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 882,
              "end": 884
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "push",
              "optional": false,
              "typeAnnotation": null,
              "start": 885,
              "end": 889
            },
            "optional": false,
            "computed": false,
            "start": 882,
            "end": 889
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "apply",
            "optional": false,
            "typeAnnotation": null,
            "start": 890,
            "end": 895
          },
          "optional": false,
          "computed": false,
          "start": 882,
          "end": 895
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "props",
            "optional": false,
            "typeAnnotation": null,
            "start": 896,
            "end": 901
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "stat",
              "optional": false,
              "typeAnnotation": null,
              "start": 903,
              "end": 907
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "properties",
              "optional": false,
              "typeAnnotation": null,
              "start": 908,
              "end": 918
            },
            "optional": false,
            "computed": false,
            "start": 903,
            "end": 918
          }
        ],
        "optional": false,
        "start": 882,
        "end": 919
      },
      "directive": null,
      "start": 882,
      "end": 920
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 920
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 57,
    "end": 66,
    "range": [
      57,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "ExactProps",
    "start": 67,
    "end": 77,
    "range": [
      67,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 82,
    "end": 87,
    "range": [
      82,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 89,
    "end": 92,
    "range": [
      89,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 95,
    "end": 98,
    "range": [
      95,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 102,
    "end": 111,
    "range": [
      102,
      111
    ]
  },
  {
    "type": "Identifier",
    "value": "FunctionComponent",
    "start": 112,
    "end": 129,
    "range": [
      112,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 143,
    "end": 148,
    "range": [
      143,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Identifier",
    "value": "ReactElement",
    "start": 154,
    "end": 166,
    "range": [
      154,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 167,
    "end": 170,
    "range": [
      167,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 174,
    "end": 178,
    "range": [
      174,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 182,
    "end": 189,
    "range": [
      182,
      189
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 190,
    "end": 195,
    "range": [
      190,
      195
    ]
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 196,
    "end": 205,
    "range": [
      196,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 213,
    "end": 224,
    "range": [
      213,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 225,
    "end": 230,
    "range": [
      225,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 238,
    "end": 247,
    "range": [
      238,
      247
    ]
  },
  {
    "type": "Identifier",
    "value": "ComponentClass",
    "start": 248,
    "end": 262,
    "range": [
      248,
      262
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 275,
    "end": 278,
    "range": [
      275,
      278
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 280,
    "end": 285,
    "range": [
      280,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 288,
    "end": 289,
    "range": [
      288,
      289
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 291,
    "end": 300,
    "range": [
      291,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 303,
    "end": 304,
    "range": [
      303,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 308,
    "end": 317,
    "range": [
      308,
      317
    ]
  },
  {
    "type": "Identifier",
    "value": "ReactElement",
    "start": 318,
    "end": 330,
    "range": [
      318,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 334,
    "end": 335,
    "range": [
      334,
      335
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 336,
    "end": 343,
    "range": [
      336,
      343
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 344,
    "end": 350,
    "range": [
      344,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "Identifier",
    "value": "JSXElementConstructor",
    "start": 353,
    "end": 374,
    "range": [
      353,
      374
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 375,
    "end": 378,
    "range": [
      375,
      378
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 378,
    "end": 379,
    "range": [
      378,
      379
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 380,
    "end": 381,
    "range": [
      380,
      381
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 388,
    "end": 394,
    "range": [
      388,
      394
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 399,
    "end": 400,
    "range": [
      399,
      400
    ]
  },
  {
    "type": "Identifier",
    "value": "JSXElementConstructor",
    "start": 401,
    "end": 422,
    "range": [
      401,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 423,
    "end": 426,
    "range": [
      423,
      426
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 426,
    "end": 427,
    "range": [
      426,
      427
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 427,
    "end": 428,
    "range": [
      427,
      428
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 429,
    "end": 430,
    "range": [
      429,
      430
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 435,
    "end": 439,
    "range": [
      435,
      439
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 439,
    "end": 440,
    "range": [
      439,
      440
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 441,
    "end": 442,
    "range": [
      441,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 447,
    "end": 451,
    "range": [
      447,
      451
    ]
  },
  {
    "type": "Identifier",
    "value": "JSXElementConstructor",
    "start": 452,
    "end": 473,
    "range": [
      452,
      473
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 474,
    "end": 475,
    "range": [
      474,
      475
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 475,
    "end": 476,
    "range": [
      475,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 477,
    "end": 478,
    "range": [
      477,
      478
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 481,
    "end": 482,
    "range": [
      481,
      482
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 484,
    "end": 485,
    "range": [
      484,
      485
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 485,
    "end": 490,
    "range": [
      485,
      490
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 495,
    "end": 497,
    "range": [
      495,
      497
    ]
  },
  {
    "type": "Identifier",
    "value": "ReactElement",
    "start": 498,
    "end": 510,
    "range": [
      498,
      510
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 511,
    "end": 514,
    "range": [
      511,
      514
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 514,
    "end": 515,
    "range": [
      514,
      515
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 518,
    "end": 522,
    "range": [
      518,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 526,
    "end": 527,
    "range": [
      526,
      527
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 528,
    "end": 529,
    "range": [
      528,
      529
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 529,
    "end": 532,
    "range": [
      529,
      532
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 533,
    "end": 534,
    "range": [
      533,
      534
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 534,
    "end": 539,
    "range": [
      534,
      539
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 539,
    "end": 540,
    "range": [
      539,
      540
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 541,
    "end": 542,
    "range": [
      541,
      542
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 542,
    "end": 543,
    "range": [
      542,
      543
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 544,
    "end": 546,
    "range": [
      544,
      546
    ]
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 547,
    "end": 556,
    "range": [
      547,
      556
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 556,
    "end": 557,
    "range": [
      556,
      557
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 557,
    "end": 560,
    "range": [
      557,
      560
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 560,
    "end": 561,
    "range": [
      560,
      561
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 561,
    "end": 562,
    "range": [
      561,
      562
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 562,
    "end": 563,
    "range": [
      562,
      563
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 565,
    "end": 572,
    "range": [
      565,
      572
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 573,
    "end": 581,
    "range": [
      573,
      581
    ]
  },
  {
    "type": "Identifier",
    "value": "createElementIsolated",
    "start": 582,
    "end": 603,
    "range": [
      582,
      603
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 603,
    "end": 604,
    "range": [
      603,
      604
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 604,
    "end": 605,
    "range": [
      604,
      605
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 606,
    "end": 613,
    "range": [
      606,
      613
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 617,
    "end": 618,
    "range": [
      617,
      618
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 621,
    "end": 625,
    "range": [
      621,
      625
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 625,
    "end": 626,
    "range": [
      625,
      626
    ]
  },
  {
    "type": "Identifier",
    "value": "FunctionComponent",
    "start": 627,
    "end": 644,
    "range": [
      627,
      644
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 644,
    "end": 645,
    "range": [
      644,
      645
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 645,
    "end": 646,
    "range": [
      645,
      646
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 646,
    "end": 647,
    "range": [
      646,
      647
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 648,
    "end": 649,
    "range": [
      648,
      649
    ]
  },
  {
    "type": "Identifier",
    "value": "ComponentClass",
    "start": 650,
    "end": 664,
    "range": [
      650,
      664
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 664,
    "end": 665,
    "range": [
      664,
      665
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 665,
    "end": 666,
    "range": [
      665,
      666
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 666,
    "end": 667,
    "range": [
      666,
      667
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 668,
    "end": 669,
    "range": [
      668,
      669
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 670,
    "end": 676,
    "range": [
      670,
      676
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 676,
    "end": 677,
    "range": [
      676,
      677
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 680,
    "end": 685,
    "range": [
      680,
      685
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 685,
    "end": 686,
    "range": [
      685,
      686
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 688,
    "end": 689,
    "range": [
      688,
      689
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 690,
    "end": 691,
    "range": [
      690,
      691
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 692,
    "end": 696,
    "range": [
      692,
      696
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 696,
    "end": 697,
    "range": [
      696,
      697
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 698,
    "end": 699,
    "range": [
      698,
      699
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 699,
    "end": 700,
    "range": [
      699,
      700
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 701,
    "end": 705,
    "range": [
      701,
      705
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 708,
    "end": 715,
    "range": [
      708,
      715
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 716,
    "end": 719,
    "range": [
      716,
      719
    ]
  },
  {
    "type": "Identifier",
    "value": "WrapperIsolated",
    "start": 720,
    "end": 735,
    "range": [
      720,
      735
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 735,
    "end": 736,
    "range": [
      735,
      736
    ]
  },
  {
    "type": "Identifier",
    "value": "JSXElementConstructor",
    "start": 737,
    "end": 758,
    "range": [
      737,
      758
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 758,
    "end": 759,
    "range": [
      758,
      759
    ]
  },
  {
    "type": "Identifier",
    "value": "ExactProps",
    "start": 759,
    "end": 769,
    "range": [
      759,
      769
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 769,
    "end": 770,
    "range": [
      769,
      770
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 770,
    "end": 771,
    "range": [
      770,
      771
    ]
  },
  {
    "type": "Identifier",
    "value": "createElementIsolated",
    "start": 772,
    "end": 793,
    "range": [
      772,
      793
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 793,
    "end": 794,
    "range": [
      793,
      794
    ]
  },
  {
    "type": "Identifier",
    "value": "WrapperIsolated",
    "start": 794,
    "end": 809,
    "range": [
      794,
      809
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 809,
    "end": 810,
    "range": [
      809,
      810
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 811,
    "end": 812,
    "range": [
      811,
      812
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 813,
    "end": 818,
    "range": [
      813,
      818
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 818,
    "end": 819,
    "range": [
      818,
      819
    ]
  },
  {
    "type": "String",
    "value": "\"C\"",
    "start": 820,
    "end": 823,
    "range": [
      820,
      823
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 825,
    "end": 826,
    "range": [
      825,
      826
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 826,
    "end": 827,
    "range": [
      826,
      827
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 829,
    "end": 836,
    "range": [
      829,
      836
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 837,
    "end": 842,
    "range": [
      837,
      842
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 843,
    "end": 848,
    "range": [
      843,
      848
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 848,
    "end": 849,
    "range": [
      848,
      849
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 850,
    "end": 853,
    "range": [
      850,
      853
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 853,
    "end": 854,
    "range": [
      853,
      854
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 854,
    "end": 855,
    "range": [
      854,
      855
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 855,
    "end": 856,
    "range": [
      855,
      856
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 857,
    "end": 864,
    "range": [
      857,
      864
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 865,
    "end": 870,
    "range": [
      865,
      870
    ]
  },
  {
    "type": "Identifier",
    "value": "stat",
    "start": 871,
    "end": 875,
    "range": [
      871,
      875
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 875,
    "end": 876,
    "range": [
      875,
      876
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 877,
    "end": 880,
    "range": [
      877,
      880
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 880,
    "end": 881,
    "range": [
      880,
      881
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 882,
    "end": 883,
    "range": [
      882,
      883
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 883,
    "end": 884,
    "range": [
      883,
      884
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 884,
    "end": 885,
    "range": [
      884,
      885
    ]
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 885,
    "end": 889,
    "range": [
      885,
      889
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 889,
    "end": 890,
    "range": [
      889,
      890
    ]
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 890,
    "end": 895,
    "range": [
      890,
      895
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 895,
    "end": 896,
    "range": [
      895,
      896
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 896,
    "end": 901,
    "range": [
      896,
      901
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 901,
    "end": 902,
    "range": [
      901,
      902
    ]
  },
  {
    "type": "Identifier",
    "value": "stat",
    "start": 903,
    "end": 907,
    "range": [
      903,
      907
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 907,
    "end": 908,
    "range": [
      907,
      908
    ]
  },
  {
    "type": "Identifier",
    "value": "properties",
    "start": 908,
    "end": 918,
    "range": [
      908,
      918
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 918,
    "end": 919,
    "range": [
      918,
      919
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 919,
    "end": 920,
    "range": [
      919,
      920
    ]
  }
]
```
