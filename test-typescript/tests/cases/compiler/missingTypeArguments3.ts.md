__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1408,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 1408,
      "body": {
        "type": "TSModuleBlock",
        "start": 20,
        "end": 1408,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 27,
            "end": 451,
            "body": {
              "type": "TSInterfaceBody",
              "start": 51,
              "end": 451,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 61,
                  "end": 123,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 61,
                    "end": 78,
                    "decorators": [],
                    "name": "OrderByDescending",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 79,
                      "end": 99,
                      "decorators": [],
                      "name": "keySelector",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 91,
                        "end": 99,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 93,
                          "end": 99
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 100,
                    "end": 122,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 102,
                      "end": 122,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 119,
                        "end": 122,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 120,
                            "end": 121,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 120,
                              "end": 121,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 102,
                        "end": 119,
                        "decorators": [],
                        "name": "OrderedEnumerable",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": null
                },
                {
                  "type": "TSMethodSignature",
                  "start": 132,
                  "end": 212,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 132,
                    "end": 139,
                    "decorators": [],
                    "name": "GroupBy",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 146,
                      "end": 179,
                      "decorators": [],
                      "name": "keySelector",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 157,
                        "end": 179,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 159,
                          "end": 179,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 160,
                              "end": 170,
                              "decorators": [],
                              "name": "element",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 167,
                                "end": 170,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 169,
                                  "end": 170,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 169,
                                    "end": 170,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 172,
                            "end": 179,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 175,
                              "end": 179,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 175,
                                "end": 179,
                                "decorators": [],
                                "name": "TKey",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          "typeParameters": null
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 180,
                    "end": 211,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 182,
                      "end": 211,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 192,
                        "end": 211,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 193,
                            "end": 210,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 201,
                              "end": 210,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 202,
                                  "end": 206,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 202,
                                    "end": 206,
                                    "decorators": [],
                                    "name": "TKey",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 208,
                                  "end": 209,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 208,
                                    "end": 209,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 193,
                              "end": 201,
                              "decorators": [],
                              "name": "Grouping",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 182,
                        "end": 192,
                        "decorators": [],
                        "name": "Enumerable",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 139,
                    "end": 145,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 140,
                        "end": 144,
                        "const": false,
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 140,
                          "end": 144,
                          "decorators": [],
                          "name": "TKey",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
                      }
                    ]
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "start": 221,
                  "end": 361,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 221,
                    "end": 228,
                    "decorators": [],
                    "name": "GroupBy",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 245,
                      "end": 278,
                      "decorators": [],
                      "name": "keySelector",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 256,
                        "end": 278,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 258,
                          "end": 278,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 259,
                              "end": 269,
                              "decorators": [],
                              "name": "element",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 266,
                                "end": 269,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 268,
                                  "end": 269,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 268,
                                    "end": 269,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 271,
                            "end": 278,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 274,
                              "end": 278,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 274,
                                "end": 278,
                                "decorators": [],
                                "name": "TKey",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          "typeParameters": null
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 280,
                      "end": 321,
                      "decorators": [],
                      "name": "elementSelector",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 295,
                        "end": 321,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 297,
                          "end": 321,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 298,
                              "end": 308,
                              "decorators": [],
                              "name": "element",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 305,
                                "end": 308,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 307,
                                  "end": 308,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 307,
                                    "end": 308,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 310,
                            "end": 321,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 313,
                              "end": 321,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 313,
                                "end": 321,
                                "decorators": [],
                                "name": "TElement",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          "typeParameters": null
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 322,
                    "end": 360,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 324,
                      "end": 360,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 334,
                        "end": 360,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 335,
                            "end": 359,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 343,
                              "end": 359,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 344,
                                  "end": 348,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 344,
                                    "end": 348,
                                    "decorators": [],
                                    "name": "TKey",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 350,
                                  "end": 358,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 350,
                                    "end": 358,
                                    "decorators": [],
                                    "name": "TElement",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 335,
                              "end": 343,
                              "decorators": [],
                              "name": "Grouping",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 324,
                        "end": 334,
                        "decorators": [],
                        "name": "Enumerable",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 228,
                    "end": 244,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 229,
                        "end": 233,
                        "const": false,
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 229,
                          "end": 233,
                          "decorators": [],
                          "name": "TKey",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
                      },
                      {
                        "type": "TSTypeParameter",
                        "start": 235,
                        "end": 243,
                        "const": false,
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 235,
                          "end": 243,
                          "decorators": [],
                          "name": "TElement",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
                      }
                    ]
                  }
                },
                {
                  "type": "TSMethodSignature",
                  "start": 370,
                  "end": 445,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 370,
                    "end": 382,
                    "decorators": [],
                    "name": "ToDictionary",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 389,
                      "end": 422,
                      "decorators": [],
                      "name": "keySelector",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 400,
                        "end": 422,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 402,
                          "end": 422,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 403,
                              "end": 413,
                              "decorators": [],
                              "name": "element",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 410,
                                "end": 413,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 412,
                                  "end": 413,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 412,
                                    "end": 413,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 415,
                            "end": 422,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 418,
                              "end": 422,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 418,
                                "end": 422,
                                "decorators": [],
                                "name": "TKey",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          "typeParameters": null
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 423,
                    "end": 444,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 425,
                      "end": 444,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 435,
                        "end": 444,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 436,
                            "end": 440,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 436,
                              "end": 440,
                              "decorators": [],
                              "name": "TKey",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 442,
                            "end": 443,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 442,
                              "end": 443,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 425,
                        "end": 435,
                        "decorators": [],
                        "name": "Dictionary",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 382,
                    "end": 388,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 383,
                        "end": 387,
                        "const": false,
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 383,
                          "end": 387,
                          "decorators": [],
                          "name": "TKey",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
                      }
                    ]
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 37,
              "end": 47,
              "decorators": [],
              "name": "Enumerable",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 47,
              "end": 50,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 48,
                  "end": 49,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 48,
                    "end": 49,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 457,
            "end": 666,
            "body": {
              "type": "TSInterfaceBody",
              "start": 510,
              "end": 666,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 520,
                  "end": 598,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 520,
                    "end": 526,
                    "decorators": [],
                    "name": "ThenBy",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 537,
                      "end": 574,
                      "decorators": [],
                      "name": "keySelector",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 548,
                        "end": 574,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 550,
                          "end": 574,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 551,
                              "end": 561,
                              "decorators": [],
                              "name": "element",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 558,
                                "end": 561,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 560,
                                  "end": 561,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 560,
                                    "end": 561,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 563,
                            "end": 574,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 566,
                              "end": 574,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 566,
                                "end": 574,
                                "decorators": [],
                                "name": "TCompare",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          "typeParameters": null
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 575,
                    "end": 597,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 577,
                      "end": 597,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 594,
                        "end": 597,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 595,
                            "end": 596,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 595,
                              "end": 596,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 577,
                        "end": 594,
                        "decorators": [],
                        "name": "OrderedEnumerable",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 526,
                    "end": 536,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 527,
                        "end": 535,
                        "const": false,
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 527,
                          "end": 535,
                          "decorators": [],
                          "name": "TCompare",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
                      }
                    ]
                  }
                }
              ]
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 496,
                "end": 509,
                "expression": {
                  "type": "Identifier",
                  "start": 496,
                  "end": 506,
                  "decorators": [],
                  "name": "Enumerable",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 506,
                  "end": 509,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 507,
                      "end": 508,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 507,
                        "end": 508,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 467,
              "end": 484,
              "decorators": [],
              "name": "OrderedEnumerable",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 484,
              "end": 487,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 485,
                  "end": 486,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 485,
                    "end": 486,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 672,
            "end": 764,
            "body": {
              "type": "TSInterfaceBody",
              "start": 736,
              "end": 764,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 746,
                  "end": 758,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 746,
                    "end": 749,
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 751,
                    "end": 757,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 753,
                      "end": 757,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 753,
                        "end": 757,
                        "decorators": [],
                        "name": "TKey",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": null
                }
              ]
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 715,
                "end": 735,
                "expression": {
                  "type": "Identifier",
                  "start": 715,
                  "end": 725,
                  "decorators": [],
                  "name": "Enumerable",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 725,
                  "end": 735,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 726,
                      "end": 734,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 726,
                        "end": 734,
                        "decorators": [],
                        "name": "TElement",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 682,
              "end": 690,
              "decorators": [],
              "name": "Grouping",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 690,
              "end": 706,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 691,
                  "end": 695,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 691,
                    "end": 695,
                    "decorators": [],
                    "name": "TKey",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 697,
                  "end": 705,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 697,
                    "end": 705,
                    "decorators": [],
                    "name": "TElement",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 770,
            "end": 959,
            "body": {
              "type": "TSInterfaceBody",
              "start": 803,
              "end": 959,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 813,
                  "end": 829,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 813,
                    "end": 818,
                    "decorators": [],
                    "name": "Count",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 820,
                    "end": 828,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 822,
                      "end": 828
                    }
                  },
                  "static": false,
                  "typeParameters": null
                },
                {
                  "type": "TSMethodSignature",
                  "start": 838,
                  "end": 864,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 838,
                    "end": 841,
                    "decorators": [],
                    "name": "Get",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 842,
                      "end": 845,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 846,
                    "end": 863,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 848,
                      "end": 863,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 858,
                        "end": 863,
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "start": 859,
                            "end": 862
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 848,
                        "end": 858,
                        "decorators": [],
                        "name": "Enumerable",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": null
                },
                {
                  "type": "TSMethodSignature",
                  "start": 873,
                  "end": 896,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 873,
                    "end": 881,
                    "decorators": [],
                    "name": "Contains",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 882,
                      "end": 885,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 886,
                    "end": 895,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 888,
                      "end": 895
                    }
                  },
                  "static": false,
                  "typeParameters": null
                },
                {
                  "type": "TSMethodSignature",
                  "start": 905,
                  "end": 953,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 905,
                    "end": 917,
                    "decorators": [],
                    "name": "ToEnumerable",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 919,
                    "end": 952,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 921,
                      "end": 952,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 931,
                        "end": 952,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 932,
                            "end": 951,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 940,
                              "end": 951,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 941,
                                  "end": 945,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 941,
                                    "end": 945,
                                    "decorators": [],
                                    "name": "TKey",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                {
                                  "type": "TSAnyKeyword",
                                  "start": 947,
                                  "end": 950
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 932,
                              "end": 940,
                              "decorators": [],
                              "name": "Grouping",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 921,
                        "end": 931,
                        "decorators": [],
                        "name": "Enumerable",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": null
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 780,
              "end": 786,
              "decorators": [],
              "name": "Lookup",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 786,
              "end": 802,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 787,
                  "end": 791,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 787,
                    "end": 791,
                    "decorators": [],
                    "name": "TKey",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 793,
                  "end": 801,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 793,
                    "end": 801,
                    "decorators": [],
                    "name": "TElement",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 965,
            "end": 1314,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1000,
              "end": 1314,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 1010,
                  "end": 1046,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1010,
                    "end": 1013,
                    "decorators": [],
                    "name": "Add",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1014,
                      "end": 1023,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1017,
                        "end": 1023,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1019,
                          "end": 1023,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1019,
                            "end": 1023,
                            "decorators": [],
                            "name": "TKey",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 1025,
                      "end": 1038,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1030,
                        "end": 1038,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1032,
                          "end": 1038,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1032,
                            "end": 1038,
                            "decorators": [],
                            "name": "TValue",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1039,
                    "end": 1045,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 1041,
                      "end": 1045
                    }
                  },
                  "static": false,
                  "typeParameters": null
                },
                {
                  "type": "TSMethodSignature",
                  "start": 1055,
                  "end": 1077,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1055,
                    "end": 1058,
                    "decorators": [],
                    "name": "Get",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1059,
                      "end": 1067,
                      "decorators": [],
                      "name": "ke",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1061,
                        "end": 1067,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1063,
                          "end": 1067,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1063,
                            "end": 1067,
                            "decorators": [],
                            "name": "TKey",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1068,
                    "end": 1076,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1070,
                      "end": 1076,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1070,
                        "end": 1076,
                        "decorators": [],
                        "name": "TValue",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": null
                },
                {
                  "type": "TSMethodSignature",
                  "start": 1086,
                  "end": 1125,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1086,
                    "end": 1089,
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1090,
                      "end": 1099,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1093,
                        "end": 1099,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1095,
                          "end": 1099,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1095,
                            "end": 1099,
                            "decorators": [],
                            "name": "TKey",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 1101,
                      "end": 1114,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1106,
                        "end": 1114,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1108,
                          "end": 1114,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1108,
                            "end": 1114,
                            "decorators": [],
                            "name": "TValue",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1115,
                    "end": 1124,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 1117,
                      "end": 1124
                    }
                  },
                  "static": false,
                  "typeParameters": null
                },
                {
                  "type": "TSMethodSignature",
                  "start": 1134,
                  "end": 1163,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1134,
                    "end": 1142,
                    "decorators": [],
                    "name": "Contains",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1143,
                      "end": 1152,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1146,
                        "end": 1152,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1148,
                          "end": 1152,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1148,
                            "end": 1152,
                            "decorators": [],
                            "name": "TKey",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1153,
                    "end": 1162,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 1155,
                      "end": 1162
                    }
                  },
                  "static": false,
                  "typeParameters": null
                },
                {
                  "type": "TSMethodSignature",
                  "start": 1172,
                  "end": 1186,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1172,
                    "end": 1177,
                    "decorators": [],
                    "name": "Clear",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1179,
                    "end": 1185,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 1181,
                      "end": 1185
                    }
                  },
                  "static": false,
                  "typeParameters": null
                },
                {
                  "type": "TSMethodSignature",
                  "start": 1195,
                  "end": 1219,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1195,
                    "end": 1201,
                    "decorators": [],
                    "name": "Remove",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1202,
                      "end": 1211,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1205,
                        "end": 1211,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1207,
                          "end": 1211,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1207,
                            "end": 1211,
                            "decorators": [],
                            "name": "TKey",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1212,
                    "end": 1218,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 1214,
                      "end": 1218
                    }
                  },
                  "static": false,
                  "typeParameters": null
                },
                {
                  "type": "TSMethodSignature",
                  "start": 1228,
                  "end": 1244,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1228,
                    "end": 1233,
                    "decorators": [],
                    "name": "Count",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1235,
                    "end": 1243,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1237,
                      "end": 1243
                    }
                  },
                  "static": false,
                  "typeParameters": null
                },
                {
                  "type": "TSMethodSignature",
                  "start": 1253,
                  "end": 1308,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1253,
                    "end": 1265,
                    "decorators": [],
                    "name": "ToEnumerable",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1267,
                    "end": 1307,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1269,
                      "end": 1307,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1279,
                        "end": 1307,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1280,
                            "end": 1306,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 1292,
                              "end": 1306,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 1293,
                                  "end": 1297,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1293,
                                    "end": 1297,
                                    "decorators": [],
                                    "name": "TKey",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                {
                                  "type": "TSTypeReference",
                                  "start": 1299,
                                  "end": 1305,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1299,
                                    "end": 1305,
                                    "decorators": [],
                                    "name": "TValue",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 1280,
                              "end": 1292,
                              "decorators": [],
                              "name": "KeyValuePair",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 1269,
                        "end": 1279,
                        "decorators": [],
                        "name": "Enumerable",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": null
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 975,
              "end": 985,
              "decorators": [],
              "name": "Dictionary",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 985,
              "end": 999,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 986,
                  "end": 990,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 986,
                    "end": 990,
                    "decorators": [],
                    "name": "TKey",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 992,
                  "end": 998,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 992,
                    "end": 998,
                    "decorators": [],
                    "name": "TValue",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1320,
            "end": 1406,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1357,
              "end": 1406,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 1367,
                  "end": 1377,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1367,
                    "end": 1370,
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1370,
                    "end": 1376,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1372,
                      "end": 1376,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1372,
                        "end": 1376,
                        "decorators": [],
                        "name": "TKey",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 1386,
                  "end": 1400,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1386,
                    "end": 1391,
                    "decorators": [],
                    "name": "Value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1391,
                    "end": 1399,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1393,
                      "end": 1399,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1393,
                        "end": 1399,
                        "decorators": [],
                        "name": "TValue",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 1330,
              "end": 1342,
              "decorators": [],
              "name": "KeyValuePair",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1342,
              "end": 1356,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1343,
                  "end": 1347,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1343,
                    "end": 1347,
                    "decorators": [],
                    "name": "TKey",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1349,
                  "end": 1355,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1349,
                    "end": 1355,
                    "decorators": [],
                    "name": "TValue",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 19,
        "decorators": [],
        "name": "linq",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
