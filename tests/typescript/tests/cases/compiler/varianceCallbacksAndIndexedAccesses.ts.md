__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1059,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 286,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 11,
        "decorators": [],
        "name": "Source",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 14,
        "end": 286,
        "members": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 20,
            "end": 169,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 20,
              "end": 52,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 21,
                  "end": 51,
                  "name": {
                    "type": "Identifier",
                    "start": 21,
                    "end": 22,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 31,
                    "end": 51,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 37,
                      "end": 51,
                      "typeName": {
                        "type": "Identifier",
                        "start": 37,
                        "end": 51,
                        "decorators": [],
                        "name": "WindowEventMap",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 53,
                "end": 60,
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 57,
                  "end": 60,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 59,
                    "end": 60,
                    "typeName": {
                      "type": "Identifier",
                      "start": 59,
                      "end": 60,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 62,
                "end": 116,
                "decorators": [],
                "name": "listener",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 70,
                  "end": 116,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 72,
                    "end": 116,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 73,
                        "end": 85,
                        "decorators": [],
                        "name": "this",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 77,
                          "end": 85,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 79,
                            "end": 85,
                            "typeName": {
                              "type": "Identifier",
                              "start": 79,
                              "end": 85,
                              "decorators": [],
                              "name": "Window",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 87,
                        "end": 108,
                        "decorators": [],
                        "name": "ev",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 89,
                          "end": 108,
                          "typeAnnotation": {
                            "type": "TSIndexedAccessType",
                            "start": 91,
                            "end": 108,
                            "objectType": {
                              "type": "TSTypeReference",
                              "start": 91,
                              "end": 105,
                              "typeName": {
                                "type": "Identifier",
                                "start": 91,
                                "end": 105,
                                "decorators": [],
                                "name": "WindowEventMap",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            "indexType": {
                              "type": "TSTypeReference",
                              "start": 106,
                              "end": 107,
                              "typeName": {
                                "type": "Identifier",
                                "start": 106,
                                "end": 107,
                                "decorators": [],
                                "name": "K",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 110,
                      "end": 116,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 113,
                        "end": 116
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 118,
                "end": 161,
                "decorators": [],
                "name": "options",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 126,
                  "end": 161,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 128,
                    "end": 161,
                    "types": [
                      {
                        "type": "TSBooleanKeyword",
                        "start": 128,
                        "end": 135
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 138,
                        "end": 161,
                        "typeName": {
                          "type": "Identifier",
                          "start": 138,
                          "end": 161,
                          "decorators": [],
                          "name": "AddEventListenerOptions",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 162,
              "end": 168,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 164,
                "end": 168
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 172,
            "end": 284,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 173,
                "end": 185,
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 177,
                  "end": 185,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 179,
                    "end": 185
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 187,
                "end": 231,
                "decorators": [],
                "name": "listener",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 195,
                  "end": 231,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 197,
                    "end": 231,
                    "typeName": {
                      "type": "Identifier",
                      "start": 197,
                      "end": 231,
                      "decorators": [],
                      "name": "EventListenerOrEventListenerObject",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 233,
                "end": 276,
                "decorators": [],
                "name": "options",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 241,
                  "end": 276,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 243,
                    "end": 276,
                    "types": [
                      {
                        "type": "TSBooleanKeyword",
                        "start": 243,
                        "end": 250
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 253,
                        "end": 276,
                        "typeName": {
                          "type": "Identifier",
                          "start": 253,
                          "end": 276,
                          "decorators": [],
                          "name": "AddEventListenerOptions",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 277,
              "end": 283,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 279,
                "end": 283
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 288,
      "end": 332,
      "id": {
        "type": "Identifier",
        "start": 298,
        "end": 305,
        "decorators": [],
        "name": "Action1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 305,
        "end": 308,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 306,
            "end": 307,
            "name": {
              "type": "Identifier",
              "start": 306,
              "end": 307,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 309,
        "end": 332,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 315,
            "end": 330,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 316,
                "end": 322,
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 319,
                  "end": 322,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 321,
                    "end": 322,
                    "typeName": {
                      "type": "Identifier",
                      "start": 321,
                      "end": 322,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 323,
              "end": 329,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 325,
                "end": 329
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 333,
      "end": 426,
      "id": {
        "type": "Identifier",
        "start": 343,
        "end": 359,
        "decorators": [],
        "name": "MessageEventLike",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 359,
        "end": 362,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 360,
            "end": 361,
            "name": {
              "type": "Identifier",
              "start": 360,
              "end": 361,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 363,
        "end": 426,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 369,
            "end": 391,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 369,
              "end": 375,
              "decorators": [],
              "name": "source",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 375,
              "end": 390,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 377,
                "end": 390,
                "typeName": {
                  "type": "Identifier",
                  "start": 377,
                  "end": 387,
                  "decorators": [],
                  "name": "WindowLike",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 387,
                  "end": 390,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 388,
                      "end": 389,
                      "typeName": {
                        "type": "Identifier",
                        "start": 388,
                        "end": 389,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 396,
            "end": 411,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 396,
              "end": 402,
              "decorators": [],
              "name": "origin",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 402,
              "end": 410,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 404,
                "end": 410
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 416,
            "end": 424,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 416,
              "end": 420,
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 420,
              "end": 423,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 422,
                "end": 423,
                "typeName": {
                  "type": "Identifier",
                  "start": 422,
                  "end": 423,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 427,
      "end": 510,
      "id": {
        "type": "Identifier",
        "start": 437,
        "end": 454,
        "decorators": [],
        "name": "PostMessageObject",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 454,
        "end": 457,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 455,
            "end": 456,
            "name": {
              "type": "Identifier",
              "start": 455,
              "end": 456,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 458,
        "end": 510,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 464,
            "end": 508,
            "key": {
              "type": "Identifier",
              "start": 464,
              "end": 475,
              "decorators": [],
              "name": "postMessage",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 476,
                "end": 486,
                "decorators": [],
                "name": "message",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 483,
                  "end": 486,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 485,
                    "end": 486,
                    "typeName": {
                      "type": "Identifier",
                      "start": 485,
                      "end": 486,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 488,
                "end": 500,
                "decorators": [],
                "name": "host",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 492,
                  "end": 500,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 494,
                    "end": 500
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 501,
              "end": 507,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 503,
                "end": 507
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 511,
      "end": 871,
      "id": {
        "type": "Identifier",
        "start": 521,
        "end": 531,
        "decorators": [],
        "name": "WindowLike",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 531,
        "end": 534,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 532,
            "end": 533,
            "name": {
              "type": "Identifier",
              "start": 532,
              "end": 533,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 543,
          "end": 563,
          "expression": {
            "type": "Identifier",
            "start": 543,
            "end": 560,
            "decorators": [],
            "name": "PostMessageObject",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 560,
            "end": 563,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 561,
                "end": 562,
                "typeName": {
                  "type": "Identifier",
                  "start": 561,
                  "end": 562,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 564,
        "end": 871,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 570,
            "end": 649,
            "key": {
              "type": "Identifier",
              "start": 570,
              "end": 586,
              "decorators": [],
              "name": "addEventListener",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 587,
                "end": 602,
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 591,
                  "end": 602,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 593,
                    "end": 602,
                    "literal": {
                      "type": "Literal",
                      "start": 593,
                      "end": 602,
                      "value": "message",
                      "raw": "\"message\""
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 604,
                "end": 641,
                "decorators": [],
                "name": "handler",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 611,
                  "end": 641,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 613,
                    "end": 641,
                    "typeName": {
                      "type": "Identifier",
                      "start": 613,
                      "end": 620,
                      "decorators": [],
                      "name": "Action1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 620,
                      "end": 641,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 621,
                          "end": 640,
                          "typeName": {
                            "type": "Identifier",
                            "start": 621,
                            "end": 637,
                            "decorators": [],
                            "name": "MessageEventLike",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 637,
                            "end": 640,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 638,
                                "end": 639,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 638,
                                  "end": 639,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 642,
              "end": 648,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 644,
                "end": 648
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 654,
            "end": 714,
            "key": {
              "type": "Identifier",
              "start": 654,
              "end": 670,
              "decorators": [],
              "name": "addEventListener",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 671,
                "end": 683,
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 675,
                  "end": 683,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 677,
                    "end": 683
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 685,
                "end": 706,
                "decorators": [],
                "name": "handler",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 692,
                  "end": 706,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 694,
                    "end": 706,
                    "typeName": {
                      "type": "Identifier",
                      "start": 694,
                      "end": 701,
                      "decorators": [],
                      "name": "Action1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 701,
                      "end": 706,
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 702,
                          "end": 705
                        }
                      ]
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 707,
              "end": 713,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 709,
                "end": 713
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 719,
            "end": 801,
            "key": {
              "type": "Identifier",
              "start": 719,
              "end": 738,
              "decorators": [],
              "name": "removeEventListener",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 739,
                "end": 754,
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 743,
                  "end": 754,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 745,
                    "end": 754,
                    "literal": {
                      "type": "Literal",
                      "start": 745,
                      "end": 754,
                      "value": "message",
                      "raw": "\"message\""
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 756,
                "end": 793,
                "decorators": [],
                "name": "handler",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 763,
                  "end": 793,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 765,
                    "end": 793,
                    "typeName": {
                      "type": "Identifier",
                      "start": 765,
                      "end": 772,
                      "decorators": [],
                      "name": "Action1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 772,
                      "end": 793,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 773,
                          "end": 792,
                          "typeName": {
                            "type": "Identifier",
                            "start": 773,
                            "end": 789,
                            "decorators": [],
                            "name": "MessageEventLike",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 789,
                            "end": 792,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 790,
                                "end": 791,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 790,
                                  "end": 791,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 794,
              "end": 800,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 796,
                "end": 800
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 806,
            "end": 869,
            "key": {
              "type": "Identifier",
              "start": 806,
              "end": 825,
              "decorators": [],
              "name": "removeEventListener",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 826,
                "end": 838,
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 830,
                  "end": 838,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 832,
                    "end": 838
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 840,
                "end": 861,
                "decorators": [],
                "name": "handler",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 847,
                  "end": 861,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 849,
                    "end": 861,
                    "typeName": {
                      "type": "Identifier",
                      "start": 849,
                      "end": 856,
                      "decorators": [],
                      "name": "Action1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 856,
                      "end": 861,
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 857,
                          "end": 860
                        }
                      ]
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 862,
              "end": 868,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 864,
                "end": 868
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 872,
      "end": 1009,
      "id": {
        "type": "Identifier",
        "start": 877,
        "end": 883,
        "decorators": [],
        "name": "Target",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 886,
        "end": 1008,
        "members": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 892,
            "end": 957,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 893,
                "end": 908,
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 897,
                  "end": 908,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 899,
                    "end": 908,
                    "literal": {
                      "type": "Literal",
                      "start": 899,
                      "end": 908,
                      "value": "message",
                      "raw": "\"message\""
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 910,
                "end": 949,
                "decorators": [],
                "name": "handler",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 917,
                  "end": 949,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 919,
                    "end": 949,
                    "typeName": {
                      "type": "Identifier",
                      "start": 919,
                      "end": 926,
                      "decorators": [],
                      "name": "Action1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 926,
                      "end": 949,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 927,
                          "end": 948,
                          "typeName": {
                            "type": "Identifier",
                            "start": 927,
                            "end": 943,
                            "decorators": [],
                            "name": "MessageEventLike",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 943,
                            "end": 948,
                            "params": [
                              {
                                "type": "TSAnyKeyword",
                                "start": 944,
                                "end": 947
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 950,
              "end": 956,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 952,
                "end": 956
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 962,
            "end": 1006,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 963,
                "end": 975,
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 967,
                  "end": 975,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 969,
                    "end": 975
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 977,
                "end": 998,
                "decorators": [],
                "name": "handler",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 984,
                  "end": 998,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 986,
                    "end": 998,
                    "typeName": {
                      "type": "Identifier",
                      "start": 986,
                      "end": 993,
                      "decorators": [],
                      "name": "Action1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 993,
                      "end": 998,
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 994,
                          "end": 997
                        }
                      ]
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 999,
              "end": 1005,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1001,
                "end": 1005
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1011,
      "end": 1059,
      "id": {
        "type": "Identifier",
        "start": 1020,
        "end": 1022,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1023,
          "end": 1032,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1024,
            "end": 1032,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1026,
              "end": 1032,
              "typeName": {
                "type": "Identifier",
                "start": 1026,
                "end": 1032,
                "decorators": [],
                "name": "Source",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1034,
          "end": 1043,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1035,
            "end": 1043,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1037,
              "end": 1043,
              "typeName": {
                "type": "Identifier",
                "start": 1037,
                "end": 1043,
                "decorators": [],
                "name": "Target",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1045,
        "end": 1059,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1051,
            "end": 1057,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1051,
              "end": 1056,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1051,
                "end": 1052,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1055,
                "end": 1056,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
