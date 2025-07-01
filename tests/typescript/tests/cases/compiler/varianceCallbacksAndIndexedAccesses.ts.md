__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Source",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 11
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
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
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 21,
                    "end": 22
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "WindowEventMap",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 37,
                        "end": 51
                      },
                      "typeArguments": null,
                      "start": 37,
                      "end": 51
                    },
                    "start": 31,
                    "end": 51
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 21,
                  "end": 51
                }
              ],
              "start": 20,
              "end": 52
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
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
                      "start": 59,
                      "end": 60
                    },
                    "typeArguments": null,
                    "start": 59,
                    "end": 60
                  },
                  "start": 57,
                  "end": 60
                },
                "start": 53,
                "end": 60
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "listener",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "this",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Window",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 79,
                              "end": 85
                            },
                            "typeArguments": null,
                            "start": 79,
                            "end": 85
                          },
                          "start": 77,
                          "end": 85
                        },
                        "start": 73,
                        "end": 85
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ev",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSIndexedAccessType",
                            "objectType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "WindowEventMap",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 91,
                                "end": 105
                              },
                              "typeArguments": null,
                              "start": 91,
                              "end": 105
                            },
                            "indexType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "K",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 106,
                                "end": 107
                              },
                              "typeArguments": null,
                              "start": 106,
                              "end": 107
                            },
                            "start": 91,
                            "end": 108
                          },
                          "start": 89,
                          "end": 108
                        },
                        "start": 87,
                        "end": 108
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 113,
                        "end": 116
                      },
                      "start": 110,
                      "end": 116
                    },
                    "start": 72,
                    "end": 116
                  },
                  "start": 70,
                  "end": 116
                },
                "start": 62,
                "end": 116
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "options",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSBooleanKeyword",
                        "start": 128,
                        "end": 135
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "AddEventListenerOptions",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 138,
                          "end": 161
                        },
                        "typeArguments": null,
                        "start": 138,
                        "end": 161
                      }
                    ],
                    "start": 128,
                    "end": 161
                  },
                  "start": 126,
                  "end": 161
                },
                "start": 118,
                "end": 161
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 164,
                "end": 168
              },
              "start": 162,
              "end": 168
            },
            "start": 20,
            "end": 169
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 179,
                    "end": 185
                  },
                  "start": 177,
                  "end": 185
                },
                "start": 173,
                "end": 185
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "listener",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "EventListenerOrEventListenerObject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 197,
                      "end": 231
                    },
                    "typeArguments": null,
                    "start": 197,
                    "end": 231
                  },
                  "start": 195,
                  "end": 231
                },
                "start": 187,
                "end": 231
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "options",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSBooleanKeyword",
                        "start": 243,
                        "end": 250
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "AddEventListenerOptions",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 253,
                          "end": 276
                        },
                        "typeArguments": null,
                        "start": 253,
                        "end": 276
                      }
                    ],
                    "start": 243,
                    "end": 276
                  },
                  "start": 241,
                  "end": 276
                },
                "start": 233,
                "end": 276
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 279,
                "end": 283
              },
              "start": 277,
              "end": 283
            },
            "start": 172,
            "end": 284
          }
        ],
        "start": 14,
        "end": 286
      },
      "declare": false,
      "start": 0,
      "end": 286
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Action1",
        "optional": false,
        "typeAnnotation": null,
        "start": 298,
        "end": 305
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
              "start": 306,
              "end": 307
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 306,
            "end": 307
          }
        ],
        "start": 305,
        "end": 308
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
                "name": "arg",
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
                      "start": 321,
                      "end": 322
                    },
                    "typeArguments": null,
                    "start": 321,
                    "end": 322
                  },
                  "start": 319,
                  "end": 322
                },
                "start": 316,
                "end": 322
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 325,
                "end": 329
              },
              "start": 323,
              "end": 329
            },
            "start": 315,
            "end": 330
          }
        ],
        "start": 309,
        "end": 332
      },
      "declare": false,
      "start": 288,
      "end": 332
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MessageEventLike",
        "optional": false,
        "typeAnnotation": null,
        "start": 343,
        "end": 359
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
              "start": 360,
              "end": 361
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 360,
            "end": 361
          }
        ],
        "start": 359,
        "end": 362
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
              "name": "source",
              "optional": false,
              "typeAnnotation": null,
              "start": 369,
              "end": 375
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "WindowLike",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 377,
                  "end": 387
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
                        "start": 388,
                        "end": 389
                      },
                      "typeArguments": null,
                      "start": 388,
                      "end": 389
                    }
                  ],
                  "start": 387,
                  "end": 390
                },
                "start": 377,
                "end": 390
              },
              "start": 375,
              "end": 390
            },
            "accessibility": null,
            "static": false,
            "start": 369,
            "end": 391
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "origin",
              "optional": false,
              "typeAnnotation": null,
              "start": 396,
              "end": 402
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 404,
                "end": 410
              },
              "start": 402,
              "end": 410
            },
            "accessibility": null,
            "static": false,
            "start": 396,
            "end": 411
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 416,
              "end": 420
            },
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
                  "start": 422,
                  "end": 423
                },
                "typeArguments": null,
                "start": 422,
                "end": 423
              },
              "start": 420,
              "end": 423
            },
            "accessibility": null,
            "static": false,
            "start": 416,
            "end": 424
          }
        ],
        "start": 363,
        "end": 426
      },
      "declare": false,
      "start": 333,
      "end": 426
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PostMessageObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 437,
        "end": 454
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
              "start": 455,
              "end": 456
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 455,
            "end": 456
          }
        ],
        "start": 454,
        "end": 457
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
              "name": "postMessage",
              "optional": false,
              "typeAnnotation": null,
              "start": 464,
              "end": 475
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "message",
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
                      "start": 485,
                      "end": 486
                    },
                    "typeArguments": null,
                    "start": 485,
                    "end": 486
                  },
                  "start": 483,
                  "end": 486
                },
                "start": 476,
                "end": 486
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "host",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 494,
                    "end": 500
                  },
                  "start": 492,
                  "end": 500
                },
                "start": 488,
                "end": 500
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 503,
                "end": 507
              },
              "start": 501,
              "end": 507
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 464,
            "end": 508
          }
        ],
        "start": 458,
        "end": 510
      },
      "declare": false,
      "start": 427,
      "end": 510
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WindowLike",
        "optional": false,
        "typeAnnotation": null,
        "start": 521,
        "end": 531
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
              "start": 532,
              "end": 533
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 532,
            "end": 533
          }
        ],
        "start": 531,
        "end": 534
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "PostMessageObject",
            "optional": false,
            "typeAnnotation": null,
            "start": 543,
            "end": 560
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
                  "start": 561,
                  "end": 562
                },
                "typeArguments": null,
                "start": 561,
                "end": 562
              }
            ],
            "start": 560,
            "end": 563
          },
          "start": 543,
          "end": 563
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
              "name": "addEventListener",
              "optional": false,
              "typeAnnotation": null,
              "start": 570,
              "end": 586
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "message",
                      "raw": "\"message\"",
                      "start": 593,
                      "end": 602
                    },
                    "start": 593,
                    "end": 602
                  },
                  "start": 591,
                  "end": 602
                },
                "start": 587,
                "end": 602
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "handler",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Action1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 613,
                      "end": 620
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MessageEventLike",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 621,
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
                          "start": 621,
                          "end": 640
                        }
                      ],
                      "start": 620,
                      "end": 641
                    },
                    "start": 613,
                    "end": 641
                  },
                  "start": 611,
                  "end": 641
                },
                "start": 604,
                "end": 641
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 644,
                "end": 648
              },
              "start": 642,
              "end": 648
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 570,
            "end": 649
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "addEventListener",
              "optional": false,
              "typeAnnotation": null,
              "start": 654,
              "end": 670
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 677,
                    "end": 683
                  },
                  "start": 675,
                  "end": 683
                },
                "start": 671,
                "end": 683
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "handler",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Action1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 694,
                      "end": 701
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 702,
                          "end": 705
                        }
                      ],
                      "start": 701,
                      "end": 706
                    },
                    "start": 694,
                    "end": 706
                  },
                  "start": 692,
                  "end": 706
                },
                "start": 685,
                "end": 706
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 709,
                "end": 713
              },
              "start": 707,
              "end": 713
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 654,
            "end": 714
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "removeEventListener",
              "optional": false,
              "typeAnnotation": null,
              "start": 719,
              "end": 738
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "message",
                      "raw": "\"message\"",
                      "start": 745,
                      "end": 754
                    },
                    "start": 745,
                    "end": 754
                  },
                  "start": 743,
                  "end": 754
                },
                "start": 739,
                "end": 754
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "handler",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Action1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 765,
                      "end": 772
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MessageEventLike",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 773,
                            "end": 789
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
                                  "start": 790,
                                  "end": 791
                                },
                                "typeArguments": null,
                                "start": 790,
                                "end": 791
                              }
                            ],
                            "start": 789,
                            "end": 792
                          },
                          "start": 773,
                          "end": 792
                        }
                      ],
                      "start": 772,
                      "end": 793
                    },
                    "start": 765,
                    "end": 793
                  },
                  "start": 763,
                  "end": 793
                },
                "start": 756,
                "end": 793
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 796,
                "end": 800
              },
              "start": 794,
              "end": 800
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 719,
            "end": 801
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "removeEventListener",
              "optional": false,
              "typeAnnotation": null,
              "start": 806,
              "end": 825
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 832,
                    "end": 838
                  },
                  "start": 830,
                  "end": 838
                },
                "start": 826,
                "end": 838
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "handler",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Action1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 849,
                      "end": 856
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 857,
                          "end": 860
                        }
                      ],
                      "start": 856,
                      "end": 861
                    },
                    "start": 849,
                    "end": 861
                  },
                  "start": 847,
                  "end": 861
                },
                "start": 840,
                "end": 861
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 864,
                "end": 868
              },
              "start": 862,
              "end": 868
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 806,
            "end": 869
          }
        ],
        "start": 564,
        "end": 871
      },
      "declare": false,
      "start": 511,
      "end": 871
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Target",
        "optional": false,
        "typeAnnotation": null,
        "start": 877,
        "end": 883
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "message",
                      "raw": "\"message\"",
                      "start": 899,
                      "end": 908
                    },
                    "start": 899,
                    "end": 908
                  },
                  "start": 897,
                  "end": 908
                },
                "start": 893,
                "end": 908
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "handler",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Action1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 919,
                      "end": 926
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MessageEventLike",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 927,
                            "end": 943
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSAnyKeyword",
                                "start": 944,
                                "end": 947
                              }
                            ],
                            "start": 943,
                            "end": 948
                          },
                          "start": 927,
                          "end": 948
                        }
                      ],
                      "start": 926,
                      "end": 949
                    },
                    "start": 919,
                    "end": 949
                  },
                  "start": 917,
                  "end": 949
                },
                "start": 910,
                "end": 949
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 952,
                "end": 956
              },
              "start": 950,
              "end": 956
            },
            "start": 892,
            "end": 957
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 969,
                    "end": 975
                  },
                  "start": 967,
                  "end": 975
                },
                "start": 963,
                "end": 975
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "handler",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Action1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 986,
                      "end": 993
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 994,
                          "end": 997
                        }
                      ],
                      "start": 993,
                      "end": 998
                    },
                    "start": 986,
                    "end": 998
                  },
                  "start": 984,
                  "end": 998
                },
                "start": 977,
                "end": 998
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1001,
                "end": 1005
              },
              "start": 999,
              "end": 1005
            },
            "start": 962,
            "end": 1006
          }
        ],
        "start": 886,
        "end": 1008
      },
      "declare": false,
      "start": 872,
      "end": 1009
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1020,
        "end": 1022
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Source",
                "optional": false,
                "typeAnnotation": null,
                "start": 1026,
                "end": 1032
              },
              "typeArguments": null,
              "start": 1026,
              "end": 1032
            },
            "start": 1024,
            "end": 1032
          },
          "start": 1023,
          "end": 1032
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Target",
                "optional": false,
                "typeAnnotation": null,
                "start": 1037,
                "end": 1043
              },
              "typeArguments": null,
              "start": 1037,
              "end": 1043
            },
            "start": 1035,
            "end": 1043
          },
          "start": 1034,
          "end": 1043
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 1051,
                "end": 1052
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 1055,
                "end": 1056
              },
              "start": 1051,
              "end": 1056
            },
            "directive": null,
            "start": 1051,
            "end": 1057
          }
        ],
        "start": 1045,
        "end": 1059
      },
      "expression": false,
      "start": 1011,
      "end": 1059
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1059
}
```
