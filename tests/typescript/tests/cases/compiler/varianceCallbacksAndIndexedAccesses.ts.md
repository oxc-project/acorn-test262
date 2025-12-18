__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4,
    "range": [
      0,
      4
    ]
  },
  {
    "type": "Identifier",
    "value": "Source",
    "start": 5,
    "end": 11,
    "range": [
      5,
      11
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 23,
    "end": 30,
    "range": [
      23,
      30
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 31,
    "end": 36,
    "range": [
      31,
      36
    ]
  },
  {
    "type": "Identifier",
    "value": "WindowEventMap",
    "start": 37,
    "end": 51,
    "range": [
      37,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 53,
    "end": 57,
    "range": [
      53,
      57
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Identifier",
    "value": "listener",
    "start": 62,
    "end": 70,
    "range": [
      62,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 73,
    "end": 77,
    "range": [
      73,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Identifier",
    "value": "Window",
    "start": 79,
    "end": 85,
    "range": [
      79,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Identifier",
    "value": "ev",
    "start": 87,
    "end": 89,
    "range": [
      87,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Identifier",
    "value": "WindowEventMap",
    "start": 91,
    "end": 105,
    "range": [
      91,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 110,
    "end": 112,
    "range": [
      110,
      112
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 113,
    "end": 116,
    "range": [
      113,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 118,
    "end": 125,
    "range": [
      118,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 128,
    "end": 135,
    "range": [
      128,
      135
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Identifier",
    "value": "AddEventListenerOptions",
    "start": 138,
    "end": 161,
    "range": [
      138,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 164,
    "end": 168,
    "range": [
      164,
      168
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 173,
    "end": 177,
    "range": [
      173,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 179,
    "end": 185,
    "range": [
      179,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Identifier",
    "value": "listener",
    "start": 187,
    "end": 195,
    "range": [
      187,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Identifier",
    "value": "EventListenerOrEventListenerObject",
    "start": 197,
    "end": 231,
    "range": [
      197,
      231
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 233,
    "end": 240,
    "range": [
      233,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 243,
    "end": 250,
    "range": [
      243,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Identifier",
    "value": "AddEventListenerOptions",
    "start": 253,
    "end": 276,
    "range": [
      253,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 277,
    "end": 278,
    "range": [
      277,
      278
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 279,
    "end": 283,
    "range": [
      279,
      283
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 288,
    "end": 297,
    "range": [
      288,
      297
    ]
  },
  {
    "type": "Identifier",
    "value": "Action1",
    "start": 298,
    "end": 305,
    "range": [
      298,
      305
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 315,
    "end": 316,
    "range": [
      315,
      316
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 316,
    "end": 319,
    "range": [
      316,
      319
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 321,
    "end": 322,
    "range": [
      321,
      322
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 323,
    "end": 324,
    "range": [
      323,
      324
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 325,
    "end": 329,
    "range": [
      325,
      329
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 329,
    "end": 330,
    "range": [
      329,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 333,
    "end": 342,
    "range": [
      333,
      342
    ]
  },
  {
    "type": "Identifier",
    "value": "MessageEventLike",
    "start": 343,
    "end": 359,
    "range": [
      343,
      359
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 360,
    "end": 361,
    "range": [
      360,
      361
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Identifier",
    "value": "source",
    "start": 369,
    "end": 375,
    "range": [
      369,
      375
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  },
  {
    "type": "Identifier",
    "value": "WindowLike",
    "start": 377,
    "end": 387,
    "range": [
      377,
      387
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 387,
    "end": 388,
    "range": [
      387,
      388
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 388,
    "end": 389,
    "range": [
      388,
      389
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 389,
    "end": 390,
    "range": [
      389,
      390
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 390,
    "end": 391,
    "range": [
      390,
      391
    ]
  },
  {
    "type": "Identifier",
    "value": "origin",
    "start": 396,
    "end": 402,
    "range": [
      396,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 402,
    "end": 403,
    "range": [
      402,
      403
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 404,
    "end": 410,
    "range": [
      404,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 416,
    "end": 420,
    "range": [
      416,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 425,
    "end": 426,
    "range": [
      425,
      426
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 427,
    "end": 436,
    "range": [
      427,
      436
    ]
  },
  {
    "type": "Identifier",
    "value": "PostMessageObject",
    "start": 437,
    "end": 454,
    "range": [
      437,
      454
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 454,
    "end": 455,
    "range": [
      454,
      455
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 455,
    "end": 456,
    "range": [
      455,
      456
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 456,
    "end": 457,
    "range": [
      456,
      457
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Identifier",
    "value": "postMessage",
    "start": 464,
    "end": 475,
    "range": [
      464,
      475
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 475,
    "end": 476,
    "range": [
      475,
      476
    ]
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 476,
    "end": 483,
    "range": [
      476,
      483
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 485,
    "end": 486,
    "range": [
      485,
      486
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 486,
    "end": 487,
    "range": [
      486,
      487
    ]
  },
  {
    "type": "Identifier",
    "value": "host",
    "start": 488,
    "end": 492,
    "range": [
      488,
      492
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 494,
    "end": 500,
    "range": [
      494,
      500
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 500,
    "end": 501,
    "range": [
      500,
      501
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 501,
    "end": 502,
    "range": [
      501,
      502
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 503,
    "end": 507,
    "range": [
      503,
      507
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 509,
    "end": 510,
    "range": [
      509,
      510
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 511,
    "end": 520,
    "range": [
      511,
      520
    ]
  },
  {
    "type": "Identifier",
    "value": "WindowLike",
    "start": 521,
    "end": 531,
    "range": [
      521,
      531
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 531,
    "end": 532,
    "range": [
      531,
      532
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 532,
    "end": 533,
    "range": [
      532,
      533
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 533,
    "end": 534,
    "range": [
      533,
      534
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 535,
    "end": 542,
    "range": [
      535,
      542
    ]
  },
  {
    "type": "Identifier",
    "value": "PostMessageObject",
    "start": 543,
    "end": 560,
    "range": [
      543,
      560
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 560,
    "end": 561,
    "range": [
      560,
      561
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 561,
    "end": 562,
    "range": [
      561,
      562
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 562,
    "end": 563,
    "range": [
      562,
      563
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 564,
    "end": 565,
    "range": [
      564,
      565
    ]
  },
  {
    "type": "Identifier",
    "value": "addEventListener",
    "start": 570,
    "end": 586,
    "range": [
      570,
      586
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 586,
    "end": 587,
    "range": [
      586,
      587
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 587,
    "end": 591,
    "range": [
      587,
      591
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 591,
    "end": 592,
    "range": [
      591,
      592
    ]
  },
  {
    "type": "String",
    "value": "\"message\"",
    "start": 593,
    "end": 602,
    "range": [
      593,
      602
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 602,
    "end": 603,
    "range": [
      602,
      603
    ]
  },
  {
    "type": "Identifier",
    "value": "handler",
    "start": 604,
    "end": 611,
    "range": [
      604,
      611
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 611,
    "end": 612,
    "range": [
      611,
      612
    ]
  },
  {
    "type": "Identifier",
    "value": "Action1",
    "start": 613,
    "end": 620,
    "range": [
      613,
      620
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 620,
    "end": 621,
    "range": [
      620,
      621
    ]
  },
  {
    "type": "Identifier",
    "value": "MessageEventLike",
    "start": 621,
    "end": 637,
    "range": [
      621,
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
    "value": ">",
    "start": 640,
    "end": 641,
    "range": [
      640,
      641
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 641,
    "end": 642,
    "range": [
      641,
      642
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 642,
    "end": 643,
    "range": [
      642,
      643
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 644,
    "end": 648,
    "range": [
      644,
      648
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 648,
    "end": 649,
    "range": [
      648,
      649
    ]
  },
  {
    "type": "Identifier",
    "value": "addEventListener",
    "start": 654,
    "end": 670,
    "range": [
      654,
      670
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 670,
    "end": 671,
    "range": [
      670,
      671
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 671,
    "end": 675,
    "range": [
      671,
      675
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 675,
    "end": 676,
    "range": [
      675,
      676
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 677,
    "end": 683,
    "range": [
      677,
      683
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 683,
    "end": 684,
    "range": [
      683,
      684
    ]
  },
  {
    "type": "Identifier",
    "value": "handler",
    "start": 685,
    "end": 692,
    "range": [
      685,
      692
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 692,
    "end": 693,
    "range": [
      692,
      693
    ]
  },
  {
    "type": "Identifier",
    "value": "Action1",
    "start": 694,
    "end": 701,
    "range": [
      694,
      701
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 701,
    "end": 702,
    "range": [
      701,
      702
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 702,
    "end": 705,
    "range": [
      702,
      705
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 706,
    "end": 707,
    "range": [
      706,
      707
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 707,
    "end": 708,
    "range": [
      707,
      708
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 709,
    "end": 713,
    "range": [
      709,
      713
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 713,
    "end": 714,
    "range": [
      713,
      714
    ]
  },
  {
    "type": "Identifier",
    "value": "removeEventListener",
    "start": 719,
    "end": 738,
    "range": [
      719,
      738
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 738,
    "end": 739,
    "range": [
      738,
      739
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 739,
    "end": 743,
    "range": [
      739,
      743
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 743,
    "end": 744,
    "range": [
      743,
      744
    ]
  },
  {
    "type": "String",
    "value": "\"message\"",
    "start": 745,
    "end": 754,
    "range": [
      745,
      754
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 754,
    "end": 755,
    "range": [
      754,
      755
    ]
  },
  {
    "type": "Identifier",
    "value": "handler",
    "start": 756,
    "end": 763,
    "range": [
      756,
      763
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 763,
    "end": 764,
    "range": [
      763,
      764
    ]
  },
  {
    "type": "Identifier",
    "value": "Action1",
    "start": 765,
    "end": 772,
    "range": [
      765,
      772
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 772,
    "end": 773,
    "range": [
      772,
      773
    ]
  },
  {
    "type": "Identifier",
    "value": "MessageEventLike",
    "start": 773,
    "end": 789,
    "range": [
      773,
      789
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 789,
    "end": 790,
    "range": [
      789,
      790
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 790,
    "end": 791,
    "range": [
      790,
      791
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 791,
    "end": 792,
    "range": [
      791,
      792
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 792,
    "end": 793,
    "range": [
      792,
      793
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 793,
    "end": 794,
    "range": [
      793,
      794
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 794,
    "end": 795,
    "range": [
      794,
      795
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 796,
    "end": 800,
    "range": [
      796,
      800
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 800,
    "end": 801,
    "range": [
      800,
      801
    ]
  },
  {
    "type": "Identifier",
    "value": "removeEventListener",
    "start": 806,
    "end": 825,
    "range": [
      806,
      825
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 825,
    "end": 826,
    "range": [
      825,
      826
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 826,
    "end": 830,
    "range": [
      826,
      830
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 830,
    "end": 831,
    "range": [
      830,
      831
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 832,
    "end": 838,
    "range": [
      832,
      838
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 838,
    "end": 839,
    "range": [
      838,
      839
    ]
  },
  {
    "type": "Identifier",
    "value": "handler",
    "start": 840,
    "end": 847,
    "range": [
      840,
      847
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 847,
    "end": 848,
    "range": [
      847,
      848
    ]
  },
  {
    "type": "Identifier",
    "value": "Action1",
    "start": 849,
    "end": 856,
    "range": [
      849,
      856
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 856,
    "end": 857,
    "range": [
      856,
      857
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 857,
    "end": 860,
    "range": [
      857,
      860
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 860,
    "end": 861,
    "range": [
      860,
      861
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 861,
    "end": 862,
    "range": [
      861,
      862
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 862,
    "end": 863,
    "range": [
      862,
      863
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 864,
    "end": 868,
    "range": [
      864,
      868
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 868,
    "end": 869,
    "range": [
      868,
      869
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 870,
    "end": 871,
    "range": [
      870,
      871
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 872,
    "end": 876,
    "range": [
      872,
      876
    ]
  },
  {
    "type": "Identifier",
    "value": "Target",
    "start": 877,
    "end": 883,
    "range": [
      877,
      883
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 884,
    "end": 885,
    "range": [
      884,
      885
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 886,
    "end": 887,
    "range": [
      886,
      887
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 892,
    "end": 893,
    "range": [
      892,
      893
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 893,
    "end": 897,
    "range": [
      893,
      897
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 897,
    "end": 898,
    "range": [
      897,
      898
    ]
  },
  {
    "type": "String",
    "value": "\"message\"",
    "start": 899,
    "end": 908,
    "range": [
      899,
      908
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 908,
    "end": 909,
    "range": [
      908,
      909
    ]
  },
  {
    "type": "Identifier",
    "value": "handler",
    "start": 910,
    "end": 917,
    "range": [
      910,
      917
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 917,
    "end": 918,
    "range": [
      917,
      918
    ]
  },
  {
    "type": "Identifier",
    "value": "Action1",
    "start": 919,
    "end": 926,
    "range": [
      919,
      926
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 926,
    "end": 927,
    "range": [
      926,
      927
    ]
  },
  {
    "type": "Identifier",
    "value": "MessageEventLike",
    "start": 927,
    "end": 943,
    "range": [
      927,
      943
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 943,
    "end": 944,
    "range": [
      943,
      944
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 944,
    "end": 947,
    "range": [
      944,
      947
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 947,
    "end": 948,
    "range": [
      947,
      948
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 948,
    "end": 949,
    "range": [
      948,
      949
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 949,
    "end": 950,
    "range": [
      949,
      950
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 950,
    "end": 951,
    "range": [
      950,
      951
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 952,
    "end": 956,
    "range": [
      952,
      956
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 956,
    "end": 957,
    "range": [
      956,
      957
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 962,
    "end": 963,
    "range": [
      962,
      963
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 963,
    "end": 967,
    "range": [
      963,
      967
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 967,
    "end": 968,
    "range": [
      967,
      968
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 969,
    "end": 975,
    "range": [
      969,
      975
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 975,
    "end": 976,
    "range": [
      975,
      976
    ]
  },
  {
    "type": "Identifier",
    "value": "handler",
    "start": 977,
    "end": 984,
    "range": [
      977,
      984
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 984,
    "end": 985,
    "range": [
      984,
      985
    ]
  },
  {
    "type": "Identifier",
    "value": "Action1",
    "start": 986,
    "end": 993,
    "range": [
      986,
      993
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 993,
    "end": 994,
    "range": [
      993,
      994
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 994,
    "end": 997,
    "range": [
      994,
      997
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 997,
    "end": 998,
    "range": [
      997,
      998
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 998,
    "end": 999,
    "range": [
      998,
      999
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 999,
    "end": 1000,
    "range": [
      999,
      1000
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1001,
    "end": 1005,
    "range": [
      1001,
      1005
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1005,
    "end": 1006,
    "range": [
      1005,
      1006
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1007,
    "end": 1008,
    "range": [
      1007,
      1008
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1008,
    "end": 1009,
    "range": [
      1008,
      1009
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1011,
    "end": 1019,
    "range": [
      1011,
      1019
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1020,
    "end": 1022,
    "range": [
      1020,
      1022
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1022,
    "end": 1023,
    "range": [
      1022,
      1023
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1023,
    "end": 1024,
    "range": [
      1023,
      1024
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1024,
    "end": 1025,
    "range": [
      1024,
      1025
    ]
  },
  {
    "type": "Identifier",
    "value": "Source",
    "start": 1026,
    "end": 1032,
    "range": [
      1026,
      1032
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1032,
    "end": 1033,
    "range": [
      1032,
      1033
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1034,
    "end": 1035,
    "range": [
      1034,
      1035
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1035,
    "end": 1036,
    "range": [
      1035,
      1036
    ]
  },
  {
    "type": "Identifier",
    "value": "Target",
    "start": 1037,
    "end": 1043,
    "range": [
      1037,
      1043
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1043,
    "end": 1044,
    "range": [
      1043,
      1044
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1045,
    "end": 1046,
    "range": [
      1045,
      1046
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1051,
    "end": 1052,
    "range": [
      1051,
      1052
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1053,
    "end": 1054,
    "range": [
      1053,
      1054
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1055,
    "end": 1056,
    "range": [
      1055,
      1056
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1056,
    "end": 1057,
    "range": [
      1056,
      1057
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1058,
    "end": 1059,
    "range": [
      1058,
      1059
    ]
  }
]
```
