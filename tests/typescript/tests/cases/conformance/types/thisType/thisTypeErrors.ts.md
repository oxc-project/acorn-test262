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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 12,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 14,
      "end": 34,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 33,
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
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
                      "end": 31,
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 27,
                        "end": 31
                      }
                    },
                    "accessibility": null,
                    "static": false
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
      "start": 35,
      "end": 50,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 39,
          "end": 49,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 52,
      "end": 116,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 63,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
      "body": {
        "type": "BlockStatement",
        "start": 79,
        "end": 116,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 85,
            "end": 97,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 89,
                "end": 96,
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
                "init": null,
                "definite": false
              }
            ],
            "declare": false
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
      "expression": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 118,
      "end": 259,
      "id": {
        "type": "Identifier",
        "start": 128,
        "end": 130,
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 131,
        "end": 259,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 137,
            "end": 152,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 137,
              "end": 138,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 142,
                      "end": 143,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 143,
                      "end": 149,
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 145,
                        "end": 149
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 157,
            "end": 173,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 157,
              "end": 158,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
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
                    "typeParameters": null,
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
                    }
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 178,
            "end": 198,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 178,
              "end": 179,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
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
                    "typeParameters": null,
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
                    }
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 203,
            "end": 228,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 203,
              "end": 204,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
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
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 219,
                      "end": 225,
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 221,
                        "end": 225
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 233,
            "end": 257,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 233,
              "end": 234,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
            },
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
                    "key": {
                      "type": "Identifier",
                      "start": 238,
                      "end": 239,
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
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
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
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
      "start": 261,
      "end": 398,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 270,
        "end": 398,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 276,
            "end": 291,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 276,
              "end": 277,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 281,
                      "end": 282,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 282,
                      "end": 288,
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 284,
                        "end": 288
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 296,
            "end": 312,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 296,
              "end": 297,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
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
                    "typeParameters": null,
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
                    }
                  }
                ]
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 317,
            "end": 337,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 317,
              "end": 318,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
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
                    "typeParameters": null,
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
                    }
                  }
                ]
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 342,
            "end": 367,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 342,
              "end": 343,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
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
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 358,
                      "end": 364,
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 360,
                        "end": 364
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 372,
            "end": 396,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 372,
              "end": 373,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
            },
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
                    "key": {
                      "type": "Identifier",
                      "start": 377,
                      "end": 378,
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
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
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
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
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 400,
      "end": 528,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 409,
        "end": 528,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 415,
            "end": 430,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 422,
              "end": 423,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 435,
            "end": 462,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 442,
              "end": 443,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "TSTypeAssertion",
              "start": 446,
              "end": 461,
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 447,
                "end": 451
              },
              "expression": {
                "type": "Identifier",
                "start": 452,
                "end": 461,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 467,
            "end": 526,
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
            "value": {
              "type": "FunctionExpression",
              "start": 477,
              "end": 526,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 530,
      "end": 595,
      "id": {
        "type": "Identifier",
        "start": 540,
        "end": 542,
        "decorators": [],
        "name": "N1",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 543,
        "end": 595,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 549,
            "end": 568,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 556,
              "end": 568,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 560,
                  "end": 567,
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
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 573,
            "end": 593,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 580,
              "end": 593,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 584,
                  "end": 592,
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
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "ClassDeclaration",
      "start": 597,
      "end": 893,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 606,
        "end": 893,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 612,
            "end": 691,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 612,
              "end": 614,
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 627,
                    "end": 628,
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 628,
                    "end": 685,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
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
                    "expression": false
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 696,
            "end": 891,
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
            "value": {
              "type": "FunctionExpression",
              "start": 697,
              "end": 891,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 700,
                "end": 891,
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "start": 710,
                    "end": 777,
                    "id": {
                      "type": "Identifier",
                      "start": 719,
                      "end": 720,
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
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
                    "expression": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 786,
                    "end": 885,
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 790,
                        "end": 885,
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
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 809,
                                "end": 810,
                                "decorators": [],
                                "name": "h",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "FunctionExpression",
                                "start": 810,
                                "end": 875,
                                "id": null,
                                "generator": false,
                                "async": false,
                                "declare": false,
                                "typeParameters": null,
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
                                "expression": false
                              },
                              "method": true,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            }
                          ]
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
