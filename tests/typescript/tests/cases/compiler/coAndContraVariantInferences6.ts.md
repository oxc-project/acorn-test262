__ESTREE_TEST__:PASS:
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
