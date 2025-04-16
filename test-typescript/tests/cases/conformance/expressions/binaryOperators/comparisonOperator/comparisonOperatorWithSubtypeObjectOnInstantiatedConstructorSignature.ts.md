__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 3171,
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
      "type": "VariableDeclaration",
      "start": 92,
      "end": 121,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 96,
          "end": 120,
          "id": {
            "type": "Identifier",
            "start": 96,
            "end": 120,
            "name": "a1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 98,
              "end": 120,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 100,
                "end": 120,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 102,
                    "end": 118,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 106,
                      "end": 109,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 107,
                          "end": 108,
                          "name": {
                            "type": "Identifier",
                            "start": 107,
                            "end": 108,
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
                        "start": 110,
                        "end": 114,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 111,
                          "end": 114,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 113,
                            "end": 114,
                            "typeName": {
                              "type": "Identifier",
                              "start": 113,
                              "end": 114,
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
                      "start": 115,
                      "end": 118,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 117,
                        "end": 118,
                        "typeName": {
                          "type": "Identifier",
                          "start": 117,
                          "end": 118,
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
      "start": 122,
      "end": 158,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 126,
          "end": 157,
          "id": {
            "type": "Identifier",
            "start": 126,
            "end": 157,
            "name": "b1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 128,
              "end": 157,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 130,
                "end": 157,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 132,
                    "end": 155,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 137,
                        "end": 146,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 138,
                          "end": 146,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 140,
                            "end": 146
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 147,
                      "end": 155,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 149,
                        "end": 155
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
      "start": 160,
      "end": 189,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 164,
          "end": 188,
          "id": {
            "type": "Identifier",
            "start": 164,
            "end": 188,
            "name": "a2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 166,
              "end": 188,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 168,
                "end": 188,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 170,
                    "end": 186,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 174,
                      "end": 177,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 175,
                          "end": 176,
                          "name": {
                            "type": "Identifier",
                            "start": 175,
                            "end": 176,
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
                        "start": 178,
                        "end": 182,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 179,
                          "end": 182,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 181,
                            "end": 182,
                            "typeName": {
                              "type": "Identifier",
                              "start": 181,
                              "end": 182,
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
                      "start": 183,
                      "end": 186,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 185,
                        "end": 186,
                        "typeName": {
                          "type": "Identifier",
                          "start": 185,
                          "end": 186,
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
      "start": 190,
      "end": 237,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 194,
          "end": 236,
          "id": {
            "type": "Identifier",
            "start": 194,
            "end": 236,
            "name": "b2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 196,
              "end": 236,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 198,
                "end": 236,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 200,
                    "end": 234,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 205,
                        "end": 214,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 206,
                          "end": 214,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 208,
                            "end": 214
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 216,
                        "end": 225,
                        "name": "y",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 217,
                          "end": 225,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 219,
                            "end": 225
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 226,
                      "end": 234,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 228,
                        "end": 234
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
      "start": 239,
      "end": 277,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 243,
          "end": 276,
          "id": {
            "type": "Identifier",
            "start": 243,
            "end": 276,
            "name": "a3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 245,
              "end": 276,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 247,
                "end": 276,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 249,
                    "end": 274,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 253,
                      "end": 259,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 254,
                          "end": 255,
                          "name": {
                            "type": "Identifier",
                            "start": 254,
                            "end": 255,
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
                          "start": 257,
                          "end": 258,
                          "name": {
                            "type": "Identifier",
                            "start": 257,
                            "end": 258,
                            "name": "U",
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
                        "start": 260,
                        "end": 264,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 261,
                          "end": 264,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 263,
                            "end": 264,
                            "typeName": {
                              "type": "Identifier",
                              "start": 263,
                              "end": 264,
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
                        "start": 266,
                        "end": 270,
                        "name": "y",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 267,
                          "end": 270,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 269,
                            "end": 270,
                            "typeName": {
                              "type": "Identifier",
                              "start": 269,
                              "end": 270,
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
                      "start": 271,
                      "end": 274,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 273,
                        "end": 274,
                        "typeName": {
                          "type": "Identifier",
                          "start": 273,
                          "end": 274,
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
      "start": 278,
      "end": 325,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 282,
          "end": 324,
          "id": {
            "type": "Identifier",
            "start": 282,
            "end": 324,
            "name": "b3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 284,
              "end": 324,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 286,
                "end": 324,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 288,
                    "end": 322,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 293,
                        "end": 302,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 294,
                          "end": 302,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 296,
                            "end": 302
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 304,
                        "end": 313,
                        "name": "y",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 305,
                          "end": 313,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 307,
                            "end": 313
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 314,
                      "end": 322,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 316,
                        "end": 322
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
      "start": 327,
      "end": 357,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 331,
          "end": 356,
          "id": {
            "type": "Identifier",
            "start": 331,
            "end": 356,
            "name": "a4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 333,
              "end": 356,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 335,
                "end": 356,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 337,
                    "end": 354,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 341,
                      "end": 344,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 342,
                          "end": 343,
                          "name": {
                            "type": "Identifier",
                            "start": 342,
                            "end": 343,
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
                        "start": 345,
                        "end": 350,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 347,
                          "end": 350,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 349,
                            "end": 350,
                            "typeName": {
                              "type": "Identifier",
                              "start": 349,
                              "end": 350,
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
                      "start": 351,
                      "end": 354,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 353,
                        "end": 354,
                        "typeName": {
                          "type": "Identifier",
                          "start": 353,
                          "end": 354,
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
      "start": 358,
      "end": 395,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 362,
          "end": 394,
          "id": {
            "type": "Identifier",
            "start": 362,
            "end": 394,
            "name": "b4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 364,
              "end": 394,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 366,
                "end": 394,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 368,
                    "end": 392,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 373,
                        "end": 383,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 375,
                          "end": 383,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 377,
                            "end": 383
                          }
                        },
                        "decorators": [],
                        "optional": true
                      }
                    ],
                    "returnType": {
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
      "start": 397,
      "end": 431,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 401,
          "end": 430,
          "id": {
            "type": "Identifier",
            "start": 401,
            "end": 430,
            "name": "a5",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 403,
              "end": 430,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 405,
                "end": 430,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 407,
                    "end": 428,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 411,
                      "end": 414,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 412,
                          "end": 413,
                          "name": {
                            "type": "Identifier",
                            "start": 412,
                            "end": 413,
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
                        "start": 415,
                        "end": 424,
                        "argument": {
                          "type": "Identifier",
                          "start": 418,
                          "end": 419,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 419,
                          "end": 424,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 421,
                            "end": 424,
                            "elementType": {
                              "type": "TSTypeReference",
                              "start": 421,
                              "end": 422,
                              "typeName": {
                                "type": "Identifier",
                                "start": 421,
                                "end": 422,
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
                      "start": 425,
                      "end": 428,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 427,
                        "end": 428,
                        "typeName": {
                          "type": "Identifier",
                          "start": 427,
                          "end": 428,
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
      "start": 432,
      "end": 473,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 436,
          "end": 472,
          "id": {
            "type": "Identifier",
            "start": 436,
            "end": 472,
            "name": "b5",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 438,
              "end": 472,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 440,
                "end": 472,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 442,
                    "end": 470,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 447,
                        "end": 461,
                        "argument": {
                          "type": "Identifier",
                          "start": 450,
                          "end": 451,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 451,
                          "end": 461,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 453,
                            "end": 461,
                            "elementType": {
                              "type": "TSStringKeyword",
                              "start": 453,
                              "end": 459
                            }
                          }
                        },
                        "value": null
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 462,
                      "end": 470,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 464,
                        "end": 470
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
      "start": 475,
      "end": 510,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 479,
          "end": 509,
          "id": {
            "type": "Identifier",
            "start": 479,
            "end": 509,
            "name": "a6",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 481,
              "end": 509,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 483,
                "end": 509,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 485,
                    "end": 507,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 489,
                      "end": 492,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 490,
                          "end": 491,
                          "name": {
                            "type": "Identifier",
                            "start": 490,
                            "end": 491,
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
                        "start": 493,
                        "end": 497,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 494,
                          "end": 497,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 496,
                            "end": 497,
                            "typeName": {
                              "type": "Identifier",
                              "start": 496,
                              "end": 497,
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
                        "start": 499,
                        "end": 503,
                        "name": "y",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 500,
                          "end": 503,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 502,
                            "end": 503,
                            "typeName": {
                              "type": "Identifier",
                              "start": 502,
                              "end": 503,
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
                      "start": 504,
                      "end": 507,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 506,
                        "end": 507,
                        "typeName": {
                          "type": "Identifier",
                          "start": 506,
                          "end": 507,
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
      "start": 511,
      "end": 554,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 515,
          "end": 553,
          "id": {
            "type": "Identifier",
            "start": 515,
            "end": 553,
            "name": "b6",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 517,
              "end": 553,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 519,
                "end": 553,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 521,
                    "end": 551,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 526,
                        "end": 535,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 527,
                          "end": 535,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 529,
                            "end": 535
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 537,
                        "end": 546,
                        "name": "y",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 538,
                          "end": 546,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 540,
                            "end": 546
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 547,
                      "end": 551,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 549,
                        "end": 551,
                        "members": []
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
      "start": 607,
      "end": 651,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 611,
          "end": 650,
          "id": {
            "type": "Identifier",
            "start": 611,
            "end": 650,
            "name": "b7",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 613,
              "end": 650,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 615,
                "end": 650,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 617,
                    "end": 648,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 622,
                        "end": 629,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 623,
                          "end": 629,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 625,
                            "end": 629,
                            "typeName": {
                              "type": "Identifier",
                              "start": 625,
                              "end": 629,
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
                        "start": 631,
                        "end": 641,
                        "name": "y",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 632,
                          "end": 641,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 634,
                            "end": 641,
                            "typeName": {
                              "type": "Identifier",
                              "start": 634,
                              "end": 641,
                              "name": "Derived",
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
                      "start": 642,
                      "end": 648,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 644,
                        "end": 648,
                        "typeName": {
                          "type": "Identifier",
                          "start": 644,
                          "end": 648,
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
      "start": 667,
      "end": 686,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 671,
          "end": 685,
          "id": {
            "type": "Identifier",
            "start": 671,
            "end": 675,
            "name": "r1a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 678,
            "end": 685,
            "left": {
              "type": "Identifier",
              "start": 678,
              "end": 680,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 683,
              "end": 685,
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
      "start": 687,
      "end": 706,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 691,
          "end": 705,
          "id": {
            "type": "Identifier",
            "start": 691,
            "end": 695,
            "name": "r1a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 698,
            "end": 705,
            "left": {
              "type": "Identifier",
              "start": 698,
              "end": 700,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 703,
              "end": 705,
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
      "start": 707,
      "end": 726,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 711,
          "end": 725,
          "id": {
            "type": "Identifier",
            "start": 711,
            "end": 715,
            "name": "r1a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 718,
            "end": 725,
            "left": {
              "type": "Identifier",
              "start": 718,
              "end": 720,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 723,
              "end": 725,
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
      "start": 727,
      "end": 746,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 731,
          "end": 745,
          "id": {
            "type": "Identifier",
            "start": 731,
            "end": 735,
            "name": "r1a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 738,
            "end": 745,
            "left": {
              "type": "Identifier",
              "start": 738,
              "end": 740,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 743,
              "end": 745,
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
      "start": 747,
      "end": 766,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 751,
          "end": 765,
          "id": {
            "type": "Identifier",
            "start": 751,
            "end": 755,
            "name": "r1a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 758,
            "end": 765,
            "left": {
              "type": "Identifier",
              "start": 758,
              "end": 760,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 763,
              "end": 765,
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
      "start": 767,
      "end": 786,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 771,
          "end": 785,
          "id": {
            "type": "Identifier",
            "start": 771,
            "end": 775,
            "name": "r1a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 778,
            "end": 785,
            "left": {
              "type": "Identifier",
              "start": 778,
              "end": 780,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 783,
              "end": 785,
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
      "start": 810,
      "end": 829,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 814,
          "end": 828,
          "id": {
            "type": "Identifier",
            "start": 814,
            "end": 818,
            "name": "r1b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 821,
            "end": 828,
            "left": {
              "type": "Identifier",
              "start": 821,
              "end": 823,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 826,
              "end": 828,
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
      "start": 830,
      "end": 849,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 834,
          "end": 848,
          "id": {
            "type": "Identifier",
            "start": 834,
            "end": 838,
            "name": "r1b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 841,
            "end": 848,
            "left": {
              "type": "Identifier",
              "start": 841,
              "end": 843,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 846,
              "end": 848,
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
      "start": 850,
      "end": 869,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 854,
          "end": 868,
          "id": {
            "type": "Identifier",
            "start": 854,
            "end": 858,
            "name": "r1b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 861,
            "end": 868,
            "left": {
              "type": "Identifier",
              "start": 861,
              "end": 863,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 866,
              "end": 868,
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
      "start": 870,
      "end": 889,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 874,
          "end": 888,
          "id": {
            "type": "Identifier",
            "start": 874,
            "end": 878,
            "name": "r1b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 881,
            "end": 888,
            "left": {
              "type": "Identifier",
              "start": 881,
              "end": 883,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 886,
              "end": 888,
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
      "start": 890,
      "end": 909,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 894,
          "end": 908,
          "id": {
            "type": "Identifier",
            "start": 894,
            "end": 898,
            "name": "r1b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 901,
            "end": 908,
            "left": {
              "type": "Identifier",
              "start": 901,
              "end": 903,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 906,
              "end": 908,
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
      "start": 910,
      "end": 929,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 914,
          "end": 928,
          "id": {
            "type": "Identifier",
            "start": 914,
            "end": 918,
            "name": "r1b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 921,
            "end": 928,
            "left": {
              "type": "Identifier",
              "start": 921,
              "end": 923,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 926,
              "end": 928,
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
            "name": "r2a1",
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
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 983,
              "end": 985,
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
            "name": "r2a2",
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
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1003,
              "end": 1005,
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
            "name": "r2a3",
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
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1023,
              "end": 1025,
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
            "name": "r2a4",
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
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1043,
              "end": 1045,
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
            "name": "r2a5",
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
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1063,
              "end": 1065,
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
            "name": "r2a6",
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
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1083,
              "end": 1085,
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
      "start": 1110,
      "end": 1129,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1114,
          "end": 1128,
          "id": {
            "type": "Identifier",
            "start": 1114,
            "end": 1118,
            "name": "r2b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1121,
            "end": 1128,
            "left": {
              "type": "Identifier",
              "start": 1121,
              "end": 1123,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1126,
              "end": 1128,
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
      "start": 1130,
      "end": 1149,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1134,
          "end": 1148,
          "id": {
            "type": "Identifier",
            "start": 1134,
            "end": 1138,
            "name": "r2b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1141,
            "end": 1148,
            "left": {
              "type": "Identifier",
              "start": 1141,
              "end": 1143,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1146,
              "end": 1148,
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
      "start": 1150,
      "end": 1169,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1154,
          "end": 1168,
          "id": {
            "type": "Identifier",
            "start": 1154,
            "end": 1158,
            "name": "r2b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1161,
            "end": 1168,
            "left": {
              "type": "Identifier",
              "start": 1161,
              "end": 1163,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1166,
              "end": 1168,
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
      "start": 1170,
      "end": 1189,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1174,
          "end": 1188,
          "id": {
            "type": "Identifier",
            "start": 1174,
            "end": 1178,
            "name": "r2b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1181,
            "end": 1188,
            "left": {
              "type": "Identifier",
              "start": 1181,
              "end": 1183,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1186,
              "end": 1188,
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
      "start": 1190,
      "end": 1209,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1194,
          "end": 1208,
          "id": {
            "type": "Identifier",
            "start": 1194,
            "end": 1198,
            "name": "r2b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1201,
            "end": 1208,
            "left": {
              "type": "Identifier",
              "start": 1201,
              "end": 1203,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1206,
              "end": 1208,
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
      "start": 1210,
      "end": 1229,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1214,
          "end": 1228,
          "id": {
            "type": "Identifier",
            "start": 1214,
            "end": 1218,
            "name": "r2b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1221,
            "end": 1228,
            "left": {
              "type": "Identifier",
              "start": 1221,
              "end": 1223,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1226,
              "end": 1228,
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
      "start": 1268,
      "end": 1288,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1272,
          "end": 1287,
          "id": {
            "type": "Identifier",
            "start": 1272,
            "end": 1276,
            "name": "r3a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1279,
            "end": 1287,
            "left": {
              "type": "Identifier",
              "start": 1279,
              "end": 1281,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1285,
              "end": 1287,
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
      "start": 1289,
      "end": 1309,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1293,
          "end": 1308,
          "id": {
            "type": "Identifier",
            "start": 1293,
            "end": 1297,
            "name": "r3a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1300,
            "end": 1308,
            "left": {
              "type": "Identifier",
              "start": 1300,
              "end": 1302,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1306,
              "end": 1308,
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
      "start": 1310,
      "end": 1330,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1314,
          "end": 1329,
          "id": {
            "type": "Identifier",
            "start": 1314,
            "end": 1318,
            "name": "r3a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1321,
            "end": 1329,
            "left": {
              "type": "Identifier",
              "start": 1321,
              "end": 1323,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1327,
              "end": 1329,
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
      "start": 1331,
      "end": 1351,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1335,
          "end": 1350,
          "id": {
            "type": "Identifier",
            "start": 1335,
            "end": 1339,
            "name": "r3a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1342,
            "end": 1350,
            "left": {
              "type": "Identifier",
              "start": 1342,
              "end": 1344,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1348,
              "end": 1350,
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
      "start": 1352,
      "end": 1372,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1356,
          "end": 1371,
          "id": {
            "type": "Identifier",
            "start": 1356,
            "end": 1360,
            "name": "r3a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1363,
            "end": 1371,
            "left": {
              "type": "Identifier",
              "start": 1363,
              "end": 1365,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1369,
              "end": 1371,
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
      "start": 1373,
      "end": 1393,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1377,
          "end": 1392,
          "id": {
            "type": "Identifier",
            "start": 1377,
            "end": 1381,
            "name": "r3a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1384,
            "end": 1392,
            "left": {
              "type": "Identifier",
              "start": 1384,
              "end": 1386,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1390,
              "end": 1392,
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
      "start": 1418,
      "end": 1438,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1422,
          "end": 1437,
          "id": {
            "type": "Identifier",
            "start": 1422,
            "end": 1426,
            "name": "r3b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1429,
            "end": 1437,
            "left": {
              "type": "Identifier",
              "start": 1429,
              "end": 1431,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1435,
              "end": 1437,
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
      "start": 1439,
      "end": 1459,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1443,
          "end": 1458,
          "id": {
            "type": "Identifier",
            "start": 1443,
            "end": 1447,
            "name": "r3b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1450,
            "end": 1458,
            "left": {
              "type": "Identifier",
              "start": 1450,
              "end": 1452,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1456,
              "end": 1458,
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
      "start": 1460,
      "end": 1480,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1464,
          "end": 1479,
          "id": {
            "type": "Identifier",
            "start": 1464,
            "end": 1468,
            "name": "r3b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1471,
            "end": 1479,
            "left": {
              "type": "Identifier",
              "start": 1471,
              "end": 1473,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1477,
              "end": 1479,
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
      "start": 1481,
      "end": 1501,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1485,
          "end": 1500,
          "id": {
            "type": "Identifier",
            "start": 1485,
            "end": 1489,
            "name": "r3b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1492,
            "end": 1500,
            "left": {
              "type": "Identifier",
              "start": 1492,
              "end": 1494,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1498,
              "end": 1500,
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
      "start": 1502,
      "end": 1522,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1506,
          "end": 1521,
          "id": {
            "type": "Identifier",
            "start": 1506,
            "end": 1510,
            "name": "r3b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1513,
            "end": 1521,
            "left": {
              "type": "Identifier",
              "start": 1513,
              "end": 1515,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1519,
              "end": 1521,
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
      "start": 1523,
      "end": 1543,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1527,
          "end": 1542,
          "id": {
            "type": "Identifier",
            "start": 1527,
            "end": 1531,
            "name": "r3b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1534,
            "end": 1542,
            "left": {
              "type": "Identifier",
              "start": 1534,
              "end": 1536,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1540,
              "end": 1542,
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
            "name": "r4a1",
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
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1600,
              "end": 1602,
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
            "name": "r4a2",
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
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1621,
              "end": 1623,
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
      "start": 1625,
      "end": 1645,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1629,
          "end": 1644,
          "id": {
            "type": "Identifier",
            "start": 1629,
            "end": 1633,
            "name": "r4a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1636,
            "end": 1644,
            "left": {
              "type": "Identifier",
              "start": 1636,
              "end": 1638,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1642,
              "end": 1644,
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
      "start": 1646,
      "end": 1666,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1650,
          "end": 1665,
          "id": {
            "type": "Identifier",
            "start": 1650,
            "end": 1654,
            "name": "r4a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1657,
            "end": 1665,
            "left": {
              "type": "Identifier",
              "start": 1657,
              "end": 1659,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1663,
              "end": 1665,
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
      "start": 1667,
      "end": 1687,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1671,
          "end": 1686,
          "id": {
            "type": "Identifier",
            "start": 1671,
            "end": 1675,
            "name": "r4a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1678,
            "end": 1686,
            "left": {
              "type": "Identifier",
              "start": 1678,
              "end": 1680,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1684,
              "end": 1686,
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
      "start": 1688,
      "end": 1708,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1692,
          "end": 1707,
          "id": {
            "type": "Identifier",
            "start": 1692,
            "end": 1696,
            "name": "r4a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1699,
            "end": 1707,
            "left": {
              "type": "Identifier",
              "start": 1699,
              "end": 1701,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1705,
              "end": 1707,
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
      "start": 1733,
      "end": 1753,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1737,
          "end": 1752,
          "id": {
            "type": "Identifier",
            "start": 1737,
            "end": 1741,
            "name": "r4b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1744,
            "end": 1752,
            "left": {
              "type": "Identifier",
              "start": 1744,
              "end": 1746,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1750,
              "end": 1752,
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
      "start": 1754,
      "end": 1774,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1758,
          "end": 1773,
          "id": {
            "type": "Identifier",
            "start": 1758,
            "end": 1762,
            "name": "r4b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1765,
            "end": 1773,
            "left": {
              "type": "Identifier",
              "start": 1765,
              "end": 1767,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1771,
              "end": 1773,
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
      "start": 1775,
      "end": 1795,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1779,
          "end": 1794,
          "id": {
            "type": "Identifier",
            "start": 1779,
            "end": 1783,
            "name": "r4b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1786,
            "end": 1794,
            "left": {
              "type": "Identifier",
              "start": 1786,
              "end": 1788,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1792,
              "end": 1794,
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
      "start": 1796,
      "end": 1816,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1800,
          "end": 1815,
          "id": {
            "type": "Identifier",
            "start": 1800,
            "end": 1804,
            "name": "r4b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1807,
            "end": 1815,
            "left": {
              "type": "Identifier",
              "start": 1807,
              "end": 1809,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1813,
              "end": 1815,
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
      "start": 1817,
      "end": 1837,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1821,
          "end": 1836,
          "id": {
            "type": "Identifier",
            "start": 1821,
            "end": 1825,
            "name": "r4b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1828,
            "end": 1836,
            "left": {
              "type": "Identifier",
              "start": 1828,
              "end": 1830,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1834,
              "end": 1836,
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
      "start": 1838,
      "end": 1858,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1842,
          "end": 1857,
          "id": {
            "type": "Identifier",
            "start": 1842,
            "end": 1846,
            "name": "r4b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1849,
            "end": 1857,
            "left": {
              "type": "Identifier",
              "start": 1849,
              "end": 1851,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 1855,
              "end": 1857,
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
      "start": 1898,
      "end": 1918,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1902,
          "end": 1917,
          "id": {
            "type": "Identifier",
            "start": 1902,
            "end": 1906,
            "name": "r5a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1909,
            "end": 1917,
            "left": {
              "type": "Identifier",
              "start": 1909,
              "end": 1911,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 1915,
              "end": 1917,
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
      "start": 1919,
      "end": 1939,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1923,
          "end": 1938,
          "id": {
            "type": "Identifier",
            "start": 1923,
            "end": 1927,
            "name": "r5a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1930,
            "end": 1938,
            "left": {
              "type": "Identifier",
              "start": 1930,
              "end": 1932,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 1936,
              "end": 1938,
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
      "start": 1940,
      "end": 1960,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1944,
          "end": 1959,
          "id": {
            "type": "Identifier",
            "start": 1944,
            "end": 1948,
            "name": "r5a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1951,
            "end": 1959,
            "left": {
              "type": "Identifier",
              "start": 1951,
              "end": 1953,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 1957,
              "end": 1959,
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
      "start": 1961,
      "end": 1981,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1965,
          "end": 1980,
          "id": {
            "type": "Identifier",
            "start": 1965,
            "end": 1969,
            "name": "r5a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1972,
            "end": 1980,
            "left": {
              "type": "Identifier",
              "start": 1972,
              "end": 1974,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 1978,
              "end": 1980,
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
      "start": 1982,
      "end": 2002,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1986,
          "end": 2001,
          "id": {
            "type": "Identifier",
            "start": 1986,
            "end": 1990,
            "name": "r5a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1993,
            "end": 2001,
            "left": {
              "type": "Identifier",
              "start": 1993,
              "end": 1995,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 1999,
              "end": 2001,
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
      "start": 2003,
      "end": 2023,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2007,
          "end": 2022,
          "id": {
            "type": "Identifier",
            "start": 2007,
            "end": 2011,
            "name": "r5a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2014,
            "end": 2022,
            "left": {
              "type": "Identifier",
              "start": 2014,
              "end": 2016,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 2020,
              "end": 2022,
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
      "start": 2048,
      "end": 2068,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2052,
          "end": 2067,
          "id": {
            "type": "Identifier",
            "start": 2052,
            "end": 2056,
            "name": "r5b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2059,
            "end": 2067,
            "left": {
              "type": "Identifier",
              "start": 2059,
              "end": 2061,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 2065,
              "end": 2067,
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
      "start": 2069,
      "end": 2089,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2073,
          "end": 2088,
          "id": {
            "type": "Identifier",
            "start": 2073,
            "end": 2077,
            "name": "r5b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2080,
            "end": 2088,
            "left": {
              "type": "Identifier",
              "start": 2080,
              "end": 2082,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 2086,
              "end": 2088,
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
      "start": 2090,
      "end": 2110,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2094,
          "end": 2109,
          "id": {
            "type": "Identifier",
            "start": 2094,
            "end": 2098,
            "name": "r5b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2101,
            "end": 2109,
            "left": {
              "type": "Identifier",
              "start": 2101,
              "end": 2103,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 2107,
              "end": 2109,
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
      "start": 2111,
      "end": 2131,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2115,
          "end": 2130,
          "id": {
            "type": "Identifier",
            "start": 2115,
            "end": 2119,
            "name": "r5b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2122,
            "end": 2130,
            "left": {
              "type": "Identifier",
              "start": 2122,
              "end": 2124,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 2128,
              "end": 2130,
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
      "start": 2132,
      "end": 2152,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2136,
          "end": 2151,
          "id": {
            "type": "Identifier",
            "start": 2136,
            "end": 2140,
            "name": "r5b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2143,
            "end": 2151,
            "left": {
              "type": "Identifier",
              "start": 2143,
              "end": 2145,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 2149,
              "end": 2151,
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
      "start": 2153,
      "end": 2173,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2157,
          "end": 2172,
          "id": {
            "type": "Identifier",
            "start": 2157,
            "end": 2161,
            "name": "r5b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2164,
            "end": 2172,
            "left": {
              "type": "Identifier",
              "start": 2164,
              "end": 2166,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 2170,
              "end": 2172,
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
      "start": 2213,
      "end": 2233,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2217,
          "end": 2232,
          "id": {
            "type": "Identifier",
            "start": 2217,
            "end": 2221,
            "name": "r6a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2224,
            "end": 2232,
            "left": {
              "type": "Identifier",
              "start": 2224,
              "end": 2226,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2230,
              "end": 2232,
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
      "start": 2234,
      "end": 2254,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2238,
          "end": 2253,
          "id": {
            "type": "Identifier",
            "start": 2238,
            "end": 2242,
            "name": "r6a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2245,
            "end": 2253,
            "left": {
              "type": "Identifier",
              "start": 2245,
              "end": 2247,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2251,
              "end": 2253,
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
      "start": 2255,
      "end": 2275,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2259,
          "end": 2274,
          "id": {
            "type": "Identifier",
            "start": 2259,
            "end": 2263,
            "name": "r6a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2266,
            "end": 2274,
            "left": {
              "type": "Identifier",
              "start": 2266,
              "end": 2268,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2272,
              "end": 2274,
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
      "start": 2276,
      "end": 2296,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2280,
          "end": 2295,
          "id": {
            "type": "Identifier",
            "start": 2280,
            "end": 2284,
            "name": "r6a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2287,
            "end": 2295,
            "left": {
              "type": "Identifier",
              "start": 2287,
              "end": 2289,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2293,
              "end": 2295,
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
      "start": 2297,
      "end": 2317,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2301,
          "end": 2316,
          "id": {
            "type": "Identifier",
            "start": 2301,
            "end": 2305,
            "name": "r6a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2308,
            "end": 2316,
            "left": {
              "type": "Identifier",
              "start": 2308,
              "end": 2310,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2314,
              "end": 2316,
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
      "start": 2318,
      "end": 2338,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2322,
          "end": 2337,
          "id": {
            "type": "Identifier",
            "start": 2322,
            "end": 2326,
            "name": "r6a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2329,
            "end": 2337,
            "left": {
              "type": "Identifier",
              "start": 2329,
              "end": 2331,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2335,
              "end": 2337,
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
      "start": 2363,
      "end": 2383,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2367,
          "end": 2382,
          "id": {
            "type": "Identifier",
            "start": 2367,
            "end": 2371,
            "name": "r6b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2374,
            "end": 2382,
            "left": {
              "type": "Identifier",
              "start": 2374,
              "end": 2376,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2380,
              "end": 2382,
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
      "start": 2384,
      "end": 2404,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2388,
          "end": 2403,
          "id": {
            "type": "Identifier",
            "start": 2388,
            "end": 2392,
            "name": "r6b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2395,
            "end": 2403,
            "left": {
              "type": "Identifier",
              "start": 2395,
              "end": 2397,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2401,
              "end": 2403,
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
      "start": 2405,
      "end": 2425,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2409,
          "end": 2424,
          "id": {
            "type": "Identifier",
            "start": 2409,
            "end": 2413,
            "name": "r6b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2416,
            "end": 2424,
            "left": {
              "type": "Identifier",
              "start": 2416,
              "end": 2418,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2422,
              "end": 2424,
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
      "start": 2426,
      "end": 2446,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2430,
          "end": 2445,
          "id": {
            "type": "Identifier",
            "start": 2430,
            "end": 2434,
            "name": "r6b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2437,
            "end": 2445,
            "left": {
              "type": "Identifier",
              "start": 2437,
              "end": 2439,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2443,
              "end": 2445,
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
      "start": 2447,
      "end": 2467,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2451,
          "end": 2466,
          "id": {
            "type": "Identifier",
            "start": 2451,
            "end": 2455,
            "name": "r6b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2458,
            "end": 2466,
            "left": {
              "type": "Identifier",
              "start": 2458,
              "end": 2460,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2464,
              "end": 2466,
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
      "start": 2468,
      "end": 2488,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2472,
          "end": 2487,
          "id": {
            "type": "Identifier",
            "start": 2472,
            "end": 2476,
            "name": "r6b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2479,
            "end": 2487,
            "left": {
              "type": "Identifier",
              "start": 2479,
              "end": 2481,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 2485,
              "end": 2487,
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
      "start": 2529,
      "end": 2550,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2533,
          "end": 2549,
          "id": {
            "type": "Identifier",
            "start": 2533,
            "end": 2537,
            "name": "r7a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2540,
            "end": 2549,
            "left": {
              "type": "Identifier",
              "start": 2540,
              "end": 2542,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2547,
              "end": 2549,
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
      "start": 2551,
      "end": 2572,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2555,
          "end": 2571,
          "id": {
            "type": "Identifier",
            "start": 2555,
            "end": 2559,
            "name": "r7a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2562,
            "end": 2571,
            "left": {
              "type": "Identifier",
              "start": 2562,
              "end": 2564,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2569,
              "end": 2571,
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
      "start": 2573,
      "end": 2594,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2577,
          "end": 2593,
          "id": {
            "type": "Identifier",
            "start": 2577,
            "end": 2581,
            "name": "r7a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2584,
            "end": 2593,
            "left": {
              "type": "Identifier",
              "start": 2584,
              "end": 2586,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2591,
              "end": 2593,
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
            "name": "r7a4",
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
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2613,
              "end": 2615,
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
            "name": "r7a5",
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
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2635,
              "end": 2637,
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
            "name": "r7a6",
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
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2657,
              "end": 2659,
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
      "start": 2686,
      "end": 2707,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2690,
          "end": 2706,
          "id": {
            "type": "Identifier",
            "start": 2690,
            "end": 2694,
            "name": "r7b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2697,
            "end": 2706,
            "left": {
              "type": "Identifier",
              "start": 2697,
              "end": 2699,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2704,
              "end": 2706,
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
      "start": 2708,
      "end": 2729,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2712,
          "end": 2728,
          "id": {
            "type": "Identifier",
            "start": 2712,
            "end": 2716,
            "name": "r7b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2719,
            "end": 2728,
            "left": {
              "type": "Identifier",
              "start": 2719,
              "end": 2721,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2726,
              "end": 2728,
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
      "start": 2730,
      "end": 2751,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2734,
          "end": 2750,
          "id": {
            "type": "Identifier",
            "start": 2734,
            "end": 2738,
            "name": "r7b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2741,
            "end": 2750,
            "left": {
              "type": "Identifier",
              "start": 2741,
              "end": 2743,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2748,
              "end": 2750,
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
      "start": 2752,
      "end": 2773,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2756,
          "end": 2772,
          "id": {
            "type": "Identifier",
            "start": 2756,
            "end": 2760,
            "name": "r7b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2763,
            "end": 2772,
            "left": {
              "type": "Identifier",
              "start": 2763,
              "end": 2765,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2770,
              "end": 2772,
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
      "start": 2774,
      "end": 2795,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2778,
          "end": 2794,
          "id": {
            "type": "Identifier",
            "start": 2778,
            "end": 2782,
            "name": "r7b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2785,
            "end": 2794,
            "left": {
              "type": "Identifier",
              "start": 2785,
              "end": 2787,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2792,
              "end": 2794,
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
      "start": 2796,
      "end": 2817,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2800,
          "end": 2816,
          "id": {
            "type": "Identifier",
            "start": 2800,
            "end": 2804,
            "name": "r7b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2807,
            "end": 2816,
            "left": {
              "type": "Identifier",
              "start": 2807,
              "end": 2809,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 2814,
              "end": 2816,
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
      "start": 2859,
      "end": 2880,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2863,
          "end": 2879,
          "id": {
            "type": "Identifier",
            "start": 2863,
            "end": 2867,
            "name": "r8a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2870,
            "end": 2879,
            "left": {
              "type": "Identifier",
              "start": 2870,
              "end": 2872,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 2877,
              "end": 2879,
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
      "start": 2881,
      "end": 2902,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2885,
          "end": 2901,
          "id": {
            "type": "Identifier",
            "start": 2885,
            "end": 2889,
            "name": "r8a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2892,
            "end": 2901,
            "left": {
              "type": "Identifier",
              "start": 2892,
              "end": 2894,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 2899,
              "end": 2901,
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
      "start": 2903,
      "end": 2924,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2907,
          "end": 2923,
          "id": {
            "type": "Identifier",
            "start": 2907,
            "end": 2911,
            "name": "r8a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2914,
            "end": 2923,
            "left": {
              "type": "Identifier",
              "start": 2914,
              "end": 2916,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 2921,
              "end": 2923,
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
      "start": 2925,
      "end": 2946,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2929,
          "end": 2945,
          "id": {
            "type": "Identifier",
            "start": 2929,
            "end": 2933,
            "name": "r8a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2936,
            "end": 2945,
            "left": {
              "type": "Identifier",
              "start": 2936,
              "end": 2938,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 2943,
              "end": 2945,
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
      "start": 2947,
      "end": 2968,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2951,
          "end": 2967,
          "id": {
            "type": "Identifier",
            "start": 2951,
            "end": 2955,
            "name": "r8a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2958,
            "end": 2967,
            "left": {
              "type": "Identifier",
              "start": 2958,
              "end": 2960,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 2965,
              "end": 2967,
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
      "start": 2969,
      "end": 2990,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2973,
          "end": 2989,
          "id": {
            "type": "Identifier",
            "start": 2973,
            "end": 2977,
            "name": "r8a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2980,
            "end": 2989,
            "left": {
              "type": "Identifier",
              "start": 2980,
              "end": 2982,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 2987,
              "end": 2989,
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
      "start": 3016,
      "end": 3037,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3020,
          "end": 3036,
          "id": {
            "type": "Identifier",
            "start": 3020,
            "end": 3024,
            "name": "r8b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3027,
            "end": 3036,
            "left": {
              "type": "Identifier",
              "start": 3027,
              "end": 3029,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 3034,
              "end": 3036,
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
      "start": 3038,
      "end": 3059,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3042,
          "end": 3058,
          "id": {
            "type": "Identifier",
            "start": 3042,
            "end": 3046,
            "name": "r8b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3049,
            "end": 3058,
            "left": {
              "type": "Identifier",
              "start": 3049,
              "end": 3051,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 3056,
              "end": 3058,
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
      "start": 3060,
      "end": 3081,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3064,
          "end": 3080,
          "id": {
            "type": "Identifier",
            "start": 3064,
            "end": 3068,
            "name": "r8b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3071,
            "end": 3080,
            "left": {
              "type": "Identifier",
              "start": 3071,
              "end": 3073,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 3078,
              "end": 3080,
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
      "start": 3082,
      "end": 3103,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3086,
          "end": 3102,
          "id": {
            "type": "Identifier",
            "start": 3086,
            "end": 3090,
            "name": "r8b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3093,
            "end": 3102,
            "left": {
              "type": "Identifier",
              "start": 3093,
              "end": 3095,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 3100,
              "end": 3102,
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
      "start": 3104,
      "end": 3125,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3108,
          "end": 3124,
          "id": {
            "type": "Identifier",
            "start": 3108,
            "end": 3112,
            "name": "r8b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3115,
            "end": 3124,
            "left": {
              "type": "Identifier",
              "start": 3115,
              "end": 3117,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 3122,
              "end": 3124,
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
      "start": 3126,
      "end": 3147,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3130,
          "end": 3146,
          "id": {
            "type": "Identifier",
            "start": 3130,
            "end": 3134,
            "name": "r8b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3137,
            "end": 3146,
            "left": {
              "type": "Identifier",
              "start": 3137,
              "end": 3139,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 3144,
              "end": 3146,
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
