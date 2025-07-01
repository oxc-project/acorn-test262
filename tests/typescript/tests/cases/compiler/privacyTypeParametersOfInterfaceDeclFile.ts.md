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
          "start": 1973,
          "end": 1985
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
                "start": 1998,
                "end": 2024
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 2025,
                "end": 2032
              },
              "abstract": false,
              "declare": false,
              "start": 1992,
              "end": 2032
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
                  "start": 2051,
                  "end": 2076
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 2077,
                  "end": 2084
                },
                "abstract": false,
                "declare": false,
                "start": 2045,
                "end": 2084
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2038,
              "end": 2084
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
                "start": 2096,
                "end": 2123
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
                      "start": 2124,
                      "end": 2125
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2124,
                    "end": 2125
                  }
                ],
                "start": 2123,
                "end": 2126
              },
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 2127,
                "end": 2134
              },
              "abstract": false,
              "declare": false,
              "start": 2090,
              "end": 2134
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
                  "start": 2153,
                  "end": 2179
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
                        "start": 2180,
                        "end": 2181
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2180,
                      "end": 2181
                    }
                  ],
                  "start": 2179,
                  "end": 2182
                },
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 2183,
                  "end": 2190
                },
                "abstract": false,
                "declare": false,
                "start": 2147,
                "end": 2190
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2140,
              "end": 2190
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
                  "start": 2213,
                  "end": 2253
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
                        "start": 2254,
                        "end": 2255
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClassInPublicModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2264,
                          "end": 2290
                        },
                        "typeArguments": null,
                        "start": 2264,
                        "end": 2290
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2254,
                      "end": 2290
                    }
                  ],
                  "start": 2253,
                  "end": 2291
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
                        "start": 2311,
                        "end": 2319
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
                                "start": 2325,
                                "end": 2326
                              },
                              "typeArguments": null,
                              "start": 2325,
                              "end": 2326
                            },
                            "start": 2323,
                            "end": 2326
                          },
                          "start": 2320,
                          "end": 2326
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
                            "start": 2329,
                            "end": 2330
                          },
                          "typeArguments": null,
                          "start": 2329,
                          "end": 2330
                        },
                        "start": 2327,
                        "end": 2330
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 2311,
                      "end": 2331
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod0",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2340,
                        "end": 2349
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
                            "start": 2353,
                            "end": 2379
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
                                  "start": 2380,
                                  "end": 2381
                                },
                                "typeArguments": null,
                                "start": 2380,
                                "end": 2381
                              }
                            ],
                            "start": 2379,
                            "end": 2382
                          },
                          "start": 2353,
                          "end": 2382
                        },
                        "start": 2351,
                        "end": 2382
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 2340,
                      "end": 2383
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2392,
                        "end": 2401
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
                            "start": 2405,
                            "end": 2432
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
                                  "start": 2433,
                                  "end": 2459
                                },
                                "typeArguments": null,
                                "start": 2433,
                                "end": 2459
                              }
                            ],
                            "start": 2432,
                            "end": 2460
                          },
                          "start": 2405,
                          "end": 2460
                        },
                        "start": 2403,
                        "end": 2460
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 2392,
                      "end": 2461
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2470,
                        "end": 2479
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
                            "start": 2483,
                            "end": 2510
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
                                  "start": 2511,
                                  "end": 2536
                                },
                                "typeArguments": null,
                                "start": 2511,
                                "end": 2536
                              }
                            ],
                            "start": 2510,
                            "end": 2537
                          },
                          "start": 2483,
                          "end": 2537
                        },
                        "start": 2481,
                        "end": 2537
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 2470,
                      "end": 2538
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2547,
                        "end": 2556
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
                            "start": 2560,
                            "end": 2586
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
                                  "start": 2587,
                                  "end": 2613
                                },
                                "typeArguments": null,
                                "start": 2587,
                                "end": 2613
                              }
                            ],
                            "start": 2586,
                            "end": 2614
                          },
                          "start": 2560,
                          "end": 2614
                        },
                        "start": 2558,
                        "end": 2614
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 2547,
                      "end": 2615
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2624,
                        "end": 2633
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
                            "start": 2637,
                            "end": 2663
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
                                  "start": 2664,
                                  "end": 2689
                                },
                                "typeArguments": null,
                                "start": 2664,
                                "end": 2689
                              }
                            ],
                            "start": 2663,
                            "end": 2690
                          },
                          "start": 2637,
                          "end": 2690
                        },
                        "start": 2635,
                        "end": 2690
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 2624,
                      "end": 2691
                    }
                  ],
                  "start": 2292,
                  "end": 2697
                },
                "declare": false,
                "start": 2203,
                "end": 2697
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 2196,
              "end": 2697
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
                  "start": 2720,
                  "end": 2759
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
                        "start": 2760,
                        "end": 2761
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClassInPublicModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2770,
                          "end": 2795
                        },
                        "typeArguments": null,
                        "start": 2770,
                        "end": 2795
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2760,
                      "end": 2795
                    }
                  ],
                  "start": 2759,
                  "end": 2796
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
                        "start": 2807,
                        "end": 2815
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
                                "start": 2821,
                                "end": 2822
                              },
                              "typeArguments": null,
                              "start": 2821,
                              "end": 2822
                            },
                            "start": 2819,
                            "end": 2822
                          },
                          "start": 2816,
                          "end": 2822
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
                            "start": 2825,
                            "end": 2826
                          },
                          "typeArguments": null,
                          "start": 2825,
                          "end": 2826
                        },
                        "start": 2823,
                        "end": 2826
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 2807,
                      "end": 2827
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod0",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2836,
                        "end": 2845
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
                            "start": 2849,
                            "end": 2875
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
                                  "start": 2876,
                                  "end": 2877
                                },
                                "typeArguments": null,
                                "start": 2876,
                                "end": 2877
                              }
                            ],
                            "start": 2875,
                            "end": 2878
                          },
                          "start": 2849,
                          "end": 2878
                        },
                        "start": 2847,
                        "end": 2878
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 2836,
                      "end": 2878
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2887,
                        "end": 2896
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
                            "start": 2900,
                            "end": 2927
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
                                  "start": 2928,
                                  "end": 2954
                                },
                                "typeArguments": null,
                                "start": 2928,
                                "end": 2954
                              }
                            ],
                            "start": 2927,
                            "end": 2955
                          },
                          "start": 2900,
                          "end": 2955
                        },
                        "start": 2898,
                        "end": 2955
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 2887,
                      "end": 2956
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2965,
                        "end": 2974
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
                            "start": 2978,
                            "end": 3005
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
                                  "start": 3006,
                                  "end": 3031
                                },
                                "typeArguments": null,
                                "start": 3006,
                                "end": 3031
                              }
                            ],
                            "start": 3005,
                            "end": 3032
                          },
                          "start": 2978,
                          "end": 3032
                        },
                        "start": 2976,
                        "end": 3032
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 2965,
                      "end": 3033
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3042,
                        "end": 3051
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
                            "start": 3055,
                            "end": 3081
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
                                  "start": 3082,
                                  "end": 3108
                                },
                                "typeArguments": null,
                                "start": 3082,
                                "end": 3108
                              }
                            ],
                            "start": 3081,
                            "end": 3109
                          },
                          "start": 3055,
                          "end": 3109
                        },
                        "start": 3053,
                        "end": 3109
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 3042,
                      "end": 3110
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3119,
                        "end": 3128
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
                            "start": 3132,
                            "end": 3158
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
                                  "start": 3159,
                                  "end": 3184
                                },
                                "typeArguments": null,
                                "start": 3159,
                                "end": 3184
                              }
                            ],
                            "start": 3158,
                            "end": 3185
                          },
                          "start": 3132,
                          "end": 3185
                        },
                        "start": 3130,
                        "end": 3185
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 3119,
                      "end": 3186
                    }
                  ],
                  "start": 2797,
                  "end": 3192
                },
                "declare": false,
                "start": 2710,
                "end": 3192
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 2703,
              "end": 3192
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateInterfaceWithPrivateTypeParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 3208,
                "end": 3249
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
                      "start": 3250,
                      "end": 3251
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClassInPublicModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3260,
                        "end": 3286
                      },
                      "typeArguments": null,
                      "start": 3260,
                      "end": 3286
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3250,
                    "end": 3286
                  }
                ],
                "start": 3249,
                "end": 3287
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
                      "start": 3298,
                      "end": 3306
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
                              "start": 3312,
                              "end": 3313
                            },
                            "typeArguments": null,
                            "start": 3312,
                            "end": 3313
                          },
                          "start": 3310,
                          "end": 3313
                        },
                        "start": 3307,
                        "end": 3313
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
                          "start": 3316,
                          "end": 3317
                        },
                        "typeArguments": null,
                        "start": 3316,
                        "end": 3317
                      },
                      "start": 3314,
                      "end": 3317
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3298,
                    "end": 3318
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod0",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3327,
                      "end": 3336
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
                          "start": 3340,
                          "end": 3366
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
                                "start": 3367,
                                "end": 3368
                              },
                              "typeArguments": null,
                              "start": 3367,
                              "end": 3368
                            }
                          ],
                          "start": 3366,
                          "end": 3369
                        },
                        "start": 3340,
                        "end": 3369
                      },
                      "start": 3338,
                      "end": 3369
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3327,
                    "end": 3370
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3379,
                      "end": 3388
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
                          "start": 3392,
                          "end": 3419
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
                                "start": 3420,
                                "end": 3446
                              },
                              "typeArguments": null,
                              "start": 3420,
                              "end": 3446
                            }
                          ],
                          "start": 3419,
                          "end": 3447
                        },
                        "start": 3392,
                        "end": 3447
                      },
                      "start": 3390,
                      "end": 3447
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3379,
                    "end": 3448
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3457,
                      "end": 3466
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
                          "start": 3470,
                          "end": 3497
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
                                "start": 3498,
                                "end": 3523
                              },
                              "typeArguments": null,
                              "start": 3498,
                              "end": 3523
                            }
                          ],
                          "start": 3497,
                          "end": 3524
                        },
                        "start": 3470,
                        "end": 3524
                      },
                      "start": 3468,
                      "end": 3524
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3457,
                    "end": 3525
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3534,
                      "end": 3543
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
                          "start": 3547,
                          "end": 3573
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
                                "start": 3574,
                                "end": 3600
                              },
                              "typeArguments": null,
                              "start": 3574,
                              "end": 3600
                            }
                          ],
                          "start": 3573,
                          "end": 3601
                        },
                        "start": 3547,
                        "end": 3601
                      },
                      "start": 3545,
                      "end": 3601
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3534,
                    "end": 3602
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3611,
                      "end": 3620
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
                          "start": 3624,
                          "end": 3650
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
                                "start": 3651,
                                "end": 3676
                              },
                              "typeArguments": null,
                              "start": 3651,
                              "end": 3676
                            }
                          ],
                          "start": 3650,
                          "end": 3677
                        },
                        "start": 3624,
                        "end": 3677
                      },
                      "start": 3622,
                      "end": 3677
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3611,
                    "end": 3678
                  }
                ],
                "start": 3288,
                "end": 3684
              },
              "declare": false,
              "start": 3198,
              "end": 3684
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateInterfaceWithPublicTypeParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 3700,
                "end": 3740
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
                      "start": 3741,
                      "end": 3742
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClassInPublicModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3751,
                        "end": 3776
                      },
                      "typeArguments": null,
                      "start": 3751,
                      "end": 3776
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3741,
                    "end": 3776
                  }
                ],
                "start": 3740,
                "end": 3777
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
                      "start": 3788,
                      "end": 3796
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
                              "start": 3802,
                              "end": 3803
                            },
                            "typeArguments": null,
                            "start": 3802,
                            "end": 3803
                          },
                          "start": 3800,
                          "end": 3803
                        },
                        "start": 3797,
                        "end": 3803
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
                          "start": 3806,
                          "end": 3807
                        },
                        "typeArguments": null,
                        "start": 3806,
                        "end": 3807
                      },
                      "start": 3804,
                      "end": 3807
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3788,
                    "end": 3808
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod0",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3817,
                      "end": 3826
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
                          "start": 3830,
                          "end": 3856
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
                                "start": 3857,
                                "end": 3858
                              },
                              "typeArguments": null,
                              "start": 3857,
                              "end": 3858
                            }
                          ],
                          "start": 3856,
                          "end": 3859
                        },
                        "start": 3830,
                        "end": 3859
                      },
                      "start": 3828,
                      "end": 3859
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3817,
                    "end": 3860
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3869,
                      "end": 3878
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
                          "start": 3882,
                          "end": 3909
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
                                "start": 3910,
                                "end": 3936
                              },
                              "typeArguments": null,
                              "start": 3910,
                              "end": 3936
                            }
                          ],
                          "start": 3909,
                          "end": 3937
                        },
                        "start": 3882,
                        "end": 3937
                      },
                      "start": 3880,
                      "end": 3937
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3869,
                    "end": 3938
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3947,
                      "end": 3956
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
                          "start": 3960,
                          "end": 3987
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
                                "start": 3988,
                                "end": 4013
                              },
                              "typeArguments": null,
                              "start": 3988,
                              "end": 4013
                            }
                          ],
                          "start": 3987,
                          "end": 4014
                        },
                        "start": 3960,
                        "end": 4014
                      },
                      "start": 3958,
                      "end": 4014
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3947,
                    "end": 4015
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4024,
                      "end": 4033
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
                          "start": 4037,
                          "end": 4063
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
                                "start": 4064,
                                "end": 4090
                              },
                              "typeArguments": null,
                              "start": 4064,
                              "end": 4090
                            }
                          ],
                          "start": 4063,
                          "end": 4091
                        },
                        "start": 4037,
                        "end": 4091
                      },
                      "start": 4035,
                      "end": 4091
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4024,
                    "end": 4092
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4101,
                      "end": 4110
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
                          "start": 4114,
                          "end": 4140
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
                                "start": 4141,
                                "end": 4166
                              },
                              "typeArguments": null,
                              "start": 4141,
                              "end": 4166
                            }
                          ],
                          "start": 4140,
                          "end": 4167
                        },
                        "start": 4114,
                        "end": 4167
                      },
                      "start": 4112,
                      "end": 4167
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4101,
                    "end": 4168
                  }
                ],
                "start": 3778,
                "end": 4174
              },
              "declare": false,
              "start": 3690,
              "end": 4174
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
                  "start": 4197,
                  "end": 4250
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
                        "start": 4251,
                        "end": 4252
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 4251,
                      "end": 4252
                    }
                  ],
                  "start": 4250,
                  "end": 4253
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
                        "start": 4264,
                        "end": 4272
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
                                "start": 4278,
                                "end": 4279
                              },
                              "typeArguments": null,
                              "start": 4278,
                              "end": 4279
                            },
                            "start": 4276,
                            "end": 4279
                          },
                          "start": 4273,
                          "end": 4279
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
                            "start": 4282,
                            "end": 4283
                          },
                          "typeArguments": null,
                          "start": 4282,
                          "end": 4283
                        },
                        "start": 4280,
                        "end": 4283
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 4264,
                      "end": 4284
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod0",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4293,
                        "end": 4302
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
                            "start": 4306,
                            "end": 4332
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
                                  "start": 4333,
                                  "end": 4334
                                },
                                "typeArguments": null,
                                "start": 4333,
                                "end": 4334
                              }
                            ],
                            "start": 4332,
                            "end": 4335
                          },
                          "start": 4306,
                          "end": 4335
                        },
                        "start": 4304,
                        "end": 4335
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 4293,
                      "end": 4336
                    }
                  ],
                  "start": 4254,
                  "end": 4342
                },
                "declare": false,
                "start": 4187,
                "end": 4342
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 4180,
              "end": 4342
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateInterfaceWithPublicTypeParametersWithoutExtends",
                "optional": false,
                "typeAnnotation": null,
                "start": 4358,
                "end": 4412
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
                      "start": 4413,
                      "end": 4414
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 4413,
                    "end": 4414
                  }
                ],
                "start": 4412,
                "end": 4415
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
                      "start": 4426,
                      "end": 4434
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
                              "start": 4440,
                              "end": 4441
                            },
                            "typeArguments": null,
                            "start": 4440,
                            "end": 4441
                          },
                          "start": 4438,
                          "end": 4441
                        },
                        "start": 4435,
                        "end": 4441
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
                          "start": 4444,
                          "end": 4445
                        },
                        "typeArguments": null,
                        "start": 4444,
                        "end": 4445
                      },
                      "start": 4442,
                      "end": 4445
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4426,
                    "end": 4446
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod0",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4455,
                      "end": 4464
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
                          "start": 4468,
                          "end": 4494
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
                                "start": 4495,
                                "end": 4496
                              },
                              "typeArguments": null,
                              "start": 4495,
                              "end": 4496
                            }
                          ],
                          "start": 4494,
                          "end": 4497
                        },
                        "start": 4468,
                        "end": 4497
                      },
                      "start": 4466,
                      "end": 4497
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4455,
                    "end": 4498
                  }
                ],
                "start": 4416,
                "end": 4504
              },
              "declare": false,
              "start": 4348,
              "end": 4504
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
                  "start": 4527,
                  "end": 4583
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
                        "start": 4584,
                        "end": 4585
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
                            "start": 4594,
                            "end": 4607
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClassInPrivateModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4608,
                            "end": 4634
                          },
                          "start": 4594,
                          "end": 4634
                        },
                        "typeArguments": null,
                        "start": 4594,
                        "end": 4634
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 4584,
                      "end": 4634
                    }
                  ],
                  "start": 4583,
                  "end": 4635
                },
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [],
                  "start": 4636,
                  "end": 4652
                },
                "declare": false,
                "start": 4517,
                "end": 4652
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 4510,
              "end": 4652
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateInterfaceWithPrivateModuleTypeParameterConstraints",
                "optional": false,
                "typeAnnotation": null,
                "start": 4668,
                "end": 4725
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
                      "start": 4726,
                      "end": 4727
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
                          "start": 4736,
                          "end": 4749
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClassInPrivateModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4750,
                          "end": 4776
                        },
                        "start": 4736,
                        "end": 4776
                      },
                      "typeArguments": null,
                      "start": 4736,
                      "end": 4776
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 4726,
                    "end": 4776
                  }
                ],
                "start": 4725,
                "end": 4777
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 4778,
                "end": 4794
              },
              "declare": false,
              "start": 4658,
              "end": 4794
            }
          ],
          "start": 1986,
          "end": 4796
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 1966,
        "end": 4796
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1959,
      "end": 4796
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 4805,
        "end": 4818
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
              "start": 4831,
              "end": 4858
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 4859,
              "end": 4866
            },
            "abstract": false,
            "declare": false,
            "start": 4825,
            "end": 4866
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
                "start": 4885,
                "end": 4911
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 4912,
                "end": 4919
              },
              "abstract": false,
              "declare": false,
              "start": 4879,
              "end": 4919
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4872,
            "end": 4919
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
              "start": 4931,
              "end": 4959
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
                    "start": 4960,
                    "end": 4961
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4960,
                  "end": 4961
                }
              ],
              "start": 4959,
              "end": 4962
            },
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 4963,
              "end": 4970
            },
            "abstract": false,
            "declare": false,
            "start": 4925,
            "end": 4970
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
                "start": 4989,
                "end": 5016
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
                      "start": 5017,
                      "end": 5018
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 5017,
                    "end": 5018
                  }
                ],
                "start": 5016,
                "end": 5019
              },
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 5020,
                "end": 5027
              },
              "abstract": false,
              "declare": false,
              "start": 4983,
              "end": 5027
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4976,
            "end": 5027
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
                "start": 5050,
                "end": 5090
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
                      "start": 5091,
                      "end": 5092
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClassInPrivateModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5101,
                        "end": 5128
                      },
                      "typeArguments": null,
                      "start": 5101,
                      "end": 5128
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 5091,
                    "end": 5128
                  }
                ],
                "start": 5090,
                "end": 5129
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
                      "start": 5140,
                      "end": 5148
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
                              "start": 5154,
                              "end": 5155
                            },
                            "typeArguments": null,
                            "start": 5154,
                            "end": 5155
                          },
                          "start": 5152,
                          "end": 5155
                        },
                        "start": 5149,
                        "end": 5155
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
                          "start": 5158,
                          "end": 5159
                        },
                        "typeArguments": null,
                        "start": 5158,
                        "end": 5159
                      },
                      "start": 5156,
                      "end": 5159
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5140,
                    "end": 5160
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod0",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5169,
                      "end": 5178
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
                          "start": 5182,
                          "end": 5209
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
                                "start": 5210,
                                "end": 5211
                              },
                              "typeArguments": null,
                              "start": 5210,
                              "end": 5211
                            }
                          ],
                          "start": 5209,
                          "end": 5212
                        },
                        "start": 5182,
                        "end": 5212
                      },
                      "start": 5180,
                      "end": 5212
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5169,
                    "end": 5213
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5222,
                      "end": 5231
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
                          "start": 5235,
                          "end": 5263
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
                                "start": 5264,
                                "end": 5291
                              },
                              "typeArguments": null,
                              "start": 5264,
                              "end": 5291
                            }
                          ],
                          "start": 5263,
                          "end": 5292
                        },
                        "start": 5235,
                        "end": 5292
                      },
                      "start": 5233,
                      "end": 5292
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5222,
                    "end": 5293
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5302,
                      "end": 5311
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
                          "start": 5315,
                          "end": 5343
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
                                "start": 5344,
                                "end": 5370
                              },
                              "typeArguments": null,
                              "start": 5344,
                              "end": 5370
                            }
                          ],
                          "start": 5343,
                          "end": 5371
                        },
                        "start": 5315,
                        "end": 5371
                      },
                      "start": 5313,
                      "end": 5371
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5302,
                    "end": 5372
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5381,
                      "end": 5390
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
                          "start": 5394,
                          "end": 5421
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
                                "start": 5422,
                                "end": 5449
                              },
                              "typeArguments": null,
                              "start": 5422,
                              "end": 5449
                            }
                          ],
                          "start": 5421,
                          "end": 5450
                        },
                        "start": 5394,
                        "end": 5450
                      },
                      "start": 5392,
                      "end": 5450
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5381,
                    "end": 5451
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5460,
                      "end": 5469
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
                          "start": 5473,
                          "end": 5500
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
                                "start": 5501,
                                "end": 5527
                              },
                              "typeArguments": null,
                              "start": 5501,
                              "end": 5527
                            }
                          ],
                          "start": 5500,
                          "end": 5528
                        },
                        "start": 5473,
                        "end": 5528
                      },
                      "start": 5471,
                      "end": 5528
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5460,
                    "end": 5529
                  }
                ],
                "start": 5130,
                "end": 5535
              },
              "declare": false,
              "start": 5040,
              "end": 5535
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 5033,
            "end": 5535
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
                "start": 5558,
                "end": 5597
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
                      "start": 5598,
                      "end": 5599
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClassInPrivateModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5608,
                        "end": 5634
                      },
                      "typeArguments": null,
                      "start": 5608,
                      "end": 5634
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 5598,
                    "end": 5634
                  }
                ],
                "start": 5597,
                "end": 5635
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
                      "start": 5646,
                      "end": 5654
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
                              "start": 5660,
                              "end": 5661
                            },
                            "typeArguments": null,
                            "start": 5660,
                            "end": 5661
                          },
                          "start": 5658,
                          "end": 5661
                        },
                        "start": 5655,
                        "end": 5661
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
                          "start": 5664,
                          "end": 5665
                        },
                        "typeArguments": null,
                        "start": 5664,
                        "end": 5665
                      },
                      "start": 5662,
                      "end": 5665
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5646,
                    "end": 5666
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod0",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5675,
                      "end": 5684
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
                          "start": 5688,
                          "end": 5715
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
                                "start": 5716,
                                "end": 5717
                              },
                              "typeArguments": null,
                              "start": 5716,
                              "end": 5717
                            }
                          ],
                          "start": 5715,
                          "end": 5718
                        },
                        "start": 5688,
                        "end": 5718
                      },
                      "start": 5686,
                      "end": 5718
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5675,
                    "end": 5718
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5727,
                      "end": 5736
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
                          "start": 5740,
                          "end": 5768
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
                                "start": 5769,
                                "end": 5796
                              },
                              "typeArguments": null,
                              "start": 5769,
                              "end": 5796
                            }
                          ],
                          "start": 5768,
                          "end": 5797
                        },
                        "start": 5740,
                        "end": 5797
                      },
                      "start": 5738,
                      "end": 5797
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5727,
                    "end": 5798
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5807,
                      "end": 5816
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
                          "start": 5820,
                          "end": 5848
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
                                "start": 5849,
                                "end": 5875
                              },
                              "typeArguments": null,
                              "start": 5849,
                              "end": 5875
                            }
                          ],
                          "start": 5848,
                          "end": 5876
                        },
                        "start": 5820,
                        "end": 5876
                      },
                      "start": 5818,
                      "end": 5876
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5807,
                    "end": 5877
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5886,
                      "end": 5895
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
                          "start": 5899,
                          "end": 5926
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
                                "start": 5927,
                                "end": 5954
                              },
                              "typeArguments": null,
                              "start": 5927,
                              "end": 5954
                            }
                          ],
                          "start": 5926,
                          "end": 5955
                        },
                        "start": 5899,
                        "end": 5955
                      },
                      "start": 5897,
                      "end": 5955
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5886,
                    "end": 5956
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5965,
                      "end": 5974
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
                          "start": 5978,
                          "end": 6005
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
                                "start": 6006,
                                "end": 6032
                              },
                              "typeArguments": null,
                              "start": 6006,
                              "end": 6032
                            }
                          ],
                          "start": 6005,
                          "end": 6033
                        },
                        "start": 5978,
                        "end": 6033
                      },
                      "start": 5976,
                      "end": 6033
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5965,
                    "end": 6034
                  }
                ],
                "start": 5636,
                "end": 6040
              },
              "declare": false,
              "start": 5548,
              "end": 6040
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 5541,
            "end": 6040
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceWithPrivateTypeParameters",
              "optional": false,
              "typeAnnotation": null,
              "start": 6056,
              "end": 6097
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
                    "start": 6098,
                    "end": 6099
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateClassInPrivateModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6108,
                      "end": 6135
                    },
                    "typeArguments": null,
                    "start": 6108,
                    "end": 6135
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 6098,
                  "end": 6135
                }
              ],
              "start": 6097,
              "end": 6136
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
                    "start": 6147,
                    "end": 6155
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
                            "start": 6161,
                            "end": 6162
                          },
                          "typeArguments": null,
                          "start": 6161,
                          "end": 6162
                        },
                        "start": 6159,
                        "end": 6162
                      },
                      "start": 6156,
                      "end": 6162
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
                        "start": 6165,
                        "end": 6166
                      },
                      "typeArguments": null,
                      "start": 6165,
                      "end": 6166
                    },
                    "start": 6163,
                    "end": 6166
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 6147,
                  "end": 6167
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6176,
                    "end": 6185
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
                        "start": 6189,
                        "end": 6216
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
                              "start": 6217,
                              "end": 6218
                            },
                            "typeArguments": null,
                            "start": 6217,
                            "end": 6218
                          }
                        ],
                        "start": 6216,
                        "end": 6219
                      },
                      "start": 6189,
                      "end": 6219
                    },
                    "start": 6187,
                    "end": 6219
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 6176,
                  "end": 6220
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6229,
                    "end": 6238
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
                        "start": 6242,
                        "end": 6270
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
                              "start": 6271,
                              "end": 6298
                            },
                            "typeArguments": null,
                            "start": 6271,
                            "end": 6298
                          }
                        ],
                        "start": 6270,
                        "end": 6299
                      },
                      "start": 6242,
                      "end": 6299
                    },
                    "start": 6240,
                    "end": 6299
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 6229,
                  "end": 6300
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6309,
                    "end": 6318
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
                        "start": 6322,
                        "end": 6350
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
                              "start": 6351,
                              "end": 6377
                            },
                            "typeArguments": null,
                            "start": 6351,
                            "end": 6377
                          }
                        ],
                        "start": 6350,
                        "end": 6378
                      },
                      "start": 6322,
                      "end": 6378
                    },
                    "start": 6320,
                    "end": 6378
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 6309,
                  "end": 6379
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6388,
                    "end": 6397
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
                        "start": 6401,
                        "end": 6428
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
                              "start": 6429,
                              "end": 6456
                            },
                            "typeArguments": null,
                            "start": 6429,
                            "end": 6456
                          }
                        ],
                        "start": 6428,
                        "end": 6457
                      },
                      "start": 6401,
                      "end": 6457
                    },
                    "start": 6399,
                    "end": 6457
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 6388,
                  "end": 6458
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6467,
                    "end": 6476
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
                        "start": 6480,
                        "end": 6507
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
                              "start": 6508,
                              "end": 6534
                            },
                            "typeArguments": null,
                            "start": 6508,
                            "end": 6534
                          }
                        ],
                        "start": 6507,
                        "end": 6535
                      },
                      "start": 6480,
                      "end": 6535
                    },
                    "start": 6478,
                    "end": 6535
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 6467,
                  "end": 6536
                }
              ],
              "start": 6137,
              "end": 6542
            },
            "declare": false,
            "start": 6046,
            "end": 6542
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceWithPublicTypeParameters",
              "optional": false,
              "typeAnnotation": null,
              "start": 6558,
              "end": 6598
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
                    "start": 6599,
                    "end": 6600
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClassInPrivateModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6609,
                      "end": 6635
                    },
                    "typeArguments": null,
                    "start": 6609,
                    "end": 6635
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 6599,
                  "end": 6635
                }
              ],
              "start": 6598,
              "end": 6636
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
                    "start": 6647,
                    "end": 6655
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
                            "start": 6661,
                            "end": 6662
                          },
                          "typeArguments": null,
                          "start": 6661,
                          "end": 6662
                        },
                        "start": 6659,
                        "end": 6662
                      },
                      "start": 6656,
                      "end": 6662
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
                        "start": 6665,
                        "end": 6666
                      },
                      "typeArguments": null,
                      "start": 6665,
                      "end": 6666
                    },
                    "start": 6663,
                    "end": 6666
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 6647,
                  "end": 6667
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6676,
                    "end": 6685
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
                        "start": 6689,
                        "end": 6716
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
                              "start": 6717,
                              "end": 6718
                            },
                            "typeArguments": null,
                            "start": 6717,
                            "end": 6718
                          }
                        ],
                        "start": 6716,
                        "end": 6719
                      },
                      "start": 6689,
                      "end": 6719
                    },
                    "start": 6687,
                    "end": 6719
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 6676,
                  "end": 6720
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6729,
                    "end": 6738
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
                        "start": 6742,
                        "end": 6770
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
                              "start": 6771,
                              "end": 6798
                            },
                            "typeArguments": null,
                            "start": 6771,
                            "end": 6798
                          }
                        ],
                        "start": 6770,
                        "end": 6799
                      },
                      "start": 6742,
                      "end": 6799
                    },
                    "start": 6740,
                    "end": 6799
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 6729,
                  "end": 6800
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6809,
                    "end": 6818
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
                        "start": 6822,
                        "end": 6850
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
                              "start": 6851,
                              "end": 6877
                            },
                            "typeArguments": null,
                            "start": 6851,
                            "end": 6877
                          }
                        ],
                        "start": 6850,
                        "end": 6878
                      },
                      "start": 6822,
                      "end": 6878
                    },
                    "start": 6820,
                    "end": 6878
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 6809,
                  "end": 6879
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6888,
                    "end": 6897
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
                        "start": 6901,
                        "end": 6928
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
                              "start": 6929,
                              "end": 6956
                            },
                            "typeArguments": null,
                            "start": 6929,
                            "end": 6956
                          }
                        ],
                        "start": 6928,
                        "end": 6957
                      },
                      "start": 6901,
                      "end": 6957
                    },
                    "start": 6899,
                    "end": 6957
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 6888,
                  "end": 6958
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6967,
                    "end": 6976
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
                        "start": 6980,
                        "end": 7007
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
                              "start": 7008,
                              "end": 7034
                            },
                            "typeArguments": null,
                            "start": 7008,
                            "end": 7034
                          }
                        ],
                        "start": 7007,
                        "end": 7035
                      },
                      "start": 6980,
                      "end": 7035
                    },
                    "start": 6978,
                    "end": 7035
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 6967,
                  "end": 7036
                }
              ],
              "start": 6637,
              "end": 7042
            },
            "declare": false,
            "start": 6548,
            "end": 7042
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
                "start": 7065,
                "end": 7118
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
                      "start": 7119,
                      "end": 7120
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 7119,
                    "end": 7120
                  }
                ],
                "start": 7118,
                "end": 7121
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
                      "start": 7132,
                      "end": 7140
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
                              "start": 7146,
                              "end": 7147
                            },
                            "typeArguments": null,
                            "start": 7146,
                            "end": 7147
                          },
                          "start": 7144,
                          "end": 7147
                        },
                        "start": 7141,
                        "end": 7147
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
                          "start": 7150,
                          "end": 7151
                        },
                        "typeArguments": null,
                        "start": 7150,
                        "end": 7151
                      },
                      "start": 7148,
                      "end": 7151
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 7132,
                    "end": 7152
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod0",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7161,
                      "end": 7170
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
                          "start": 7174,
                          "end": 7201
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
                                "start": 7202,
                                "end": 7203
                              },
                              "typeArguments": null,
                              "start": 7202,
                              "end": 7203
                            }
                          ],
                          "start": 7201,
                          "end": 7204
                        },
                        "start": 7174,
                        "end": 7204
                      },
                      "start": 7172,
                      "end": 7204
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 7161,
                    "end": 7205
                  }
                ],
                "start": 7122,
                "end": 7211
              },
              "declare": false,
              "start": 7055,
              "end": 7211
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 7048,
            "end": 7211
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceWithPublicTypeParametersWithoutExtends",
              "optional": false,
              "typeAnnotation": null,
              "start": 7227,
              "end": 7281
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
                    "start": 7282,
                    "end": 7283
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 7282,
                  "end": 7283
                }
              ],
              "start": 7281,
              "end": 7284
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
                    "start": 7295,
                    "end": 7303
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
                            "start": 7309,
                            "end": 7310
                          },
                          "typeArguments": null,
                          "start": 7309,
                          "end": 7310
                        },
                        "start": 7307,
                        "end": 7310
                      },
                      "start": 7304,
                      "end": 7310
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
                        "start": 7313,
                        "end": 7314
                      },
                      "typeArguments": null,
                      "start": 7313,
                      "end": 7314
                    },
                    "start": 7311,
                    "end": 7314
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 7295,
                  "end": 7315
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7324,
                    "end": 7333
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
                        "start": 7337,
                        "end": 7364
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
                              "start": 7365,
                              "end": 7366
                            },
                            "typeArguments": null,
                            "start": 7365,
                            "end": 7366
                          }
                        ],
                        "start": 7364,
                        "end": 7367
                      },
                      "start": 7337,
                      "end": 7367
                    },
                    "start": 7335,
                    "end": 7367
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 7324,
                  "end": 7368
                }
              ],
              "start": 7285,
              "end": 7374
            },
            "declare": false,
            "start": 7217,
            "end": 7374
          }
        ],
        "start": 4819,
        "end": 7376
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 4798,
      "end": 7376
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 7376
}
```
