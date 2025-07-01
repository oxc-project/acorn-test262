__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Constructor",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 23
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
                "start": 24,
                "end": 25
              },
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 34,
                "end": 40
              },
              "default": {
                "type": "TSObjectKeyword",
                "start": 43,
                "end": 49
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 24,
              "end": 49
            }
          ],
          "start": 23,
          "end": 50
        },
        "typeAnnotation": {
          "type": "TSConstructorType",
          "abstract": false,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null,
                "start": 61,
                "end": 65
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 67,
                    "end": 70
                  },
                  "start": 67,
                  "end": 72
                },
                "start": 65,
                "end": 72
              },
              "value": null,
              "start": 58,
              "end": 72
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
                "start": 77,
                "end": 78
              },
              "typeArguments": null,
              "start": 77,
              "end": 78
            },
            "start": 74,
            "end": 78
          },
          "start": 53,
          "end": 78
        },
        "declare": false,
        "start": 7,
        "end": 79
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 79
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Initable",
          "optional": false,
          "typeAnnotation": null,
          "start": 98,
          "end": 106
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "init",
                "optional": false,
                "typeAnnotation": null,
                "start": 113,
                "end": 117
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 121,
                    "end": 125
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 127,
                        "end": 130
                      },
                      "start": 127,
                      "end": 132
                    },
                    "start": 125,
                    "end": 132
                  },
                  "value": null,
                  "start": 118,
                  "end": 132
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 135,
                  "end": 139
                },
                "start": 133,
                "end": 139
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 113,
              "end": 140
            }
          ],
          "start": 107,
          "end": 142
        },
        "declare": false,
        "start": 88,
        "end": 142
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 81,
      "end": 142
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Serializable",
              "optional": false,
              "typeAnnotation": null,
              "start": 218,
              "end": 230
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 234,
                      "end": 235
                    },
                    "constraint": {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Constructor",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 244,
                            "end": 255
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Initable",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 256,
                                  "end": 264
                                },
                                "typeArguments": null,
                                "start": 256,
                                "end": 264
                              }
                            ],
                            "start": 255,
                            "end": 265
                          },
                          "start": 244,
                          "end": 265
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Initable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 268,
                            "end": 276
                          },
                          "typeArguments": null,
                          "start": 268,
                          "end": 276
                        }
                      ],
                      "start": 244,
                      "end": 276
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 234,
                    "end": 276
                  }
                ],
                "start": 233,
                "end": 277
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SuperClass",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 295,
                        "end": 296
                      },
                      "typeArguments": null,
                      "start": 295,
                      "end": 296
                    },
                    "start": 293,
                    "end": 296
                  },
                  "start": 283,
                  "end": 296
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "LocalMixin",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 314,
                          "end": 324
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "InnerSuperClass",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "K",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 345,
                                    "end": 346
                                  },
                                  "typeArguments": null,
                                  "start": 345,
                                  "end": 346
                                },
                                "start": 343,
                                "end": 346
                              },
                              "start": 328,
                              "end": 346
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "ClassExpression",
                                  "decorators": [],
                                  "id": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "SerializableLocal",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 374,
                                    "end": 391
                                  },
                                  "typeParameters": null,
                                  "superClass": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "InnerSuperClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 400,
                                    "end": 415
                                  },
                                  "superTypeArguments": null,
                                  "implements": [],
                                  "body": {
                                    "type": "ClassBody",
                                    "body": [],
                                    "start": 416,
                                    "end": 427
                                  },
                                  "abstract": false,
                                  "declare": false,
                                  "start": 368,
                                  "end": 427
                                },
                                "start": 361,
                                "end": 427
                              }
                            ],
                            "start": 351,
                            "end": 433
                          },
                          "id": null,
                          "generator": false,
                          "start": 327,
                          "end": 433
                        },
                        "definite": false,
                        "start": 314,
                        "end": 433
                      }
                    ],
                    "declare": false,
                    "start": 308,
                    "end": 434
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
                          "name": "ResultClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 443,
                          "end": 454
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "LocalMixin",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 457,
                            "end": 467
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "SuperClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 468,
                              "end": 478
                            }
                          ],
                          "optional": false,
                          "start": 457,
                          "end": 479
                        },
                        "definite": false,
                        "start": 443,
                        "end": 479
                      }
                    ],
                    "declare": false,
                    "start": 439,
                    "end": 480
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ResultClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 492,
                      "end": 503
                    },
                    "start": 485,
                    "end": 504
                  }
                ],
                "start": 302,
                "end": 506
              },
              "id": null,
              "generator": false,
              "start": 233,
              "end": 506
            },
            "definite": false,
            "start": 218,
            "end": 506
          }
        ],
        "declare": false,
        "start": 212,
        "end": 507
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 205,
      "end": 507
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
            "name": "AMixin",
            "optional": false,
            "typeAnnotation": null,
            "start": 515,
            "end": 521
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 525,
                    "end": 526
                  },
                  "constraint": {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Constructor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 535,
                          "end": 546
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Initable",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 547,
                                "end": 555
                              },
                              "typeArguments": null,
                              "start": 547,
                              "end": 555
                            }
                          ],
                          "start": 546,
                          "end": 556
                        },
                        "start": 535,
                        "end": 556
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Initable",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 559,
                          "end": 567
                        },
                        "typeArguments": null,
                        "start": 559,
                        "end": 567
                      }
                    ],
                    "start": 535,
                    "end": 567
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 525,
                  "end": 567
                }
              ],
              "start": 524,
              "end": 568
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "SuperClass",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 581,
                      "end": 582
                    },
                    "typeArguments": null,
                    "start": 581,
                    "end": 582
                  },
                  "start": 579,
                  "end": 582
                },
                "start": 569,
                "end": 582
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SomeHowOkay",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 597,
                        "end": 608
                      },
                      "init": {
                        "type": "ClassExpression",
                        "decorators": [],
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 617,
                          "end": 618
                        },
                        "typeParameters": null,
                        "superClass": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "SuperClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 627,
                          "end": 637
                        },
                        "superTypeArguments": null,
                        "implements": [],
                        "body": {
                          "type": "ClassBody",
                          "body": [],
                          "start": 638,
                          "end": 645
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 611,
                        "end": 645
                      },
                      "definite": false,
                      "start": 597,
                      "end": 645
                    }
                  ],
                  "declare": false,
                  "start": 593,
                  "end": 646
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
                        "name": "SomeHowNotOkay",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 656,
                        "end": 670
                      },
                      "init": {
                        "type": "ClassExpression",
                        "decorators": [],
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 679,
                          "end": 680
                        },
                        "typeParameters": null,
                        "superClass": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Serializable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 689,
                            "end": 701
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "SuperClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 702,
                              "end": 712
                            }
                          ],
                          "optional": false,
                          "start": 689,
                          "end": 713
                        },
                        "superTypeArguments": null,
                        "implements": [],
                        "body": {
                          "type": "ClassBody",
                          "body": [],
                          "start": 714,
                          "end": 721
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 673,
                        "end": 721
                      },
                      "definite": false,
                      "start": 656,
                      "end": 721
                    }
                  ],
                  "declare": false,
                  "start": 652,
                  "end": 722
                }
              ],
              "start": 587,
              "end": 724
            },
            "id": null,
            "generator": false,
            "start": 524,
            "end": 724
          },
          "definite": false,
          "start": 515,
          "end": 724
        }
      ],
      "declare": false,
      "start": 509,
      "end": 725
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 725
}
```
