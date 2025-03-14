__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 62,
  "end": 540,
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
      "end": 232,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 203,
        "end": 232,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 209,
            "end": 230,
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
              "end": 229,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 222,
                "end": 229,
                "typeName": {
                  "type": "Identifier",
                  "start": 222,
                  "end": 229,
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
      "start": 234,
      "end": 289,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 252,
        "end": 289,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 258,
            "end": 278,
            "parameters": [
              {
                "type": "Identifier",
                "start": 259,
                "end": 268,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 260,
                  "end": 268,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 262,
                    "end": 268
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 269,
              "end": 277,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 271,
                "end": 277
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 240,
        "end": 241,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 250,
        "end": 251,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 291,
      "end": 540,
      "body": {
        "type": "TSModuleBlock",
        "start": 307,
        "end": 540,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 313,
            "end": 371,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 340,
              "end": 371,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 350,
                  "end": 365,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 351,
                      "end": 360,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 352,
                        "end": 360,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 354,
                          "end": 360
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 361,
                    "end": 364,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 363,
                      "end": 364,
                      "typeName": {
                        "type": "Identifier",
                        "start": 363,
                        "end": 364,
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
              "start": 319,
              "end": 320,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "implements": [],
            "superClass": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 320,
              "end": 339,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 321,
                  "end": 338,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 331,
                    "end": 338,
                    "typeName": {
                      "type": "Identifier",
                      "start": 331,
                      "end": 338,
                      "decorators": [],
                      "name": "Derived",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 321,
                    "end": 322,
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
            "start": 377,
            "end": 446,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 401,
              "end": 446,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 411,
                  "end": 431,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 412,
                      "end": 421,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 413,
                        "end": 421,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 415,
                          "end": 421
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 422,
                    "end": 430,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 424,
                      "end": 430
                    }
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 383,
              "end": 384,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 393,
              "end": 394,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 394,
              "end": 400,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 395,
                  "end": 399,
                  "typeName": {
                    "type": "Identifier",
                    "start": 395,
                    "end": 399,
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
            "start": 452,
            "end": 538,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 493,
              "end": 538,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 503,
                  "end": 523,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 504,
                      "end": 513,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 505,
                        "end": 513,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 507,
                          "end": 513
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 514,
                    "end": 522,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 516,
                      "end": 522
                    }
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 458,
              "end": 460,
              "decorators": [],
              "name": "B3",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 488,
              "end": 489,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 489,
              "end": 492,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 490,
                  "end": 491,
                  "typeName": {
                    "type": "Identifier",
                    "start": 490,
                    "end": 491,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              ]
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 460,
              "end": 479,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 461,
                  "end": 478,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 471,
                    "end": 478,
                    "typeName": {
                      "type": "Identifier",
                      "start": 471,
                      "end": 478,
                      "decorators": [],
                      "name": "Derived",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 461,
                    "end": 462,
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
        "start": 298,
        "end": 306,
        "decorators": [],
        "name": "Generics",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
