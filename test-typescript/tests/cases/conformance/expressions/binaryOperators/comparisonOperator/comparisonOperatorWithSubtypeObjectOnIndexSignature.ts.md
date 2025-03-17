__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1860,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 36,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 36,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 34,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
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
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 38,
      "end": 90,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 65,
        "end": 90,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 71,
            "end": 88,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
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
      "implements": [],
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
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 92,
      "end": 124,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 96,
          "end": 123,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 96,
            "end": 123,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 98,
              "end": 123,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 100,
                "end": 123,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 102,
                    "end": 121,
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 103,
                        "end": 112,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 104,
                          "end": 112,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 106,
                            "end": 112
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 113,
                      "end": 121,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 115,
                        "end": 121
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 125,
      "end": 157,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 156,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 156,
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 131,
              "end": 156,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 133,
                "end": 156,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 135,
                    "end": 154,
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 136,
                        "end": 145,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 137,
                          "end": 145,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 139,
                            "end": 145
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 146,
                      "end": 154,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 148,
                        "end": 154
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 159,
      "end": 193,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 163,
          "end": 192,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 163,
            "end": 192,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 165,
              "end": 192,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 167,
                "end": 192,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 169,
                    "end": 190,
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 170,
                        "end": 183,
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 175,
                          "end": 183,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 177,
                            "end": 183
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 184,
                      "end": 190,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 186,
                        "end": 190,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 186,
                          "end": 190,
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 194,
      "end": 231,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 198,
          "end": 230,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 198,
            "end": 230,
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 200,
              "end": 230,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 202,
                "end": 230,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 204,
                    "end": 228,
                    "accessibility": null,
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
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 219,
                      "end": 228,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 221,
                        "end": 228,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 221,
                          "end": 228,
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 233,
      "end": 269,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 237,
          "end": 268,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 237,
            "end": 268,
            "decorators": [],
            "name": "a3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 239,
              "end": 268,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 241,
                "end": 268,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 243,
                    "end": 266,
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 244,
                        "end": 257,
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 249,
                          "end": 257,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 251,
                            "end": 257
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 258,
                      "end": 266,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 260,
                        "end": 266
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 270,
      "end": 306,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 274,
          "end": 305,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 274,
            "end": 305,
            "decorators": [],
            "name": "b3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 276,
              "end": 305,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 278,
                "end": 305,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 280,
                    "end": 303,
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 281,
                        "end": 294,
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 286,
                          "end": 294,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 288,
                            "end": 294
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 295,
                      "end": 303,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 297,
                        "end": 303
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 308,
      "end": 342,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 312,
          "end": 341,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 312,
            "end": 341,
            "decorators": [],
            "name": "a4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 314,
              "end": 341,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 316,
                "end": 341,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 318,
                    "end": 339,
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 319,
                        "end": 332,
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 324,
                          "end": 332,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 326,
                            "end": 332
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 333,
                      "end": 339,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 335,
                        "end": 339,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 335,
                          "end": 339,
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 343,
      "end": 380,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 347,
          "end": 379,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 347,
            "end": 379,
            "decorators": [],
            "name": "b4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 349,
              "end": 379,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 351,
                "end": 379,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 353,
                    "end": 377,
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 354,
                        "end": 367,
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 359,
                          "end": 367,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 361,
                            "end": 367
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 368,
                      "end": 377,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 370,
                        "end": 377,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 370,
                          "end": 377,
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 396,
      "end": 415,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 400,
          "end": 414,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 400,
            "end": 404,
            "decorators": [],
            "name": "r1a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 407,
            "end": 414,
            "operator": "<",
            "left": {
              "type": "Identifier",
              "start": 407,
              "end": 409,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 412,
              "end": 414,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 416,
      "end": 435,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 420,
          "end": 434,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 420,
            "end": 424,
            "decorators": [],
            "name": "r1a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 427,
            "end": 434,
            "operator": "<",
            "left": {
              "type": "Identifier",
              "start": 427,
              "end": 429,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 432,
              "end": 434,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 436,
      "end": 455,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 440,
          "end": 454,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 440,
            "end": 444,
            "decorators": [],
            "name": "r1a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 447,
            "end": 454,
            "operator": "<",
            "left": {
              "type": "Identifier",
              "start": 447,
              "end": 449,
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 452,
              "end": 454,
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 456,
      "end": 475,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 460,
          "end": 474,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 460,
            "end": 464,
            "decorators": [],
            "name": "r1a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 467,
            "end": 474,
            "operator": "<",
            "left": {
              "type": "Identifier",
              "start": 467,
              "end": 469,
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 472,
              "end": 474,
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 477,
      "end": 496,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 481,
          "end": 495,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 481,
            "end": 485,
            "decorators": [],
            "name": "r1b1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 488,
            "end": 495,
            "operator": "<",
            "left": {
              "type": "Identifier",
              "start": 488,
              "end": 490,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 493,
              "end": 495,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 497,
      "end": 516,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 501,
          "end": 515,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 501,
            "end": 505,
            "decorators": [],
            "name": "r1b1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 508,
            "end": 515,
            "operator": "<",
            "left": {
              "type": "Identifier",
              "start": 508,
              "end": 510,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 513,
              "end": 515,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 517,
      "end": 536,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 521,
          "end": 535,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 521,
            "end": 525,
            "decorators": [],
            "name": "r1b1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 528,
            "end": 535,
            "operator": "<",
            "left": {
              "type": "Identifier",
              "start": 528,
              "end": 530,
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 533,
              "end": 535,
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 537,
      "end": 556,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 541,
          "end": 555,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 541,
            "end": 545,
            "decorators": [],
            "name": "r1b1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 548,
            "end": 555,
            "operator": "<",
            "left": {
              "type": "Identifier",
              "start": 548,
              "end": 550,
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 553,
              "end": 555,
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 572,
      "end": 591,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 576,
          "end": 590,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 576,
            "end": 580,
            "decorators": [],
            "name": "r2a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 583,
            "end": 590,
            "operator": ">",
            "left": {
              "type": "Identifier",
              "start": 583,
              "end": 585,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 588,
              "end": 590,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 592,
      "end": 611,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 596,
          "end": 610,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 596,
            "end": 600,
            "decorators": [],
            "name": "r2a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 603,
            "end": 610,
            "operator": ">",
            "left": {
              "type": "Identifier",
              "start": 603,
              "end": 605,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 608,
              "end": 610,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 612,
      "end": 631,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 616,
          "end": 630,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 616,
            "end": 620,
            "decorators": [],
            "name": "r2a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 623,
            "end": 630,
            "operator": ">",
            "left": {
              "type": "Identifier",
              "start": 623,
              "end": 625,
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 628,
              "end": 630,
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 632,
      "end": 651,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 636,
          "end": 650,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 636,
            "end": 640,
            "decorators": [],
            "name": "r2a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 643,
            "end": 650,
            "operator": ">",
            "left": {
              "type": "Identifier",
              "start": 643,
              "end": 645,
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 648,
              "end": 650,
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 653,
      "end": 672,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 657,
          "end": 671,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 657,
            "end": 661,
            "decorators": [],
            "name": "r2b1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 664,
            "end": 671,
            "operator": ">",
            "left": {
              "type": "Identifier",
              "start": 664,
              "end": 666,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 669,
              "end": 671,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 673,
      "end": 692,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 677,
          "end": 691,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 677,
            "end": 681,
            "decorators": [],
            "name": "r2b1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 684,
            "end": 691,
            "operator": ">",
            "left": {
              "type": "Identifier",
              "start": 684,
              "end": 686,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 689,
              "end": 691,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 693,
      "end": 712,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 697,
          "end": 711,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 697,
            "end": 701,
            "decorators": [],
            "name": "r2b1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 704,
            "end": 711,
            "operator": ">",
            "left": {
              "type": "Identifier",
              "start": 704,
              "end": 706,
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 709,
              "end": 711,
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 713,
      "end": 732,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 717,
          "end": 731,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 717,
            "end": 721,
            "decorators": [],
            "name": "r2b1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 724,
            "end": 731,
            "operator": ">",
            "left": {
              "type": "Identifier",
              "start": 724,
              "end": 726,
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 729,
              "end": 731,
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 749,
      "end": 769,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 753,
          "end": 768,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 753,
            "end": 757,
            "decorators": [],
            "name": "r3a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 760,
            "end": 768,
            "operator": "<=",
            "left": {
              "type": "Identifier",
              "start": 760,
              "end": 762,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 766,
              "end": 768,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 770,
      "end": 790,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 774,
          "end": 789,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 774,
            "end": 778,
            "decorators": [],
            "name": "r3a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 781,
            "end": 789,
            "operator": "<=",
            "left": {
              "type": "Identifier",
              "start": 781,
              "end": 783,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 787,
              "end": 789,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 791,
      "end": 811,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 795,
          "end": 810,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 795,
            "end": 799,
            "decorators": [],
            "name": "r3a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 802,
            "end": 810,
            "operator": "<=",
            "left": {
              "type": "Identifier",
              "start": 802,
              "end": 804,
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 808,
              "end": 810,
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 812,
      "end": 832,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 816,
          "end": 831,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 816,
            "end": 820,
            "decorators": [],
            "name": "r3a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 823,
            "end": 831,
            "operator": "<=",
            "left": {
              "type": "Identifier",
              "start": 823,
              "end": 825,
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 829,
              "end": 831,
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 834,
      "end": 854,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 838,
          "end": 853,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 838,
            "end": 842,
            "decorators": [],
            "name": "r3b1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 845,
            "end": 853,
            "operator": "<=",
            "left": {
              "type": "Identifier",
              "start": 845,
              "end": 847,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 851,
              "end": 853,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 855,
      "end": 875,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 859,
          "end": 874,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 859,
            "end": 863,
            "decorators": [],
            "name": "r3b1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 866,
            "end": 874,
            "operator": "<=",
            "left": {
              "type": "Identifier",
              "start": 866,
              "end": 868,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 872,
              "end": 874,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 876,
      "end": 896,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 880,
          "end": 895,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 880,
            "end": 884,
            "decorators": [],
            "name": "r3b1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 887,
            "end": 895,
            "operator": "<=",
            "left": {
              "type": "Identifier",
              "start": 887,
              "end": 889,
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 893,
              "end": 895,
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 897,
      "end": 917,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 901,
          "end": 916,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 901,
            "end": 905,
            "decorators": [],
            "name": "r3b1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 908,
            "end": 916,
            "operator": "<=",
            "left": {
              "type": "Identifier",
              "start": 908,
              "end": 910,
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 914,
              "end": 916,
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 934,
      "end": 954,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 938,
          "end": 953,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 938,
            "end": 942,
            "decorators": [],
            "name": "r4a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 945,
            "end": 953,
            "operator": ">=",
            "left": {
              "type": "Identifier",
              "start": 945,
              "end": 947,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 951,
              "end": 953,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 955,
      "end": 975,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 959,
          "end": 974,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 959,
            "end": 963,
            "decorators": [],
            "name": "r4a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 966,
            "end": 974,
            "operator": ">=",
            "left": {
              "type": "Identifier",
              "start": 966,
              "end": 968,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 972,
              "end": 974,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 976,
      "end": 996,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 980,
          "end": 995,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 980,
            "end": 984,
            "decorators": [],
            "name": "r4a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 987,
            "end": 995,
            "operator": ">=",
            "left": {
              "type": "Identifier",
              "start": 987,
              "end": 989,
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 993,
              "end": 995,
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 997,
      "end": 1017,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1001,
          "end": 1016,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1001,
            "end": 1005,
            "decorators": [],
            "name": "r4a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1008,
            "end": 1016,
            "operator": ">=",
            "left": {
              "type": "Identifier",
              "start": 1008,
              "end": 1010,
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1014,
              "end": 1016,
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1019,
      "end": 1039,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1023,
          "end": 1038,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1023,
            "end": 1027,
            "decorators": [],
            "name": "r4b1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1030,
            "end": 1038,
            "operator": ">=",
            "left": {
              "type": "Identifier",
              "start": 1030,
              "end": 1032,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1036,
              "end": 1038,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1040,
      "end": 1060,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1044,
          "end": 1059,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1044,
            "end": 1048,
            "decorators": [],
            "name": "r4b1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1051,
            "end": 1059,
            "operator": ">=",
            "left": {
              "type": "Identifier",
              "start": 1051,
              "end": 1053,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1057,
              "end": 1059,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1061,
      "end": 1081,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1065,
          "end": 1080,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1065,
            "end": 1069,
            "decorators": [],
            "name": "r4b1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1072,
            "end": 1080,
            "operator": ">=",
            "left": {
              "type": "Identifier",
              "start": 1072,
              "end": 1074,
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1078,
              "end": 1080,
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1082,
      "end": 1102,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1086,
          "end": 1101,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1086,
            "end": 1090,
            "decorators": [],
            "name": "r4b1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1093,
            "end": 1101,
            "operator": ">=",
            "left": {
              "type": "Identifier",
              "start": 1093,
              "end": 1095,
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1099,
              "end": 1101,
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1119,
      "end": 1139,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1123,
          "end": 1138,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1123,
            "end": 1127,
            "decorators": [],
            "name": "r5a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1130,
            "end": 1138,
            "operator": "==",
            "left": {
              "type": "Identifier",
              "start": 1130,
              "end": 1132,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1136,
              "end": 1138,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1140,
      "end": 1160,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1144,
          "end": 1159,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1144,
            "end": 1148,
            "decorators": [],
            "name": "r5a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1151,
            "end": 1159,
            "operator": "==",
            "left": {
              "type": "Identifier",
              "start": 1151,
              "end": 1153,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1157,
              "end": 1159,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1161,
      "end": 1181,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1165,
          "end": 1180,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1165,
            "end": 1169,
            "decorators": [],
            "name": "r5a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1172,
            "end": 1180,
            "operator": "==",
            "left": {
              "type": "Identifier",
              "start": 1172,
              "end": 1174,
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1178,
              "end": 1180,
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1182,
      "end": 1202,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1186,
          "end": 1201,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1186,
            "end": 1190,
            "decorators": [],
            "name": "r5a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1193,
            "end": 1201,
            "operator": "==",
            "left": {
              "type": "Identifier",
              "start": 1193,
              "end": 1195,
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1199,
              "end": 1201,
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1204,
      "end": 1224,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1208,
          "end": 1223,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1208,
            "end": 1212,
            "decorators": [],
            "name": "r5b1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1215,
            "end": 1223,
            "operator": "==",
            "left": {
              "type": "Identifier",
              "start": 1215,
              "end": 1217,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1221,
              "end": 1223,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1225,
      "end": 1245,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1229,
          "end": 1244,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1229,
            "end": 1233,
            "decorators": [],
            "name": "r5b1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1236,
            "end": 1244,
            "operator": "==",
            "left": {
              "type": "Identifier",
              "start": 1236,
              "end": 1238,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1242,
              "end": 1244,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1246,
      "end": 1266,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1250,
          "end": 1265,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1250,
            "end": 1254,
            "decorators": [],
            "name": "r5b1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1257,
            "end": 1265,
            "operator": "==",
            "left": {
              "type": "Identifier",
              "start": 1257,
              "end": 1259,
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1263,
              "end": 1265,
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1267,
      "end": 1287,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1271,
          "end": 1286,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1271,
            "end": 1275,
            "decorators": [],
            "name": "r5b1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1278,
            "end": 1286,
            "operator": "==",
            "left": {
              "type": "Identifier",
              "start": 1278,
              "end": 1280,
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1284,
              "end": 1286,
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1304,
      "end": 1324,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1308,
          "end": 1323,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1308,
            "end": 1312,
            "decorators": [],
            "name": "r6a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1315,
            "end": 1323,
            "operator": "!=",
            "left": {
              "type": "Identifier",
              "start": 1315,
              "end": 1317,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1321,
              "end": 1323,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1325,
      "end": 1345,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1329,
          "end": 1344,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1329,
            "end": 1333,
            "decorators": [],
            "name": "r6a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1336,
            "end": 1344,
            "operator": "!=",
            "left": {
              "type": "Identifier",
              "start": 1336,
              "end": 1338,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1342,
              "end": 1344,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1346,
      "end": 1366,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1350,
          "end": 1365,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1350,
            "end": 1354,
            "decorators": [],
            "name": "r6a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1357,
            "end": 1365,
            "operator": "!=",
            "left": {
              "type": "Identifier",
              "start": 1357,
              "end": 1359,
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1363,
              "end": 1365,
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1367,
      "end": 1387,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1371,
          "end": 1386,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1371,
            "end": 1375,
            "decorators": [],
            "name": "r6a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1378,
            "end": 1386,
            "operator": "!=",
            "left": {
              "type": "Identifier",
              "start": 1378,
              "end": 1380,
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1384,
              "end": 1386,
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1389,
      "end": 1409,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1393,
          "end": 1408,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1393,
            "end": 1397,
            "decorators": [],
            "name": "r6b1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1400,
            "end": 1408,
            "operator": "!=",
            "left": {
              "type": "Identifier",
              "start": 1400,
              "end": 1402,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1406,
              "end": 1408,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1410,
      "end": 1430,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1414,
          "end": 1429,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1414,
            "end": 1418,
            "decorators": [],
            "name": "r6b1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1421,
            "end": 1429,
            "operator": "!=",
            "left": {
              "type": "Identifier",
              "start": 1421,
              "end": 1423,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1427,
              "end": 1429,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1431,
      "end": 1451,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1435,
          "end": 1450,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1435,
            "end": 1439,
            "decorators": [],
            "name": "r6b1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1442,
            "end": 1450,
            "operator": "!=",
            "left": {
              "type": "Identifier",
              "start": 1442,
              "end": 1444,
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1448,
              "end": 1450,
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1452,
      "end": 1472,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1456,
          "end": 1471,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1456,
            "end": 1460,
            "decorators": [],
            "name": "r6b1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1463,
            "end": 1471,
            "operator": "!=",
            "left": {
              "type": "Identifier",
              "start": 1463,
              "end": 1465,
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1469,
              "end": 1471,
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1490,
      "end": 1511,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1494,
          "end": 1510,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1494,
            "end": 1498,
            "decorators": [],
            "name": "r7a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1501,
            "end": 1510,
            "operator": "===",
            "left": {
              "type": "Identifier",
              "start": 1501,
              "end": 1503,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1508,
              "end": 1510,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1512,
      "end": 1533,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1516,
          "end": 1532,
          "definite": false,
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
            "operator": "===",
            "left": {
              "type": "Identifier",
              "start": 1523,
              "end": 1525,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1530,
              "end": 1532,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1534,
      "end": 1555,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1538,
          "end": 1554,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1538,
            "end": 1542,
            "decorators": [],
            "name": "r7a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1545,
            "end": 1554,
            "operator": "===",
            "left": {
              "type": "Identifier",
              "start": 1545,
              "end": 1547,
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1552,
              "end": 1554,
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1556,
      "end": 1577,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1560,
          "end": 1576,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1560,
            "end": 1564,
            "decorators": [],
            "name": "r7a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1567,
            "end": 1576,
            "operator": "===",
            "left": {
              "type": "Identifier",
              "start": 1567,
              "end": 1569,
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1574,
              "end": 1576,
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1579,
      "end": 1600,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1583,
          "end": 1599,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1583,
            "end": 1587,
            "decorators": [],
            "name": "r7b1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1590,
            "end": 1599,
            "operator": "===",
            "left": {
              "type": "Identifier",
              "start": 1590,
              "end": 1592,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1597,
              "end": 1599,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1601,
      "end": 1622,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1605,
          "end": 1621,
          "definite": false,
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
            "operator": "===",
            "left": {
              "type": "Identifier",
              "start": 1612,
              "end": 1614,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1619,
              "end": 1621,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1623,
      "end": 1644,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1627,
          "end": 1643,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1627,
            "end": 1631,
            "decorators": [],
            "name": "r7b1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1634,
            "end": 1643,
            "operator": "===",
            "left": {
              "type": "Identifier",
              "start": 1634,
              "end": 1636,
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1641,
              "end": 1643,
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1645,
      "end": 1666,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1649,
          "end": 1665,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1649,
            "end": 1653,
            "decorators": [],
            "name": "r7b1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1656,
            "end": 1665,
            "operator": "===",
            "left": {
              "type": "Identifier",
              "start": 1656,
              "end": 1658,
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1663,
              "end": 1665,
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1684,
      "end": 1705,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1688,
          "end": 1704,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1688,
            "end": 1692,
            "decorators": [],
            "name": "r8a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1695,
            "end": 1704,
            "operator": "!==",
            "left": {
              "type": "Identifier",
              "start": 1695,
              "end": 1697,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1702,
              "end": 1704,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1706,
      "end": 1727,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1710,
          "end": 1726,
          "definite": false,
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
            "operator": "!==",
            "left": {
              "type": "Identifier",
              "start": 1717,
              "end": 1719,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1724,
              "end": 1726,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1728,
      "end": 1749,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1732,
          "end": 1748,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1732,
            "end": 1736,
            "decorators": [],
            "name": "r8a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1739,
            "end": 1748,
            "operator": "!==",
            "left": {
              "type": "Identifier",
              "start": 1739,
              "end": 1741,
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1746,
              "end": 1748,
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1750,
      "end": 1771,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1754,
          "end": 1770,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1754,
            "end": 1758,
            "decorators": [],
            "name": "r8a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1761,
            "end": 1770,
            "operator": "!==",
            "left": {
              "type": "Identifier",
              "start": 1761,
              "end": 1763,
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1768,
              "end": 1770,
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1773,
      "end": 1794,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1777,
          "end": 1793,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1777,
            "end": 1781,
            "decorators": [],
            "name": "r8b1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1784,
            "end": 1793,
            "operator": "!==",
            "left": {
              "type": "Identifier",
              "start": 1784,
              "end": 1786,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1791,
              "end": 1793,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1795,
      "end": 1816,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1799,
          "end": 1815,
          "definite": false,
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
            "operator": "!==",
            "left": {
              "type": "Identifier",
              "start": 1806,
              "end": 1808,
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1813,
              "end": 1815,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1817,
      "end": 1838,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1821,
          "end": 1837,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1821,
            "end": 1825,
            "decorators": [],
            "name": "r8b1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1828,
            "end": 1837,
            "operator": "!==",
            "left": {
              "type": "Identifier",
              "start": 1828,
              "end": 1830,
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1835,
              "end": 1837,
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1839,
      "end": 1860,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1843,
          "end": 1859,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1843,
            "end": 1847,
            "decorators": [],
            "name": "r8b1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 1850,
            "end": 1859,
            "operator": "!==",
            "left": {
              "type": "Identifier",
              "start": 1850,
              "end": 1852,
              "decorators": [],
              "name": "b4",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1857,
              "end": 1859,
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
