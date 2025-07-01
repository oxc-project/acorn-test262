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
        "start": 15,
        "end": 16
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
              "start": 33,
              "end": 43
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
                    "start": 44,
                    "end": 45
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 44,
                  "end": 45
                }
              ],
              "start": 43,
              "end": 46
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 47,
              "end": 50
            },
            "declare": false,
            "start": 23,
            "end": 50
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "List",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 69
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
                    "start": 70,
                    "end": 71
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 70,
                  "end": 71
                }
              ],
              "start": 69,
              "end": 72
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
                  "start": 81,
                  "end": 91
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
                        "start": 92,
                        "end": 93
                      },
                      "typeArguments": null,
                      "start": 92,
                      "end": 93
                    }
                  ],
                  "start": 91,
                  "end": 94
                },
                "start": 81,
                "end": 94
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
                          "start": 113,
                          "end": 119
                        },
                        "start": 111,
                        "end": 119
                      },
                      "start": 106,
                      "end": 119
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
                        "start": 122,
                        "end": 123
                      },
                      "typeArguments": null,
                      "start": 122,
                      "end": 123
                    },
                    "start": 120,
                    "end": 123
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 105,
                  "end": 124
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
                    "start": 133,
                    "end": 139
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 141,
                      "end": 147
                    },
                    "start": 139,
                    "end": 147
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 133,
                  "end": 148
                }
              ],
              "start": 95,
              "end": 154
            },
            "declare": false,
            "start": 55,
            "end": 154
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ListIterator",
              "optional": false,
              "typeAnnotation": null,
              "start": 170,
              "end": 182
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
                    "start": 183,
                    "end": 184
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 183,
                  "end": 184
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TResult",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 186,
                    "end": 193
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 186,
                  "end": 193
                }
              ],
              "start": 182,
              "end": 194
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
                            "start": 213,
                            "end": 214
                          },
                          "typeArguments": null,
                          "start": 213,
                          "end": 214
                        },
                        "start": 211,
                        "end": 214
                      },
                      "start": 206,
                      "end": 214
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
                          "start": 223,
                          "end": 229
                        },
                        "start": 221,
                        "end": 229
                      },
                      "start": 216,
                      "end": 229
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
                              "start": 237,
                              "end": 238
                            },
                            "typeArguments": null,
                            "start": 237,
                            "end": 238
                          },
                          "start": 237,
                          "end": 240
                        },
                        "start": 235,
                        "end": 240
                      },
                      "start": 231,
                      "end": 240
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
                        "start": 243,
                        "end": 250
                      },
                      "typeArguments": null,
                      "start": 243,
                      "end": 250
                    },
                    "start": 241,
                    "end": 250
                  },
                  "start": 205,
                  "end": 251
                }
              ],
              "start": 195,
              "end": 257
            },
            "declare": false,
            "start": 160,
            "end": 257
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Dictionary",
              "optional": false,
              "typeAnnotation": null,
              "start": 273,
              "end": 283
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
                    "start": 284,
                    "end": 285
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 284,
                  "end": 285
                }
              ],
              "start": 283,
              "end": 286
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
                  "start": 295,
                  "end": 305
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
                        "start": 306,
                        "end": 307
                      },
                      "typeArguments": null,
                      "start": 306,
                      "end": 307
                    }
                  ],
                  "start": 305,
                  "end": 308
                },
                "start": 295,
                "end": 308
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
                          "start": 327,
                          "end": 333
                        },
                        "start": 325,
                        "end": 333
                      },
                      "start": 320,
                      "end": 333
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
                        "start": 336,
                        "end": 337
                      },
                      "typeArguments": null,
                      "start": 336,
                      "end": 337
                    },
                    "start": 334,
                    "end": 337
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 319,
                  "end": 338
                }
              ],
              "start": 309,
              "end": 344
            },
            "declare": false,
            "start": 263,
            "end": 344
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
                "start": 365,
                "end": 370
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
                      "start": 371,
                      "end": 372
                    },
                    "constraint": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 381,
                      "end": 383
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 371,
                    "end": 383
                  }
                ],
                "start": 370,
                "end": 384
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
                        "start": 400,
                        "end": 410
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
                              "start": 411,
                              "end": 412
                            },
                            "typeArguments": null,
                            "start": 411,
                            "end": 412
                          }
                        ],
                        "start": 410,
                        "end": 413
                      },
                      "start": 400,
                      "end": 413
                    },
                    "start": 398,
                    "end": 413
                  },
                  "start": 394,
                  "end": 413
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
                      "start": 437,
                      "end": 443
                    },
                    "start": 435,
                    "end": 443
                  },
                  "start": 423,
                  "end": 443
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 446,
                    "end": 449
                  },
                  "start": 446,
                  "end": 451
                },
                "start": 444,
                "end": 451
              },
              "body": null,
              "expression": false,
              "start": 356,
              "end": 452
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 349,
            "end": 452
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
                "start": 474,
                "end": 477
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
                      "start": 478,
                      "end": 479
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 478,
                    "end": 479
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TResult",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 481,
                      "end": 488
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 481,
                    "end": 488
                  }
                ],
                "start": 477,
                "end": 489
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
                        "start": 505,
                        "end": 509
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
                              "start": 510,
                              "end": 511
                            },
                            "typeArguments": null,
                            "start": 510,
                            "end": 511
                          }
                        ],
                        "start": 509,
                        "end": 512
                      },
                      "start": 505,
                      "end": 512
                    },
                    "start": 503,
                    "end": 512
                  },
                  "start": 499,
                  "end": 512
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
                        "start": 532,
                        "end": 544
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
                              "start": 545,
                              "end": 546
                            },
                            "typeArguments": null,
                            "start": 545,
                            "end": 546
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TResult",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 548,
                              "end": 555
                            },
                            "typeArguments": null,
                            "start": 548,
                            "end": 555
                          }
                        ],
                        "start": 544,
                        "end": 556
                      },
                      "start": 532,
                      "end": 556
                    },
                    "start": 530,
                    "end": 556
                  },
                  "start": 522,
                  "end": 556
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
                      "start": 576,
                      "end": 579
                    },
                    "start": 574,
                    "end": 579
                  },
                  "start": 566,
                  "end": 579
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
                      "start": 582,
                      "end": 589
                    },
                    "typeArguments": null,
                    "start": 582,
                    "end": 589
                  },
                  "start": 582,
                  "end": 591
                },
                "start": 580,
                "end": 591
              },
              "body": null,
              "expression": false,
              "start": 465,
              "end": 592
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 458,
            "end": 592
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
                "start": 614,
                "end": 619
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
                      "start": 620,
                      "end": 621
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 620,
                    "end": 621
                  }
                ],
                "start": 619,
                "end": 622
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
                        "start": 630,
                        "end": 634
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
                              "start": 635,
                              "end": 636
                            },
                            "typeArguments": null,
                            "start": 635,
                            "end": 636
                          }
                        ],
                        "start": 634,
                        "end": 637
                      },
                      "start": 630,
                      "end": 637
                    },
                    "start": 628,
                    "end": 637
                  },
                  "start": 623,
                  "end": 637
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
                    "start": 640,
                    "end": 641
                  },
                  "typeArguments": null,
                  "start": 640,
                  "end": 641
                },
                "start": 638,
                "end": 641
              },
              "body": null,
              "expression": false,
              "start": 605,
              "end": 642
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 598,
            "end": 642
          }
        ],
        "start": 17,
        "end": 644
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 644
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
        "start": 660,
        "end": 664
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
              "start": 671,
              "end": 676
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 678,
                "end": 681
              },
              "start": 676,
              "end": 681
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
            "start": 671,
            "end": 682
          }
        ],
        "start": 665,
        "end": 684
      },
      "abstract": false,
      "declare": true,
      "start": 646,
      "end": 684
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IData",
        "optional": false,
        "typeAnnotation": null,
        "start": 696,
        "end": 701
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
              "start": 708,
              "end": 714
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
                    "start": 716,
                    "end": 723
                  },
                  "typeArguments": null,
                  "start": 716,
                  "end": 723
                },
                "start": 716,
                "end": 725
              },
              "start": 714,
              "end": 725
            },
            "accessibility": null,
            "static": false,
            "start": 708,
            "end": 726
          }
        ],
        "start": 702,
        "end": 728
      },
      "declare": false,
      "start": 686,
      "end": 728
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ISeries",
        "optional": false,
        "typeAnnotation": null,
        "start": 740,
        "end": 747
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
              "start": 754,
              "end": 759
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 761,
                  "end": 764
                },
                "start": 761,
                "end": 766
              },
              "start": 759,
              "end": 766
            },
            "accessibility": null,
            "static": false,
            "start": 754,
            "end": 767
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
              "start": 772,
              "end": 775
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 777,
                "end": 783
              },
              "start": 775,
              "end": 783
            },
            "accessibility": null,
            "static": false,
            "start": 772,
            "end": 784
          }
        ],
        "start": 748,
        "end": 786
      },
      "declare": false,
      "start": 730,
      "end": 786
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
        "start": 794,
        "end": 800
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "View",
        "optional": false,
        "typeAnnotation": null,
        "start": 809,
        "end": 813
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
              "start": 827,
              "end": 840
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
                      "start": 844,
                      "end": 851
                    },
                    "typeArguments": null,
                    "start": 844,
                    "end": 851
                  },
                  "start": 844,
                  "end": 853
                },
                "start": 842,
                "end": 853
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
                                  "start": 874,
                                  "end": 879
                                },
                                "typeArguments": null,
                                "start": 874,
                                "end": 879
                              },
                              "start": 874,
                              "end": 881
                            },
                            "start": 872,
                            "end": 881
                          },
                          "start": 868,
                          "end": 881
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 884,
                                "end": 888
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "model",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 889,
                                "end": 894
                              },
                              "optional": false,
                              "computed": false,
                              "start": 884,
                              "end": 894
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "get",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 895,
                              "end": 898
                            },
                            "optional": false,
                            "computed": false,
                            "start": 884,
                            "end": 898
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": "data",
                              "raw": "\"data\"",
                              "start": 899,
                              "end": 905
                            }
                          ],
                          "optional": false,
                          "start": 884,
                          "end": 906
                        },
                        "definite": false,
                        "start": 868,
                        "end": 906
                      }
                    ],
                    "declare": false,
                    "start": 864,
                    "end": 907
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
                                    "start": 931,
                                    "end": 938
                                  },
                                  "typeArguments": null,
                                  "start": 931,
                                  "end": 938
                                },
                                "start": 931,
                                "end": 940
                              },
                              "start": 931,
                              "end": 942
                            },
                            "start": 929,
                            "end": 942
                          },
                          "start": 920,
                          "end": 942
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
                              "start": 945,
                              "end": 946
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "pluck",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 947,
                              "end": 952
                            },
                            "optional": false,
                            "computed": false,
                            "start": 945,
                            "end": 952
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "data",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 953,
                              "end": 957
                            },
                            {
                              "type": "Literal",
                              "value": "series",
                              "raw": "\"series\"",
                              "start": 959,
                              "end": 967
                            }
                          ],
                          "optional": false,
                          "start": 945,
                          "end": 968
                        },
                        "definite": false,
                        "start": 920,
                        "end": 968
                      }
                    ],
                    "declare": false,
                    "start": 916,
                    "end": 969
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
                          "start": 986,
                          "end": 987
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "map",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 988,
                          "end": 991
                        },
                        "optional": false,
                        "computed": false,
                        "start": 986,
                        "end": 991
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "allSeries",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 992,
                          "end": 1001
                        },
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1003,
                            "end": 1004
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "first",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1005,
                            "end": 1010
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1003,
                          "end": 1010
                        }
                      ],
                      "optional": false,
                      "start": 986,
                      "end": 1011
                    },
                    "start": 979,
                    "end": 1012
                  }
                ],
                "start": 854,
                "end": 1018
              },
              "expression": false,
              "start": 840,
              "end": 1018
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 820,
            "end": 1018
          }
        ],
        "start": 814,
        "end": 1020
      },
      "abstract": false,
      "declare": false,
      "start": 788,
      "end": 1020
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1020
}
```
