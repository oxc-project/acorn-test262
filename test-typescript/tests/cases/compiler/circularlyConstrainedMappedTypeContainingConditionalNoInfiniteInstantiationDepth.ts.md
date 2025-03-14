circularlyConstrainedMappedTypeContainingConditionalNoInfiniteInstantiationDepth.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 2272,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 172,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 172,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 33,
            "end": 65,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 44,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 44,
              "end": 65,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 45,
                  "end": 63,
                  "decorators": [],
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 50,
                    "end": 63,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 52,
                      "end": 63,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 60,
                        "end": 63,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 61,
                            "end": 62,
                            "typeName": {
                              "type": "Identifier",
                              "start": 61,
                              "end": 62,
                              "decorators": [],
                              "name": "P",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 52,
                        "end": 60,
                        "decorators": [],
                        "name": "Readonly",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 70,
            "end": 107,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 81,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 81,
              "end": 107,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 82,
                  "end": 90,
                  "decorators": [],
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 87,
                    "end": 90,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 89,
                      "end": 90,
                      "typeName": {
                        "type": "Identifier",
                        "start": 89,
                        "end": 90,
                        "decorators": [],
                        "name": "P",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 92,
                  "end": 105,
                  "decorators": [],
                  "name": "context",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 100,
                    "end": 105,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 102,
                      "end": 105
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 112,
            "end": 170,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 121,
              "end": 126,
              "decorators": [],
              "name": "props",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 126,
              "end": 169,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 128,
                "end": 169,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 128,
                    "end": 139,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 136,
                      "end": 139,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 137,
                          "end": 138,
                          "typeName": {
                            "type": "Identifier",
                            "start": 137,
                            "end": 138,
                            "decorators": [],
                            "name": "P",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 128,
                      "end": 136,
                      "decorators": [],
                      "name": "Readonly",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 142,
                    "end": 169,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 150,
                      "end": 169,
                      "params": [
                        {
                          "type": "TSTypeLiteral",
                          "start": 151,
                          "end": 168,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 153,
                              "end": 166,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 153,
                                "end": 161,
                                "decorators": [],
                                "name": "children",
                                "optional": false
                              },
                              "optional": true,
                              "readonly": false,
                              "static": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 162,
                                "end": 166,
                                "typeAnnotation": {
                                  "type": "TSTypeLiteral",
                                  "start": 164,
                                  "end": 166,
                                  "members": []
                                }
                              }
                            }
                          ]
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 142,
                      "end": 150,
                      "decorators": [],
                      "name": "Readonly",
                      "optional": false
                    }
                  }
                ]
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
        "start": 14,
        "end": 23,
        "decorators": [],
        "name": "Component",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 23,
        "end": 26,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 24,
            "end": 25,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "decorators": [],
              "name": "P",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 173,
      "end": 353,
      "body": {
        "type": "TSInterfaceBody",
        "start": 206,
        "end": 353,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 212,
            "end": 256,
            "params": [
              {
                "type": "Identifier",
                "start": 217,
                "end": 225,
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 222,
                  "end": 225,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 224,
                    "end": 225,
                    "typeName": {
                      "type": "Identifier",
                      "start": 224,
                      "end": 225,
                      "decorators": [],
                      "name": "P",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 227,
                "end": 240,
                "decorators": [],
                "name": "context",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 235,
                  "end": 240,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 237,
                    "end": 240
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 241,
              "end": 255,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 243,
                "end": 255,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 252,
                  "end": 255,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 253,
                      "end": 254,
                      "typeName": {
                        "type": "Identifier",
                        "start": 253,
                        "end": 254,
                        "decorators": [],
                        "name": "P",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 243,
                  "end": 252,
                  "decorators": [],
                  "name": "Component",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 261,
            "end": 294,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 261,
              "end": 270,
              "decorators": [],
              "name": "propTypes",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 271,
              "end": 293,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 273,
                "end": 293,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 290,
                  "end": 293,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 291,
                      "end": 292,
                      "typeName": {
                        "type": "Identifier",
                        "start": 291,
                        "end": 292,
                        "decorators": [],
                        "name": "P",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 273,
                  "end": 290,
                  "decorators": [],
                  "name": "WeakValidationMap",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 299,
            "end": 325,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 299,
              "end": 311,
              "decorators": [],
              "name": "defaultProps",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 312,
              "end": 324,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 314,
                "end": 324,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 321,
                  "end": 324,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 322,
                      "end": 323,
                      "typeName": {
                        "type": "Identifier",
                        "start": 322,
                        "end": 323,
                        "decorators": [],
                        "name": "P",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 314,
                  "end": 321,
                  "decorators": [],
                  "name": "Partial",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 330,
            "end": 351,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 330,
              "end": 341,
              "decorators": [],
              "name": "displayName",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 342,
              "end": 350,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 344,
                "end": 350
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 183,
        "end": 197,
        "decorators": [],
        "name": "ComponentClass",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 197,
        "end": 205,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 198,
            "end": 204,
            "const": false,
            "default": {
              "type": "TSTypeLiteral",
              "start": 202,
              "end": 204,
              "members": []
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 198,
              "end": 199,
              "decorators": [],
              "name": "P",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 354,
      "end": 550,
      "body": {
        "type": "TSInterfaceBody",
        "start": 390,
        "end": 550,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 396,
            "end": 453,
            "params": [
              {
                "type": "Identifier",
                "start": 397,
                "end": 425,
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 402,
                  "end": 425,
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "start": 404,
                    "end": 425,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 404,
                        "end": 405,
                        "typeName": {
                          "type": "Identifier",
                          "start": 404,
                          "end": 405,
                          "decorators": [],
                          "name": "P",
                          "optional": false
                        }
                      },
                      {
                        "type": "TSTypeLiteral",
                        "start": 408,
                        "end": 425,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 410,
                            "end": 423,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 410,
                              "end": 418,
                              "decorators": [],
                              "name": "children",
                              "optional": false
                            },
                            "optional": true,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 419,
                              "end": 423,
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "start": 421,
                                "end": 423,
                                "members": []
                              }
                            }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 427,
                "end": 440,
                "decorators": [],
                "name": "context",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 435,
                  "end": 440,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 437,
                    "end": 440
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 441,
              "end": 452,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 443,
                "end": 452,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 443,
                    "end": 445,
                    "members": []
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 448,
                    "end": 452
                  }
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 458,
            "end": 491,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 458,
              "end": 467,
              "decorators": [],
              "name": "propTypes",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 468,
              "end": 490,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 470,
                "end": 490,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 487,
                  "end": 490,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 488,
                      "end": 489,
                      "typeName": {
                        "type": "Identifier",
                        "start": 488,
                        "end": 489,
                        "decorators": [],
                        "name": "P",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 470,
                  "end": 487,
                  "decorators": [],
                  "name": "WeakValidationMap",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 496,
            "end": 522,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 496,
              "end": 508,
              "decorators": [],
              "name": "defaultProps",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 509,
              "end": 521,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 511,
                "end": 521,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 518,
                  "end": 521,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 519,
                      "end": 520,
                      "typeName": {
                        "type": "Identifier",
                        "start": 519,
                        "end": 520,
                        "decorators": [],
                        "name": "P",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 511,
                  "end": 518,
                  "decorators": [],
                  "name": "Partial",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 527,
            "end": 548,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 527,
              "end": 538,
              "decorators": [],
              "name": "displayName",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 539,
              "end": 547,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 541,
                "end": 547
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 364,
        "end": 381,
        "decorators": [],
        "name": "FunctionComponent",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 381,
        "end": 389,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 382,
            "end": 388,
            "const": false,
            "default": {
              "type": "TSTypeLiteral",
              "start": 386,
              "end": 388,
              "members": []
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 382,
              "end": 383,
              "decorators": [],
              "name": "P",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 552,
      "end": 604,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 559,
        "end": 604,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 573,
            "end": 603,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 573,
              "end": 603,
              "decorators": [],
              "name": "nominalTypeHack",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 588,
                "end": 603,
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "start": 590,
                  "end": 603,
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 597,
                    "end": 603
                  }
                }
              }
            },
            "init": null
          }
        ],
        "declare": true,
        "kind": "const"
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 605,
      "end": 781,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 612,
        "end": 781,
        "body": {
          "type": "TSInterfaceBody",
          "start": 635,
          "end": 781,
          "body": [
            {
              "type": "TSCallSignatureDeclaration",
              "start": 641,
              "end": 752,
              "params": [
                {
                  "type": "Identifier",
                  "start": 642,
                  "end": 655,
                  "decorators": [],
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 647,
                    "end": 655,
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 649,
                      "end": 655
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 657,
                  "end": 673,
                  "decorators": [],
                  "name": "propName",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 665,
                    "end": 673,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 667,
                      "end": 673
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 675,
                  "end": 696,
                  "decorators": [],
                  "name": "componentName",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 688,
                    "end": 696,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 690,
                      "end": 696
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 698,
                  "end": 714,
                  "decorators": [],
                  "name": "location",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 706,
                    "end": 714,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 708,
                      "end": 714
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 716,
                  "end": 736,
                  "decorators": [],
                  "name": "propFullName",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 728,
                    "end": 736,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 730,
                      "end": 736
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 737,
                "end": 751,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 739,
                  "end": 751,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 739,
                      "end": 744,
                      "typeName": {
                        "type": "Identifier",
                        "start": 739,
                        "end": 744,
                        "decorators": [],
                        "name": "Error",
                        "optional": false
                      }
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 747,
                      "end": 751
                    }
                  ]
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 757,
              "end": 779,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 758,
                "end": 773,
                "decorators": [],
                "name": "nominalTypeHack",
                "optional": false
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 775,
                "end": 778,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 777,
                  "end": 778,
                  "typeName": {
                    "type": "Identifier",
                    "start": 777,
                    "end": 778,
                    "decorators": [],
                    "name": "T",
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
          "start": 622,
          "end": 631,
          "decorators": [],
          "name": "Validator",
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 631,
          "end": 634,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 632,
              "end": 633,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 632,
                "end": 633,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 782,
      "end": 1002,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 787,
        "end": 804,
        "decorators": [],
        "name": "WeakValidationMap",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 810,
        "end": 1001,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 822,
          "end": 829,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 828,
            "end": 829,
            "typeName": {
              "type": "Identifier",
              "start": 828,
              "end": 829,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 817,
          "end": 818,
          "decorators": [],
          "name": "K",
          "optional": false
        },
        "nameType": null,
        "optional": true,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 833,
          "end": 999,
          "checkType": {
            "type": "TSNullKeyword",
            "start": 833,
            "end": 837
          },
          "extendsType": {
            "type": "TSIndexedAccessType",
            "start": 846,
            "end": 850,
            "indexType": {
              "type": "TSTypeReference",
              "start": 848,
              "end": 849,
              "typeName": {
                "type": "Identifier",
                "start": 848,
                "end": 849,
                "decorators": [],
                "name": "K",
                "optional": false
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 846,
              "end": 847,
              "typeName": {
                "type": "Identifier",
                "start": 846,
                "end": 847,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          },
          "falseType": {
            "type": "TSConditionalType",
            "start": 906,
            "end": 999,
            "checkType": {
              "type": "TSUndefinedKeyword",
              "start": 906,
              "end": 915
            },
            "extendsType": {
              "type": "TSIndexedAccessType",
              "start": 924,
              "end": 928,
              "indexType": {
                "type": "TSTypeReference",
                "start": 926,
                "end": 927,
                "typeName": {
                  "type": "Identifier",
                  "start": 926,
                  "end": 927,
                  "decorators": [],
                  "name": "K",
                  "optional": false
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 924,
                "end": 925,
                "typeName": {
                  "type": "Identifier",
                  "start": 924,
                  "end": 925,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "falseType": {
              "type": "TSTypeReference",
              "start": 984,
              "end": 999,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 993,
                "end": 999,
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 994,
                    "end": 998,
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 996,
                      "end": 997,
                      "typeName": {
                        "type": "Identifier",
                        "start": 996,
                        "end": 997,
                        "decorators": [],
                        "name": "K",
                        "optional": false
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 994,
                      "end": 995,
                      "typeName": {
                        "type": "Identifier",
                        "start": 994,
                        "end": 995,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 984,
                "end": 993,
                "decorators": [],
                "name": "Validator",
                "optional": false
              }
            },
            "trueType": {
              "type": "TSTypeReference",
              "start": 939,
              "end": 973,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 948,
                "end": 973,
                "params": [
                  {
                    "type": "TSUnionType",
                    "start": 949,
                    "end": 972,
                    "types": [
                      {
                        "type": "TSIndexedAccessType",
                        "start": 949,
                        "end": 953,
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 951,
                          "end": 952,
                          "typeName": {
                            "type": "Identifier",
                            "start": 951,
                            "end": 952,
                            "decorators": [],
                            "name": "K",
                            "optional": false
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 949,
                          "end": 950,
                          "typeName": {
                            "type": "Identifier",
                            "start": 949,
                            "end": 950,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      },
                      {
                        "type": "TSNullKeyword",
                        "start": 956,
                        "end": 960
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 963,
                        "end": 972
                      }
                    ]
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 939,
                "end": 948,
                "decorators": [],
                "name": "Validator",
                "optional": false
              }
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 861,
            "end": 895,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 870,
              "end": 895,
              "params": [
                {
                  "type": "TSUnionType",
                  "start": 871,
                  "end": 894,
                  "types": [
                    {
                      "type": "TSIndexedAccessType",
                      "start": 871,
                      "end": 875,
                      "indexType": {
                        "type": "TSTypeReference",
                        "start": 873,
                        "end": 874,
                        "typeName": {
                          "type": "Identifier",
                          "start": 873,
                          "end": 874,
                          "decorators": [],
                          "name": "K",
                          "optional": false
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 871,
                        "end": 872,
                        "typeName": {
                          "type": "Identifier",
                          "start": 871,
                          "end": 872,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 878,
                      "end": 882
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 885,
                      "end": 894
                    }
                  ]
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 861,
              "end": 870,
              "decorators": [],
              "name": "Validator",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 804,
        "end": 807,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 805,
            "end": 806,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 805,
              "end": 806,
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
      "start": 1003,
      "end": 1073,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1008,
        "end": 1021,
        "decorators": [],
        "name": "ComponentType",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 1032,
        "end": 1072,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 1032,
            "end": 1049,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1046,
              "end": 1049,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 1047,
                  "end": 1048,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1047,
                    "end": 1048,
                    "decorators": [],
                    "name": "P",
                    "optional": false
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 1032,
              "end": 1046,
              "decorators": [],
              "name": "ComponentClass",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 1052,
            "end": 1072,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1069,
              "end": 1072,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 1070,
                  "end": 1071,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1070,
                    "end": 1071,
                    "decorators": [],
                    "name": "P",
                    "optional": false
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 1052,
              "end": 1069,
              "decorators": [],
              "name": "FunctionComponent",
              "optional": false
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1021,
        "end": 1029,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1022,
            "end": 1028,
            "const": false,
            "default": {
              "type": "TSTypeLiteral",
              "start": 1026,
              "end": 1028,
              "members": []
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1022,
              "end": 1023,
              "decorators": [],
              "name": "P",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1075,
      "end": 1370,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1082,
        "end": 1370,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 1087,
          "end": 1093,
          "decorators": [],
          "name": "Shared",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 1201,
          "end": 1369,
          "constraint": {
            "type": "TSTypeReference",
            "start": 1217,
            "end": 1274,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1224,
              "end": 1274,
              "params": [
                {
                  "type": "TSTypeOperator",
                  "start": 1225,
                  "end": 1244,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1231,
                    "end": 1244,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1231,
                      "end": 1244,
                      "decorators": [],
                      "name": "InjectedProps",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "TSTypeOperator",
                  "start": 1246,
                  "end": 1273,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1252,
                    "end": 1273,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1252,
                      "end": 1273,
                      "decorators": [],
                      "name": "DecorationTargetProps",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 1217,
              "end": 1224,
              "decorators": [],
              "name": "Extract",
              "optional": false
            }
          },
          "key": {
            "type": "Identifier",
            "start": 1212,
            "end": 1213,
            "decorators": [],
            "name": "P",
            "optional": false
          },
          "nameType": null,
          "optional": true,
          "typeAnnotation": {
            "type": "TSConditionalType",
            "start": 1278,
            "end": 1362,
            "checkType": {
              "type": "TSIndexedAccessType",
              "start": 1278,
              "end": 1294,
              "indexType": {
                "type": "TSTypeReference",
                "start": 1292,
                "end": 1293,
                "typeName": {
                  "type": "Identifier",
                  "start": 1292,
                  "end": 1293,
                  "decorators": [],
                  "name": "P",
                  "optional": false
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 1278,
                "end": 1291,
                "typeName": {
                  "type": "Identifier",
                  "start": 1278,
                  "end": 1291,
                  "decorators": [],
                  "name": "InjectedProps",
                  "optional": false
                }
              }
            },
            "extendsType": {
              "type": "TSIndexedAccessType",
              "start": 1303,
              "end": 1327,
              "indexType": {
                "type": "TSTypeReference",
                "start": 1325,
                "end": 1326,
                "typeName": {
                  "type": "Identifier",
                  "start": 1325,
                  "end": 1326,
                  "decorators": [],
                  "name": "P",
                  "optional": false
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 1303,
                "end": 1324,
                "typeName": {
                  "type": "Identifier",
                  "start": 1303,
                  "end": 1324,
                  "decorators": [],
                  "name": "DecorationTargetProps",
                  "optional": false
                }
              }
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 1357,
              "end": 1362
            },
            "trueType": {
              "type": "TSIndexedAccessType",
              "start": 1330,
              "end": 1354,
              "indexType": {
                "type": "TSTypeReference",
                "start": 1352,
                "end": 1353,
                "typeName": {
                  "type": "Identifier",
                  "start": 1352,
                  "end": 1353,
                  "decorators": [],
                  "name": "P",
                  "optional": false
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 1330,
                "end": 1351,
                "typeName": {
                  "type": "Identifier",
                  "start": 1330,
                  "end": 1351,
                  "decorators": [],
                  "name": "DecorationTargetProps",
                  "optional": false
                }
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1093,
          "end": 1198,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1099,
              "end": 1112,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 1099,
                "end": 1112,
                "decorators": [],
                "name": "InjectedProps",
                "optional": false
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 1118,
              "end": 1192,
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "start": 1148,
                "end": 1192,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1154,
                  "end": 1192,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1155,
                      "end": 1168,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1155,
                        "end": 1168,
                        "decorators": [],
                        "name": "InjectedProps",
                        "optional": false
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 1170,
                      "end": 1191,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1170,
                        "end": 1191,
                        "decorators": [],
                        "name": "DecorationTargetProps",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1148,
                  "end": 1154,
                  "decorators": [],
                  "name": "Shared",
                  "optional": false
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 1118,
                "end": 1139,
                "decorators": [],
                "name": "DecorationTargetProps",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1409,
      "end": 1480,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1416,
        "end": 1480,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 1421,
          "end": 1429,
          "decorators": [],
          "name": "GetProps",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 1435,
          "end": 1479,
          "checkType": {
            "type": "TSTypeReference",
            "start": 1435,
            "end": 1436,
            "typeName": {
              "type": "Identifier",
              "start": 1435,
              "end": 1436,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 1445,
            "end": 1467,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 1458,
              "end": 1467,
              "params": [
                {
                  "type": "TSInferType",
                  "start": 1459,
                  "end": 1466,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 1465,
                    "end": 1466,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 1465,
                      "end": 1466,
                      "decorators": [],
                      "name": "P",
                      "optional": false
                    },
                    "out": false
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 1445,
              "end": 1458,
              "decorators": [],
              "name": "ComponentType",
              "optional": false
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1474,
            "end": 1479
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 1470,
            "end": 1471,
            "typeName": {
              "type": "Identifier",
              "start": 1470,
              "end": 1471,
              "decorators": [],
              "name": "P",
              "optional": false
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1429,
          "end": 1432,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1430,
              "end": 1431,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 1430,
                "end": 1431,
                "decorators": [],
                "name": "C",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1482,
      "end": 1612,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1489,
        "end": 1612,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 1494,
          "end": 1517,
          "decorators": [],
          "name": "ConnectedComponentClass",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 1563,
          "end": 1611,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 1563,
              "end": 1580,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1577,
                "end": 1580,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1578,
                    "end": 1579,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1578,
                      "end": 1579,
                      "decorators": [],
                      "name": "P",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1563,
                "end": 1577,
                "decorators": [],
                "name": "ComponentClass",
                "optional": false
              }
            },
            {
              "type": "TSTypeLiteral",
              "start": 1583,
              "end": 1611,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 1589,
                  "end": 1609,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1589,
                    "end": 1605,
                    "decorators": [],
                    "name": "WrappedComponent",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1605,
                    "end": 1608,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1607,
                      "end": 1608,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1607,
                        "end": 1608,
                        "decorators": [],
                        "name": "C",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          ]
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1517,
          "end": 1560,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1523,
              "end": 1551,
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "start": 1533,
                "end": 1551,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1546,
                  "end": 1551,
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 1547,
                      "end": 1550
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1533,
                  "end": 1546,
                  "decorators": [],
                  "name": "ComponentType",
                  "optional": false
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 1523,
                "end": 1524,
                "decorators": [],
                "name": "C",
                "optional": false
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 1557,
              "end": 1558,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 1557,
                "end": 1558,
                "decorators": [],
                "name": "P",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1614,
      "end": 1915,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1621,
        "end": 1915,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 1626,
          "end": 1634,
          "decorators": [],
          "name": "Matching",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 1675,
          "end": 1914,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 1687,
            "end": 1714,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1693,
              "end": 1714,
              "typeName": {
                "type": "Identifier",
                "start": 1693,
                "end": 1714,
                "decorators": [],
                "name": "DecorationTargetProps",
                "optional": false
              }
            }
          },
          "key": {
            "type": "Identifier",
            "start": 1682,
            "end": 1683,
            "decorators": [],
            "name": "P",
            "optional": false
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSConditionalType",
            "start": 1717,
            "end": 1911,
            "checkType": {
              "type": "TSTypeReference",
              "start": 1717,
              "end": 1718,
              "typeName": {
                "type": "Identifier",
                "start": 1717,
                "end": 1718,
                "decorators": [],
                "name": "P",
                "optional": false
              }
            },
            "extendsType": {
              "type": "TSTypeOperator",
              "start": 1727,
              "end": 1746,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1733,
                "end": 1746,
                "typeName": {
                  "type": "Identifier",
                  "start": 1733,
                  "end": 1746,
                  "decorators": [],
                  "name": "InjectedProps",
                  "optional": false
                }
              }
            },
            "falseType": {
              "type": "TSIndexedAccessType",
              "start": 1887,
              "end": 1911,
              "indexType": {
                "type": "TSTypeReference",
                "start": 1909,
                "end": 1910,
                "typeName": {
                  "type": "Identifier",
                  "start": 1909,
                  "end": 1910,
                  "decorators": [],
                  "name": "P",
                  "optional": false
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 1887,
                "end": 1908,
                "typeName": {
                  "type": "Identifier",
                  "start": 1887,
                  "end": 1908,
                  "decorators": [],
                  "name": "DecorationTargetProps",
                  "optional": false
                }
              }
            },
            "trueType": {
              "type": "TSConditionalType",
              "start": 1757,
              "end": 1876,
              "checkType": {
                "type": "TSIndexedAccessType",
                "start": 1757,
                "end": 1773,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 1771,
                  "end": 1772,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1771,
                    "end": 1772,
                    "decorators": [],
                    "name": "P",
                    "optional": false
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 1757,
                  "end": 1770,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1757,
                    "end": 1770,
                    "decorators": [],
                    "name": "InjectedProps",
                    "optional": false
                  }
                }
              },
              "extendsType": {
                "type": "TSIndexedAccessType",
                "start": 1782,
                "end": 1806,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 1804,
                  "end": 1805,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1804,
                    "end": 1805,
                    "decorators": [],
                    "name": "P",
                    "optional": false
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 1782,
                  "end": 1803,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1782,
                    "end": 1803,
                    "decorators": [],
                    "name": "DecorationTargetProps",
                    "optional": false
                  }
                }
              },
              "falseType": {
                "type": "TSIndexedAccessType",
                "start": 1860,
                "end": 1876,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 1874,
                  "end": 1875,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1874,
                    "end": 1875,
                    "decorators": [],
                    "name": "P",
                    "optional": false
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 1860,
                  "end": 1873,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1860,
                    "end": 1873,
                    "decorators": [],
                    "name": "InjectedProps",
                    "optional": false
                  }
                }
              },
              "trueType": {
                "type": "TSIndexedAccessType",
                "start": 1821,
                "end": 1845,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 1843,
                  "end": 1844,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1843,
                    "end": 1844,
                    "decorators": [],
                    "name": "P",
                    "optional": false
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 1821,
                  "end": 1842,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1821,
                    "end": 1842,
                    "decorators": [],
                    "name": "DecorationTargetProps",
                    "optional": false
                  }
                }
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1634,
          "end": 1672,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1635,
              "end": 1648,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 1635,
                "end": 1648,
                "decorators": [],
                "name": "InjectedProps",
                "optional": false
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 1650,
              "end": 1671,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 1650,
                "end": 1671,
                "decorators": [],
                "name": "DecorationTargetProps",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1917,
      "end": 1987,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1924,
        "end": 1987,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 1929,
          "end": 1933,
          "decorators": [],
          "name": "Omit",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1958,
          "end": 1986,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1962,
            "end": 1986,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1963,
                "end": 1964,
                "typeName": {
                  "type": "Identifier",
                  "start": 1963,
                  "end": 1964,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 1966,
                "end": 1985,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1973,
                  "end": 1985,
                  "params": [
                    {
                      "type": "TSTypeOperator",
                      "start": 1974,
                      "end": 1981,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1980,
                        "end": 1981,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1980,
                          "end": 1981,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 1983,
                      "end": 1984,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1983,
                        "end": 1984,
                        "decorators": [],
                        "name": "K",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1966,
                  "end": 1973,
                  "decorators": [],
                  "name": "Exclude",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1958,
            "end": 1962,
            "decorators": [],
            "name": "Pick",
            "optional": false
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1933,
          "end": 1955,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1934,
              "end": 1935,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 1934,
                "end": 1935,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 1937,
              "end": 1954,
              "const": false,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 1947,
                "end": 1954,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1953,
                  "end": 1954,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1953,
                    "end": 1954,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 1937,
                "end": 1938,
                "decorators": [],
                "name": "K",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1989,
      "end": 2271,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 1996,
        "end": 2271,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 2001,
          "end": 2036,
          "decorators": [],
          "name": "InferableComponentEnhancerWithProps",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 2072,
          "end": 2270,
          "params": [
            {
              "type": "Identifier",
              "start": 2146,
              "end": 2158,
              "decorators": [],
              "name": "component",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2155,
                "end": 2158,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2157,
                  "end": 2158,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2157,
                    "end": 2158,
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  }
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 2165,
            "end": 2270,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2168,
              "end": 2270,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2191,
                "end": 2270,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2192,
                    "end": 2193,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2192,
                      "end": 2193,
                      "decorators": [],
                      "name": "C",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSIntersectionType",
                    "start": 2195,
                    "end": 2269,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 2195,
                        "end": 2255,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2199,
                          "end": 2255,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2200,
                              "end": 2211,
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 2208,
                                "end": 2211,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2209,
                                    "end": 2210,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2209,
                                      "end": 2210,
                                      "decorators": [],
                                      "name": "C",
                                      "optional": false
                                    }
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 2200,
                                "end": 2208,
                                "decorators": [],
                                "name": "GetProps",
                                "optional": false
                              }
                            },
                            {
                              "type": "TSTypeOperator",
                              "start": 2213,
                              "end": 2254,
                              "operator": "keyof",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2219,
                                "end": 2254,
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 2225,
                                  "end": 2254,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 2226,
                                      "end": 2240,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 2226,
                                        "end": 2240,
                                        "decorators": [],
                                        "name": "TInjectedProps",
                                        "optional": false
                                      }
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "start": 2242,
                                      "end": 2253,
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "start": 2250,
                                        "end": 2253,
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "start": 2251,
                                            "end": 2252,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 2251,
                                              "end": 2252,
                                              "decorators": [],
                                              "name": "C",
                                              "optional": false
                                            }
                                          }
                                        ]
                                      },
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 2242,
                                        "end": 2250,
                                        "decorators": [],
                                        "name": "GetProps",
                                        "optional": false
                                      }
                                    }
                                  ]
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2219,
                                  "end": 2225,
                                  "decorators": [],
                                  "name": "Shared",
                                  "optional": false
                                }
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 2195,
                          "end": 2199,
                          "decorators": [],
                          "name": "Omit",
                          "optional": false
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 2258,
                        "end": 2269,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2258,
                          "end": 2269,
                          "decorators": [],
                          "name": "TNeedsProps",
                          "optional": false
                        }
                      }
                    ]
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2168,
                "end": 2191,
                "decorators": [],
                "name": "ConnectedComponentClass",
                "optional": false
              }
            }
          },
          "typeParameters": {
            "type": "TSTypeParameterDeclaration",
            "start": 2072,
            "end": 2136,
            "params": [
              {
                "type": "TSTypeParameter",
                "start": 2073,
                "end": 2135,
                "const": false,
                "constraint": {
                  "type": "TSTypeReference",
                  "start": 2083,
                  "end": 2135,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 2096,
                    "end": 2135,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 2097,
                        "end": 2134,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 2105,
                          "end": 2134,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 2106,
                              "end": 2120,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2106,
                                "end": 2120,
                                "decorators": [],
                                "name": "TInjectedProps",
                                "optional": false
                              }
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 2122,
                              "end": 2133,
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 2130,
                                "end": 2133,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 2131,
                                    "end": 2132,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 2131,
                                      "end": 2132,
                                      "decorators": [],
                                      "name": "C",
                                      "optional": false
                                    }
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 2122,
                                "end": 2130,
                                "decorators": [],
                                "name": "GetProps",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 2097,
                          "end": 2105,
                          "decorators": [],
                          "name": "Matching",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 2083,
                    "end": 2096,
                    "decorators": [],
                    "name": "ComponentType",
                    "optional": false
                  }
                },
                "in": false,
                "name": {
                  "type": "Identifier",
                  "start": 2073,
                  "end": 2074,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                },
                "out": false
              }
            ]
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 2036,
          "end": 2065,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 2037,
              "end": 2051,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 2037,
                "end": 2051,
                "decorators": [],
                "name": "TInjectedProps",
                "optional": false
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 2053,
              "end": 2064,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 2053,
                "end": 2064,
                "decorators": [],
                "name": "TNeedsProps",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script"
}
```
