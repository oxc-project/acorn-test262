subtypingWithNumericIndexer.ts
```json
{
  "type": "Program",
  "start": 62,
  "end": 763,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 62,
      "end": 93,
      "body": {
        "type": "TSInterfaceBody",
        "start": 77,
        "end": 93,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 79,
            "end": 91,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 82,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 82,
              "end": 90,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 84,
                "end": 90
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 76,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 94,
      "end": 141,
      "body": {
        "type": "TSInterfaceBody",
        "start": 125,
        "end": 141,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 127,
            "end": 139,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 127,
              "end": 130,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 130,
              "end": 138,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 132,
                "end": 138
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 120,
          "end": 124,
          "expression": {
            "type": "Identifier",
            "start": 120,
            "end": 124,
            "decorators": [],
            "name": "Base",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 111,
        "decorators": [],
        "name": "Derived",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 142,
      "end": 193,
      "body": {
        "type": "TSInterfaceBody",
        "start": 177,
        "end": 193,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 179,
            "end": 191,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 179,
              "end": 182,
              "decorators": [],
              "name": "baz",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 182,
              "end": 190,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 184,
                "end": 190
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 169,
          "end": 176,
          "expression": {
            "type": "Identifier",
            "start": 169,
            "end": 176,
            "decorators": [],
            "name": "Derived",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 152,
        "end": 160,
        "decorators": [],
        "name": "Derived2",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 195,
      "end": 229,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 203,
        "end": 229,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 209,
            "end": 227,
            "parameters": [
              {
                "type": "Identifier",
                "start": 210,
                "end": 219,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 211,
                  "end": 219,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 213,
                    "end": 219
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 220,
              "end": 226,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 222,
                "end": 226,
                "typeName": {
                  "type": "Identifier",
                  "start": 222,
                  "end": 226,
                  "decorators": [],
                  "name": "Base",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 201,
        "end": 202,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 231,
      "end": 284,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 249,
        "end": 284,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 255,
            "end": 276,
            "parameters": [
              {
                "type": "Identifier",
                "start": 256,
                "end": 265,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 257,
                  "end": 265,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 259,
                    "end": 265
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 266,
              "end": 275,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 268,
                "end": 275,
                "typeName": {
                  "type": "Identifier",
                  "start": 268,
                  "end": 275,
                  "decorators": [],
                  "name": "Derived",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 237,
        "end": 238,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 247,
        "end": 248,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 286,
      "end": 341,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 305,
        "end": 341,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 311,
            "end": 333,
            "parameters": [
              {
                "type": "Identifier",
                "start": 312,
                "end": 321,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 313,
                  "end": 321,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 315,
                    "end": 321
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 322,
              "end": 332,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 324,
                "end": 332,
                "typeName": {
                  "type": "Identifier",
                  "start": 324,
                  "end": 332,
                  "decorators": [],
                  "name": "Derived2",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 292,
        "end": 294,
        "decorators": [],
        "name": "B2",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 303,
        "end": 304,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 343,
      "end": 763,
      "body": {
        "type": "TSModuleBlock",
        "start": 359,
        "end": 763,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 365,
            "end": 420,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 389,
              "end": 420,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 399,
                  "end": 414,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 400,
                      "end": 409,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 401,
                        "end": 409,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 403,
                          "end": 409
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 410,
                    "end": 413,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 412,
                      "end": 413,
                      "typeName": {
                        "type": "Identifier",
                        "start": 412,
                        "end": 413,
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
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 371,
              "end": 372,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "implements": [],
            "superClass": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 372,
              "end": 388,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 373,
                  "end": 387,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 383,
                    "end": 387,
                    "typeName": {
                      "type": "Identifier",
                      "start": 383,
                      "end": 387,
                      "decorators": [],
                      "name": "Base",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 373,
                    "end": 374,
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
            "type": "ClassDeclaration",
            "start": 426,
            "end": 493,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 450,
              "end": 493,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 460,
                  "end": 481,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 461,
                      "end": 470,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 462,
                        "end": 470,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 464,
                          "end": 470
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 471,
                    "end": 480,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 473,
                      "end": 480,
                      "typeName": {
                        "type": "Identifier",
                        "start": 473,
                        "end": 480,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 432,
              "end": 433,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 442,
              "end": 443,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 443,
              "end": 449,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 444,
                  "end": 448,
                  "typeName": {
                    "type": "Identifier",
                    "start": 444,
                    "end": 448,
                    "decorators": [],
                    "name": "Base",
                    "optional": false
                  }
                }
              ]
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 499,
            "end": 568,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 524,
              "end": 568,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 534,
                  "end": 556,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 535,
                      "end": 544,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 536,
                        "end": 544,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 538,
                          "end": 544
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 545,
                    "end": 555,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 547,
                      "end": 555,
                      "typeName": {
                        "type": "Identifier",
                        "start": 547,
                        "end": 555,
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 505,
              "end": 507,
              "decorators": [],
              "name": "B2",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 516,
              "end": 517,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 517,
              "end": 523,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 518,
                  "end": 522,
                  "typeName": {
                    "type": "Identifier",
                    "start": 518,
                    "end": 522,
                    "decorators": [],
                    "name": "Base",
                    "optional": false
                  }
                }
              ]
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 574,
            "end": 664,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 612,
              "end": 664,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 622,
                  "end": 643,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 623,
                      "end": 632,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 624,
                        "end": 632,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 626,
                          "end": 632
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 633,
                    "end": 642,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 635,
                      "end": 642,
                      "typeName": {
                        "type": "Identifier",
                        "start": 635,
                        "end": 642,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 580,
              "end": 582,
              "decorators": [],
              "name": "B3",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 607,
              "end": 608,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 608,
              "end": 611,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 609,
                  "end": 610,
                  "typeName": {
                    "type": "Identifier",
                    "start": 609,
                    "end": 610,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              ]
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 582,
              "end": 598,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 583,
                  "end": 597,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 593,
                    "end": 597,
                    "typeName": {
                      "type": "Identifier",
                      "start": 593,
                      "end": 597,
                      "decorators": [],
                      "name": "Base",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 583,
                    "end": 584,
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
            "type": "ClassDeclaration",
            "start": 670,
            "end": 761,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 708,
              "end": 761,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 718,
                  "end": 740,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 719,
                      "end": 728,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 720,
                        "end": 728,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 722,
                          "end": 728
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 729,
                    "end": 739,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 731,
                      "end": 739,
                      "typeName": {
                        "type": "Identifier",
                        "start": 731,
                        "end": 739,
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 676,
              "end": 678,
              "decorators": [],
              "name": "B4",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 703,
              "end": 704,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 704,
              "end": 707,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 705,
                  "end": 706,
                  "typeName": {
                    "type": "Identifier",
                    "start": 705,
                    "end": 706,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              ]
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 678,
              "end": 694,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 679,
                  "end": 693,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 689,
                    "end": 693,
                    "typeName": {
                      "type": "Identifier",
                      "start": 689,
                      "end": 693,
                      "decorators": [],
                      "name": "Base",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 679,
                    "end": 680,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 350,
        "end": 358,
        "decorators": [],
        "name": "Generics",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
