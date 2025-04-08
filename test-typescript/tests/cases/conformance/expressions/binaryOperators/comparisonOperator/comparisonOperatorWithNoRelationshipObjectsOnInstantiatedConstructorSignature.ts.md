__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2726,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 36,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 36,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 34,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "name": "a",
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
              "start": 25,
              "end": 33,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 27,
                "end": 33
              }
            },
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
    },
    {
      "type": "ClassDeclaration",
      "start": 38,
      "end": 90,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 51,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 60,
        "end": 64,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 65,
        "end": 90,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 71,
            "end": 88,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
              "name": "b",
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
              "start": 79,
              "end": 87,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 81,
                "end": 87
              }
            },
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
    },
    {
      "type": "ClassDeclaration",
      "start": 92,
      "end": 125,
      "id": {
        "type": "Identifier",
        "start": 98,
        "end": 99,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 100,
        "end": 125,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 106,
            "end": 123,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 113,
              "end": 114,
              "name": "c",
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
              "start": 114,
              "end": 122,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 116,
                "end": 122
              }
            },
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
    },
    {
      "type": "VariableDeclaration",
      "start": 127,
      "end": 156,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 131,
          "end": 155,
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 155,
            "name": "a1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 133,
              "end": 155,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 135,
                "end": 155,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 137,
                    "end": 153,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 141,
                      "end": 144,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 142,
                          "end": 143,
                          "name": {
                            "type": "Identifier",
                            "start": 142,
                            "end": 143,
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 145,
                        "end": 149,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 146,
                          "end": 149,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 148,
                            "end": 149,
                            "typeName": {
                              "type": "Identifier",
                              "start": 148,
                              "end": 149,
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
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 150,
                      "end": 153,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 152,
                        "end": 153,
                        "typeName": {
                          "type": "Identifier",
                          "start": 152,
                          "end": 153,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 157,
      "end": 184,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 161,
          "end": 183,
          "id": {
            "type": "Identifier",
            "start": 161,
            "end": 183,
            "name": "b1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 163,
              "end": 183,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 165,
                "end": 183,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 167,
                    "end": 181,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 173,
                      "end": 181,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 175,
                        "end": 181
                      }
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 186,
      "end": 215,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 190,
          "end": 214,
          "id": {
            "type": "Identifier",
            "start": 190,
            "end": 214,
            "name": "a2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 192,
              "end": 214,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 194,
                "end": 214,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 196,
                    "end": 212,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 200,
                      "end": 203,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 201,
                          "end": 202,
                          "name": {
                            "type": "Identifier",
                            "start": 201,
                            "end": 202,
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 204,
                        "end": 208,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 205,
                          "end": 208,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 207,
                            "end": 208,
                            "typeName": {
                              "type": "Identifier",
                              "start": 207,
                              "end": 208,
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
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 209,
                      "end": 212,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 211,
                        "end": 212,
                        "typeName": {
                          "type": "Identifier",
                          "start": 211,
                          "end": 212,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 216,
      "end": 252,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 220,
          "end": 251,
          "id": {
            "type": "Identifier",
            "start": 220,
            "end": 251,
            "name": "b2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 222,
              "end": 251,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 224,
                "end": 251,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 226,
                    "end": 249,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 231,
                        "end": 240,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 232,
                          "end": 240,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 234,
                            "end": 240
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 241,
                      "end": 249,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 243,
                        "end": 249
                      }
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 254,
      "end": 284,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 258,
          "end": 283,
          "id": {
            "type": "Identifier",
            "start": 258,
            "end": 283,
            "name": "a3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 260,
              "end": 283,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 262,
                "end": 283,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 264,
                    "end": 281,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 268,
                      "end": 271,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 269,
                          "end": 270,
                          "name": {
                            "type": "Identifier",
                            "start": 269,
                            "end": 270,
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 272,
                        "end": 277,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 274,
                          "end": 277,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 276,
                            "end": 277,
                            "typeName": {
                              "type": "Identifier",
                              "start": 276,
                              "end": 277,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": true
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 278,
                      "end": 281,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 280,
                        "end": 281,
                        "typeName": {
                          "type": "Identifier",
                          "start": 280,
                          "end": 281,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 285,
      "end": 322,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 289,
          "end": 321,
          "id": {
            "type": "Identifier",
            "start": 289,
            "end": 321,
            "name": "b3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 291,
              "end": 321,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 293,
                "end": 321,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 295,
                    "end": 319,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 300,
                        "end": 310,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 302,
                          "end": 310,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 304,
                            "end": 310
                          }
                        },
                        "decorators": [],
                        "optional": true
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 311,
                      "end": 319,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 313,
                        "end": 319
                      }
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 324,
      "end": 358,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 328,
          "end": 357,
          "id": {
            "type": "Identifier",
            "start": 328,
            "end": 357,
            "name": "a4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 330,
              "end": 357,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 332,
                "end": 357,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 334,
                    "end": 355,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 338,
                      "end": 341,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 339,
                          "end": 340,
                          "name": {
                            "type": "Identifier",
                            "start": 339,
                            "end": 340,
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
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 342,
                        "end": 351,
                        "argument": {
                          "type": "Identifier",
                          "start": 345,
                          "end": 346,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 346,
                          "end": 351,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 348,
                            "end": 351,
                            "elementType": {
                              "type": "TSTypeReference",
                              "start": 348,
                              "end": 349,
                              "typeName": {
                                "type": "Identifier",
                                "start": 348,
                                "end": 349,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "value": null
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 352,
                      "end": 355,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 354,
                        "end": 355,
                        "typeName": {
                          "type": "Identifier",
                          "start": 354,
                          "end": 355,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 359,
      "end": 400,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 363,
          "end": 399,
          "id": {
            "type": "Identifier",
            "start": 363,
            "end": 399,
            "name": "b4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 365,
              "end": 399,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 367,
                "end": 399,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 369,
                    "end": 397,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 374,
                        "end": 388,
                        "argument": {
                          "type": "Identifier",
                          "start": 377,
                          "end": 378,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 378,
                          "end": 388,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 380,
                            "end": 388,
                            "elementType": {
                              "type": "TSStringKeyword",
                              "start": 380,
                              "end": 386
                            }
                          }
                        },
                        "value": null
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 389,
                      "end": 397,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 391,
                        "end": 397
                      }
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 402,
      "end": 437,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 406,
          "end": 436,
          "id": {
            "type": "Identifier",
            "start": 406,
            "end": 436,
            "name": "a5",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 408,
              "end": 436,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 410,
                "end": 436,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 412,
                    "end": 434,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 416,
                      "end": 419,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 417,
                          "end": 418,
                          "name": {
                            "type": "Identifier",
                            "start": 417,
                            "end": 418,
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 420,
                        "end": 424,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 421,
                          "end": 424,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 423,
                            "end": 424,
                            "typeName": {
                              "type": "Identifier",
                              "start": 423,
                              "end": 424,
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
                        "start": 426,
                        "end": 430,
                        "name": "y",
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
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 431,
                      "end": 434,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 433,
                        "end": 434,
                        "typeName": {
                          "type": "Identifier",
                          "start": 433,
                          "end": 434,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 438,
      "end": 485,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 442,
          "end": 484,
          "id": {
            "type": "Identifier",
            "start": 442,
            "end": 484,
            "name": "b5",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 444,
              "end": 484,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 446,
                "end": 484,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 448,
                    "end": 482,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 453,
                        "end": 462,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 454,
                          "end": 462,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 456,
                            "end": 462
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 464,
                        "end": 473,
                        "name": "y",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 465,
                          "end": 473,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 467,
                            "end": 473
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 474,
                      "end": 482,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 476,
                        "end": 482
                      }
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 487,
      "end": 535,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 491,
          "end": 534,
          "id": {
            "type": "Identifier",
            "start": 491,
            "end": 534,
            "name": "a6",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 493,
              "end": 534,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 495,
                "end": 534,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 497,
                    "end": 532,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 501,
                      "end": 517,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 502,
                          "end": 503,
                          "name": {
                            "type": "Identifier",
                            "start": 502,
                            "end": 503,
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
                          "start": 505,
                          "end": 516,
                          "name": {
                            "type": "Identifier",
                            "start": 505,
                            "end": 506,
                            "name": "U",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 515,
                            "end": 516,
                            "typeName": {
                              "type": "Identifier",
                              "start": 515,
                              "end": 516,
                              "name": "T",
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 518,
                        "end": 522,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 519,
                          "end": 522,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 521,
                            "end": 522,
                            "typeName": {
                              "type": "Identifier",
                              "start": 521,
                              "end": 522,
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
                        "start": 524,
                        "end": 528,
                        "name": "y",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 525,
                          "end": 528,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 527,
                            "end": 528,
                            "typeName": {
                              "type": "Identifier",
                              "start": 527,
                              "end": 528,
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 529,
                      "end": 532,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 531,
                        "end": 532,
                        "typeName": {
                          "type": "Identifier",
                          "start": 531,
                          "end": 532,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 536,
      "end": 574,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 540,
          "end": 573,
          "id": {
            "type": "Identifier",
            "start": 540,
            "end": 573,
            "name": "b6",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 542,
              "end": 573,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 544,
                "end": 573,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 546,
                    "end": 571,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 551,
                        "end": 558,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 552,
                          "end": 558,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 554,
                            "end": 558,
                            "typeName": {
                              "type": "Identifier",
                              "start": 554,
                              "end": 558,
                              "name": "Base",
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
                        "start": 560,
                        "end": 564,
                        "name": "y",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 561,
                          "end": 564,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 563,
                            "end": 564,
                            "typeName": {
                              "type": "Identifier",
                              "start": 563,
                              "end": 564,
                              "name": "C",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 565,
                      "end": 571,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 567,
                        "end": 571,
                        "typeName": {
                          "type": "Identifier",
                          "start": 567,
                          "end": 571,
                          "name": "Base",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 590,
      "end": 609,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 594,
          "end": 608,
          "id": {
            "type": "Identifier",
            "start": 594,
            "end": 598,
            "name": "r1a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 601,
            "end": 608,
            "left": {
              "type": "Identifier",
              "start": 601,
              "end": 603,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 606,
              "end": 608,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 610,
      "end": 629,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 614,
          "end": 628,
          "id": {
            "type": "Identifier",
            "start": 614,
            "end": 618,
            "name": "r1a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 621,
            "end": 628,
            "left": {
              "type": "Identifier",
              "start": 621,
              "end": 623,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 626,
              "end": 628,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 630,
      "end": 649,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 634,
          "end": 648,
          "id": {
            "type": "Identifier",
            "start": 634,
            "end": 638,
            "name": "r1a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 641,
            "end": 648,
            "left": {
              "type": "Identifier",
              "start": 641,
              "end": 643,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 646,
              "end": 648,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 650,
      "end": 669,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 654,
          "end": 668,
          "id": {
            "type": "Identifier",
            "start": 654,
            "end": 658,
            "name": "r1a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 661,
            "end": 668,
            "left": {
              "type": "Identifier",
              "start": 661,
              "end": 663,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 666,
              "end": 668,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 670,
      "end": 689,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 674,
          "end": 688,
          "id": {
            "type": "Identifier",
            "start": 674,
            "end": 678,
            "name": "r1a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 681,
            "end": 688,
            "left": {
              "type": "Identifier",
              "start": 681,
              "end": 683,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 686,
              "end": 688,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 690,
      "end": 709,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 694,
          "end": 708,
          "id": {
            "type": "Identifier",
            "start": 694,
            "end": 698,
            "name": "r1a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 701,
            "end": 708,
            "left": {
              "type": "Identifier",
              "start": 701,
              "end": 703,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 706,
              "end": 708,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 711,
      "end": 730,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 715,
          "end": 729,
          "id": {
            "type": "Identifier",
            "start": 715,
            "end": 719,
            "name": "r1b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 722,
            "end": 729,
            "left": {
              "type": "Identifier",
              "start": 722,
              "end": 724,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 727,
              "end": 729,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 731,
      "end": 750,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 735,
          "end": 749,
          "id": {
            "type": "Identifier",
            "start": 735,
            "end": 739,
            "name": "r1b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 742,
            "end": 749,
            "left": {
              "type": "Identifier",
              "start": 742,
              "end": 744,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 747,
              "end": 749,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 751,
      "end": 770,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 755,
          "end": 769,
          "id": {
            "type": "Identifier",
            "start": 755,
            "end": 759,
            "name": "r1b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 762,
            "end": 769,
            "left": {
              "type": "Identifier",
              "start": 762,
              "end": 764,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 767,
              "end": 769,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 771,
      "end": 790,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 775,
          "end": 789,
          "id": {
            "type": "Identifier",
            "start": 775,
            "end": 779,
            "name": "r1b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 782,
            "end": 789,
            "left": {
              "type": "Identifier",
              "start": 782,
              "end": 784,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 787,
              "end": 789,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 791,
      "end": 810,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 795,
          "end": 809,
          "id": {
            "type": "Identifier",
            "start": 795,
            "end": 799,
            "name": "r1b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 802,
            "end": 809,
            "left": {
              "type": "Identifier",
              "start": 802,
              "end": 804,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 807,
              "end": 809,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 811,
      "end": 830,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 815,
          "end": 829,
          "id": {
            "type": "Identifier",
            "start": 815,
            "end": 819,
            "name": "r1b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 822,
            "end": 829,
            "left": {
              "type": "Identifier",
              "start": 822,
              "end": 824,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 827,
              "end": 829,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 846,
      "end": 865,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 850,
          "end": 864,
          "id": {
            "type": "Identifier",
            "start": 850,
            "end": 854,
            "name": "r2a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 857,
            "end": 864,
            "left": {
              "type": "Identifier",
              "start": 857,
              "end": 859,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 862,
              "end": 864,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 866,
      "end": 885,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 870,
          "end": 884,
          "id": {
            "type": "Identifier",
            "start": 870,
            "end": 874,
            "name": "r2a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 877,
            "end": 884,
            "left": {
              "type": "Identifier",
              "start": 877,
              "end": 879,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 882,
              "end": 884,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 886,
      "end": 905,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 890,
          "end": 904,
          "id": {
            "type": "Identifier",
            "start": 890,
            "end": 894,
            "name": "r2a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 897,
            "end": 904,
            "left": {
              "type": "Identifier",
              "start": 897,
              "end": 899,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 902,
              "end": 904,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 906,
      "end": 925,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 910,
          "end": 924,
          "id": {
            "type": "Identifier",
            "start": 910,
            "end": 914,
            "name": "r2a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 917,
            "end": 924,
            "left": {
              "type": "Identifier",
              "start": 917,
              "end": 919,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 922,
              "end": 924,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 926,
      "end": 945,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 930,
          "end": 944,
          "id": {
            "type": "Identifier",
            "start": 930,
            "end": 934,
            "name": "r2a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 937,
            "end": 944,
            "left": {
              "type": "Identifier",
              "start": 937,
              "end": 939,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 942,
              "end": 944,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 946,
      "end": 965,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 950,
          "end": 964,
          "id": {
            "type": "Identifier",
            "start": 950,
            "end": 954,
            "name": "r2a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 957,
            "end": 964,
            "left": {
              "type": "Identifier",
              "start": 957,
              "end": 959,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 962,
              "end": 964,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 967,
      "end": 986,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 971,
          "end": 985,
          "id": {
            "type": "Identifier",
            "start": 971,
            "end": 975,
            "name": "r2b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 978,
            "end": 985,
            "left": {
              "type": "Identifier",
              "start": 978,
              "end": 980,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 983,
              "end": 985,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 987,
      "end": 1006,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 991,
          "end": 1005,
          "id": {
            "type": "Identifier",
            "start": 991,
            "end": 995,
            "name": "r2b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 998,
            "end": 1005,
            "left": {
              "type": "Identifier",
              "start": 998,
              "end": 1000,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1003,
              "end": 1005,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1007,
      "end": 1026,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1011,
          "end": 1025,
          "id": {
            "type": "Identifier",
            "start": 1011,
            "end": 1015,
            "name": "r2b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1018,
            "end": 1025,
            "left": {
              "type": "Identifier",
              "start": 1018,
              "end": 1020,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1023,
              "end": 1025,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1027,
      "end": 1046,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1031,
          "end": 1045,
          "id": {
            "type": "Identifier",
            "start": 1031,
            "end": 1035,
            "name": "r2b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1038,
            "end": 1045,
            "left": {
              "type": "Identifier",
              "start": 1038,
              "end": 1040,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1043,
              "end": 1045,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1047,
      "end": 1066,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1051,
          "end": 1065,
          "id": {
            "type": "Identifier",
            "start": 1051,
            "end": 1055,
            "name": "r2b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1058,
            "end": 1065,
            "left": {
              "type": "Identifier",
              "start": 1058,
              "end": 1060,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1063,
              "end": 1065,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1067,
      "end": 1086,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1071,
          "end": 1085,
          "id": {
            "type": "Identifier",
            "start": 1071,
            "end": 1075,
            "name": "r2b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1078,
            "end": 1085,
            "left": {
              "type": "Identifier",
              "start": 1078,
              "end": 1080,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1083,
              "end": 1085,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1103,
      "end": 1123,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1107,
          "end": 1122,
          "id": {
            "type": "Identifier",
            "start": 1107,
            "end": 1111,
            "name": "r3a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1114,
            "end": 1122,
            "left": {
              "type": "Identifier",
              "start": 1114,
              "end": 1116,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1120,
              "end": 1122,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1124,
      "end": 1144,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1128,
          "end": 1143,
          "id": {
            "type": "Identifier",
            "start": 1128,
            "end": 1132,
            "name": "r3a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1135,
            "end": 1143,
            "left": {
              "type": "Identifier",
              "start": 1135,
              "end": 1137,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1141,
              "end": 1143,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1145,
      "end": 1165,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1149,
          "end": 1164,
          "id": {
            "type": "Identifier",
            "start": 1149,
            "end": 1153,
            "name": "r3a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1156,
            "end": 1164,
            "left": {
              "type": "Identifier",
              "start": 1156,
              "end": 1158,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1162,
              "end": 1164,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1166,
      "end": 1186,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1170,
          "end": 1185,
          "id": {
            "type": "Identifier",
            "start": 1170,
            "end": 1174,
            "name": "r3a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1177,
            "end": 1185,
            "left": {
              "type": "Identifier",
              "start": 1177,
              "end": 1179,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1183,
              "end": 1185,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1187,
      "end": 1207,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1191,
          "end": 1206,
          "id": {
            "type": "Identifier",
            "start": 1191,
            "end": 1195,
            "name": "r3a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1198,
            "end": 1206,
            "left": {
              "type": "Identifier",
              "start": 1198,
              "end": 1200,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1204,
              "end": 1206,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1208,
      "end": 1228,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1212,
          "end": 1227,
          "id": {
            "type": "Identifier",
            "start": 1212,
            "end": 1216,
            "name": "r3a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1219,
            "end": 1227,
            "left": {
              "type": "Identifier",
              "start": 1219,
              "end": 1221,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1225,
              "end": 1227,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1230,
      "end": 1250,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1234,
          "end": 1249,
          "id": {
            "type": "Identifier",
            "start": 1234,
            "end": 1238,
            "name": "r3b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1241,
            "end": 1249,
            "left": {
              "type": "Identifier",
              "start": 1241,
              "end": 1243,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1247,
              "end": 1249,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1251,
      "end": 1271,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1255,
          "end": 1270,
          "id": {
            "type": "Identifier",
            "start": 1255,
            "end": 1259,
            "name": "r3b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1262,
            "end": 1270,
            "left": {
              "type": "Identifier",
              "start": 1262,
              "end": 1264,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1268,
              "end": 1270,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1272,
      "end": 1292,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1276,
          "end": 1291,
          "id": {
            "type": "Identifier",
            "start": 1276,
            "end": 1280,
            "name": "r3b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1283,
            "end": 1291,
            "left": {
              "type": "Identifier",
              "start": 1283,
              "end": 1285,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1289,
              "end": 1291,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1293,
      "end": 1313,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1297,
          "end": 1312,
          "id": {
            "type": "Identifier",
            "start": 1297,
            "end": 1301,
            "name": "r3b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1304,
            "end": 1312,
            "left": {
              "type": "Identifier",
              "start": 1304,
              "end": 1306,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1310,
              "end": 1312,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1314,
      "end": 1334,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1318,
          "end": 1333,
          "id": {
            "type": "Identifier",
            "start": 1318,
            "end": 1322,
            "name": "r3b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1325,
            "end": 1333,
            "left": {
              "type": "Identifier",
              "start": 1325,
              "end": 1327,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1331,
              "end": 1333,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1335,
      "end": 1355,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1339,
          "end": 1354,
          "id": {
            "type": "Identifier",
            "start": 1339,
            "end": 1343,
            "name": "r3b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1346,
            "end": 1354,
            "left": {
              "type": "Identifier",
              "start": 1346,
              "end": 1348,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1352,
              "end": 1354,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1372,
      "end": 1392,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1376,
          "end": 1391,
          "id": {
            "type": "Identifier",
            "start": 1376,
            "end": 1380,
            "name": "r4a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1383,
            "end": 1391,
            "left": {
              "type": "Identifier",
              "start": 1383,
              "end": 1385,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1389,
              "end": 1391,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1393,
      "end": 1413,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1397,
          "end": 1412,
          "id": {
            "type": "Identifier",
            "start": 1397,
            "end": 1401,
            "name": "r4a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1404,
            "end": 1412,
            "left": {
              "type": "Identifier",
              "start": 1404,
              "end": 1406,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1410,
              "end": 1412,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1414,
      "end": 1434,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1418,
          "end": 1433,
          "id": {
            "type": "Identifier",
            "start": 1418,
            "end": 1422,
            "name": "r4a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1425,
            "end": 1433,
            "left": {
              "type": "Identifier",
              "start": 1425,
              "end": 1427,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1431,
              "end": 1433,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1435,
      "end": 1455,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1439,
          "end": 1454,
          "id": {
            "type": "Identifier",
            "start": 1439,
            "end": 1443,
            "name": "r4a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1446,
            "end": 1454,
            "left": {
              "type": "Identifier",
              "start": 1446,
              "end": 1448,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1452,
              "end": 1454,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1456,
      "end": 1476,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1460,
          "end": 1475,
          "id": {
            "type": "Identifier",
            "start": 1460,
            "end": 1464,
            "name": "r4a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1467,
            "end": 1475,
            "left": {
              "type": "Identifier",
              "start": 1467,
              "end": 1469,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1473,
              "end": 1475,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1477,
      "end": 1497,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1481,
          "end": 1496,
          "id": {
            "type": "Identifier",
            "start": 1481,
            "end": 1485,
            "name": "r4a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1488,
            "end": 1496,
            "left": {
              "type": "Identifier",
              "start": 1488,
              "end": 1490,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1494,
              "end": 1496,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1499,
      "end": 1519,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1503,
          "end": 1518,
          "id": {
            "type": "Identifier",
            "start": 1503,
            "end": 1507,
            "name": "r4b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1510,
            "end": 1518,
            "left": {
              "type": "Identifier",
              "start": 1510,
              "end": 1512,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1516,
              "end": 1518,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1520,
      "end": 1540,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1524,
          "end": 1539,
          "id": {
            "type": "Identifier",
            "start": 1524,
            "end": 1528,
            "name": "r4b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1531,
            "end": 1539,
            "left": {
              "type": "Identifier",
              "start": 1531,
              "end": 1533,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1537,
              "end": 1539,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1541,
      "end": 1561,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1545,
          "end": 1560,
          "id": {
            "type": "Identifier",
            "start": 1545,
            "end": 1549,
            "name": "r4b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1552,
            "end": 1560,
            "left": {
              "type": "Identifier",
              "start": 1552,
              "end": 1554,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1558,
              "end": 1560,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1562,
      "end": 1582,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1566,
          "end": 1581,
          "id": {
            "type": "Identifier",
            "start": 1566,
            "end": 1570,
            "name": "r4b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1573,
            "end": 1581,
            "left": {
              "type": "Identifier",
              "start": 1573,
              "end": 1575,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1579,
              "end": 1581,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1583,
      "end": 1603,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1587,
          "end": 1602,
          "id": {
            "type": "Identifier",
            "start": 1587,
            "end": 1591,
            "name": "r4b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1594,
            "end": 1602,
            "left": {
              "type": "Identifier",
              "start": 1594,
              "end": 1596,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1600,
              "end": 1602,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1604,
      "end": 1624,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1608,
          "end": 1623,
          "id": {
            "type": "Identifier",
            "start": 1608,
            "end": 1612,
            "name": "r4b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1615,
            "end": 1623,
            "left": {
              "type": "Identifier",
              "start": 1615,
              "end": 1617,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1621,
              "end": 1623,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1641,
      "end": 1661,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1645,
          "end": 1660,
          "id": {
            "type": "Identifier",
            "start": 1645,
            "end": 1649,
            "name": "r5a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1652,
            "end": 1660,
            "left": {
              "type": "Identifier",
              "start": 1652,
              "end": 1654,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 1658,
              "end": 1660,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1662,
      "end": 1682,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1666,
          "end": 1681,
          "id": {
            "type": "Identifier",
            "start": 1666,
            "end": 1670,
            "name": "r5a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1673,
            "end": 1681,
            "left": {
              "type": "Identifier",
              "start": 1673,
              "end": 1675,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 1679,
              "end": 1681,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1683,
      "end": 1703,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1687,
          "end": 1702,
          "id": {
            "type": "Identifier",
            "start": 1687,
            "end": 1691,
            "name": "r5a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1694,
            "end": 1702,
            "left": {
              "type": "Identifier",
              "start": 1694,
              "end": 1696,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 1700,
              "end": 1702,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1704,
      "end": 1724,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1708,
          "end": 1723,
          "id": {
            "type": "Identifier",
            "start": 1708,
            "end": 1712,
            "name": "r5a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1715,
            "end": 1723,
            "left": {
              "type": "Identifier",
              "start": 1715,
              "end": 1717,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 1721,
              "end": 1723,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1725,
      "end": 1745,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1729,
          "end": 1744,
          "id": {
            "type": "Identifier",
            "start": 1729,
            "end": 1733,
            "name": "r5a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1736,
            "end": 1744,
            "left": {
              "type": "Identifier",
              "start": 1736,
              "end": 1738,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 1742,
              "end": 1744,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1746,
      "end": 1766,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1750,
          "end": 1765,
          "id": {
            "type": "Identifier",
            "start": 1750,
            "end": 1754,
            "name": "r5a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1757,
            "end": 1765,
            "left": {
              "type": "Identifier",
              "start": 1757,
              "end": 1759,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 1763,
              "end": 1765,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1768,
      "end": 1788,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1772,
          "end": 1787,
          "id": {
            "type": "Identifier",
            "start": 1772,
            "end": 1776,
            "name": "r5b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1779,
            "end": 1787,
            "left": {
              "type": "Identifier",
              "start": 1779,
              "end": 1781,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 1785,
              "end": 1787,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1789,
      "end": 1809,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1793,
          "end": 1808,
          "id": {
            "type": "Identifier",
            "start": 1793,
            "end": 1797,
            "name": "r5b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1800,
            "end": 1808,
            "left": {
              "type": "Identifier",
              "start": 1800,
              "end": 1802,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 1806,
              "end": 1808,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1810,
      "end": 1830,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1814,
          "end": 1829,
          "id": {
            "type": "Identifier",
            "start": 1814,
            "end": 1818,
            "name": "r5b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1821,
            "end": 1829,
            "left": {
              "type": "Identifier",
              "start": 1821,
              "end": 1823,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 1827,
              "end": 1829,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1831,
      "end": 1851,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1835,
          "end": 1850,
          "id": {
            "type": "Identifier",
            "start": 1835,
            "end": 1839,
            "name": "r5b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1842,
            "end": 1850,
            "left": {
              "type": "Identifier",
              "start": 1842,
              "end": 1844,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 1848,
              "end": 1850,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1852,
      "end": 1872,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1856,
          "end": 1871,
          "id": {
            "type": "Identifier",
            "start": 1856,
            "end": 1860,
            "name": "r5b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1863,
            "end": 1871,
            "left": {
              "type": "Identifier",
              "start": 1863,
              "end": 1865,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 1869,
              "end": 1871,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1873,
      "end": 1893,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1877,
          "end": 1892,
          "id": {
            "type": "Identifier",
            "start": 1877,
            "end": 1881,
            "name": "r5b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1884,
            "end": 1892,
            "left": {
              "type": "Identifier",
              "start": 1884,
              "end": 1886,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 1890,
              "end": 1892,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1910,
      "end": 1930,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1914,
          "end": 1929,
          "id": {
            "type": "Identifier",
            "start": 1914,
            "end": 1918,
            "name": "r6a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1921,
            "end": 1929,
            "left": {
              "type": "Identifier",
              "start": 1921,
              "end": 1923,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 1927,
              "end": 1929,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1931,
      "end": 1951,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1935,
          "end": 1950,
          "id": {
            "type": "Identifier",
            "start": 1935,
            "end": 1939,
            "name": "r6a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1942,
            "end": 1950,
            "left": {
              "type": "Identifier",
              "start": 1942,
              "end": 1944,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 1948,
              "end": 1950,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1952,
      "end": 1972,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1956,
          "end": 1971,
          "id": {
            "type": "Identifier",
            "start": 1956,
            "end": 1960,
            "name": "r6a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1963,
            "end": 1971,
            "left": {
              "type": "Identifier",
              "start": 1963,
              "end": 1965,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 1969,
              "end": 1971,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1973,
      "end": 1993,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1977,
          "end": 1992,
          "id": {
            "type": "Identifier",
            "start": 1977,
            "end": 1981,
            "name": "r6a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1984,
            "end": 1992,
            "left": {
              "type": "Identifier",
              "start": 1984,
              "end": 1986,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 1990,
              "end": 1992,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1994,
      "end": 2014,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1998,
          "end": 2013,
          "id": {
            "type": "Identifier",
            "start": 1998,
            "end": 2002,
            "name": "r6a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2005,
            "end": 2013,
            "left": {
              "type": "Identifier",
              "start": 2005,
              "end": 2007,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2011,
              "end": 2013,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2015,
      "end": 2035,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2019,
          "end": 2034,
          "id": {
            "type": "Identifier",
            "start": 2019,
            "end": 2023,
            "name": "r6a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2026,
            "end": 2034,
            "left": {
              "type": "Identifier",
              "start": 2026,
              "end": 2028,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2032,
              "end": 2034,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2037,
      "end": 2057,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2041,
          "end": 2056,
          "id": {
            "type": "Identifier",
            "start": 2041,
            "end": 2045,
            "name": "r6b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2048,
            "end": 2056,
            "left": {
              "type": "Identifier",
              "start": 2048,
              "end": 2050,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2054,
              "end": 2056,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2058,
      "end": 2078,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2062,
          "end": 2077,
          "id": {
            "type": "Identifier",
            "start": 2062,
            "end": 2066,
            "name": "r6b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2069,
            "end": 2077,
            "left": {
              "type": "Identifier",
              "start": 2069,
              "end": 2071,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2075,
              "end": 2077,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2079,
      "end": 2099,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2083,
          "end": 2098,
          "id": {
            "type": "Identifier",
            "start": 2083,
            "end": 2087,
            "name": "r6b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2090,
            "end": 2098,
            "left": {
              "type": "Identifier",
              "start": 2090,
              "end": 2092,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2096,
              "end": 2098,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2100,
      "end": 2120,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2104,
          "end": 2119,
          "id": {
            "type": "Identifier",
            "start": 2104,
            "end": 2108,
            "name": "r6b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2111,
            "end": 2119,
            "left": {
              "type": "Identifier",
              "start": 2111,
              "end": 2113,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2117,
              "end": 2119,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2121,
      "end": 2141,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2125,
          "end": 2140,
          "id": {
            "type": "Identifier",
            "start": 2125,
            "end": 2129,
            "name": "r6b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2132,
            "end": 2140,
            "left": {
              "type": "Identifier",
              "start": 2132,
              "end": 2134,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2138,
              "end": 2140,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2142,
      "end": 2162,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2146,
          "end": 2161,
          "id": {
            "type": "Identifier",
            "start": 2146,
            "end": 2150,
            "name": "r6b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2153,
            "end": 2161,
            "left": {
              "type": "Identifier",
              "start": 2153,
              "end": 2155,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2159,
              "end": 2161,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2180,
      "end": 2201,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2184,
          "end": 2200,
          "id": {
            "type": "Identifier",
            "start": 2184,
            "end": 2188,
            "name": "r7a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2191,
            "end": 2200,
            "left": {
              "type": "Identifier",
              "start": 2191,
              "end": 2193,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2198,
              "end": 2200,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2202,
      "end": 2223,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2206,
          "end": 2222,
          "id": {
            "type": "Identifier",
            "start": 2206,
            "end": 2210,
            "name": "r7a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2213,
            "end": 2222,
            "left": {
              "type": "Identifier",
              "start": 2213,
              "end": 2215,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2220,
              "end": 2222,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2224,
      "end": 2245,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2228,
          "end": 2244,
          "id": {
            "type": "Identifier",
            "start": 2228,
            "end": 2232,
            "name": "r7a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2235,
            "end": 2244,
            "left": {
              "type": "Identifier",
              "start": 2235,
              "end": 2237,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2242,
              "end": 2244,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2246,
      "end": 2267,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2250,
          "end": 2266,
          "id": {
            "type": "Identifier",
            "start": 2250,
            "end": 2254,
            "name": "r7a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2257,
            "end": 2266,
            "left": {
              "type": "Identifier",
              "start": 2257,
              "end": 2259,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2264,
              "end": 2266,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2268,
      "end": 2289,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2272,
          "end": 2288,
          "id": {
            "type": "Identifier",
            "start": 2272,
            "end": 2276,
            "name": "r7a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2279,
            "end": 2288,
            "left": {
              "type": "Identifier",
              "start": 2279,
              "end": 2281,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2286,
              "end": 2288,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2290,
      "end": 2311,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2294,
          "end": 2310,
          "id": {
            "type": "Identifier",
            "start": 2294,
            "end": 2298,
            "name": "r7a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2301,
            "end": 2310,
            "left": {
              "type": "Identifier",
              "start": 2301,
              "end": 2303,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2308,
              "end": 2310,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2313,
      "end": 2334,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2317,
          "end": 2333,
          "id": {
            "type": "Identifier",
            "start": 2317,
            "end": 2321,
            "name": "r7b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2324,
            "end": 2333,
            "left": {
              "type": "Identifier",
              "start": 2324,
              "end": 2326,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2331,
              "end": 2333,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2335,
      "end": 2356,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2339,
          "end": 2355,
          "id": {
            "type": "Identifier",
            "start": 2339,
            "end": 2343,
            "name": "r7b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2346,
            "end": 2355,
            "left": {
              "type": "Identifier",
              "start": 2346,
              "end": 2348,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2353,
              "end": 2355,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2357,
      "end": 2378,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2361,
          "end": 2377,
          "id": {
            "type": "Identifier",
            "start": 2361,
            "end": 2365,
            "name": "r7b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2368,
            "end": 2377,
            "left": {
              "type": "Identifier",
              "start": 2368,
              "end": 2370,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2375,
              "end": 2377,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2379,
      "end": 2400,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2383,
          "end": 2399,
          "id": {
            "type": "Identifier",
            "start": 2383,
            "end": 2387,
            "name": "r7b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2390,
            "end": 2399,
            "left": {
              "type": "Identifier",
              "start": 2390,
              "end": 2392,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2397,
              "end": 2399,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2401,
      "end": 2422,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2405,
          "end": 2421,
          "id": {
            "type": "Identifier",
            "start": 2405,
            "end": 2409,
            "name": "r7b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2412,
            "end": 2421,
            "left": {
              "type": "Identifier",
              "start": 2412,
              "end": 2414,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2419,
              "end": 2421,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2423,
      "end": 2444,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2427,
          "end": 2443,
          "id": {
            "type": "Identifier",
            "start": 2427,
            "end": 2431,
            "name": "r7b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2434,
            "end": 2443,
            "left": {
              "type": "Identifier",
              "start": 2434,
              "end": 2436,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2441,
              "end": 2443,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2462,
      "end": 2483,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2466,
          "end": 2482,
          "id": {
            "type": "Identifier",
            "start": 2466,
            "end": 2470,
            "name": "r8a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2473,
            "end": 2482,
            "left": {
              "type": "Identifier",
              "start": 2473,
              "end": 2475,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 2480,
              "end": 2482,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2484,
      "end": 2505,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2488,
          "end": 2504,
          "id": {
            "type": "Identifier",
            "start": 2488,
            "end": 2492,
            "name": "r8a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2495,
            "end": 2504,
            "left": {
              "type": "Identifier",
              "start": 2495,
              "end": 2497,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 2502,
              "end": 2504,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2506,
      "end": 2527,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2510,
          "end": 2526,
          "id": {
            "type": "Identifier",
            "start": 2510,
            "end": 2514,
            "name": "r8a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2517,
            "end": 2526,
            "left": {
              "type": "Identifier",
              "start": 2517,
              "end": 2519,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 2524,
              "end": 2526,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2528,
      "end": 2549,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2532,
          "end": 2548,
          "id": {
            "type": "Identifier",
            "start": 2532,
            "end": 2536,
            "name": "r8a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2539,
            "end": 2548,
            "left": {
              "type": "Identifier",
              "start": 2539,
              "end": 2541,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 2546,
              "end": 2548,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2550,
      "end": 2571,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2554,
          "end": 2570,
          "id": {
            "type": "Identifier",
            "start": 2554,
            "end": 2558,
            "name": "r8a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2561,
            "end": 2570,
            "left": {
              "type": "Identifier",
              "start": 2561,
              "end": 2563,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 2568,
              "end": 2570,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2572,
      "end": 2593,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2576,
          "end": 2592,
          "id": {
            "type": "Identifier",
            "start": 2576,
            "end": 2580,
            "name": "r8a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2583,
            "end": 2592,
            "left": {
              "type": "Identifier",
              "start": 2583,
              "end": 2585,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 2590,
              "end": 2592,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2595,
      "end": 2616,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2599,
          "end": 2615,
          "id": {
            "type": "Identifier",
            "start": 2599,
            "end": 2603,
            "name": "r8b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2606,
            "end": 2615,
            "left": {
              "type": "Identifier",
              "start": 2606,
              "end": 2608,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 2613,
              "end": 2615,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2617,
      "end": 2638,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2621,
          "end": 2637,
          "id": {
            "type": "Identifier",
            "start": 2621,
            "end": 2625,
            "name": "r8b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2628,
            "end": 2637,
            "left": {
              "type": "Identifier",
              "start": 2628,
              "end": 2630,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 2635,
              "end": 2637,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2639,
      "end": 2660,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2643,
          "end": 2659,
          "id": {
            "type": "Identifier",
            "start": 2643,
            "end": 2647,
            "name": "r8b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2650,
            "end": 2659,
            "left": {
              "type": "Identifier",
              "start": 2650,
              "end": 2652,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 2657,
              "end": 2659,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2661,
      "end": 2682,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2665,
          "end": 2681,
          "id": {
            "type": "Identifier",
            "start": 2665,
            "end": 2669,
            "name": "r8b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2672,
            "end": 2681,
            "left": {
              "type": "Identifier",
              "start": 2672,
              "end": 2674,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 2679,
              "end": 2681,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2683,
      "end": 2704,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2687,
          "end": 2703,
          "id": {
            "type": "Identifier",
            "start": 2687,
            "end": 2691,
            "name": "r8b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2694,
            "end": 2703,
            "left": {
              "type": "Identifier",
              "start": 2694,
              "end": 2696,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 2701,
              "end": 2703,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2705,
      "end": 2726,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2709,
          "end": 2725,
          "id": {
            "type": "Identifier",
            "start": 2709,
            "end": 2713,
            "name": "r8b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2716,
            "end": 2725,
            "left": {
              "type": "Identifier",
              "start": 2716,
              "end": 2718,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 2723,
              "end": 2725,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
