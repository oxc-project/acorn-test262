__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 18
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 19,
        "end": 22
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 22
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 37,
          "end": 48
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 49,
          "end": 52
        },
        "abstract": false,
        "declare": false,
        "start": 31,
        "end": 52
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 24,
      "end": 52
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassWithPrivateTypeParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 137,
          "end": 173
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
                "start": 174,
                "end": 175
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 184,
                  "end": 196
                },
                "typeArguments": null,
                "start": 184,
                "end": 196
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 174,
              "end": 196
            }
          ],
          "start": 173,
          "end": 197
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
                "name": "myMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 204,
                "end": 212
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "val",
                    "optional": false,
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
                          "start": 218,
                          "end": 219
                        },
                        "typeArguments": null,
                        "start": 218,
                        "end": 219
                      },
                      "start": 216,
                      "end": 219
                    },
                    "start": 213,
                    "end": 219
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 222,
                      "end": 223
                    },
                    "typeArguments": null,
                    "start": 222,
                    "end": 223
                  },
                  "start": 220,
                  "end": 223
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 250,
                        "end": 253
                      },
                      "start": 243,
                      "end": 254
                    }
                  ],
                  "start": 224,
                  "end": 260
                },
                "expression": false,
                "start": 212,
                "end": 260
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 204,
              "end": 260
            }
          ],
          "start": 198,
          "end": 262
        },
        "abstract": false,
        "declare": false,
        "start": 131,
        "end": 262
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 124,
      "end": 262
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassWithPublicTypeParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 277,
          "end": 312
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
                "start": 313,
                "end": 314
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 323,
                  "end": 334
                },
                "typeArguments": null,
                "start": 323,
                "end": 334
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 313,
              "end": 334
            }
          ],
          "start": 312,
          "end": 335
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
                "name": "myMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 342,
                "end": 350
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "val",
                    "optional": false,
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
                          "start": 356,
                          "end": 357
                        },
                        "typeArguments": null,
                        "start": 356,
                        "end": 357
                      },
                      "start": 354,
                      "end": 357
                    },
                    "start": 351,
                    "end": 357
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 360,
                      "end": 361
                    },
                    "typeArguments": null,
                    "start": 360,
                    "end": 361
                  },
                  "start": 358,
                  "end": 361
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 391,
                        "end": 394
                      },
                      "start": 384,
                      "end": 395
                    }
                  ],
                  "start": 362,
                  "end": 401
                },
                "expression": false,
                "start": 350,
                "end": 401
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 342,
              "end": 401
            }
          ],
          "start": 336,
          "end": 403
        },
        "abstract": false,
        "declare": false,
        "start": 271,
        "end": 403
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 264,
      "end": 403
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassWithPrivateTypeParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 411,
        "end": 448
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
              "start": 449,
              "end": 450
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 459,
                "end": 471
              },
              "typeArguments": null,
              "start": 459,
              "end": 471
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 449,
            "end": 471
          }
        ],
        "start": 448,
        "end": 472
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
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 479,
              "end": 487
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
                  "optional": false,
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
                        "start": 493,
                        "end": 494
                      },
                      "typeArguments": null,
                      "start": 493,
                      "end": 494
                    },
                    "start": 491,
                    "end": 494
                  },
                  "start": 488,
                  "end": 494
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 497,
                    "end": 498
                  },
                  "typeArguments": null,
                  "start": 497,
                  "end": 498
                },
                "start": 495,
                "end": 498
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 528,
                      "end": 531
                    },
                    "start": 521,
                    "end": 532
                  }
                ],
                "start": 499,
                "end": 538
              },
              "expression": false,
              "start": 487,
              "end": 538
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 479,
            "end": 538
          }
        ],
        "start": 473,
        "end": 540
      },
      "abstract": false,
      "declare": false,
      "start": 405,
      "end": 540
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassWithPublicTypeParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 548,
        "end": 584
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
              "start": 585,
              "end": 586
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 595,
                "end": 606
              },
              "typeArguments": null,
              "start": 595,
              "end": 606
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 585,
            "end": 606
          }
        ],
        "start": 584,
        "end": 607
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
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 614,
              "end": 622
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
                  "optional": false,
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
                        "start": 628,
                        "end": 629
                      },
                      "typeArguments": null,
                      "start": 628,
                      "end": 629
                    },
                    "start": 626,
                    "end": 629
                  },
                  "start": 623,
                  "end": 629
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 632,
                    "end": 633
                  },
                  "typeArguments": null,
                  "start": 632,
                  "end": 633
                },
                "start": 630,
                "end": 633
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 663,
                      "end": 666
                    },
                    "start": 656,
                    "end": 667
                  }
                ],
                "start": 634,
                "end": 673
              },
              "expression": false,
              "start": 622,
              "end": 673
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 614,
            "end": 673
          }
        ],
        "start": 608,
        "end": 675
      },
      "abstract": false,
      "declare": false,
      "start": 542,
      "end": 675
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassWithPublicTypeParametersWithoutExtends",
          "optional": false,
          "typeAnnotation": null,
          "start": 690,
          "end": 739
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
                "start": 740,
                "end": 741
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 740,
              "end": 741
            }
          ],
          "start": 739,
          "end": 742
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
                "name": "myMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 749,
                "end": 757
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "val",
                    "optional": false,
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
                          "start": 763,
                          "end": 764
                        },
                        "typeArguments": null,
                        "start": 763,
                        "end": 764
                      },
                      "start": 761,
                      "end": 764
                    },
                    "start": 758,
                    "end": 764
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 767,
                      "end": 768
                    },
                    "typeArguments": null,
                    "start": 767,
                    "end": 768
                  },
                  "start": 765,
                  "end": 768
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 798,
                        "end": 801
                      },
                      "start": 791,
                      "end": 802
                    }
                  ],
                  "start": 769,
                  "end": 808
                },
                "expression": false,
                "start": 757,
                "end": 808
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 749,
              "end": 808
            }
          ],
          "start": 743,
          "end": 810
        },
        "abstract": false,
        "declare": false,
        "start": 684,
        "end": 810
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 677,
      "end": 810
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassWithPublicTypeParametersWithoutExtends",
        "optional": false,
        "typeAnnotation": null,
        "start": 818,
        "end": 868
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
              "start": 869,
              "end": 870
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 869,
            "end": 870
          }
        ],
        "start": 868,
        "end": 871
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
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 878,
              "end": 886
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
                  "optional": false,
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
                        "start": 892,
                        "end": 893
                      },
                      "typeArguments": null,
                      "start": 892,
                      "end": 893
                    },
                    "start": 890,
                    "end": 893
                  },
                  "start": 887,
                  "end": 893
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 896,
                    "end": 897
                  },
                  "typeArguments": null,
                  "start": 896,
                  "end": 897
                },
                "start": 894,
                "end": 897
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 927,
                      "end": 930
                    },
                    "start": 920,
                    "end": 931
                  }
                ],
                "start": 898,
                "end": 937
              },
              "expression": false,
              "start": 886,
              "end": 937
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 878,
            "end": 937
          }
        ],
        "start": 872,
        "end": 939
      },
      "abstract": false,
      "declare": false,
      "start": 812,
      "end": 939
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 939
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 6,
    "end": 18,
    "range": [
      6,
      18
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 24,
    "end": 30,
    "range": [
      24,
      30
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 31,
    "end": 36,
    "range": [
      31,
      36
    ]
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 37,
    "end": 48,
    "range": [
      37,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 124,
    "end": 130,
    "range": [
      124,
      130
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 131,
    "end": 136,
    "range": [
      131,
      136
    ]
  },
  {
    "type": "Identifier",
    "value": "publicClassWithPrivateTypeParameters",
    "start": 137,
    "end": 173,
    "range": [
      137,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 176,
    "end": 183,
    "range": [
      176,
      183
    ]
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 184,
    "end": 196,
    "range": [
      184,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 204,
    "end": 212,
    "range": [
      204,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 213,
    "end": 216,
    "range": [
      213,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 243,
    "end": 249,
    "range": [
      243,
      249
    ]
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 250,
    "end": 253,
    "range": [
      250,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 264,
    "end": 270,
    "range": [
      264,
      270
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 271,
    "end": 276,
    "range": [
      271,
      276
    ]
  },
  {
    "type": "Identifier",
    "value": "publicClassWithPublicTypeParameters",
    "start": 277,
    "end": 312,
    "range": [
      277,
      312
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 315,
    "end": 322,
    "range": [
      315,
      322
    ]
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 323,
    "end": 334,
    "range": [
      323,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 334,
    "end": 335,
    "range": [
      334,
      335
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 342,
    "end": 350,
    "range": [
      342,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 351,
    "end": 354,
    "range": [
      351,
      354
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 360,
    "end": 361,
    "range": [
      360,
      361
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 384,
    "end": 390,
    "range": [
      384,
      390
    ]
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 391,
    "end": 394,
    "range": [
      391,
      394
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 394,
    "end": 395,
    "range": [
      394,
      395
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 400,
    "end": 401,
    "range": [
      400,
      401
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 402,
    "end": 403,
    "range": [
      402,
      403
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 405,
    "end": 410,
    "range": [
      405,
      410
    ]
  },
  {
    "type": "Identifier",
    "value": "privateClassWithPrivateTypeParameters",
    "start": 411,
    "end": 448,
    "range": [
      411,
      448
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 449,
    "end": 450,
    "range": [
      449,
      450
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 451,
    "end": 458,
    "range": [
      451,
      458
    ]
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 459,
    "end": 471,
    "range": [
      459,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 471,
    "end": 472,
    "range": [
      471,
      472
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 479,
    "end": 487,
    "range": [
      479,
      487
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 487,
    "end": 488,
    "range": [
      487,
      488
    ]
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 488,
    "end": 491,
    "range": [
      488,
      491
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 494,
    "end": 495,
    "range": [
      494,
      495
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 495,
    "end": 496,
    "range": [
      495,
      496
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 521,
    "end": 527,
    "range": [
      521,
      527
    ]
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 528,
    "end": 531,
    "range": [
      528,
      531
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 531,
    "end": 532,
    "range": [
      531,
      532
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 537,
    "end": 538,
    "range": [
      537,
      538
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 539,
    "end": 540,
    "range": [
      539,
      540
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 542,
    "end": 547,
    "range": [
      542,
      547
    ]
  },
  {
    "type": "Identifier",
    "value": "privateClassWithPublicTypeParameters",
    "start": 548,
    "end": 584,
    "range": [
      548,
      584
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 584,
    "end": 585,
    "range": [
      584,
      585
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 585,
    "end": 586,
    "range": [
      585,
      586
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 587,
    "end": 594,
    "range": [
      587,
      594
    ]
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 595,
    "end": 606,
    "range": [
      595,
      606
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 606,
    "end": 607,
    "range": [
      606,
      607
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 608,
    "end": 609,
    "range": [
      608,
      609
    ]
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 614,
    "end": 622,
    "range": [
      614,
      622
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 623,
    "end": 626,
    "range": [
      623,
      626
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 626,
    "end": 627,
    "range": [
      626,
      627
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 629,
    "end": 630,
    "range": [
      629,
      630
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 630,
    "end": 631,
    "range": [
      630,
      631
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 632,
    "end": 633,
    "range": [
      632,
      633
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 634,
    "end": 635,
    "range": [
      634,
      635
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 656,
    "end": 662,
    "range": [
      656,
      662
    ]
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 663,
    "end": 666,
    "range": [
      663,
      666
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 666,
    "end": 667,
    "range": [
      666,
      667
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 672,
    "end": 673,
    "range": [
      672,
      673
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 677,
    "end": 683,
    "range": [
      677,
      683
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 684,
    "end": 689,
    "range": [
      684,
      689
    ]
  },
  {
    "type": "Identifier",
    "value": "publicClassWithPublicTypeParametersWithoutExtends",
    "start": 690,
    "end": 739,
    "range": [
      690,
      739
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 739,
    "end": 740,
    "range": [
      739,
      740
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 740,
    "end": 741,
    "range": [
      740,
      741
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 741,
    "end": 742,
    "range": [
      741,
      742
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 743,
    "end": 744,
    "range": [
      743,
      744
    ]
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 749,
    "end": 757,
    "range": [
      749,
      757
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 757,
    "end": 758,
    "range": [
      757,
      758
    ]
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 758,
    "end": 761,
    "range": [
      758,
      761
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 761,
    "end": 762,
    "range": [
      761,
      762
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 763,
    "end": 764,
    "range": [
      763,
      764
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 764,
    "end": 765,
    "range": [
      764,
      765
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 765,
    "end": 766,
    "range": [
      765,
      766
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 767,
    "end": 768,
    "range": [
      767,
      768
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 769,
    "end": 770,
    "range": [
      769,
      770
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 791,
    "end": 797,
    "range": [
      791,
      797
    ]
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 798,
    "end": 801,
    "range": [
      798,
      801
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 801,
    "end": 802,
    "range": [
      801,
      802
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 807,
    "end": 808,
    "range": [
      807,
      808
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 809,
    "end": 810,
    "range": [
      809,
      810
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 812,
    "end": 817,
    "range": [
      812,
      817
    ]
  },
  {
    "type": "Identifier",
    "value": "privateClassWithPublicTypeParametersWithoutExtends",
    "start": 818,
    "end": 868,
    "range": [
      818,
      868
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 868,
    "end": 869,
    "range": [
      868,
      869
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 869,
    "end": 870,
    "range": [
      869,
      870
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 870,
    "end": 871,
    "range": [
      870,
      871
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 872,
    "end": 873,
    "range": [
      872,
      873
    ]
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 878,
    "end": 886,
    "range": [
      878,
      886
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 886,
    "end": 887,
    "range": [
      886,
      887
    ]
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 887,
    "end": 890,
    "range": [
      887,
      890
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 890,
    "end": 891,
    "range": [
      890,
      891
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 892,
    "end": 893,
    "range": [
      892,
      893
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 893,
    "end": 894,
    "range": [
      893,
      894
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 894,
    "end": 895,
    "range": [
      894,
      895
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 896,
    "end": 897,
    "range": [
      896,
      897
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 898,
    "end": 899,
    "range": [
      898,
      899
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 920,
    "end": 926,
    "range": [
      920,
      926
    ]
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 927,
    "end": 930,
    "range": [
      927,
      930
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 930,
    "end": 931,
    "range": [
      930,
      931
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 936,
    "end": 937,
    "range": [
      936,
      937
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 938,
    "end": 939,
    "range": [
      938,
      939
    ]
  }
]
```
