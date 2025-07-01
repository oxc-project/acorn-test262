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
        "name": "KnockoutObservableBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 32
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
              "start": 33,
              "end": 34
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 33,
            "end": 34
          }
        ],
        "start": 32,
        "end": 35
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
              "name": "peek",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 46
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
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 50,
                  "end": 51
                },
                "typeArguments": null,
                "start": 50,
                "end": 51
              },
              "start": 48,
              "end": 51
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 42,
            "end": 52
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
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
                  "start": 61,
                  "end": 62
                },
                "typeArguments": null,
                "start": 61,
                "end": 62
              },
              "start": 59,
              "end": 62
            },
            "start": 57,
            "end": 63
          },
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
                      "start": 76,
                      "end": 77
                    },
                    "typeArguments": null,
                    "start": 76,
                    "end": 77
                  },
                  "start": 74,
                  "end": 77
                },
                "start": 69,
                "end": 77
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 80,
                "end": 84
              },
              "start": 78,
              "end": 84
            },
            "start": 68,
            "end": 85
          }
        ],
        "start": 36,
        "end": 87
      },
      "declare": false,
      "start": 0,
      "end": 87
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "KnockoutObservable",
        "optional": false,
        "typeAnnotation": null,
        "start": 99,
        "end": 117
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
              "start": 118,
              "end": 119
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 118,
            "end": 119
          }
        ],
        "start": 117,
        "end": 120
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "KnockoutObservableBase",
            "optional": false,
            "typeAnnotation": null,
            "start": 129,
            "end": 151
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
                  "start": 152,
                  "end": 153
                },
                "typeArguments": null,
                "start": 152,
                "end": 153
              }
            ],
            "start": 151,
            "end": 154
          },
          "start": 129,
          "end": 154
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "equalityComparer",
              "optional": false,
              "typeAnnotation": null,
              "start": 161,
              "end": 177
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
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
                      "start": 181,
                      "end": 182
                    },
                    "typeArguments": null,
                    "start": 181,
                    "end": 182
                  },
                  "start": 179,
                  "end": 182
                },
                "start": 178,
                "end": 182
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
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
                      "start": 187,
                      "end": 188
                    },
                    "typeArguments": null,
                    "start": 187,
                    "end": 188
                  },
                  "start": 185,
                  "end": 188
                },
                "start": 184,
                "end": 188
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 191,
                "end": 198
              },
              "start": 189,
              "end": 198
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 161,
            "end": 199
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "valueHasMutated",
              "optional": false,
              "typeAnnotation": null,
              "start": 204,
              "end": 219
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 223,
                "end": 227
              },
              "start": 221,
              "end": 227
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 204,
            "end": 228
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "valueWillMutate",
              "optional": false,
              "typeAnnotation": null,
              "start": 233,
              "end": 248
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 252,
                "end": 256
              },
              "start": 250,
              "end": 256
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 233,
            "end": 257
          }
        ],
        "start": 155,
        "end": 259
      },
      "declare": false,
      "start": 89,
      "end": 259
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "KnockoutObservableArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 271,
        "end": 294
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
              "start": 295,
              "end": 296
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 295,
            "end": 296
          }
        ],
        "start": 294,
        "end": 297
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "KnockoutObservable",
            "optional": false,
            "typeAnnotation": null,
            "start": 306,
            "end": 324
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 325,
                    "end": 326
                  },
                  "typeArguments": null,
                  "start": 325,
                  "end": 326
                },
                "start": 325,
                "end": 328
              }
            ],
            "start": 324,
            "end": 329
          },
          "start": 306,
          "end": 329
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "indexOf",
              "optional": false,
              "typeAnnotation": null,
              "start": 336,
              "end": 343
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "searchElement",
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
                      "start": 359,
                      "end": 360
                    },
                    "typeArguments": null,
                    "start": 359,
                    "end": 360
                  },
                  "start": 357,
                  "end": 360
                },
                "start": 344,
                "end": 360
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "fromIndex",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 374,
                    "end": 380
                  },
                  "start": 372,
                  "end": 380
                },
                "start": 362,
                "end": 380
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 383,
                "end": 389
              },
              "start": 381,
              "end": 389
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 336,
            "end": 390
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "slice",
              "optional": false,
              "typeAnnotation": null,
              "start": 395,
              "end": 400
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "start",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 408,
                    "end": 414
                  },
                  "start": 406,
                  "end": 414
                },
                "start": 401,
                "end": 414
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "end",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 422,
                    "end": 428
                  },
                  "start": 420,
                  "end": 428
                },
                "start": 416,
                "end": 428
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 431,
                    "end": 432
                  },
                  "typeArguments": null,
                  "start": 431,
                  "end": 432
                },
                "start": 431,
                "end": 434
              },
              "start": 429,
              "end": 434
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 395,
            "end": 435
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "splice",
              "optional": false,
              "typeAnnotation": null,
              "start": 440,
              "end": 446
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "start",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 454,
                    "end": 460
                  },
                  "start": 452,
                  "end": 460
                },
                "start": 447,
                "end": 460
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "deleteCount",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 476,
                    "end": 482
                  },
                  "start": 474,
                  "end": 482
                },
                "start": 462,
                "end": 482
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "items",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 487,
                  "end": 492
                },
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
                        "start": 494,
                        "end": 495
                      },
                      "typeArguments": null,
                      "start": 494,
                      "end": 495
                    },
                    "start": 494,
                    "end": 497
                  },
                  "start": 492,
                  "end": 497
                },
                "value": null,
                "start": 484,
                "end": 497
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 500,
                    "end": 501
                  },
                  "typeArguments": null,
                  "start": 500,
                  "end": 501
                },
                "start": 500,
                "end": 503
              },
              "start": 498,
              "end": 503
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 440,
            "end": 504
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "pop",
              "optional": false,
              "typeAnnotation": null,
              "start": 509,
              "end": 512
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
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 516,
                  "end": 517
                },
                "typeArguments": null,
                "start": 516,
                "end": 517
              },
              "start": 514,
              "end": 517
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 509,
            "end": 518
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "push",
              "optional": false,
              "typeAnnotation": null,
              "start": 523,
              "end": 527
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
                  "name": "items",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 531,
                  "end": 536
                },
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
                        "start": 538,
                        "end": 539
                      },
                      "typeArguments": null,
                      "start": 538,
                      "end": 539
                    },
                    "start": 538,
                    "end": 541
                  },
                  "start": 536,
                  "end": 541
                },
                "value": null,
                "start": 528,
                "end": 541
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 544,
                "end": 548
              },
              "start": 542,
              "end": 548
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 523,
            "end": 549
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "shift",
              "optional": false,
              "typeAnnotation": null,
              "start": 554,
              "end": 559
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
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 563,
                  "end": 564
                },
                "typeArguments": null,
                "start": 563,
                "end": 564
              },
              "start": 561,
              "end": 564
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 554,
            "end": 565
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "unshift",
              "optional": false,
              "typeAnnotation": null,
              "start": 570,
              "end": 577
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
                  "name": "items",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 581,
                  "end": 586
                },
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
                        "start": 588,
                        "end": 589
                      },
                      "typeArguments": null,
                      "start": 588,
                      "end": 589
                    },
                    "start": 588,
                    "end": 591
                  },
                  "start": 586,
                  "end": 591
                },
                "value": null,
                "start": 578,
                "end": 591
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 594,
                "end": 600
              },
              "start": 592,
              "end": 600
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 570,
            "end": 601
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "reverse",
              "optional": false,
              "typeAnnotation": null,
              "start": 606,
              "end": 613
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 617,
                    "end": 618
                  },
                  "typeArguments": null,
                  "start": 617,
                  "end": 618
                },
                "start": 617,
                "end": 620
              },
              "start": 615,
              "end": 620
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 606,
            "end": 621
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sort",
              "optional": false,
              "typeAnnotation": null,
              "start": 626,
              "end": 630
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "compareFunction",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
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
                              "start": 653,
                              "end": 654
                            },
                            "typeArguments": null,
                            "start": 653,
                            "end": 654
                          },
                          "start": 651,
                          "end": 654
                        },
                        "start": 650,
                        "end": 654
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
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
                              "start": 659,
                              "end": 660
                            },
                            "typeArguments": null,
                            "start": 659,
                            "end": 660
                          },
                          "start": 657,
                          "end": 660
                        },
                        "start": 656,
                        "end": 660
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 665,
                        "end": 671
                      },
                      "start": 662,
                      "end": 671
                    },
                    "start": 649,
                    "end": 671
                  },
                  "start": 647,
                  "end": 671
                },
                "start": 631,
                "end": 671
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 674,
                "end": 678
              },
              "start": 672,
              "end": 678
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 626,
            "end": 679
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "replace",
              "optional": false,
              "typeAnnotation": null,
              "start": 684,
              "end": 691
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "oldItem",
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
                      "start": 701,
                      "end": 702
                    },
                    "typeArguments": null,
                    "start": 701,
                    "end": 702
                  },
                  "start": 699,
                  "end": 702
                },
                "start": 692,
                "end": 702
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "newItem",
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
                      "start": 713,
                      "end": 714
                    },
                    "typeArguments": null,
                    "start": 713,
                    "end": 714
                  },
                  "start": 711,
                  "end": 714
                },
                "start": 704,
                "end": 714
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 717,
                "end": 721
              },
              "start": 715,
              "end": 721
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 684,
            "end": 722
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "remove",
              "optional": false,
              "typeAnnotation": null,
              "start": 727,
              "end": 733
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
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
                      "start": 740,
                      "end": 741
                    },
                    "typeArguments": null,
                    "start": 740,
                    "end": 741
                  },
                  "start": 738,
                  "end": 741
                },
                "start": 734,
                "end": 741
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 744,
                    "end": 745
                  },
                  "typeArguments": null,
                  "start": 744,
                  "end": 745
                },
                "start": 744,
                "end": 747
              },
              "start": 742,
              "end": 747
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 727,
            "end": 748
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "removeAll",
              "optional": false,
              "typeAnnotation": null,
              "start": 753,
              "end": 762
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "items",
                "optional": true,
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
                        "start": 771,
                        "end": 772
                      },
                      "typeArguments": null,
                      "start": 771,
                      "end": 772
                    },
                    "start": 771,
                    "end": 774
                  },
                  "start": 769,
                  "end": 774
                },
                "start": 763,
                "end": 774
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 777,
                    "end": 778
                  },
                  "typeArguments": null,
                  "start": 777,
                  "end": 778
                },
                "start": 777,
                "end": 780
              },
              "start": 775,
              "end": 780
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 753,
            "end": 781
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "destroy",
              "optional": false,
              "typeAnnotation": null,
              "start": 786,
              "end": 793
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
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
                      "start": 800,
                      "end": 801
                    },
                    "typeArguments": null,
                    "start": 800,
                    "end": 801
                  },
                  "start": 798,
                  "end": 801
                },
                "start": 794,
                "end": 801
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 804,
                "end": 808
              },
              "start": 802,
              "end": 808
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 786,
            "end": 809
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "destroyAll",
              "optional": false,
              "typeAnnotation": null,
              "start": 814,
              "end": 824
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "items",
                "optional": true,
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
                        "start": 833,
                        "end": 834
                      },
                      "typeArguments": null,
                      "start": 833,
                      "end": 834
                    },
                    "start": 833,
                    "end": 836
                  },
                  "start": 831,
                  "end": 836
                },
                "start": 825,
                "end": 836
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 839,
                "end": 843
              },
              "start": 837,
              "end": 843
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 814,
            "end": 844
          }
        ],
        "start": 330,
        "end": 846
      },
      "declare": false,
      "start": 261,
      "end": 846
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "KnockoutObservableArrayStatic",
        "optional": false,
        "typeAnnotation": null,
        "start": 858,
        "end": 887
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
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 894,
              "end": 896
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "KnockoutObservableArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 898,
                  "end": 921
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 922,
                      "end": 925
                    }
                  ],
                  "start": 921,
                  "end": 926
                },
                "start": 898,
                "end": 926
              },
              "start": 896,
              "end": 926
            },
            "accessibility": null,
            "static": false,
            "start": 894,
            "end": 927
          },
          {
            "type": "TSCallSignatureDeclaration",
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
                    "start": 934,
                    "end": 935
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 934,
                  "end": 935
                }
              ],
              "start": 933,
              "end": 936
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": true,
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
                        "start": 945,
                        "end": 946
                      },
                      "typeArguments": null,
                      "start": 945,
                      "end": 946
                    },
                    "start": 945,
                    "end": 948
                  },
                  "start": 943,
                  "end": 948
                },
                "start": 937,
                "end": 948
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "KnockoutObservableArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 951,
                  "end": 974
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
                        "start": 975,
                        "end": 976
                      },
                      "typeArguments": null,
                      "start": 975,
                      "end": 976
                    }
                  ],
                  "start": 974,
                  "end": 977
                },
                "start": 951,
                "end": 977
              },
              "start": 949,
              "end": 977
            },
            "start": 933,
            "end": 978
          }
        ],
        "start": 888,
        "end": 980
      },
      "declare": false,
      "start": 848,
      "end": 980
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ko",
        "optional": false,
        "typeAnnotation": null,
        "start": 997,
        "end": 999
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "observableArray",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "KnockoutObservableArrayStatic",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1034,
                          "end": 1063
                        },
                        "typeArguments": null,
                        "start": 1034,
                        "end": 1063
                      },
                      "start": 1032,
                      "end": 1063
                    },
                    "start": 1017,
                    "end": 1063
                  },
                  "init": null,
                  "definite": false,
                  "start": 1017,
                  "end": 1063
                }
              ],
              "declare": false,
              "start": 1013,
              "end": 1064
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1006,
            "end": 1064
          }
        ],
        "start": 1000,
        "end": 1066
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 982,
      "end": 1066
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "Portal",
            "optional": false,
            "typeAnnotation": null,
            "start": 1075,
            "end": 1081
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Controls",
            "optional": false,
            "typeAnnotation": null,
            "start": 1082,
            "end": 1090
          },
          "start": 1075,
          "end": 1090
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Validators",
          "optional": false,
          "typeAnnotation": null,
          "start": 1091,
          "end": 1101
        },
        "start": 1075,
        "end": 1101
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Validator",
                "optional": false,
                "typeAnnotation": null,
                "start": 1122,
                "end": 1131
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TValue",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1132,
                      "end": 1138
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1132,
                    "end": 1138
                  }
                ],
                "start": 1131,
                "end": 1139
              },
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
                      "name": "_subscription",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1158,
                      "end": 1171
                    },
                    "typeAnnotation": null,
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 1150,
                    "end": 1172
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "message",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1188,
                      "end": 1195
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "KnockoutObservable",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1197,
                          "end": 1215
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "start": 1216,
                              "end": 1222
                            }
                          ],
                          "start": 1215,
                          "end": 1223
                        },
                        "start": 1197,
                        "end": 1223
                      },
                      "start": 1195,
                      "end": 1223
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 1181,
                    "end": 1224
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "validationState",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1240,
                      "end": 1255
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "KnockoutObservable",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1257,
                          "end": 1275
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 1276,
                              "end": 1282
                            }
                          ],
                          "start": 1275,
                          "end": 1283
                        },
                        "start": 1257,
                        "end": 1283
                      },
                      "start": 1255,
                      "end": 1283
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 1233,
                    "end": 1284
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "validate",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1300,
                      "end": 1308
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "KnockoutObservable",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1310,
                          "end": 1328
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TValue",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1329,
                                "end": 1335
                              },
                              "typeArguments": null,
                              "start": 1329,
                              "end": 1335
                            }
                          ],
                          "start": 1328,
                          "end": 1336
                        },
                        "start": 1310,
                        "end": 1336
                      },
                      "start": 1308,
                      "end": 1336
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 1293,
                    "end": 1337
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1346,
                      "end": 1357
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
                          "name": "message",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1368,
                              "end": 1374
                            },
                            "start": 1366,
                            "end": 1374
                          },
                          "start": 1358,
                          "end": 1374
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1376,
                        "end": 1379
                      },
                      "expression": false,
                      "start": 1357,
                      "end": 1379
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1346,
                    "end": 1379
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "destroy",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1395,
                      "end": 1402
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
                          "type": "TSVoidKeyword",
                          "start": 1406,
                          "end": 1410
                        },
                        "start": 1404,
                        "end": 1410
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1411,
                        "end": 1414
                      },
                      "expression": false,
                      "start": 1402,
                      "end": 1414
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1388,
                    "end": 1414
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_validate",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1430,
                      "end": 1439
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
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TValue",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1447,
                                "end": 1453
                              },
                              "typeArguments": null,
                              "start": 1447,
                              "end": 1453
                            },
                            "start": 1445,
                            "end": 1453
                          },
                          "start": 1440,
                          "end": 1453
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1456,
                          "end": 1462
                        },
                        "start": 1454,
                        "end": 1462
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 1471,
                              "end": 1472
                            },
                            "start": 1464,
                            "end": 1472
                          }
                        ],
                        "start": 1463,
                        "end": 1474
                      },
                      "expression": false,
                      "start": 1439,
                      "end": 1474
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1423,
                    "end": 1474
                  }
                ],
                "start": 1140,
                "end": 1480
              },
              "abstract": false,
              "declare": false,
              "start": 1116,
              "end": 1480
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1109,
            "end": 1480
          }
        ],
        "start": 1102,
        "end": 1482
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1068,
      "end": 1482
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "PortalFx",
              "optional": false,
              "typeAnnotation": null,
              "start": 1491,
              "end": 1499
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "ViewModels",
              "optional": false,
              "typeAnnotation": null,
              "start": 1500,
              "end": 1510
            },
            "start": 1491,
            "end": 1510
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Controls",
            "optional": false,
            "typeAnnotation": null,
            "start": 1511,
            "end": 1519
          },
          "start": 1491,
          "end": 1519
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Validators",
          "optional": false,
          "typeAnnotation": null,
          "start": 1520,
          "end": 1530
        },
        "start": 1491,
        "end": 1530
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Validator",
                "optional": false,
                "typeAnnotation": null,
                "start": 1551,
                "end": 1560
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TValue",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1561,
                      "end": 1567
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1561,
                    "end": 1567
                  }
                ],
                "start": 1560,
                "end": 1568
              },
              "superClass": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Portal",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1577,
                      "end": 1583
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Controls",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1584,
                      "end": 1592
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1577,
                    "end": 1592
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Validators",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1593,
                    "end": 1603
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1577,
                  "end": 1603
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Validator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1604,
                  "end": 1613
                },
                "optional": false,
                "computed": false,
                "start": 1577,
                "end": 1613
              },
              "superTypeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TValue",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1614,
                      "end": 1620
                    },
                    "typeArguments": null,
                    "start": 1614,
                    "end": 1620
                  }
                ],
                "start": 1613,
                "end": 1621
              },
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
                      "start": 1633,
                      "end": 1644
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
                          "name": "message",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1655,
                              "end": 1661
                            },
                            "start": 1653,
                            "end": 1661
                          },
                          "start": 1645,
                          "end": 1661
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Super",
                                "start": 1677,
                                "end": 1682
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "message",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1683,
                                  "end": 1690
                                }
                              ],
                              "optional": false,
                              "start": 1677,
                              "end": 1691
                            },
                            "directive": null,
                            "start": 1677,
                            "end": 1692
                          }
                        ],
                        "start": 1663,
                        "end": 1702
                      },
                      "expression": false,
                      "start": 1644,
                      "end": 1702
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1633,
                    "end": 1702
                  }
                ],
                "start": 1622,
                "end": 1708
              },
              "abstract": false,
              "declare": false,
              "start": 1545,
              "end": 1708
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1538,
            "end": 1708
          }
        ],
        "start": 1531,
        "end": 1711
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1484,
      "end": 1711
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Contract",
        "optional": false,
        "typeAnnotation": null,
        "start": 1723,
        "end": 1731
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 1732,
              "end": 1738
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1732,
            "end": 1738
          }
        ],
        "start": 1731,
        "end": 1739
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
              "name": "validators",
              "optional": false,
              "typeAnnotation": null,
              "start": 1747,
              "end": 1757
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "KnockoutObservableArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1759,
                  "end": 1782
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "PortalFx",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1783,
                                "end": 1791
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ViewModels",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1792,
                                "end": 1802
                              },
                              "start": 1783,
                              "end": 1802
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Controls",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1803,
                              "end": 1811
                            },
                            "start": 1783,
                            "end": 1811
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Validators",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1812,
                            "end": 1822
                          },
                          "start": 1783,
                          "end": 1822
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Validator",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1823,
                          "end": 1832
                        },
                        "start": 1783,
                        "end": 1832
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TValue",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1833,
                              "end": 1839
                            },
                            "typeArguments": null,
                            "start": 1833,
                            "end": 1839
                          }
                        ],
                        "start": 1832,
                        "end": 1840
                      },
                      "start": 1783,
                      "end": 1840
                    }
                  ],
                  "start": 1782,
                  "end": 1841
                },
                "start": 1759,
                "end": 1841
              },
              "start": 1757,
              "end": 1841
            },
            "accessibility": null,
            "static": false,
            "start": 1747,
            "end": 1842
          }
        ],
        "start": 1740,
        "end": 1844
      },
      "declare": false,
      "start": 1713,
      "end": 1844
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ViewModel",
        "optional": false,
        "typeAnnotation": null,
        "start": 1853,
        "end": 1862
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 1863,
              "end": 1869
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1863,
            "end": 1869
          }
        ],
        "start": 1862,
        "end": 1870
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Contract",
            "optional": false,
            "typeAnnotation": null,
            "start": 1882,
            "end": 1890
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TValue",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1891,
                  "end": 1897
                },
                "typeArguments": null,
                "start": 1891,
                "end": 1897
              }
            ],
            "start": 1890,
            "end": 1898
          },
          "start": 1882,
          "end": 1898
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "validators",
              "optional": false,
              "typeAnnotation": null,
              "start": 1913,
              "end": 1923
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "KnockoutObservableArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1925,
                  "end": 1948
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "PortalFx",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1949,
                                "end": 1957
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ViewModels",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1958,
                                "end": 1968
                              },
                              "start": 1949,
                              "end": 1968
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Controls",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1969,
                              "end": 1977
                            },
                            "start": 1949,
                            "end": 1977
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Validators",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1978,
                            "end": 1988
                          },
                          "start": 1949,
                          "end": 1988
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Validator",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1989,
                          "end": 1998
                        },
                        "start": 1949,
                        "end": 1998
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TValue",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1999,
                              "end": 2005
                            },
                            "typeArguments": null,
                            "start": 1999,
                            "end": 2005
                          }
                        ],
                        "start": 1998,
                        "end": 2006
                      },
                      "start": 1949,
                      "end": 2006
                    }
                  ],
                  "start": 1948,
                  "end": 2007
                },
                "start": 1925,
                "end": 2007
              },
              "start": 1923,
              "end": 2007
            },
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ko",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2010,
                  "end": 2012
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "observableArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2013,
                  "end": 2028
                },
                "optional": false,
                "computed": false,
                "start": 2010,
                "end": 2028
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "PortalFx",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2029,
                              "end": 2037
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ViewModels",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2038,
                              "end": 2048
                            },
                            "start": 2029,
                            "end": 2048
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Controls",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2049,
                            "end": 2057
                          },
                          "start": 2029,
                          "end": 2057
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Validators",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2058,
                          "end": 2068
                        },
                        "start": 2029,
                        "end": 2068
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Validator",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2069,
                        "end": 2078
                      },
                      "start": 2029,
                      "end": 2078
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TValue",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2079,
                            "end": 2085
                          },
                          "typeArguments": null,
                          "start": 2079,
                          "end": 2085
                        }
                      ],
                      "start": 2078,
                      "end": 2086
                    },
                    "start": 2029,
                    "end": 2086
                  }
                ],
                "start": 2028,
                "end": 2087
              },
              "arguments": [],
              "optional": false,
              "start": 2010,
              "end": 2089
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 1906,
            "end": 2090
          }
        ],
        "start": 1899,
        "end": 2092
      },
      "abstract": false,
      "declare": false,
      "start": 1847,
      "end": 2092
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2093
}
```
