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
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassT",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 73
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
              "start": 74,
              "end": 75
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 74,
            "end": 75
          }
        ],
        "start": 73,
        "end": 76
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 77,
        "end": 80
      },
      "abstract": false,
      "declare": false,
      "start": 54,
      "end": 80
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassT",
          "optional": false,
          "typeAnnotation": null,
          "start": 95,
          "end": 107
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
                "start": 108,
                "end": 109
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 108,
              "end": 109
            }
          ],
          "start": 107,
          "end": 110
        },
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 111,
          "end": 114
        },
        "abstract": false,
        "declare": false,
        "start": 89,
        "end": 114
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 82,
      "end": 114
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicInterfaceWithPrivateTypeParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 133,
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
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 213,
                "end": 221
              },
              "computed": false,
              "optional": false,
              "kind": "method",
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
                        "start": 227,
                        "end": 228
                      },
                      "typeArguments": null,
                      "start": 227,
                      "end": 228
                    },
                    "start": 225,
                    "end": 228
                  },
                  "start": 222,
                  "end": 228
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
                    "start": 231,
                    "end": 232
                  },
                  "typeArguments": null,
                  "start": 231,
                  "end": 232
                },
                "start": 229,
                "end": 232
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 213,
              "end": 233
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod0",
                "optional": false,
                "typeAnnotation": null,
                "start": 238,
                "end": 247
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClassT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 251,
                    "end": 263
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
                          "start": 264,
                          "end": 265
                        },
                        "typeArguments": null,
                        "start": 264,
                        "end": 265
                      }
                    ],
                    "start": 263,
                    "end": 266
                  },
                  "start": 251,
                  "end": 266
                },
                "start": 249,
                "end": 266
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 238,
              "end": 267
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod1",
                "optional": false,
                "typeAnnotation": null,
                "start": 272,
                "end": 281
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateClassT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 285,
                    "end": 298
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 299,
                          "end": 311
                        },
                        "typeArguments": null,
                        "start": 299,
                        "end": 311
                      }
                    ],
                    "start": 298,
                    "end": 312
                  },
                  "start": 285,
                  "end": 312
                },
                "start": 283,
                "end": 312
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 272,
              "end": 313
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod2",
                "optional": false,
                "typeAnnotation": null,
                "start": 319,
                "end": 328
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateClassT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 332,
                    "end": 345
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 346,
                          "end": 357
                        },
                        "typeArguments": null,
                        "start": 346,
                        "end": 357
                      }
                    ],
                    "start": 345,
                    "end": 358
                  },
                  "start": 332,
                  "end": 358
                },
                "start": 330,
                "end": 358
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 319,
              "end": 359
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod3",
                "optional": false,
                "typeAnnotation": null,
                "start": 364,
                "end": 373
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClassT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 377,
                    "end": 389
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 390,
                          "end": 402
                        },
                        "typeArguments": null,
                        "start": 390,
                        "end": 402
                      }
                    ],
                    "start": 389,
                    "end": 403
                  },
                  "start": 377,
                  "end": 403
                },
                "start": 375,
                "end": 403
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 364,
              "end": 404
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod4",
                "optional": false,
                "typeAnnotation": null,
                "start": 409,
                "end": 418
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClassT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 422,
                    "end": 434
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 435,
                          "end": 446
                        },
                        "typeArguments": null,
                        "start": 435,
                        "end": 446
                      }
                    ],
                    "start": 434,
                    "end": 447
                  },
                  "start": 422,
                  "end": 447
                },
                "start": 420,
                "end": 447
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 409,
              "end": 448
            }
          ],
          "start": 198,
          "end": 451
        },
        "declare": false,
        "start": 123,
        "end": 451
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 116,
      "end": 451
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicInterfaceWithPublicTypeParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 470,
          "end": 509
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
                "start": 510,
                "end": 511
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 520,
                  "end": 531
                },
                "typeArguments": null,
                "start": 520,
                "end": 531
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 510,
              "end": 531
            }
          ],
          "start": 509,
          "end": 532
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 539,
                "end": 547
              },
              "computed": false,
              "optional": false,
              "kind": "method",
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
                        "start": 553,
                        "end": 554
                      },
                      "typeArguments": null,
                      "start": 553,
                      "end": 554
                    },
                    "start": 551,
                    "end": 554
                  },
                  "start": 548,
                  "end": 554
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
                    "start": 557,
                    "end": 558
                  },
                  "typeArguments": null,
                  "start": 557,
                  "end": 558
                },
                "start": 555,
                "end": 558
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 539,
              "end": 559
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod0",
                "optional": false,
                "typeAnnotation": null,
                "start": 564,
                "end": 573
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClassT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 577,
                    "end": 589
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
                          "start": 590,
                          "end": 591
                        },
                        "typeArguments": null,
                        "start": 590,
                        "end": 591
                      }
                    ],
                    "start": 589,
                    "end": 592
                  },
                  "start": 577,
                  "end": 592
                },
                "start": 575,
                "end": 592
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 564,
              "end": 592
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod1",
                "optional": false,
                "typeAnnotation": null,
                "start": 597,
                "end": 606
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateClassT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 610,
                    "end": 623
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 624,
                          "end": 636
                        },
                        "typeArguments": null,
                        "start": 624,
                        "end": 636
                      }
                    ],
                    "start": 623,
                    "end": 637
                  },
                  "start": 610,
                  "end": 637
                },
                "start": 608,
                "end": 637
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 597,
              "end": 638
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod2",
                "optional": false,
                "typeAnnotation": null,
                "start": 643,
                "end": 652
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateClassT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 656,
                    "end": 669
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 670,
                          "end": 681
                        },
                        "typeArguments": null,
                        "start": 670,
                        "end": 681
                      }
                    ],
                    "start": 669,
                    "end": 682
                  },
                  "start": 656,
                  "end": 682
                },
                "start": 654,
                "end": 682
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 643,
              "end": 683
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod3",
                "optional": false,
                "typeAnnotation": null,
                "start": 688,
                "end": 697
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClassT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 701,
                    "end": 713
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 714,
                          "end": 726
                        },
                        "typeArguments": null,
                        "start": 714,
                        "end": 726
                      }
                    ],
                    "start": 713,
                    "end": 727
                  },
                  "start": 701,
                  "end": 727
                },
                "start": 699,
                "end": 727
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 688,
              "end": 728
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod4",
                "optional": false,
                "typeAnnotation": null,
                "start": 733,
                "end": 742
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClassT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 746,
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
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 759,
                          "end": 770
                        },
                        "typeArguments": null,
                        "start": 759,
                        "end": 770
                      }
                    ],
                    "start": 758,
                    "end": 771
                  },
                  "start": 746,
                  "end": 771
                },
                "start": 744,
                "end": 771
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 733,
              "end": 772
            }
          ],
          "start": 533,
          "end": 774
        },
        "declare": false,
        "start": 460,
        "end": 774
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 453,
      "end": 774
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterfaceWithPrivateTypeParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 786,
        "end": 827
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
              "start": 828,
              "end": 829
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 838,
                "end": 850
              },
              "typeArguments": null,
              "start": 838,
              "end": 850
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 828,
            "end": 850
          }
        ],
        "start": 827,
        "end": 851
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 858,
              "end": 866
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                      "start": 872,
                      "end": 873
                    },
                    "typeArguments": null,
                    "start": 872,
                    "end": 873
                  },
                  "start": 870,
                  "end": 873
                },
                "start": 867,
                "end": 873
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
                  "start": 876,
                  "end": 877
                },
                "typeArguments": null,
                "start": 876,
                "end": 877
              },
              "start": 874,
              "end": 877
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 858,
            "end": 878
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod0",
              "optional": false,
              "typeAnnotation": null,
              "start": 883,
              "end": 892
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 896,
                  "end": 908
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
                        "start": 909,
                        "end": 910
                      },
                      "typeArguments": null,
                      "start": 909,
                      "end": 910
                    }
                  ],
                  "start": 908,
                  "end": 911
                },
                "start": 896,
                "end": 911
              },
              "start": 894,
              "end": 911
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 883,
            "end": 912
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod1",
              "optional": false,
              "typeAnnotation": null,
              "start": 917,
              "end": 926
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateClassT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 930,
                  "end": 943
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 944,
                        "end": 956
                      },
                      "typeArguments": null,
                      "start": 944,
                      "end": 956
                    }
                  ],
                  "start": 943,
                  "end": 957
                },
                "start": 930,
                "end": 957
              },
              "start": 928,
              "end": 957
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 917,
            "end": 958
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod2",
              "optional": false,
              "typeAnnotation": null,
              "start": 963,
              "end": 972
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateClassT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 976,
                  "end": 989
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 990,
                        "end": 1001
                      },
                      "typeArguments": null,
                      "start": 990,
                      "end": 1001
                    }
                  ],
                  "start": 989,
                  "end": 1002
                },
                "start": 976,
                "end": 1002
              },
              "start": 974,
              "end": 1002
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 963,
            "end": 1003
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1008,
              "end": 1017
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1021,
                  "end": 1033
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1034,
                        "end": 1046
                      },
                      "typeArguments": null,
                      "start": 1034,
                      "end": 1046
                    }
                  ],
                  "start": 1033,
                  "end": 1047
                },
                "start": 1021,
                "end": 1047
              },
              "start": 1019,
              "end": 1047
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1008,
            "end": 1048
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1053,
              "end": 1062
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1066,
                  "end": 1078
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1079,
                        "end": 1090
                      },
                      "typeArguments": null,
                      "start": 1079,
                      "end": 1090
                    }
                  ],
                  "start": 1078,
                  "end": 1091
                },
                "start": 1066,
                "end": 1091
              },
              "start": 1064,
              "end": 1091
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1053,
            "end": 1092
          }
        ],
        "start": 852,
        "end": 1094
      },
      "declare": false,
      "start": 776,
      "end": 1094
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterfaceWithPublicTypeParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 1106,
        "end": 1146
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
              "start": 1147,
              "end": 1148
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 1157,
                "end": 1168
              },
              "typeArguments": null,
              "start": 1157,
              "end": 1168
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1147,
            "end": 1168
          }
        ],
        "start": 1146,
        "end": 1169
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 1176,
              "end": 1184
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                      "start": 1190,
                      "end": 1191
                    },
                    "typeArguments": null,
                    "start": 1190,
                    "end": 1191
                  },
                  "start": 1188,
                  "end": 1191
                },
                "start": 1185,
                "end": 1191
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
                  "start": 1194,
                  "end": 1195
                },
                "typeArguments": null,
                "start": 1194,
                "end": 1195
              },
              "start": 1192,
              "end": 1195
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1176,
            "end": 1196
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod0",
              "optional": false,
              "typeAnnotation": null,
              "start": 1201,
              "end": 1210
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1214,
                  "end": 1226
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
                        "start": 1227,
                        "end": 1228
                      },
                      "typeArguments": null,
                      "start": 1227,
                      "end": 1228
                    }
                  ],
                  "start": 1226,
                  "end": 1229
                },
                "start": 1214,
                "end": 1229
              },
              "start": 1212,
              "end": 1229
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1201,
            "end": 1230
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1235,
              "end": 1244
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateClassT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1248,
                  "end": 1261
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1262,
                        "end": 1274
                      },
                      "typeArguments": null,
                      "start": 1262,
                      "end": 1274
                    }
                  ],
                  "start": 1261,
                  "end": 1275
                },
                "start": 1248,
                "end": 1275
              },
              "start": 1246,
              "end": 1275
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1235,
            "end": 1276
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1281,
              "end": 1290
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateClassT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1294,
                  "end": 1307
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1308,
                        "end": 1319
                      },
                      "typeArguments": null,
                      "start": 1308,
                      "end": 1319
                    }
                  ],
                  "start": 1307,
                  "end": 1320
                },
                "start": 1294,
                "end": 1320
              },
              "start": 1292,
              "end": 1320
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1281,
            "end": 1321
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1326,
              "end": 1335
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1339,
                  "end": 1351
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1352,
                        "end": 1364
                      },
                      "typeArguments": null,
                      "start": 1352,
                      "end": 1364
                    }
                  ],
                  "start": 1351,
                  "end": 1365
                },
                "start": 1339,
                "end": 1365
              },
              "start": 1337,
              "end": 1365
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1326,
            "end": 1366
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1371,
              "end": 1380
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1384,
                  "end": 1396
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1397,
                        "end": 1408
                      },
                      "typeArguments": null,
                      "start": 1397,
                      "end": 1408
                    }
                  ],
                  "start": 1396,
                  "end": 1409
                },
                "start": 1384,
                "end": 1409
              },
              "start": 1382,
              "end": 1409
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1371,
            "end": 1410
          }
        ],
        "start": 1170,
        "end": 1412
      },
      "declare": false,
      "start": 1096,
      "end": 1412
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicInterfaceWithPublicTypeParametersWithoutExtends",
          "optional": false,
          "typeAnnotation": null,
          "start": 1431,
          "end": 1484
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
                "start": 1485,
                "end": 1486
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1485,
              "end": 1486
            }
          ],
          "start": 1484,
          "end": 1487
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 1494,
                "end": 1502
              },
              "computed": false,
              "optional": false,
              "kind": "method",
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
                        "start": 1508,
                        "end": 1509
                      },
                      "typeArguments": null,
                      "start": 1508,
                      "end": 1509
                    },
                    "start": 1506,
                    "end": 1509
                  },
                  "start": 1503,
                  "end": 1509
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
                    "start": 1512,
                    "end": 1513
                  },
                  "typeArguments": null,
                  "start": 1512,
                  "end": 1513
                },
                "start": 1510,
                "end": 1513
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 1494,
              "end": 1514
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod0",
                "optional": false,
                "typeAnnotation": null,
                "start": 1519,
                "end": 1528
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClassT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1532,
                    "end": 1544
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
                          "start": 1545,
                          "end": 1546
                        },
                        "typeArguments": null,
                        "start": 1545,
                        "end": 1546
                      }
                    ],
                    "start": 1544,
                    "end": 1547
                  },
                  "start": 1532,
                  "end": 1547
                },
                "start": 1530,
                "end": 1547
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 1519,
              "end": 1548
            }
          ],
          "start": 1488,
          "end": 1550
        },
        "declare": false,
        "start": 1421,
        "end": 1550
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1414,
      "end": 1550
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterfaceWithPublicTypeParametersWithoutExtends",
        "optional": false,
        "typeAnnotation": null,
        "start": 1562,
        "end": 1616
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
              "start": 1617,
              "end": 1618
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1617,
            "end": 1618
          }
        ],
        "start": 1616,
        "end": 1619
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 1626,
              "end": 1634
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                      "start": 1640,
                      "end": 1641
                    },
                    "typeArguments": null,
                    "start": 1640,
                    "end": 1641
                  },
                  "start": 1638,
                  "end": 1641
                },
                "start": 1635,
                "end": 1641
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
                  "start": 1644,
                  "end": 1645
                },
                "typeArguments": null,
                "start": 1644,
                "end": 1645
              },
              "start": 1642,
              "end": 1645
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1626,
            "end": 1646
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod0",
              "optional": false,
              "typeAnnotation": null,
              "start": 1651,
              "end": 1660
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1664,
                  "end": 1676
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
                        "start": 1677,
                        "end": 1678
                      },
                      "typeArguments": null,
                      "start": 1677,
                      "end": 1678
                    }
                  ],
                  "start": 1676,
                  "end": 1679
                },
                "start": 1664,
                "end": 1679
              },
              "start": 1662,
              "end": 1679
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1651,
            "end": 1680
          }
        ],
        "start": 1620,
        "end": 1682
      },
      "declare": false,
      "start": 1552,
      "end": 1682
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicInterfaceWithPrivateModuleTypeParameterConstraints",
          "optional": false,
          "typeAnnotation": null,
          "start": 1702,
          "end": 1758
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
                "start": 1759,
                "end": 1760
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
                    "start": 1769,
                    "end": 1782
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClassInPrivateModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1783,
                    "end": 1809
                  },
                  "start": 1769,
                  "end": 1809
                },
                "typeArguments": null,
                "start": 1769,
                "end": 1809
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1759,
              "end": 1809
            }
          ],
          "start": 1758,
          "end": 1810
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 1811,
          "end": 1823
        },
        "declare": false,
        "start": 1692,
        "end": 1823
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1685,
      "end": 1823
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterfaceWithPrivateModuleTypeParameterConstraints",
        "optional": false,
        "typeAnnotation": null,
        "start": 1835,
        "end": 1892
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
              "start": 1893,
              "end": 1894
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
                  "start": 1903,
                  "end": 1916
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassInPrivateModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1917,
                  "end": 1943
                },
                "start": 1903,
                "end": 1943
              },
              "typeArguments": null,
              "start": 1903,
              "end": 1943
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1893,
            "end": 1943
          }
        ],
        "start": 1892,
        "end": 1944
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 1945,
        "end": 1957
      },
      "declare": false,
      "start": 1825,
      "end": 1957
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
          "start": 1976,
          "end": 1988
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
                "start": 2001,
                "end": 2027
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 2028,
                "end": 2035
              },
              "abstract": false,
              "declare": false,
              "start": 1995,
              "end": 2035
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
                  "start": 2054,
                  "end": 2079
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 2080,
                  "end": 2087
                },
                "abstract": false,
                "declare": false,
                "start": 2048,
                "end": 2087
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2041,
              "end": 2087
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassInPublicModuleT",
                "optional": false,
                "typeAnnotation": null,
                "start": 2099,
                "end": 2126
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
                      "start": 2127,
                      "end": 2128
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2127,
                    "end": 2128
                  }
                ],
                "start": 2126,
                "end": 2129
              },
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 2130,
                "end": 2137
              },
              "abstract": false,
              "declare": false,
              "start": 2093,
              "end": 2137
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassInPublicModuleT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2156,
                  "end": 2182
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
                        "start": 2183,
                        "end": 2184
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2183,
                      "end": 2184
                    }
                  ],
                  "start": 2182,
                  "end": 2185
                },
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 2186,
                  "end": 2193
                },
                "abstract": false,
                "declare": false,
                "start": 2150,
                "end": 2193
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2143,
              "end": 2193
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicInterfaceWithPrivateTypeParameters",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2216,
                  "end": 2256
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
                        "start": 2257,
                        "end": 2258
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClassInPublicModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2267,
                          "end": 2293
                        },
                        "typeArguments": null,
                        "start": 2267,
                        "end": 2293
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2257,
                      "end": 2293
                    }
                  ],
                  "start": 2256,
                  "end": 2294
                },
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2314,
                        "end": 2322
                      },
                      "computed": false,
                      "optional": false,
                      "kind": "method",
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
                                "start": 2328,
                                "end": 2329
                              },
                              "typeArguments": null,
                              "start": 2328,
                              "end": 2329
                            },
                            "start": 2326,
                            "end": 2329
                          },
                          "start": 2323,
                          "end": 2329
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
                            "start": 2332,
                            "end": 2333
                          },
                          "typeArguments": null,
                          "start": 2332,
                          "end": 2333
                        },
                        "start": 2330,
                        "end": 2333
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 2314,
                      "end": 2334
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod0",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2343,
                        "end": 2352
                      },
                      "computed": false,
                      "optional": false,
                      "kind": "method",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClassInPublicModuleT",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2356,
                            "end": 2382
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
                                  "start": 2383,
                                  "end": 2384
                                },
                                "typeArguments": null,
                                "start": 2383,
                                "end": 2384
                              }
                            ],
                            "start": 2382,
                            "end": 2385
                          },
                          "start": 2356,
                          "end": 2385
                        },
                        "start": 2354,
                        "end": 2385
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 2343,
                      "end": 2386
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2395,
                        "end": 2404
                      },
                      "computed": false,
                      "optional": false,
                      "kind": "method",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateClassInPublicModuleT",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2408,
                            "end": 2435
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateClassInPublicModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2436,
                                  "end": 2462
                                },
                                "typeArguments": null,
                                "start": 2436,
                                "end": 2462
                              }
                            ],
                            "start": 2435,
                            "end": 2463
                          },
                          "start": 2408,
                          "end": 2463
                        },
                        "start": 2406,
                        "end": 2463
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 2395,
                      "end": 2464
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2473,
                        "end": 2482
                      },
                      "computed": false,
                      "optional": false,
                      "kind": "method",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateClassInPublicModuleT",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2486,
                            "end": 2513
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClassInPublicModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2514,
                                  "end": 2539
                                },
                                "typeArguments": null,
                                "start": 2514,
                                "end": 2539
                              }
                            ],
                            "start": 2513,
                            "end": 2540
                          },
                          "start": 2486,
                          "end": 2540
                        },
                        "start": 2484,
                        "end": 2540
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 2473,
                      "end": 2541
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2550,
                        "end": 2559
                      },
                      "computed": false,
                      "optional": false,
                      "kind": "method",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClassInPublicModuleT",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2563,
                            "end": 2589
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateClassInPublicModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2590,
                                  "end": 2616
                                },
                                "typeArguments": null,
                                "start": 2590,
                                "end": 2616
                              }
                            ],
                            "start": 2589,
                            "end": 2617
                          },
                          "start": 2563,
                          "end": 2617
                        },
                        "start": 2561,
                        "end": 2617
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 2550,
                      "end": 2618
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2627,
                        "end": 2636
                      },
                      "computed": false,
                      "optional": false,
                      "kind": "method",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClassInPublicModuleT",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2640,
                            "end": 2666
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClassInPublicModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2667,
                                  "end": 2692
                                },
                                "typeArguments": null,
                                "start": 2667,
                                "end": 2692
                              }
                            ],
                            "start": 2666,
                            "end": 2693
                          },
                          "start": 2640,
                          "end": 2693
                        },
                        "start": 2638,
                        "end": 2693
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 2627,
                      "end": 2694
                    }
                  ],
                  "start": 2295,
                  "end": 2700
                },
                "declare": false,
                "start": 2206,
                "end": 2700
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 2199,
              "end": 2700
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicInterfaceWithPublicTypeParameters",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2723,
                  "end": 2762
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
                        "start": 2763,
                        "end": 2764
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClassInPublicModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2773,
                          "end": 2798
                        },
                        "typeArguments": null,
                        "start": 2773,
                        "end": 2798
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2763,
                      "end": 2798
                    }
                  ],
                  "start": 2762,
                  "end": 2799
                },
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2810,
                        "end": 2818
                      },
                      "computed": false,
                      "optional": false,
                      "kind": "method",
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
                                "start": 2824,
                                "end": 2825
                              },
                              "typeArguments": null,
                              "start": 2824,
                              "end": 2825
                            },
                            "start": 2822,
                            "end": 2825
                          },
                          "start": 2819,
                          "end": 2825
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
                            "start": 2828,
                            "end": 2829
                          },
                          "typeArguments": null,
                          "start": 2828,
                          "end": 2829
                        },
                        "start": 2826,
                        "end": 2829
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 2810,
                      "end": 2830
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod0",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2839,
                        "end": 2848
                      },
                      "computed": false,
                      "optional": false,
                      "kind": "method",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClassInPublicModuleT",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2852,
                            "end": 2878
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
                                  "start": 2879,
                                  "end": 2880
                                },
                                "typeArguments": null,
                                "start": 2879,
                                "end": 2880
                              }
                            ],
                            "start": 2878,
                            "end": 2881
                          },
                          "start": 2852,
                          "end": 2881
                        },
                        "start": 2850,
                        "end": 2881
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 2839,
                      "end": 2881
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2890,
                        "end": 2899
                      },
                      "computed": false,
                      "optional": false,
                      "kind": "method",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateClassInPublicModuleT",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2903,
                            "end": 2930
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateClassInPublicModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2931,
                                  "end": 2957
                                },
                                "typeArguments": null,
                                "start": 2931,
                                "end": 2957
                              }
                            ],
                            "start": 2930,
                            "end": 2958
                          },
                          "start": 2903,
                          "end": 2958
                        },
                        "start": 2901,
                        "end": 2958
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 2890,
                      "end": 2959
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2968,
                        "end": 2977
                      },
                      "computed": false,
                      "optional": false,
                      "kind": "method",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateClassInPublicModuleT",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2981,
                            "end": 3008
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClassInPublicModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3009,
                                  "end": 3034
                                },
                                "typeArguments": null,
                                "start": 3009,
                                "end": 3034
                              }
                            ],
                            "start": 3008,
                            "end": 3035
                          },
                          "start": 2981,
                          "end": 3035
                        },
                        "start": 2979,
                        "end": 3035
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 2968,
                      "end": 3036
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3045,
                        "end": 3054
                      },
                      "computed": false,
                      "optional": false,
                      "kind": "method",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClassInPublicModuleT",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3058,
                            "end": 3084
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateClassInPublicModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3085,
                                  "end": 3111
                                },
                                "typeArguments": null,
                                "start": 3085,
                                "end": 3111
                              }
                            ],
                            "start": 3084,
                            "end": 3112
                          },
                          "start": 3058,
                          "end": 3112
                        },
                        "start": 3056,
                        "end": 3112
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 3045,
                      "end": 3113
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3122,
                        "end": 3131
                      },
                      "computed": false,
                      "optional": false,
                      "kind": "method",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClassInPublicModuleT",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3135,
                            "end": 3161
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClassInPublicModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3162,
                                  "end": 3187
                                },
                                "typeArguments": null,
                                "start": 3162,
                                "end": 3187
                              }
                            ],
                            "start": 3161,
                            "end": 3188
                          },
                          "start": 3135,
                          "end": 3188
                        },
                        "start": 3133,
                        "end": 3188
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 3122,
                      "end": 3189
                    }
                  ],
                  "start": 2800,
                  "end": 3195
                },
                "declare": false,
                "start": 2713,
                "end": 3195
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 2706,
              "end": 3195
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateInterfaceWithPrivateTypeParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 3211,
                "end": 3252
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
                      "start": 3253,
                      "end": 3254
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClassInPublicModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3263,
                        "end": 3289
                      },
                      "typeArguments": null,
                      "start": 3263,
                      "end": 3289
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3253,
                    "end": 3289
                  }
                ],
                "start": 3252,
                "end": 3290
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3301,
                      "end": 3309
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
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
                              "start": 3315,
                              "end": 3316
                            },
                            "typeArguments": null,
                            "start": 3315,
                            "end": 3316
                          },
                          "start": 3313,
                          "end": 3316
                        },
                        "start": 3310,
                        "end": 3316
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
                          "start": 3319,
                          "end": 3320
                        },
                        "typeArguments": null,
                        "start": 3319,
                        "end": 3320
                      },
                      "start": 3317,
                      "end": 3320
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3301,
                    "end": 3321
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod0",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3330,
                      "end": 3339
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClassInPublicModuleT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3343,
                          "end": 3369
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
                                "start": 3370,
                                "end": 3371
                              },
                              "typeArguments": null,
                              "start": 3370,
                              "end": 3371
                            }
                          ],
                          "start": 3369,
                          "end": 3372
                        },
                        "start": 3343,
                        "end": 3372
                      },
                      "start": 3341,
                      "end": 3372
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3330,
                    "end": 3373
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3382,
                      "end": 3391
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClassInPublicModuleT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3395,
                          "end": 3422
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClassInPublicModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3423,
                                "end": 3449
                              },
                              "typeArguments": null,
                              "start": 3423,
                              "end": 3449
                            }
                          ],
                          "start": 3422,
                          "end": 3450
                        },
                        "start": 3395,
                        "end": 3450
                      },
                      "start": 3393,
                      "end": 3450
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3382,
                    "end": 3451
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3460,
                      "end": 3469
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClassInPublicModuleT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3473,
                          "end": 3500
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClassInPublicModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3501,
                                "end": 3526
                              },
                              "typeArguments": null,
                              "start": 3501,
                              "end": 3526
                            }
                          ],
                          "start": 3500,
                          "end": 3527
                        },
                        "start": 3473,
                        "end": 3527
                      },
                      "start": 3471,
                      "end": 3527
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3460,
                    "end": 3528
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3537,
                      "end": 3546
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClassInPublicModuleT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3550,
                          "end": 3576
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClassInPublicModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3577,
                                "end": 3603
                              },
                              "typeArguments": null,
                              "start": 3577,
                              "end": 3603
                            }
                          ],
                          "start": 3576,
                          "end": 3604
                        },
                        "start": 3550,
                        "end": 3604
                      },
                      "start": 3548,
                      "end": 3604
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3537,
                    "end": 3605
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3614,
                      "end": 3623
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClassInPublicModuleT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3627,
                          "end": 3653
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClassInPublicModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3654,
                                "end": 3679
                              },
                              "typeArguments": null,
                              "start": 3654,
                              "end": 3679
                            }
                          ],
                          "start": 3653,
                          "end": 3680
                        },
                        "start": 3627,
                        "end": 3680
                      },
                      "start": 3625,
                      "end": 3680
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3614,
                    "end": 3681
                  }
                ],
                "start": 3291,
                "end": 3687
              },
              "declare": false,
              "start": 3201,
              "end": 3687
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateInterfaceWithPublicTypeParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 3703,
                "end": 3743
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
                      "start": 3744,
                      "end": 3745
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClassInPublicModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3754,
                        "end": 3779
                      },
                      "typeArguments": null,
                      "start": 3754,
                      "end": 3779
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3744,
                    "end": 3779
                  }
                ],
                "start": 3743,
                "end": 3780
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3791,
                      "end": 3799
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
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
                              "start": 3805,
                              "end": 3806
                            },
                            "typeArguments": null,
                            "start": 3805,
                            "end": 3806
                          },
                          "start": 3803,
                          "end": 3806
                        },
                        "start": 3800,
                        "end": 3806
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
                          "start": 3809,
                          "end": 3810
                        },
                        "typeArguments": null,
                        "start": 3809,
                        "end": 3810
                      },
                      "start": 3807,
                      "end": 3810
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3791,
                    "end": 3811
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod0",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3820,
                      "end": 3829
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClassInPublicModuleT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3833,
                          "end": 3859
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
                                "start": 3860,
                                "end": 3861
                              },
                              "typeArguments": null,
                              "start": 3860,
                              "end": 3861
                            }
                          ],
                          "start": 3859,
                          "end": 3862
                        },
                        "start": 3833,
                        "end": 3862
                      },
                      "start": 3831,
                      "end": 3862
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3820,
                    "end": 3863
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3872,
                      "end": 3881
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClassInPublicModuleT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3885,
                          "end": 3912
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClassInPublicModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3913,
                                "end": 3939
                              },
                              "typeArguments": null,
                              "start": 3913,
                              "end": 3939
                            }
                          ],
                          "start": 3912,
                          "end": 3940
                        },
                        "start": 3885,
                        "end": 3940
                      },
                      "start": 3883,
                      "end": 3940
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3872,
                    "end": 3941
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3950,
                      "end": 3959
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClassInPublicModuleT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3963,
                          "end": 3990
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClassInPublicModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3991,
                                "end": 4016
                              },
                              "typeArguments": null,
                              "start": 3991,
                              "end": 4016
                            }
                          ],
                          "start": 3990,
                          "end": 4017
                        },
                        "start": 3963,
                        "end": 4017
                      },
                      "start": 3961,
                      "end": 4017
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3950,
                    "end": 4018
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4027,
                      "end": 4036
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClassInPublicModuleT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4040,
                          "end": 4066
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClassInPublicModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4067,
                                "end": 4093
                              },
                              "typeArguments": null,
                              "start": 4067,
                              "end": 4093
                            }
                          ],
                          "start": 4066,
                          "end": 4094
                        },
                        "start": 4040,
                        "end": 4094
                      },
                      "start": 4038,
                      "end": 4094
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4027,
                    "end": 4095
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4104,
                      "end": 4113
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClassInPublicModuleT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4117,
                          "end": 4143
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClassInPublicModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4144,
                                "end": 4169
                              },
                              "typeArguments": null,
                              "start": 4144,
                              "end": 4169
                            }
                          ],
                          "start": 4143,
                          "end": 4170
                        },
                        "start": 4117,
                        "end": 4170
                      },
                      "start": 4115,
                      "end": 4170
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4104,
                    "end": 4171
                  }
                ],
                "start": 3781,
                "end": 4177
              },
              "declare": false,
              "start": 3693,
              "end": 4177
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicInterfaceWithPublicTypeParametersWithoutExtends",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4200,
                  "end": 4253
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
                        "start": 4254,
                        "end": 4255
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 4254,
                      "end": 4255
                    }
                  ],
                  "start": 4253,
                  "end": 4256
                },
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4267,
                        "end": 4275
                      },
                      "computed": false,
                      "optional": false,
                      "kind": "method",
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
                                "start": 4281,
                                "end": 4282
                              },
                              "typeArguments": null,
                              "start": 4281,
                              "end": 4282
                            },
                            "start": 4279,
                            "end": 4282
                          },
                          "start": 4276,
                          "end": 4282
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
                            "start": 4285,
                            "end": 4286
                          },
                          "typeArguments": null,
                          "start": 4285,
                          "end": 4286
                        },
                        "start": 4283,
                        "end": 4286
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 4267,
                      "end": 4287
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod0",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4296,
                        "end": 4305
                      },
                      "computed": false,
                      "optional": false,
                      "kind": "method",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClassInPublicModuleT",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4309,
                            "end": 4335
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
                                  "start": 4336,
                                  "end": 4337
                                },
                                "typeArguments": null,
                                "start": 4336,
                                "end": 4337
                              }
                            ],
                            "start": 4335,
                            "end": 4338
                          },
                          "start": 4309,
                          "end": 4338
                        },
                        "start": 4307,
                        "end": 4338
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 4296,
                      "end": 4339
                    }
                  ],
                  "start": 4257,
                  "end": 4345
                },
                "declare": false,
                "start": 4190,
                "end": 4345
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 4183,
              "end": 4345
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateInterfaceWithPublicTypeParametersWithoutExtends",
                "optional": false,
                "typeAnnotation": null,
                "start": 4361,
                "end": 4415
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
                      "start": 4416,
                      "end": 4417
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 4416,
                    "end": 4417
                  }
                ],
                "start": 4415,
                "end": 4418
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4429,
                      "end": 4437
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
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
                              "start": 4443,
                              "end": 4444
                            },
                            "typeArguments": null,
                            "start": 4443,
                            "end": 4444
                          },
                          "start": 4441,
                          "end": 4444
                        },
                        "start": 4438,
                        "end": 4444
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
                          "start": 4447,
                          "end": 4448
                        },
                        "typeArguments": null,
                        "start": 4447,
                        "end": 4448
                      },
                      "start": 4445,
                      "end": 4448
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4429,
                    "end": 4449
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod0",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4458,
                      "end": 4467
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClassInPublicModuleT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4471,
                          "end": 4497
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
                                "start": 4498,
                                "end": 4499
                              },
                              "typeArguments": null,
                              "start": 4498,
                              "end": 4499
                            }
                          ],
                          "start": 4497,
                          "end": 4500
                        },
                        "start": 4471,
                        "end": 4500
                      },
                      "start": 4469,
                      "end": 4500
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4458,
                    "end": 4501
                  }
                ],
                "start": 4419,
                "end": 4507
              },
              "declare": false,
              "start": 4351,
              "end": 4507
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicInterfaceWithPrivateModuleTypeParameterConstraints",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4530,
                  "end": 4586
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
                        "start": 4587,
                        "end": 4588
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
                            "start": 4597,
                            "end": 4610
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClassInPrivateModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4611,
                            "end": 4637
                          },
                          "start": 4597,
                          "end": 4637
                        },
                        "typeArguments": null,
                        "start": 4597,
                        "end": 4637
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 4587,
                      "end": 4637
                    }
                  ],
                  "start": 4586,
                  "end": 4638
                },
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [],
                  "start": 4639,
                  "end": 4655
                },
                "declare": false,
                "start": 4520,
                "end": 4655
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 4513,
              "end": 4655
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateInterfaceWithPrivateModuleTypeParameterConstraints",
                "optional": false,
                "typeAnnotation": null,
                "start": 4671,
                "end": 4728
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
                      "start": 4729,
                      "end": 4730
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
                          "start": 4739,
                          "end": 4752
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClassInPrivateModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4753,
                          "end": 4779
                        },
                        "start": 4739,
                        "end": 4779
                      },
                      "typeArguments": null,
                      "start": 4739,
                      "end": 4779
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 4729,
                    "end": 4779
                  }
                ],
                "start": 4728,
                "end": 4780
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 4781,
                "end": 4797
              },
              "declare": false,
              "start": 4661,
              "end": 4797
            }
          ],
          "start": 1989,
          "end": 4799
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 1966,
        "end": 4799
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1959,
      "end": 4799
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 4811,
        "end": 4824
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
              "start": 4837,
              "end": 4864
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 4865,
              "end": 4872
            },
            "abstract": false,
            "declare": false,
            "start": 4831,
            "end": 4872
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
                "start": 4891,
                "end": 4917
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 4918,
                "end": 4925
              },
              "abstract": false,
              "declare": false,
              "start": 4885,
              "end": 4925
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4878,
            "end": 4925
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassInPrivateModuleT",
              "optional": false,
              "typeAnnotation": null,
              "start": 4937,
              "end": 4965
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
                    "start": 4966,
                    "end": 4967
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4966,
                  "end": 4967
                }
              ],
              "start": 4965,
              "end": 4968
            },
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 4969,
              "end": 4976
            },
            "abstract": false,
            "declare": false,
            "start": 4931,
            "end": 4976
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassInPrivateModuleT",
                "optional": false,
                "typeAnnotation": null,
                "start": 4995,
                "end": 5022
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
                      "start": 5023,
                      "end": 5024
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 5023,
                    "end": 5024
                  }
                ],
                "start": 5022,
                "end": 5025
              },
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 5026,
                "end": 5033
              },
              "abstract": false,
              "declare": false,
              "start": 4989,
              "end": 5033
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4982,
            "end": 5033
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceWithPrivateTypeParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 5056,
                "end": 5096
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
                      "start": 5097,
                      "end": 5098
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClassInPrivateModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5107,
                        "end": 5134
                      },
                      "typeArguments": null,
                      "start": 5107,
                      "end": 5134
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 5097,
                    "end": 5134
                  }
                ],
                "start": 5096,
                "end": 5135
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5146,
                      "end": 5154
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
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
                              "start": 5160,
                              "end": 5161
                            },
                            "typeArguments": null,
                            "start": 5160,
                            "end": 5161
                          },
                          "start": 5158,
                          "end": 5161
                        },
                        "start": 5155,
                        "end": 5161
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
                          "start": 5164,
                          "end": 5165
                        },
                        "typeArguments": null,
                        "start": 5164,
                        "end": 5165
                      },
                      "start": 5162,
                      "end": 5165
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5146,
                    "end": 5166
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod0",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5175,
                      "end": 5184
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClassInPrivateModuleT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5188,
                          "end": 5215
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
                                "start": 5216,
                                "end": 5217
                              },
                              "typeArguments": null,
                              "start": 5216,
                              "end": 5217
                            }
                          ],
                          "start": 5215,
                          "end": 5218
                        },
                        "start": 5188,
                        "end": 5218
                      },
                      "start": 5186,
                      "end": 5218
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5175,
                    "end": 5219
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5228,
                      "end": 5237
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClassInPrivateModuleT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5241,
                          "end": 5269
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClassInPrivateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5270,
                                "end": 5297
                              },
                              "typeArguments": null,
                              "start": 5270,
                              "end": 5297
                            }
                          ],
                          "start": 5269,
                          "end": 5298
                        },
                        "start": 5241,
                        "end": 5298
                      },
                      "start": 5239,
                      "end": 5298
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5228,
                    "end": 5299
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5308,
                      "end": 5317
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClassInPrivateModuleT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5321,
                          "end": 5349
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClassInPrivateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5350,
                                "end": 5376
                              },
                              "typeArguments": null,
                              "start": 5350,
                              "end": 5376
                            }
                          ],
                          "start": 5349,
                          "end": 5377
                        },
                        "start": 5321,
                        "end": 5377
                      },
                      "start": 5319,
                      "end": 5377
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5308,
                    "end": 5378
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5387,
                      "end": 5396
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClassInPrivateModuleT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5400,
                          "end": 5427
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClassInPrivateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5428,
                                "end": 5455
                              },
                              "typeArguments": null,
                              "start": 5428,
                              "end": 5455
                            }
                          ],
                          "start": 5427,
                          "end": 5456
                        },
                        "start": 5400,
                        "end": 5456
                      },
                      "start": 5398,
                      "end": 5456
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5387,
                    "end": 5457
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5466,
                      "end": 5475
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClassInPrivateModuleT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5479,
                          "end": 5506
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClassInPrivateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5507,
                                "end": 5533
                              },
                              "typeArguments": null,
                              "start": 5507,
                              "end": 5533
                            }
                          ],
                          "start": 5506,
                          "end": 5534
                        },
                        "start": 5479,
                        "end": 5534
                      },
                      "start": 5477,
                      "end": 5534
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5466,
                    "end": 5535
                  }
                ],
                "start": 5136,
                "end": 5541
              },
              "declare": false,
              "start": 5046,
              "end": 5541
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 5039,
            "end": 5541
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceWithPublicTypeParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 5564,
                "end": 5603
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
                      "start": 5604,
                      "end": 5605
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClassInPrivateModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5614,
                        "end": 5640
                      },
                      "typeArguments": null,
                      "start": 5614,
                      "end": 5640
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 5604,
                    "end": 5640
                  }
                ],
                "start": 5603,
                "end": 5641
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5652,
                      "end": 5660
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
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
                              "start": 5666,
                              "end": 5667
                            },
                            "typeArguments": null,
                            "start": 5666,
                            "end": 5667
                          },
                          "start": 5664,
                          "end": 5667
                        },
                        "start": 5661,
                        "end": 5667
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
                          "start": 5670,
                          "end": 5671
                        },
                        "typeArguments": null,
                        "start": 5670,
                        "end": 5671
                      },
                      "start": 5668,
                      "end": 5671
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5652,
                    "end": 5672
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod0",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5681,
                      "end": 5690
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClassInPrivateModuleT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5694,
                          "end": 5721
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
                                "start": 5722,
                                "end": 5723
                              },
                              "typeArguments": null,
                              "start": 5722,
                              "end": 5723
                            }
                          ],
                          "start": 5721,
                          "end": 5724
                        },
                        "start": 5694,
                        "end": 5724
                      },
                      "start": 5692,
                      "end": 5724
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5681,
                    "end": 5724
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5733,
                      "end": 5742
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClassInPrivateModuleT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5746,
                          "end": 5774
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClassInPrivateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5775,
                                "end": 5802
                              },
                              "typeArguments": null,
                              "start": 5775,
                              "end": 5802
                            }
                          ],
                          "start": 5774,
                          "end": 5803
                        },
                        "start": 5746,
                        "end": 5803
                      },
                      "start": 5744,
                      "end": 5803
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5733,
                    "end": 5804
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5813,
                      "end": 5822
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClassInPrivateModuleT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5826,
                          "end": 5854
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClassInPrivateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5855,
                                "end": 5881
                              },
                              "typeArguments": null,
                              "start": 5855,
                              "end": 5881
                            }
                          ],
                          "start": 5854,
                          "end": 5882
                        },
                        "start": 5826,
                        "end": 5882
                      },
                      "start": 5824,
                      "end": 5882
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5813,
                    "end": 5883
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5892,
                      "end": 5901
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClassInPrivateModuleT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5905,
                          "end": 5932
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClassInPrivateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5933,
                                "end": 5960
                              },
                              "typeArguments": null,
                              "start": 5933,
                              "end": 5960
                            }
                          ],
                          "start": 5932,
                          "end": 5961
                        },
                        "start": 5905,
                        "end": 5961
                      },
                      "start": 5903,
                      "end": 5961
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5892,
                    "end": 5962
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5971,
                      "end": 5980
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClassInPrivateModuleT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5984,
                          "end": 6011
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClassInPrivateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6012,
                                "end": 6038
                              },
                              "typeArguments": null,
                              "start": 6012,
                              "end": 6038
                            }
                          ],
                          "start": 6011,
                          "end": 6039
                        },
                        "start": 5984,
                        "end": 6039
                      },
                      "start": 5982,
                      "end": 6039
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5971,
                    "end": 6040
                  }
                ],
                "start": 5642,
                "end": 6046
              },
              "declare": false,
              "start": 5554,
              "end": 6046
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 5547,
            "end": 6046
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceWithPrivateTypeParameters",
              "optional": false,
              "typeAnnotation": null,
              "start": 6062,
              "end": 6103
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
                    "start": 6104,
                    "end": 6105
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateClassInPrivateModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6114,
                      "end": 6141
                    },
                    "typeArguments": null,
                    "start": 6114,
                    "end": 6141
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 6104,
                  "end": 6141
                }
              ],
              "start": 6103,
              "end": 6142
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6153,
                    "end": 6161
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
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
                            "start": 6167,
                            "end": 6168
                          },
                          "typeArguments": null,
                          "start": 6167,
                          "end": 6168
                        },
                        "start": 6165,
                        "end": 6168
                      },
                      "start": 6162,
                      "end": 6168
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
                        "start": 6171,
                        "end": 6172
                      },
                      "typeArguments": null,
                      "start": 6171,
                      "end": 6172
                    },
                    "start": 6169,
                    "end": 6172
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 6153,
                  "end": 6173
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6182,
                    "end": 6191
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClassInPrivateModuleT",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6195,
                        "end": 6222
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
                              "start": 6223,
                              "end": 6224
                            },
                            "typeArguments": null,
                            "start": 6223,
                            "end": 6224
                          }
                        ],
                        "start": 6222,
                        "end": 6225
                      },
                      "start": 6195,
                      "end": 6225
                    },
                    "start": 6193,
                    "end": 6225
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 6182,
                  "end": 6226
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6235,
                    "end": 6244
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClassInPrivateModuleT",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6248,
                        "end": 6276
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClassInPrivateModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6277,
                              "end": 6304
                            },
                            "typeArguments": null,
                            "start": 6277,
                            "end": 6304
                          }
                        ],
                        "start": 6276,
                        "end": 6305
                      },
                      "start": 6248,
                      "end": 6305
                    },
                    "start": 6246,
                    "end": 6305
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 6235,
                  "end": 6306
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6315,
                    "end": 6324
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClassInPrivateModuleT",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6328,
                        "end": 6356
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClassInPrivateModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6357,
                              "end": 6383
                            },
                            "typeArguments": null,
                            "start": 6357,
                            "end": 6383
                          }
                        ],
                        "start": 6356,
                        "end": 6384
                      },
                      "start": 6328,
                      "end": 6384
                    },
                    "start": 6326,
                    "end": 6384
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 6315,
                  "end": 6385
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6394,
                    "end": 6403
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClassInPrivateModuleT",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6407,
                        "end": 6434
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClassInPrivateModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6435,
                              "end": 6462
                            },
                            "typeArguments": null,
                            "start": 6435,
                            "end": 6462
                          }
                        ],
                        "start": 6434,
                        "end": 6463
                      },
                      "start": 6407,
                      "end": 6463
                    },
                    "start": 6405,
                    "end": 6463
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 6394,
                  "end": 6464
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6473,
                    "end": 6482
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClassInPrivateModuleT",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6486,
                        "end": 6513
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClassInPrivateModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6514,
                              "end": 6540
                            },
                            "typeArguments": null,
                            "start": 6514,
                            "end": 6540
                          }
                        ],
                        "start": 6513,
                        "end": 6541
                      },
                      "start": 6486,
                      "end": 6541
                    },
                    "start": 6484,
                    "end": 6541
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 6473,
                  "end": 6542
                }
              ],
              "start": 6143,
              "end": 6548
            },
            "declare": false,
            "start": 6052,
            "end": 6548
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceWithPublicTypeParameters",
              "optional": false,
              "typeAnnotation": null,
              "start": 6564,
              "end": 6604
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
                    "start": 6605,
                    "end": 6606
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClassInPrivateModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6615,
                      "end": 6641
                    },
                    "typeArguments": null,
                    "start": 6615,
                    "end": 6641
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 6605,
                  "end": 6641
                }
              ],
              "start": 6604,
              "end": 6642
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6653,
                    "end": 6661
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
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
                            "start": 6667,
                            "end": 6668
                          },
                          "typeArguments": null,
                          "start": 6667,
                          "end": 6668
                        },
                        "start": 6665,
                        "end": 6668
                      },
                      "start": 6662,
                      "end": 6668
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
                        "start": 6671,
                        "end": 6672
                      },
                      "typeArguments": null,
                      "start": 6671,
                      "end": 6672
                    },
                    "start": 6669,
                    "end": 6672
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 6653,
                  "end": 6673
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6682,
                    "end": 6691
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClassInPrivateModuleT",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6695,
                        "end": 6722
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
                              "start": 6723,
                              "end": 6724
                            },
                            "typeArguments": null,
                            "start": 6723,
                            "end": 6724
                          }
                        ],
                        "start": 6722,
                        "end": 6725
                      },
                      "start": 6695,
                      "end": 6725
                    },
                    "start": 6693,
                    "end": 6725
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 6682,
                  "end": 6726
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6735,
                    "end": 6744
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClassInPrivateModuleT",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6748,
                        "end": 6776
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClassInPrivateModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6777,
                              "end": 6804
                            },
                            "typeArguments": null,
                            "start": 6777,
                            "end": 6804
                          }
                        ],
                        "start": 6776,
                        "end": 6805
                      },
                      "start": 6748,
                      "end": 6805
                    },
                    "start": 6746,
                    "end": 6805
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 6735,
                  "end": 6806
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6815,
                    "end": 6824
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClassInPrivateModuleT",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6828,
                        "end": 6856
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClassInPrivateModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6857,
                              "end": 6883
                            },
                            "typeArguments": null,
                            "start": 6857,
                            "end": 6883
                          }
                        ],
                        "start": 6856,
                        "end": 6884
                      },
                      "start": 6828,
                      "end": 6884
                    },
                    "start": 6826,
                    "end": 6884
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 6815,
                  "end": 6885
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6894,
                    "end": 6903
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClassInPrivateModuleT",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6907,
                        "end": 6934
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClassInPrivateModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6935,
                              "end": 6962
                            },
                            "typeArguments": null,
                            "start": 6935,
                            "end": 6962
                          }
                        ],
                        "start": 6934,
                        "end": 6963
                      },
                      "start": 6907,
                      "end": 6963
                    },
                    "start": 6905,
                    "end": 6963
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 6894,
                  "end": 6964
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6973,
                    "end": 6982
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClassInPrivateModuleT",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6986,
                        "end": 7013
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClassInPrivateModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 7014,
                              "end": 7040
                            },
                            "typeArguments": null,
                            "start": 7014,
                            "end": 7040
                          }
                        ],
                        "start": 7013,
                        "end": 7041
                      },
                      "start": 6986,
                      "end": 7041
                    },
                    "start": 6984,
                    "end": 7041
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 6973,
                  "end": 7042
                }
              ],
              "start": 6643,
              "end": 7048
            },
            "declare": false,
            "start": 6554,
            "end": 7048
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicInterfaceWithPublicTypeParametersWithoutExtends",
                "optional": false,
                "typeAnnotation": null,
                "start": 7071,
                "end": 7124
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
                      "start": 7125,
                      "end": 7126
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 7125,
                    "end": 7126
                  }
                ],
                "start": 7124,
                "end": 7127
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7138,
                      "end": 7146
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
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
                              "start": 7152,
                              "end": 7153
                            },
                            "typeArguments": null,
                            "start": 7152,
                            "end": 7153
                          },
                          "start": 7150,
                          "end": 7153
                        },
                        "start": 7147,
                        "end": 7153
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
                          "start": 7156,
                          "end": 7157
                        },
                        "typeArguments": null,
                        "start": 7156,
                        "end": 7157
                      },
                      "start": 7154,
                      "end": 7157
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 7138,
                    "end": 7158
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod0",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7167,
                      "end": 7176
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClassInPrivateModuleT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7180,
                          "end": 7207
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
                                "start": 7208,
                                "end": 7209
                              },
                              "typeArguments": null,
                              "start": 7208,
                              "end": 7209
                            }
                          ],
                          "start": 7207,
                          "end": 7210
                        },
                        "start": 7180,
                        "end": 7210
                      },
                      "start": 7178,
                      "end": 7210
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 7167,
                    "end": 7211
                  }
                ],
                "start": 7128,
                "end": 7217
              },
              "declare": false,
              "start": 7061,
              "end": 7217
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 7054,
            "end": 7217
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceWithPublicTypeParametersWithoutExtends",
              "optional": false,
              "typeAnnotation": null,
              "start": 7233,
              "end": 7287
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
                    "start": 7288,
                    "end": 7289
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 7288,
                  "end": 7289
                }
              ],
              "start": 7287,
              "end": 7290
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7301,
                    "end": 7309
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
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
                            "start": 7315,
                            "end": 7316
                          },
                          "typeArguments": null,
                          "start": 7315,
                          "end": 7316
                        },
                        "start": 7313,
                        "end": 7316
                      },
                      "start": 7310,
                      "end": 7316
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
                        "start": 7319,
                        "end": 7320
                      },
                      "typeArguments": null,
                      "start": 7319,
                      "end": 7320
                    },
                    "start": 7317,
                    "end": 7320
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 7301,
                  "end": 7321
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7330,
                    "end": 7339
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClassInPrivateModuleT",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7343,
                        "end": 7370
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
                              "start": 7371,
                              "end": 7372
                            },
                            "typeArguments": null,
                            "start": 7371,
                            "end": 7372
                          }
                        ],
                        "start": 7370,
                        "end": 7373
                      },
                      "start": 7343,
                      "end": 7373
                    },
                    "start": 7341,
                    "end": 7373
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 7330,
                  "end": 7374
                }
              ],
              "start": 7291,
              "end": 7380
            },
            "declare": false,
            "start": 7223,
            "end": 7380
          }
        ],
        "start": 4825,
        "end": 7382
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 4801,
      "end": 7382
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 7382
}
```
