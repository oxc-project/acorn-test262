__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 826,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 121,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 121,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 18,
            "end": 38,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 19,
                "end": 28,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 20,
                  "end": 28,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 22,
                    "end": 28
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 37,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 31,
                "end": 37
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 43,
            "end": 76,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 44,
                "end": 53,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 45,
                  "end": 53,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 47,
                    "end": 53
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 55,
                "end": 65,
                "decorators": [],
                "name": "y",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 57,
                  "end": 65,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 59,
                    "end": 65
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 66,
              "end": 75,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 68,
                "end": 75
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 81,
            "end": 97,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 82,
                "end": 89,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 83,
                  "end": 89,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 85,
                    "end": 89,
                    "typeName": {
                      "type": "Identifier",
                      "start": 85,
                      "end": 89,
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 96,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 92,
                "end": 96
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 102,
            "end": 119,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 102,
              "end": 105,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 103,
                  "end": 104,
                  "name": {
                    "type": "Identifier",
                    "start": 103,
                    "end": 104,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
                "start": 106,
                "end": 112,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 107,
                  "end": 112,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 109,
                    "end": 112,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 109,
                      "end": 110,
                      "typeName": {
                        "type": "Identifier",
                        "start": 109,
                        "end": 110,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 113,
              "end": 118,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 115,
                "end": 118,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 115,
                  "end": 116,
                  "typeName": {
                    "type": "Identifier",
                    "start": 115,
                    "end": 116,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 123,
      "end": 231,
      "id": {
        "type": "Identifier",
        "start": 133,
        "end": 134,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 135,
        "end": 231,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 141,
            "end": 161,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 142,
                "end": 151,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 143,
                  "end": 151,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 145,
                    "end": 151
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 152,
              "end": 160,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 154,
                "end": 160
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 166,
            "end": 186,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 167,
                "end": 176,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 168,
                  "end": 176,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 170,
                    "end": 176
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 177,
              "end": 185,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 179,
                "end": 185
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 191,
            "end": 207,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 192,
                "end": 199,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 193,
                  "end": 199,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 195,
                    "end": 199,
                    "typeName": {
                      "type": "Identifier",
                      "start": 195,
                      "end": 199,
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 200,
              "end": 206,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 202,
                "end": 206
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 212,
            "end": 229,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 212,
              "end": 215,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 213,
                  "end": 214,
                  "name": {
                    "type": "Identifier",
                    "start": 213,
                    "end": 214,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
                "start": 216,
                "end": 222,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 217,
                  "end": 222,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 219,
                    "end": 222,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 219,
                      "end": 220,
                      "typeName": {
                        "type": "Identifier",
                        "start": 219,
                        "end": 220,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 223,
              "end": 228,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 225,
                "end": 228,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 225,
                  "end": 226,
                  "typeName": {
                    "type": "Identifier",
                    "start": 225,
                    "end": 226,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 233,
      "end": 348,
      "id": {
        "type": "Identifier",
        "start": 243,
        "end": 244,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 245,
        "end": 348,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 251,
            "end": 287,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 252,
                "end": 261,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 253,
                  "end": 261,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 255,
                    "end": 261
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 263,
                "end": 277,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 266,
                  "end": 267,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 267,
                  "end": 277,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 269,
                    "end": 277,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 269,
                      "end": 275
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 278,
              "end": 286,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 280,
                "end": 286
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 292,
            "end": 324,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 293,
                "end": 302,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 294,
                  "end": 302,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 296,
                    "end": 302
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 304,
                "end": 314,
                "decorators": [],
                "name": "s",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 306,
                  "end": 314,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 308,
                    "end": 314
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 315,
              "end": 323,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 317,
                "end": 323
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 329,
            "end": 346,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 329,
              "end": 332,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 330,
                  "end": 331,
                  "name": {
                    "type": "Identifier",
                    "start": 330,
                    "end": 331,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
                "start": 333,
                "end": 339,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 334,
                  "end": 339,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 336,
                    "end": 339,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 336,
                      "end": 337,
                      "typeName": {
                        "type": "Identifier",
                        "start": 336,
                        "end": 337,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 340,
              "end": 345,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 342,
                "end": 345,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 342,
                  "end": 343,
                  "typeName": {
                    "type": "Identifier",
                    "start": 342,
                    "end": 343,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 350,
      "end": 368,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 354,
          "end": 367,
          "id": {
            "type": "Identifier",
            "start": 354,
            "end": 367,
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 356,
              "end": 367,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 358,
                "end": 367,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 358,
                    "end": 359,
                    "typeName": {
                      "type": "Identifier",
                      "start": 358,
                      "end": 359,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 362,
                    "end": 363,
                    "typeName": {
                      "type": "Identifier",
                      "start": 362,
                      "end": 363,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 366,
                    "end": 367,
                    "typeName": {
                      "type": "Identifier",
                      "start": 366,
                      "end": 367,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
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
      "start": 369,
      "end": 385,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 373,
          "end": 384,
          "id": {
            "type": "Identifier",
            "start": 373,
            "end": 375,
            "decorators": [],
            "name": "n1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 378,
            "end": 384,
            "callee": {
              "type": "Identifier",
              "start": 378,
              "end": 380,
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 381,
                "end": 383,
                "value": 42,
                "raw": "42"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 408,
      "end": 427,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 412,
          "end": 426,
          "id": {
            "type": "Identifier",
            "start": 412,
            "end": 414,
            "decorators": [],
            "name": "s1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 417,
            "end": 426,
            "callee": {
              "type": "Identifier",
              "start": 417,
              "end": 419,
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 420,
                "end": 425,
                "value": "abc",
                "raw": "\"abc\""
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 466,
      "end": 493,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 470,
          "end": 492,
          "id": {
            "type": "Identifier",
            "start": 470,
            "end": 472,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 475,
            "end": 492,
            "callee": {
              "type": "Identifier",
              "start": 475,
              "end": 477,
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 478,
                "end": 491,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 479,
                    "end": 483,
                    "value": true,
                    "raw": "true"
                  },
                  {
                    "type": "Literal",
                    "start": 485,
                    "end": 490,
                    "value": false,
                    "raw": "false"
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 509,
      "end": 527,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 513,
          "end": 526,
          "id": {
            "type": "Identifier",
            "start": 513,
            "end": 526,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 515,
              "end": 526,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 517,
                "end": 526,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 517,
                    "end": 518,
                    "typeName": {
                      "type": "Identifier",
                      "start": 517,
                      "end": 518,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 521,
                    "end": 522,
                    "typeName": {
                      "type": "Identifier",
                      "start": 521,
                      "end": 522,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 525,
                    "end": 526,
                    "typeName": {
                      "type": "Identifier",
                      "start": 525,
                      "end": 526,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
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
      "start": 528,
      "end": 544,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 532,
          "end": 543,
          "id": {
            "type": "Identifier",
            "start": 532,
            "end": 534,
            "decorators": [],
            "name": "n2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 537,
            "end": 543,
            "callee": {
              "type": "Identifier",
              "start": 537,
              "end": 539,
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 540,
                "end": 542,
                "value": 42,
                "raw": "42"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 567,
      "end": 586,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 571,
          "end": 585,
          "id": {
            "type": "Identifier",
            "start": 571,
            "end": 573,
            "decorators": [],
            "name": "s2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 576,
            "end": 585,
            "callee": {
              "type": "Identifier",
              "start": 576,
              "end": 578,
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 579,
                "end": 584,
                "value": "abc",
                "raw": "\"abc\""
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 625,
      "end": 652,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 629,
          "end": 651,
          "id": {
            "type": "Identifier",
            "start": 629,
            "end": 631,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 634,
            "end": 651,
            "callee": {
              "type": "Identifier",
              "start": 634,
              "end": 636,
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 637,
                "end": 650,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 638,
                    "end": 642,
                    "value": true,
                    "raw": "true"
                  },
                  {
                    "type": "Literal",
                    "start": 644,
                    "end": 649,
                    "value": false,
                    "raw": "false"
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 668,
      "end": 686,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 672,
          "end": 685,
          "id": {
            "type": "Identifier",
            "start": 672,
            "end": 685,
            "decorators": [],
            "name": "f3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 674,
              "end": 685,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 676,
                "end": 685,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 676,
                    "end": 677,
                    "typeName": {
                      "type": "Identifier",
                      "start": 676,
                      "end": 677,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 680,
                    "end": 681,
                    "typeName": {
                      "type": "Identifier",
                      "start": 680,
                      "end": 681,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 684,
                    "end": 685,
                    "typeName": {
                      "type": "Identifier",
                      "start": 684,
                      "end": 685,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
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
      "start": 687,
      "end": 703,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 691,
          "end": 702,
          "id": {
            "type": "Identifier",
            "start": 691,
            "end": 693,
            "decorators": [],
            "name": "n3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 696,
            "end": 702,
            "callee": {
              "type": "Identifier",
              "start": 696,
              "end": 698,
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 699,
                "end": 701,
                "value": 42,
                "raw": "42"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 726,
      "end": 745,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 730,
          "end": 744,
          "id": {
            "type": "Identifier",
            "start": 730,
            "end": 732,
            "decorators": [],
            "name": "s3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 735,
            "end": 744,
            "callee": {
              "type": "Identifier",
              "start": 735,
              "end": 737,
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 738,
                "end": 743,
                "value": "abc",
                "raw": "\"abc\""
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 784,
      "end": 811,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 788,
          "end": 810,
          "id": {
            "type": "Identifier",
            "start": 788,
            "end": 790,
            "decorators": [],
            "name": "a3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 793,
            "end": 810,
            "callee": {
              "type": "Identifier",
              "start": 793,
              "end": 795,
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 796,
                "end": 809,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 797,
                    "end": 801,
                    "value": true,
                    "raw": "true"
                  },
                  {
                    "type": "Literal",
                    "start": 803,
                    "end": 808,
                    "value": false,
                    "raw": "false"
                  }
                ]
              }
            ],
            "optional": false
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
