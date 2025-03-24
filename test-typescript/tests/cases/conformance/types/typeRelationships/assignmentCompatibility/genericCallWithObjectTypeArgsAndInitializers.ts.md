__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 59,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 63,
          "end": 74,
          "left": {
            "type": "Identifier",
            "start": 63,
            "end": 67,
            "name": "x",
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
          "right": {
            "type": "Literal",
            "start": 70,
            "end": 74,
            "value": null,
            "raw": "null"
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
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
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 59,
        "end": 62,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 60,
            "end": 61,
            "name": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 96,
      "end": 144,
      "id": {
        "type": "Identifier",
        "start": 105,
        "end": 109,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 113,
          "end": 129,
          "left": {
            "type": "Identifier",
            "start": 113,
            "end": 117,
            "name": "x",
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
          "right": {
            "type": "Identifier",
            "start": 120,
            "end": 129,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
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
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 109,
        "end": 112,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 110,
            "end": 111,
            "name": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 151,
      "end": 196,
      "id": {
        "type": "Identifier",
        "start": 160,
        "end": 164,
        "name": "foo3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 183,
          "end": 191,
          "left": {
            "type": "Identifier",
            "start": 183,
            "end": 187,
            "name": "x",
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
          "right": {
            "type": "Literal",
            "start": 190,
            "end": 191,
            "value": 1,
            "raw": "1"
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 193,
        "end": 196,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 164,
        "end": 182,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 165,
            "end": 181,
            "name": {
              "type": "Identifier",
              "start": 165,
              "end": 166,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 175,
              "end": 181,
              "typeName": {
                "type": "Identifier",
                "start": 175,
                "end": 181,
                "name": "Number",
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 206,
      "end": 255,
      "id": {
        "type": "Identifier",
        "start": 215,
        "end": 219,
        "name": "foo4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 236,
          "end": 240,
          "name": "x",
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
          "type": "AssignmentPattern",
          "start": 242,
          "end": 250,
          "left": {
            "type": "Identifier",
            "start": 242,
            "end": 246,
            "name": "y",
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
          },
          "right": {
            "type": "Identifier",
            "start": 249,
            "end": 250,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 252,
        "end": 255,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 219,
        "end": 235,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 220,
            "end": 221,
            "name": {
              "type": "Identifier",
              "start": 220,
              "end": 221,
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
            "start": 223,
            "end": 234,
            "name": {
              "type": "Identifier",
              "start": 223,
              "end": 224,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 233,
              "end": 234,
              "typeName": {
                "type": "Identifier",
                "start": 233,
                "end": 234,
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 265,
      "end": 314,
      "id": {
        "type": "Identifier",
        "start": 274,
        "end": 278,
        "name": "foo5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 295,
          "end": 299,
          "name": "x",
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
        },
        {
          "type": "AssignmentPattern",
          "start": 301,
          "end": 309,
          "left": {
            "type": "Identifier",
            "start": 301,
            "end": 305,
            "name": "y",
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
          "right": {
            "type": "Identifier",
            "start": 308,
            "end": 309,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 311,
        "end": 314,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 278,
        "end": 294,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 279,
            "end": 280,
            "name": {
              "type": "Identifier",
              "start": 279,
              "end": 280,
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
            "start": 282,
            "end": 293,
            "name": {
              "type": "Identifier",
              "start": 282,
              "end": 283,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 292,
              "end": 293,
              "typeName": {
                "type": "Identifier",
                "start": 292,
                "end": 293,
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 321,
      "end": 389,
      "id": {
        "type": "Identifier",
        "start": 330,
        "end": 334,
        "name": "foo6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 364,
          "end": 368,
          "name": "x",
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
          "start": 370,
          "end": 374,
          "name": "y",
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
        },
        {
          "type": "AssignmentPattern",
          "start": 376,
          "end": 384,
          "left": {
            "type": "Identifier",
            "start": 376,
            "end": 380,
            "name": "z",
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
                  "name": "V",
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
          "right": {
            "type": "Identifier",
            "start": 383,
            "end": 384,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 386,
        "end": 389,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 334,
        "end": 363,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 335,
            "end": 336,
            "name": {
              "type": "Identifier",
              "start": 335,
              "end": 336,
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
            "start": 338,
            "end": 349,
            "name": {
              "type": "Identifier",
              "start": 338,
              "end": 339,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
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
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 351,
            "end": 362,
            "name": {
              "type": "Identifier",
              "start": 351,
              "end": 352,
              "name": "V",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 361,
              "end": 362,
              "typeName": {
                "type": "Identifier",
                "start": 361,
                "end": 362,
                "name": "U",
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 399,
      "end": 461,
      "id": {
        "type": "Identifier",
        "start": 408,
        "end": 412,
        "name": "foo7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 442,
          "end": 446,
          "name": "x",
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
                "name": "V",
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
          "type": "AssignmentPattern",
          "start": 448,
          "end": 456,
          "left": {
            "type": "Identifier",
            "start": 448,
            "end": 452,
            "name": "y",
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
          },
          "right": {
            "type": "Identifier",
            "start": 455,
            "end": 456,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 458,
        "end": 461,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 412,
        "end": 441,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 413,
            "end": 414,
            "name": {
              "type": "Identifier",
              "start": 413,
              "end": 414,
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
            "start": 416,
            "end": 427,
            "name": {
              "type": "Identifier",
              "start": 416,
              "end": 417,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 426,
              "end": 427,
              "typeName": {
                "type": "Identifier",
                "start": 426,
                "end": 427,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 429,
            "end": 440,
            "name": {
              "type": "Identifier",
              "start": 429,
              "end": 430,
              "name": "V",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 439,
              "end": 440,
              "typeName": {
                "type": "Identifier",
                "start": 439,
                "end": 440,
                "name": "U",
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
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
