__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 773,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 36,
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
        "end": 36,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 16,
            "end": 34,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 17,
                "end": 27,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 20,
                  "end": 27,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 21,
                    "end": 27
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 33,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 29,
                "end": 33
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 38,
      "end": 85,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 49,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 58,
          "end": 59,
          "expression": {
            "type": "Identifier",
            "start": 58,
            "end": 59,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 60,
        "end": 85,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 64,
            "end": 83,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 65,
                "end": 74,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 68,
                  "end": 74,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 69,
                    "end": 74,
                    "literal": {
                      "type": "Literal",
                      "start": 69,
                      "end": 74,
                      "value": "foo",
                      "raw": "'foo'"
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 75,
              "end": 82,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 76,
                "end": 82
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 87,
      "end": 95,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 91,
          "end": 94,
          "id": {
            "type": "Identifier",
            "start": 91,
            "end": 94,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 92,
              "end": 94,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 93,
                "end": 94,
                "typeName": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 94,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "type": "ExpressionStatement",
      "start": 116,
      "end": 135,
      "expression": {
        "type": "CallExpression",
        "start": 116,
        "end": 134,
        "callee": {
          "type": "MemberExpression",
          "start": 116,
          "end": 131,
          "object": {
            "type": "CallExpression",
            "start": 116,
            "end": 124,
            "callee": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 118,
                "end": 123,
                "value": "foo",
                "raw": "'foo'"
              }
            ],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 125,
            "end": 131,
            "decorators": [],
            "name": "charAt",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 132,
            "end": 133,
            "value": 0,
            "raw": "0"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 137,
      "end": 198,
      "id": {
        "type": "Identifier",
        "start": 147,
        "end": 148,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 149,
        "end": 198,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 155,
            "end": 173,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 156,
                "end": 163,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 157,
                  "end": 163,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 159,
                    "end": 163,
                    "literal": {
                      "type": "Literal",
                      "start": 159,
                      "end": 163,
                      "value": "A1",
                      "raw": "'A1'"
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 164,
              "end": 172,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 166,
                "end": 172
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 178,
            "end": 196,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 179,
                "end": 188,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 180,
                  "end": 188,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 182,
                    "end": 188
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 189,
              "end": 195,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 191,
                "end": 195
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 200,
      "end": 248,
      "id": {
        "type": "Identifier",
        "start": 210,
        "end": 211,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 220,
          "end": 221,
          "expression": {
            "type": "Identifier",
            "start": 220,
            "end": 221,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 222,
        "end": 248,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 228,
            "end": 246,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 229,
                "end": 236,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 230,
                  "end": 236,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 232,
                    "end": 236,
                    "literal": {
                      "type": "Literal",
                      "start": 232,
                      "end": 236,
                      "value": "B1",
                      "raw": "'B1'"
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 237,
              "end": 245,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 239,
                "end": 245
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 250,
      "end": 289,
      "id": {
        "type": "Identifier",
        "start": 260,
        "end": 261,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 262,
        "end": 289,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 268,
            "end": 287,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 269,
                "end": 276,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 270,
                  "end": 276,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 272,
                    "end": 276,
                    "literal": {
                      "type": "Literal",
                      "start": 272,
                      "end": 276,
                      "value": "A2",
                      "raw": "'A2'"
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 277,
              "end": 286,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 279,
                "end": 286
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 291,
      "end": 332,
      "id": {
        "type": "Identifier",
        "start": 301,
        "end": 302,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 304,
        "end": 332,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 310,
            "end": 330,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 311,
                "end": 318,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 312,
                  "end": 318,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 314,
                    "end": 318,
                    "literal": {
                      "type": "Literal",
                      "start": 314,
                      "end": 318,
                      "value": "B2",
                      "raw": "'B2'"
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 319,
              "end": 329,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 321,
                "end": 329,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 321,
                  "end": 327
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
      "start": 334,
      "end": 382,
      "id": {
        "type": "Identifier",
        "start": 344,
        "end": 346,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 355,
          "end": 356,
          "expression": {
            "type": "Identifier",
            "start": 355,
            "end": 356,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 357,
        "end": 382,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 360,
            "end": 380,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 361,
                "end": 368,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 362,
                  "end": 368,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 364,
                    "end": 368,
                    "literal": {
                      "type": "Literal",
                      "start": 364,
                      "end": 368,
                      "value": "C1",
                      "raw": "'C1'"
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 369,
              "end": 379,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 371,
                "end": 379,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 371,
                  "end": 377
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
      "start": 384,
      "end": 433,
      "id": {
        "type": "Identifier",
        "start": 394,
        "end": 396,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 405,
          "end": 406,
          "expression": {
            "type": "Identifier",
            "start": 405,
            "end": 406,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 407,
        "end": 433,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 410,
            "end": 431,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 411,
                "end": 418,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 412,
                  "end": 418,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 414,
                    "end": 418,
                    "literal": {
                      "type": "Literal",
                      "start": 414,
                      "end": 418,
                      "value": "C2",
                      "raw": "'C2'"
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 419,
              "end": 430,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 421,
                "end": 430,
                "elementType": {
                  "type": "TSBooleanKeyword",
                  "start": 421,
                  "end": 428
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
      "start": 435,
      "end": 484,
      "id": {
        "type": "Identifier",
        "start": 445,
        "end": 446,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 455,
          "end": 457,
          "expression": {
            "type": "Identifier",
            "start": 455,
            "end": 457,
            "decorators": [],
            "name": "C1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 459,
          "end": 461,
          "expression": {
            "type": "Identifier",
            "start": 459,
            "end": 461,
            "decorators": [],
            "name": "C2",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 462,
        "end": 484,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 465,
            "end": 482,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 466,
                "end": 472,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 467,
                  "end": 472,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 469,
                    "end": 472,
                    "literal": {
                      "type": "Literal",
                      "start": 469,
                      "end": 472,
                      "value": "C",
                      "raw": "'C'"
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 473,
              "end": 481,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 475,
                "end": 481
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 486,
      "end": 495,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 490,
          "end": 494,
          "id": {
            "type": "Identifier",
            "start": 490,
            "end": 494,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 491,
              "end": 494,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 493,
                "end": 494,
                "typeName": {
                  "type": "Identifier",
                  "start": 493,
                  "end": 494,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "start": 532,
      "end": 559,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 536,
          "end": 558,
          "id": {
            "type": "Identifier",
            "start": 536,
            "end": 548,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 538,
              "end": 548,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 540,
                "end": 548,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 540,
                  "end": 546
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 551,
            "end": 558,
            "callee": {
              "type": "Identifier",
              "start": 551,
              "end": 552,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 553,
                "end": 557,
                "value": "B2",
                "raw": "'B2'"
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
      "start": 560,
      "end": 585,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 564,
          "end": 584,
          "id": {
            "type": "Identifier",
            "start": 564,
            "end": 574,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 566,
              "end": 574,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 568,
                "end": 574
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 577,
            "end": 584,
            "callee": {
              "type": "Identifier",
              "start": 577,
              "end": 578,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 579,
                "end": 583,
                "value": "B1",
                "raw": "'B1'"
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
      "start": 586,
      "end": 612,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 590,
          "end": 611,
          "id": {
            "type": "Identifier",
            "start": 590,
            "end": 601,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 592,
              "end": 601,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 594,
                "end": 601
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 604,
            "end": 611,
            "callee": {
              "type": "Identifier",
              "start": 604,
              "end": 605,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 606,
                "end": 610,
                "value": "A2",
                "raw": "'A2'"
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
      "start": 613,
      "end": 638,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 617,
          "end": 637,
          "id": {
            "type": "Identifier",
            "start": 617,
            "end": 627,
            "decorators": [],
            "name": "x4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 619,
              "end": 627,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 621,
                "end": 627
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 630,
            "end": 637,
            "callee": {
              "type": "Identifier",
              "start": 630,
              "end": 631,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 632,
                "end": 636,
                "value": "A1",
                "raw": "'A1'"
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
      "start": 639,
      "end": 662,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 643,
          "end": 661,
          "id": {
            "type": "Identifier",
            "start": 643,
            "end": 651,
            "decorators": [],
            "name": "x5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 645,
              "end": 651,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 647,
                "end": 651
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 654,
            "end": 661,
            "callee": {
              "type": "Identifier",
              "start": 654,
              "end": 655,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 656,
                "end": 660,
                "value": "A0",
                "raw": "'A0'"
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
      "start": 663,
      "end": 690,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 667,
          "end": 689,
          "id": {
            "type": "Identifier",
            "start": 667,
            "end": 679,
            "decorators": [],
            "name": "x6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 669,
              "end": 679,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 671,
                "end": 679,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 671,
                  "end": 677
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 682,
            "end": 689,
            "callee": {
              "type": "Identifier",
              "start": 682,
              "end": 683,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 684,
                "end": 688,
                "value": "C1",
                "raw": "'C1'"
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
      "start": 691,
      "end": 719,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 695,
          "end": 718,
          "id": {
            "type": "Identifier",
            "start": 695,
            "end": 708,
            "decorators": [],
            "name": "x7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 697,
              "end": 708,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 699,
                "end": 708,
                "elementType": {
                  "type": "TSBooleanKeyword",
                  "start": 699,
                  "end": 706
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 711,
            "end": 718,
            "callee": {
              "type": "Identifier",
              "start": 711,
              "end": 712,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 713,
                "end": 717,
                "value": "C2",
                "raw": "'C2'"
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
      "start": 720,
      "end": 744,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 724,
          "end": 743,
          "id": {
            "type": "Identifier",
            "start": 724,
            "end": 734,
            "decorators": [],
            "name": "x8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 726,
              "end": 734,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 728,
                "end": 734
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 737,
            "end": 743,
            "callee": {
              "type": "Identifier",
              "start": 737,
              "end": 738,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 739,
                "end": 742,
                "value": "C",
                "raw": "'C'"
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
      "start": 745,
      "end": 773,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 749,
          "end": 772,
          "id": {
            "type": "Identifier",
            "start": 749,
            "end": 757,
            "decorators": [],
            "name": "x9",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 751,
              "end": 757,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 753,
                "end": 757
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 760,
            "end": 772,
            "callee": {
              "type": "Identifier",
              "start": 760,
              "end": 761,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 762,
                "end": 771,
                "value": "generic",
                "raw": "'generic'"
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
