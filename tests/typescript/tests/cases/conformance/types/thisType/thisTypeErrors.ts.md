__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 893,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 13,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 12,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 12,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6,
              "end": 12,
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 8,
                "end": 12
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
      "start": 14,
      "end": 34,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 33,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 33,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 33,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 22,
                "end": 33,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 24,
                    "end": 31,
                    "accessibility": null,
                    "computed": false,
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
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 25,
                      "end": 31,
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 27,
                        "end": 31
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
      "start": 35,
      "end": 50,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 39,
          "end": 49,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 39,
            "end": 49,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 49,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 43,
                "end": 49,
                "elementType": {
                  "type": "TSThisType",
                  "start": 43,
                  "end": 47
                }
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
      "type": "FunctionDeclaration",
      "start": 52,
      "end": 116,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 79,
        "end": 116,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 85,
            "end": 97,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 89,
                "end": 96,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 96,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 90,
                    "end": 96,
                    "typeAnnotation": {
                      "type": "TSThisType",
                      "start": 92,
                      "end": 96
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
            "type": "ReturnStatement",
            "start": 102,
            "end": 114,
            "argument": {
              "type": "ThisExpression",
              "start": 109,
              "end": 113
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 63,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 64,
          "end": 71,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 65,
            "end": 71,
            "typeAnnotation": {
              "type": "TSThisType",
              "start": 67,
              "end": 71
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 72,
        "end": 78,
        "typeAnnotation": {
          "type": "TSThisType",
          "start": 74,
          "end": 78
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 118,
      "end": 259,
      "body": {
        "type": "TSInterfaceBody",
        "start": 131,
        "end": 259,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 137,
            "end": 152,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 137,
              "end": 138,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 138,
              "end": 151,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 140,
                "end": 151,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 142,
                    "end": 149,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 142,
                      "end": 143,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 143,
                      "end": 149,
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 145,
                        "end": 149
                      }
                    }
                  }
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 157,
            "end": 173,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 157,
              "end": 158,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 158,
              "end": 172,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 160,
                "end": 172,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 162,
                    "end": 170,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 164,
                      "end": 170,
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 166,
                        "end": 170
                      }
                    },
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 178,
            "end": 198,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 178,
              "end": 179,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 179,
              "end": 197,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 181,
                "end": 197,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 183,
                    "end": 195,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 189,
                      "end": 195,
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 191,
                        "end": 195
                      }
                    },
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 203,
            "end": 228,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 203,
              "end": 204,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 204,
              "end": 227,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 206,
                "end": 227,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 208,
                    "end": 225,
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 209,
                        "end": 218,
                        "decorators": [],
                        "name": "x",
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
                      "end": 225,
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 221,
                        "end": 225
                      }
                    }
                  }
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 233,
            "end": 257,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 233,
              "end": 234,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 234,
              "end": 256,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 236,
                "end": 256,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 238,
                    "end": 254,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 238,
                      "end": 239,
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 240,
                        "end": 247,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 241,
                          "end": 247,
                          "typeAnnotation": {
                            "type": "TSThisType",
                            "start": 243,
                            "end": 247
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 248,
                      "end": 254,
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 250,
                        "end": 254
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 128,
        "end": 130,
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 261,
      "end": 398,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 270,
        "end": 398,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 276,
            "end": 291,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 276,
              "end": 277,
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
              "start": 277,
              "end": 290,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 279,
                "end": 290,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 281,
                    "end": 288,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 281,
                      "end": 282,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 282,
                      "end": 288,
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 284,
                        "end": 288
                      }
                    }
                  }
                ]
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 296,
            "end": 312,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 296,
              "end": 297,
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
              "start": 297,
              "end": 311,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 299,
                "end": 311,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 301,
                    "end": 309,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 303,
                      "end": 309,
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 305,
                        "end": 309
                      }
                    },
                    "typeParameters": null
                  }
                ]
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 317,
            "end": 337,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 317,
              "end": 318,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 318,
              "end": 336,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 320,
                "end": 336,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 322,
                    "end": 334,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 328,
                      "end": 334,
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 330,
                        "end": 334
                      }
                    },
                    "typeParameters": null
                  }
                ]
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 342,
            "end": 367,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 342,
              "end": 343,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 343,
              "end": 366,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 345,
                "end": 366,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 347,
                    "end": 364,
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 348,
                        "end": 357,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 349,
                          "end": 357,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 351,
                            "end": 357
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 358,
                      "end": 364,
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 360,
                        "end": 364
                      }
                    }
                  }
                ]
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 372,
            "end": 396,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 372,
              "end": 373,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 373,
              "end": 395,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 375,
                "end": 395,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 377,
                    "end": 393,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 377,
                      "end": 378,
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 379,
                        "end": 386,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 380,
                          "end": 386,
                          "typeAnnotation": {
                            "type": "TSThisType",
                            "start": 382,
                            "end": 386
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 387,
                      "end": 393,
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 389,
                        "end": 393
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  }
                ]
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
        "start": 267,
        "end": 269,
        "decorators": [],
        "name": "C1",
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
      "start": 400,
      "end": 528,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 409,
        "end": 528,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 415,
            "end": 430,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 422,
              "end": 423,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 423,
              "end": 429,
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 425,
                "end": 429
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 435,
            "end": 462,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 442,
              "end": 443,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "TSTypeAssertion",
              "start": 446,
              "end": 461,
              "expression": {
                "type": "Identifier",
                "start": 452,
                "end": 461,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 447,
                "end": 451
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 467,
            "end": 526,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 474,
              "end": 477,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 477,
              "end": 526,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 493,
                "end": 526,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 503,
                    "end": 520,
                    "argument": {
                      "type": "Identifier",
                      "start": 510,
                      "end": 519,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 478,
                  "end": 485,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 479,
                    "end": 485,
                    "typeAnnotation": {
                      "type": "TSThisType",
                      "start": 481,
                      "end": 485
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 486,
                "end": 492,
                "typeAnnotation": {
                  "type": "TSThisType",
                  "start": 488,
                  "end": 492
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 406,
        "end": 408,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 530,
      "end": 595,
      "body": {
        "type": "TSModuleBlock",
        "start": 543,
        "end": 595,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 549,
            "end": 568,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 556,
              "end": 568,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 560,
                  "end": 567,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 560,
                    "end": 567,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 561,
                      "end": 567,
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 563,
                        "end": 567
                      }
                    }
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 573,
            "end": 593,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 580,
              "end": 593,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 584,
                  "end": 592,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 584,
                    "end": 585,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "ThisExpression",
                    "start": 588,
                    "end": 592
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 540,
        "end": 542,
        "decorators": [],
        "name": "N1",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "ClassDeclaration",
      "start": 597,
      "end": 893,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 606,
        "end": 893,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 612,
            "end": 691,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 612,
              "end": 614,
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "start": 617,
              "end": 691,
              "properties": [
                {
                  "type": "Property",
                  "start": 627,
                  "end": 685,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 627,
                    "end": 628,
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": true,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 628,
                    "end": 685,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 644,
                      "end": 685,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 658,
                          "end": 675,
                          "argument": {
                            "type": "Identifier",
                            "start": 665,
                            "end": 674,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 629,
                        "end": 636,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 630,
                          "end": 636,
                          "typeAnnotation": {
                            "type": "TSThisType",
                            "start": 632,
                            "end": 636
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 637,
                      "end": 643,
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 639,
                        "end": 643
                      }
                    },
                    "typeParameters": null
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 696,
            "end": 891,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 696,
              "end": 697,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 697,
              "end": 891,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 700,
                "end": 891,
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "start": 710,
                    "end": 777,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 736,
                      "end": 777,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 750,
                          "end": 767,
                          "argument": {
                            "type": "Identifier",
                            "start": 757,
                            "end": 766,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": {
                      "type": "Identifier",
                      "start": 719,
                      "end": 720,
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 721,
                        "end": 728,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 722,
                          "end": 728,
                          "typeAnnotation": {
                            "type": "TSThisType",
                            "start": 724,
                            "end": 728
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 729,
                      "end": 735,
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 731,
                        "end": 735
                      }
                    },
                    "typeParameters": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 786,
                    "end": 885,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 790,
                        "end": 885,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 790,
                          "end": 792,
                          "decorators": [],
                          "name": "x2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 795,
                          "end": 885,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 809,
                              "end": 875,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 809,
                                "end": 810,
                                "decorators": [],
                                "name": "h",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "kind": "init",
                              "method": true,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "FunctionExpression",
                                "start": 810,
                                "end": 875,
                                "async": false,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 826,
                                  "end": 875,
                                  "body": [
                                    {
                                      "type": "ReturnStatement",
                                      "start": 844,
                                      "end": 861,
                                      "argument": {
                                        "type": "Identifier",
                                        "start": 851,
                                        "end": 860,
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  ]
                                },
                                "declare": false,
                                "expression": false,
                                "generator": false,
                                "id": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "start": 811,
                                    "end": 818,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 812,
                                      "end": 818,
                                      "typeAnnotation": {
                                        "type": "TSThisType",
                                        "start": 814,
                                        "end": 818
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "start": 819,
                                  "end": 825,
                                  "typeAnnotation": {
                                    "type": "TSThisType",
                                    "start": 821,
                                    "end": 825
                                  }
                                },
                                "typeParameters": null
                              }
                            }
                          ]
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 603,
        "end": 605,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
