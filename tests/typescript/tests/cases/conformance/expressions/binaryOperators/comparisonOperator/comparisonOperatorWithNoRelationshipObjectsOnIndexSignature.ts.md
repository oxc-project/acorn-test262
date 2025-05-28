__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1882,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 36,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 36,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 34,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 33,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 27,
                "end": 33
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 38,
      "end": 90,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 51,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 60,
        "end": 64,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 65,
        "end": 90,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 71,
            "end": 88,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 79,
              "end": 87,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 81,
                "end": 87
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 92,
      "end": 125,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 98,
        "end": 99,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 100,
        "end": 125,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 106,
            "end": 123,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 113,
              "end": 114,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 114,
              "end": 122,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 116,
                "end": 122
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 127,
      "end": 159,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 131,
          "end": 158,
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 158,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 133,
              "end": 158,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 135,
                "end": 158,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 137,
                    "end": 156,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 138,
                        "end": 147,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
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
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 148,
                      "end": 156,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 150,
                        "end": 156
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 160,
      "end": 192,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 164,
          "end": 191,
          "id": {
            "type": "Identifier",
            "start": 164,
            "end": 191,
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 166,
              "end": 191,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 168,
                "end": 191,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 170,
                    "end": 189,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 171,
                        "end": 180,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 172,
                          "end": 180,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 174,
                            "end": 180
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 181,
                      "end": 189,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 183,
                        "end": 189
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 194,
      "end": 228,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 198,
          "end": 227,
          "id": {
            "type": "Identifier",
            "start": 198,
            "end": 227,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 200,
              "end": 227,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 202,
                "end": 227,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 204,
                    "end": 225,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 205,
                        "end": 218,
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 210,
                          "end": 218,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 212,
                            "end": 218
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 219,
                      "end": 225,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 221,
                        "end": 225,
                        "typeName": {
                          "type": "Identifier",
                          "start": 221,
                          "end": 225,
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
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 229,
      "end": 260,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 233,
          "end": 259,
          "id": {
            "type": "Identifier",
            "start": 233,
            "end": 259,
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 235,
              "end": 259,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 237,
                "end": 259,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 239,
                    "end": 257,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 240,
                        "end": 253,
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 245,
                          "end": 253,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 247,
                            "end": 253
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 254,
                      "end": 257,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 256,
                        "end": 257,
                        "typeName": {
                          "type": "Identifier",
                          "start": 256,
                          "end": 257,
                          "decorators": [],
                          "name": "C",
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
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 262,
      "end": 296,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 266,
          "end": 295,
          "id": {
            "type": "Identifier",
            "start": 266,
            "end": 295,
            "decorators": [],
            "name": "a3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 268,
              "end": 295,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 270,
                "end": 295,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 272,
                    "end": 293,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 273,
                        "end": 286,
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 278,
                          "end": 286,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 280,
                            "end": 286
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 287,
                      "end": 293,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 289,
                        "end": 293,
                        "typeName": {
                          "type": "Identifier",
                          "start": 289,
                          "end": 293,
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
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 297,
      "end": 328,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 301,
          "end": 327,
          "id": {
            "type": "Identifier",
            "start": 301,
            "end": 327,
            "decorators": [],
            "name": "b3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 303,
              "end": 327,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 305,
                "end": 327,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 307,
                    "end": 325,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 308,
                        "end": 321,
                        "decorators": [],
                        "name": "index",
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
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 322,
                      "end": 325,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 324,
                        "end": 325,
                        "typeName": {
                          "type": "Identifier",
                          "start": 324,
                          "end": 325,
                          "decorators": [],
                          "name": "C",
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
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 330,
      "end": 367,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 334,
          "end": 366,
          "id": {
            "type": "Identifier",
            "start": 334,
            "end": 366,
            "decorators": [],
            "name": "a4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 336,
              "end": 366,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 338,
                "end": 366,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 340,
                    "end": 364,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 341,
                        "end": 354,
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 346,
                          "end": 354,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 348,
                            "end": 354
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 355,
                      "end": 364,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 357,
                        "end": 364,
                        "typeName": {
                          "type": "Identifier",
                          "start": 357,
                          "end": 364,
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
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 368,
      "end": 402,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 372,
          "end": 401,
          "id": {
            "type": "Identifier",
            "start": 372,
            "end": 401,
            "decorators": [],
            "name": "b4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 374,
              "end": 401,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 376,
                "end": 401,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 378,
                    "end": 399,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 379,
                        "end": 392,
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 384,
                          "end": 392,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 386,
                            "end": 392
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 393,
                      "end": 399,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 395,
                        "end": 399,
                        "typeName": {
                          "type": "Identifier",
                          "start": 395,
                          "end": 399,
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
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 418,
      "end": 437,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 422,
          "end": 436,
          "id": {
            "type": "Identifier",
            "start": 422,
            "end": 426,
            "decorators": [],
            "name": "r1a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 429,
            "end": 436,
            "left": {
              "type": "Identifier",
              "start": 429,
              "end": 431,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 434,
              "end": 436,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 438,
      "end": 457,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 442,
          "end": 456,
          "id": {
            "type": "Identifier",
            "start": 442,
            "end": 446,
            "decorators": [],
            "name": "r1a2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 449,
            "end": 456,
            "left": {
              "type": "Identifier",
              "start": 449,
              "end": 451,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 454,
              "end": 456,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 458,
      "end": 477,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 462,
          "end": 476,
          "id": {
            "type": "Identifier",
            "start": 462,
            "end": 466,
            "decorators": [],
            "name": "r1a3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 469,
            "end": 476,
            "left": {
              "type": "Identifier",
              "start": 469,
              "end": 471,
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 474,
              "end": 476,
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 478,
      "end": 497,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 482,
          "end": 496,
          "id": {
            "type": "Identifier",
            "start": 482,
            "end": 486,
            "decorators": [],
            "name": "r1a4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 489,
            "end": 496,
            "left": {
              "type": "Identifier",
              "start": 489,
              "end": 491,
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 494,
              "end": 496,
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 499,
      "end": 518,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 503,
          "end": 517,
          "id": {
            "type": "Identifier",
            "start": 503,
            "end": 507,
            "decorators": [],
            "name": "r1b1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 510,
            "end": 517,
            "left": {
              "type": "Identifier",
              "start": 510,
              "end": 512,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 515,
              "end": 517,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 519,
      "end": 538,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 523,
          "end": 537,
          "id": {
            "type": "Identifier",
            "start": 523,
            "end": 527,
            "decorators": [],
            "name": "r1b2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 530,
            "end": 537,
            "left": {
              "type": "Identifier",
              "start": 530,
              "end": 532,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 535,
              "end": 537,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 539,
      "end": 558,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 543,
          "end": 557,
          "id": {
            "type": "Identifier",
            "start": 543,
            "end": 547,
            "decorators": [],
            "name": "r1b3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 550,
            "end": 557,
            "left": {
              "type": "Identifier",
              "start": 550,
              "end": 552,
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 555,
              "end": 557,
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 559,
      "end": 578,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 563,
          "end": 577,
          "id": {
            "type": "Identifier",
            "start": 563,
            "end": 567,
            "decorators": [],
            "name": "r1b4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 570,
            "end": 577,
            "left": {
              "type": "Identifier",
              "start": 570,
              "end": 572,
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 575,
              "end": 577,
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 594,
      "end": 613,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 598,
          "end": 612,
          "id": {
            "type": "Identifier",
            "start": 598,
            "end": 602,
            "decorators": [],
            "name": "r2a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 605,
            "end": 612,
            "left": {
              "type": "Identifier",
              "start": 605,
              "end": 607,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 610,
              "end": 612,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 614,
      "end": 633,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 618,
          "end": 632,
          "id": {
            "type": "Identifier",
            "start": 618,
            "end": 622,
            "decorators": [],
            "name": "r2a2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 625,
            "end": 632,
            "left": {
              "type": "Identifier",
              "start": 625,
              "end": 627,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 630,
              "end": 632,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 634,
      "end": 653,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 638,
          "end": 652,
          "id": {
            "type": "Identifier",
            "start": 638,
            "end": 642,
            "decorators": [],
            "name": "r2a3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 645,
            "end": 652,
            "left": {
              "type": "Identifier",
              "start": 645,
              "end": 647,
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 650,
              "end": 652,
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 654,
      "end": 673,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 658,
          "end": 672,
          "id": {
            "type": "Identifier",
            "start": 658,
            "end": 662,
            "decorators": [],
            "name": "r2a4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 665,
            "end": 672,
            "left": {
              "type": "Identifier",
              "start": 665,
              "end": 667,
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 670,
              "end": 672,
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 675,
      "end": 694,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 679,
          "end": 693,
          "id": {
            "type": "Identifier",
            "start": 679,
            "end": 683,
            "decorators": [],
            "name": "r2b1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 686,
            "end": 693,
            "left": {
              "type": "Identifier",
              "start": 686,
              "end": 688,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 691,
              "end": 693,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 695,
      "end": 714,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 699,
          "end": 713,
          "id": {
            "type": "Identifier",
            "start": 699,
            "end": 703,
            "decorators": [],
            "name": "r2b2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 706,
            "end": 713,
            "left": {
              "type": "Identifier",
              "start": 706,
              "end": 708,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 711,
              "end": 713,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 715,
      "end": 734,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 719,
          "end": 733,
          "id": {
            "type": "Identifier",
            "start": 719,
            "end": 723,
            "decorators": [],
            "name": "r2b3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 726,
            "end": 733,
            "left": {
              "type": "Identifier",
              "start": 726,
              "end": 728,
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 731,
              "end": 733,
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 735,
      "end": 754,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 739,
          "end": 753,
          "id": {
            "type": "Identifier",
            "start": 739,
            "end": 743,
            "decorators": [],
            "name": "r2b4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 746,
            "end": 753,
            "left": {
              "type": "Identifier",
              "start": 746,
              "end": 748,
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 751,
              "end": 753,
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 771,
      "end": 791,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 775,
          "end": 790,
          "id": {
            "type": "Identifier",
            "start": 775,
            "end": 779,
            "decorators": [],
            "name": "r3a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 782,
            "end": 790,
            "left": {
              "type": "Identifier",
              "start": 782,
              "end": 784,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 788,
              "end": 790,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 792,
      "end": 812,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 796,
          "end": 811,
          "id": {
            "type": "Identifier",
            "start": 796,
            "end": 800,
            "decorators": [],
            "name": "r3a2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 803,
            "end": 811,
            "left": {
              "type": "Identifier",
              "start": 803,
              "end": 805,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 809,
              "end": 811,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 813,
      "end": 833,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 817,
          "end": 832,
          "id": {
            "type": "Identifier",
            "start": 817,
            "end": 821,
            "decorators": [],
            "name": "r3a3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 824,
            "end": 832,
            "left": {
              "type": "Identifier",
              "start": 824,
              "end": 826,
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 830,
              "end": 832,
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 834,
      "end": 854,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 838,
          "end": 853,
          "id": {
            "type": "Identifier",
            "start": 838,
            "end": 842,
            "decorators": [],
            "name": "r3a4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 845,
            "end": 853,
            "left": {
              "type": "Identifier",
              "start": 845,
              "end": 847,
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 851,
              "end": 853,
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 856,
      "end": 876,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 860,
          "end": 875,
          "id": {
            "type": "Identifier",
            "start": 860,
            "end": 864,
            "decorators": [],
            "name": "r3b1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 867,
            "end": 875,
            "left": {
              "type": "Identifier",
              "start": 867,
              "end": 869,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 873,
              "end": 875,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 877,
      "end": 897,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 881,
          "end": 896,
          "id": {
            "type": "Identifier",
            "start": 881,
            "end": 885,
            "decorators": [],
            "name": "r3b2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 888,
            "end": 896,
            "left": {
              "type": "Identifier",
              "start": 888,
              "end": 890,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 894,
              "end": 896,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 898,
      "end": 918,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 902,
          "end": 917,
          "id": {
            "type": "Identifier",
            "start": 902,
            "end": 906,
            "decorators": [],
            "name": "r3b3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 909,
            "end": 917,
            "left": {
              "type": "Identifier",
              "start": 909,
              "end": 911,
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 915,
              "end": 917,
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 919,
      "end": 939,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 923,
          "end": 938,
          "id": {
            "type": "Identifier",
            "start": 923,
            "end": 927,
            "decorators": [],
            "name": "r3b4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 930,
            "end": 938,
            "left": {
              "type": "Identifier",
              "start": 930,
              "end": 932,
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 936,
              "end": 938,
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 956,
      "end": 976,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 960,
          "end": 975,
          "id": {
            "type": "Identifier",
            "start": 960,
            "end": 964,
            "decorators": [],
            "name": "r4a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 967,
            "end": 975,
            "left": {
              "type": "Identifier",
              "start": 967,
              "end": 969,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 973,
              "end": 975,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 977,
      "end": 997,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 981,
          "end": 996,
          "id": {
            "type": "Identifier",
            "start": 981,
            "end": 985,
            "decorators": [],
            "name": "r4a2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 988,
            "end": 996,
            "left": {
              "type": "Identifier",
              "start": 988,
              "end": 990,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 994,
              "end": 996,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 998,
      "end": 1018,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1002,
          "end": 1017,
          "id": {
            "type": "Identifier",
            "start": 1002,
            "end": 1006,
            "decorators": [],
            "name": "r4a3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1009,
            "end": 1017,
            "left": {
              "type": "Identifier",
              "start": 1009,
              "end": 1011,
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1015,
              "end": 1017,
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1019,
      "end": 1039,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1023,
          "end": 1038,
          "id": {
            "type": "Identifier",
            "start": 1023,
            "end": 1027,
            "decorators": [],
            "name": "r4a4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1030,
            "end": 1038,
            "left": {
              "type": "Identifier",
              "start": 1030,
              "end": 1032,
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1036,
              "end": 1038,
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1041,
      "end": 1061,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1045,
          "end": 1060,
          "id": {
            "type": "Identifier",
            "start": 1045,
            "end": 1049,
            "decorators": [],
            "name": "r4b1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1052,
            "end": 1060,
            "left": {
              "type": "Identifier",
              "start": 1052,
              "end": 1054,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1058,
              "end": 1060,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1062,
      "end": 1082,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1066,
          "end": 1081,
          "id": {
            "type": "Identifier",
            "start": 1066,
            "end": 1070,
            "decorators": [],
            "name": "r4b2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1073,
            "end": 1081,
            "left": {
              "type": "Identifier",
              "start": 1073,
              "end": 1075,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1079,
              "end": 1081,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1083,
      "end": 1103,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1087,
          "end": 1102,
          "id": {
            "type": "Identifier",
            "start": 1087,
            "end": 1091,
            "decorators": [],
            "name": "r4b3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1094,
            "end": 1102,
            "left": {
              "type": "Identifier",
              "start": 1094,
              "end": 1096,
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1100,
              "end": 1102,
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1104,
      "end": 1124,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1108,
          "end": 1123,
          "id": {
            "type": "Identifier",
            "start": 1108,
            "end": 1112,
            "decorators": [],
            "name": "r4b4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1115,
            "end": 1123,
            "left": {
              "type": "Identifier",
              "start": 1115,
              "end": 1117,
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1121,
              "end": 1123,
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1141,
      "end": 1161,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1145,
          "end": 1160,
          "id": {
            "type": "Identifier",
            "start": 1145,
            "end": 1149,
            "decorators": [],
            "name": "r5a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1152,
            "end": 1160,
            "left": {
              "type": "Identifier",
              "start": 1152,
              "end": 1154,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 1158,
              "end": 1160,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1162,
      "end": 1182,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1166,
          "end": 1181,
          "id": {
            "type": "Identifier",
            "start": 1166,
            "end": 1170,
            "decorators": [],
            "name": "r5a2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1173,
            "end": 1181,
            "left": {
              "type": "Identifier",
              "start": 1173,
              "end": 1175,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 1179,
              "end": 1181,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1183,
      "end": 1203,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1187,
          "end": 1202,
          "id": {
            "type": "Identifier",
            "start": 1187,
            "end": 1191,
            "decorators": [],
            "name": "r5a3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1194,
            "end": 1202,
            "left": {
              "type": "Identifier",
              "start": 1194,
              "end": 1196,
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 1200,
              "end": 1202,
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1204,
      "end": 1224,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1208,
          "end": 1223,
          "id": {
            "type": "Identifier",
            "start": 1208,
            "end": 1212,
            "decorators": [],
            "name": "r5a4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1215,
            "end": 1223,
            "left": {
              "type": "Identifier",
              "start": 1215,
              "end": 1217,
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 1221,
              "end": 1223,
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1226,
      "end": 1246,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1230,
          "end": 1245,
          "id": {
            "type": "Identifier",
            "start": 1230,
            "end": 1234,
            "decorators": [],
            "name": "r5b1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1237,
            "end": 1245,
            "left": {
              "type": "Identifier",
              "start": 1237,
              "end": 1239,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 1243,
              "end": 1245,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1247,
      "end": 1267,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1251,
          "end": 1266,
          "id": {
            "type": "Identifier",
            "start": 1251,
            "end": 1255,
            "decorators": [],
            "name": "r5b2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1258,
            "end": 1266,
            "left": {
              "type": "Identifier",
              "start": 1258,
              "end": 1260,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 1264,
              "end": 1266,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1268,
      "end": 1288,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1272,
          "end": 1287,
          "id": {
            "type": "Identifier",
            "start": 1272,
            "end": 1276,
            "decorators": [],
            "name": "r5b3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1279,
            "end": 1287,
            "left": {
              "type": "Identifier",
              "start": 1279,
              "end": 1281,
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 1285,
              "end": 1287,
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1289,
      "end": 1309,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1293,
          "end": 1308,
          "id": {
            "type": "Identifier",
            "start": 1293,
            "end": 1297,
            "decorators": [],
            "name": "r5b4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1300,
            "end": 1308,
            "left": {
              "type": "Identifier",
              "start": 1300,
              "end": 1302,
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 1306,
              "end": 1308,
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1326,
      "end": 1346,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1330,
          "end": 1345,
          "id": {
            "type": "Identifier",
            "start": 1330,
            "end": 1334,
            "decorators": [],
            "name": "r6a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1337,
            "end": 1345,
            "left": {
              "type": "Identifier",
              "start": 1337,
              "end": 1339,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 1343,
              "end": 1345,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1347,
      "end": 1367,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1351,
          "end": 1366,
          "id": {
            "type": "Identifier",
            "start": 1351,
            "end": 1355,
            "decorators": [],
            "name": "r6a2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1358,
            "end": 1366,
            "left": {
              "type": "Identifier",
              "start": 1358,
              "end": 1360,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 1364,
              "end": 1366,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1368,
      "end": 1388,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1372,
          "end": 1387,
          "id": {
            "type": "Identifier",
            "start": 1372,
            "end": 1376,
            "decorators": [],
            "name": "r6a3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1379,
            "end": 1387,
            "left": {
              "type": "Identifier",
              "start": 1379,
              "end": 1381,
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 1385,
              "end": 1387,
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1389,
      "end": 1409,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1393,
          "end": 1408,
          "id": {
            "type": "Identifier",
            "start": 1393,
            "end": 1397,
            "decorators": [],
            "name": "r6a4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1400,
            "end": 1408,
            "left": {
              "type": "Identifier",
              "start": 1400,
              "end": 1402,
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 1406,
              "end": 1408,
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1411,
      "end": 1431,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1415,
          "end": 1430,
          "id": {
            "type": "Identifier",
            "start": 1415,
            "end": 1419,
            "decorators": [],
            "name": "r6b1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1422,
            "end": 1430,
            "left": {
              "type": "Identifier",
              "start": 1422,
              "end": 1424,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 1428,
              "end": 1430,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1432,
      "end": 1452,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1436,
          "end": 1451,
          "id": {
            "type": "Identifier",
            "start": 1436,
            "end": 1440,
            "decorators": [],
            "name": "r6b2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1443,
            "end": 1451,
            "left": {
              "type": "Identifier",
              "start": 1443,
              "end": 1445,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 1449,
              "end": 1451,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1453,
      "end": 1473,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1457,
          "end": 1472,
          "id": {
            "type": "Identifier",
            "start": 1457,
            "end": 1461,
            "decorators": [],
            "name": "r6b3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1464,
            "end": 1472,
            "left": {
              "type": "Identifier",
              "start": 1464,
              "end": 1466,
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 1470,
              "end": 1472,
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1474,
      "end": 1494,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1478,
          "end": 1493,
          "id": {
            "type": "Identifier",
            "start": 1478,
            "end": 1482,
            "decorators": [],
            "name": "r6b4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1485,
            "end": 1493,
            "left": {
              "type": "Identifier",
              "start": 1485,
              "end": 1487,
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 1491,
              "end": 1493,
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1512,
      "end": 1533,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1516,
          "end": 1532,
          "id": {
            "type": "Identifier",
            "start": 1516,
            "end": 1520,
            "decorators": [],
            "name": "r7a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1523,
            "end": 1532,
            "left": {
              "type": "Identifier",
              "start": 1523,
              "end": 1525,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 1530,
              "end": 1532,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1534,
      "end": 1555,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1538,
          "end": 1554,
          "id": {
            "type": "Identifier",
            "start": 1538,
            "end": 1542,
            "decorators": [],
            "name": "r7a2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1545,
            "end": 1554,
            "left": {
              "type": "Identifier",
              "start": 1545,
              "end": 1547,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 1552,
              "end": 1554,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1556,
      "end": 1577,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1560,
          "end": 1576,
          "id": {
            "type": "Identifier",
            "start": 1560,
            "end": 1564,
            "decorators": [],
            "name": "r7a3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1567,
            "end": 1576,
            "left": {
              "type": "Identifier",
              "start": 1567,
              "end": 1569,
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 1574,
              "end": 1576,
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1578,
      "end": 1599,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1582,
          "end": 1598,
          "id": {
            "type": "Identifier",
            "start": 1582,
            "end": 1586,
            "decorators": [],
            "name": "r7a4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1589,
            "end": 1598,
            "left": {
              "type": "Identifier",
              "start": 1589,
              "end": 1591,
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 1596,
              "end": 1598,
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1601,
      "end": 1622,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1605,
          "end": 1621,
          "id": {
            "type": "Identifier",
            "start": 1605,
            "end": 1609,
            "decorators": [],
            "name": "r7b1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1612,
            "end": 1621,
            "left": {
              "type": "Identifier",
              "start": 1612,
              "end": 1614,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 1619,
              "end": 1621,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1623,
      "end": 1644,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1627,
          "end": 1643,
          "id": {
            "type": "Identifier",
            "start": 1627,
            "end": 1631,
            "decorators": [],
            "name": "r7b2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1634,
            "end": 1643,
            "left": {
              "type": "Identifier",
              "start": 1634,
              "end": 1636,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 1641,
              "end": 1643,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1645,
      "end": 1666,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1649,
          "end": 1665,
          "id": {
            "type": "Identifier",
            "start": 1649,
            "end": 1653,
            "decorators": [],
            "name": "r7b3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1656,
            "end": 1665,
            "left": {
              "type": "Identifier",
              "start": 1656,
              "end": 1658,
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 1663,
              "end": 1665,
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1667,
      "end": 1688,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1671,
          "end": 1687,
          "id": {
            "type": "Identifier",
            "start": 1671,
            "end": 1675,
            "decorators": [],
            "name": "r7b4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1678,
            "end": 1687,
            "left": {
              "type": "Identifier",
              "start": 1678,
              "end": 1680,
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 1685,
              "end": 1687,
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1706,
      "end": 1727,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1710,
          "end": 1726,
          "id": {
            "type": "Identifier",
            "start": 1710,
            "end": 1714,
            "decorators": [],
            "name": "r8a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1717,
            "end": 1726,
            "left": {
              "type": "Identifier",
              "start": 1717,
              "end": 1719,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 1724,
              "end": 1726,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1728,
      "end": 1749,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1732,
          "end": 1748,
          "id": {
            "type": "Identifier",
            "start": 1732,
            "end": 1736,
            "decorators": [],
            "name": "r8a2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1739,
            "end": 1748,
            "left": {
              "type": "Identifier",
              "start": 1739,
              "end": 1741,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 1746,
              "end": 1748,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1750,
      "end": 1771,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1754,
          "end": 1770,
          "id": {
            "type": "Identifier",
            "start": 1754,
            "end": 1758,
            "decorators": [],
            "name": "r8a3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1761,
            "end": 1770,
            "left": {
              "type": "Identifier",
              "start": 1761,
              "end": 1763,
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 1768,
              "end": 1770,
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1772,
      "end": 1793,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1776,
          "end": 1792,
          "id": {
            "type": "Identifier",
            "start": 1776,
            "end": 1780,
            "decorators": [],
            "name": "r8a4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1783,
            "end": 1792,
            "left": {
              "type": "Identifier",
              "start": 1783,
              "end": 1785,
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 1790,
              "end": 1792,
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1795,
      "end": 1816,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1799,
          "end": 1815,
          "id": {
            "type": "Identifier",
            "start": 1799,
            "end": 1803,
            "decorators": [],
            "name": "r8b1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1806,
            "end": 1815,
            "left": {
              "type": "Identifier",
              "start": 1806,
              "end": 1808,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 1813,
              "end": 1815,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1817,
      "end": 1838,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1821,
          "end": 1837,
          "id": {
            "type": "Identifier",
            "start": 1821,
            "end": 1825,
            "decorators": [],
            "name": "r8b2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1828,
            "end": 1837,
            "left": {
              "type": "Identifier",
              "start": 1828,
              "end": 1830,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 1835,
              "end": 1837,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1839,
      "end": 1860,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1843,
          "end": 1859,
          "id": {
            "type": "Identifier",
            "start": 1843,
            "end": 1847,
            "decorators": [],
            "name": "r8b3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1850,
            "end": 1859,
            "left": {
              "type": "Identifier",
              "start": 1850,
              "end": 1852,
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 1857,
              "end": 1859,
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1861,
      "end": 1882,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1865,
          "end": 1881,
          "id": {
            "type": "Identifier",
            "start": 1865,
            "end": 1869,
            "decorators": [],
            "name": "r8b4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1872,
            "end": 1881,
            "left": {
              "type": "Identifier",
              "start": 1872,
              "end": 1874,
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 1879,
              "end": 1881,
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
