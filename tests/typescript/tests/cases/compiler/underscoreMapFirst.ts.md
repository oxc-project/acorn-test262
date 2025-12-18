__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 19
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Collection",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 46
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
                    "start": 47,
                    "end": 48
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 47,
                  "end": 48
                }
              ],
              "start": 46,
              "end": 49
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 50,
              "end": 53
            },
            "declare": false,
            "start": 26,
            "end": 53
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "List",
              "optional": false,
              "typeAnnotation": null,
              "start": 68,
              "end": 72
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
                    "start": 73,
                    "end": 74
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 73,
                  "end": 74
                }
              ],
              "start": 72,
              "end": 75
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Collection",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 84,
                  "end": 94
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 95,
                        "end": 96
                      },
                      "typeArguments": null,
                      "start": 95,
                      "end": 96
                    }
                  ],
                  "start": 94,
                  "end": 97
                },
                "start": 84,
                "end": 97
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "index",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 116,
                          "end": 122
                        },
                        "start": 114,
                        "end": 122
                      },
                      "start": 109,
                      "end": 122
                    }
                  ],
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
                        "start": 125,
                        "end": 126
                      },
                      "typeArguments": null,
                      "start": 125,
                      "end": 126
                    },
                    "start": 123,
                    "end": 126
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 108,
                  "end": 127
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 136,
                    "end": 142
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 144,
                      "end": 150
                    },
                    "start": 142,
                    "end": 150
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 136,
                  "end": 151
                }
              ],
              "start": 98,
              "end": 157
            },
            "declare": false,
            "start": 58,
            "end": 157
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ListIterator",
              "optional": false,
              "typeAnnotation": null,
              "start": 173,
              "end": 185
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
                    "start": 186,
                    "end": 187
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 186,
                  "end": 187
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TResult",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 189,
                    "end": 196
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 189,
                  "end": 196
                }
              ],
              "start": 185,
              "end": 197
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
                      "name": "value",
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
                            "start": 216,
                            "end": 217
                          },
                          "typeArguments": null,
                          "start": 216,
                          "end": 217
                        },
                        "start": 214,
                        "end": 217
                      },
                      "start": 209,
                      "end": 217
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "index",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 226,
                          "end": 232
                        },
                        "start": 224,
                        "end": 232
                      },
                      "start": 219,
                      "end": 232
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "list",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 240,
                              "end": 241
                            },
                            "typeArguments": null,
                            "start": 240,
                            "end": 241
                          },
                          "start": 240,
                          "end": 243
                        },
                        "start": 238,
                        "end": 243
                      },
                      "start": 234,
                      "end": 243
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TResult",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 246,
                        "end": 253
                      },
                      "typeArguments": null,
                      "start": 246,
                      "end": 253
                    },
                    "start": 244,
                    "end": 253
                  },
                  "start": 208,
                  "end": 254
                }
              ],
              "start": 198,
              "end": 260
            },
            "declare": false,
            "start": 163,
            "end": 260
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Dictionary",
              "optional": false,
              "typeAnnotation": null,
              "start": 276,
              "end": 286
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
                    "start": 287,
                    "end": 288
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 287,
                  "end": 288
                }
              ],
              "start": 286,
              "end": 289
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Collection",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 298,
                  "end": 308
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 309,
                        "end": 310
                      },
                      "typeArguments": null,
                      "start": 309,
                      "end": 310
                    }
                  ],
                  "start": 308,
                  "end": 311
                },
                "start": 298,
                "end": 311
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "index",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 330,
                          "end": 336
                        },
                        "start": 328,
                        "end": 336
                      },
                      "start": 323,
                      "end": 336
                    }
                  ],
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
                        "start": 339,
                        "end": 340
                      },
                      "typeArguments": null,
                      "start": 339,
                      "end": 340
                    },
                    "start": 337,
                    "end": 340
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 322,
                  "end": 341
                }
              ],
              "start": 312,
              "end": 347
            },
            "declare": false,
            "start": 266,
            "end": 347
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "pluck",
                "optional": false,
                "typeAnnotation": null,
                "start": 368,
                "end": 373
              },
              "generator": false,
              "async": false,
              "declare": false,
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
                      "start": 374,
                      "end": 375
                    },
                    "constraint": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 384,
                      "end": 386
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 374,
                    "end": 386
                  }
                ],
                "start": 373,
                "end": 387
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "list",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Collection",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 403,
                        "end": 413
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 414,
                              "end": 415
                            },
                            "typeArguments": null,
                            "start": 414,
                            "end": 415
                          }
                        ],
                        "start": 413,
                        "end": 416
                      },
                      "start": 403,
                      "end": 416
                    },
                    "start": 401,
                    "end": 416
                  },
                  "start": 397,
                  "end": 416
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "propertyName",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 440,
                      "end": 446
                    },
                    "start": 438,
                    "end": 446
                  },
                  "start": 426,
                  "end": 446
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 449,
                    "end": 452
                  },
                  "start": 449,
                  "end": 454
                },
                "start": 447,
                "end": 454
              },
              "body": null,
              "expression": false,
              "start": 359,
              "end": 455
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 352,
            "end": 455
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 477,
                "end": 480
              },
              "generator": false,
              "async": false,
              "declare": false,
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
                      "start": 481,
                      "end": 482
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 481,
                    "end": 482
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TResult",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 484,
                      "end": 491
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 484,
                    "end": 491
                  }
                ],
                "start": 480,
                "end": 492
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "list",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "List",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 508,
                        "end": 512
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 513,
                              "end": 514
                            },
                            "typeArguments": null,
                            "start": 513,
                            "end": 514
                          }
                        ],
                        "start": 512,
                        "end": 515
                      },
                      "start": 508,
                      "end": 515
                    },
                    "start": 506,
                    "end": 515
                  },
                  "start": 502,
                  "end": 515
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "iterator",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListIterator",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 535,
                        "end": 547
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 548,
                              "end": 549
                            },
                            "typeArguments": null,
                            "start": 548,
                            "end": 549
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TResult",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 551,
                              "end": 558
                            },
                            "typeArguments": null,
                            "start": 551,
                            "end": 558
                          }
                        ],
                        "start": 547,
                        "end": 559
                      },
                      "start": 535,
                      "end": 559
                    },
                    "start": 533,
                    "end": 559
                  },
                  "start": 525,
                  "end": 559
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "context",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 579,
                      "end": 582
                    },
                    "start": 577,
                    "end": 582
                  },
                  "start": 569,
                  "end": 582
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TResult",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 585,
                      "end": 592
                    },
                    "typeArguments": null,
                    "start": 585,
                    "end": 592
                  },
                  "start": 585,
                  "end": 594
                },
                "start": 583,
                "end": 594
              },
              "body": null,
              "expression": false,
              "start": 468,
              "end": 595
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 461,
            "end": 595
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null,
                "start": 617,
                "end": 622
              },
              "generator": false,
              "async": false,
              "declare": false,
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
                      "start": 623,
                      "end": 624
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 623,
                    "end": 624
                  }
                ],
                "start": 622,
                "end": 625
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "List",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 633,
                        "end": 637
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 638,
                              "end": 639
                            },
                            "typeArguments": null,
                            "start": 638,
                            "end": 639
                          }
                        ],
                        "start": 637,
                        "end": 640
                      },
                      "start": 633,
                      "end": 640
                    },
                    "start": 631,
                    "end": 640
                  },
                  "start": 626,
                  "end": 640
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
                    "start": 643,
                    "end": 644
                  },
                  "typeArguments": null,
                  "start": 643,
                  "end": 644
                },
                "start": 641,
                "end": 644
              },
              "body": null,
              "expression": false,
              "start": 608,
              "end": 645
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 601,
            "end": 645
          }
        ],
        "start": 20,
        "end": 647
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 647
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "View",
        "optional": false,
        "typeAnnotation": null,
        "start": 663,
        "end": 667
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "model",
              "optional": false,
              "typeAnnotation": null,
              "start": 674,
              "end": 679
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 681,
                "end": 684
              },
              "start": 679,
              "end": 684
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 674,
            "end": 685
          }
        ],
        "start": 668,
        "end": 687
      },
      "abstract": false,
      "declare": true,
      "start": 649,
      "end": 687
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IData",
        "optional": false,
        "typeAnnotation": null,
        "start": 699,
        "end": 704
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
              "name": "series",
              "optional": false,
              "typeAnnotation": null,
              "start": 711,
              "end": 717
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ISeries",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 719,
                    "end": 726
                  },
                  "typeArguments": null,
                  "start": 719,
                  "end": 726
                },
                "start": 719,
                "end": 728
              },
              "start": 717,
              "end": 728
            },
            "accessibility": null,
            "static": false,
            "start": 711,
            "end": 729
          }
        ],
        "start": 705,
        "end": 731
      },
      "declare": false,
      "start": 689,
      "end": 731
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ISeries",
        "optional": false,
        "typeAnnotation": null,
        "start": 743,
        "end": 750
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
              "name": "items",
              "optional": false,
              "typeAnnotation": null,
              "start": 757,
              "end": 762
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 764,
                  "end": 767
                },
                "start": 764,
                "end": 769
              },
              "start": 762,
              "end": 769
            },
            "accessibility": null,
            "static": false,
            "start": 757,
            "end": 770
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "key",
              "optional": false,
              "typeAnnotation": null,
              "start": 775,
              "end": 778
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 780,
                "end": 786
              },
              "start": 778,
              "end": 786
            },
            "accessibility": null,
            "static": false,
            "start": 775,
            "end": 787
          }
        ],
        "start": 751,
        "end": 789
      },
      "declare": false,
      "start": 733,
      "end": 789
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyView",
        "optional": false,
        "typeAnnotation": null,
        "start": 797,
        "end": 803
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "View",
        "optional": false,
        "typeAnnotation": null,
        "start": 812,
        "end": 816
      },
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
              "name": "getDataSeries",
              "optional": false,
              "typeAnnotation": null,
              "start": 830,
              "end": 843
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ISeries",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 847,
                      "end": 854
                    },
                    "typeArguments": null,
                    "start": 847,
                    "end": 854
                  },
                  "start": 847,
                  "end": 856
                },
                "start": 845,
                "end": 856
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "IData",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 877,
                                  "end": 882
                                },
                                "typeArguments": null,
                                "start": 877,
                                "end": 882
                              },
                              "start": 877,
                              "end": 884
                            },
                            "start": 875,
                            "end": 884
                          },
                          "start": 871,
                          "end": 884
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 887,
                                "end": 891
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "model",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 892,
                                "end": 897
                              },
                              "optional": false,
                              "computed": false,
                              "start": 887,
                              "end": 897
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "get",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 898,
                              "end": 901
                            },
                            "optional": false,
                            "computed": false,
                            "start": 887,
                            "end": 901
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": "data",
                              "raw": "\"data\"",
                              "start": 902,
                              "end": 908
                            }
                          ],
                          "optional": false,
                          "start": 887,
                          "end": 909
                        },
                        "definite": false,
                        "start": 871,
                        "end": 909
                      }
                    ],
                    "declare": false,
                    "start": 867,
                    "end": 910
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "allSeries",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ISeries",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 934,
                                    "end": 941
                                  },
                                  "typeArguments": null,
                                  "start": 934,
                                  "end": 941
                                },
                                "start": 934,
                                "end": 943
                              },
                              "start": 934,
                              "end": 945
                            },
                            "start": 932,
                            "end": 945
                          },
                          "start": 923,
                          "end": 945
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "_",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 948,
                              "end": 949
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "pluck",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 950,
                              "end": 955
                            },
                            "optional": false,
                            "computed": false,
                            "start": 948,
                            "end": 955
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "data",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 956,
                              "end": 960
                            },
                            {
                              "type": "Literal",
                              "value": "series",
                              "raw": "\"series\"",
                              "start": 962,
                              "end": 970
                            }
                          ],
                          "optional": false,
                          "start": 948,
                          "end": 971
                        },
                        "definite": false,
                        "start": 923,
                        "end": 971
                      }
                    ],
                    "declare": false,
                    "start": 919,
                    "end": 972
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 989,
                          "end": 990
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "map",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 991,
                          "end": 994
                        },
                        "optional": false,
                        "computed": false,
                        "start": 989,
                        "end": 994
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "allSeries",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 995,
                          "end": 1004
                        },
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1006,
                            "end": 1007
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "first",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1008,
                            "end": 1013
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1006,
                          "end": 1013
                        }
                      ],
                      "optional": false,
                      "start": 989,
                      "end": 1014
                    },
                    "start": 982,
                    "end": 1015
                  }
                ],
                "start": 857,
                "end": 1021
              },
              "expression": false,
              "start": 843,
              "end": 1021
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 823,
            "end": 1021
          }
        ],
        "start": 817,
        "end": 1023
      },
      "abstract": false,
      "declare": false,
      "start": 791,
      "end": 1023
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1023
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7,
    "range": [
      0,
      7
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 8,
    "end": 17,
    "range": [
      8,
      17
    ]
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 26,
    "end": 35,
    "range": [
      26,
      35
    ]
  },
  {
    "type": "Identifier",
    "value": "Collection",
    "start": 36,
    "end": 46,
    "range": [
      36,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 58,
    "end": 67,
    "range": [
      58,
      67
    ]
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 68,
    "end": 72,
    "range": [
      68,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 76,
    "end": 83,
    "range": [
      76,
      83
    ]
  },
  {
    "type": "Identifier",
    "value": "Collection",
    "start": 84,
    "end": 94,
    "range": [
      84,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 109,
    "end": 114,
    "range": [
      109,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 116,
    "end": 122,
    "range": [
      116,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 136,
    "end": 142,
    "range": [
      136,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 144,
    "end": 150,
    "range": [
      144,
      150
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 163,
    "end": 172,
    "range": [
      163,
      172
    ]
  },
  {
    "type": "Identifier",
    "value": "ListIterator",
    "start": 173,
    "end": 185,
    "range": [
      173,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 189,
    "end": 196,
    "range": [
      189,
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
    "type": "Punctuator",
    "value": "(",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 209,
    "end": 214,
    "range": [
      209,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 219,
    "end": 224,
    "range": [
      219,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 226,
    "end": 232,
    "range": [
      226,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 234,
    "end": 238,
    "range": [
      234,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 246,
    "end": 253,
    "range": [
      246,
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
    "type": "Keyword",
    "value": "interface",
    "start": 266,
    "end": 275,
    "range": [
      266,
      275
    ]
  },
  {
    "type": "Identifier",
    "value": "Dictionary",
    "start": 276,
    "end": 286,
    "range": [
      276,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 288,
    "end": 289,
    "range": [
      288,
      289
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 290,
    "end": 297,
    "range": [
      290,
      297
    ]
  },
  {
    "type": "Identifier",
    "value": "Collection",
    "start": 298,
    "end": 308,
    "range": [
      298,
      308
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 308,
    "end": 309,
    "range": [
      308,
      309
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 323,
    "end": 328,
    "range": [
      323,
      328
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 330,
    "end": 336,
    "range": [
      330,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 339,
    "end": 340,
    "range": [
      339,
      340
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 340,
    "end": 341,
    "range": [
      340,
      341
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 352,
    "end": 358,
    "range": [
      352,
      358
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 359,
    "end": 367,
    "range": [
      359,
      367
    ]
  },
  {
    "type": "Identifier",
    "value": "pluck",
    "start": 368,
    "end": 373,
    "range": [
      368,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 373,
    "end": 374,
    "range": [
      373,
      374
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 376,
    "end": 383,
    "range": [
      376,
      383
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 385,
    "end": 386,
    "range": [
      385,
      386
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 387,
    "end": 388,
    "range": [
      387,
      388
    ]
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 397,
    "end": 401,
    "range": [
      397,
      401
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Identifier",
    "value": "Collection",
    "start": 403,
    "end": 413,
    "range": [
      403,
      413
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 413,
    "end": 414,
    "range": [
      413,
      414
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Identifier",
    "value": "propertyName",
    "start": 426,
    "end": 438,
    "range": [
      426,
      438
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 438,
    "end": 439,
    "range": [
      438,
      439
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 440,
    "end": 446,
    "range": [
      440,
      446
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 447,
    "end": 448,
    "range": [
      447,
      448
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 449,
    "end": 452,
    "range": [
      449,
      452
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 454,
    "end": 455,
    "range": [
      454,
      455
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 461,
    "end": 467,
    "range": [
      461,
      467
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 468,
    "end": 476,
    "range": [
      468,
      476
    ]
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 477,
    "end": 480,
    "range": [
      477,
      480
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 481,
    "end": 482,
    "range": [
      481,
      482
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 482,
    "end": 483,
    "range": [
      482,
      483
    ]
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 484,
    "end": 491,
    "range": [
      484,
      491
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 502,
    "end": 506,
    "range": [
      502,
      506
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 508,
    "end": 512,
    "range": [
      508,
      512
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 512,
    "end": 513,
    "range": [
      512,
      513
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 513,
    "end": 514,
    "range": [
      513,
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
    "value": ",",
    "start": 515,
    "end": 516,
    "range": [
      515,
      516
    ]
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 525,
    "end": 533,
    "range": [
      525,
      533
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 533,
    "end": 534,
    "range": [
      533,
      534
    ]
  },
  {
    "type": "Identifier",
    "value": "ListIterator",
    "start": 535,
    "end": 547,
    "range": [
      535,
      547
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 547,
    "end": 548,
    "range": [
      547,
      548
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 549,
    "end": 550,
    "range": [
      549,
      550
    ]
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 551,
    "end": 558,
    "range": [
      551,
      558
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 558,
    "end": 559,
    "range": [
      558,
      559
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 559,
    "end": 560,
    "range": [
      559,
      560
    ]
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 569,
    "end": 576,
    "range": [
      569,
      576
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 577,
    "end": 578,
    "range": [
      577,
      578
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 579,
    "end": 582,
    "range": [
      579,
      582
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 585,
    "end": 592,
    "range": [
      585,
      592
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 592,
    "end": 593,
    "range": [
      592,
      593
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 593,
    "end": 594,
    "range": [
      593,
      594
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 594,
    "end": 595,
    "range": [
      594,
      595
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 601,
    "end": 607,
    "range": [
      601,
      607
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 608,
    "end": 616,
    "range": [
      608,
      616
    ]
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 617,
    "end": 622,
    "range": [
      617,
      622
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 625,
    "end": 626,
    "range": [
      625,
      626
    ]
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 626,
    "end": 631,
    "range": [
      626,
      631
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 631,
    "end": 632,
    "range": [
      631,
      632
    ]
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 633,
    "end": 637,
    "range": [
      633,
      637
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 637,
    "end": 638,
    "range": [
      637,
      638
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 638,
    "end": 639,
    "range": [
      638,
      639
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 639,
    "end": 640,
    "range": [
      639,
      640
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 640,
    "end": 641,
    "range": [
      640,
      641
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 641,
    "end": 642,
    "range": [
      641,
      642
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 643,
    "end": 644,
    "range": [
      643,
      644
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 644,
    "end": 645,
    "range": [
      644,
      645
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 646,
    "end": 647,
    "range": [
      646,
      647
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 649,
    "end": 656,
    "range": [
      649,
      656
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 657,
    "end": 662,
    "range": [
      657,
      662
    ]
  },
  {
    "type": "Identifier",
    "value": "View",
    "start": 663,
    "end": 667,
    "range": [
      663,
      667
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 668,
    "end": 669,
    "range": [
      668,
      669
    ]
  },
  {
    "type": "Identifier",
    "value": "model",
    "start": 674,
    "end": 679,
    "range": [
      674,
      679
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 679,
    "end": 680,
    "range": [
      679,
      680
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 681,
    "end": 684,
    "range": [
      681,
      684
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 684,
    "end": 685,
    "range": [
      684,
      685
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 689,
    "end": 698,
    "range": [
      689,
      698
    ]
  },
  {
    "type": "Identifier",
    "value": "IData",
    "start": 699,
    "end": 704,
    "range": [
      699,
      704
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Identifier",
    "value": "series",
    "start": 711,
    "end": 717,
    "range": [
      711,
      717
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 717,
    "end": 718,
    "range": [
      717,
      718
    ]
  },
  {
    "type": "Identifier",
    "value": "ISeries",
    "start": 719,
    "end": 726,
    "range": [
      719,
      726
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 726,
    "end": 727,
    "range": [
      726,
      727
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 727,
    "end": 728,
    "range": [
      727,
      728
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 728,
    "end": 729,
    "range": [
      728,
      729
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 730,
    "end": 731,
    "range": [
      730,
      731
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 733,
    "end": 742,
    "range": [
      733,
      742
    ]
  },
  {
    "type": "Identifier",
    "value": "ISeries",
    "start": 743,
    "end": 750,
    "range": [
      743,
      750
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 751,
    "end": 752,
    "range": [
      751,
      752
    ]
  },
  {
    "type": "Identifier",
    "value": "items",
    "start": 757,
    "end": 762,
    "range": [
      757,
      762
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 762,
    "end": 763,
    "range": [
      762,
      763
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 764,
    "end": 767,
    "range": [
      764,
      767
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 767,
    "end": 768,
    "range": [
      767,
      768
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 768,
    "end": 769,
    "range": [
      768,
      769
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 769,
    "end": 770,
    "range": [
      769,
      770
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 775,
    "end": 778,
    "range": [
      775,
      778
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 778,
    "end": 779,
    "range": [
      778,
      779
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 780,
    "end": 786,
    "range": [
      780,
      786
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 786,
    "end": 787,
    "range": [
      786,
      787
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 788,
    "end": 789,
    "range": [
      788,
      789
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 791,
    "end": 796,
    "range": [
      791,
      796
    ]
  },
  {
    "type": "Identifier",
    "value": "MyView",
    "start": 797,
    "end": 803,
    "range": [
      797,
      803
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 804,
    "end": 811,
    "range": [
      804,
      811
    ]
  },
  {
    "type": "Identifier",
    "value": "View",
    "start": 812,
    "end": 816,
    "range": [
      812,
      816
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 817,
    "end": 818,
    "range": [
      817,
      818
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 823,
    "end": 829,
    "range": [
      823,
      829
    ]
  },
  {
    "type": "Identifier",
    "value": "getDataSeries",
    "start": 830,
    "end": 843,
    "range": [
      830,
      843
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 843,
    "end": 844,
    "range": [
      843,
      844
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 844,
    "end": 845,
    "range": [
      844,
      845
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 845,
    "end": 846,
    "range": [
      845,
      846
    ]
  },
  {
    "type": "Identifier",
    "value": "ISeries",
    "start": 847,
    "end": 854,
    "range": [
      847,
      854
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 854,
    "end": 855,
    "range": [
      854,
      855
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 855,
    "end": 856,
    "range": [
      855,
      856
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 857,
    "end": 858,
    "range": [
      857,
      858
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 867,
    "end": 870,
    "range": [
      867,
      870
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
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
    "value": "IData",
    "start": 877,
    "end": 882,
    "range": [
      877,
      882
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
    "value": "=",
    "start": 885,
    "end": 886,
    "range": [
      885,
      886
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 887,
    "end": 891,
    "range": [
      887,
      891
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 891,
    "end": 892,
    "range": [
      891,
      892
    ]
  },
  {
    "type": "Identifier",
    "value": "model",
    "start": 892,
    "end": 897,
    "range": [
      892,
      897
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 897,
    "end": 898,
    "range": [
      897,
      898
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 898,
    "end": 901,
    "range": [
      898,
      901
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 901,
    "end": 902,
    "range": [
      901,
      902
    ]
  },
  {
    "type": "String",
    "value": "\"data\"",
    "start": 902,
    "end": 908,
    "range": [
      902,
      908
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 908,
    "end": 909,
    "range": [
      908,
      909
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 909,
    "end": 910,
    "range": [
      909,
      910
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 919,
    "end": 922,
    "range": [
      919,
      922
    ]
  },
  {
    "type": "Identifier",
    "value": "allSeries",
    "start": 923,
    "end": 932,
    "range": [
      923,
      932
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 932,
    "end": 933,
    "range": [
      932,
      933
    ]
  },
  {
    "type": "Identifier",
    "value": "ISeries",
    "start": 934,
    "end": 941,
    "range": [
      934,
      941
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 941,
    "end": 942,
    "range": [
      941,
      942
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 942,
    "end": 943,
    "range": [
      942,
      943
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 943,
    "end": 944,
    "range": [
      943,
      944
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 944,
    "end": 945,
    "range": [
      944,
      945
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 946,
    "end": 947,
    "range": [
      946,
      947
    ]
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 948,
    "end": 949,
    "range": [
      948,
      949
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 949,
    "end": 950,
    "range": [
      949,
      950
    ]
  },
  {
    "type": "Identifier",
    "value": "pluck",
    "start": 950,
    "end": 955,
    "range": [
      950,
      955
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 955,
    "end": 956,
    "range": [
      955,
      956
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 956,
    "end": 960,
    "range": [
      956,
      960
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 960,
    "end": 961,
    "range": [
      960,
      961
    ]
  },
  {
    "type": "String",
    "value": "\"series\"",
    "start": 962,
    "end": 970,
    "range": [
      962,
      970
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 970,
    "end": 971,
    "range": [
      970,
      971
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 971,
    "end": 972,
    "range": [
      971,
      972
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 982,
    "end": 988,
    "range": [
      982,
      988
    ]
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 989,
    "end": 990,
    "range": [
      989,
      990
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 990,
    "end": 991,
    "range": [
      990,
      991
    ]
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 991,
    "end": 994,
    "range": [
      991,
      994
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 994,
    "end": 995,
    "range": [
      994,
      995
    ]
  },
  {
    "type": "Identifier",
    "value": "allSeries",
    "start": 995,
    "end": 1004,
    "range": [
      995,
      1004
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1004,
    "end": 1005,
    "range": [
      1004,
      1005
    ]
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 1006,
    "end": 1007,
    "range": [
      1006,
      1007
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1007,
    "end": 1008,
    "range": [
      1007,
      1008
    ]
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 1008,
    "end": 1013,
    "range": [
      1008,
      1013
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1013,
    "end": 1014,
    "range": [
      1013,
      1014
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1014,
    "end": 1015,
    "range": [
      1014,
      1015
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1020,
    "end": 1021,
    "range": [
      1020,
      1021
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1022,
    "end": 1023,
    "range": [
      1022,
      1023
    ]
  }
]
```
