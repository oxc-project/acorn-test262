__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 62,
  "end": 752,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 62,
      "end": 93,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 76,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 120,
          "end": 124,
          "expression": {
            "type": "Identifier",
            "start": 120,
            "end": 124,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
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
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "Derived2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 169,
          "end": 176,
          "expression": {
            "type": "Identifier",
            "start": 169,
            "end": 176,
            "name": "Derived",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
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
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "type": "ClassDeclaration",
      "start": 195,
      "end": 229,
      "id": {
        "type": "Identifier",
        "start": 201,
        "end": 202,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
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
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 211,
                  "end": 219,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 213,
                    "end": 219
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
                  "name": "Base",
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
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 231,
      "end": 284,
      "id": {
        "type": "Identifier",
        "start": 237,
        "end": 238,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 247,
        "end": 248,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 257,
                  "end": 265,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 259,
                    "end": 265
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
                  "name": "Derived",
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
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 286,
      "end": 341,
      "id": {
        "type": "Identifier",
        "start": 292,
        "end": 294,
        "name": "B2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 303,
        "end": 304,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 313,
                  "end": 321,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 315,
                    "end": 321
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
                  "name": "Derived2",
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
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 343,
      "end": 751,
      "id": {
        "type": "Identifier",
        "start": 350,
        "end": 358,
        "name": "Generics",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 359,
        "end": 751,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 365,
            "end": 420,
            "id": {
              "type": "Identifier",
              "start": 371,
              "end": 372,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
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
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 401,
                        "end": 409,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 403,
                          "end": 409
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
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
            "decorators": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 372,
              "end": 388,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 373,
                  "end": 387,
                  "name": {
                    "type": "Identifier",
                    "start": 373,
                    "end": 374,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 383,
                    "end": 387,
                    "typeName": {
                      "type": "Identifier",
                      "start": 383,
                      "end": 387,
                      "name": "Base",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 426,
            "end": 493,
            "id": {
              "type": "Identifier",
              "start": 432,
              "end": 433,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 442,
              "end": 443,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 462,
                        "end": 470,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 464,
                          "end": 470
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
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
                        "name": "Derived",
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
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
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
                    "name": "Base",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 499,
            "end": 568,
            "id": {
              "type": "Identifier",
              "start": 505,
              "end": 507,
              "name": "B2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 516,
              "end": 517,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 536,
                        "end": 544,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 538,
                          "end": 544
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
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
                        "name": "Derived2",
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
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
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
                    "name": "Base",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 574,
            "end": 658,
            "id": {
              "type": "Identifier",
              "start": 580,
              "end": 582,
              "name": "B3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 607,
              "end": 608,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 612,
              "end": 658,
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
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 624,
                        "end": 632,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 626,
                          "end": 632
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
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
                        "name": "Derived",
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
            "decorators": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 582,
              "end": 598,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 583,
                  "end": 597,
                  "name": {
                    "type": "Identifier",
                    "start": 583,
                    "end": 584,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 593,
                    "end": 597,
                    "typeName": {
                      "type": "Identifier",
                      "start": 593,
                      "end": 597,
                      "name": "Base",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            "implements": [],
            "abstract": false,
            "declare": false,
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 664,
            "end": 749,
            "id": {
              "type": "Identifier",
              "start": 670,
              "end": 672,
              "name": "B4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 697,
              "end": 698,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 702,
              "end": 749,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 712,
                  "end": 734,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 713,
                      "end": 722,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 714,
                        "end": 722,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 716,
                          "end": 722
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 723,
                    "end": 733,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 725,
                      "end": 733,
                      "typeName": {
                        "type": "Identifier",
                        "start": 725,
                        "end": 733,
                        "name": "Derived2",
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
            "decorators": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 672,
              "end": 688,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 673,
                  "end": 687,
                  "name": {
                    "type": "Identifier",
                    "start": 673,
                    "end": 674,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 683,
                    "end": 687,
                    "typeName": {
                      "type": "Identifier",
                      "start": 683,
                      "end": 687,
                      "name": "Base",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 698,
              "end": 701,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 699,
                  "end": 700,
                  "typeName": {
                    "type": "Identifier",
                    "start": 699,
                    "end": 700,
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
