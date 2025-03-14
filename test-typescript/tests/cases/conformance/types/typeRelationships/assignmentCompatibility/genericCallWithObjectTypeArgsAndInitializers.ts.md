genericCallWithObjectTypeArgsAndInitializers.ts
```json
{
  "type": "Program",
  "start": 47,
  "end": 477,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 47,
      "end": 89,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 76,
        "end": 89,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 78,
            "end": 87,
            "argument": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 59,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 63,
          "end": 74,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 63,
            "end": 67,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 67,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 66,
                "end": 67,
                "typeName": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 67,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 70,
            "end": 74,
            "raw": "null",
            "value": null
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 59,
        "end": 62,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 60,
            "end": 61,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
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
      "type": "FunctionDeclaration",
      "start": 96,
      "end": 144,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 131,
        "end": 144,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 133,
            "end": 142,
            "argument": {
              "type": "Identifier",
              "start": 140,
              "end": 141,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 105,
        "end": 109,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 113,
          "end": 129,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 113,
            "end": 117,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 114,
              "end": 117,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 116,
                "end": 117,
                "typeName": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 117,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Identifier",
            "start": 120,
            "end": 129,
            "decorators": [],
            "name": "undefined",
            "optional": false
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 109,
        "end": 112,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 110,
            "end": 111,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
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
      "type": "FunctionDeclaration",
      "start": 151,
      "end": 196,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 193,
        "end": 196,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 160,
        "end": 164,
        "decorators": [],
        "name": "foo3",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 183,
          "end": 191,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 183,
            "end": 187,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 184,
              "end": 187,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 186,
                "end": 187,
                "typeName": {
                  "type": "Identifier",
                  "start": 186,
                  "end": 187,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 190,
            "end": 191,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 164,
        "end": 182,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 165,
            "end": 181,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 175,
              "end": 181,
              "typeName": {
                "type": "Identifier",
                "start": 175,
                "end": 181,
                "decorators": [],
                "name": "Number",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 165,
              "end": 166,
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
      "type": "FunctionDeclaration",
      "start": 206,
      "end": 255,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 252,
        "end": 255,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 215,
        "end": 219,
        "decorators": [],
        "name": "foo4",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 236,
          "end": 240,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 237,
            "end": 240,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 239,
              "end": 240,
              "typeName": {
                "type": "Identifier",
                "start": 239,
                "end": 240,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "AssignmentPattern",
          "start": 242,
          "end": 250,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 242,
            "end": 246,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 243,
              "end": 246,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 245,
                "end": 246,
                "typeName": {
                  "type": "Identifier",
                  "start": 245,
                  "end": 246,
                  "decorators": [],
                  "name": "U",
                  "optional": false
                }
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Identifier",
            "start": 249,
            "end": 250,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 219,
        "end": 235,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 220,
            "end": 221,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 220,
              "end": 221,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 223,
            "end": 234,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 233,
              "end": 234,
              "typeName": {
                "type": "Identifier",
                "start": 233,
                "end": 234,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 223,
              "end": 224,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 265,
      "end": 314,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 311,
        "end": 314,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 274,
        "end": 278,
        "decorators": [],
        "name": "foo5",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 295,
          "end": 299,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 296,
            "end": 299,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 298,
              "end": 299,
              "typeName": {
                "type": "Identifier",
                "start": 298,
                "end": 299,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          }
        },
        {
          "type": "AssignmentPattern",
          "start": 301,
          "end": 309,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 301,
            "end": 305,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 302,
              "end": 305,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 304,
                "end": 305,
                "typeName": {
                  "type": "Identifier",
                  "start": 304,
                  "end": 305,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Identifier",
            "start": 308,
            "end": 309,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 278,
        "end": 294,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 279,
            "end": 280,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 279,
              "end": 280,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 282,
            "end": 293,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 292,
              "end": 293,
              "typeName": {
                "type": "Identifier",
                "start": 292,
                "end": 293,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 282,
              "end": 283,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 321,
      "end": 389,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 386,
        "end": 389,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 330,
        "end": 334,
        "decorators": [],
        "name": "foo6",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 364,
          "end": 368,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 365,
            "end": 368,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 367,
              "end": 368,
              "typeName": {
                "type": "Identifier",
                "start": 367,
                "end": 368,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 370,
          "end": 374,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 371,
            "end": 374,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 373,
              "end": 374,
              "typeName": {
                "type": "Identifier",
                "start": 373,
                "end": 374,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          }
        },
        {
          "type": "AssignmentPattern",
          "start": 376,
          "end": 384,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 376,
            "end": 380,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 377,
              "end": 380,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 379,
                "end": 380,
                "typeName": {
                  "type": "Identifier",
                  "start": 379,
                  "end": 380,
                  "decorators": [],
                  "name": "V",
                  "optional": false
                }
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Identifier",
            "start": 383,
            "end": 384,
            "decorators": [],
            "name": "y",
            "optional": false
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 334,
        "end": 363,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 335,
            "end": 336,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 335,
              "end": 336,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 338,
            "end": 349,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 348,
              "end": 349,
              "typeName": {
                "type": "Identifier",
                "start": 348,
                "end": 349,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 338,
              "end": 339,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 351,
            "end": 362,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 361,
              "end": 362,
              "typeName": {
                "type": "Identifier",
                "start": 361,
                "end": 362,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 351,
              "end": 352,
              "decorators": [],
              "name": "V",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 399,
      "end": 461,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 458,
        "end": 461,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 408,
        "end": 412,
        "decorators": [],
        "name": "foo7",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 442,
          "end": 446,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 443,
            "end": 446,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 445,
              "end": 446,
              "typeName": {
                "type": "Identifier",
                "start": 445,
                "end": 446,
                "decorators": [],
                "name": "V",
                "optional": false
              }
            }
          }
        },
        {
          "type": "AssignmentPattern",
          "start": 448,
          "end": 456,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 448,
            "end": 452,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 449,
              "end": 452,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 451,
                "end": 452,
                "typeName": {
                  "type": "Identifier",
                  "start": 451,
                  "end": 452,
                  "decorators": [],
                  "name": "U",
                  "optional": false
                }
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Identifier",
            "start": 455,
            "end": 456,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 412,
        "end": 441,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 413,
            "end": 414,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 413,
              "end": 414,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 416,
            "end": 427,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 426,
              "end": 427,
              "typeName": {
                "type": "Identifier",
                "start": 426,
                "end": 427,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 416,
              "end": 417,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 429,
            "end": 440,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 439,
              "end": 440,
              "typeName": {
                "type": "Identifier",
                "start": 439,
                "end": 440,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 429,
              "end": 430,
              "decorators": [],
              "name": "V",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
