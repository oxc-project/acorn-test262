__ESTREE_TEST__:PASS:
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
          "start": 67,
          "end": 103
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
                "start": 104,
                "end": 105
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 114,
                  "end": 126
                },
                "typeArguments": null,
                "start": 114,
                "end": 126
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 104,
              "end": 126
            }
          ],
          "start": 103,
          "end": 127
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
                "start": 143,
                "end": 151
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
                          "start": 157,
                          "end": 158
                        },
                        "typeArguments": null,
                        "start": 157,
                        "end": 158
                      },
                      "start": 155,
                      "end": 158
                    },
                    "start": 152,
                    "end": 158
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
                      "start": 161,
                      "end": 162
                    },
                    "typeArguments": null,
                    "start": 161,
                    "end": 162
                  },
                  "start": 159,
                  "end": 162
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
                        "start": 180,
                        "end": 183
                      },
                      "start": 173,
                      "end": 184
                    }
                  ],
                  "start": 163,
                  "end": 190
                },
                "expression": false,
                "start": 151,
                "end": 190
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 143,
              "end": 190
            }
          ],
          "start": 128,
          "end": 192
        },
        "abstract": false,
        "declare": false,
        "start": 61,
        "end": 192
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 54,
      "end": 192
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
          "start": 207,
          "end": 242
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
                "start": 243,
                "end": 244
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 253,
                  "end": 264
                },
                "typeArguments": null,
                "start": 253,
                "end": 264
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 243,
              "end": 264
            }
          ],
          "start": 242,
          "end": 265
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
                "start": 272,
                "end": 280
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
                          "start": 286,
                          "end": 287
                        },
                        "typeArguments": null,
                        "start": 286,
                        "end": 287
                      },
                      "start": 284,
                      "end": 287
                    },
                    "start": 281,
                    "end": 287
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
                      "start": 290,
                      "end": 291
                    },
                    "typeArguments": null,
                    "start": 290,
                    "end": 291
                  },
                  "start": 288,
                  "end": 291
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
                        "start": 309,
                        "end": 312
                      },
                      "start": 302,
                      "end": 313
                    }
                  ],
                  "start": 292,
                  "end": 319
                },
                "expression": false,
                "start": 280,
                "end": 319
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 272,
              "end": 319
            }
          ],
          "start": 266,
          "end": 321
        },
        "abstract": false,
        "declare": false,
        "start": 201,
        "end": 321
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 194,
      "end": 321
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
        "start": 329,
        "end": 366
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
              "start": 367,
              "end": 368
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 377,
                "end": 389
              },
              "typeArguments": null,
              "start": 377,
              "end": 389
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 367,
            "end": 389
          }
        ],
        "start": 366,
        "end": 390
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
              "start": 397,
              "end": 405
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
                        "start": 411,
                        "end": 412
                      },
                      "typeArguments": null,
                      "start": 411,
                      "end": 412
                    },
                    "start": 409,
                    "end": 412
                  },
                  "start": 406,
                  "end": 412
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
                    "start": 415,
                    "end": 416
                  },
                  "typeArguments": null,
                  "start": 415,
                  "end": 416
                },
                "start": 413,
                "end": 416
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
                      "start": 434,
                      "end": 437
                    },
                    "start": 427,
                    "end": 438
                  }
                ],
                "start": 417,
                "end": 444
              },
              "expression": false,
              "start": 405,
              "end": 444
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 397,
            "end": 444
          }
        ],
        "start": 391,
        "end": 446
      },
      "abstract": false,
      "declare": false,
      "start": 323,
      "end": 446
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
        "start": 454,
        "end": 490
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
              "start": 491,
              "end": 492
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 501,
                "end": 512
              },
              "typeArguments": null,
              "start": 501,
              "end": 512
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 491,
            "end": 512
          }
        ],
        "start": 490,
        "end": 513
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
              "start": 520,
              "end": 528
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
                        "start": 534,
                        "end": 535
                      },
                      "typeArguments": null,
                      "start": 534,
                      "end": 535
                    },
                    "start": 532,
                    "end": 535
                  },
                  "start": 529,
                  "end": 535
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
                    "start": 538,
                    "end": 539
                  },
                  "typeArguments": null,
                  "start": 538,
                  "end": 539
                },
                "start": 536,
                "end": 539
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
                      "start": 558,
                      "end": 561
                    },
                    "start": 551,
                    "end": 562
                  }
                ],
                "start": 540,
                "end": 568
              },
              "expression": false,
              "start": 528,
              "end": 568
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 520,
            "end": 568
          }
        ],
        "start": 514,
        "end": 570
      },
      "abstract": false,
      "declare": false,
      "start": 448,
      "end": 570
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
          "start": 585,
          "end": 634
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
                "start": 635,
                "end": 636
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 635,
              "end": 636
            }
          ],
          "start": 634,
          "end": 637
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
                "start": 644,
                "end": 652
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
                          "start": 658,
                          "end": 659
                        },
                        "typeArguments": null,
                        "start": 658,
                        "end": 659
                      },
                      "start": 656,
                      "end": 659
                    },
                    "start": 653,
                    "end": 659
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
                      "start": 662,
                      "end": 663
                    },
                    "typeArguments": null,
                    "start": 662,
                    "end": 663
                  },
                  "start": 660,
                  "end": 663
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
                        "start": 682,
                        "end": 685
                      },
                      "start": 675,
                      "end": 686
                    }
                  ],
                  "start": 664,
                  "end": 692
                },
                "expression": false,
                "start": 652,
                "end": 692
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 644,
              "end": 692
            }
          ],
          "start": 638,
          "end": 694
        },
        "abstract": false,
        "declare": false,
        "start": 579,
        "end": 694
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 572,
      "end": 694
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
        "start": 702,
        "end": 752
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
              "start": 753,
              "end": 754
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 753,
            "end": 754
          }
        ],
        "start": 752,
        "end": 755
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
              "start": 762,
              "end": 770
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
                        "start": 776,
                        "end": 777
                      },
                      "typeArguments": null,
                      "start": 776,
                      "end": 777
                    },
                    "start": 774,
                    "end": 777
                  },
                  "start": 771,
                  "end": 777
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
                    "start": 780,
                    "end": 781
                  },
                  "typeArguments": null,
                  "start": 780,
                  "end": 781
                },
                "start": 778,
                "end": 781
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
                      "start": 800,
                      "end": 803
                    },
                    "start": 793,
                    "end": 804
                  }
                ],
                "start": 782,
                "end": 810
              },
              "expression": false,
              "start": 770,
              "end": 810
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 762,
            "end": 810
          }
        ],
        "start": 756,
        "end": 812
      },
      "abstract": false,
      "declare": false,
      "start": 696,
      "end": 812
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassWithTypeParametersFromPrivateModule",
          "optional": false,
          "typeAnnotation": null,
          "start": 827,
          "end": 873
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
                "start": 874,
                "end": 875
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 884,
                    "end": 897
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClassInPrivateModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 898,
                    "end": 924
                  },
                  "start": 884,
                  "end": 924
                },
                "typeArguments": null,
                "start": 884,
                "end": 924
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 874,
              "end": 924
            }
          ],
          "start": 873,
          "end": 925
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
                "start": 941,
                "end": 949
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
                          "start": 955,
                          "end": 956
                        },
                        "typeArguments": null,
                        "start": 955,
                        "end": 956
                      },
                      "start": 953,
                      "end": 956
                    },
                    "start": 950,
                    "end": 956
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
                      "start": 959,
                      "end": 960
                    },
                    "typeArguments": null,
                    "start": 959,
                    "end": 960
                  },
                  "start": 957,
                  "end": 960
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
                        "start": 978,
                        "end": 981
                      },
                      "start": 971,
                      "end": 982
                    }
                  ],
                  "start": 961,
                  "end": 988
                },
                "expression": false,
                "start": 949,
                "end": 988
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 941,
              "end": 988
            }
          ],
          "start": 926,
          "end": 990
        },
        "abstract": false,
        "declare": false,
        "start": 821,
        "end": 990
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 814,
      "end": 990
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassWithTypeParametersFromPrivateModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 998,
        "end": 1045
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
              "start": 1046,
              "end": 1047
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1056,
                  "end": 1069
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassInPrivateModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1070,
                  "end": 1096
                },
                "start": 1056,
                "end": 1096
              },
              "typeArguments": null,
              "start": 1056,
              "end": 1096
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1046,
            "end": 1096
          }
        ],
        "start": 1045,
        "end": 1097
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
              "start": 1104,
              "end": 1112
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
                        "start": 1118,
                        "end": 1119
                      },
                      "typeArguments": null,
                      "start": 1118,
                      "end": 1119
                    },
                    "start": 1116,
                    "end": 1119
                  },
                  "start": 1113,
                  "end": 1119
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
                    "start": 1122,
                    "end": 1123
                  },
                  "typeArguments": null,
                  "start": 1122,
                  "end": 1123
                },
                "start": 1120,
                "end": 1123
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
                      "start": 1141,
                      "end": 1144
                    },
                    "start": 1134,
                    "end": 1145
                  }
                ],
                "start": 1124,
                "end": 1151
              },
              "expression": false,
              "start": 1112,
              "end": 1151
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1104,
            "end": 1151
          }
        ],
        "start": 1098,
        "end": 1153
      },
      "abstract": false,
      "declare": false,
      "start": 992,
      "end": 1153
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicModule",
          "optional": false,
          "typeAnnotation": null,
          "start": 1169,
          "end": 1181
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassInPublicModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 1194,
                "end": 1220
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 1221,
                "end": 1228
              },
              "abstract": false,
              "declare": false,
              "start": 1188,
              "end": 1228
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassInPublicModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1247,
                  "end": 1272
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 1273,
                  "end": 1280
                },
                "abstract": false,
                "declare": false,
                "start": 1241,
                "end": 1280
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1234,
              "end": 1280
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
                  "start": 1299,
                  "end": 1335
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
                        "start": 1336,
                        "end": 1337
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClassInPublicModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1346,
                          "end": 1372
                        },
                        "typeArguments": null,
                        "start": 1346,
                        "end": 1372
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1336,
                      "end": 1372
                    }
                  ],
                  "start": 1335,
                  "end": 1373
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
                        "start": 1393,
                        "end": 1401
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
                                  "start": 1407,
                                  "end": 1408
                                },
                                "typeArguments": null,
                                "start": 1407,
                                "end": 1408
                              },
                              "start": 1405,
                              "end": 1408
                            },
                            "start": 1402,
                            "end": 1408
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
                              "start": 1411,
                              "end": 1412
                            },
                            "typeArguments": null,
                            "start": 1411,
                            "end": 1412
                          },
                          "start": 1409,
                          "end": 1412
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
                                "start": 1434,
                                "end": 1437
                              },
                              "start": 1427,
                              "end": 1438
                            }
                          ],
                          "start": 1413,
                          "end": 1448
                        },
                        "expression": false,
                        "start": 1401,
                        "end": 1448
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 1393,
                      "end": 1448
                    }
                  ],
                  "start": 1374,
                  "end": 1454
                },
                "abstract": false,
                "declare": false,
                "start": 1293,
                "end": 1454
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1286,
              "end": 1454
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
                  "start": 1473,
                  "end": 1508
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
                        "start": 1509,
                        "end": 1510
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClassInPublicModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1519,
                          "end": 1544
                        },
                        "typeArguments": null,
                        "start": 1519,
                        "end": 1544
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1509,
                      "end": 1544
                    }
                  ],
                  "start": 1508,
                  "end": 1545
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
                        "start": 1556,
                        "end": 1564
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
                                  "start": 1570,
                                  "end": 1571
                                },
                                "typeArguments": null,
                                "start": 1570,
                                "end": 1571
                              },
                              "start": 1568,
                              "end": 1571
                            },
                            "start": 1565,
                            "end": 1571
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
                              "start": 1574,
                              "end": 1575
                            },
                            "typeArguments": null,
                            "start": 1574,
                            "end": 1575
                          },
                          "start": 1572,
                          "end": 1575
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
                                "start": 1597,
                                "end": 1600
                              },
                              "start": 1590,
                              "end": 1601
                            }
                          ],
                          "start": 1576,
                          "end": 1611
                        },
                        "expression": false,
                        "start": 1564,
                        "end": 1611
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 1556,
                      "end": 1611
                    }
                  ],
                  "start": 1546,
                  "end": 1617
                },
                "abstract": false,
                "declare": false,
                "start": 1467,
                "end": 1617
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1460,
              "end": 1617
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
                "start": 1629,
                "end": 1666
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
                      "start": 1667,
                      "end": 1668
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClassInPublicModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1677,
                        "end": 1703
                      },
                      "typeArguments": null,
                      "start": 1677,
                      "end": 1703
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1667,
                    "end": 1703
                  }
                ],
                "start": 1666,
                "end": 1704
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
                      "start": 1715,
                      "end": 1723
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
                                "start": 1729,
                                "end": 1730
                              },
                              "typeArguments": null,
                              "start": 1729,
                              "end": 1730
                            },
                            "start": 1727,
                            "end": 1730
                          },
                          "start": 1724,
                          "end": 1730
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
                            "start": 1733,
                            "end": 1734
                          },
                          "typeArguments": null,
                          "start": 1733,
                          "end": 1734
                        },
                        "start": 1731,
                        "end": 1734
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
                              "start": 1756,
                              "end": 1759
                            },
                            "start": 1749,
                            "end": 1760
                          }
                        ],
                        "start": 1735,
                        "end": 1770
                      },
                      "expression": false,
                      "start": 1723,
                      "end": 1770
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1715,
                    "end": 1770
                  }
                ],
                "start": 1705,
                "end": 1776
              },
              "abstract": false,
              "declare": false,
              "start": 1623,
              "end": 1776
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
                "start": 1788,
                "end": 1824
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
                      "start": 1825,
                      "end": 1826
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClassInPublicModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1835,
                        "end": 1860
                      },
                      "typeArguments": null,
                      "start": 1835,
                      "end": 1860
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1825,
                    "end": 1860
                  }
                ],
                "start": 1824,
                "end": 1861
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
                      "start": 1872,
                      "end": 1880
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
                                "start": 1886,
                                "end": 1887
                              },
                              "typeArguments": null,
                              "start": 1886,
                              "end": 1887
                            },
                            "start": 1884,
                            "end": 1887
                          },
                          "start": 1881,
                          "end": 1887
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
                            "start": 1890,
                            "end": 1891
                          },
                          "typeArguments": null,
                          "start": 1890,
                          "end": 1891
                        },
                        "start": 1888,
                        "end": 1891
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
                              "start": 1913,
                              "end": 1916
                            },
                            "start": 1906,
                            "end": 1917
                          }
                        ],
                        "start": 1892,
                        "end": 1927
                      },
                      "expression": false,
                      "start": 1880,
                      "end": 1927
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1872,
                    "end": 1927
                  }
                ],
                "start": 1862,
                "end": 1933
              },
              "abstract": false,
              "declare": false,
              "start": 1782,
              "end": 1933
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
                  "start": 1952,
                  "end": 2001
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
                        "start": 2002,
                        "end": 2003
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2002,
                      "end": 2003
                    }
                  ],
                  "start": 2001,
                  "end": 2004
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
                        "start": 2015,
                        "end": 2023
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
                                  "start": 2029,
                                  "end": 2030
                                },
                                "typeArguments": null,
                                "start": 2029,
                                "end": 2030
                              },
                              "start": 2027,
                              "end": 2030
                            },
                            "start": 2024,
                            "end": 2030
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
                              "start": 2033,
                              "end": 2034
                            },
                            "typeArguments": null,
                            "start": 2033,
                            "end": 2034
                          },
                          "start": 2031,
                          "end": 2034
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
                                "start": 2056,
                                "end": 2059
                              },
                              "start": 2049,
                              "end": 2060
                            }
                          ],
                          "start": 2035,
                          "end": 2070
                        },
                        "expression": false,
                        "start": 2023,
                        "end": 2070
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 2015,
                      "end": 2070
                    }
                  ],
                  "start": 2005,
                  "end": 2076
                },
                "abstract": false,
                "declare": false,
                "start": 1946,
                "end": 2076
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1939,
              "end": 2076
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
                "start": 2088,
                "end": 2138
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
                      "start": 2139,
                      "end": 2140
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2139,
                    "end": 2140
                  }
                ],
                "start": 2138,
                "end": 2141
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
                      "start": 2152,
                      "end": 2160
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
                                "start": 2166,
                                "end": 2167
                              },
                              "typeArguments": null,
                              "start": 2166,
                              "end": 2167
                            },
                            "start": 2164,
                            "end": 2167
                          },
                          "start": 2161,
                          "end": 2167
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
                            "start": 2170,
                            "end": 2171
                          },
                          "typeArguments": null,
                          "start": 2170,
                          "end": 2171
                        },
                        "start": 2168,
                        "end": 2171
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
                              "start": 2193,
                              "end": 2196
                            },
                            "start": 2186,
                            "end": 2197
                          }
                        ],
                        "start": 2172,
                        "end": 2207
                      },
                      "expression": false,
                      "start": 2160,
                      "end": 2207
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 2152,
                    "end": 2207
                  }
                ],
                "start": 2142,
                "end": 2213
              },
              "abstract": false,
              "declare": false,
              "start": 2082,
              "end": 2213
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassWithTypeParametersFromPrivateModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2232,
                  "end": 2278
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
                        "start": 2279,
                        "end": 2280
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2289,
                            "end": 2302
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClassInPrivateModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2303,
                            "end": 2329
                          },
                          "start": 2289,
                          "end": 2329
                        },
                        "typeArguments": null,
                        "start": 2289,
                        "end": 2329
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2279,
                      "end": 2329
                    }
                  ],
                  "start": 2278,
                  "end": 2330
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
                        "start": 2350,
                        "end": 2358
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
                                  "start": 2364,
                                  "end": 2365
                                },
                                "typeArguments": null,
                                "start": 2364,
                                "end": 2365
                              },
                              "start": 2362,
                              "end": 2365
                            },
                            "start": 2359,
                            "end": 2365
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
                              "start": 2368,
                              "end": 2369
                            },
                            "typeArguments": null,
                            "start": 2368,
                            "end": 2369
                          },
                          "start": 2366,
                          "end": 2369
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
                                "start": 2391,
                                "end": 2394
                              },
                              "start": 2384,
                              "end": 2395
                            }
                          ],
                          "start": 2370,
                          "end": 2405
                        },
                        "expression": false,
                        "start": 2358,
                        "end": 2405
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 2350,
                      "end": 2405
                    }
                  ],
                  "start": 2331,
                  "end": 2411
                },
                "abstract": false,
                "declare": false,
                "start": 2226,
                "end": 2411
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2219,
              "end": 2411
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassWithTypeParametersFromPrivateModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 2423,
                "end": 2470
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
                      "start": 2471,
                      "end": 2472
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2481,
                          "end": 2494
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClassInPrivateModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2495,
                          "end": 2521
                        },
                        "start": 2481,
                        "end": 2521
                      },
                      "typeArguments": null,
                      "start": 2481,
                      "end": 2521
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2471,
                    "end": 2521
                  }
                ],
                "start": 2470,
                "end": 2522
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
                      "start": 2533,
                      "end": 2541
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
                                "start": 2547,
                                "end": 2548
                              },
                              "typeArguments": null,
                              "start": 2547,
                              "end": 2548
                            },
                            "start": 2545,
                            "end": 2548
                          },
                          "start": 2542,
                          "end": 2548
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
                            "start": 2551,
                            "end": 2552
                          },
                          "typeArguments": null,
                          "start": 2551,
                          "end": 2552
                        },
                        "start": 2549,
                        "end": 2552
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
                              "start": 2574,
                              "end": 2577
                            },
                            "start": 2567,
                            "end": 2578
                          }
                        ],
                        "start": 2553,
                        "end": 2588
                      },
                      "expression": false,
                      "start": 2541,
                      "end": 2588
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 2533,
                    "end": 2588
                  }
                ],
                "start": 2523,
                "end": 2594
              },
              "abstract": false,
              "declare": false,
              "start": 2417,
              "end": 2594
            }
          ],
          "start": 1182,
          "end": 2596
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 1162,
        "end": 2596
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1155,
      "end": 2596
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 2605,
        "end": 2618
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassInPrivateModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 2631,
              "end": 2658
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 2659,
              "end": 2666
            },
            "abstract": false,
            "declare": false,
            "start": 2625,
            "end": 2666
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassInPrivateModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 2685,
                "end": 2711
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 2712,
                "end": 2719
              },
              "abstract": false,
              "declare": false,
              "start": 2679,
              "end": 2719
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2672,
            "end": 2719
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
                "start": 2738,
                "end": 2774
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
                      "start": 2775,
                      "end": 2776
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClassInPrivateModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2785,
                        "end": 2812
                      },
                      "typeArguments": null,
                      "start": 2785,
                      "end": 2812
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2775,
                    "end": 2812
                  }
                ],
                "start": 2774,
                "end": 2813
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
                      "start": 2824,
                      "end": 2832
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
                                "start": 2838,
                                "end": 2839
                              },
                              "typeArguments": null,
                              "start": 2838,
                              "end": 2839
                            },
                            "start": 2836,
                            "end": 2839
                          },
                          "start": 2833,
                          "end": 2839
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
                            "start": 2842,
                            "end": 2843
                          },
                          "typeArguments": null,
                          "start": 2842,
                          "end": 2843
                        },
                        "start": 2840,
                        "end": 2843
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
                              "start": 2865,
                              "end": 2868
                            },
                            "start": 2858,
                            "end": 2869
                          }
                        ],
                        "start": 2844,
                        "end": 2879
                      },
                      "expression": false,
                      "start": 2832,
                      "end": 2879
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 2824,
                    "end": 2879
                  }
                ],
                "start": 2814,
                "end": 2885
              },
              "abstract": false,
              "declare": false,
              "start": 2732,
              "end": 2885
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2725,
            "end": 2885
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
                "start": 2904,
                "end": 2939
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
                      "start": 2940,
                      "end": 2941
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClassInPrivateModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2950,
                        "end": 2976
                      },
                      "typeArguments": null,
                      "start": 2950,
                      "end": 2976
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2940,
                    "end": 2976
                  }
                ],
                "start": 2939,
                "end": 2977
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
                      "start": 2988,
                      "end": 2996
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
                                "start": 3002,
                                "end": 3003
                              },
                              "typeArguments": null,
                              "start": 3002,
                              "end": 3003
                            },
                            "start": 3000,
                            "end": 3003
                          },
                          "start": 2997,
                          "end": 3003
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
                            "start": 3006,
                            "end": 3007
                          },
                          "typeArguments": null,
                          "start": 3006,
                          "end": 3007
                        },
                        "start": 3004,
                        "end": 3007
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
                              "start": 3029,
                              "end": 3032
                            },
                            "start": 3022,
                            "end": 3033
                          }
                        ],
                        "start": 3008,
                        "end": 3043
                      },
                      "expression": false,
                      "start": 2996,
                      "end": 3043
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 2988,
                    "end": 3043
                  }
                ],
                "start": 2978,
                "end": 3049
              },
              "abstract": false,
              "declare": false,
              "start": 2898,
              "end": 3049
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2891,
            "end": 3049
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
              "start": 3061,
              "end": 3098
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
                    "start": 3099,
                    "end": 3100
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateClassInPrivateModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3109,
                      "end": 3136
                    },
                    "typeArguments": null,
                    "start": 3109,
                    "end": 3136
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3099,
                  "end": 3136
                }
              ],
              "start": 3098,
              "end": 3137
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
                    "start": 3148,
                    "end": 3156
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
                              "start": 3162,
                              "end": 3163
                            },
                            "typeArguments": null,
                            "start": 3162,
                            "end": 3163
                          },
                          "start": 3160,
                          "end": 3163
                        },
                        "start": 3157,
                        "end": 3163
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
                          "start": 3166,
                          "end": 3167
                        },
                        "typeArguments": null,
                        "start": 3166,
                        "end": 3167
                      },
                      "start": 3164,
                      "end": 3167
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
                            "start": 3189,
                            "end": 3192
                          },
                          "start": 3182,
                          "end": 3193
                        }
                      ],
                      "start": 3168,
                      "end": 3203
                    },
                    "expression": false,
                    "start": 3156,
                    "end": 3203
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 3148,
                  "end": 3203
                }
              ],
              "start": 3138,
              "end": 3209
            },
            "abstract": false,
            "declare": false,
            "start": 3055,
            "end": 3209
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
              "start": 3221,
              "end": 3257
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
                    "start": 3258,
                    "end": 3259
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClassInPrivateModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3268,
                      "end": 3294
                    },
                    "typeArguments": null,
                    "start": 3268,
                    "end": 3294
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3258,
                  "end": 3294
                }
              ],
              "start": 3257,
              "end": 3295
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
                    "start": 3306,
                    "end": 3314
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
                              "start": 3320,
                              "end": 3321
                            },
                            "typeArguments": null,
                            "start": 3320,
                            "end": 3321
                          },
                          "start": 3318,
                          "end": 3321
                        },
                        "start": 3315,
                        "end": 3321
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
                          "start": 3324,
                          "end": 3325
                        },
                        "typeArguments": null,
                        "start": 3324,
                        "end": 3325
                      },
                      "start": 3322,
                      "end": 3325
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
                            "start": 3347,
                            "end": 3350
                          },
                          "start": 3340,
                          "end": 3351
                        }
                      ],
                      "start": 3326,
                      "end": 3361
                    },
                    "expression": false,
                    "start": 3314,
                    "end": 3361
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 3306,
                  "end": 3361
                }
              ],
              "start": 3296,
              "end": 3367
            },
            "abstract": false,
            "declare": false,
            "start": 3215,
            "end": 3367
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
                "start": 3386,
                "end": 3435
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
                      "start": 3436,
                      "end": 3437
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3436,
                    "end": 3437
                  }
                ],
                "start": 3435,
                "end": 3438
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
                      "start": 3449,
                      "end": 3457
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
                                "start": 3463,
                                "end": 3464
                              },
                              "typeArguments": null,
                              "start": 3463,
                              "end": 3464
                            },
                            "start": 3461,
                            "end": 3464
                          },
                          "start": 3458,
                          "end": 3464
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
                            "start": 3467,
                            "end": 3468
                          },
                          "typeArguments": null,
                          "start": 3467,
                          "end": 3468
                        },
                        "start": 3465,
                        "end": 3468
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
                              "start": 3490,
                              "end": 3493
                            },
                            "start": 3483,
                            "end": 3494
                          }
                        ],
                        "start": 3469,
                        "end": 3504
                      },
                      "expression": false,
                      "start": 3457,
                      "end": 3504
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 3449,
                    "end": 3504
                  }
                ],
                "start": 3439,
                "end": 3510
              },
              "abstract": false,
              "declare": false,
              "start": 3380,
              "end": 3510
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3373,
            "end": 3510
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
              "start": 3522,
              "end": 3572
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
                    "start": 3573,
                    "end": 3574
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3573,
                  "end": 3574
                }
              ],
              "start": 3572,
              "end": 3575
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
                    "start": 3586,
                    "end": 3594
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
                              "start": 3600,
                              "end": 3601
                            },
                            "typeArguments": null,
                            "start": 3600,
                            "end": 3601
                          },
                          "start": 3598,
                          "end": 3601
                        },
                        "start": 3595,
                        "end": 3601
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
                          "start": 3604,
                          "end": 3605
                        },
                        "typeArguments": null,
                        "start": 3604,
                        "end": 3605
                      },
                      "start": 3602,
                      "end": 3605
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
                            "start": 3627,
                            "end": 3630
                          },
                          "start": 3620,
                          "end": 3631
                        }
                      ],
                      "start": 3606,
                      "end": 3641
                    },
                    "expression": false,
                    "start": 3594,
                    "end": 3641
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 3586,
                  "end": 3641
                }
              ],
              "start": 3576,
              "end": 3647
            },
            "abstract": false,
            "declare": false,
            "start": 3516,
            "end": 3647
          }
        ],
        "start": 2619,
        "end": 3649
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 2598,
      "end": 3649
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 3649
}
```
