__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1020,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 644,
      "body": {
        "type": "TSModuleBlock",
        "start": 17,
        "end": 644,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 23,
            "end": 50,
            "body": {
              "type": "TSInterfaceBody",
              "start": 47,
              "end": 50,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 33,
              "end": 43,
              "decorators": [],
              "name": "Collection",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 43,
              "end": 46,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 44,
                  "end": 45,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 45,
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
            "start": 55,
            "end": 154,
            "body": {
              "type": "TSInterfaceBody",
              "start": 95,
              "end": 154,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 105,
                  "end": 124,
                  "accessibility": null,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 106,
                      "end": 119,
                      "decorators": [],
                      "name": "index",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 111,
                        "end": 119,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 113,
                          "end": 119
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 120,
                    "end": 123,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 122,
                      "end": 123,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 122,
                        "end": 123,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 133,
                  "end": 148,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 133,
                    "end": 139,
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 139,
                    "end": 147,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 141,
                      "end": 147
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 81,
                "end": 94,
                "expression": {
                  "type": "Identifier",
                  "start": 81,
                  "end": 91,
                  "decorators": [],
                  "name": "Collection",
                  "optional": false,
                  "typeAnnotation": null
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
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 92,
                        "end": 93,
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
              "start": 65,
              "end": 69,
              "decorators": [],
              "name": "List",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 69,
              "end": 72,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 70,
                  "end": 71,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 70,
                    "end": 71,
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
            "start": 160,
            "end": 257,
            "body": {
              "type": "TSInterfaceBody",
              "start": 195,
              "end": 257,
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 205,
                  "end": 251,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 206,
                      "end": 214,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 211,
                        "end": 214,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 213,
                          "end": 214,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 213,
                            "end": 214,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 216,
                      "end": 229,
                      "decorators": [],
                      "name": "index",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 221,
                        "end": 229,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 223,
                          "end": 229
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 231,
                      "end": 240,
                      "decorators": [],
                      "name": "list",
                      "optional": false,
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
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 237,
                              "end": 238,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
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
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 243,
                        "end": 250,
                        "decorators": [],
                        "name": "TResult",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "typeParameters": null
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 170,
              "end": 182,
              "decorators": [],
              "name": "ListIterator",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 182,
              "end": 194,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 183,
                  "end": 184,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 183,
                    "end": 184,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 186,
                  "end": 193,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 186,
                    "end": 193,
                    "decorators": [],
                    "name": "TResult",
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
            "start": 263,
            "end": 344,
            "body": {
              "type": "TSInterfaceBody",
              "start": 309,
              "end": 344,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 319,
                  "end": 338,
                  "accessibility": null,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 320,
                      "end": 333,
                      "decorators": [],
                      "name": "index",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 325,
                        "end": 333,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 327,
                          "end": 333
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 334,
                    "end": 337,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 336,
                      "end": 337,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 336,
                        "end": 337,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 295,
                "end": 308,
                "expression": {
                  "type": "Identifier",
                  "start": 295,
                  "end": 305,
                  "decorators": [],
                  "name": "Collection",
                  "optional": false,
                  "typeAnnotation": null
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
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 306,
                        "end": 307,
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
              "start": 273,
              "end": 283,
              "decorators": [],
              "name": "Dictionary",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 283,
              "end": 286,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 284,
                  "end": 285,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 284,
                    "end": 285,
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
            "type": "ExportNamedDeclaration",
            "start": 349,
            "end": 452,
            "attributes": [],
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 356,
              "end": 452,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 365,
                "end": 370,
                "decorators": [],
                "name": "pluck",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 394,
                  "end": 413,
                  "decorators": [],
                  "name": "list",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 398,
                    "end": 413,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 400,
                      "end": 413,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 410,
                        "end": 413,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 411,
                            "end": 412,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 411,
                              "end": 412,
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
                        "start": 400,
                        "end": 410,
                        "decorators": [],
                        "name": "Collection",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 423,
                  "end": 443,
                  "decorators": [],
                  "name": "propertyName",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 435,
                    "end": 443,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 437,
                      "end": 443
                    }
                  }
                }
              ],
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
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 370,
                "end": 384,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 371,
                    "end": 383,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeLiteral",
                      "start": 381,
                      "end": 383,
                      "members": []
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 371,
                      "end": 372,
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
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 458,
            "end": 592,
            "attributes": [],
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 465,
              "end": 592,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 474,
                "end": 477,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 499,
                  "end": 512,
                  "decorators": [],
                  "name": "list",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 503,
                    "end": 512,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 505,
                      "end": 512,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 509,
                        "end": 512,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 510,
                            "end": 511,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 510,
                              "end": 511,
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
                        "start": 505,
                        "end": 509,
                        "decorators": [],
                        "name": "List",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 522,
                  "end": 556,
                  "decorators": [],
                  "name": "iterator",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 530,
                    "end": 556,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 532,
                      "end": 556,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 544,
                        "end": 556,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 545,
                            "end": 546,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 545,
                              "end": 546,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 548,
                            "end": 555,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 548,
                              "end": 555,
                              "decorators": [],
                              "name": "TResult",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 532,
                        "end": 544,
                        "decorators": [],
                        "name": "ListIterator",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 566,
                  "end": 579,
                  "decorators": [],
                  "name": "context",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 574,
                    "end": 579,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 576,
                      "end": 579
                    }
                  }
                }
              ],
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 582,
                      "end": 589,
                      "decorators": [],
                      "name": "TResult",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 477,
                "end": 489,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 478,
                    "end": 479,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 478,
                      "end": 479,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 481,
                    "end": 488,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 481,
                      "end": 488,
                      "decorators": [],
                      "name": "TResult",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 598,
            "end": 642,
            "attributes": [],
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 605,
              "end": 642,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 614,
                "end": 619,
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 623,
                  "end": 637,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 628,
                    "end": 637,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 630,
                      "end": 637,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 634,
                        "end": 637,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 635,
                            "end": 636,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 635,
                              "end": 636,
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
                        "start": 630,
                        "end": 634,
                        "decorators": [],
                        "name": "List",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 638,
                "end": 641,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 640,
                  "end": 641,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 640,
                    "end": 641,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 619,
                "end": 622,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 620,
                    "end": 621,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 620,
                      "end": 621,
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
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 16,
        "decorators": [],
        "name": "_",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "ClassDeclaration",
      "start": 646,
      "end": 684,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 665,
        "end": 684,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 671,
            "end": 682,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 671,
              "end": 676,
              "decorators": [],
              "name": "model",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 660,
        "end": 664,
        "decorators": [],
        "name": "View",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 686,
      "end": 728,
      "body": {
        "type": "TSInterfaceBody",
        "start": 702,
        "end": 728,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 708,
            "end": 726,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 708,
              "end": 714,
              "decorators": [],
              "name": "series",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 716,
                    "end": 723,
                    "decorators": [],
                    "name": "ISeries",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
        "start": 696,
        "end": 701,
        "decorators": [],
        "name": "IData",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 730,
      "end": 786,
      "body": {
        "type": "TSInterfaceBody",
        "start": 748,
        "end": 786,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 754,
            "end": 767,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 754,
              "end": 759,
              "decorators": [],
              "name": "items",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 772,
            "end": 784,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 772,
              "end": 775,
              "decorators": [],
              "name": "key",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 775,
              "end": 783,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 777,
                "end": 783
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 740,
        "end": 747,
        "decorators": [],
        "name": "ISeries",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 788,
      "end": 1020,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 814,
        "end": 1020,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 820,
            "end": 1018,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 827,
              "end": 840,
              "decorators": [],
              "name": "getDataSeries",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 840,
              "end": 1018,
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 868,
                          "end": 881,
                          "decorators": [],
                          "name": "data",
                          "optional": false,
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
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 874,
                                  "end": 879,
                                  "decorators": [],
                                  "name": "IData",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 884,
                          "end": 906,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 899,
                              "end": 905,
                              "raw": "\"data\"",
                              "value": "data",
                              "regex": null,
                              "bigint": null
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 884,
                            "end": 898,
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "start": 884,
                              "end": 894,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 884,
                                "end": 888
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 889,
                                "end": 894,
                                "decorators": [],
                                "name": "model",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 895,
                              "end": 898,
                              "decorators": [],
                              "name": "get",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 920,
                          "end": 942,
                          "decorators": [],
                          "name": "allSeries",
                          "optional": false,
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
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 931,
                                    "end": 938,
                                    "decorators": [],
                                    "name": "ISeries",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          }
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 945,
                          "end": 968,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 953,
                              "end": 957,
                              "decorators": [],
                              "name": "data",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            {
                              "type": "Literal",
                              "start": 959,
                              "end": 967,
                              "raw": "\"series\"",
                              "value": "series",
                              "regex": null,
                              "bigint": null
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 945,
                            "end": 952,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 945,
                              "end": 946,
                              "decorators": [],
                              "name": "_",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 947,
                              "end": 952,
                              "decorators": [],
                              "name": "pluck",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 979,
                    "end": 1012,
                    "argument": {
                      "type": "CallExpression",
                      "start": 986,
                      "end": 1011,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 992,
                          "end": 1001,
                          "decorators": [],
                          "name": "allSeries",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "MemberExpression",
                          "start": 1003,
                          "end": 1010,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 1003,
                            "end": 1004,
                            "decorators": [],
                            "name": "_",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1005,
                            "end": 1010,
                            "decorators": [],
                            "name": "first",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 986,
                        "end": 991,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 986,
                          "end": 987,
                          "decorators": [],
                          "name": "_",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 988,
                          "end": 991,
                          "decorators": [],
                          "name": "map",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 844,
                      "end": 851,
                      "decorators": [],
                      "name": "ISeries",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 794,
        "end": 800,
        "decorators": [],
        "name": "MyView",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 809,
        "end": 813,
        "decorators": [],
        "name": "View",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
