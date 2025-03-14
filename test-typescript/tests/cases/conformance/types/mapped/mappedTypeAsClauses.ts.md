mappedTypeAsClauses.ts
```json
{
  "type": "Program",
  "start": 31,
  "end": 5440,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 31,
      "end": 114,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 43,
        "decorators": [],
        "name": "Getters",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 49,
        "end": 113,
        "constraint": {
          "type": "TSIntersectionType",
          "start": 57,
          "end": 73,
          "types": [
            {
              "type": "TSTypeOperator",
              "start": 57,
              "end": 64,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 63,
                "end": 64,
                "typeName": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 64,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            {
              "type": "TSStringKeyword",
              "start": 67,
              "end": 73
            }
          ]
        },
        "key": {
          "type": "Identifier",
          "start": 52,
          "end": 53,
          "decorators": [],
          "name": "P",
          "optional": false
        },
        "nameType": {
          "type": "TSTemplateLiteralType",
          "start": 77,
          "end": 98,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 77,
              "end": 83,
              "tail": false,
              "value": {
                "cooked": "get",
                "raw": "get"
              }
            },
            {
              "type": "TemplateElement",
              "start": 96,
              "end": 98,
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              }
            }
          ],
          "types": [
            {
              "type": "TSTypeReference",
              "start": 83,
              "end": 96,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 93,
                "end": 96,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 94,
                    "end": 95,
                    "typeName": {
                      "type": "Identifier",
                      "start": 94,
                      "end": 95,
                      "decorators": [],
                      "name": "P",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 83,
                "end": 93,
                "decorators": [],
                "name": "Capitalize",
                "optional": false
              }
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 101,
          "end": 111,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 104,
            "end": 111,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 107,
              "end": 111,
              "indexType": {
                "type": "TSTypeReference",
                "start": 109,
                "end": 110,
                "typeName": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 110,
                  "decorators": [],
                  "name": "P",
                  "optional": false
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 107,
                "end": 108,
                "typeName": {
                  "type": "Identifier",
                  "start": 107,
                  "end": 108,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        }
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
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
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
      "start": 115,
      "end": 185,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 120,
        "end": 123,
        "decorators": [],
        "name": "TG1",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 126,
        "end": 184,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 133,
          "end": 184,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 134,
              "end": 183,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 136,
                  "end": 148,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 136,
                    "end": 139,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 139,
                    "end": 147,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 141,
                      "end": 147
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 149,
                  "end": 161,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 149,
                    "end": 152,
                    "decorators": [],
                    "name": "bar",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 152,
                    "end": 160,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 154,
                      "end": 160
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 162,
                  "end": 181,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 162,
                    "end": 165,
                    "decorators": [],
                    "name": "baz",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 165,
                    "end": 181,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 167,
                      "end": 181,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 169,
                          "end": 179,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 169,
                            "end": 170,
                            "decorators": [],
                            "name": "z",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 170,
                            "end": 179,
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 172,
                              "end": 179
                            }
                          }
                        }
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 126,
          "end": 133,
          "decorators": [],
          "name": "Getters",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 257,
      "end": 317,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 262,
        "end": 269,
        "decorators": [],
        "name": "PropDef",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 296,
        "end": 316,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 298,
            "end": 306,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 298,
              "end": 302,
              "decorators": [],
              "name": "name",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 302,
              "end": 305,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 304,
                "end": 305,
                "typeName": {
                  "type": "Identifier",
                  "start": 304,
                  "end": 305,
                  "decorators": [],
                  "name": "K",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 307,
            "end": 314,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 307,
              "end": 311,
              "decorators": [],
              "name": "type",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 311,
              "end": 314,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 313,
                "end": 314,
                "typeName": {
                  "type": "Identifier",
                  "start": 313,
                  "end": 314,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 269,
        "end": 293,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 270,
            "end": 289,
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 280,
              "end": 289,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 286,
                "end": 289
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 270,
              "end": 271,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 291,
            "end": 292,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 291,
              "end": 292,
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
      "start": 319,
      "end": 411,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 324,
        "end": 336,
        "decorators": [],
        "name": "TypeFromDefs",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 374,
        "end": 410,
        "constraint": {
          "type": "TSTypeReference",
          "start": 382,
          "end": 383,
          "typeName": {
            "type": "Identifier",
            "start": 382,
            "end": 383,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        },
        "key": {
          "type": "Identifier",
          "start": 377,
          "end": 378,
          "decorators": [],
          "name": "P",
          "optional": false
        },
        "nameType": {
          "type": "TSIndexedAccessType",
          "start": 387,
          "end": 396,
          "indexType": {
            "type": "TSLiteralType",
            "start": 389,
            "end": 395,
            "literal": {
              "type": "Literal",
              "start": 389,
              "end": 395,
              "raw": "'name'",
              "value": "name"
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 387,
            "end": 388,
            "typeName": {
              "type": "Identifier",
              "start": 387,
              "end": 388,
              "decorators": [],
              "name": "P",
              "optional": false
            }
          }
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 399,
          "end": 408,
          "indexType": {
            "type": "TSLiteralType",
            "start": 401,
            "end": 407,
            "literal": {
              "type": "Literal",
              "start": 401,
              "end": 407,
              "raw": "'type'",
              "value": "type"
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 399,
            "end": 400,
            "typeName": {
              "type": "Identifier",
              "start": 399,
              "end": 400,
              "decorators": [],
              "name": "P",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 336,
        "end": 371,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 337,
            "end": 370,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 347,
              "end": 370,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 354,
                "end": 370,
                "params": [
                  {
                    "type": "TSTypeOperator",
                    "start": 355,
                    "end": 364,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 361,
                      "end": 364
                    }
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 366,
                    "end": 369
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 347,
                "end": 354,
                "decorators": [],
                "name": "PropDef",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 337,
              "end": 338,
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
      "start": 413,
      "end": 527,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 418,
        "end": 421,
        "decorators": [],
        "name": "TP1",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 424,
        "end": 526,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 436,
          "end": 526,
          "params": [
            {
              "type": "TSUnionType",
              "start": 437,
              "end": 525,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 437,
                  "end": 464,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 439,
                      "end": 449,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 439,
                        "end": 443,
                        "decorators": [],
                        "name": "name",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 443,
                        "end": 448,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 445,
                          "end": 448,
                          "literal": {
                            "type": "Literal",
                            "start": 445,
                            "end": 448,
                            "raw": "'a'",
                            "value": "a"
                          }
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 450,
                      "end": 462,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 450,
                        "end": 454,
                        "decorators": [],
                        "name": "type",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 454,
                        "end": 462,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 456,
                          "end": 462
                        }
                      }
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 467,
                  "end": 494,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 469,
                      "end": 479,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 469,
                        "end": 473,
                        "decorators": [],
                        "name": "name",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 473,
                        "end": 478,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 475,
                          "end": 478,
                          "literal": {
                            "type": "Literal",
                            "start": 475,
                            "end": 478,
                            "raw": "'b'",
                            "value": "b"
                          }
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 480,
                      "end": 492,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 480,
                        "end": 484,
                        "decorators": [],
                        "name": "type",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 484,
                        "end": 492,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 486,
                          "end": 492
                        }
                      }
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 497,
                  "end": 525,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 499,
                      "end": 509,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 499,
                        "end": 503,
                        "decorators": [],
                        "name": "name",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 503,
                        "end": 508,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 505,
                          "end": 508,
                          "literal": {
                            "type": "Literal",
                            "start": 505,
                            "end": 508,
                            "raw": "'a'",
                            "value": "a"
                          }
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 510,
                      "end": 523,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 510,
                        "end": 514,
                        "decorators": [],
                        "name": "type",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 514,
                        "end": 523,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 516,
                          "end": 523
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 424,
          "end": 436,
          "decorators": [],
          "name": "TypeFromDefs",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 591,
      "end": 620,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 596,
        "end": 599,
        "decorators": [],
        "name": "TA1",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 602,
        "end": 619,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 609,
          "end": 619,
          "params": [
            {
              "type": "TSArrayType",
              "start": 610,
              "end": 618,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 610,
                "end": 616
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 602,
          "end": 609,
          "decorators": [],
          "name": "Getters",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 621,
      "end": 659,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 626,
        "end": 629,
        "decorators": [],
        "name": "TA2",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 632,
        "end": 658,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 639,
          "end": 658,
          "params": [
            {
              "type": "TSTupleType",
              "start": 640,
              "end": 657,
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 641,
                  "end": 647
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 649,
                  "end": 656
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 632,
          "end": 639,
          "decorators": [],
          "name": "Getters",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 695,
      "end": 775,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 700,
        "end": 707,
        "decorators": [],
        "name": "Methods",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 713,
        "end": 774,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 721,
          "end": 728,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 727,
            "end": 728,
            "typeName": {
              "type": "Identifier",
              "start": 727,
              "end": 728,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 716,
          "end": 717,
          "decorators": [],
          "name": "P",
          "optional": false
        },
        "nameType": {
          "type": "TSConditionalType",
          "start": 732,
          "end": 765,
          "checkType": {
            "type": "TSIndexedAccessType",
            "start": 732,
            "end": 736,
            "indexType": {
              "type": "TSTypeReference",
              "start": 734,
              "end": 735,
              "typeName": {
                "type": "Identifier",
                "start": 734,
                "end": 735,
                "decorators": [],
                "name": "P",
                "optional": false
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 732,
              "end": 733,
              "typeName": {
                "type": "Identifier",
                "start": 732,
                "end": 733,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 745,
            "end": 753,
            "typeName": {
              "type": "Identifier",
              "start": 745,
              "end": 753,
              "decorators": [],
              "name": "Function",
              "optional": false
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 760,
            "end": 765
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 756,
            "end": 757,
            "typeName": {
              "type": "Identifier",
              "start": 756,
              "end": 757,
              "decorators": [],
              "name": "P",
              "optional": false
            }
          }
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 768,
          "end": 772,
          "indexType": {
            "type": "TSTypeReference",
            "start": 770,
            "end": 771,
            "typeName": {
              "type": "Identifier",
              "start": 770,
              "end": 771,
              "decorators": [],
              "name": "P",
              "optional": false
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 768,
            "end": 769,
            "typeName": {
              "type": "Identifier",
              "start": 768,
              "end": 769,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 707,
        "end": 710,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 708,
            "end": 709,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 708,
              "end": 709,
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
      "start": 776,
      "end": 861,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 781,
        "end": 784,
        "decorators": [],
        "name": "TM1",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 787,
        "end": 860,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 794,
          "end": 860,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 795,
              "end": 859,
              "members": [
                {
                  "type": "TSMethodSignature",
                  "start": 797,
                  "end": 811,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 797,
                    "end": 800,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 802,
                    "end": 810,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 804,
                      "end": 810
                    }
                  },
                  "static": false
                },
                {
                  "type": "TSMethodSignature",
                  "start": 812,
                  "end": 836,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 812,
                    "end": 815,
                    "decorators": [],
                    "name": "bar",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 816,
                      "end": 825,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 817,
                        "end": 825,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 819,
                          "end": 825
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 826,
                    "end": 835,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 828,
                      "end": 835
                    }
                  },
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 837,
                  "end": 857,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 837,
                    "end": 840,
                    "decorators": [],
                    "name": "baz",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 840,
                    "end": 857,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 842,
                      "end": 857,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 842,
                          "end": 848
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 851,
                          "end": 857
                        }
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 787,
          "end": 794,
          "decorators": [],
          "name": "Methods",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 913,
      "end": 988,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 918,
        "end": 928,
        "decorators": [],
        "name": "DoubleProp",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 934,
        "end": 988,
        "constraint": {
          "type": "TSIntersectionType",
          "start": 942,
          "end": 958,
          "types": [
            {
              "type": "TSTypeOperator",
              "start": 942,
              "end": 949,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 948,
                "end": 949,
                "typeName": {
                  "type": "Identifier",
                  "start": 948,
                  "end": 949,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            {
              "type": "TSStringKeyword",
              "start": 952,
              "end": 958
            }
          ]
        },
        "key": {
          "type": "Identifier",
          "start": 937,
          "end": 938,
          "decorators": [],
          "name": "P",
          "optional": false
        },
        "nameType": {
          "type": "TSUnionType",
          "start": 962,
          "end": 979,
          "types": [
            {
              "type": "TSTemplateLiteralType",
              "start": 962,
              "end": 969,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 962,
                  "end": 965,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 966,
                  "end": 969,
                  "tail": true,
                  "value": {
                    "cooked": "1",
                    "raw": "1"
                  }
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 965,
                  "end": 966,
                  "typeName": {
                    "type": "Identifier",
                    "start": 965,
                    "end": 966,
                    "decorators": [],
                    "name": "P",
                    "optional": false
                  }
                }
              ]
            },
            {
              "type": "TSTemplateLiteralType",
              "start": 972,
              "end": 979,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 972,
                  "end": 975,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 976,
                  "end": 979,
                  "tail": true,
                  "value": {
                    "cooked": "2",
                    "raw": "2"
                  }
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 975,
                  "end": 976,
                  "typeName": {
                    "type": "Identifier",
                    "start": 975,
                    "end": 976,
                    "decorators": [],
                    "name": "P",
                    "optional": false
                  }
                }
              ]
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 982,
          "end": 986,
          "indexType": {
            "type": "TSTypeReference",
            "start": 984,
            "end": 985,
            "typeName": {
              "type": "Identifier",
              "start": 984,
              "end": 985,
              "decorators": [],
              "name": "P",
              "optional": false
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 982,
            "end": 983,
            "typeName": {
              "type": "Identifier",
              "start": 982,
              "end": 983,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 928,
        "end": 931,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 929,
            "end": 930,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 929,
              "end": 930,
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
      "start": 989,
      "end": 1037,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 994,
        "end": 997,
        "decorators": [],
        "name": "TD1",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1000,
        "end": 1036,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1010,
          "end": 1036,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 1011,
              "end": 1035,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 1013,
                  "end": 1023,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1013,
                    "end": 1014,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1014,
                    "end": 1022,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1016,
                      "end": 1022
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 1024,
                  "end": 1033,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1024,
                    "end": 1025,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1025,
                    "end": 1033,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1027,
                      "end": 1033
                    }
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1000,
          "end": 1010,
          "decorators": [],
          "name": "DoubleProp",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1093,
      "end": 1114,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1098,
        "end": 1101,
        "decorators": [],
        "name": "TD2",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 1104,
        "end": 1113,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1110,
          "end": 1113,
          "typeName": {
            "type": "Identifier",
            "start": 1110,
            "end": 1113,
            "decorators": [],
            "name": "TD1",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1145,
      "end": 1179,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1150,
        "end": 1153,
        "decorators": [],
        "name": "TD3",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 1159,
        "end": 1178,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1165,
          "end": 1178,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1175,
            "end": 1178,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 1176,
                "end": 1177,
                "typeName": {
                  "type": "Identifier",
                  "start": 1176,
                  "end": 1177,
                  "decorators": [],
                  "name": "U",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 1165,
            "end": 1175,
            "decorators": [],
            "name": "DoubleProp",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1153,
        "end": 1156,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1154,
            "end": 1155,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1154,
              "end": 1155,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1203,
      "end": 1244,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1208,
        "end": 1211,
        "decorators": [],
        "name": "TD4",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1214,
        "end": 1243,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1217,
          "end": 1243,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 1218,
              "end": 1242,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 1220,
                  "end": 1230,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1220,
                    "end": 1221,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1221,
                    "end": 1229,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1223,
                      "end": 1229
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 1231,
                  "end": 1240,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1231,
                    "end": 1232,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1232,
                    "end": 1240,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1234,
                      "end": 1240
                    }
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1214,
          "end": 1217,
          "decorators": [],
          "name": "TD3",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1298,
      "end": 1385,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1303,
        "end": 1310,
        "decorators": [],
        "name": "Lazyify",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 1316,
        "end": 1384,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 1328,
          "end": 1335,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1334,
            "end": 1335,
            "typeName": {
              "type": "Identifier",
              "start": 1334,
              "end": 1335,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 1323,
          "end": 1324,
          "decorators": [],
          "name": "K",
          "optional": false
        },
        "nameType": {
          "type": "TSTemplateLiteralType",
          "start": 1339,
          "end": 1369,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 1339,
              "end": 1345,
              "tail": false,
              "value": {
                "cooked": "get",
                "raw": "get"
              }
            },
            {
              "type": "TemplateElement",
              "start": 1367,
              "end": 1369,
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              }
            }
          ],
          "types": [
            {
              "type": "TSTypeReference",
              "start": 1345,
              "end": 1367,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1355,
                "end": 1367,
                "params": [
                  {
                    "type": "TSIntersectionType",
                    "start": 1356,
                    "end": 1366,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 1356,
                        "end": 1357,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1356,
                          "end": 1357,
                          "decorators": [],
                          "name": "K",
                          "optional": false
                        }
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 1360,
                        "end": 1366
                      }
                    ]
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1345,
                "end": 1355,
                "decorators": [],
                "name": "Capitalize",
                "optional": false
              }
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 1372,
          "end": 1382,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 1375,
            "end": 1382,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 1378,
              "end": 1382,
              "indexType": {
                "type": "TSTypeReference",
                "start": 1380,
                "end": 1381,
                "typeName": {
                  "type": "Identifier",
                  "start": 1380,
                  "end": 1381,
                  "decorators": [],
                  "name": "K",
                  "optional": false
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 1378,
                "end": 1379,
                "typeName": {
                  "type": "Identifier",
                  "start": 1378,
                  "end": 1379,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1310,
        "end": 1313,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1311,
            "end": 1312,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1311,
              "end": 1312,
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
      "start": 1387,
      "end": 1474,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1404,
        "end": 1474,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1410,
            "end": 1432,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1419,
              "end": 1423,
              "decorators": [],
              "name": "name",
              "optional": false
            },
            "optional": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1423,
              "end": 1431,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1425,
                "end": 1431
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1437,
            "end": 1449,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1437,
              "end": 1440,
              "decorators": [],
              "name": "age",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1440,
              "end": 1448,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1442,
                "end": 1448
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1454,
            "end": 1472,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1454,
              "end": 1462,
              "decorators": [],
              "name": "location",
              "optional": false
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1463,
              "end": 1471,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1465,
                "end": 1471
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1397,
        "end": 1403,
        "decorators": [],
        "name": "Person",
        "optional": false
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1476,
      "end": 1510,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1481,
        "end": 1491,
        "decorators": [],
        "name": "LazyPerson",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1494,
        "end": 1509,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1501,
          "end": 1509,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1502,
              "end": 1508,
              "typeName": {
                "type": "Identifier",
                "start": 1502,
                "end": 1508,
                "decorators": [],
                "name": "Person",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1494,
          "end": 1501,
          "decorators": [],
          "name": "Lazyify",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1534,
      "end": 1576,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1539,
        "end": 1546,
        "decorators": [],
        "name": "Example",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1549,
        "end": 1575,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1550,
            "end": 1562,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1550,
              "end": 1553,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1553,
              "end": 1561,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1555,
                "end": 1561
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1563,
            "end": 1574,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1563,
              "end": 1566,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1566,
              "end": 1574,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1568,
                "end": 1574
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1578,
      "end": 1664,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1583,
        "end": 1598,
        "decorators": [],
        "name": "PickByValueType",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 1607,
        "end": 1663,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 1617,
          "end": 1624,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1623,
            "end": 1624,
            "typeName": {
              "type": "Identifier",
              "start": 1623,
              "end": 1624,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 1612,
          "end": 1613,
          "decorators": [],
          "name": "K",
          "optional": false
        },
        "nameType": {
          "type": "TSConditionalType",
          "start": 1628,
          "end": 1654,
          "checkType": {
            "type": "TSIndexedAccessType",
            "start": 1628,
            "end": 1632,
            "indexType": {
              "type": "TSTypeReference",
              "start": 1630,
              "end": 1631,
              "typeName": {
                "type": "Identifier",
                "start": 1630,
                "end": 1631,
                "decorators": [],
                "name": "K",
                "optional": false
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 1628,
              "end": 1629,
              "typeName": {
                "type": "Identifier",
                "start": 1628,
                "end": 1629,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 1641,
            "end": 1642,
            "typeName": {
              "type": "Identifier",
              "start": 1641,
              "end": 1642,
              "decorators": [],
              "name": "U",
              "optional": false
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1649,
            "end": 1654
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 1645,
            "end": 1646,
            "typeName": {
              "type": "Identifier",
              "start": 1645,
              "end": 1646,
              "decorators": [],
              "name": "K",
              "optional": false
            }
          }
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 1657,
          "end": 1661,
          "indexType": {
            "type": "TSTypeReference",
            "start": 1659,
            "end": 1660,
            "typeName": {
              "type": "Identifier",
              "start": 1659,
              "end": 1660,
              "decorators": [],
              "name": "K",
              "optional": false
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 1657,
            "end": 1658,
            "typeName": {
              "type": "Identifier",
              "start": 1657,
              "end": 1658,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1598,
        "end": 1604,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1599,
            "end": 1600,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1599,
              "end": 1600,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1602,
            "end": 1603,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1602,
              "end": 1603,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1666,
      "end": 1709,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1671,
        "end": 1673,
        "decorators": [],
        "name": "T1",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1676,
        "end": 1708,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1691,
          "end": 1708,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1692,
              "end": 1699,
              "typeName": {
                "type": "Identifier",
                "start": 1692,
                "end": 1699,
                "decorators": [],
                "name": "Example",
                "optional": false
              }
            },
            {
              "type": "TSStringKeyword",
              "start": 1701,
              "end": 1707
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 1676,
          "end": 1691,
          "decorators": [],
          "name": "PickByValueType",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1710,
      "end": 1746,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1716,
          "end": 1745,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1716,
            "end": 1722,
            "decorators": [],
            "name": "e1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1718,
              "end": 1722,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1720,
                "end": 1722,
                "typeName": {
                  "type": "Identifier",
                  "start": 1720,
                  "end": 1722,
                  "decorators": [],
                  "name": "T1",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1725,
            "end": 1745,
            "properties": [
              {
                "type": "Property",
                "start": 1731,
                "end": 1743,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1731,
                  "end": 1734,
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
                  "start": 1736,
                  "end": 1743,
                  "raw": "\"hello\"",
                  "value": "hello"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1747,
      "end": 1766,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1752,
        "end": 1754,
        "decorators": [],
        "name": "T2",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 1757,
        "end": 1765,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1763,
          "end": 1765,
          "typeName": {
            "type": "Identifier",
            "start": 1763,
            "end": 1765,
            "decorators": [],
            "name": "T1",
            "optional": false
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1767,
      "end": 1788,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1773,
          "end": 1787,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1773,
            "end": 1779,
            "decorators": [],
            "name": "e2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1775,
              "end": 1779,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1777,
                "end": 1779,
                "typeName": {
                  "type": "Identifier",
                  "start": 1777,
                  "end": 1779,
                  "decorators": [],
                  "name": "T2",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 1782,
            "end": 1787,
            "raw": "\"foo\"",
            "value": "foo"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1812,
      "end": 1907,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1826,
        "end": 1907,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1832,
            "end": 1845,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1832,
              "end": 1836,
              "decorators": [],
              "name": "name",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1836,
              "end": 1844,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1838,
                "end": 1844
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1850,
            "end": 1864,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1850,
              "end": 1855,
              "decorators": [],
              "name": "seats",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1855,
              "end": 1863,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1857,
                "end": 1863
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1869,
            "end": 1884,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1869,
              "end": 1875,
              "decorators": [],
              "name": "engine",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1875,
              "end": 1883,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1877,
                "end": 1883,
                "typeName": {
                  "type": "Identifier",
                  "start": 1877,
                  "end": 1883,
                  "decorators": [],
                  "name": "Engine",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1889,
            "end": 1905,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1889,
              "end": 1895,
              "decorators": [],
              "name": "wheels",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1895,
              "end": 1904,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 1897,
                "end": 1904,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 1897,
                  "end": 1902,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1897,
                    "end": 1902,
                    "decorators": [],
                    "name": "Wheel",
                    "optional": false
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
        "start": 1822,
        "end": 1825,
        "decorators": [],
        "name": "Car",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1909,
      "end": 1979,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1926,
        "end": 1979,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1932,
            "end": 1953,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1932,
              "end": 1944,
              "decorators": [],
              "name": "manufacturer",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1944,
              "end": 1952,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1946,
                "end": 1952
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1958,
            "end": 1977,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1958,
              "end": 1968,
              "decorators": [],
              "name": "horsepower",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1968,
              "end": 1976,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1970,
                "end": 1976
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1919,
        "end": 1925,
        "decorators": [],
        "name": "Engine",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1981,
      "end": 2051,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1997,
        "end": 2051,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2003,
            "end": 2029,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2003,
              "end": 2007,
              "decorators": [],
              "name": "type",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2007,
              "end": 2028,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2009,
                "end": 2028,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 2009,
                    "end": 2017,
                    "literal": {
                      "type": "Literal",
                      "start": 2009,
                      "end": 2017,
                      "raw": "\"summer\"",
                      "value": "summer"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 2020,
                    "end": 2028,
                    "literal": {
                      "type": "Literal",
                      "start": 2020,
                      "end": 2028,
                      "raw": "\"winter\"",
                      "value": "winter"
                    }
                  }
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2034,
            "end": 2049,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2034,
              "end": 2040,
              "decorators": [],
              "name": "radius",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2040,
              "end": 2048,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2042,
                "end": 2048
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1991,
        "end": 1996,
        "decorators": [],
        "name": "Wheel",
        "optional": false
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2053,
      "end": 2096,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2058,
        "end": 2067,
        "decorators": [],
        "name": "Primitive",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 2070,
        "end": 2095,
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 2070,
            "end": 2076
          },
          {
            "type": "TSNumberKeyword",
            "start": 2079,
            "end": 2085
          },
          {
            "type": "TSBooleanKeyword",
            "start": 2088,
            "end": 2095
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2097,
      "end": 2185,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2102,
        "end": 2116,
        "decorators": [],
        "name": "OnlyPrimitives",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 2122,
        "end": 2184,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 2130,
          "end": 2137,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 2136,
            "end": 2137,
            "typeName": {
              "type": "Identifier",
              "start": 2136,
              "end": 2137,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 2125,
          "end": 2126,
          "decorators": [],
          "name": "K",
          "optional": false
        },
        "nameType": {
          "type": "TSConditionalType",
          "start": 2141,
          "end": 2175,
          "checkType": {
            "type": "TSIndexedAccessType",
            "start": 2141,
            "end": 2145,
            "indexType": {
              "type": "TSTypeReference",
              "start": 2143,
              "end": 2144,
              "typeName": {
                "type": "Identifier",
                "start": 2143,
                "end": 2144,
                "decorators": [],
                "name": "K",
                "optional": false
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 2141,
              "end": 2142,
              "typeName": {
                "type": "Identifier",
                "start": 2141,
                "end": 2142,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 2154,
            "end": 2163,
            "typeName": {
              "type": "Identifier",
              "start": 2154,
              "end": 2163,
              "decorators": [],
              "name": "Primitive",
              "optional": false
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 2170,
            "end": 2175
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 2166,
            "end": 2167,
            "typeName": {
              "type": "Identifier",
              "start": 2166,
              "end": 2167,
              "decorators": [],
              "name": "K",
              "optional": false
            }
          }
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 2178,
          "end": 2182,
          "indexType": {
            "type": "TSTypeReference",
            "start": 2180,
            "end": 2181,
            "typeName": {
              "type": "Identifier",
              "start": 2180,
              "end": 2181,
              "decorators": [],
              "name": "K",
              "optional": false
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 2178,
            "end": 2179,
            "typeName": {
              "type": "Identifier",
              "start": 2178,
              "end": 2179,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2116,
        "end": 2119,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2117,
            "end": 2118,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2117,
              "end": 2118,
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
      "type": "VariableDeclaration",
      "start": 2187,
      "end": 2225,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2191,
          "end": 2224,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2191,
            "end": 2224,
            "decorators": [],
            "name": "primitiveCar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2203,
              "end": 2224,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2205,
                "end": 2224,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2219,
                  "end": 2224,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 2220,
                      "end": 2223,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2220,
                        "end": 2223,
                        "decorators": [],
                        "name": "Car",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 2205,
                  "end": 2219,
                  "decorators": [],
                  "name": "OnlyPrimitives",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 2263,
      "end": 2299,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2267,
          "end": 2298,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2267,
            "end": 2298,
            "decorators": [],
            "name": "keys",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2271,
              "end": 2298,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 2273,
                "end": 2298,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2279,
                  "end": 2298,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 2293,
                    "end": 2298,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 2294,
                        "end": 2297,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2294,
                          "end": 2297,
                          "decorators": [],
                          "name": "Car",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 2279,
                    "end": 2293,
                    "decorators": [],
                    "name": "OnlyPrimitives",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2323,
      "end": 2374,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2328,
        "end": 2344,
        "decorators": [],
        "name": "KeysOfPrimitives",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 2350,
        "end": 2373,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2356,
          "end": 2373,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2370,
            "end": 2373,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 2371,
                "end": 2372,
                "typeName": {
                  "type": "Identifier",
                  "start": 2371,
                  "end": 2372,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 2356,
            "end": 2370,
            "decorators": [],
            "name": "OnlyPrimitives",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2344,
        "end": 2347,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2345,
            "end": 2346,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2345,
              "end": 2346,
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
      "type": "VariableDeclaration",
      "start": 2376,
      "end": 2411,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2380,
          "end": 2410,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2380,
            "end": 2410,
            "decorators": [],
            "name": "carKeys",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2387,
              "end": 2410,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2389,
                "end": 2410,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2405,
                  "end": 2410,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 2406,
                      "end": 2409,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2406,
                        "end": 2409,
                        "decorators": [],
                        "name": "Car",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 2389,
                  "end": 2405,
                  "decorators": [],
                  "name": "KeysOfPrimitives",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2456,
      "end": 2560,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2461,
        "end": 2466,
        "decorators": [],
        "name": "Equal",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 2475,
        "end": 2559,
        "checkType": {
          "type": "TSFunctionType",
          "start": 2476,
          "end": 2504,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 2482,
            "end": 2504,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "start": 2485,
              "end": 2504,
              "checkType": {
                "type": "TSTypeReference",
                "start": 2485,
                "end": 2486,
                "typeName": {
                  "type": "Identifier",
                  "start": 2485,
                  "end": 2486,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              },
              "extendsType": {
                "type": "TSTypeReference",
                "start": 2495,
                "end": 2496,
                "typeName": {
                  "type": "Identifier",
                  "start": 2495,
                  "end": 2496,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              },
              "falseType": {
                "type": "TSLiteralType",
                "start": 2503,
                "end": 2504,
                "literal": {
                  "type": "Literal",
                  "start": 2503,
                  "end": 2504,
                  "raw": "2",
                  "value": 2
                }
              },
              "trueType": {
                "type": "TSLiteralType",
                "start": 2499,
                "end": 2500,
                "literal": {
                  "type": "Literal",
                  "start": 2499,
                  "end": 2500,
                  "raw": "1",
                  "value": 1
                }
              }
            }
          },
          "typeParameters": {
            "type": "TSTypeParameterDeclaration",
            "start": 2476,
            "end": 2479,
            "params": [
              {
                "type": "TSTypeParameter",
                "start": 2477,
                "end": 2478,
                "const": false,
                "in": false,
                "name": {
                  "type": "Identifier",
                  "start": 2477,
                  "end": 2478,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                },
                "out": false
              }
            ]
          }
        },
        "extendsType": {
          "type": "TSFunctionType",
          "start": 2515,
          "end": 2543,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 2521,
            "end": 2543,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "start": 2524,
              "end": 2543,
              "checkType": {
                "type": "TSTypeReference",
                "start": 2524,
                "end": 2525,
                "typeName": {
                  "type": "Identifier",
                  "start": 2524,
                  "end": 2525,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              },
              "extendsType": {
                "type": "TSTypeReference",
                "start": 2534,
                "end": 2535,
                "typeName": {
                  "type": "Identifier",
                  "start": 2534,
                  "end": 2535,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              },
              "falseType": {
                "type": "TSLiteralType",
                "start": 2542,
                "end": 2543,
                "literal": {
                  "type": "Literal",
                  "start": 2542,
                  "end": 2543,
                  "raw": "2",
                  "value": 2
                }
              },
              "trueType": {
                "type": "TSLiteralType",
                "start": 2538,
                "end": 2539,
                "literal": {
                  "type": "Literal",
                  "start": 2538,
                  "end": 2539,
                  "raw": "1",
                  "value": 1
                }
              }
            }
          },
          "typeParameters": {
            "type": "TSTypeParameterDeclaration",
            "start": 2515,
            "end": 2518,
            "params": [
              {
                "type": "TSTypeParameter",
                "start": 2516,
                "end": 2517,
                "const": false,
                "in": false,
                "name": {
                  "type": "Identifier",
                  "start": 2516,
                  "end": 2517,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                },
                "out": false
              }
            ]
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 2554,
          "end": 2559,
          "literal": {
            "type": "Literal",
            "start": 2554,
            "end": 2559,
            "raw": "false",
            "value": false
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 2547,
          "end": 2551,
          "literal": {
            "type": "Literal",
            "start": 2547,
            "end": 2551,
            "raw": "true",
            "value": true
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2466,
        "end": 2472,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2467,
            "end": 2468,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2467,
              "end": 2468,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2470,
            "end": 2471,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2470,
              "end": 2471,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2562,
      "end": 2638,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2567,
        "end": 2569,
        "decorators": [],
        "name": "If",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 2606,
        "end": 2637,
        "checkType": {
          "type": "TSTypeReference",
          "start": 2606,
          "end": 2610,
          "typeName": {
            "type": "Identifier",
            "start": 2606,
            "end": 2610,
            "decorators": [],
            "name": "Cond",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSLiteralType",
          "start": 2619,
          "end": 2623,
          "literal": {
            "type": "Literal",
            "start": 2619,
            "end": 2623,
            "raw": "true",
            "value": true
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 2633,
          "end": 2637,
          "typeName": {
            "type": "Identifier",
            "start": 2633,
            "end": 2637,
            "decorators": [],
            "name": "Else",
            "optional": false
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 2626,
          "end": 2630,
          "typeName": {
            "type": "Identifier",
            "start": 2626,
            "end": 2630,
            "decorators": [],
            "name": "Then",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2569,
        "end": 2603,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2570,
            "end": 2590,
            "const": false,
            "constraint": {
              "type": "TSBooleanKeyword",
              "start": 2583,
              "end": 2590
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2570,
              "end": 2574,
              "decorators": [],
              "name": "Cond",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2592,
            "end": 2596,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2592,
              "end": 2596,
              "decorators": [],
              "name": "Then",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2598,
            "end": 2602,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2598,
              "end": 2602,
              "decorators": [],
              "name": "Else",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2640,
      "end": 2736,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2645,
        "end": 2651,
        "decorators": [],
        "name": "GetKey",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 2660,
        "end": 2735,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 2666,
          "end": 2735,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 2675,
            "end": 2682,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2681,
              "end": 2682,
              "typeName": {
                "type": "Identifier",
                "start": 2681,
                "end": 2682,
                "decorators": [],
                "name": "S",
                "optional": false
              }
            }
          },
          "key": {
            "type": "Identifier",
            "start": 2669,
            "end": 2671,
            "decorators": [],
            "name": "TP",
            "optional": false
          },
          "nameType": {
            "type": "TSConditionalType",
            "start": 2686,
            "end": 2727,
            "checkType": {
              "type": "TSTypeReference",
              "start": 2686,
              "end": 2701,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2691,
                "end": 2701,
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 2692,
                    "end": 2697,
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 2694,
                      "end": 2696,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2694,
                        "end": 2696,
                        "decorators": [],
                        "name": "TP",
                        "optional": false
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 2692,
                      "end": 2693,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2692,
                        "end": 2693,
                        "decorators": [],
                        "name": "S",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2699,
                    "end": 2700,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2699,
                      "end": 2700,
                      "decorators": [],
                      "name": "V",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 2686,
                "end": 2691,
                "decorators": [],
                "name": "Equal",
                "optional": false
              }
            },
            "extendsType": {
              "type": "TSLiteralType",
              "start": 2710,
              "end": 2714,
              "literal": {
                "type": "Literal",
                "start": 2710,
                "end": 2714,
                "raw": "true",
                "value": true
              }
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 2722,
              "end": 2727
            },
            "trueType": {
              "type": "TSTypeReference",
              "start": 2717,
              "end": 2719,
              "typeName": {
                "type": "Identifier",
                "start": 2717,
                "end": 2719,
                "decorators": [],
                "name": "TP",
                "optional": false
              }
            }
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 2730,
            "end": 2733
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2651,
        "end": 2657,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2652,
            "end": 2653,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2652,
              "end": 2653,
              "decorators": [],
              "name": "S",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2655,
            "end": 2656,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2655,
              "end": 2656,
              "decorators": [],
              "name": "V",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2738,
      "end": 2829,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2743,
        "end": 2755,
        "decorators": [],
        "name": "GetKeyWithIf",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 2764,
        "end": 2828,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 2770,
          "end": 2828,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 2779,
            "end": 2786,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2785,
              "end": 2786,
              "typeName": {
                "type": "Identifier",
                "start": 2785,
                "end": 2786,
                "decorators": [],
                "name": "S",
                "optional": false
              }
            }
          },
          "key": {
            "type": "Identifier",
            "start": 2773,
            "end": 2775,
            "decorators": [],
            "name": "TP",
            "optional": false
          },
          "nameType": {
            "type": "TSTypeReference",
            "start": 2790,
            "end": 2820,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 2792,
              "end": 2820,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 2793,
                  "end": 2808,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 2798,
                    "end": 2808,
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "start": 2799,
                        "end": 2804,
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 2801,
                          "end": 2803,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2801,
                            "end": 2803,
                            "decorators": [],
                            "name": "TP",
                            "optional": false
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 2799,
                          "end": 2800,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2799,
                            "end": 2800,
                            "decorators": [],
                            "name": "S",
                            "optional": false
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 2806,
                        "end": 2807,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2806,
                          "end": 2807,
                          "decorators": [],
                          "name": "V",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 2793,
                    "end": 2798,
                    "decorators": [],
                    "name": "Equal",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 2810,
                  "end": 2812,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2810,
                    "end": 2812,
                    "decorators": [],
                    "name": "TP",
                    "optional": false
                  }
                },
                {
                  "type": "TSNeverKeyword",
                  "start": 2814,
                  "end": 2819
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 2790,
              "end": 2792,
              "decorators": [],
              "name": "If",
              "optional": false
            }
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 2823,
            "end": 2826
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2755,
        "end": 2761,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2756,
            "end": 2757,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2756,
              "end": 2757,
              "decorators": [],
              "name": "S",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2759,
            "end": 2760,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2759,
              "end": 2760,
              "decorators": [],
              "name": "V",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2831,
      "end": 2916,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2836,
        "end": 2848,
        "decorators": [],
        "name": "GetObjWithIf",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 2857,
        "end": 2915,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 2866,
          "end": 2873,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 2872,
            "end": 2873,
            "typeName": {
              "type": "Identifier",
              "start": 2872,
              "end": 2873,
              "decorators": [],
              "name": "S",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 2860,
          "end": 2862,
          "decorators": [],
          "name": "TP",
          "optional": false
        },
        "nameType": {
          "type": "TSTypeReference",
          "start": 2877,
          "end": 2907,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2879,
            "end": 2907,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 2880,
                "end": 2895,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 2885,
                  "end": 2895,
                  "params": [
                    {
                      "type": "TSIndexedAccessType",
                      "start": 2886,
                      "end": 2891,
                      "indexType": {
                        "type": "TSTypeReference",
                        "start": 2888,
                        "end": 2890,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2888,
                          "end": 2890,
                          "decorators": [],
                          "name": "TP",
                          "optional": false
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 2886,
                        "end": 2887,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2886,
                          "end": 2887,
                          "decorators": [],
                          "name": "S",
                          "optional": false
                        }
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 2893,
                      "end": 2894,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2893,
                        "end": 2894,
                        "decorators": [],
                        "name": "V",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 2880,
                  "end": 2885,
                  "decorators": [],
                  "name": "Equal",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 2897,
                "end": 2899,
                "typeName": {
                  "type": "Identifier",
                  "start": 2897,
                  "end": 2899,
                  "decorators": [],
                  "name": "TP",
                  "optional": false
                }
              },
              {
                "type": "TSNeverKeyword",
                "start": 2901,
                "end": 2906
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 2877,
            "end": 2879,
            "decorators": [],
            "name": "If",
            "optional": false
          }
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 2910,
          "end": 2913
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2848,
        "end": 2854,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2849,
            "end": 2850,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2849,
              "end": 2850,
              "decorators": [],
              "name": "S",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2852,
            "end": 2853,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2852,
              "end": 2853,
              "decorators": [],
              "name": "V",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2918,
      "end": 2953,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2923,
        "end": 2927,
        "decorators": [],
        "name": "Task",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 2930,
        "end": 2952,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 2934,
            "end": 2950,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2934,
              "end": 2940,
              "decorators": [],
              "name": "isDone",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2940,
              "end": 2949,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2942,
                "end": 2949
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2955,
      "end": 3036,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2960,
        "end": 2966,
        "decorators": [],
        "name": "Schema",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 2969,
        "end": 3035,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 2973,
            "end": 3019,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2973,
              "end": 2977,
              "decorators": [],
              "name": "root",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2977,
              "end": 3019,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 2979,
                "end": 3019,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 2985,
                    "end": 2999,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2985,
                      "end": 2990,
                      "decorators": [],
                      "name": "title",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2990,
                      "end": 2998,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2992,
                        "end": 2998
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 3004,
                    "end": 3015,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3004,
                      "end": 3008,
                      "decorators": [],
                      "name": "task",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3008,
                      "end": 3014,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3010,
                        "end": 3014,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3010,
                          "end": 3014,
                          "decorators": [],
                          "name": "Task",
                          "optional": false
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 3022,
            "end": 3033,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3022,
              "end": 3026,
              "decorators": [],
              "name": "Task",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3026,
              "end": 3032,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3028,
                "end": 3032,
                "typeName": {
                  "type": "Identifier",
                  "start": 3028,
                  "end": 3032,
                  "decorators": [],
                  "name": "Task",
                  "optional": false
                }
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3038,
      "end": 3089,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3043,
        "end": 3047,
        "decorators": [],
        "name": "Res1",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 3050,
        "end": 3088,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 3056,
          "end": 3088,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 3057,
              "end": 3063,
              "typeName": {
                "type": "Identifier",
                "start": 3057,
                "end": 3063,
                "decorators": [],
                "name": "Schema",
                "optional": false
              }
            },
            {
              "type": "TSIndexedAccessType",
              "start": 3065,
              "end": 3087,
              "indexType": {
                "type": "TSLiteralType",
                "start": 3080,
                "end": 3086,
                "literal": {
                  "type": "Literal",
                  "start": 3080,
                  "end": 3086,
                  "raw": "'task'",
                  "value": "task"
                }
              },
              "objectType": {
                "type": "TSIndexedAccessType",
                "start": 3065,
                "end": 3079,
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 3072,
                  "end": 3078,
                  "literal": {
                    "type": "Literal",
                    "start": 3072,
                    "end": 3078,
                    "raw": "'root'",
                    "value": "root"
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 3065,
                  "end": 3071,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3065,
                    "end": 3071,
                    "decorators": [],
                    "name": "Schema",
                    "optional": false
                  }
                }
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 3050,
          "end": 3056,
          "decorators": [],
          "name": "GetKey",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3101,
      "end": 3158,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3106,
        "end": 3110,
        "decorators": [],
        "name": "Res2",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 3113,
        "end": 3157,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 3125,
          "end": 3157,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 3126,
              "end": 3132,
              "typeName": {
                "type": "Identifier",
                "start": 3126,
                "end": 3132,
                "decorators": [],
                "name": "Schema",
                "optional": false
              }
            },
            {
              "type": "TSIndexedAccessType",
              "start": 3134,
              "end": 3156,
              "indexType": {
                "type": "TSLiteralType",
                "start": 3149,
                "end": 3155,
                "literal": {
                  "type": "Literal",
                  "start": 3149,
                  "end": 3155,
                  "raw": "'task'",
                  "value": "task"
                }
              },
              "objectType": {
                "type": "TSIndexedAccessType",
                "start": 3134,
                "end": 3148,
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 3141,
                  "end": 3147,
                  "literal": {
                    "type": "Literal",
                    "start": 3141,
                    "end": 3147,
                    "raw": "'root'",
                    "value": "root"
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 3134,
                  "end": 3140,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3134,
                    "end": 3140,
                    "decorators": [],
                    "name": "Schema",
                    "optional": false
                  }
                }
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 3113,
          "end": 3125,
          "decorators": [],
          "name": "GetKeyWithIf",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3170,
      "end": 3233,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3175,
        "end": 3179,
        "decorators": [],
        "name": "Res3",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 3182,
        "end": 3232,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3188,
          "end": 3232,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3200,
            "end": 3232,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 3201,
                "end": 3207,
                "typeName": {
                  "type": "Identifier",
                  "start": 3201,
                  "end": 3207,
                  "decorators": [],
                  "name": "Schema",
                  "optional": false
                }
              },
              {
                "type": "TSIndexedAccessType",
                "start": 3209,
                "end": 3231,
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 3224,
                  "end": 3230,
                  "literal": {
                    "type": "Literal",
                    "start": 3224,
                    "end": 3230,
                    "raw": "'task'",
                    "value": "task"
                  }
                },
                "objectType": {
                  "type": "TSIndexedAccessType",
                  "start": 3209,
                  "end": 3223,
                  "indexType": {
                    "type": "TSLiteralType",
                    "start": 3216,
                    "end": 3222,
                    "literal": {
                      "type": "Literal",
                      "start": 3216,
                      "end": 3222,
                      "raw": "'root'",
                      "value": "root"
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 3209,
                    "end": 3215,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3209,
                      "end": 3215,
                      "decorators": [],
                      "name": "Schema",
                      "optional": false
                    }
                  }
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 3188,
            "end": 3200,
            "decorators": [],
            "name": "GetObjWithIf",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3268,
      "end": 3358,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3273,
        "end": 3287,
        "decorators": [],
        "name": "KeysExtendedBy",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 3296,
        "end": 3357,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 3302,
          "end": 3357,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 3310,
            "end": 3317,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3316,
              "end": 3317,
              "typeName": {
                "type": "Identifier",
                "start": 3316,
                "end": 3317,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          },
          "key": {
            "type": "Identifier",
            "start": 3305,
            "end": 3306,
            "decorators": [],
            "name": "K",
            "optional": false
          },
          "nameType": {
            "type": "TSConditionalType",
            "start": 3321,
            "end": 3347,
            "checkType": {
              "type": "TSTypeReference",
              "start": 3321,
              "end": 3322,
              "typeName": {
                "type": "Identifier",
                "start": 3321,
                "end": 3322,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            },
            "extendsType": {
              "type": "TSIndexedAccessType",
              "start": 3331,
              "end": 3335,
              "indexType": {
                "type": "TSTypeReference",
                "start": 3333,
                "end": 3334,
                "typeName": {
                  "type": "Identifier",
                  "start": 3333,
                  "end": 3334,
                  "decorators": [],
                  "name": "K",
                  "optional": false
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 3331,
                "end": 3332,
                "typeName": {
                  "type": "Identifier",
                  "start": 3331,
                  "end": 3332,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 3342,
              "end": 3347
            },
            "trueType": {
              "type": "TSTypeReference",
              "start": 3338,
              "end": 3339,
              "typeName": {
                "type": "Identifier",
                "start": 3338,
                "end": 3339,
                "decorators": [],
                "name": "K",
                "optional": false
              }
            }
          },
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "start": 3351,
            "end": 3355,
            "indexType": {
              "type": "TSTypeReference",
              "start": 3353,
              "end": 3354,
              "typeName": {
                "type": "Identifier",
                "start": 3353,
                "end": 3354,
                "decorators": [],
                "name": "K",
                "optional": false
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 3351,
              "end": 3352,
              "typeName": {
                "type": "Identifier",
                "start": 3351,
                "end": 3352,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3287,
        "end": 3293,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3288,
            "end": 3289,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3288,
              "end": 3289,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3291,
            "end": 3292,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3291,
              "end": 3292,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 3360,
      "end": 3406,
      "body": {
        "type": "TSInterfaceBody",
        "start": 3372,
        "end": 3406,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 3378,
            "end": 3389,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3378,
              "end": 3379,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3379,
              "end": 3388,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 3381,
                "end": 3388
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 3394,
            "end": 3404,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3394,
              "end": 3395,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3395,
              "end": 3403,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3397,
                "end": 3403
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 3370,
        "end": 3371,
        "decorators": [],
        "name": "M",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 3408,
      "end": 3466,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 3449,
        "end": 3466,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 3455,
            "end": 3464,
            "argument": {
              "type": "Identifier",
              "start": 3462,
              "end": 3463,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3417,
        "end": 3418,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3419,
          "end": 3447,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3420,
            "end": 3447,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3422,
              "end": 3447,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3436,
                "end": 3447,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3437,
                    "end": 3438,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3437,
                      "end": 3438,
                      "decorators": [],
                      "name": "M",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 3440,
                    "end": 3446
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 3422,
                "end": 3436,
                "decorators": [],
                "name": "KeysExtendedBy",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 3468,
      "end": 3475,
      "expression": {
        "type": "CallExpression",
        "start": 3468,
        "end": 3474,
        "arguments": [
          {
            "type": "Literal",
            "start": 3470,
            "end": 3473,
            "raw": "\"a\"",
            "value": "a"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 3468,
          "end": 3469,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3510,
      "end": 3558,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3515,
        "end": 3522,
        "decorators": [],
        "name": "NameMap",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 3525,
        "end": 3557,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 3527,
            "end": 3536,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 3527,
              "end": 3530,
              "raw": "'a'",
              "value": "a"
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3530,
              "end": 3535,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 3532,
                "end": 3535,
                "literal": {
                  "type": "Literal",
                  "start": 3532,
                  "end": 3535,
                  "raw": "'x'",
                  "value": "x"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 3537,
            "end": 3546,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 3537,
              "end": 3540,
              "raw": "'b'",
              "value": "b"
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3540,
              "end": 3545,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 3542,
                "end": 3545,
                "literal": {
                  "type": "Literal",
                  "start": 3542,
                  "end": 3545,
                  "raw": "'y'",
                  "value": "y"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 3547,
            "end": 3555,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 3547,
              "end": 3550,
              "raw": "'c'",
              "value": "c"
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3550,
              "end": 3555,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 3552,
                "end": 3555,
                "literal": {
                  "type": "Literal",
                  "start": 3552,
                  "end": 3555,
                  "raw": "'z'",
                  "value": "z"
                }
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3597,
      "end": 3671,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3602,
        "end": 3605,
        "decorators": [],
        "name": "TS0",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 3611,
        "end": 3670,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 3617,
          "end": 3670,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 3625,
            "end": 3632,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3631,
              "end": 3632,
              "typeName": {
                "type": "Identifier",
                "start": 3631,
                "end": 3632,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          },
          "key": {
            "type": "Identifier",
            "start": 3620,
            "end": 3621,
            "decorators": [],
            "name": "P",
            "optional": false
          },
          "nameType": {
            "type": "TSTypeOperator",
            "start": 3636,
            "end": 3659,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3642,
              "end": 3659,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3648,
                "end": 3659,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3649,
                    "end": 3650,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3649,
                      "end": 3650,
                      "decorators": [],
                      "name": "P",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 3652,
                    "end": 3658
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 3642,
                "end": 3648,
                "decorators": [],
                "name": "Record",
                "optional": false
              }
            }
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 3662,
            "end": 3668
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3605,
        "end": 3608,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3606,
            "end": 3607,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3606,
              "end": 3607,
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
      "start": 3672,
      "end": 3750,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3677,
        "end": 3680,
        "decorators": [],
        "name": "TS1",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 3686,
        "end": 3749,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 3692,
          "end": 3749,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 3700,
            "end": 3707,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3706,
              "end": 3707,
              "typeName": {
                "type": "Identifier",
                "start": 3706,
                "end": 3707,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          },
          "key": {
            "type": "Identifier",
            "start": 3695,
            "end": 3696,
            "decorators": [],
            "name": "P",
            "optional": false
          },
          "nameType": {
            "type": "TSTypeReference",
            "start": 3711,
            "end": 3738,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 3718,
              "end": 3738,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 3719,
                  "end": 3720,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3719,
                    "end": 3720,
                    "decorators": [],
                    "name": "P",
                    "optional": false
                  }
                },
                {
                  "type": "TSUnionType",
                  "start": 3722,
                  "end": 3737,
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "start": 3722,
                      "end": 3725,
                      "literal": {
                        "type": "Literal",
                        "start": 3722,
                        "end": 3725,
                        "raw": "'a'",
                        "value": "a"
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 3728,
                      "end": 3731,
                      "literal": {
                        "type": "Literal",
                        "start": 3728,
                        "end": 3731,
                        "raw": "'b'",
                        "value": "b"
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 3734,
                      "end": 3737,
                      "literal": {
                        "type": "Literal",
                        "start": 3734,
                        "end": 3737,
                        "raw": "'c'",
                        "value": "c"
                      }
                    }
                  ]
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 3711,
              "end": 3718,
              "decorators": [],
              "name": "Extract",
              "optional": false
            }
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 3741,
            "end": 3747
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3680,
        "end": 3683,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3681,
            "end": 3682,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3681,
              "end": 3682,
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
      "start": 3751,
      "end": 3823,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3756,
        "end": 3759,
        "decorators": [],
        "name": "TS2",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 3765,
        "end": 3822,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 3771,
          "end": 3822,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 3779,
            "end": 3786,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3785,
              "end": 3786,
              "typeName": {
                "type": "Identifier",
                "start": 3785,
                "end": 3786,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          },
          "key": {
            "type": "Identifier",
            "start": 3774,
            "end": 3775,
            "decorators": [],
            "name": "P",
            "optional": false
          },
          "nameType": {
            "type": "TSIntersectionType",
            "start": 3790,
            "end": 3811,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 3790,
                "end": 3791,
                "typeName": {
                  "type": "Identifier",
                  "start": 3790,
                  "end": 3791,
                  "decorators": [],
                  "name": "P",
                  "optional": false
                }
              },
              {
                "type": "TSUnionType",
                "start": 3795,
                "end": 3810,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 3795,
                    "end": 3798,
                    "literal": {
                      "type": "Literal",
                      "start": 3795,
                      "end": 3798,
                      "raw": "'a'",
                      "value": "a"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 3801,
                    "end": 3804,
                    "literal": {
                      "type": "Literal",
                      "start": 3801,
                      "end": 3804,
                      "raw": "'b'",
                      "value": "b"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 3807,
                    "end": 3810,
                    "literal": {
                      "type": "Literal",
                      "start": 3807,
                      "end": 3810,
                      "raw": "'c'",
                      "value": "c"
                    }
                  }
                ]
              }
            ]
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 3814,
            "end": 3820
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3759,
        "end": 3762,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3760,
            "end": 3761,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3760,
              "end": 3761,
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
      "start": 3824,
      "end": 3902,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3829,
        "end": 3832,
        "decorators": [],
        "name": "TS3",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 3838,
        "end": 3901,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 3844,
          "end": 3901,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 3852,
            "end": 3859,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3858,
              "end": 3859,
              "typeName": {
                "type": "Identifier",
                "start": 3858,
                "end": 3859,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          },
          "key": {
            "type": "Identifier",
            "start": 3847,
            "end": 3848,
            "decorators": [],
            "name": "P",
            "optional": false
          },
          "nameType": {
            "type": "TSTypeReference",
            "start": 3863,
            "end": 3890,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 3870,
              "end": 3890,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 3871,
                  "end": 3872,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3871,
                    "end": 3872,
                    "decorators": [],
                    "name": "P",
                    "optional": false
                  }
                },
                {
                  "type": "TSUnionType",
                  "start": 3874,
                  "end": 3889,
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "start": 3874,
                      "end": 3877,
                      "literal": {
                        "type": "Literal",
                        "start": 3874,
                        "end": 3877,
                        "raw": "'a'",
                        "value": "a"
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 3880,
                      "end": 3883,
                      "literal": {
                        "type": "Literal",
                        "start": 3880,
                        "end": 3883,
                        "raw": "'b'",
                        "value": "b"
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 3886,
                      "end": 3889,
                      "literal": {
                        "type": "Literal",
                        "start": 3886,
                        "end": 3889,
                        "raw": "'c'",
                        "value": "c"
                      }
                    }
                  ]
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 3863,
              "end": 3870,
              "decorators": [],
              "name": "Exclude",
              "optional": false
            }
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 3893,
            "end": 3899
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3832,
        "end": 3835,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3833,
            "end": 3834,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3833,
              "end": 3834,
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
      "start": 3903,
      "end": 3980,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3908,
        "end": 3911,
        "decorators": [],
        "name": "TS4",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 3917,
        "end": 3979,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 3923,
          "end": 3979,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 3931,
            "end": 3938,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3937,
              "end": 3938,
              "typeName": {
                "type": "Identifier",
                "start": 3937,
                "end": 3938,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          },
          "key": {
            "type": "Identifier",
            "start": 3926,
            "end": 3927,
            "decorators": [],
            "name": "P",
            "optional": false
          },
          "nameType": {
            "type": "TSIndexedAccessType",
            "start": 3942,
            "end": 3968,
            "indexType": {
              "type": "TSIntersectionType",
              "start": 3950,
              "end": 3967,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 3950,
                  "end": 3951,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3950,
                    "end": 3951,
                    "decorators": [],
                    "name": "P",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeOperator",
                  "start": 3954,
                  "end": 3967,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3960,
                    "end": 3967,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3960,
                      "end": 3967,
                      "decorators": [],
                      "name": "NameMap",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 3942,
              "end": 3949,
              "typeName": {
                "type": "Identifier",
                "start": 3942,
                "end": 3949,
                "decorators": [],
                "name": "NameMap",
                "optional": false
              }
            }
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 3971,
            "end": 3977
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3911,
        "end": 3914,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3912,
            "end": 3913,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3912,
              "end": 3913,
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
      "start": 3981,
      "end": 4058,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3986,
        "end": 3989,
        "decorators": [],
        "name": "TS5",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 3995,
        "end": 4057,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 4001,
          "end": 4057,
          "constraint": {
            "type": "TSIntersectionType",
            "start": 4009,
            "end": 4032,
            "types": [
              {
                "type": "TSTypeOperator",
                "start": 4009,
                "end": 4016,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 4015,
                  "end": 4016,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4015,
                    "end": 4016,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              },
              {
                "type": "TSTypeOperator",
                "start": 4019,
                "end": 4032,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 4025,
                  "end": 4032,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4025,
                    "end": 4032,
                    "decorators": [],
                    "name": "NameMap",
                    "optional": false
                  }
                }
              }
            ]
          },
          "key": {
            "type": "Identifier",
            "start": 4004,
            "end": 4005,
            "decorators": [],
            "name": "P",
            "optional": false
          },
          "nameType": {
            "type": "TSIndexedAccessType",
            "start": 4036,
            "end": 4046,
            "indexType": {
              "type": "TSTypeReference",
              "start": 4044,
              "end": 4045,
              "typeName": {
                "type": "Identifier",
                "start": 4044,
                "end": 4045,
                "decorators": [],
                "name": "P",
                "optional": false
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 4036,
              "end": 4043,
              "typeName": {
                "type": "Identifier",
                "start": 4036,
                "end": 4043,
                "decorators": [],
                "name": "NameMap",
                "optional": false
              }
            }
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 4049,
            "end": 4055
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3989,
        "end": 3992,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3990,
            "end": 3991,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3990,
              "end": 3991,
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
      "start": 4059,
      "end": 4146,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 4064,
        "end": 4067,
        "decorators": [],
        "name": "TS6",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 4079,
        "end": 4145,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 4085,
          "end": 4145,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 4094,
            "end": 4101,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4100,
              "end": 4101,
              "typeName": {
                "type": "Identifier",
                "start": 4100,
                "end": 4101,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          },
          "key": {
            "type": "Identifier",
            "start": 4089,
            "end": 4090,
            "decorators": [],
            "name": "K",
            "optional": false
          },
          "nameType": {
            "type": "TSIntersectionType",
            "start": 4105,
            "end": 4134,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 4105,
                "end": 4106,
                "typeName": {
                  "type": "Identifier",
                  "start": 4105,
                  "end": 4106,
                  "decorators": [],
                  "name": "V",
                  "optional": false
                }
              },
              {
                "type": "TSConditionalType",
                "start": 4110,
                "end": 4133,
                "checkType": {
                  "type": "TSTypeReference",
                  "start": 4110,
                  "end": 4111,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4110,
                    "end": 4111,
                    "decorators": [],
                    "name": "K",
                    "optional": false
                  }
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "start": 4120,
                  "end": 4121,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4120,
                    "end": 4121,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  }
                },
                "falseType": {
                  "type": "TSNeverKeyword",
                  "start": 4128,
                  "end": 4133
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "start": 4124,
                  "end": 4125,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4124,
                    "end": 4125,
                    "decorators": [],
                    "name": "K",
                    "optional": false
                  }
                }
              }
            ]
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 4137,
            "end": 4143
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4067,
        "end": 4076,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4068,
            "end": 4069,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4068,
              "end": 4069,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 4071,
            "end": 4072,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4071,
              "end": 4072,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 4074,
            "end": 4075,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4074,
              "end": 4075,
              "decorators": [],
              "name": "V",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4190,
      "end": 4272,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 4195,
        "end": 4198,
        "decorators": [],
        "name": "TN0",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 4204,
        "end": 4271,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 4210,
          "end": 4271,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 4218,
            "end": 4225,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4224,
              "end": 4225,
              "typeName": {
                "type": "Identifier",
                "start": 4224,
                "end": 4225,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          },
          "key": {
            "type": "Identifier",
            "start": 4213,
            "end": 4214,
            "decorators": [],
            "name": "P",
            "optional": false
          },
          "nameType": {
            "type": "TSConditionalType",
            "start": 4229,
            "end": 4260,
            "checkType": {
              "type": "TSIndexedAccessType",
              "start": 4229,
              "end": 4233,
              "indexType": {
                "type": "TSTypeReference",
                "start": 4231,
                "end": 4232,
                "typeName": {
                  "type": "Identifier",
                  "start": 4231,
                  "end": 4232,
                  "decorators": [],
                  "name": "P",
                  "optional": false
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 4229,
                "end": 4230,
                "typeName": {
                  "type": "Identifier",
                  "start": 4229,
                  "end": 4230,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "extendsType": {
              "type": "TSNumberKeyword",
              "start": 4242,
              "end": 4248
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 4255,
              "end": 4260
            },
            "trueType": {
              "type": "TSTypeReference",
              "start": 4251,
              "end": 4252,
              "typeName": {
                "type": "Identifier",
                "start": 4251,
                "end": 4252,
                "decorators": [],
                "name": "P",
                "optional": false
              }
            }
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 4263,
            "end": 4269
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4198,
        "end": 4201,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4199,
            "end": 4200,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4199,
              "end": 4200,
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
      "start": 4273,
      "end": 4355,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 4278,
        "end": 4281,
        "decorators": [],
        "name": "TN1",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 4287,
        "end": 4354,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 4293,
          "end": 4354,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 4301,
            "end": 4308,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4307,
              "end": 4308,
              "typeName": {
                "type": "Identifier",
                "start": 4307,
                "end": 4308,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          },
          "key": {
            "type": "Identifier",
            "start": 4296,
            "end": 4297,
            "decorators": [],
            "name": "P",
            "optional": false
          },
          "nameType": {
            "type": "TSConditionalType",
            "start": 4312,
            "end": 4343,
            "checkType": {
              "type": "TSNumberKeyword",
              "start": 4312,
              "end": 4318
            },
            "extendsType": {
              "type": "TSIndexedAccessType",
              "start": 4327,
              "end": 4331,
              "indexType": {
                "type": "TSTypeReference",
                "start": 4329,
                "end": 4330,
                "typeName": {
                  "type": "Identifier",
                  "start": 4329,
                  "end": 4330,
                  "decorators": [],
                  "name": "P",
                  "optional": false
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 4327,
                "end": 4328,
                "typeName": {
                  "type": "Identifier",
                  "start": 4327,
                  "end": 4328,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 4338,
              "end": 4343
            },
            "trueType": {
              "type": "TSTypeReference",
              "start": 4334,
              "end": 4335,
              "typeName": {
                "type": "Identifier",
                "start": 4334,
                "end": 4335,
                "decorators": [],
                "name": "P",
                "optional": false
              }
            }
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 4346,
            "end": 4352
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4281,
        "end": 4284,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4282,
            "end": 4283,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4282,
              "end": 4283,
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
      "start": 4356,
      "end": 4432,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 4361,
        "end": 4364,
        "decorators": [],
        "name": "TN2",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 4370,
        "end": 4431,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 4376,
          "end": 4431,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 4384,
            "end": 4391,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4390,
              "end": 4391,
              "typeName": {
                "type": "Identifier",
                "start": 4390,
                "end": 4391,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          },
          "key": {
            "type": "Identifier",
            "start": 4379,
            "end": 4380,
            "decorators": [],
            "name": "P",
            "optional": false
          },
          "nameType": {
            "type": "TSConditionalType",
            "start": 4395,
            "end": 4420,
            "checkType": {
              "type": "TSLiteralType",
              "start": 4395,
              "end": 4398,
              "literal": {
                "type": "Literal",
                "start": 4395,
                "end": 4398,
                "raw": "'a'",
                "value": "a"
              }
            },
            "extendsType": {
              "type": "TSTypeReference",
              "start": 4407,
              "end": 4408,
              "typeName": {
                "type": "Identifier",
                "start": 4407,
                "end": 4408,
                "decorators": [],
                "name": "P",
                "optional": false
              }
            },
            "falseType": {
              "type": "TSLiteralType",
              "start": 4417,
              "end": 4420,
              "literal": {
                "type": "Literal",
                "start": 4417,
                "end": 4420,
                "raw": "'y'",
                "value": "y"
              }
            },
            "trueType": {
              "type": "TSLiteralType",
              "start": 4411,
              "end": 4414,
              "literal": {
                "type": "Literal",
                "start": 4411,
                "end": 4414,
                "raw": "'x'",
                "value": "x"
              }
            }
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 4423,
            "end": 4429
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4364,
        "end": 4367,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4365,
            "end": 4366,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4365,
              "end": 4366,
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
      "start": 4433,
      "end": 4527,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 4438,
        "end": 4441,
        "decorators": [],
        "name": "TN3",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 4447,
        "end": 4526,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 4453,
          "end": 4526,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 4461,
            "end": 4468,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4467,
              "end": 4468,
              "typeName": {
                "type": "Identifier",
                "start": 4467,
                "end": 4468,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          },
          "key": {
            "type": "Identifier",
            "start": 4456,
            "end": 4457,
            "decorators": [],
            "name": "P",
            "optional": false
          },
          "nameType": {
            "type": "TSTypeReference",
            "start": 4472,
            "end": 4515,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 4479,
              "end": 4515,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 4480,
                  "end": 4509,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 4487,
                    "end": 4509,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 4488,
                        "end": 4503,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 4495,
                          "end": 4503,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 4496,
                              "end": 4497,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4496,
                                "end": 4497,
                                "decorators": [],
                                "name": "P",
                                "optional": false
                              }
                            },
                            {
                              "type": "TSLiteralType",
                              "start": 4499,
                              "end": 4502,
                              "literal": {
                                "type": "Literal",
                                "start": 4499,
                                "end": 4502,
                                "raw": "'c'",
                                "value": "c"
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 4488,
                          "end": 4495,
                          "decorators": [],
                          "name": "Exclude",
                          "optional": false
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 4505,
                        "end": 4508,
                        "literal": {
                          "type": "Literal",
                          "start": 4505,
                          "end": 4508,
                          "raw": "'b'",
                          "value": "b"
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 4480,
                    "end": 4487,
                    "decorators": [],
                    "name": "Exclude",
                    "optional": false
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 4511,
                  "end": 4514,
                  "literal": {
                    "type": "Literal",
                    "start": 4511,
                    "end": 4514,
                    "raw": "'a'",
                    "value": "a"
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 4472,
              "end": 4479,
              "decorators": [],
              "name": "Exclude",
              "optional": false
            }
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 4518,
            "end": 4524
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4441,
        "end": 4444,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4442,
            "end": 4443,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4442,
              "end": 4443,
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
      "start": 4528,
      "end": 4635,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 4533,
        "end": 4536,
        "decorators": [],
        "name": "TN4",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 4545,
        "end": 4634,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 4551,
          "end": 4634,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 4559,
            "end": 4566,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4565,
              "end": 4566,
              "typeName": {
                "type": "Identifier",
                "start": 4565,
                "end": 4566,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          },
          "key": {
            "type": "Identifier",
            "start": 4554,
            "end": 4555,
            "decorators": [],
            "name": "K",
            "optional": false
          },
          "nameType": {
            "type": "TSConditionalType",
            "start": 4570,
            "end": 4623,
            "checkType": {
              "type": "TSConditionalType",
              "start": 4571,
              "end": 4597,
              "checkType": {
                "type": "TSTypeReference",
                "start": 4571,
                "end": 4572,
                "typeName": {
                  "type": "Identifier",
                  "start": 4571,
                  "end": 4572,
                  "decorators": [],
                  "name": "K",
                  "optional": false
                }
              },
              "extendsType": {
                "type": "TSTypeReference",
                "start": 4581,
                "end": 4582,
                "typeName": {
                  "type": "Identifier",
                  "start": 4581,
                  "end": 4582,
                  "decorators": [],
                  "name": "U",
                  "optional": false
                }
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 4592,
                "end": 4597
              },
              "trueType": {
                "type": "TSIndexedAccessType",
                "start": 4585,
                "end": 4589,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 4587,
                  "end": 4588,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4587,
                    "end": 4588,
                    "decorators": [],
                    "name": "K",
                    "optional": false
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 4585,
                  "end": 4586,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4585,
                    "end": 4586,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            },
            "extendsType": {
              "type": "TSIndexedAccessType",
              "start": 4607,
              "end": 4611,
              "indexType": {
                "type": "TSTypeReference",
                "start": 4609,
                "end": 4610,
                "typeName": {
                  "type": "Identifier",
                  "start": 4609,
                  "end": 4610,
                  "decorators": [],
                  "name": "K",
                  "optional": false
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 4607,
                "end": 4608,
                "typeName": {
                  "type": "Identifier",
                  "start": 4607,
                  "end": 4608,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 4618,
              "end": 4623
            },
            "trueType": {
              "type": "TSTypeReference",
              "start": 4614,
              "end": 4615,
              "typeName": {
                "type": "Identifier",
                "start": 4614,
                "end": 4615,
                "decorators": [],
                "name": "K",
                "optional": false
              }
            }
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 4626,
            "end": 4632
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4536,
        "end": 4542,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4537,
            "end": 4538,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4537,
              "end": 4538,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 4540,
            "end": 4541,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4540,
              "end": 4541,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4636,
      "end": 4744,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 4641,
        "end": 4644,
        "decorators": [],
        "name": "TN5",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 4653,
        "end": 4743,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 4659,
          "end": 4743,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 4667,
            "end": 4674,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4673,
              "end": 4674,
              "typeName": {
                "type": "Identifier",
                "start": 4673,
                "end": 4674,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          },
          "key": {
            "type": "Identifier",
            "start": 4662,
            "end": 4663,
            "decorators": [],
            "name": "K",
            "optional": false
          },
          "nameType": {
            "type": "TSTypeOperator",
            "start": 4678,
            "end": 4732,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 4684,
              "end": 4732,
              "constraint": {
                "type": "TSTypeReference",
                "start": 4692,
                "end": 4693,
                "typeName": {
                  "type": "Identifier",
                  "start": 4692,
                  "end": 4693,
                  "decorators": [],
                  "name": "K",
                  "optional": false
                }
              },
              "key": {
                "type": "Identifier",
                "start": 4687,
                "end": 4688,
                "decorators": [],
                "name": "P",
                "optional": false
              },
              "nameType": {
                "type": "TSConditionalType",
                "start": 4697,
                "end": 4723,
                "checkType": {
                  "type": "TSIndexedAccessType",
                  "start": 4697,
                  "end": 4701,
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 4699,
                    "end": 4700,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4699,
                      "end": 4700,
                      "decorators": [],
                      "name": "P",
                      "optional": false
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 4697,
                    "end": 4698,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4697,
                      "end": 4698,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "start": 4710,
                  "end": 4711,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4710,
                    "end": 4711,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  }
                },
                "falseType": {
                  "type": "TSNeverKeyword",
                  "start": 4718,
                  "end": 4723
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "start": 4714,
                  "end": 4715,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4714,
                    "end": 4715,
                    "decorators": [],
                    "name": "K",
                    "optional": false
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 4726,
                "end": 4730,
                "literal": {
                  "type": "Literal",
                  "start": 4726,
                  "end": 4730,
                  "raw": "true",
                  "value": true
                }
              }
            }
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 4735,
            "end": 4741
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4644,
        "end": 4650,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4645,
            "end": 4646,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4645,
              "end": 4646,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 4648,
            "end": 4649,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4648,
              "end": 4649,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4813,
      "end": 4993,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 4818,
        "end": 4823,
        "decorators": [],
        "name": "Fruit",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 4828,
        "end": 4992,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 4830,
            "end": 4878,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 4838,
                "end": 4852,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 4838,
                  "end": 4842,
                  "decorators": [],
                  "name": "name",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4842,
                  "end": 4851,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 4844,
                    "end": 4851,
                    "literal": {
                      "type": "Literal",
                      "start": 4844,
                      "end": 4851,
                      "raw": "\"apple\"",
                      "value": "apple"
                    }
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 4859,
                "end": 4872,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 4859,
                  "end": 4864,
                  "decorators": [],
                  "name": "color",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4864,
                  "end": 4871,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 4866,
                    "end": 4871,
                    "literal": {
                      "type": "Literal",
                      "start": 4866,
                      "end": 4871,
                      "raw": "\"red\"",
                      "value": "red"
                    }
                  }
                }
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 4883,
            "end": 4935,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 4891,
                "end": 4906,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 4891,
                  "end": 4895,
                  "decorators": [],
                  "name": "name",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4895,
                  "end": 4905,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 4897,
                    "end": 4905,
                    "literal": {
                      "type": "Literal",
                      "start": 4897,
                      "end": 4905,
                      "raw": "\"banana\"",
                      "value": "banana"
                    }
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 4913,
                "end": 4929,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 4913,
                  "end": 4918,
                  "decorators": [],
                  "name": "color",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4918,
                  "end": 4928,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 4920,
                    "end": 4928,
                    "literal": {
                      "type": "Literal",
                      "start": 4920,
                      "end": 4928,
                      "raw": "\"yellow\"",
                      "value": "yellow"
                    }
                  }
                }
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 4940,
            "end": 4992,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 4948,
                "end": 4963,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 4948,
                  "end": 4952,
                  "decorators": [],
                  "name": "name",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4952,
                  "end": 4962,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 4954,
                    "end": 4962,
                    "literal": {
                      "type": "Literal",
                      "start": 4954,
                      "end": 4962,
                      "raw": "\"orange\"",
                      "value": "orange"
                    }
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 4970,
                "end": 4986,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 4970,
                  "end": 4975,
                  "decorators": [],
                  "name": "color",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4975,
                  "end": 4985,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 4977,
                    "end": 4985,
                    "literal": {
                      "type": "Literal",
                      "start": 4977,
                      "end": 4985,
                      "raw": "\"orange\"",
                      "value": "orange"
                    }
                  }
                }
              }
            ]
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4994,
      "end": 5131,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 4999,
        "end": 5006,
        "decorators": [],
        "name": "Result1",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 5069,
        "end": 5130,
        "constraint": {
          "type": "TSTypeReference",
          "start": 5081,
          "end": 5082,
          "typeName": {
            "type": "Identifier",
            "start": 5081,
            "end": 5082,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        },
        "key": {
          "type": "Identifier",
          "start": 5074,
          "end": 5077,
          "decorators": [],
          "name": "Key",
          "optional": false
        },
        "nameType": {
          "type": "TSTemplateLiteralType",
          "start": 5086,
          "end": 5118,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 5086,
              "end": 5089,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 5100,
              "end": 5104,
              "tail": false,
              "value": {
                "cooked": ":",
                "raw": ":"
              }
            },
            {
              "type": "TemplateElement",
              "start": 5116,
              "end": 5118,
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              }
            }
          ],
          "types": [
            {
              "type": "TSIndexedAccessType",
              "start": 5089,
              "end": 5100,
              "indexType": {
                "type": "TSLiteralType",
                "start": 5093,
                "end": 5099,
                "literal": {
                  "type": "Literal",
                  "start": 5093,
                  "end": 5099,
                  "raw": "'name'",
                  "value": "name"
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 5089,
                "end": 5092,
                "typeName": {
                  "type": "Identifier",
                  "start": 5089,
                  "end": 5092,
                  "decorators": [],
                  "name": "Key",
                  "optional": false
                }
              }
            },
            {
              "type": "TSIndexedAccessType",
              "start": 5104,
              "end": 5116,
              "indexType": {
                "type": "TSLiteralType",
                "start": 5108,
                "end": 5115,
                "literal": {
                  "type": "Literal",
                  "start": 5108,
                  "end": 5115,
                  "raw": "'color'",
                  "value": "color"
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 5104,
                "end": 5107,
                "typeName": {
                  "type": "Identifier",
                  "start": 5104,
                  "end": 5107,
                  "decorators": [],
                  "name": "Key",
                  "optional": false
                }
              }
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 5121,
          "end": 5128
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5006,
        "end": 5066,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5007,
            "end": 5065,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 5017,
              "end": 5065,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 5018,
                  "end": 5040,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 5018,
                    "end": 5022,
                    "decorators": [],
                    "name": "name",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5022,
                    "end": 5039,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 5024,
                      "end": 5039,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 5024,
                          "end": 5030
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 5033,
                          "end": 5039
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 5041,
                  "end": 5063,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 5041,
                    "end": 5046,
                    "decorators": [],
                    "name": "color",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5046,
                    "end": 5063,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 5048,
                      "end": 5063,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 5048,
                          "end": 5054
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 5057,
                          "end": 5063
                        }
                      ]
                    }
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 5007,
              "end": 5008,
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
      "start": 5133,
      "end": 5275,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5138,
        "end": 5145,
        "decorators": [],
        "name": "Result2",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 5208,
        "end": 5275,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 5214,
          "end": 5275,
          "constraint": {
            "type": "TSTypeReference",
            "start": 5226,
            "end": 5227,
            "typeName": {
              "type": "Identifier",
              "start": 5226,
              "end": 5227,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          },
          "key": {
            "type": "Identifier",
            "start": 5219,
            "end": 5222,
            "decorators": [],
            "name": "Key",
            "optional": false
          },
          "nameType": {
            "type": "TSTemplateLiteralType",
            "start": 5231,
            "end": 5263,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 5231,
                "end": 5234,
                "tail": false,
                "value": {
                  "cooked": "",
                  "raw": ""
                }
              },
              {
                "type": "TemplateElement",
                "start": 5245,
                "end": 5249,
                "tail": false,
                "value": {
                  "cooked": ":",
                  "raw": ":"
                }
              },
              {
                "type": "TemplateElement",
                "start": 5261,
                "end": 5263,
                "tail": true,
                "value": {
                  "cooked": "",
                  "raw": ""
                }
              }
            ],
            "types": [
              {
                "type": "TSIndexedAccessType",
                "start": 5234,
                "end": 5245,
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 5238,
                  "end": 5244,
                  "literal": {
                    "type": "Literal",
                    "start": 5238,
                    "end": 5244,
                    "raw": "'name'",
                    "value": "name"
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 5234,
                  "end": 5237,
                  "typeName": {
                    "type": "Identifier",
                    "start": 5234,
                    "end": 5237,
                    "decorators": [],
                    "name": "Key",
                    "optional": false
                  }
                }
              },
              {
                "type": "TSIndexedAccessType",
                "start": 5249,
                "end": 5261,
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 5253,
                  "end": 5260,
                  "literal": {
                    "type": "Literal",
                    "start": 5253,
                    "end": 5260,
                    "raw": "'color'",
                    "value": "color"
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 5249,
                  "end": 5252,
                  "typeName": {
                    "type": "Identifier",
                    "start": 5249,
                    "end": 5252,
                    "decorators": [],
                    "name": "Key",
                    "optional": false
                  }
                }
              }
            ]
          },
          "typeAnnotation": {
            "type": "TSUnknownKeyword",
            "start": 5266,
            "end": 5273
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5145,
        "end": 5205,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5146,
            "end": 5204,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 5156,
              "end": 5204,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 5157,
                  "end": 5179,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 5157,
                    "end": 5161,
                    "decorators": [],
                    "name": "name",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5161,
                    "end": 5178,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 5163,
                      "end": 5178,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 5163,
                          "end": 5169
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 5172,
                          "end": 5178
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 5180,
                  "end": 5202,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 5180,
                    "end": 5185,
                    "decorators": [],
                    "name": "color",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5185,
                    "end": 5202,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 5187,
                      "end": 5202,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 5187,
                          "end": 5193
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 5196,
                          "end": 5202
                        }
                      ]
                    }
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 5146,
              "end": 5147,
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
      "start": 5276,
      "end": 5309,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5281,
        "end": 5286,
        "decorators": [],
        "name": "Test1",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 5289,
        "end": 5309,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 5295,
          "end": 5309,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 5302,
            "end": 5309,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 5303,
                "end": 5308,
                "typeName": {
                  "type": "Identifier",
                  "start": 5303,
                  "end": 5308,
                  "decorators": [],
                  "name": "Fruit",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 5295,
            "end": 5302,
            "decorators": [],
            "name": "Result1",
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 5361,
      "end": 5388,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5366,
        "end": 5371,
        "decorators": [],
        "name": "Test2",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 5374,
        "end": 5388,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 5381,
          "end": 5388,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 5382,
              "end": 5387,
              "typeName": {
                "type": "Identifier",
                "start": 5382,
                "end": 5387,
                "decorators": [],
                "name": "Fruit",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 5374,
          "end": 5381,
          "decorators": [],
          "name": "Result2",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
