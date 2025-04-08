__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 4437,
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
      "end": 117,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 96,
          "end": 116,
          "id": {
            "type": "Identifier",
            "start": 96,
            "end": 116,
            "name": "a1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 98,
              "end": 116,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 100,
                "end": 116,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 102,
                    "end": 114,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 108,
                      "end": 114,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 110,
                        "end": 114,
                        "typeName": {
                          "type": "Identifier",
                          "start": 110,
                          "end": 114,
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
      "start": 118,
      "end": 143,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 122,
          "end": 142,
          "id": {
            "type": "Identifier",
            "start": 122,
            "end": 142,
            "name": "b1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 124,
              "end": 142,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 126,
                "end": 142,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 128,
                    "end": 140,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 134,
                      "end": 140,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 136,
                        "end": 140,
                        "typeName": {
                          "type": "Identifier",
                          "start": 136,
                          "end": 140,
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
      "start": 145,
      "end": 190,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 149,
          "end": 189,
          "id": {
            "type": "Identifier",
            "start": 149,
            "end": 189,
            "name": "a2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 151,
              "end": 189,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 153,
                "end": 189,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 155,
                    "end": 187,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 160,
                        "end": 169,
                        "name": "a",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 161,
                          "end": 169,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 163,
                            "end": 169
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 171,
                        "end": 180,
                        "name": "b",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 172,
                          "end": 180,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 174,
                            "end": 180
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 181,
                      "end": 187,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 183,
                        "end": 187,
                        "typeName": {
                          "type": "Identifier",
                          "start": 183,
                          "end": 187,
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
      "start": 191,
      "end": 236,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 195,
          "end": 235,
          "id": {
            "type": "Identifier",
            "start": 195,
            "end": 235,
            "name": "b2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 197,
              "end": 235,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 199,
                "end": 235,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 201,
                    "end": 233,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 206,
                        "end": 215,
                        "name": "a",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 207,
                          "end": 215,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 209,
                            "end": 215
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 217,
                        "end": 226,
                        "name": "b",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 218,
                          "end": 226,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 220,
                            "end": 226
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 227,
                      "end": 233,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 229,
                        "end": 233,
                        "typeName": {
                          "type": "Identifier",
                          "start": 229,
                          "end": 233,
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
      "start": 238,
      "end": 283,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 242,
          "end": 282,
          "id": {
            "type": "Identifier",
            "start": 242,
            "end": 282,
            "name": "a3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 244,
              "end": 282,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 246,
                "end": 282,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 248,
                    "end": 280,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 253,
                        "end": 262,
                        "name": "a",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 254,
                          "end": 262,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 256,
                            "end": 262
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 264,
                        "end": 273,
                        "name": "b",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 265,
                          "end": 273,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 267,
                            "end": 273
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 274,
                      "end": 280,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 276,
                        "end": 280,
                        "typeName": {
                          "type": "Identifier",
                          "start": 276,
                          "end": 280,
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
      "start": 284,
      "end": 318,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 288,
          "end": 317,
          "id": {
            "type": "Identifier",
            "start": 288,
            "end": 317,
            "name": "b3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 290,
              "end": 317,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 292,
                "end": 317,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 294,
                    "end": 315,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 299,
                        "end": 308,
                        "name": "a",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 300,
                          "end": 308,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 302,
                            "end": 308
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 309,
                      "end": 315,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 311,
                        "end": 315,
                        "typeName": {
                          "type": "Identifier",
                          "start": 311,
                          "end": 315,
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
      "start": 320,
      "end": 365,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 324,
          "end": 364,
          "id": {
            "type": "Identifier",
            "start": 324,
            "end": 364,
            "name": "a4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 326,
              "end": 364,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 328,
                "end": 364,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 330,
                    "end": 362,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 335,
                        "end": 344,
                        "name": "a",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 336,
                          "end": 344,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 338,
                            "end": 344
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 346,
                        "end": 355,
                        "name": "b",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 347,
                          "end": 355,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 349,
                            "end": 355
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 356,
                      "end": 362,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 358,
                        "end": 362,
                        "typeName": {
                          "type": "Identifier",
                          "start": 358,
                          "end": 362,
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
      "start": 366,
      "end": 391,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 370,
          "end": 390,
          "id": {
            "type": "Identifier",
            "start": 370,
            "end": 390,
            "name": "b4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 372,
              "end": 390,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 374,
                "end": 390,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 376,
                    "end": 388,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 382,
                      "end": 388,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 384,
                        "end": 388,
                        "typeName": {
                          "type": "Identifier",
                          "start": 384,
                          "end": 388,
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
      "start": 393,
      "end": 425,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 397,
          "end": 424,
          "id": {
            "type": "Identifier",
            "start": 397,
            "end": 424,
            "name": "a5",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 399,
              "end": 424,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 401,
                "end": 424,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 403,
                    "end": 422,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 408,
                        "end": 415,
                        "name": "a",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 409,
                          "end": 415,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 411,
                            "end": 415,
                            "typeName": {
                              "type": "Identifier",
                              "start": 411,
                              "end": 415,
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
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 416,
                      "end": 422,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 418,
                        "end": 422,
                        "typeName": {
                          "type": "Identifier",
                          "start": 418,
                          "end": 422,
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
      "start": 426,
      "end": 461,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 430,
          "end": 460,
          "id": {
            "type": "Identifier",
            "start": 430,
            "end": 460,
            "name": "b5",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 432,
              "end": 460,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 434,
                "end": 460,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 436,
                    "end": 458,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 441,
                        "end": 451,
                        "name": "a",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 442,
                          "end": 451,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 444,
                            "end": 451,
                            "typeName": {
                              "type": "Identifier",
                              "start": 444,
                              "end": 451,
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
                      "start": 452,
                      "end": 458,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 454,
                        "end": 458,
                        "typeName": {
                          "type": "Identifier",
                          "start": 454,
                          "end": 458,
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
      "start": 463,
      "end": 507,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 467,
          "end": 506,
          "id": {
            "type": "Identifier",
            "start": 467,
            "end": 506,
            "name": "a6",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 469,
              "end": 506,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 471,
                "end": 506,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 473,
                    "end": 504,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 478,
                        "end": 488,
                        "name": "a",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 479,
                          "end": 488,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 481,
                            "end": 488,
                            "typeName": {
                              "type": "Identifier",
                              "start": 481,
                              "end": 488,
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
                      },
                      {
                        "type": "Identifier",
                        "start": 490,
                        "end": 497,
                        "name": "b",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 491,
                          "end": 497,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 493,
                            "end": 497,
                            "typeName": {
                              "type": "Identifier",
                              "start": 493,
                              "end": 497,
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
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 498,
                      "end": 504,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 500,
                        "end": 504,
                        "typeName": {
                          "type": "Identifier",
                          "start": 500,
                          "end": 504,
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
      "start": 508,
      "end": 552,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 512,
          "end": 551,
          "id": {
            "type": "Identifier",
            "start": 512,
            "end": 551,
            "name": "b6",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 514,
              "end": 551,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 516,
                "end": 551,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 518,
                    "end": 549,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 523,
                        "end": 530,
                        "name": "a",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 524,
                          "end": 530,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 526,
                            "end": 530,
                            "typeName": {
                              "type": "Identifier",
                              "start": 526,
                              "end": 530,
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
                        "start": 532,
                        "end": 542,
                        "name": "b",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 533,
                          "end": 542,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 535,
                            "end": 542,
                            "typeName": {
                              "type": "Identifier",
                              "start": 535,
                              "end": 542,
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
                      "start": 543,
                      "end": 549,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 545,
                        "end": 549,
                        "typeName": {
                          "type": "Identifier",
                          "start": 545,
                          "end": 549,
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
      "start": 554,
      "end": 579,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 558,
          "end": 578,
          "id": {
            "type": "Identifier",
            "start": 558,
            "end": 578,
            "name": "a7",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 560,
              "end": 578,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 562,
                "end": 578,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 564,
                    "end": 576,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 570,
                      "end": 576,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 572,
                        "end": 576,
                        "typeName": {
                          "type": "Identifier",
                          "start": 572,
                          "end": 576,
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
      "start": 580,
      "end": 608,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 584,
          "end": 607,
          "id": {
            "type": "Identifier",
            "start": 584,
            "end": 607,
            "name": "b7",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 586,
              "end": 607,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 588,
                "end": 607,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 590,
                    "end": 605,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 596,
                      "end": 605,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 598,
                        "end": 605,
                        "typeName": {
                          "type": "Identifier",
                          "start": 598,
                          "end": 605,
                          "name": "Derived",
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
      "start": 610,
      "end": 643,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 614,
          "end": 642,
          "id": {
            "type": "Identifier",
            "start": 614,
            "end": 642,
            "name": "a8",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 616,
              "end": 642,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 618,
                "end": 642,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 620,
                    "end": 640,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 625,
                        "end": 633,
                        "name": "a",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 627,
                          "end": 633,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 629,
                            "end": 633,
                            "typeName": {
                              "type": "Identifier",
                              "start": 629,
                              "end": 633,
                              "name": "Base",
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
                      "start": 634,
                      "end": 640,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 636,
                        "end": 640,
                        "typeName": {
                          "type": "Identifier",
                          "start": 636,
                          "end": 640,
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
      "start": 644,
      "end": 680,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 648,
          "end": 679,
          "id": {
            "type": "Identifier",
            "start": 648,
            "end": 679,
            "name": "b8",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 650,
              "end": 679,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 652,
                "end": 679,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 654,
                    "end": 677,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 659,
                        "end": 670,
                        "name": "a",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 661,
                          "end": 670,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 663,
                            "end": 670,
                            "typeName": {
                              "type": "Identifier",
                              "start": 663,
                              "end": 670,
                              "name": "Derived",
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
                      "start": 671,
                      "end": 677,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 673,
                        "end": 677,
                        "typeName": {
                          "type": "Identifier",
                          "start": 673,
                          "end": 677,
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
      "start": 682,
      "end": 719,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 686,
          "end": 718,
          "id": {
            "type": "Identifier",
            "start": 686,
            "end": 718,
            "name": "a9",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 688,
              "end": 718,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 690,
                "end": 718,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 692,
                    "end": 716,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 697,
                        "end": 709,
                        "argument": {
                          "type": "Identifier",
                          "start": 700,
                          "end": 701,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 701,
                          "end": 709,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 703,
                            "end": 709,
                            "elementType": {
                              "type": "TSTypeReference",
                              "start": 703,
                              "end": 707,
                              "typeName": {
                                "type": "Identifier",
                                "start": 703,
                                "end": 707,
                                "name": "Base",
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
                      "start": 710,
                      "end": 716,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 712,
                        "end": 716,
                        "typeName": {
                          "type": "Identifier",
                          "start": 712,
                          "end": 716,
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
      "start": 720,
      "end": 760,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 724,
          "end": 759,
          "id": {
            "type": "Identifier",
            "start": 724,
            "end": 759,
            "name": "b9",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 726,
              "end": 759,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 728,
                "end": 759,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 730,
                    "end": 757,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 735,
                        "end": 750,
                        "argument": {
                          "type": "Identifier",
                          "start": 738,
                          "end": 739,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 739,
                          "end": 750,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 741,
                            "end": 750,
                            "elementType": {
                              "type": "TSTypeReference",
                              "start": 741,
                              "end": 748,
                              "typeName": {
                                "type": "Identifier",
                                "start": 741,
                                "end": 748,
                                "name": "Derived",
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
                      "start": 751,
                      "end": 757,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 753,
                        "end": 757,
                        "typeName": {
                          "type": "Identifier",
                          "start": 753,
                          "end": 757,
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
      "start": 877,
      "end": 896,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 881,
          "end": 895,
          "id": {
            "type": "Identifier",
            "start": 881,
            "end": 885,
            "name": "r1a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 888,
            "end": 895,
            "left": {
              "type": "Identifier",
              "start": 888,
              "end": 890,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 893,
              "end": 895,
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
      "start": 897,
      "end": 916,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 901,
          "end": 915,
          "id": {
            "type": "Identifier",
            "start": 901,
            "end": 905,
            "name": "r1a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 908,
            "end": 915,
            "left": {
              "type": "Identifier",
              "start": 908,
              "end": 910,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 913,
              "end": 915,
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
      "start": 917,
      "end": 936,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 921,
          "end": 935,
          "id": {
            "type": "Identifier",
            "start": 921,
            "end": 925,
            "name": "r1a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 928,
            "end": 935,
            "left": {
              "type": "Identifier",
              "start": 928,
              "end": 930,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 933,
              "end": 935,
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
      "start": 937,
      "end": 956,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 941,
          "end": 955,
          "id": {
            "type": "Identifier",
            "start": 941,
            "end": 945,
            "name": "r1a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 948,
            "end": 955,
            "left": {
              "type": "Identifier",
              "start": 948,
              "end": 950,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 953,
              "end": 955,
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
      "start": 957,
      "end": 976,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 961,
          "end": 975,
          "id": {
            "type": "Identifier",
            "start": 961,
            "end": 965,
            "name": "r1a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 968,
            "end": 975,
            "left": {
              "type": "Identifier",
              "start": 968,
              "end": 970,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 973,
              "end": 975,
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
      "start": 977,
      "end": 996,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 981,
          "end": 995,
          "id": {
            "type": "Identifier",
            "start": 981,
            "end": 985,
            "name": "r1a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 988,
            "end": 995,
            "left": {
              "type": "Identifier",
              "start": 988,
              "end": 990,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 993,
              "end": 995,
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
      "start": 997,
      "end": 1016,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1001,
          "end": 1015,
          "id": {
            "type": "Identifier",
            "start": 1001,
            "end": 1005,
            "name": "r1a7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1008,
            "end": 1015,
            "left": {
              "type": "Identifier",
              "start": 1008,
              "end": 1010,
              "name": "a7",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 1013,
              "end": 1015,
              "name": "b7",
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
      "start": 1017,
      "end": 1036,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1021,
          "end": 1035,
          "id": {
            "type": "Identifier",
            "start": 1021,
            "end": 1025,
            "name": "r1a8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1028,
            "end": 1035,
            "left": {
              "type": "Identifier",
              "start": 1028,
              "end": 1030,
              "name": "a8",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 1033,
              "end": 1035,
              "name": "b8",
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
      "start": 1037,
      "end": 1056,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1041,
          "end": 1055,
          "id": {
            "type": "Identifier",
            "start": 1041,
            "end": 1045,
            "name": "r1a9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1048,
            "end": 1055,
            "left": {
              "type": "Identifier",
              "start": 1048,
              "end": 1050,
              "name": "a9",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 1053,
              "end": 1055,
              "name": "b9",
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
      "start": 1083,
      "end": 1102,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1087,
          "end": 1101,
          "id": {
            "type": "Identifier",
            "start": 1087,
            "end": 1091,
            "name": "r1b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1094,
            "end": 1101,
            "left": {
              "type": "Identifier",
              "start": 1094,
              "end": 1096,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 1099,
              "end": 1101,
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
      "start": 1103,
      "end": 1122,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1107,
          "end": 1121,
          "id": {
            "type": "Identifier",
            "start": 1107,
            "end": 1111,
            "name": "r1b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1114,
            "end": 1121,
            "left": {
              "type": "Identifier",
              "start": 1114,
              "end": 1116,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 1119,
              "end": 1121,
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
      "start": 1123,
      "end": 1142,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1127,
          "end": 1141,
          "id": {
            "type": "Identifier",
            "start": 1127,
            "end": 1131,
            "name": "r1b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1134,
            "end": 1141,
            "left": {
              "type": "Identifier",
              "start": 1134,
              "end": 1136,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 1139,
              "end": 1141,
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
      "start": 1143,
      "end": 1162,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1147,
          "end": 1161,
          "id": {
            "type": "Identifier",
            "start": 1147,
            "end": 1151,
            "name": "r1b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1154,
            "end": 1161,
            "left": {
              "type": "Identifier",
              "start": 1154,
              "end": 1156,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 1159,
              "end": 1161,
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
      "start": 1163,
      "end": 1182,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1167,
          "end": 1181,
          "id": {
            "type": "Identifier",
            "start": 1167,
            "end": 1171,
            "name": "r1b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1174,
            "end": 1181,
            "left": {
              "type": "Identifier",
              "start": 1174,
              "end": 1176,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 1179,
              "end": 1181,
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
      "start": 1183,
      "end": 1202,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1187,
          "end": 1201,
          "id": {
            "type": "Identifier",
            "start": 1187,
            "end": 1191,
            "name": "r1b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1194,
            "end": 1201,
            "left": {
              "type": "Identifier",
              "start": 1194,
              "end": 1196,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 1199,
              "end": 1201,
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
      "start": 1203,
      "end": 1222,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1207,
          "end": 1221,
          "id": {
            "type": "Identifier",
            "start": 1207,
            "end": 1211,
            "name": "r1b7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1214,
            "end": 1221,
            "left": {
              "type": "Identifier",
              "start": 1214,
              "end": 1216,
              "name": "b7",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 1219,
              "end": 1221,
              "name": "a7",
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
      "start": 1223,
      "end": 1242,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1227,
          "end": 1241,
          "id": {
            "type": "Identifier",
            "start": 1227,
            "end": 1231,
            "name": "r1b8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1234,
            "end": 1241,
            "left": {
              "type": "Identifier",
              "start": 1234,
              "end": 1236,
              "name": "b8",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 1239,
              "end": 1241,
              "name": "a8",
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
      "start": 1243,
      "end": 1262,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1247,
          "end": 1261,
          "id": {
            "type": "Identifier",
            "start": 1247,
            "end": 1251,
            "name": "r1b9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1254,
            "end": 1261,
            "left": {
              "type": "Identifier",
              "start": 1254,
              "end": 1256,
              "name": "b9",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Identifier",
              "start": 1259,
              "end": 1261,
              "name": "a9",
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
      "start": 1303,
      "end": 1322,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1307,
          "end": 1321,
          "id": {
            "type": "Identifier",
            "start": 1307,
            "end": 1311,
            "name": "r2a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1314,
            "end": 1321,
            "left": {
              "type": "Identifier",
              "start": 1314,
              "end": 1316,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1319,
              "end": 1321,
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
      "start": 1323,
      "end": 1342,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1327,
          "end": 1341,
          "id": {
            "type": "Identifier",
            "start": 1327,
            "end": 1331,
            "name": "r2a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1334,
            "end": 1341,
            "left": {
              "type": "Identifier",
              "start": 1334,
              "end": 1336,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1339,
              "end": 1341,
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
      "start": 1343,
      "end": 1362,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1347,
          "end": 1361,
          "id": {
            "type": "Identifier",
            "start": 1347,
            "end": 1351,
            "name": "r2a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1354,
            "end": 1361,
            "left": {
              "type": "Identifier",
              "start": 1354,
              "end": 1356,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1359,
              "end": 1361,
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
      "start": 1363,
      "end": 1382,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1367,
          "end": 1381,
          "id": {
            "type": "Identifier",
            "start": 1367,
            "end": 1371,
            "name": "r2a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1374,
            "end": 1381,
            "left": {
              "type": "Identifier",
              "start": 1374,
              "end": 1376,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1379,
              "end": 1381,
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
      "start": 1383,
      "end": 1402,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1387,
          "end": 1401,
          "id": {
            "type": "Identifier",
            "start": 1387,
            "end": 1391,
            "name": "r2a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1394,
            "end": 1401,
            "left": {
              "type": "Identifier",
              "start": 1394,
              "end": 1396,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1399,
              "end": 1401,
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
      "start": 1403,
      "end": 1422,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1407,
          "end": 1421,
          "id": {
            "type": "Identifier",
            "start": 1407,
            "end": 1411,
            "name": "r2a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1414,
            "end": 1421,
            "left": {
              "type": "Identifier",
              "start": 1414,
              "end": 1416,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1419,
              "end": 1421,
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
      "start": 1423,
      "end": 1442,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1427,
          "end": 1441,
          "id": {
            "type": "Identifier",
            "start": 1427,
            "end": 1431,
            "name": "r2a7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1434,
            "end": 1441,
            "left": {
              "type": "Identifier",
              "start": 1434,
              "end": 1436,
              "name": "a7",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1439,
              "end": 1441,
              "name": "b7",
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
      "start": 1443,
      "end": 1462,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1447,
          "end": 1461,
          "id": {
            "type": "Identifier",
            "start": 1447,
            "end": 1451,
            "name": "r2a8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1454,
            "end": 1461,
            "left": {
              "type": "Identifier",
              "start": 1454,
              "end": 1456,
              "name": "a8",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1459,
              "end": 1461,
              "name": "b8",
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
      "start": 1463,
      "end": 1482,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1467,
          "end": 1481,
          "id": {
            "type": "Identifier",
            "start": 1467,
            "end": 1471,
            "name": "r2a9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1474,
            "end": 1481,
            "left": {
              "type": "Identifier",
              "start": 1474,
              "end": 1476,
              "name": "a9",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1479,
              "end": 1481,
              "name": "b9",
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
      "start": 1509,
      "end": 1528,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1513,
          "end": 1527,
          "id": {
            "type": "Identifier",
            "start": 1513,
            "end": 1517,
            "name": "r2b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1520,
            "end": 1527,
            "left": {
              "type": "Identifier",
              "start": 1520,
              "end": 1522,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1525,
              "end": 1527,
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
      "start": 1529,
      "end": 1548,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1533,
          "end": 1547,
          "id": {
            "type": "Identifier",
            "start": 1533,
            "end": 1537,
            "name": "r2b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1540,
            "end": 1547,
            "left": {
              "type": "Identifier",
              "start": 1540,
              "end": 1542,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1545,
              "end": 1547,
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
      "start": 1549,
      "end": 1568,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1553,
          "end": 1567,
          "id": {
            "type": "Identifier",
            "start": 1553,
            "end": 1557,
            "name": "r2b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1560,
            "end": 1567,
            "left": {
              "type": "Identifier",
              "start": 1560,
              "end": 1562,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1565,
              "end": 1567,
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
      "start": 1569,
      "end": 1588,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1573,
          "end": 1587,
          "id": {
            "type": "Identifier",
            "start": 1573,
            "end": 1577,
            "name": "r2b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1580,
            "end": 1587,
            "left": {
              "type": "Identifier",
              "start": 1580,
              "end": 1582,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1585,
              "end": 1587,
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
      "start": 1589,
      "end": 1608,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1593,
          "end": 1607,
          "id": {
            "type": "Identifier",
            "start": 1593,
            "end": 1597,
            "name": "r2b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1600,
            "end": 1607,
            "left": {
              "type": "Identifier",
              "start": 1600,
              "end": 1602,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1605,
              "end": 1607,
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
      "start": 1609,
      "end": 1628,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1613,
          "end": 1627,
          "id": {
            "type": "Identifier",
            "start": 1613,
            "end": 1617,
            "name": "r2b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1620,
            "end": 1627,
            "left": {
              "type": "Identifier",
              "start": 1620,
              "end": 1622,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1625,
              "end": 1627,
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
      "start": 1629,
      "end": 1648,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1633,
          "end": 1647,
          "id": {
            "type": "Identifier",
            "start": 1633,
            "end": 1637,
            "name": "r2b7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1640,
            "end": 1647,
            "left": {
              "type": "Identifier",
              "start": 1640,
              "end": 1642,
              "name": "b7",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1645,
              "end": 1647,
              "name": "a7",
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
      "start": 1649,
      "end": 1668,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1653,
          "end": 1667,
          "id": {
            "type": "Identifier",
            "start": 1653,
            "end": 1657,
            "name": "r2b8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1660,
            "end": 1667,
            "left": {
              "type": "Identifier",
              "start": 1660,
              "end": 1662,
              "name": "b8",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1665,
              "end": 1667,
              "name": "a8",
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
      "start": 1669,
      "end": 1688,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1673,
          "end": 1687,
          "id": {
            "type": "Identifier",
            "start": 1673,
            "end": 1677,
            "name": "r2b9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1680,
            "end": 1687,
            "left": {
              "type": "Identifier",
              "start": 1680,
              "end": 1682,
              "name": "b9",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">",
            "right": {
              "type": "Identifier",
              "start": 1685,
              "end": 1687,
              "name": "a9",
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
      "start": 1730,
      "end": 1750,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1734,
          "end": 1749,
          "id": {
            "type": "Identifier",
            "start": 1734,
            "end": 1738,
            "name": "r3a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1741,
            "end": 1749,
            "left": {
              "type": "Identifier",
              "start": 1741,
              "end": 1743,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1747,
              "end": 1749,
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
      "start": 1751,
      "end": 1771,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1755,
          "end": 1770,
          "id": {
            "type": "Identifier",
            "start": 1755,
            "end": 1759,
            "name": "r3a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1762,
            "end": 1770,
            "left": {
              "type": "Identifier",
              "start": 1762,
              "end": 1764,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1768,
              "end": 1770,
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
      "start": 1772,
      "end": 1792,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1776,
          "end": 1791,
          "id": {
            "type": "Identifier",
            "start": 1776,
            "end": 1780,
            "name": "r3a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1783,
            "end": 1791,
            "left": {
              "type": "Identifier",
              "start": 1783,
              "end": 1785,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1789,
              "end": 1791,
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
      "start": 1793,
      "end": 1813,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1797,
          "end": 1812,
          "id": {
            "type": "Identifier",
            "start": 1797,
            "end": 1801,
            "name": "r3a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1804,
            "end": 1812,
            "left": {
              "type": "Identifier",
              "start": 1804,
              "end": 1806,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1810,
              "end": 1812,
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
      "start": 1814,
      "end": 1834,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1818,
          "end": 1833,
          "id": {
            "type": "Identifier",
            "start": 1818,
            "end": 1822,
            "name": "r3a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1825,
            "end": 1833,
            "left": {
              "type": "Identifier",
              "start": 1825,
              "end": 1827,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1831,
              "end": 1833,
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
      "start": 1835,
      "end": 1855,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1839,
          "end": 1854,
          "id": {
            "type": "Identifier",
            "start": 1839,
            "end": 1843,
            "name": "r3a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1846,
            "end": 1854,
            "left": {
              "type": "Identifier",
              "start": 1846,
              "end": 1848,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1852,
              "end": 1854,
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
      "start": 1856,
      "end": 1876,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1860,
          "end": 1875,
          "id": {
            "type": "Identifier",
            "start": 1860,
            "end": 1864,
            "name": "r3a7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1867,
            "end": 1875,
            "left": {
              "type": "Identifier",
              "start": 1867,
              "end": 1869,
              "name": "a7",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1873,
              "end": 1875,
              "name": "b7",
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
      "start": 1877,
      "end": 1897,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1881,
          "end": 1896,
          "id": {
            "type": "Identifier",
            "start": 1881,
            "end": 1885,
            "name": "r3a8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1888,
            "end": 1896,
            "left": {
              "type": "Identifier",
              "start": 1888,
              "end": 1890,
              "name": "a8",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1894,
              "end": 1896,
              "name": "b8",
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
            "name": "r3a9",
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
              "name": "a9",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1915,
              "end": 1917,
              "name": "b9",
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
      "start": 1946,
      "end": 1966,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1950,
          "end": 1965,
          "id": {
            "type": "Identifier",
            "start": 1950,
            "end": 1954,
            "name": "r3b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1957,
            "end": 1965,
            "left": {
              "type": "Identifier",
              "start": 1957,
              "end": 1959,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1963,
              "end": 1965,
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
      "start": 1967,
      "end": 1987,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1971,
          "end": 1986,
          "id": {
            "type": "Identifier",
            "start": 1971,
            "end": 1975,
            "name": "r3b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1978,
            "end": 1986,
            "left": {
              "type": "Identifier",
              "start": 1978,
              "end": 1980,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 1984,
              "end": 1986,
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
      "start": 1988,
      "end": 2008,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1992,
          "end": 2007,
          "id": {
            "type": "Identifier",
            "start": 1992,
            "end": 1996,
            "name": "r3b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1999,
            "end": 2007,
            "left": {
              "type": "Identifier",
              "start": 1999,
              "end": 2001,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 2005,
              "end": 2007,
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
      "start": 2009,
      "end": 2029,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2013,
          "end": 2028,
          "id": {
            "type": "Identifier",
            "start": 2013,
            "end": 2017,
            "name": "r3b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2020,
            "end": 2028,
            "left": {
              "type": "Identifier",
              "start": 2020,
              "end": 2022,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 2026,
              "end": 2028,
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
      "start": 2030,
      "end": 2050,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2034,
          "end": 2049,
          "id": {
            "type": "Identifier",
            "start": 2034,
            "end": 2038,
            "name": "r3b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2041,
            "end": 2049,
            "left": {
              "type": "Identifier",
              "start": 2041,
              "end": 2043,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 2047,
              "end": 2049,
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
      "start": 2051,
      "end": 2071,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2055,
          "end": 2070,
          "id": {
            "type": "Identifier",
            "start": 2055,
            "end": 2059,
            "name": "r3b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2062,
            "end": 2070,
            "left": {
              "type": "Identifier",
              "start": 2062,
              "end": 2064,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 2068,
              "end": 2070,
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
      "start": 2072,
      "end": 2092,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2076,
          "end": 2091,
          "id": {
            "type": "Identifier",
            "start": 2076,
            "end": 2080,
            "name": "r3b7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2083,
            "end": 2091,
            "left": {
              "type": "Identifier",
              "start": 2083,
              "end": 2085,
              "name": "b7",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 2089,
              "end": 2091,
              "name": "a7",
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
      "start": 2093,
      "end": 2113,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2097,
          "end": 2112,
          "id": {
            "type": "Identifier",
            "start": 2097,
            "end": 2101,
            "name": "r3b8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2104,
            "end": 2112,
            "left": {
              "type": "Identifier",
              "start": 2104,
              "end": 2106,
              "name": "b8",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 2110,
              "end": 2112,
              "name": "a8",
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
      "start": 2114,
      "end": 2134,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2118,
          "end": 2133,
          "id": {
            "type": "Identifier",
            "start": 2118,
            "end": 2122,
            "name": "r3b9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2125,
            "end": 2133,
            "left": {
              "type": "Identifier",
              "start": 2125,
              "end": 2127,
              "name": "b9",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "<=",
            "right": {
              "type": "Identifier",
              "start": 2131,
              "end": 2133,
              "name": "a9",
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
      "start": 2177,
      "end": 2197,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2181,
          "end": 2196,
          "id": {
            "type": "Identifier",
            "start": 2181,
            "end": 2185,
            "name": "r4a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2188,
            "end": 2196,
            "left": {
              "type": "Identifier",
              "start": 2188,
              "end": 2190,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 2194,
              "end": 2196,
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
      "start": 2198,
      "end": 2218,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2202,
          "end": 2217,
          "id": {
            "type": "Identifier",
            "start": 2202,
            "end": 2206,
            "name": "r4a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2209,
            "end": 2217,
            "left": {
              "type": "Identifier",
              "start": 2209,
              "end": 2211,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 2215,
              "end": 2217,
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
      "start": 2219,
      "end": 2239,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2223,
          "end": 2238,
          "id": {
            "type": "Identifier",
            "start": 2223,
            "end": 2227,
            "name": "r4a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2230,
            "end": 2238,
            "left": {
              "type": "Identifier",
              "start": 2230,
              "end": 2232,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 2236,
              "end": 2238,
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
      "start": 2240,
      "end": 2260,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2244,
          "end": 2259,
          "id": {
            "type": "Identifier",
            "start": 2244,
            "end": 2248,
            "name": "r4a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2251,
            "end": 2259,
            "left": {
              "type": "Identifier",
              "start": 2251,
              "end": 2253,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 2257,
              "end": 2259,
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
      "start": 2261,
      "end": 2281,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2265,
          "end": 2280,
          "id": {
            "type": "Identifier",
            "start": 2265,
            "end": 2269,
            "name": "r4a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2272,
            "end": 2280,
            "left": {
              "type": "Identifier",
              "start": 2272,
              "end": 2274,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 2278,
              "end": 2280,
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
      "start": 2282,
      "end": 2302,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2286,
          "end": 2301,
          "id": {
            "type": "Identifier",
            "start": 2286,
            "end": 2290,
            "name": "r4a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2293,
            "end": 2301,
            "left": {
              "type": "Identifier",
              "start": 2293,
              "end": 2295,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 2299,
              "end": 2301,
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
      "start": 2303,
      "end": 2323,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2307,
          "end": 2322,
          "id": {
            "type": "Identifier",
            "start": 2307,
            "end": 2311,
            "name": "r4a7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2314,
            "end": 2322,
            "left": {
              "type": "Identifier",
              "start": 2314,
              "end": 2316,
              "name": "a7",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 2320,
              "end": 2322,
              "name": "b7",
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
      "start": 2324,
      "end": 2344,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2328,
          "end": 2343,
          "id": {
            "type": "Identifier",
            "start": 2328,
            "end": 2332,
            "name": "r4a8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2335,
            "end": 2343,
            "left": {
              "type": "Identifier",
              "start": 2335,
              "end": 2337,
              "name": "a8",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 2341,
              "end": 2343,
              "name": "b8",
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
      "start": 2345,
      "end": 2365,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2349,
          "end": 2364,
          "id": {
            "type": "Identifier",
            "start": 2349,
            "end": 2353,
            "name": "r4a9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2356,
            "end": 2364,
            "left": {
              "type": "Identifier",
              "start": 2356,
              "end": 2358,
              "name": "a9",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 2362,
              "end": 2364,
              "name": "b9",
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
      "start": 2393,
      "end": 2413,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2397,
          "end": 2412,
          "id": {
            "type": "Identifier",
            "start": 2397,
            "end": 2401,
            "name": "r4b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2404,
            "end": 2412,
            "left": {
              "type": "Identifier",
              "start": 2404,
              "end": 2406,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 2410,
              "end": 2412,
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
      "start": 2414,
      "end": 2434,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2418,
          "end": 2433,
          "id": {
            "type": "Identifier",
            "start": 2418,
            "end": 2422,
            "name": "r4b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2425,
            "end": 2433,
            "left": {
              "type": "Identifier",
              "start": 2425,
              "end": 2427,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 2431,
              "end": 2433,
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
      "start": 2435,
      "end": 2455,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2439,
          "end": 2454,
          "id": {
            "type": "Identifier",
            "start": 2439,
            "end": 2443,
            "name": "r4b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2446,
            "end": 2454,
            "left": {
              "type": "Identifier",
              "start": 2446,
              "end": 2448,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 2452,
              "end": 2454,
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
      "start": 2456,
      "end": 2476,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2460,
          "end": 2475,
          "id": {
            "type": "Identifier",
            "start": 2460,
            "end": 2464,
            "name": "r4b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2467,
            "end": 2475,
            "left": {
              "type": "Identifier",
              "start": 2467,
              "end": 2469,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 2473,
              "end": 2475,
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
      "start": 2477,
      "end": 2497,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2481,
          "end": 2496,
          "id": {
            "type": "Identifier",
            "start": 2481,
            "end": 2485,
            "name": "r4b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2488,
            "end": 2496,
            "left": {
              "type": "Identifier",
              "start": 2488,
              "end": 2490,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 2494,
              "end": 2496,
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
      "start": 2498,
      "end": 2518,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2502,
          "end": 2517,
          "id": {
            "type": "Identifier",
            "start": 2502,
            "end": 2506,
            "name": "r4b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2509,
            "end": 2517,
            "left": {
              "type": "Identifier",
              "start": 2509,
              "end": 2511,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 2515,
              "end": 2517,
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
      "start": 2519,
      "end": 2539,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2523,
          "end": 2538,
          "id": {
            "type": "Identifier",
            "start": 2523,
            "end": 2527,
            "name": "r4b7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2530,
            "end": 2538,
            "left": {
              "type": "Identifier",
              "start": 2530,
              "end": 2532,
              "name": "b7",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 2536,
              "end": 2538,
              "name": "a7",
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
      "start": 2540,
      "end": 2560,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2544,
          "end": 2559,
          "id": {
            "type": "Identifier",
            "start": 2544,
            "end": 2548,
            "name": "r4b8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2551,
            "end": 2559,
            "left": {
              "type": "Identifier",
              "start": 2551,
              "end": 2553,
              "name": "b8",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 2557,
              "end": 2559,
              "name": "a8",
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
      "start": 2561,
      "end": 2581,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2565,
          "end": 2580,
          "id": {
            "type": "Identifier",
            "start": 2565,
            "end": 2569,
            "name": "r4b9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2572,
            "end": 2580,
            "left": {
              "type": "Identifier",
              "start": 2572,
              "end": 2574,
              "name": "b9",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": ">=",
            "right": {
              "type": "Identifier",
              "start": 2578,
              "end": 2580,
              "name": "a9",
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
      "start": 2624,
      "end": 2644,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2628,
          "end": 2643,
          "id": {
            "type": "Identifier",
            "start": 2628,
            "end": 2632,
            "name": "r5a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2635,
            "end": 2643,
            "left": {
              "type": "Identifier",
              "start": 2635,
              "end": 2637,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 2641,
              "end": 2643,
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
      "start": 2645,
      "end": 2665,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2649,
          "end": 2664,
          "id": {
            "type": "Identifier",
            "start": 2649,
            "end": 2653,
            "name": "r5a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2656,
            "end": 2664,
            "left": {
              "type": "Identifier",
              "start": 2656,
              "end": 2658,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 2662,
              "end": 2664,
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
      "start": 2666,
      "end": 2686,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2670,
          "end": 2685,
          "id": {
            "type": "Identifier",
            "start": 2670,
            "end": 2674,
            "name": "r5a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2677,
            "end": 2685,
            "left": {
              "type": "Identifier",
              "start": 2677,
              "end": 2679,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 2683,
              "end": 2685,
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
      "start": 2687,
      "end": 2707,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2691,
          "end": 2706,
          "id": {
            "type": "Identifier",
            "start": 2691,
            "end": 2695,
            "name": "r5a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2698,
            "end": 2706,
            "left": {
              "type": "Identifier",
              "start": 2698,
              "end": 2700,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 2704,
              "end": 2706,
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
      "start": 2708,
      "end": 2728,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2712,
          "end": 2727,
          "id": {
            "type": "Identifier",
            "start": 2712,
            "end": 2716,
            "name": "r5a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2719,
            "end": 2727,
            "left": {
              "type": "Identifier",
              "start": 2719,
              "end": 2721,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 2725,
              "end": 2727,
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
      "start": 2729,
      "end": 2749,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2733,
          "end": 2748,
          "id": {
            "type": "Identifier",
            "start": 2733,
            "end": 2737,
            "name": "r5a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2740,
            "end": 2748,
            "left": {
              "type": "Identifier",
              "start": 2740,
              "end": 2742,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 2746,
              "end": 2748,
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
      "start": 2750,
      "end": 2770,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2754,
          "end": 2769,
          "id": {
            "type": "Identifier",
            "start": 2754,
            "end": 2758,
            "name": "r5a7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2761,
            "end": 2769,
            "left": {
              "type": "Identifier",
              "start": 2761,
              "end": 2763,
              "name": "a7",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 2767,
              "end": 2769,
              "name": "b7",
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
      "start": 2771,
      "end": 2791,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2775,
          "end": 2790,
          "id": {
            "type": "Identifier",
            "start": 2775,
            "end": 2779,
            "name": "r5a8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2782,
            "end": 2790,
            "left": {
              "type": "Identifier",
              "start": 2782,
              "end": 2784,
              "name": "a8",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 2788,
              "end": 2790,
              "name": "b8",
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
      "start": 2792,
      "end": 2812,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2796,
          "end": 2811,
          "id": {
            "type": "Identifier",
            "start": 2796,
            "end": 2800,
            "name": "r5a9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2803,
            "end": 2811,
            "left": {
              "type": "Identifier",
              "start": 2803,
              "end": 2805,
              "name": "a9",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 2809,
              "end": 2811,
              "name": "b9",
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
      "start": 2840,
      "end": 2860,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2844,
          "end": 2859,
          "id": {
            "type": "Identifier",
            "start": 2844,
            "end": 2848,
            "name": "r5b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2851,
            "end": 2859,
            "left": {
              "type": "Identifier",
              "start": 2851,
              "end": 2853,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 2857,
              "end": 2859,
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
      "start": 2861,
      "end": 2881,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2865,
          "end": 2880,
          "id": {
            "type": "Identifier",
            "start": 2865,
            "end": 2869,
            "name": "r5b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2872,
            "end": 2880,
            "left": {
              "type": "Identifier",
              "start": 2872,
              "end": 2874,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 2878,
              "end": 2880,
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
      "start": 2882,
      "end": 2902,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2886,
          "end": 2901,
          "id": {
            "type": "Identifier",
            "start": 2886,
            "end": 2890,
            "name": "r5b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2893,
            "end": 2901,
            "left": {
              "type": "Identifier",
              "start": 2893,
              "end": 2895,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 2899,
              "end": 2901,
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
      "start": 2903,
      "end": 2923,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2907,
          "end": 2922,
          "id": {
            "type": "Identifier",
            "start": 2907,
            "end": 2911,
            "name": "r5b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2914,
            "end": 2922,
            "left": {
              "type": "Identifier",
              "start": 2914,
              "end": 2916,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 2920,
              "end": 2922,
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
      "start": 2924,
      "end": 2944,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2928,
          "end": 2943,
          "id": {
            "type": "Identifier",
            "start": 2928,
            "end": 2932,
            "name": "r5b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2935,
            "end": 2943,
            "left": {
              "type": "Identifier",
              "start": 2935,
              "end": 2937,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 2941,
              "end": 2943,
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
      "start": 2945,
      "end": 2965,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2949,
          "end": 2964,
          "id": {
            "type": "Identifier",
            "start": 2949,
            "end": 2953,
            "name": "r5b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2956,
            "end": 2964,
            "left": {
              "type": "Identifier",
              "start": 2956,
              "end": 2958,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 2962,
              "end": 2964,
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
      "start": 2966,
      "end": 2986,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2970,
          "end": 2985,
          "id": {
            "type": "Identifier",
            "start": 2970,
            "end": 2974,
            "name": "r5b7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2977,
            "end": 2985,
            "left": {
              "type": "Identifier",
              "start": 2977,
              "end": 2979,
              "name": "b7",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 2983,
              "end": 2985,
              "name": "a7",
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
      "start": 2987,
      "end": 3007,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2991,
          "end": 3006,
          "id": {
            "type": "Identifier",
            "start": 2991,
            "end": 2995,
            "name": "r5b8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 2998,
            "end": 3006,
            "left": {
              "type": "Identifier",
              "start": 2998,
              "end": 3000,
              "name": "b8",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 3004,
              "end": 3006,
              "name": "a8",
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
      "start": 3008,
      "end": 3028,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3012,
          "end": 3027,
          "id": {
            "type": "Identifier",
            "start": 3012,
            "end": 3016,
            "name": "r5b9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3019,
            "end": 3027,
            "left": {
              "type": "Identifier",
              "start": 3019,
              "end": 3021,
              "name": "b9",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "==",
            "right": {
              "type": "Identifier",
              "start": 3025,
              "end": 3027,
              "name": "a9",
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
      "start": 3071,
      "end": 3091,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3075,
          "end": 3090,
          "id": {
            "type": "Identifier",
            "start": 3075,
            "end": 3079,
            "name": "r6a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3082,
            "end": 3090,
            "left": {
              "type": "Identifier",
              "start": 3082,
              "end": 3084,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 3088,
              "end": 3090,
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
      "start": 3092,
      "end": 3112,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3096,
          "end": 3111,
          "id": {
            "type": "Identifier",
            "start": 3096,
            "end": 3100,
            "name": "r6a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3103,
            "end": 3111,
            "left": {
              "type": "Identifier",
              "start": 3103,
              "end": 3105,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 3109,
              "end": 3111,
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
      "start": 3113,
      "end": 3133,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3117,
          "end": 3132,
          "id": {
            "type": "Identifier",
            "start": 3117,
            "end": 3121,
            "name": "r6a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3124,
            "end": 3132,
            "left": {
              "type": "Identifier",
              "start": 3124,
              "end": 3126,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 3130,
              "end": 3132,
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
      "start": 3134,
      "end": 3154,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3138,
          "end": 3153,
          "id": {
            "type": "Identifier",
            "start": 3138,
            "end": 3142,
            "name": "r6a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3145,
            "end": 3153,
            "left": {
              "type": "Identifier",
              "start": 3145,
              "end": 3147,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 3151,
              "end": 3153,
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
      "start": 3155,
      "end": 3175,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3159,
          "end": 3174,
          "id": {
            "type": "Identifier",
            "start": 3159,
            "end": 3163,
            "name": "r6a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3166,
            "end": 3174,
            "left": {
              "type": "Identifier",
              "start": 3166,
              "end": 3168,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 3172,
              "end": 3174,
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
      "start": 3176,
      "end": 3196,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3180,
          "end": 3195,
          "id": {
            "type": "Identifier",
            "start": 3180,
            "end": 3184,
            "name": "r6a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3187,
            "end": 3195,
            "left": {
              "type": "Identifier",
              "start": 3187,
              "end": 3189,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 3193,
              "end": 3195,
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
      "start": 3197,
      "end": 3217,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3201,
          "end": 3216,
          "id": {
            "type": "Identifier",
            "start": 3201,
            "end": 3205,
            "name": "r6a7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3208,
            "end": 3216,
            "left": {
              "type": "Identifier",
              "start": 3208,
              "end": 3210,
              "name": "a7",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 3214,
              "end": 3216,
              "name": "b7",
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
      "start": 3218,
      "end": 3238,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3222,
          "end": 3237,
          "id": {
            "type": "Identifier",
            "start": 3222,
            "end": 3226,
            "name": "r6a8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3229,
            "end": 3237,
            "left": {
              "type": "Identifier",
              "start": 3229,
              "end": 3231,
              "name": "a8",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 3235,
              "end": 3237,
              "name": "b8",
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
      "start": 3239,
      "end": 3259,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3243,
          "end": 3258,
          "id": {
            "type": "Identifier",
            "start": 3243,
            "end": 3247,
            "name": "r6a9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3250,
            "end": 3258,
            "left": {
              "type": "Identifier",
              "start": 3250,
              "end": 3252,
              "name": "a9",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 3256,
              "end": 3258,
              "name": "b9",
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
      "start": 3287,
      "end": 3307,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3291,
          "end": 3306,
          "id": {
            "type": "Identifier",
            "start": 3291,
            "end": 3295,
            "name": "r6b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3298,
            "end": 3306,
            "left": {
              "type": "Identifier",
              "start": 3298,
              "end": 3300,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 3304,
              "end": 3306,
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
      "start": 3308,
      "end": 3328,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3312,
          "end": 3327,
          "id": {
            "type": "Identifier",
            "start": 3312,
            "end": 3316,
            "name": "r6b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3319,
            "end": 3327,
            "left": {
              "type": "Identifier",
              "start": 3319,
              "end": 3321,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 3325,
              "end": 3327,
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
      "start": 3329,
      "end": 3349,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3333,
          "end": 3348,
          "id": {
            "type": "Identifier",
            "start": 3333,
            "end": 3337,
            "name": "r6b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3340,
            "end": 3348,
            "left": {
              "type": "Identifier",
              "start": 3340,
              "end": 3342,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 3346,
              "end": 3348,
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
      "start": 3350,
      "end": 3370,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3354,
          "end": 3369,
          "id": {
            "type": "Identifier",
            "start": 3354,
            "end": 3358,
            "name": "r6b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3361,
            "end": 3369,
            "left": {
              "type": "Identifier",
              "start": 3361,
              "end": 3363,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 3367,
              "end": 3369,
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
      "start": 3371,
      "end": 3391,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3375,
          "end": 3390,
          "id": {
            "type": "Identifier",
            "start": 3375,
            "end": 3379,
            "name": "r6b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3382,
            "end": 3390,
            "left": {
              "type": "Identifier",
              "start": 3382,
              "end": 3384,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 3388,
              "end": 3390,
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
      "start": 3392,
      "end": 3412,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3396,
          "end": 3411,
          "id": {
            "type": "Identifier",
            "start": 3396,
            "end": 3400,
            "name": "r6b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3403,
            "end": 3411,
            "left": {
              "type": "Identifier",
              "start": 3403,
              "end": 3405,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 3409,
              "end": 3411,
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
      "start": 3413,
      "end": 3433,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3417,
          "end": 3432,
          "id": {
            "type": "Identifier",
            "start": 3417,
            "end": 3421,
            "name": "r6b7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3424,
            "end": 3432,
            "left": {
              "type": "Identifier",
              "start": 3424,
              "end": 3426,
              "name": "b7",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 3430,
              "end": 3432,
              "name": "a7",
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
      "start": 3434,
      "end": 3454,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3438,
          "end": 3453,
          "id": {
            "type": "Identifier",
            "start": 3438,
            "end": 3442,
            "name": "r6b8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3445,
            "end": 3453,
            "left": {
              "type": "Identifier",
              "start": 3445,
              "end": 3447,
              "name": "b8",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 3451,
              "end": 3453,
              "name": "a8",
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
      "start": 3455,
      "end": 3475,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3459,
          "end": 3474,
          "id": {
            "type": "Identifier",
            "start": 3459,
            "end": 3463,
            "name": "r6b9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3466,
            "end": 3474,
            "left": {
              "type": "Identifier",
              "start": 3466,
              "end": 3468,
              "name": "b9",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!=",
            "right": {
              "type": "Identifier",
              "start": 3472,
              "end": 3474,
              "name": "a9",
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
      "start": 3519,
      "end": 3540,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3523,
          "end": 3539,
          "id": {
            "type": "Identifier",
            "start": 3523,
            "end": 3527,
            "name": "r7a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3530,
            "end": 3539,
            "left": {
              "type": "Identifier",
              "start": 3530,
              "end": 3532,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 3537,
              "end": 3539,
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
      "start": 3541,
      "end": 3562,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3545,
          "end": 3561,
          "id": {
            "type": "Identifier",
            "start": 3545,
            "end": 3549,
            "name": "r7a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3552,
            "end": 3561,
            "left": {
              "type": "Identifier",
              "start": 3552,
              "end": 3554,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 3559,
              "end": 3561,
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
      "start": 3563,
      "end": 3584,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3567,
          "end": 3583,
          "id": {
            "type": "Identifier",
            "start": 3567,
            "end": 3571,
            "name": "r7a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3574,
            "end": 3583,
            "left": {
              "type": "Identifier",
              "start": 3574,
              "end": 3576,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 3581,
              "end": 3583,
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
      "start": 3585,
      "end": 3606,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3589,
          "end": 3605,
          "id": {
            "type": "Identifier",
            "start": 3589,
            "end": 3593,
            "name": "r7a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3596,
            "end": 3605,
            "left": {
              "type": "Identifier",
              "start": 3596,
              "end": 3598,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 3603,
              "end": 3605,
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
      "start": 3607,
      "end": 3628,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3611,
          "end": 3627,
          "id": {
            "type": "Identifier",
            "start": 3611,
            "end": 3615,
            "name": "r7a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3618,
            "end": 3627,
            "left": {
              "type": "Identifier",
              "start": 3618,
              "end": 3620,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 3625,
              "end": 3627,
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
      "start": 3629,
      "end": 3650,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3633,
          "end": 3649,
          "id": {
            "type": "Identifier",
            "start": 3633,
            "end": 3637,
            "name": "r7a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3640,
            "end": 3649,
            "left": {
              "type": "Identifier",
              "start": 3640,
              "end": 3642,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 3647,
              "end": 3649,
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
      "start": 3651,
      "end": 3672,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3655,
          "end": 3671,
          "id": {
            "type": "Identifier",
            "start": 3655,
            "end": 3659,
            "name": "r7a7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3662,
            "end": 3671,
            "left": {
              "type": "Identifier",
              "start": 3662,
              "end": 3664,
              "name": "a7",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 3669,
              "end": 3671,
              "name": "b7",
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
      "start": 3673,
      "end": 3694,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3677,
          "end": 3693,
          "id": {
            "type": "Identifier",
            "start": 3677,
            "end": 3681,
            "name": "r7a8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3684,
            "end": 3693,
            "left": {
              "type": "Identifier",
              "start": 3684,
              "end": 3686,
              "name": "a8",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 3691,
              "end": 3693,
              "name": "b8",
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
      "start": 3695,
      "end": 3716,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3699,
          "end": 3715,
          "id": {
            "type": "Identifier",
            "start": 3699,
            "end": 3703,
            "name": "r7a9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3706,
            "end": 3715,
            "left": {
              "type": "Identifier",
              "start": 3706,
              "end": 3708,
              "name": "a9",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 3713,
              "end": 3715,
              "name": "b9",
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
      "start": 3745,
      "end": 3766,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3749,
          "end": 3765,
          "id": {
            "type": "Identifier",
            "start": 3749,
            "end": 3753,
            "name": "r7b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3756,
            "end": 3765,
            "left": {
              "type": "Identifier",
              "start": 3756,
              "end": 3758,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 3763,
              "end": 3765,
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
      "start": 3767,
      "end": 3788,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3771,
          "end": 3787,
          "id": {
            "type": "Identifier",
            "start": 3771,
            "end": 3775,
            "name": "r7b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3778,
            "end": 3787,
            "left": {
              "type": "Identifier",
              "start": 3778,
              "end": 3780,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 3785,
              "end": 3787,
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
      "start": 3789,
      "end": 3810,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3793,
          "end": 3809,
          "id": {
            "type": "Identifier",
            "start": 3793,
            "end": 3797,
            "name": "r7b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3800,
            "end": 3809,
            "left": {
              "type": "Identifier",
              "start": 3800,
              "end": 3802,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 3807,
              "end": 3809,
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
      "start": 3811,
      "end": 3832,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3815,
          "end": 3831,
          "id": {
            "type": "Identifier",
            "start": 3815,
            "end": 3819,
            "name": "r7b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3822,
            "end": 3831,
            "left": {
              "type": "Identifier",
              "start": 3822,
              "end": 3824,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 3829,
              "end": 3831,
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
      "start": 3833,
      "end": 3854,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3837,
          "end": 3853,
          "id": {
            "type": "Identifier",
            "start": 3837,
            "end": 3841,
            "name": "r7b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3844,
            "end": 3853,
            "left": {
              "type": "Identifier",
              "start": 3844,
              "end": 3846,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 3851,
              "end": 3853,
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
      "start": 3855,
      "end": 3876,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3859,
          "end": 3875,
          "id": {
            "type": "Identifier",
            "start": 3859,
            "end": 3863,
            "name": "r7b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3866,
            "end": 3875,
            "left": {
              "type": "Identifier",
              "start": 3866,
              "end": 3868,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 3873,
              "end": 3875,
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
      "start": 3877,
      "end": 3898,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3881,
          "end": 3897,
          "id": {
            "type": "Identifier",
            "start": 3881,
            "end": 3885,
            "name": "r7b7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3888,
            "end": 3897,
            "left": {
              "type": "Identifier",
              "start": 3888,
              "end": 3890,
              "name": "b7",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 3895,
              "end": 3897,
              "name": "a7",
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
      "start": 3899,
      "end": 3920,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3903,
          "end": 3919,
          "id": {
            "type": "Identifier",
            "start": 3903,
            "end": 3907,
            "name": "r7b8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3910,
            "end": 3919,
            "left": {
              "type": "Identifier",
              "start": 3910,
              "end": 3912,
              "name": "b8",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 3917,
              "end": 3919,
              "name": "a8",
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
      "start": 3921,
      "end": 3942,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3925,
          "end": 3941,
          "id": {
            "type": "Identifier",
            "start": 3925,
            "end": 3929,
            "name": "r7b9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3932,
            "end": 3941,
            "left": {
              "type": "Identifier",
              "start": 3932,
              "end": 3934,
              "name": "b9",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "===",
            "right": {
              "type": "Identifier",
              "start": 3939,
              "end": 3941,
              "name": "a9",
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
      "start": 3987,
      "end": 4008,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3991,
          "end": 4007,
          "id": {
            "type": "Identifier",
            "start": 3991,
            "end": 3995,
            "name": "r8a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 3998,
            "end": 4007,
            "left": {
              "type": "Identifier",
              "start": 3998,
              "end": 4000,
              "name": "a1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 4005,
              "end": 4007,
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
      "start": 4009,
      "end": 4030,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4013,
          "end": 4029,
          "id": {
            "type": "Identifier",
            "start": 4013,
            "end": 4017,
            "name": "r8a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 4020,
            "end": 4029,
            "left": {
              "type": "Identifier",
              "start": 4020,
              "end": 4022,
              "name": "a2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 4027,
              "end": 4029,
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
      "start": 4031,
      "end": 4052,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4035,
          "end": 4051,
          "id": {
            "type": "Identifier",
            "start": 4035,
            "end": 4039,
            "name": "r8a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 4042,
            "end": 4051,
            "left": {
              "type": "Identifier",
              "start": 4042,
              "end": 4044,
              "name": "a3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 4049,
              "end": 4051,
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
      "start": 4053,
      "end": 4074,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4057,
          "end": 4073,
          "id": {
            "type": "Identifier",
            "start": 4057,
            "end": 4061,
            "name": "r8a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 4064,
            "end": 4073,
            "left": {
              "type": "Identifier",
              "start": 4064,
              "end": 4066,
              "name": "a4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 4071,
              "end": 4073,
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
      "start": 4075,
      "end": 4096,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4079,
          "end": 4095,
          "id": {
            "type": "Identifier",
            "start": 4079,
            "end": 4083,
            "name": "r8a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 4086,
            "end": 4095,
            "left": {
              "type": "Identifier",
              "start": 4086,
              "end": 4088,
              "name": "a5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 4093,
              "end": 4095,
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
      "start": 4097,
      "end": 4118,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4101,
          "end": 4117,
          "id": {
            "type": "Identifier",
            "start": 4101,
            "end": 4105,
            "name": "r8a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 4108,
            "end": 4117,
            "left": {
              "type": "Identifier",
              "start": 4108,
              "end": 4110,
              "name": "a6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 4115,
              "end": 4117,
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
      "start": 4119,
      "end": 4140,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4123,
          "end": 4139,
          "id": {
            "type": "Identifier",
            "start": 4123,
            "end": 4127,
            "name": "r8a7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 4130,
            "end": 4139,
            "left": {
              "type": "Identifier",
              "start": 4130,
              "end": 4132,
              "name": "a7",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 4137,
              "end": 4139,
              "name": "b7",
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
      "start": 4141,
      "end": 4162,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4145,
          "end": 4161,
          "id": {
            "type": "Identifier",
            "start": 4145,
            "end": 4149,
            "name": "r8a8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 4152,
            "end": 4161,
            "left": {
              "type": "Identifier",
              "start": 4152,
              "end": 4154,
              "name": "a8",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 4159,
              "end": 4161,
              "name": "b8",
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
      "start": 4163,
      "end": 4184,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4167,
          "end": 4183,
          "id": {
            "type": "Identifier",
            "start": 4167,
            "end": 4171,
            "name": "r8a9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 4174,
            "end": 4183,
            "left": {
              "type": "Identifier",
              "start": 4174,
              "end": 4176,
              "name": "a9",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 4181,
              "end": 4183,
              "name": "b9",
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
      "start": 4213,
      "end": 4234,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4217,
          "end": 4233,
          "id": {
            "type": "Identifier",
            "start": 4217,
            "end": 4221,
            "name": "r8b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 4224,
            "end": 4233,
            "left": {
              "type": "Identifier",
              "start": 4224,
              "end": 4226,
              "name": "b1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 4231,
              "end": 4233,
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
      "start": 4235,
      "end": 4256,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4239,
          "end": 4255,
          "id": {
            "type": "Identifier",
            "start": 4239,
            "end": 4243,
            "name": "r8b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 4246,
            "end": 4255,
            "left": {
              "type": "Identifier",
              "start": 4246,
              "end": 4248,
              "name": "b2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 4253,
              "end": 4255,
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
      "start": 4257,
      "end": 4278,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4261,
          "end": 4277,
          "id": {
            "type": "Identifier",
            "start": 4261,
            "end": 4265,
            "name": "r8b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 4268,
            "end": 4277,
            "left": {
              "type": "Identifier",
              "start": 4268,
              "end": 4270,
              "name": "b3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 4275,
              "end": 4277,
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
      "start": 4279,
      "end": 4300,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4283,
          "end": 4299,
          "id": {
            "type": "Identifier",
            "start": 4283,
            "end": 4287,
            "name": "r8b4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 4290,
            "end": 4299,
            "left": {
              "type": "Identifier",
              "start": 4290,
              "end": 4292,
              "name": "b4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 4297,
              "end": 4299,
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
      "start": 4301,
      "end": 4322,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4305,
          "end": 4321,
          "id": {
            "type": "Identifier",
            "start": 4305,
            "end": 4309,
            "name": "r8b5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 4312,
            "end": 4321,
            "left": {
              "type": "Identifier",
              "start": 4312,
              "end": 4314,
              "name": "b5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 4319,
              "end": 4321,
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
      "start": 4323,
      "end": 4344,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4327,
          "end": 4343,
          "id": {
            "type": "Identifier",
            "start": 4327,
            "end": 4331,
            "name": "r8b6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 4334,
            "end": 4343,
            "left": {
              "type": "Identifier",
              "start": 4334,
              "end": 4336,
              "name": "b6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 4341,
              "end": 4343,
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
      "start": 4345,
      "end": 4366,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4349,
          "end": 4365,
          "id": {
            "type": "Identifier",
            "start": 4349,
            "end": 4353,
            "name": "r8b7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 4356,
            "end": 4365,
            "left": {
              "type": "Identifier",
              "start": 4356,
              "end": 4358,
              "name": "b7",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 4363,
              "end": 4365,
              "name": "a7",
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
      "start": 4367,
      "end": 4388,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4371,
          "end": 4387,
          "id": {
            "type": "Identifier",
            "start": 4371,
            "end": 4375,
            "name": "r8b8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 4378,
            "end": 4387,
            "left": {
              "type": "Identifier",
              "start": 4378,
              "end": 4380,
              "name": "b8",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 4385,
              "end": 4387,
              "name": "a8",
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
      "start": 4389,
      "end": 4410,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4393,
          "end": 4409,
          "id": {
            "type": "Identifier",
            "start": 4393,
            "end": 4397,
            "name": "r8b9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 4400,
            "end": 4409,
            "left": {
              "type": "Identifier",
              "start": 4400,
              "end": 4402,
              "name": "b9",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "!==",
            "right": {
              "type": "Identifier",
              "start": 4407,
              "end": 4409,
              "name": "a9",
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
