__ESTREE_TEST__:PASS:
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
