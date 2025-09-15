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
        "start": 1000,
        "end": 1002
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
                          "start": 1037,
                          "end": 1066
                        },
                        "typeArguments": null,
                        "start": 1037,
                        "end": 1066
                      },
                      "start": 1035,
                      "end": 1066
                    },
                    "start": 1020,
                    "end": 1066
                  },
                  "init": null,
                  "definite": false,
                  "start": 1020,
                  "end": 1066
                }
              ],
              "declare": false,
              "start": 1016,
              "end": 1067
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1009,
            "end": 1067
          }
        ],
        "start": 1003,
        "end": 1069
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 982,
      "end": 1069
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
            "start": 1081,
            "end": 1087
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Controls",
            "optional": false,
            "typeAnnotation": null,
            "start": 1088,
            "end": 1096
          },
          "start": 1081,
          "end": 1096
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Validators",
          "optional": false,
          "typeAnnotation": null,
          "start": 1097,
          "end": 1107
        },
        "start": 1081,
        "end": 1107
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
                "start": 1128,
                "end": 1137
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
                      "start": 1138,
                      "end": 1144
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1138,
                    "end": 1144
                  }
                ],
                "start": 1137,
                "end": 1145
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
                      "start": 1164,
                      "end": 1177
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
                    "start": 1156,
                    "end": 1178
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
                      "start": 1194,
                      "end": 1201
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
                          "start": 1203,
                          "end": 1221
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "start": 1222,
                              "end": 1228
                            }
                          ],
                          "start": 1221,
                          "end": 1229
                        },
                        "start": 1203,
                        "end": 1229
                      },
                      "start": 1201,
                      "end": 1229
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
                    "start": 1187,
                    "end": 1230
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
                      "start": 1246,
                      "end": 1261
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
                          "start": 1263,
                          "end": 1281
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 1282,
                              "end": 1288
                            }
                          ],
                          "start": 1281,
                          "end": 1289
                        },
                        "start": 1263,
                        "end": 1289
                      },
                      "start": 1261,
                      "end": 1289
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
                    "start": 1239,
                    "end": 1290
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
                      "start": 1306,
                      "end": 1314
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
                          "start": 1316,
                          "end": 1334
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
                                "start": 1335,
                                "end": 1341
                              },
                              "typeArguments": null,
                              "start": 1335,
                              "end": 1341
                            }
                          ],
                          "start": 1334,
                          "end": 1342
                        },
                        "start": 1316,
                        "end": 1342
                      },
                      "start": 1314,
                      "end": 1342
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
                    "start": 1299,
                    "end": 1343
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
                      "start": 1352,
                      "end": 1363
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
                              "start": 1374,
                              "end": 1380
                            },
                            "start": 1372,
                            "end": 1380
                          },
                          "start": 1364,
                          "end": 1380
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1382,
                        "end": 1385
                      },
                      "expression": false,
                      "start": 1363,
                      "end": 1385
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1352,
                    "end": 1385
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
                      "start": 1401,
                      "end": 1408
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
                          "start": 1412,
                          "end": 1416
                        },
                        "start": 1410,
                        "end": 1416
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1417,
                        "end": 1420
                      },
                      "expression": false,
                      "start": 1408,
                      "end": 1420
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1394,
                    "end": 1420
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
                      "start": 1436,
                      "end": 1445
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
                                "start": 1453,
                                "end": 1459
                              },
                              "typeArguments": null,
                              "start": 1453,
                              "end": 1459
                            },
                            "start": 1451,
                            "end": 1459
                          },
                          "start": 1446,
                          "end": 1459
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1462,
                          "end": 1468
                        },
                        "start": 1460,
                        "end": 1468
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
                              "start": 1477,
                              "end": 1478
                            },
                            "start": 1470,
                            "end": 1478
                          }
                        ],
                        "start": 1469,
                        "end": 1480
                      },
                      "expression": false,
                      "start": 1445,
                      "end": 1480
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1429,
                    "end": 1480
                  }
                ],
                "start": 1146,
                "end": 1486
              },
              "abstract": false,
              "declare": false,
              "start": 1122,
              "end": 1486
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1115,
            "end": 1486
          }
        ],
        "start": 1108,
        "end": 1488
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1071,
      "end": 1488
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
              "start": 1500,
              "end": 1508
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "ViewModels",
              "optional": false,
              "typeAnnotation": null,
              "start": 1509,
              "end": 1519
            },
            "start": 1500,
            "end": 1519
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Controls",
            "optional": false,
            "typeAnnotation": null,
            "start": 1520,
            "end": 1528
          },
          "start": 1500,
          "end": 1528
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Validators",
          "optional": false,
          "typeAnnotation": null,
          "start": 1529,
          "end": 1539
        },
        "start": 1500,
        "end": 1539
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
                "start": 1560,
                "end": 1569
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
                      "start": 1570,
                      "end": 1576
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1570,
                    "end": 1576
                  }
                ],
                "start": 1569,
                "end": 1577
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
                      "start": 1586,
                      "end": 1592
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Controls",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1593,
                      "end": 1601
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1586,
                    "end": 1601
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Validators",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1602,
                    "end": 1612
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1586,
                  "end": 1612
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Validator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1613,
                  "end": 1622
                },
                "optional": false,
                "computed": false,
                "start": 1586,
                "end": 1622
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
                      "start": 1623,
                      "end": 1629
                    },
                    "typeArguments": null,
                    "start": 1623,
                    "end": 1629
                  }
                ],
                "start": 1622,
                "end": 1630
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
                      "start": 1642,
                      "end": 1653
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
                              "start": 1664,
                              "end": 1670
                            },
                            "start": 1662,
                            "end": 1670
                          },
                          "start": 1654,
                          "end": 1670
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
                                "start": 1686,
                                "end": 1691
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "message",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1692,
                                  "end": 1699
                                }
                              ],
                              "optional": false,
                              "start": 1686,
                              "end": 1700
                            },
                            "directive": null,
                            "start": 1686,
                            "end": 1701
                          }
                        ],
                        "start": 1672,
                        "end": 1711
                      },
                      "expression": false,
                      "start": 1653,
                      "end": 1711
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1642,
                    "end": 1711
                  }
                ],
                "start": 1631,
                "end": 1717
              },
              "abstract": false,
              "declare": false,
              "start": 1554,
              "end": 1717
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1547,
            "end": 1717
          }
        ],
        "start": 1540,
        "end": 1720
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1490,
      "end": 1720
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Contract",
        "optional": false,
        "typeAnnotation": null,
        "start": 1732,
        "end": 1740
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
              "start": 1741,
              "end": 1747
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1741,
            "end": 1747
          }
        ],
        "start": 1740,
        "end": 1748
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
              "start": 1756,
              "end": 1766
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
                  "start": 1768,
                  "end": 1791
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
                                "start": 1792,
                                "end": 1800
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ViewModels",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1801,
                                "end": 1811
                              },
                              "start": 1792,
                              "end": 1811
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Controls",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1812,
                              "end": 1820
                            },
                            "start": 1792,
                            "end": 1820
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Validators",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1821,
                            "end": 1831
                          },
                          "start": 1792,
                          "end": 1831
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Validator",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1832,
                          "end": 1841
                        },
                        "start": 1792,
                        "end": 1841
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
                              "start": 1842,
                              "end": 1848
                            },
                            "typeArguments": null,
                            "start": 1842,
                            "end": 1848
                          }
                        ],
                        "start": 1841,
                        "end": 1849
                      },
                      "start": 1792,
                      "end": 1849
                    }
                  ],
                  "start": 1791,
                  "end": 1850
                },
                "start": 1768,
                "end": 1850
              },
              "start": 1766,
              "end": 1850
            },
            "accessibility": null,
            "static": false,
            "start": 1756,
            "end": 1851
          }
        ],
        "start": 1749,
        "end": 1853
      },
      "declare": false,
      "start": 1722,
      "end": 1853
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
        "start": 1862,
        "end": 1871
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
              "start": 1872,
              "end": 1878
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1872,
            "end": 1878
          }
        ],
        "start": 1871,
        "end": 1879
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
            "start": 1891,
            "end": 1899
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
                  "start": 1900,
                  "end": 1906
                },
                "typeArguments": null,
                "start": 1900,
                "end": 1906
              }
            ],
            "start": 1899,
            "end": 1907
          },
          "start": 1891,
          "end": 1907
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
              "start": 1922,
              "end": 1932
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
                  "start": 1934,
                  "end": 1957
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
                                "start": 1958,
                                "end": 1966
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ViewModels",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1967,
                                "end": 1977
                              },
                              "start": 1958,
                              "end": 1977
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Controls",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1978,
                              "end": 1986
                            },
                            "start": 1958,
                            "end": 1986
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Validators",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1987,
                            "end": 1997
                          },
                          "start": 1958,
                          "end": 1997
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Validator",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1998,
                          "end": 2007
                        },
                        "start": 1958,
                        "end": 2007
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
                              "start": 2008,
                              "end": 2014
                            },
                            "typeArguments": null,
                            "start": 2008,
                            "end": 2014
                          }
                        ],
                        "start": 2007,
                        "end": 2015
                      },
                      "start": 1958,
                      "end": 2015
                    }
                  ],
                  "start": 1957,
                  "end": 2016
                },
                "start": 1934,
                "end": 2016
              },
              "start": 1932,
              "end": 2016
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
                  "start": 2019,
                  "end": 2021
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "observableArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2022,
                  "end": 2037
                },
                "optional": false,
                "computed": false,
                "start": 2019,
                "end": 2037
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
                              "start": 2038,
                              "end": 2046
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ViewModels",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2047,
                              "end": 2057
                            },
                            "start": 2038,
                            "end": 2057
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Controls",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2058,
                            "end": 2066
                          },
                          "start": 2038,
                          "end": 2066
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Validators",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2067,
                          "end": 2077
                        },
                        "start": 2038,
                        "end": 2077
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Validator",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2078,
                        "end": 2087
                      },
                      "start": 2038,
                      "end": 2087
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
                            "start": 2088,
                            "end": 2094
                          },
                          "typeArguments": null,
                          "start": 2088,
                          "end": 2094
                        }
                      ],
                      "start": 2087,
                      "end": 2095
                    },
                    "start": 2038,
                    "end": 2095
                  }
                ],
                "start": 2037,
                "end": 2096
              },
              "arguments": [],
              "optional": false,
              "start": 2019,
              "end": 2098
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 1915,
            "end": 2099
          }
        ],
        "start": 1908,
        "end": 2101
      },
      "abstract": false,
      "declare": false,
      "start": 1856,
      "end": 2101
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2102
}
```
