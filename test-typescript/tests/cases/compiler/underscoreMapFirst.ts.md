__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1021,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 644,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 16,
        "name": "_",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 17,
        "end": 644,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 23,
            "end": 50,
            "id": {
              "type": "Identifier",
              "start": 33,
              "end": 43,
              "name": "Collection",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 43,
              "end": 46,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 44,
                  "end": 45,
                  "name": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 45,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "body": {
              "type": "TSInterfaceBody",
              "start": 47,
              "end": 50,
              "body": []
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 55,
            "end": 154,
            "id": {
              "type": "Identifier",
              "start": 65,
              "end": 69,
              "name": "List",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 81,
                "end": 94,
                "expression": {
                  "type": "Identifier",
                  "start": 81,
                  "end": 91,
                  "name": "Collection",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 91,
                  "end": 94,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 92,
                      "end": 93,
                      "typeName": {
                        "type": "Identifier",
                        "start": 92,
                        "end": 93,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 69,
              "end": 72,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 70,
                  "end": 71,
                  "name": {
                    "type": "Identifier",
                    "start": 70,
                    "end": 71,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "body": {
              "type": "TSInterfaceBody",
              "start": 95,
              "end": 154,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 105,
                  "end": 124,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 106,
                      "end": 119,
                      "name": "index",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 111,
                        "end": 119,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 113,
                          "end": 119
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 120,
                    "end": 123,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 122,
                      "end": 123,
                      "typeName": {
                        "type": "Identifier",
                        "start": 122,
                        "end": 123,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                },
                {
                  "type": "TSPropertySignature",
                  "start": 133,
                  "end": 148,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 133,
                    "end": 139,
                    "name": "length",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 139,
                    "end": 147,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 141,
                      "end": 147
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
            "start": 160,
            "end": 257,
            "id": {
              "type": "Identifier",
              "start": 170,
              "end": 182,
              "name": "ListIterator",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 182,
              "end": 194,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 183,
                  "end": 184,
                  "name": {
                    "type": "Identifier",
                    "start": 183,
                    "end": 184,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 186,
                  "end": 193,
                  "name": {
                    "type": "Identifier",
                    "start": 186,
                    "end": 193,
                    "name": "TResult",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "body": {
              "type": "TSInterfaceBody",
              "start": 195,
              "end": 257,
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 205,
                  "end": 251,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 206,
                      "end": 214,
                      "name": "value",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 211,
                        "end": 214,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 213,
                          "end": 214,
                          "typeName": {
                            "type": "Identifier",
                            "start": 213,
                            "end": 214,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 216,
                      "end": 229,
                      "name": "index",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 221,
                        "end": 229,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 223,
                          "end": 229
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 231,
                      "end": 240,
                      "name": "list",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 235,
                        "end": 240,
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "start": 237,
                          "end": 240,
                          "elementType": {
                            "type": "TSTypeReference",
                            "start": 237,
                            "end": 238,
                            "typeName": {
                              "type": "Identifier",
                              "start": 237,
                              "end": 238,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 241,
                    "end": 250,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 243,
                      "end": 250,
                      "typeName": {
                        "type": "Identifier",
                        "start": 243,
                        "end": 250,
                        "name": "TResult",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 263,
            "end": 344,
            "id": {
              "type": "Identifier",
              "start": 273,
              "end": 283,
              "name": "Dictionary",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 295,
                "end": 308,
                "expression": {
                  "type": "Identifier",
                  "start": 295,
                  "end": 305,
                  "name": "Collection",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 305,
                  "end": 308,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 306,
                      "end": 307,
                      "typeName": {
                        "type": "Identifier",
                        "start": 306,
                        "end": 307,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 283,
              "end": 286,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 284,
                  "end": 285,
                  "name": {
                    "type": "Identifier",
                    "start": 284,
                    "end": 285,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "body": {
              "type": "TSInterfaceBody",
              "start": 309,
              "end": 344,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 319,
                  "end": 338,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 320,
                      "end": 333,
                      "name": "index",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 325,
                        "end": 333,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 327,
                          "end": 333
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 334,
                    "end": 337,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 336,
                      "end": 337,
                      "typeName": {
                        "type": "Identifier",
                        "start": 336,
                        "end": 337,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                }
              ]
            },
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 349,
            "end": 452,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 356,
              "end": 452,
              "id": {
                "type": "Identifier",
                "start": 365,
                "end": 370,
                "name": "pluck",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 394,
                  "end": 413,
                  "name": "list",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 398,
                    "end": 413,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 400,
                      "end": 413,
                      "typeName": {
                        "type": "Identifier",
                        "start": 400,
                        "end": 410,
                        "name": "Collection",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 410,
                        "end": 413,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 411,
                            "end": 412,
                            "typeName": {
                              "type": "Identifier",
                              "start": 411,
                              "end": 412,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 423,
                  "end": 443,
                  "name": "propertyName",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 435,
                    "end": 443,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 437,
                      "end": 443
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 370,
                "end": 384,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 371,
                    "end": 383,
                    "name": {
                      "type": "Identifier",
                      "start": 371,
                      "end": 372,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeLiteral",
                      "start": 381,
                      "end": 383,
                      "members": []
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 444,
                "end": 451,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 446,
                  "end": 451,
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 446,
                    "end": 449
                  }
                }
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 458,
            "end": 592,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 465,
              "end": 592,
              "id": {
                "type": "Identifier",
                "start": 474,
                "end": 477,
                "name": "map",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 499,
                  "end": 512,
                  "name": "list",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 503,
                    "end": 512,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 505,
                      "end": 512,
                      "typeName": {
                        "type": "Identifier",
                        "start": 505,
                        "end": 509,
                        "name": "List",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 509,
                        "end": 512,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 510,
                            "end": 511,
                            "typeName": {
                              "type": "Identifier",
                              "start": 510,
                              "end": 511,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 522,
                  "end": 556,
                  "name": "iterator",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 530,
                    "end": 556,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 532,
                      "end": 556,
                      "typeName": {
                        "type": "Identifier",
                        "start": 532,
                        "end": 544,
                        "name": "ListIterator",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 544,
                        "end": 556,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 545,
                            "end": 546,
                            "typeName": {
                              "type": "Identifier",
                              "start": 545,
                              "end": 546,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 548,
                            "end": 555,
                            "typeName": {
                              "type": "Identifier",
                              "start": 548,
                              "end": 555,
                              "name": "TResult",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 566,
                  "end": 579,
                  "name": "context",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 574,
                    "end": 579,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 576,
                      "end": 579
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 477,
                "end": 489,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 478,
                    "end": 479,
                    "name": {
                      "type": "Identifier",
                      "start": 478,
                      "end": 479,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 481,
                    "end": 488,
                    "name": {
                      "type": "Identifier",
                      "start": 481,
                      "end": 488,
                      "name": "TResult",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 580,
                "end": 591,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 582,
                  "end": 591,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 582,
                    "end": 589,
                    "typeName": {
                      "type": "Identifier",
                      "start": 582,
                      "end": 589,
                      "name": "TResult",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 598,
            "end": 642,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 605,
              "end": 642,
              "id": {
                "type": "Identifier",
                "start": 614,
                "end": 619,
                "name": "first",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 623,
                  "end": 637,
                  "name": "array",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 628,
                    "end": 637,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 630,
                      "end": 637,
                      "typeName": {
                        "type": "Identifier",
                        "start": 630,
                        "end": 634,
                        "name": "List",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 634,
                        "end": 637,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 635,
                            "end": 636,
                            "typeName": {
                              "type": "Identifier",
                              "start": 635,
                              "end": 636,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 619,
                "end": 622,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 620,
                    "end": 621,
                    "name": {
                      "type": "Identifier",
                      "start": 620,
                      "end": 621,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 638,
                "end": 641,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 640,
                  "end": 641,
                  "typeName": {
                    "type": "Identifier",
                    "start": 640,
                    "end": 641,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "ClassDeclaration",
      "start": 646,
      "end": 684,
      "id": {
        "type": "Identifier",
        "start": 660,
        "end": 664,
        "name": "View",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 665,
        "end": 684,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 671,
            "end": 682,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 671,
              "end": 676,
              "name": "model",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 676,
              "end": 681,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 678,
                "end": 681
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 686,
      "end": 728,
      "id": {
        "type": "Identifier",
        "start": 696,
        "end": 701,
        "name": "IData",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 702,
        "end": 728,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 708,
            "end": 726,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 708,
              "end": 714,
              "name": "series",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 714,
              "end": 725,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 716,
                "end": 725,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 716,
                  "end": 723,
                  "typeName": {
                    "type": "Identifier",
                    "start": 716,
                    "end": 723,
                    "name": "ISeries",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
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
      "start": 730,
      "end": 786,
      "id": {
        "type": "Identifier",
        "start": 740,
        "end": 747,
        "name": "ISeries",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 748,
        "end": 786,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 754,
            "end": 767,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 754,
              "end": 759,
              "name": "items",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 759,
              "end": 766,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 761,
                "end": 766,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 761,
                  "end": 764
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 772,
            "end": 784,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 772,
              "end": 775,
              "name": "key",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 775,
              "end": 783,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 777,
                "end": 783
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
      "type": "ClassDeclaration",
      "start": 788,
      "end": 1020,
      "id": {
        "type": "Identifier",
        "start": 794,
        "end": 800,
        "name": "MyView",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 809,
        "end": 813,
        "name": "View",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 814,
        "end": 1020,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 820,
            "end": 1018,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 827,
              "end": 840,
              "name": "getDataSeries",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 840,
              "end": 1018,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 854,
                "end": 1018,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 864,
                    "end": 907,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 868,
                        "end": 906,
                        "id": {
                          "type": "Identifier",
                          "start": 868,
                          "end": 881,
                          "name": "data",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 872,
                            "end": 881,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 874,
                              "end": 881,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 874,
                                "end": 879,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 874,
                                  "end": 879,
                                  "name": "IData",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 884,
                          "end": 906,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 884,
                            "end": 898,
                            "object": {
                              "type": "MemberExpression",
                              "start": 884,
                              "end": 894,
                              "object": {
                                "type": "ThisExpression",
                                "start": 884,
                                "end": 888
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 889,
                                "end": 894,
                                "name": "model",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 895,
                              "end": 898,
                              "name": "get",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 899,
                              "end": 905,
                              "value": "data",
                              "raw": "\"data\""
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 916,
                    "end": 969,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 920,
                        "end": 968,
                        "id": {
                          "type": "Identifier",
                          "start": 920,
                          "end": 942,
                          "name": "allSeries",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 929,
                            "end": 942,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 931,
                              "end": 942,
                              "elementType": {
                                "type": "TSArrayType",
                                "start": 931,
                                "end": 940,
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "start": 931,
                                  "end": 938,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 931,
                                    "end": 938,
                                    "name": "ISeries",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              }
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 945,
                          "end": 968,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 945,
                            "end": 952,
                            "object": {
                              "type": "Identifier",
                              "start": 945,
                              "end": 946,
                              "name": "_",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 947,
                              "end": 952,
                              "name": "pluck",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 953,
                              "end": 957,
                              "name": "data",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            {
                              "type": "Literal",
                              "start": 959,
                              "end": 967,
                              "value": "series",
                              "raw": "\"series\""
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 979,
                    "end": 1012,
                    "argument": {
                      "type": "CallExpression",
                      "start": 986,
                      "end": 1011,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 986,
                        "end": 991,
                        "object": {
                          "type": "Identifier",
                          "start": 986,
                          "end": 987,
                          "name": "_",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 988,
                          "end": 991,
                          "name": "map",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 992,
                          "end": 1001,
                          "name": "allSeries",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "MemberExpression",
                          "start": 1003,
                          "end": 1010,
                          "object": {
                            "type": "Identifier",
                            "start": 1003,
                            "end": 1004,
                            "name": "_",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1005,
                            "end": 1010,
                            "name": "first",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 842,
                "end": 853,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 844,
                  "end": 853,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 844,
                    "end": 851,
                    "typeName": {
                      "type": "Identifier",
                      "start": 844,
                      "end": 851,
                      "name": "ISeries",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
