__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 913,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 48,
      "body": {
        "type": "TSInterfaceBody",
        "start": 19,
        "end": 48,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 25,
            "end": 46,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 39,
              "decorators": [],
              "name": "_instanceBrand",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 46,
              "typeAnnotation": {
                "type": "TSNeverKeyword",
                "start": 41,
                "end": 46
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 18,
        "decorators": [],
        "name": "Instance",
        "optional": false
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 50,
      "end": 120,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 62,
        "decorators": [],
        "name": "DataDef",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 78,
        "end": 120,
        "params": [
          {
            "type": "Identifier",
            "start": 79,
            "end": 111,
            "decorators": [],
            "name": "this",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 83,
              "end": 111,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 85,
                "end": 111,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 85,
                    "end": 100,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 93,
                      "end": 100,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 94,
                          "end": 99,
                          "typeName": {
                            "type": "Identifier",
                            "start": 94,
                            "end": 99,
                            "decorators": [],
                            "name": "Props",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 85,
                      "end": 93,
                      "decorators": [],
                      "name": "Readonly",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 103,
                    "end": 111,
                    "typeName": {
                      "type": "Identifier",
                      "start": 103,
                      "end": 111,
                      "decorators": [],
                      "name": "Instance",
                      "optional": false
                    }
                  }
                ]
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 113,
          "end": 120,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 116,
            "end": 120,
            "typeName": {
              "type": "Identifier",
              "start": 116,
              "end": 120,
              "decorators": [],
              "name": "Data",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 62,
        "end": 75,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 63,
            "end": 67,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 63,
              "end": 67,
              "decorators": [],
              "name": "Data",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 69,
            "end": 74,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 69,
              "end": 74,
              "decorators": [],
              "name": "Props",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 122,
      "end": 176,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 127,
        "end": 142,
        "decorators": [],
        "name": "PropsDefinition",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 148,
        "end": 176,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 160,
          "end": 167,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 166,
            "end": 167,
            "typeName": {
              "type": "Identifier",
              "start": 166,
              "end": 167,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 155,
          "end": 156,
          "decorators": [],
          "name": "K",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 170,
          "end": 174,
          "indexType": {
            "type": "TSTypeReference",
            "start": 172,
            "end": 173,
            "typeName": {
              "type": "Identifier",
              "start": 172,
              "end": 173,
              "decorators": [],
              "name": "K",
              "optional": false
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 170,
            "end": 171,
            "typeName": {
              "type": "Identifier",
              "start": 170,
              "end": 171,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 142,
        "end": 145,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 143,
            "end": 144,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 143,
              "end": 144,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 178,
      "end": 348,
      "body": {
        "type": "TSInterfaceBody",
        "start": 262,
        "end": 348,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 268,
            "end": 279,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 268,
              "end": 272,
              "decorators": [],
              "name": "data",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 273,
              "end": 279,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 275,
                "end": 279,
                "typeName": {
                  "type": "Identifier",
                  "start": 275,
                  "end": 279,
                  "decorators": [],
                  "name": "Data",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 284,
            "end": 300,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 284,
              "end": 289,
              "decorators": [],
              "name": "props",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 290,
              "end": 300,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 292,
                "end": 300,
                "typeName": {
                  "type": "Identifier",
                  "start": 292,
                  "end": 300,
                  "decorators": [],
                  "name": "PropsDef",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 305,
            "end": 346,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 305,
              "end": 310,
              "decorators": [],
              "name": "watch",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 311,
              "end": 346,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 313,
                "end": 346,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 319,
                  "end": 346,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 320,
                      "end": 326
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 328,
                      "end": 345,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 340,
                        "end": 345,
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "start": 341,
                            "end": 344
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 328,
                        "end": 340,
                        "decorators": [],
                        "name": "WatchHandler",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 313,
                  "end": 319,
                  "decorators": [],
                  "name": "Record",
                  "optional": false
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
        "start": 188,
        "end": 195,
        "decorators": [],
        "name": "Options",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 195,
        "end": 261,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 201,
            "end": 236,
            "const": false,
            "default": {
              "type": "TSFunctionType",
              "start": 209,
              "end": 235,
              "params": [
                {
                  "type": "Identifier",
                  "start": 210,
                  "end": 224,
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 214,
                    "end": 224,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 216,
                      "end": 224,
                      "typeName": {
                        "type": "Identifier",
                        "start": 216,
                        "end": 224,
                        "decorators": [],
                        "name": "Instance",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 226,
                "end": 235,
                "typeAnnotation": {
                  "type": "TSObjectKeyword",
                  "start": 229,
                  "end": 235
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 201,
              "end": 205,
              "decorators": [],
              "name": "Data",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 242,
            "end": 255,
            "const": false,
            "default": {
              "type": "TSTypeLiteral",
              "start": 253,
              "end": 255,
              "members": []
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 242,
              "end": 250,
              "decorators": [],
              "name": "PropsDef",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 350,
      "end": 401,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 355,
        "end": 367,
        "decorators": [],
        "name": "WatchHandler",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 373,
        "end": 400,
        "params": [
          {
            "type": "Identifier",
            "start": 374,
            "end": 380,
            "decorators": [],
            "name": "val",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 377,
              "end": 380,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 379,
                "end": 380,
                "typeName": {
                  "type": "Identifier",
                  "start": 379,
                  "end": 380,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "Identifier",
            "start": 382,
            "end": 391,
            "decorators": [],
            "name": "oldVal",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 388,
              "end": 391,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 390,
                "end": 391,
                "typeName": {
                  "type": "Identifier",
                  "start": 390,
                  "end": 391,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 393,
          "end": 400,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 396,
            "end": 400
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 367,
        "end": 370,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 368,
            "end": 369,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 368,
              "end": 369,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 403,
      "end": 547,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 408,
        "end": 424,
        "decorators": [],
        "name": "ThisTypedOptions",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 444,
        "end": 547,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 444,
            "end": 497,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 451,
              "end": 497,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 452,
                  "end": 472,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 459,
                    "end": 472,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 460,
                        "end": 464,
                        "typeName": {
                          "type": "Identifier",
                          "start": 460,
                          "end": 464,
                          "decorators": [],
                          "name": "Data",
                          "optional": false
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 466,
                        "end": 471,
                        "typeName": {
                          "type": "Identifier",
                          "start": 466,
                          "end": 471,
                          "decorators": [],
                          "name": "Props",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 452,
                    "end": 459,
                    "decorators": [],
                    "name": "DataDef",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 474,
                  "end": 496,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 489,
                    "end": 496,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 490,
                        "end": 495,
                        "typeName": {
                          "type": "Identifier",
                          "start": 490,
                          "end": 495,
                          "decorators": [],
                          "name": "Props",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 474,
                    "end": 489,
                    "decorators": [],
                    "name": "PropsDefinition",
                    "optional": false
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 444,
              "end": 451,
              "decorators": [],
              "name": "Options",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 504,
            "end": 547,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 512,
              "end": 547,
              "params": [
                {
                  "type": "TSIntersectionType",
                  "start": 513,
                  "end": 546,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 513,
                      "end": 517,
                      "typeName": {
                        "type": "Identifier",
                        "start": 513,
                        "end": 517,
                        "decorators": [],
                        "name": "Data",
                        "optional": false
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 520,
                      "end": 535,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 528,
                        "end": 535,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 529,
                            "end": 534,
                            "typeName": {
                              "type": "Identifier",
                              "start": 529,
                              "end": 534,
                              "decorators": [],
                              "name": "Props",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 520,
                        "end": 528,
                        "decorators": [],
                        "name": "Readonly",
                        "optional": false
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 538,
                      "end": 546,
                      "typeName": {
                        "type": "Identifier",
                        "start": 538,
                        "end": 546,
                        "decorators": [],
                        "name": "Instance",
                        "optional": false
                      }
                    }
                  ]
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 504,
              "end": 512,
              "decorators": [],
              "name": "ThisType",
              "optional": false
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 424,
        "end": 437,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 425,
            "end": 429,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 425,
              "end": 429,
              "decorators": [],
              "name": "Data",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 431,
            "end": 436,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 431,
              "end": 436,
              "decorators": [],
              "name": "Props",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 549,
      "end": 625,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 566,
        "end": 570,
        "decorators": [],
        "name": "test",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 584,
          "end": 617,
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 586,
            "end": 617,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 588,
              "end": 617,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 604,
                "end": 617,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 605,
                    "end": 609,
                    "typeName": {
                      "type": "Identifier",
                      "start": 605,
                      "end": 609,
                      "decorators": [],
                      "name": "Data",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 611,
                    "end": 616,
                    "typeName": {
                      "type": "Identifier",
                      "start": 611,
                      "end": 616,
                      "decorators": [],
                      "name": "Props",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 588,
                "end": 604,
                "decorators": [],
                "name": "ThisTypedOptions",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 618,
        "end": 624,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 620,
          "end": 624
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 570,
        "end": 583,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 571,
            "end": 575,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 571,
              "end": 575,
              "decorators": [],
              "name": "Data",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 577,
            "end": 582,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 577,
              "end": 582,
              "decorators": [],
              "name": "Props",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 626,
      "end": 667,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 643,
        "end": 647,
        "decorators": [],
        "name": "test",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 648,
          "end": 659,
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 650,
            "end": 659,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 652,
              "end": 659,
              "typeName": {
                "type": "Identifier",
                "start": 652,
                "end": 659,
                "decorators": [],
                "name": "Options",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 660,
        "end": 666,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 662,
          "end": 666
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 669,
      "end": 913,
      "expression": {
        "type": "CallExpression",
        "start": 669,
        "end": 913,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 674,
            "end": 912,
            "properties": [
              {
                "type": "Property",
                "start": 680,
                "end": 710,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 680,
                  "end": 685,
                  "decorators": [],
                  "name": "props",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 687,
                  "end": 710,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 697,
                      "end": 704,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 697,
                        "end": 700,
                        "decorators": [],
                        "name": "foo",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 702,
                        "end": 704,
                        "raw": "''",
                        "value": ""
                      }
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 717,
                "end": 798,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 717,
                  "end": 721,
                  "decorators": [],
                  "name": "data",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 721,
                  "end": 798,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 742,
                    "end": 798,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 752,
                        "end": 792,
                        "argument": {
                          "type": "ObjectExpression",
                          "start": 759,
                          "end": 792,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 773,
                              "end": 782,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 773,
                                "end": 776,
                                "decorators": [],
                                "name": "bar",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Literal",
                                "start": 778,
                                "end": 782,
                                "raw": "true",
                                "value": true
                              }
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 723,
                    "end": 741,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 725,
                      "end": 741,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 727,
                          "end": 739,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 727,
                            "end": 730,
                            "decorators": [],
                            "name": "bar",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 730,
                            "end": 739,
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 732,
                              "end": 739
                            }
                          }
                        }
                      ]
                    }
                  }
                }
              },
              {
                "type": "Property",
                "start": 805,
                "end": 910,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 805,
                  "end": 810,
                  "decorators": [],
                  "name": "watch",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 812,
                  "end": 910,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 822,
                      "end": 904,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 822,
                        "end": 825,
                        "decorators": [],
                        "name": "foo",
                        "optional": false
                      },
                      "kind": "init",
                      "method": true,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 825,
                        "end": 904,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 864,
                          "end": 904,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 878,
                              "end": 894,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 878,
                                "end": 894,
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 878,
                                  "end": 886,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 878,
                                    "end": 882
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 883,
                                    "end": 886,
                                    "decorators": [],
                                    "name": "bar",
                                    "optional": false
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 889,
                                  "end": 894,
                                  "raw": "false",
                                  "value": false
                                }
                              }
                            }
                          ]
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 826,
                            "end": 840,
                            "decorators": [],
                            "name": "newVal",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 832,
                              "end": 840,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 834,
                                "end": 840
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 842,
                            "end": 856,
                            "decorators": [],
                            "name": "oldVal",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 848,
                              "end": 856,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 850,
                                "end": 856
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 857,
                          "end": 863,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 859,
                            "end": 863
                          }
                        }
                      }
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 669,
          "end": 673,
          "decorators": [],
          "name": "test",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
