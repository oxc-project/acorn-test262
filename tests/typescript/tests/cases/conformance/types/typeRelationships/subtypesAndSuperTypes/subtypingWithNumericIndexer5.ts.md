__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 62,
  "end": 883,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 62,
      "end": 93,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 76,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 82,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 82,
              "end": 90,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 84,
                "end": 90
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
      "start": 94,
      "end": 141,
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 111,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 127,
              "end": 130,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 130,
              "end": 138,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 132,
                "end": 138
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
      "start": 142,
      "end": 193,
      "id": {
        "type": "Identifier",
        "start": 152,
        "end": 160,
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 179,
              "end": 182,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 182,
              "end": 190,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 184,
                "end": 190
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
      "start": 195,
      "end": 236,
      "id": {
        "type": "Identifier",
        "start": 205,
        "end": 206,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 207,
        "end": 236,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 213,
            "end": 234,
            "parameters": [
              {
                "type": "Identifier",
                "start": 214,
                "end": 223,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 215,
                  "end": 223,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 217,
                    "end": 223
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 224,
              "end": 233,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 226,
                "end": 233,
                "typeName": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 233,
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "typeAnnotation": null
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
      "type": "ClassDeclaration",
      "start": 238,
      "end": 294,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 244,
        "end": 245,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 257,
          "end": 258,
          "expression": {
            "type": "Identifier",
            "start": 257,
            "end": 258,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 259,
        "end": 294,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 265,
            "end": 283,
            "parameters": [
              {
                "type": "Identifier",
                "start": 266,
                "end": 275,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 267,
                  "end": 275,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 269,
                    "end": 275
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 276,
              "end": 282,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 278,
                "end": 282,
                "typeName": {
                  "type": "Identifier",
                  "start": 278,
                  "end": 282,
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null
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
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 296,
      "end": 354,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 302,
        "end": 304,
        "decorators": [],
        "name": "B2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 316,
          "end": 317,
          "expression": {
            "type": "Identifier",
            "start": 316,
            "end": 317,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 318,
        "end": 354,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 324,
            "end": 346,
            "parameters": [
              {
                "type": "Identifier",
                "start": 325,
                "end": 334,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 326,
                  "end": 334,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 328,
                    "end": 334
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 335,
              "end": 345,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 337,
                "end": 345,
                "typeName": {
                  "type": "Identifier",
                  "start": 337,
                  "end": 345,
                  "decorators": [],
                  "name": "Derived2",
                  "optional": false,
                  "typeAnnotation": null
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
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 356,
      "end": 883,
      "id": {
        "type": "Identifier",
        "start": 363,
        "end": 371,
        "decorators": [],
        "name": "Generics",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 372,
        "end": 883,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 378,
            "end": 437,
            "id": {
              "type": "Identifier",
              "start": 388,
              "end": 389,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 389,
              "end": 405,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 390,
                  "end": 404,
                  "name": {
                    "type": "Identifier",
                    "start": 390,
                    "end": 391,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 400,
                    "end": 404,
                    "typeName": {
                      "type": "Identifier",
                      "start": 400,
                      "end": 404,
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
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
              "start": 406,
              "end": 437,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 416,
                  "end": 431,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 417,
                      "end": 426,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 418,
                        "end": 426,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 420,
                          "end": 426
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 427,
                    "end": 430,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 429,
                      "end": 430,
                      "typeName": {
                        "type": "Identifier",
                        "start": 429,
                        "end": 430,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
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
            "type": "ClassDeclaration",
            "start": 443,
            "end": 513,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 449,
              "end": 450,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 462,
                "end": 469,
                "expression": {
                  "type": "Identifier",
                  "start": 462,
                  "end": 463,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 463,
                  "end": 469,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 464,
                      "end": 468,
                      "typeName": {
                        "type": "Identifier",
                        "start": 464,
                        "end": 468,
                        "decorators": [],
                        "name": "Base",
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
              "type": "ClassBody",
              "start": 470,
              "end": 513,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 480,
                  "end": 501,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 481,
                      "end": 490,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 482,
                        "end": 490,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 484,
                          "end": 490
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 491,
                    "end": 500,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 493,
                      "end": 500,
                      "typeName": {
                        "type": "Identifier",
                        "start": 493,
                        "end": 500,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
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
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 519,
            "end": 594,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 525,
              "end": 527,
              "decorators": [],
              "name": "B2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 539,
                "end": 549,
                "expression": {
                  "type": "Identifier",
                  "start": 539,
                  "end": 540,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 540,
                  "end": 549,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 541,
                      "end": 548,
                      "typeName": {
                        "type": "Identifier",
                        "start": 541,
                        "end": 548,
                        "decorators": [],
                        "name": "Derived",
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
              "type": "ClassBody",
              "start": 550,
              "end": 594,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 560,
                  "end": 582,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 561,
                      "end": 570,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 562,
                        "end": 570,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 564,
                          "end": 570
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 571,
                    "end": 581,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 573,
                      "end": 581,
                      "typeName": {
                        "type": "Identifier",
                        "start": 573,
                        "end": 581,
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "typeAnnotation": null
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
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 600,
            "end": 687,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 606,
              "end": 608,
              "decorators": [],
              "name": "B3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 608,
              "end": 627,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 609,
                  "end": 626,
                  "name": {
                    "type": "Identifier",
                    "start": 609,
                    "end": 610,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 619,
                    "end": 626,
                    "typeName": {
                      "type": "Identifier",
                      "start": 619,
                      "end": 626,
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 639,
                "end": 643,
                "expression": {
                  "type": "Identifier",
                  "start": 639,
                  "end": 640,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 640,
                  "end": 643,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 641,
                      "end": 642,
                      "typeName": {
                        "type": "Identifier",
                        "start": 641,
                        "end": 642,
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
              "type": "ClassBody",
              "start": 644,
              "end": 687,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 654,
                  "end": 672,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 655,
                      "end": 664,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 656,
                        "end": 664,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 658,
                          "end": 664
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 665,
                    "end": 671,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 667,
                      "end": 671,
                      "typeName": {
                        "type": "Identifier",
                        "start": 667,
                        "end": 671,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
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
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 693,
            "end": 783,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 699,
              "end": 701,
              "decorators": [],
              "name": "B4",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 701,
              "end": 720,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 702,
                  "end": 719,
                  "name": {
                    "type": "Identifier",
                    "start": 702,
                    "end": 703,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 712,
                    "end": 719,
                    "typeName": {
                      "type": "Identifier",
                      "start": 712,
                      "end": 719,
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 732,
                "end": 736,
                "expression": {
                  "type": "Identifier",
                  "start": 732,
                  "end": 733,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 733,
                  "end": 736,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 734,
                      "end": 735,
                      "typeName": {
                        "type": "Identifier",
                        "start": 734,
                        "end": 735,
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
              "type": "ClassBody",
              "start": 737,
              "end": 783,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 747,
                  "end": 768,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 748,
                      "end": 757,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 749,
                        "end": 757,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 751,
                          "end": 757
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 758,
                    "end": 767,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 760,
                      "end": 767,
                      "typeName": {
                        "type": "Identifier",
                        "start": 760,
                        "end": 767,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
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
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 789,
            "end": 881,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 795,
              "end": 797,
              "decorators": [],
              "name": "B5",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 797,
              "end": 817,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 798,
                  "end": 816,
                  "name": {
                    "type": "Identifier",
                    "start": 798,
                    "end": 799,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 808,
                    "end": 816,
                    "typeName": {
                      "type": "Identifier",
                      "start": 808,
                      "end": 816,
                      "decorators": [],
                      "name": "Derived2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 829,
                "end": 833,
                "expression": {
                  "type": "Identifier",
                  "start": 829,
                  "end": 830,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 830,
                  "end": 833,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 831,
                      "end": 832,
                      "typeName": {
                        "type": "Identifier",
                        "start": 831,
                        "end": 832,
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
              "type": "ClassBody",
              "start": 834,
              "end": 881,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 844,
                  "end": 866,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 845,
                      "end": 854,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 846,
                        "end": 854,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 848,
                          "end": 854
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 855,
                    "end": 865,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 857,
                      "end": 865,
                      "typeName": {
                        "type": "Identifier",
                        "start": 857,
                        "end": 865,
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "typeAnnotation": null
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
            "abstract": false,
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
