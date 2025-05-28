__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 4477,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 53,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 14,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
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
          "start": 15,
          "end": 19,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 16,
            "end": 19,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 18,
              "end": 19,
              "typeName": {
                "type": "Identifier",
                "start": 18,
                "end": 19,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 21,
          "end": 31,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 22,
            "end": 31,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 24,
              "end": 31,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 30,
                "end": 31,
                "typeName": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 31,
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
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 33,
        "end": 53,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 39,
            "end": 51,
            "argument": {
              "type": "MemberExpression",
              "start": 46,
              "end": 50,
              "object": {
                "type": "Identifier",
                "start": 46,
                "end": 47,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 48,
                "end": 49,
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": true
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 55,
      "end": 121,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 66,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 66,
        "end": 88,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 67,
            "end": 68,
            "name": {
              "type": "Identifier",
              "start": 67,
              "end": 68,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 70,
            "end": 87,
            "name": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 80,
              "end": 87,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 86,
                "end": 87,
                "typeName": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 87,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
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
          "start": 89,
          "end": 93,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 90,
            "end": 93,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 92,
              "end": 93,
              "typeName": {
                "type": "Identifier",
                "start": 92,
                "end": 93,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 95,
          "end": 99,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 96,
            "end": 99,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 98,
              "end": 99,
              "typeName": {
                "type": "Identifier",
                "start": 98,
                "end": 99,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 101,
        "end": 121,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 107,
            "end": 119,
            "argument": {
              "type": "MemberExpression",
              "start": 114,
              "end": 118,
              "object": {
                "type": "Identifier",
                "start": 114,
                "end": 115,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 116,
                "end": 117,
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": true
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 123,
      "end": 222,
      "id": {
        "type": "Identifier",
        "start": 132,
        "end": 134,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 134,
        "end": 150,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 135,
            "end": 136,
            "name": {
              "type": "Identifier",
              "start": 135,
              "end": 136,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 138,
            "end": 149,
            "name": {
              "type": "Identifier",
              "start": 138,
              "end": 139,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 148,
              "end": 149,
              "typeName": {
                "type": "Identifier",
                "start": 148,
                "end": 149,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
          "start": 151,
          "end": 155,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 152,
            "end": 155,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 154,
              "end": 155,
              "typeName": {
                "type": "Identifier",
                "start": 154,
                "end": 155,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 157,
          "end": 161,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 158,
            "end": 161,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 160,
              "end": 161,
              "typeName": {
                "type": "Identifier",
                "start": 160,
                "end": 161,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 163,
          "end": 173,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 164,
            "end": 173,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 166,
              "end": 173,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 172,
                "end": 173,
                "typeName": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 173,
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
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 175,
        "end": 222,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 181,
            "end": 193,
            "expression": {
              "type": "AssignmentExpression",
              "start": 181,
              "end": 192,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 181,
                "end": 185,
                "object": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 182,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 183,
                  "end": 184,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              },
              "right": {
                "type": "MemberExpression",
                "start": 188,
                "end": 192,
                "object": {
                  "type": "Identifier",
                  "start": 188,
                  "end": 189,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 190,
                  "end": 191,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 198,
            "end": 210,
            "expression": {
              "type": "AssignmentExpression",
              "start": 198,
              "end": 209,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 198,
                "end": 202,
                "object": {
                  "type": "Identifier",
                  "start": 198,
                  "end": 199,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 200,
                  "end": 201,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              },
              "right": {
                "type": "MemberExpression",
                "start": 205,
                "end": 209,
                "object": {
                  "type": "Identifier",
                  "start": 205,
                  "end": 206,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 208,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 224,
      "end": 336,
      "id": {
        "type": "Identifier",
        "start": 233,
        "end": 235,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 235,
        "end": 270,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 236,
            "end": 237,
            "name": {
              "type": "Identifier",
              "start": 236,
              "end": 237,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 239,
            "end": 250,
            "name": {
              "type": "Identifier",
              "start": 239,
              "end": 240,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 249,
              "end": 250,
              "typeName": {
                "type": "Identifier",
                "start": 249,
                "end": 250,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
            "start": 252,
            "end": 269,
            "name": {
              "type": "Identifier",
              "start": 252,
              "end": 253,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 262,
              "end": 269,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 268,
                "end": 269,
                "typeName": {
                  "type": "Identifier",
                  "start": 268,
                  "end": 269,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
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
          "start": 271,
          "end": 275,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 272,
            "end": 275,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 274,
              "end": 275,
              "typeName": {
                "type": "Identifier",
                "start": 274,
                "end": 275,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 277,
          "end": 281,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
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
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 283,
          "end": 287,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 284,
            "end": 287,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 286,
              "end": 287,
              "typeName": {
                "type": "Identifier",
                "start": 286,
                "end": 287,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 289,
        "end": 336,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 295,
            "end": 307,
            "expression": {
              "type": "AssignmentExpression",
              "start": 295,
              "end": 306,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 295,
                "end": 299,
                "object": {
                  "type": "Identifier",
                  "start": 295,
                  "end": 296,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 297,
                  "end": 298,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              },
              "right": {
                "type": "MemberExpression",
                "start": 302,
                "end": 306,
                "object": {
                  "type": "Identifier",
                  "start": 302,
                  "end": 303,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 304,
                  "end": 305,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 312,
            "end": 324,
            "expression": {
              "type": "AssignmentExpression",
              "start": 312,
              "end": 323,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 312,
                "end": 316,
                "object": {
                  "type": "Identifier",
                  "start": 312,
                  "end": 313,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 314,
                  "end": 315,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              },
              "right": {
                "type": "MemberExpression",
                "start": 319,
                "end": 323,
                "object": {
                  "type": "Identifier",
                  "start": 319,
                  "end": 320,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 321,
                  "end": 322,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 338,
      "end": 447,
      "id": {
        "type": "Identifier",
        "start": 347,
        "end": 349,
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 349,
        "end": 365,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 350,
            "end": 351,
            "name": {
              "type": "Identifier",
              "start": 350,
              "end": 351,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 353,
            "end": 364,
            "name": {
              "type": "Identifier",
              "start": 353,
              "end": 354,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 363,
              "end": 364,
              "typeName": {
                "type": "Identifier",
                "start": 363,
                "end": 364,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
          "start": 366,
          "end": 370,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 367,
            "end": 370,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 369,
              "end": 370,
              "typeName": {
                "type": "Identifier",
                "start": 369,
                "end": 370,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 372,
          "end": 376,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 373,
            "end": 376,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 375,
              "end": 376,
              "typeName": {
                "type": "Identifier",
                "start": 375,
                "end": 376,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 378,
          "end": 388,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 379,
            "end": 388,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 381,
              "end": 388,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 387,
                "end": 388,
                "typeName": {
                  "type": "Identifier",
                  "start": 387,
                  "end": 388,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 390,
        "end": 447,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 396,
            "end": 408,
            "expression": {
              "type": "AssignmentExpression",
              "start": 396,
              "end": 407,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 396,
                "end": 400,
                "object": {
                  "type": "Identifier",
                  "start": 396,
                  "end": 397,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 398,
                  "end": 399,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              },
              "right": {
                "type": "MemberExpression",
                "start": 403,
                "end": 407,
                "object": {
                  "type": "Identifier",
                  "start": 403,
                  "end": 404,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 405,
                  "end": 406,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 423,
            "end": 435,
            "expression": {
              "type": "AssignmentExpression",
              "start": 423,
              "end": 434,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 423,
                "end": 427,
                "object": {
                  "type": "Identifier",
                  "start": 423,
                  "end": 424,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 425,
                  "end": 426,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              },
              "right": {
                "type": "MemberExpression",
                "start": 430,
                "end": 434,
                "object": {
                  "type": "Identifier",
                  "start": 430,
                  "end": 431,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 432,
                  "end": 433,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 449,
      "end": 571,
      "id": {
        "type": "Identifier",
        "start": 458,
        "end": 460,
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 460,
        "end": 495,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 461,
            "end": 462,
            "name": {
              "type": "Identifier",
              "start": 461,
              "end": 462,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 464,
            "end": 475,
            "name": {
              "type": "Identifier",
              "start": 464,
              "end": 465,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 474,
              "end": 475,
              "typeName": {
                "type": "Identifier",
                "start": 474,
                "end": 475,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
            "start": 477,
            "end": 494,
            "name": {
              "type": "Identifier",
              "start": 477,
              "end": 478,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 487,
              "end": 494,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 493,
                "end": 494,
                "typeName": {
                  "type": "Identifier",
                  "start": 493,
                  "end": 494,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
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
          "start": 496,
          "end": 500,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 497,
            "end": 500,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 499,
              "end": 500,
              "typeName": {
                "type": "Identifier",
                "start": 499,
                "end": 500,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 502,
          "end": 506,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 503,
            "end": 506,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 505,
              "end": 506,
              "typeName": {
                "type": "Identifier",
                "start": 505,
                "end": 506,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 508,
          "end": 512,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 509,
            "end": 512,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 511,
              "end": 512,
              "typeName": {
                "type": "Identifier",
                "start": 511,
                "end": 512,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 514,
        "end": 571,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 520,
            "end": 532,
            "expression": {
              "type": "AssignmentExpression",
              "start": 520,
              "end": 531,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 520,
                "end": 524,
                "object": {
                  "type": "Identifier",
                  "start": 520,
                  "end": 521,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 522,
                  "end": 523,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              },
              "right": {
                "type": "MemberExpression",
                "start": 527,
                "end": 531,
                "object": {
                  "type": "Identifier",
                  "start": 527,
                  "end": 528,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 529,
                  "end": 530,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 547,
            "end": 559,
            "expression": {
              "type": "AssignmentExpression",
              "start": 547,
              "end": 558,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 547,
                "end": 551,
                "object": {
                  "type": "Identifier",
                  "start": 547,
                  "end": 548,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 549,
                  "end": 550,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              },
              "right": {
                "type": "MemberExpression",
                "start": 554,
                "end": 558,
                "object": {
                  "type": "Identifier",
                  "start": 554,
                  "end": 555,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 556,
                  "end": 557,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 573,
      "end": 669,
      "id": {
        "type": "Identifier",
        "start": 582,
        "end": 585,
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 585,
        "end": 588,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 586,
            "end": 587,
            "name": {
              "type": "Identifier",
              "start": 586,
              "end": 587,
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
          "start": 589,
          "end": 593,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 590,
            "end": 593,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 592,
              "end": 593,
              "typeName": {
                "type": "Identifier",
                "start": 592,
                "end": 593,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 595,
          "end": 608,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 596,
            "end": 608,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 598,
              "end": 608,
              "typeName": {
                "type": "Identifier",
                "start": 598,
                "end": 605,
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 605,
                "end": 608,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 606,
                    "end": 607,
                    "typeName": {
                      "type": "Identifier",
                      "start": 606,
                      "end": 607,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 610,
          "end": 620,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 611,
            "end": 620,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 613,
              "end": 620,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 619,
                "end": 620,
                "typeName": {
                  "type": "Identifier",
                  "start": 619,
                  "end": 620,
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
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 622,
        "end": 669,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 628,
            "end": 640,
            "expression": {
              "type": "AssignmentExpression",
              "start": 628,
              "end": 639,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 628,
                "end": 632,
                "object": {
                  "type": "Identifier",
                  "start": 628,
                  "end": 629,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 630,
                  "end": 631,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              },
              "right": {
                "type": "MemberExpression",
                "start": 635,
                "end": 639,
                "object": {
                  "type": "Identifier",
                  "start": 635,
                  "end": 636,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 637,
                  "end": 638,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 655,
            "end": 667,
            "expression": {
              "type": "AssignmentExpression",
              "start": 655,
              "end": 666,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 655,
                "end": 659,
                "object": {
                  "type": "Identifier",
                  "start": 655,
                  "end": 656,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 657,
                  "end": 658,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              },
              "right": {
                "type": "MemberExpression",
                "start": 662,
                "end": 666,
                "object": {
                  "type": "Identifier",
                  "start": 662,
                  "end": 663,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 664,
                  "end": 665,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 671,
      "end": 780,
      "id": {
        "type": "Identifier",
        "start": 680,
        "end": 683,
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 683,
        "end": 705,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 684,
            "end": 685,
            "name": {
              "type": "Identifier",
              "start": 684,
              "end": 685,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 687,
            "end": 704,
            "name": {
              "type": "Identifier",
              "start": 687,
              "end": 688,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 697,
              "end": 704,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 703,
                "end": 704,
                "typeName": {
                  "type": "Identifier",
                  "start": 703,
                  "end": 704,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
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
          "start": 706,
          "end": 710,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 707,
            "end": 710,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 709,
              "end": 710,
              "typeName": {
                "type": "Identifier",
                "start": 709,
                "end": 710,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 712,
          "end": 725,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 713,
            "end": 725,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 715,
              "end": 725,
              "typeName": {
                "type": "Identifier",
                "start": 715,
                "end": 722,
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 722,
                "end": 725,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 723,
                    "end": 724,
                    "typeName": {
                      "type": "Identifier",
                      "start": 723,
                      "end": 724,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 727,
          "end": 731,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 728,
            "end": 731,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 730,
              "end": 731,
              "typeName": {
                "type": "Identifier",
                "start": 730,
                "end": 731,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 733,
        "end": 780,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 739,
            "end": 751,
            "expression": {
              "type": "AssignmentExpression",
              "start": 739,
              "end": 750,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 739,
                "end": 743,
                "object": {
                  "type": "Identifier",
                  "start": 739,
                  "end": 740,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 741,
                  "end": 742,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              },
              "right": {
                "type": "MemberExpression",
                "start": 746,
                "end": 750,
                "object": {
                  "type": "Identifier",
                  "start": 746,
                  "end": 747,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 748,
                  "end": 749,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 766,
            "end": 778,
            "expression": {
              "type": "AssignmentExpression",
              "start": 766,
              "end": 777,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 766,
                "end": 770,
                "object": {
                  "type": "Identifier",
                  "start": 766,
                  "end": 767,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 768,
                  "end": 769,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              },
              "right": {
                "type": "MemberExpression",
                "start": 773,
                "end": 777,
                "object": {
                  "type": "Identifier",
                  "start": 773,
                  "end": 774,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 775,
                  "end": 776,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 782,
      "end": 901,
      "id": {
        "type": "Identifier",
        "start": 791,
        "end": 794,
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 794,
        "end": 810,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 795,
            "end": 796,
            "name": {
              "type": "Identifier",
              "start": 795,
              "end": 796,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 798,
            "end": 809,
            "name": {
              "type": "Identifier",
              "start": 798,
              "end": 799,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 808,
              "end": 809,
              "typeName": {
                "type": "Identifier",
                "start": 808,
                "end": 809,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
          "start": 811,
          "end": 815,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 812,
            "end": 815,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 814,
              "end": 815,
              "typeName": {
                "type": "Identifier",
                "start": 814,
                "end": 815,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 817,
          "end": 830,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 818,
            "end": 830,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 820,
              "end": 830,
              "typeName": {
                "type": "Identifier",
                "start": 820,
                "end": 827,
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 827,
                "end": 830,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 828,
                    "end": 829,
                    "typeName": {
                      "type": "Identifier",
                      "start": 828,
                      "end": 829,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 832,
          "end": 842,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 833,
            "end": 842,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 835,
              "end": 842,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 841,
                "end": 842,
                "typeName": {
                  "type": "Identifier",
                  "start": 841,
                  "end": 842,
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
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 844,
        "end": 901,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 850,
            "end": 862,
            "expression": {
              "type": "AssignmentExpression",
              "start": 850,
              "end": 861,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 850,
                "end": 854,
                "object": {
                  "type": "Identifier",
                  "start": 850,
                  "end": 851,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 852,
                  "end": 853,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              },
              "right": {
                "type": "MemberExpression",
                "start": 857,
                "end": 861,
                "object": {
                  "type": "Identifier",
                  "start": 857,
                  "end": 858,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 859,
                  "end": 860,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 877,
            "end": 889,
            "expression": {
              "type": "AssignmentExpression",
              "start": 877,
              "end": 888,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 877,
                "end": 881,
                "object": {
                  "type": "Identifier",
                  "start": 877,
                  "end": 878,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 879,
                  "end": 880,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              },
              "right": {
                "type": "MemberExpression",
                "start": 884,
                "end": 888,
                "object": {
                  "type": "Identifier",
                  "start": 884,
                  "end": 885,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 886,
                  "end": 887,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 903,
      "end": 1035,
      "id": {
        "type": "Identifier",
        "start": 912,
        "end": 915,
        "decorators": [],
        "name": "f13",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 915,
        "end": 950,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 916,
            "end": 917,
            "name": {
              "type": "Identifier",
              "start": 916,
              "end": 917,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 919,
            "end": 930,
            "name": {
              "type": "Identifier",
              "start": 919,
              "end": 920,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 929,
              "end": 930,
              "typeName": {
                "type": "Identifier",
                "start": 929,
                "end": 930,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
            "start": 932,
            "end": 949,
            "name": {
              "type": "Identifier",
              "start": 932,
              "end": 933,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 942,
              "end": 949,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 948,
                "end": 949,
                "typeName": {
                  "type": "Identifier",
                  "start": 948,
                  "end": 949,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
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
          "start": 951,
          "end": 955,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 952,
            "end": 955,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 954,
              "end": 955,
              "typeName": {
                "type": "Identifier",
                "start": 954,
                "end": 955,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 957,
          "end": 970,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 958,
            "end": 970,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 960,
              "end": 970,
              "typeName": {
                "type": "Identifier",
                "start": 960,
                "end": 967,
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 967,
                "end": 970,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 968,
                    "end": 969,
                    "typeName": {
                      "type": "Identifier",
                      "start": 968,
                      "end": 969,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 972,
          "end": 976,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 973,
            "end": 976,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 975,
              "end": 976,
              "typeName": {
                "type": "Identifier",
                "start": 975,
                "end": 976,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 978,
        "end": 1035,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 984,
            "end": 996,
            "expression": {
              "type": "AssignmentExpression",
              "start": 984,
              "end": 995,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 984,
                "end": 988,
                "object": {
                  "type": "Identifier",
                  "start": 984,
                  "end": 985,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 986,
                  "end": 987,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              },
              "right": {
                "type": "MemberExpression",
                "start": 991,
                "end": 995,
                "object": {
                  "type": "Identifier",
                  "start": 991,
                  "end": 992,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 993,
                  "end": 994,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1011,
            "end": 1023,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1011,
              "end": 1022,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 1011,
                "end": 1015,
                "object": {
                  "type": "Identifier",
                  "start": 1011,
                  "end": 1012,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1013,
                  "end": 1014,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              },
              "right": {
                "type": "MemberExpression",
                "start": 1018,
                "end": 1022,
                "object": {
                  "type": "Identifier",
                  "start": 1018,
                  "end": 1019,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1020,
                  "end": 1021,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1037,
      "end": 1134,
      "id": {
        "type": "Identifier",
        "start": 1046,
        "end": 1049,
        "decorators": [],
        "name": "f20",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1049,
        "end": 1052,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1050,
            "end": 1051,
            "name": {
              "type": "Identifier",
              "start": 1050,
              "end": 1051,
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
          "start": 1053,
          "end": 1057,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1054,
            "end": 1057,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1056,
              "end": 1057,
              "typeName": {
                "type": "Identifier",
                "start": 1056,
                "end": 1057,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1059,
          "end": 1073,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1060,
            "end": 1073,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1062,
              "end": 1073,
              "typeName": {
                "type": "Identifier",
                "start": 1062,
                "end": 1070,
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1070,
                "end": 1073,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1071,
                    "end": 1072,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1071,
                      "end": 1072,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1075,
          "end": 1085,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1076,
            "end": 1085,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 1078,
              "end": 1085,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1084,
                "end": 1085,
                "typeName": {
                  "type": "Identifier",
                  "start": 1084,
                  "end": 1085,
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
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1087,
        "end": 1134,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1093,
            "end": 1105,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1093,
              "end": 1104,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 1093,
                "end": 1097,
                "object": {
                  "type": "Identifier",
                  "start": 1093,
                  "end": 1094,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1095,
                  "end": 1096,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              },
              "right": {
                "type": "MemberExpression",
                "start": 1100,
                "end": 1104,
                "object": {
                  "type": "Identifier",
                  "start": 1100,
                  "end": 1101,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1102,
                  "end": 1103,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1110,
            "end": 1122,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1110,
              "end": 1121,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 1110,
                "end": 1114,
                "object": {
                  "type": "Identifier",
                  "start": 1110,
                  "end": 1111,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1112,
                  "end": 1113,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              },
              "right": {
                "type": "MemberExpression",
                "start": 1117,
                "end": 1121,
                "object": {
                  "type": "Identifier",
                  "start": 1117,
                  "end": 1118,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1119,
                  "end": 1120,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1136,
      "end": 1246,
      "id": {
        "type": "Identifier",
        "start": 1145,
        "end": 1148,
        "decorators": [],
        "name": "f21",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1148,
        "end": 1170,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1149,
            "end": 1150,
            "name": {
              "type": "Identifier",
              "start": 1149,
              "end": 1150,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 1152,
            "end": 1169,
            "name": {
              "type": "Identifier",
              "start": 1152,
              "end": 1153,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 1162,
              "end": 1169,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1168,
                "end": 1169,
                "typeName": {
                  "type": "Identifier",
                  "start": 1168,
                  "end": 1169,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
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
          "start": 1171,
          "end": 1175,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1172,
            "end": 1175,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1174,
              "end": 1175,
              "typeName": {
                "type": "Identifier",
                "start": 1174,
                "end": 1175,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1177,
          "end": 1191,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1178,
            "end": 1191,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1180,
              "end": 1191,
              "typeName": {
                "type": "Identifier",
                "start": 1180,
                "end": 1188,
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1188,
                "end": 1191,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1189,
                    "end": 1190,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1189,
                      "end": 1190,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1193,
          "end": 1197,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1194,
            "end": 1197,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1196,
              "end": 1197,
              "typeName": {
                "type": "Identifier",
                "start": 1196,
                "end": 1197,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1199,
        "end": 1246,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1205,
            "end": 1217,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1205,
              "end": 1216,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 1205,
                "end": 1209,
                "object": {
                  "type": "Identifier",
                  "start": 1205,
                  "end": 1206,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1207,
                  "end": 1208,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              },
              "right": {
                "type": "MemberExpression",
                "start": 1212,
                "end": 1216,
                "object": {
                  "type": "Identifier",
                  "start": 1212,
                  "end": 1213,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1214,
                  "end": 1215,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1222,
            "end": 1234,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1222,
              "end": 1233,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 1222,
                "end": 1226,
                "object": {
                  "type": "Identifier",
                  "start": 1222,
                  "end": 1223,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1224,
                  "end": 1225,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              },
              "right": {
                "type": "MemberExpression",
                "start": 1229,
                "end": 1233,
                "object": {
                  "type": "Identifier",
                  "start": 1229,
                  "end": 1230,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1231,
                  "end": 1232,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1248,
      "end": 1358,
      "id": {
        "type": "Identifier",
        "start": 1257,
        "end": 1260,
        "decorators": [],
        "name": "f22",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1260,
        "end": 1276,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1261,
            "end": 1262,
            "name": {
              "type": "Identifier",
              "start": 1261,
              "end": 1262,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 1264,
            "end": 1275,
            "name": {
              "type": "Identifier",
              "start": 1264,
              "end": 1265,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1274,
              "end": 1275,
              "typeName": {
                "type": "Identifier",
                "start": 1274,
                "end": 1275,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
          "start": 1277,
          "end": 1281,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1278,
            "end": 1281,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1280,
              "end": 1281,
              "typeName": {
                "type": "Identifier",
                "start": 1280,
                "end": 1281,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1283,
          "end": 1297,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1284,
            "end": 1297,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1286,
              "end": 1297,
              "typeName": {
                "type": "Identifier",
                "start": 1286,
                "end": 1294,
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1294,
                "end": 1297,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1295,
                    "end": 1296,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1295,
                      "end": 1296,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1299,
          "end": 1309,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1300,
            "end": 1309,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 1302,
              "end": 1309,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1308,
                "end": 1309,
                "typeName": {
                  "type": "Identifier",
                  "start": 1308,
                  "end": 1309,
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
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1311,
        "end": 1358,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1317,
            "end": 1329,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1317,
              "end": 1328,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 1317,
                "end": 1321,
                "object": {
                  "type": "Identifier",
                  "start": 1317,
                  "end": 1318,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1319,
                  "end": 1320,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              },
              "right": {
                "type": "MemberExpression",
                "start": 1324,
                "end": 1328,
                "object": {
                  "type": "Identifier",
                  "start": 1324,
                  "end": 1325,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1326,
                  "end": 1327,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1334,
            "end": 1346,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1334,
              "end": 1345,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 1334,
                "end": 1338,
                "object": {
                  "type": "Identifier",
                  "start": 1334,
                  "end": 1335,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1336,
                  "end": 1337,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              },
              "right": {
                "type": "MemberExpression",
                "start": 1341,
                "end": 1345,
                "object": {
                  "type": "Identifier",
                  "start": 1341,
                  "end": 1342,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1343,
                  "end": 1344,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1360,
      "end": 1483,
      "id": {
        "type": "Identifier",
        "start": 1369,
        "end": 1372,
        "decorators": [],
        "name": "f23",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1372,
        "end": 1407,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1373,
            "end": 1374,
            "name": {
              "type": "Identifier",
              "start": 1373,
              "end": 1374,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 1376,
            "end": 1387,
            "name": {
              "type": "Identifier",
              "start": 1376,
              "end": 1377,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1386,
              "end": 1387,
              "typeName": {
                "type": "Identifier",
                "start": 1386,
                "end": 1387,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
            "start": 1389,
            "end": 1406,
            "name": {
              "type": "Identifier",
              "start": 1389,
              "end": 1390,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 1399,
              "end": 1406,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1405,
                "end": 1406,
                "typeName": {
                  "type": "Identifier",
                  "start": 1405,
                  "end": 1406,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
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
          "start": 1408,
          "end": 1412,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1409,
            "end": 1412,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1411,
              "end": 1412,
              "typeName": {
                "type": "Identifier",
                "start": 1411,
                "end": 1412,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1414,
          "end": 1428,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1415,
            "end": 1428,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1417,
              "end": 1428,
              "typeName": {
                "type": "Identifier",
                "start": 1417,
                "end": 1425,
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1425,
                "end": 1428,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1426,
                    "end": 1427,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1426,
                      "end": 1427,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1430,
          "end": 1434,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1431,
            "end": 1434,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1433,
              "end": 1434,
              "typeName": {
                "type": "Identifier",
                "start": 1433,
                "end": 1434,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1436,
        "end": 1483,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1442,
            "end": 1454,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1442,
              "end": 1453,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 1442,
                "end": 1446,
                "object": {
                  "type": "Identifier",
                  "start": 1442,
                  "end": 1443,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1444,
                  "end": 1445,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              },
              "right": {
                "type": "MemberExpression",
                "start": 1449,
                "end": 1453,
                "object": {
                  "type": "Identifier",
                  "start": 1449,
                  "end": 1450,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1451,
                  "end": 1452,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1459,
            "end": 1471,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1459,
              "end": 1470,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 1459,
                "end": 1463,
                "object": {
                  "type": "Identifier",
                  "start": 1459,
                  "end": 1460,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1461,
                  "end": 1462,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              },
              "right": {
                "type": "MemberExpression",
                "start": 1466,
                "end": 1470,
                "object": {
                  "type": "Identifier",
                  "start": 1466,
                  "end": 1467,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1468,
                  "end": 1469,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1485,
      "end": 1523,
      "id": {
        "type": "Identifier",
        "start": 1490,
        "end": 1495,
        "decorators": [],
        "name": "Thing",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1498,
        "end": 1522,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1500,
            "end": 1510,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1500,
              "end": 1501,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1501,
              "end": 1509,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1503,
                "end": 1509
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1511,
            "end": 1520,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1511,
              "end": 1512,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1512,
              "end": 1520,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1514,
                "end": 1520
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
      "type": "FunctionDeclaration",
      "start": 1525,
      "end": 1597,
      "id": {
        "type": "Identifier",
        "start": 1534,
        "end": 1537,
        "decorators": [],
        "name": "f30",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1537,
        "end": 1540,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1538,
            "end": 1539,
            "name": {
              "type": "Identifier",
              "start": 1538,
              "end": 1539,
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
          "start": 1541,
          "end": 1545,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1542,
            "end": 1545,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1544,
              "end": 1545,
              "typeName": {
                "type": "Identifier",
                "start": 1544,
                "end": 1545,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1547,
          "end": 1560,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1548,
            "end": 1560,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1550,
              "end": 1560,
              "typeName": {
                "type": "Identifier",
                "start": 1550,
                "end": 1557,
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1557,
                "end": 1560,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1558,
                    "end": 1559,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1558,
                      "end": 1559,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1562,
        "end": 1597,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1568,
            "end": 1574,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1568,
              "end": 1573,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1568,
                "end": 1569,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1572,
                "end": 1573,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1589,
            "end": 1595,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1589,
              "end": 1594,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1589,
                "end": 1590,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1593,
                "end": 1594,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1599,
      "end": 1698,
      "id": {
        "type": "Identifier",
        "start": 1608,
        "end": 1611,
        "decorators": [],
        "name": "f31",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1611,
        "end": 1628,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1612,
            "end": 1627,
            "name": {
              "type": "Identifier",
              "start": 1612,
              "end": 1613,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1622,
              "end": 1627,
              "typeName": {
                "type": "Identifier",
                "start": 1622,
                "end": 1627,
                "decorators": [],
                "name": "Thing",
                "optional": false,
                "typeAnnotation": null
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
          "start": 1629,
          "end": 1646,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1630,
            "end": 1646,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1632,
              "end": 1646,
              "typeName": {
                "type": "Identifier",
                "start": 1632,
                "end": 1639,
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1639,
                "end": 1646,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1640,
                    "end": 1645,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1640,
                      "end": 1645,
                      "decorators": [],
                      "name": "Thing",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1648,
          "end": 1661,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1649,
            "end": 1661,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1651,
              "end": 1661,
              "typeName": {
                "type": "Identifier",
                "start": 1651,
                "end": 1658,
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1658,
                "end": 1661,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1659,
                    "end": 1660,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1659,
                      "end": 1660,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1663,
        "end": 1698,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1669,
            "end": 1675,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1669,
              "end": 1674,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1669,
                "end": 1670,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1673,
                "end": 1674,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1680,
            "end": 1686,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1680,
              "end": 1685,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1680,
                "end": 1681,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1684,
                "end": 1685,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1700,
      "end": 1763,
      "id": {
        "type": "Identifier",
        "start": 1709,
        "end": 1712,
        "decorators": [],
        "name": "f40",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1712,
        "end": 1715,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1713,
            "end": 1714,
            "name": {
              "type": "Identifier",
              "start": 1713,
              "end": 1714,
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
          "start": 1716,
          "end": 1720,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1717,
            "end": 1720,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1719,
              "end": 1720,
              "typeName": {
                "type": "Identifier",
                "start": 1719,
                "end": 1720,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1722,
          "end": 1736,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1723,
            "end": 1736,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1725,
              "end": 1736,
              "typeName": {
                "type": "Identifier",
                "start": 1725,
                "end": 1733,
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1733,
                "end": 1736,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1734,
                    "end": 1735,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1734,
                      "end": 1735,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1738,
        "end": 1763,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1744,
            "end": 1750,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1744,
              "end": 1749,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1744,
                "end": 1745,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1748,
                "end": 1749,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1755,
            "end": 1761,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1755,
              "end": 1760,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1755,
                "end": 1756,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1759,
                "end": 1760,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1765,
      "end": 1866,
      "id": {
        "type": "Identifier",
        "start": 1774,
        "end": 1777,
        "decorators": [],
        "name": "f41",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1777,
        "end": 1794,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1778,
            "end": 1793,
            "name": {
              "type": "Identifier",
              "start": 1778,
              "end": 1779,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1788,
              "end": 1793,
              "typeName": {
                "type": "Identifier",
                "start": 1788,
                "end": 1793,
                "decorators": [],
                "name": "Thing",
                "optional": false,
                "typeAnnotation": null
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
          "start": 1795,
          "end": 1813,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1796,
            "end": 1813,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1798,
              "end": 1813,
              "typeName": {
                "type": "Identifier",
                "start": 1798,
                "end": 1806,
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1806,
                "end": 1813,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1807,
                    "end": 1812,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1807,
                      "end": 1812,
                      "decorators": [],
                      "name": "Thing",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1815,
          "end": 1829,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1816,
            "end": 1829,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1818,
              "end": 1829,
              "typeName": {
                "type": "Identifier",
                "start": 1818,
                "end": 1826,
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1826,
                "end": 1829,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1827,
                    "end": 1828,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1827,
                      "end": 1828,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1831,
        "end": 1866,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1837,
            "end": 1843,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1837,
              "end": 1842,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1837,
                "end": 1838,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1841,
                "end": 1842,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1848,
            "end": 1854,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1848,
              "end": 1853,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1848,
                "end": 1849,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1852,
                "end": 1853,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1868,
      "end": 1901,
      "id": {
        "type": "Identifier",
        "start": 1873,
        "end": 1877,
        "decorators": [],
        "name": "Item",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1880,
        "end": 1901,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1886,
            "end": 1899,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1886,
              "end": 1890,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1890,
              "end": 1898,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1892,
                "end": 1898
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
      "type": "TSTypeAliasDeclaration",
      "start": 1903,
      "end": 1944,
      "id": {
        "type": "Identifier",
        "start": 1908,
        "end": 1915,
        "decorators": [],
        "name": "ItemMap",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1918,
        "end": 1944,
        "members": [
          {
            "type": "TSIndexSignature",
            "start": 1924,
            "end": 1942,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1925,
                "end": 1934,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1926,
                  "end": 1934,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1928,
                    "end": 1934
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1935,
              "end": 1941,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1937,
                "end": 1941,
                "typeName": {
                  "type": "Identifier",
                  "start": 1937,
                  "end": 1941,
                  "decorators": [],
                  "name": "Item",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1946,
      "end": 2060,
      "id": {
        "type": "Identifier",
        "start": 1955,
        "end": 1958,
        "decorators": [],
        "name": "f50",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1958,
        "end": 1977,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1959,
            "end": 1976,
            "name": {
              "type": "Identifier",
              "start": 1959,
              "end": 1960,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1969,
              "end": 1976,
              "typeName": {
                "type": "Identifier",
                "start": 1969,
                "end": 1976,
                "decorators": [],
                "name": "ItemMap",
                "optional": false,
                "typeAnnotation": null
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
          "start": 1978,
          "end": 1984,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1981,
            "end": 1984,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1983,
              "end": 1984,
              "typeName": {
                "type": "Identifier",
                "start": 1983,
                "end": 1984,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1986,
          "end": 1998,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1989,
            "end": 1998,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 1991,
              "end": 1998,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1997,
                "end": 1998,
                "typeName": {
                  "type": "Identifier",
                  "start": 1997,
                  "end": 1998,
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
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2000,
        "end": 2060,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2006,
            "end": 2032,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2010,
                "end": 2031,
                "id": {
                  "type": "Identifier",
                  "start": 2010,
                  "end": 2020,
                  "decorators": [],
                  "name": "item",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2014,
                    "end": 2020,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2016,
                      "end": 2020,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2016,
                        "end": 2020,
                        "decorators": [],
                        "name": "Item",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 2023,
                  "end": 2031,
                  "object": {
                    "type": "Identifier",
                    "start": 2023,
                    "end": 2026,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2027,
                    "end": 2030,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": true
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 2037,
            "end": 2058,
            "argument": {
              "type": "MemberExpression",
              "start": 2044,
              "end": 2057,
              "object": {
                "type": "MemberExpression",
                "start": 2044,
                "end": 2052,
                "object": {
                  "type": "Identifier",
                  "start": 2044,
                  "end": 2047,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2048,
                  "end": 2051,
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              },
              "property": {
                "type": "Identifier",
                "start": 2053,
                "end": 2057,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2062,
      "end": 2189,
      "id": {
        "type": "Identifier",
        "start": 2071,
        "end": 2074,
        "decorators": [],
        "name": "f51",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2074,
        "end": 2112,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2075,
            "end": 2092,
            "name": {
              "type": "Identifier",
              "start": 2075,
              "end": 2076,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 2085,
              "end": 2092,
              "typeName": {
                "type": "Identifier",
                "start": 2085,
                "end": 2092,
                "decorators": [],
                "name": "ItemMap",
                "optional": false,
                "typeAnnotation": null
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
            "start": 2094,
            "end": 2111,
            "name": {
              "type": "Identifier",
              "start": 2094,
              "end": 2095,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 2104,
              "end": 2111,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2110,
                "end": 2111,
                "typeName": {
                  "type": "Identifier",
                  "start": 2110,
                  "end": 2111,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
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
          "start": 2113,
          "end": 2119,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2116,
            "end": 2119,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2118,
              "end": 2119,
              "typeName": {
                "type": "Identifier",
                "start": 2118,
                "end": 2119,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2121,
          "end": 2127,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2124,
            "end": 2127,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2126,
              "end": 2127,
              "typeName": {
                "type": "Identifier",
                "start": 2126,
                "end": 2127,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2129,
        "end": 2189,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2135,
            "end": 2161,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2139,
                "end": 2160,
                "id": {
                  "type": "Identifier",
                  "start": 2139,
                  "end": 2149,
                  "decorators": [],
                  "name": "item",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2143,
                    "end": 2149,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2145,
                      "end": 2149,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2145,
                        "end": 2149,
                        "decorators": [],
                        "name": "Item",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 2152,
                  "end": 2160,
                  "object": {
                    "type": "Identifier",
                    "start": 2152,
                    "end": 2155,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2156,
                    "end": 2159,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": true
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 2166,
            "end": 2187,
            "argument": {
              "type": "MemberExpression",
              "start": 2173,
              "end": 2186,
              "object": {
                "type": "MemberExpression",
                "start": 2173,
                "end": 2181,
                "object": {
                  "type": "Identifier",
                  "start": 2173,
                  "end": 2176,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2177,
                  "end": 2180,
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              },
              "property": {
                "type": "Identifier",
                "start": 2182,
                "end": 2186,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2191,
      "end": 2233,
      "id": {
        "type": "Identifier",
        "start": 2196,
        "end": 2198,
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2198,
        "end": 2201,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2199,
            "end": 2200,
            "name": {
              "type": "Identifier",
              "start": 2199,
              "end": 2200,
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
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 2204,
        "end": 2233,
        "key": {
          "type": "Identifier",
          "start": 2211,
          "end": 2212,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 2216,
          "end": 2223,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 2222,
            "end": 2223,
            "typeName": {
              "type": "Identifier",
              "start": 2222,
              "end": 2223,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 2226,
          "end": 2230,
          "objectType": {
            "type": "TSTypeReference",
            "start": 2226,
            "end": 2227,
            "typeName": {
              "type": "Identifier",
              "start": 2226,
              "end": 2227,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 2228,
            "end": 2229,
            "typeName": {
              "type": "Identifier",
              "start": 2228,
              "end": 2229,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2235,
      "end": 2277,
      "id": {
        "type": "Identifier",
        "start": 2240,
        "end": 2242,
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2242,
        "end": 2245,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2243,
            "end": 2244,
            "name": {
              "type": "Identifier",
              "start": 2243,
              "end": 2244,
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
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 2248,
        "end": 2277,
        "key": {
          "type": "Identifier",
          "start": 2255,
          "end": 2256,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 2260,
          "end": 2267,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 2266,
            "end": 2267,
            "typeName": {
              "type": "Identifier",
              "start": 2266,
              "end": 2267,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 2270,
          "end": 2274,
          "objectType": {
            "type": "TSTypeReference",
            "start": 2270,
            "end": 2271,
            "typeName": {
              "type": "Identifier",
              "start": 2270,
              "end": 2271,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 2272,
            "end": 2273,
            "typeName": {
              "type": "Identifier",
              "start": 2272,
              "end": 2273,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2279,
      "end": 2340,
      "id": {
        "type": "Identifier",
        "start": 2288,
        "end": 2291,
        "decorators": [],
        "name": "f60",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2291,
        "end": 2294,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2292,
            "end": 2293,
            "name": {
              "type": "Identifier",
              "start": 2292,
              "end": 2293,
              "decorators": [],
              "name": "U",
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
          "start": 2295,
          "end": 2303,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2296,
            "end": 2303,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2298,
              "end": 2303,
              "typeName": {
                "type": "Identifier",
                "start": 2298,
                "end": 2300,
                "decorators": [],
                "name": "T1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2300,
                "end": 2303,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2301,
                    "end": 2302,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2301,
                      "end": 2302,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2305,
          "end": 2313,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2306,
            "end": 2313,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2308,
              "end": 2313,
              "typeName": {
                "type": "Identifier",
                "start": 2308,
                "end": 2310,
                "decorators": [],
                "name": "T2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2310,
                "end": 2313,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2311,
                    "end": 2312,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2311,
                      "end": 2312,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2315,
        "end": 2340,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2321,
            "end": 2327,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2321,
              "end": 2326,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2321,
                "end": 2322,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2325,
                "end": 2326,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2332,
            "end": 2338,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2332,
              "end": 2337,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2332,
                "end": 2333,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2336,
                "end": 2337,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2342,
      "end": 2390,
      "id": {
        "type": "Identifier",
        "start": 2347,
        "end": 2355,
        "decorators": [],
        "name": "Identity",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2355,
        "end": 2358,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2356,
            "end": 2357,
            "name": {
              "type": "Identifier",
              "start": 2356,
              "end": 2357,
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
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 2361,
        "end": 2390,
        "key": {
          "type": "Identifier",
          "start": 2368,
          "end": 2369,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 2373,
          "end": 2380,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 2379,
            "end": 2380,
            "typeName": {
              "type": "Identifier",
              "start": 2379,
              "end": 2380,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 2383,
          "end": 2387,
          "objectType": {
            "type": "TSTypeReference",
            "start": 2383,
            "end": 2384,
            "typeName": {
              "type": "Identifier",
              "start": 2383,
              "end": 2384,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 2385,
            "end": 2386,
            "typeName": {
              "type": "Identifier",
              "start": 2385,
              "end": 2386,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2392,
      "end": 2474,
      "id": {
        "type": "Identifier",
        "start": 2401,
        "end": 2404,
        "decorators": [],
        "name": "f61",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2404,
        "end": 2407,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2405,
            "end": 2406,
            "name": {
              "type": "Identifier",
              "start": 2405,
              "end": 2406,
              "decorators": [],
              "name": "U",
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
          "start": 2408,
          "end": 2422,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2409,
            "end": 2422,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2411,
              "end": 2422,
              "typeName": {
                "type": "Identifier",
                "start": 2411,
                "end": 2419,
                "decorators": [],
                "name": "Identity",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2419,
                "end": 2422,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2420,
                    "end": 2421,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2420,
                      "end": 2421,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2424,
          "end": 2437,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2425,
            "end": 2437,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2427,
              "end": 2437,
              "typeName": {
                "type": "Identifier",
                "start": 2427,
                "end": 2434,
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2434,
                "end": 2437,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2435,
                    "end": 2436,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2435,
                      "end": 2436,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2439,
        "end": 2474,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2445,
            "end": 2451,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2445,
              "end": 2450,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2445,
                "end": 2446,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2449,
                "end": 2450,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2466,
            "end": 2472,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2466,
              "end": 2471,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2466,
                "end": 2467,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2470,
                "end": 2471,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2476,
      "end": 2549,
      "id": {
        "type": "Identifier",
        "start": 2485,
        "end": 2488,
        "decorators": [],
        "name": "f62",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2488,
        "end": 2491,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2489,
            "end": 2490,
            "name": {
              "type": "Identifier",
              "start": 2489,
              "end": 2490,
              "decorators": [],
              "name": "U",
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
          "start": 2492,
          "end": 2506,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2493,
            "end": 2506,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2495,
              "end": 2506,
              "typeName": {
                "type": "Identifier",
                "start": 2495,
                "end": 2503,
                "decorators": [],
                "name": "Identity",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2503,
                "end": 2506,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2504,
                    "end": 2505,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2504,
                      "end": 2505,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2508,
          "end": 2522,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2509,
            "end": 2522,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2511,
              "end": 2522,
              "typeName": {
                "type": "Identifier",
                "start": 2511,
                "end": 2519,
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2519,
                "end": 2522,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2520,
                    "end": 2521,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2520,
                      "end": 2521,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2524,
        "end": 2549,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2530,
            "end": 2536,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2530,
              "end": 2535,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2530,
                "end": 2531,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2534,
                "end": 2535,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2541,
            "end": 2547,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2541,
              "end": 2546,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2541,
                "end": 2542,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2545,
                "end": 2546,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2551,
      "end": 2650,
      "id": {
        "type": "Identifier",
        "start": 2560,
        "end": 2563,
        "decorators": [],
        "name": "f70",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2563,
        "end": 2566,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2564,
            "end": 2565,
            "name": {
              "type": "Identifier",
              "start": 2564,
              "end": 2565,
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
          "start": 2567,
          "end": 2594,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2568,
            "end": 2594,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 2570,
              "end": 2594,
              "key": {
                "type": "Identifier",
                "start": 2573,
                "end": 2574,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 2578,
                "end": 2585,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2584,
                  "end": 2585,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2584,
                    "end": 2585,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 2588,
                "end": 2592,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 2588,
                  "end": 2589,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2588,
                    "end": 2589,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 2590,
                  "end": 2591,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2590,
                    "end": 2591,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "optional": false,
              "readonly": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2596,
          "end": 2623,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2597,
            "end": 2623,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 2599,
              "end": 2623,
              "key": {
                "type": "Identifier",
                "start": 2602,
                "end": 2603,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 2607,
                "end": 2614,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2613,
                  "end": 2614,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2613,
                    "end": 2614,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 2617,
                "end": 2621,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 2617,
                  "end": 2618,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2617,
                    "end": 2618,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 2619,
                  "end": 2620,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2619,
                    "end": 2620,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "optional": false,
              "readonly": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2625,
        "end": 2650,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2631,
            "end": 2637,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2631,
              "end": 2636,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2631,
                "end": 2632,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2635,
                "end": 2636,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2642,
            "end": 2648,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2642,
              "end": 2647,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2642,
                "end": 2643,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2646,
                "end": 2647,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2652,
      "end": 2774,
      "id": {
        "type": "Identifier",
        "start": 2661,
        "end": 2664,
        "decorators": [],
        "name": "f71",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2664,
        "end": 2680,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2665,
            "end": 2666,
            "name": {
              "type": "Identifier",
              "start": 2665,
              "end": 2666,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 2668,
            "end": 2679,
            "name": {
              "type": "Identifier",
              "start": 2668,
              "end": 2669,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 2678,
              "end": 2679,
              "typeName": {
                "type": "Identifier",
                "start": 2678,
                "end": 2679,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
          "start": 2681,
          "end": 2708,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2682,
            "end": 2708,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 2684,
              "end": 2708,
              "key": {
                "type": "Identifier",
                "start": 2687,
                "end": 2688,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 2692,
                "end": 2699,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2698,
                  "end": 2699,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2698,
                    "end": 2699,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 2702,
                "end": 2706,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 2702,
                  "end": 2703,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2702,
                    "end": 2703,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 2704,
                  "end": 2705,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2704,
                    "end": 2705,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "optional": false,
              "readonly": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2710,
          "end": 2737,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2711,
            "end": 2737,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 2713,
              "end": 2737,
              "key": {
                "type": "Identifier",
                "start": 2716,
                "end": 2717,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 2721,
                "end": 2728,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2727,
                  "end": 2728,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2727,
                    "end": 2728,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 2731,
                "end": 2735,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 2731,
                  "end": 2732,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2731,
                    "end": 2732,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 2733,
                  "end": 2734,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2733,
                    "end": 2734,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "optional": false,
              "readonly": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2739,
        "end": 2774,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2745,
            "end": 2751,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2745,
              "end": 2750,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2745,
                "end": 2746,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2749,
                "end": 2750,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2756,
            "end": 2762,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2756,
              "end": 2761,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2756,
                "end": 2757,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2760,
                "end": 2761,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2776,
      "end": 2898,
      "id": {
        "type": "Identifier",
        "start": 2785,
        "end": 2788,
        "decorators": [],
        "name": "f72",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2788,
        "end": 2804,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2789,
            "end": 2790,
            "name": {
              "type": "Identifier",
              "start": 2789,
              "end": 2790,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 2792,
            "end": 2803,
            "name": {
              "type": "Identifier",
              "start": 2792,
              "end": 2793,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 2802,
              "end": 2803,
              "typeName": {
                "type": "Identifier",
                "start": 2802,
                "end": 2803,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
          "start": 2805,
          "end": 2832,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2806,
            "end": 2832,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 2808,
              "end": 2832,
              "key": {
                "type": "Identifier",
                "start": 2811,
                "end": 2812,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 2816,
                "end": 2823,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2822,
                  "end": 2823,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2822,
                    "end": 2823,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 2826,
                "end": 2830,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 2826,
                  "end": 2827,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2826,
                    "end": 2827,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 2828,
                  "end": 2829,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2828,
                    "end": 2829,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "optional": false,
              "readonly": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2834,
          "end": 2861,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2835,
            "end": 2861,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 2837,
              "end": 2861,
              "key": {
                "type": "Identifier",
                "start": 2840,
                "end": 2841,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 2845,
                "end": 2852,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2851,
                  "end": 2852,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2851,
                    "end": 2852,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 2855,
                "end": 2859,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 2855,
                  "end": 2856,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2855,
                    "end": 2856,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 2857,
                  "end": 2858,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2857,
                    "end": 2858,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "optional": false,
              "readonly": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2863,
        "end": 2898,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2869,
            "end": 2875,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2869,
              "end": 2874,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2869,
                "end": 2870,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2873,
                "end": 2874,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2880,
            "end": 2886,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2880,
              "end": 2885,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2880,
                "end": 2881,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2884,
                "end": 2885,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2900,
      "end": 3022,
      "id": {
        "type": "Identifier",
        "start": 2909,
        "end": 2912,
        "decorators": [],
        "name": "f73",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2912,
        "end": 2934,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2913,
            "end": 2914,
            "name": {
              "type": "Identifier",
              "start": 2913,
              "end": 2914,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 2916,
            "end": 2933,
            "name": {
              "type": "Identifier",
              "start": 2916,
              "end": 2917,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 2926,
              "end": 2933,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2932,
                "end": 2933,
                "typeName": {
                  "type": "Identifier",
                  "start": 2932,
                  "end": 2933,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
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
          "start": 2935,
          "end": 2956,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2936,
            "end": 2956,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 2938,
              "end": 2956,
              "key": {
                "type": "Identifier",
                "start": 2941,
                "end": 2942,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 2946,
                "end": 2947,
                "typeName": {
                  "type": "Identifier",
                  "start": 2946,
                  "end": 2947,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 2950,
                "end": 2954,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 2950,
                  "end": 2951,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2950,
                    "end": 2951,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 2952,
                  "end": 2953,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2952,
                    "end": 2953,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "optional": false,
              "readonly": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2958,
          "end": 2985,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2959,
            "end": 2985,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 2961,
              "end": 2985,
              "key": {
                "type": "Identifier",
                "start": 2964,
                "end": 2965,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 2969,
                "end": 2976,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2975,
                  "end": 2976,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2975,
                    "end": 2976,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 2979,
                "end": 2983,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 2979,
                  "end": 2980,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2979,
                    "end": 2980,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 2981,
                  "end": 2982,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2981,
                    "end": 2982,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "optional": false,
              "readonly": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2987,
        "end": 3022,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2993,
            "end": 2999,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2993,
              "end": 2998,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2993,
                "end": 2994,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2997,
                "end": 2998,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 3004,
            "end": 3010,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3004,
              "end": 3009,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 3004,
                "end": 3005,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3008,
                "end": 3009,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3024,
      "end": 3159,
      "id": {
        "type": "Identifier",
        "start": 3033,
        "end": 3036,
        "decorators": [],
        "name": "f74",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3036,
        "end": 3071,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3037,
            "end": 3038,
            "name": {
              "type": "Identifier",
              "start": 3037,
              "end": 3038,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 3040,
            "end": 3051,
            "name": {
              "type": "Identifier",
              "start": 3040,
              "end": 3041,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 3050,
              "end": 3051,
              "typeName": {
                "type": "Identifier",
                "start": 3050,
                "end": 3051,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
            "start": 3053,
            "end": 3070,
            "name": {
              "type": "Identifier",
              "start": 3053,
              "end": 3054,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 3063,
              "end": 3070,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3069,
                "end": 3070,
                "typeName": {
                  "type": "Identifier",
                  "start": 3069,
                  "end": 3070,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
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
          "start": 3072,
          "end": 3093,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3073,
            "end": 3093,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 3075,
              "end": 3093,
              "key": {
                "type": "Identifier",
                "start": 3078,
                "end": 3079,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 3083,
                "end": 3084,
                "typeName": {
                  "type": "Identifier",
                  "start": 3083,
                  "end": 3084,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 3087,
                "end": 3091,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 3087,
                  "end": 3088,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3087,
                    "end": 3088,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 3089,
                  "end": 3090,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3089,
                    "end": 3090,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "optional": false,
              "readonly": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 3095,
          "end": 3122,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3096,
            "end": 3122,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 3098,
              "end": 3122,
              "key": {
                "type": "Identifier",
                "start": 3101,
                "end": 3102,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 3106,
                "end": 3113,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3112,
                  "end": 3113,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3112,
                    "end": 3113,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 3116,
                "end": 3120,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 3116,
                  "end": 3117,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3116,
                    "end": 3117,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 3118,
                  "end": 3119,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3118,
                    "end": 3119,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "optional": false,
              "readonly": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 3124,
        "end": 3159,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3130,
            "end": 3136,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3130,
              "end": 3135,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 3130,
                "end": 3131,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3134,
                "end": 3135,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 3141,
            "end": 3147,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3141,
              "end": 3146,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 3141,
                "end": 3142,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3145,
                "end": 3146,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3161,
      "end": 3296,
      "id": {
        "type": "Identifier",
        "start": 3170,
        "end": 3173,
        "decorators": [],
        "name": "f75",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3173,
        "end": 3208,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3174,
            "end": 3175,
            "name": {
              "type": "Identifier",
              "start": 3174,
              "end": 3175,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 3177,
            "end": 3188,
            "name": {
              "type": "Identifier",
              "start": 3177,
              "end": 3178,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 3187,
              "end": 3188,
              "typeName": {
                "type": "Identifier",
                "start": 3187,
                "end": 3188,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
            "start": 3190,
            "end": 3207,
            "name": {
              "type": "Identifier",
              "start": 3190,
              "end": 3191,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 3200,
              "end": 3207,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3206,
                "end": 3207,
                "typeName": {
                  "type": "Identifier",
                  "start": 3206,
                  "end": 3207,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
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
          "start": 3209,
          "end": 3230,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3210,
            "end": 3230,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 3212,
              "end": 3230,
              "key": {
                "type": "Identifier",
                "start": 3215,
                "end": 3216,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 3220,
                "end": 3221,
                "typeName": {
                  "type": "Identifier",
                  "start": 3220,
                  "end": 3221,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 3224,
                "end": 3228,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 3224,
                  "end": 3225,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3224,
                    "end": 3225,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 3226,
                  "end": 3227,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3226,
                    "end": 3227,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "optional": false,
              "readonly": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 3232,
          "end": 3259,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3233,
            "end": 3259,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 3235,
              "end": 3259,
              "key": {
                "type": "Identifier",
                "start": 3238,
                "end": 3239,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 3243,
                "end": 3250,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3249,
                  "end": 3250,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3249,
                    "end": 3250,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 3253,
                "end": 3257,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 3253,
                  "end": 3254,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3253,
                    "end": 3254,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 3255,
                  "end": 3256,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3255,
                    "end": 3256,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "optional": false,
              "readonly": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 3261,
        "end": 3296,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3267,
            "end": 3273,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3267,
              "end": 3272,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 3267,
                "end": 3268,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3271,
                "end": 3272,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 3278,
            "end": 3284,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3278,
              "end": 3283,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 3278,
                "end": 3279,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3282,
                "end": 3283,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3298,
      "end": 3427,
      "id": {
        "type": "Identifier",
        "start": 3307,
        "end": 3310,
        "decorators": [],
        "name": "f76",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3310,
        "end": 3345,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3311,
            "end": 3312,
            "name": {
              "type": "Identifier",
              "start": 3311,
              "end": 3312,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 3314,
            "end": 3325,
            "name": {
              "type": "Identifier",
              "start": 3314,
              "end": 3315,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 3324,
              "end": 3325,
              "typeName": {
                "type": "Identifier",
                "start": 3324,
                "end": 3325,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
            "start": 3327,
            "end": 3344,
            "name": {
              "type": "Identifier",
              "start": 3327,
              "end": 3328,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 3337,
              "end": 3344,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3343,
                "end": 3344,
                "typeName": {
                  "type": "Identifier",
                  "start": 3343,
                  "end": 3344,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
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
          "start": 3346,
          "end": 3367,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3347,
            "end": 3367,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 3349,
              "end": 3367,
              "key": {
                "type": "Identifier",
                "start": 3352,
                "end": 3353,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 3357,
                "end": 3358,
                "typeName": {
                  "type": "Identifier",
                  "start": 3357,
                  "end": 3358,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 3361,
                "end": 3365,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 3361,
                  "end": 3362,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3361,
                    "end": 3362,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 3363,
                  "end": 3364,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3363,
                    "end": 3364,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "optional": false,
              "readonly": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 3369,
          "end": 3390,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3370,
            "end": 3390,
            "typeAnnotation": {
              "type": "TSMappedType",
              "start": 3372,
              "end": 3390,
              "key": {
                "type": "Identifier",
                "start": 3375,
                "end": 3376,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 3380,
                "end": 3381,
                "typeName": {
                  "type": "Identifier",
                  "start": 3380,
                  "end": 3381,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 3384,
                "end": 3388,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 3384,
                  "end": 3385,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3384,
                    "end": 3385,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 3386,
                  "end": 3387,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3386,
                    "end": 3387,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "optional": false,
              "readonly": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 3392,
        "end": 3427,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3398,
            "end": 3404,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3398,
              "end": 3403,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 3398,
                "end": 3399,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3402,
                "end": 3403,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 3409,
            "end": 3415,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3409,
              "end": 3414,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 3409,
                "end": 3410,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3413,
                "end": 3414,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3429,
      "end": 3480,
      "id": {
        "type": "Identifier",
        "start": 3438,
        "end": 3441,
        "decorators": [],
        "name": "f80",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3441,
        "end": 3444,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3442,
            "end": 3443,
            "name": {
              "type": "Identifier",
              "start": 3442,
              "end": 3443,
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
          "start": 3445,
          "end": 3449,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3446,
            "end": 3449,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3448,
              "end": 3449,
              "typeName": {
                "type": "Identifier",
                "start": 3448,
                "end": 3449,
                "decorators": [],
                "name": "T",
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
        "start": 3450,
        "end": 3462,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3452,
          "end": 3462,
          "typeName": {
            "type": "Identifier",
            "start": 3452,
            "end": 3459,
            "decorators": [],
            "name": "Partial",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3459,
            "end": 3462,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 3460,
                "end": 3461,
                "typeName": {
                  "type": "Identifier",
                  "start": 3460,
                  "end": 3461,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 3463,
        "end": 3480,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 3469,
            "end": 3478,
            "argument": {
              "type": "Identifier",
              "start": 3476,
              "end": 3477,
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3482,
      "end": 3564,
      "id": {
        "type": "Identifier",
        "start": 3491,
        "end": 3494,
        "decorators": [],
        "name": "f81",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3494,
        "end": 3516,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3495,
            "end": 3496,
            "name": {
              "type": "Identifier",
              "start": 3495,
              "end": 3496,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 3498,
            "end": 3515,
            "name": {
              "type": "Identifier",
              "start": 3498,
              "end": 3499,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 3508,
              "end": 3515,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3514,
                "end": 3515,
                "typeName": {
                  "type": "Identifier",
                  "start": 3514,
                  "end": 3515,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
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
          "start": 3517,
          "end": 3521,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3518,
            "end": 3521,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3520,
              "end": 3521,
              "typeName": {
                "type": "Identifier",
                "start": 3520,
                "end": 3521,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 3523,
          "end": 3527,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3524,
            "end": 3527,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3526,
              "end": 3527,
              "typeName": {
                "type": "Identifier",
                "start": 3526,
                "end": 3527,
                "decorators": [],
                "name": "K",
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
        "start": 3528,
        "end": 3543,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3530,
          "end": 3543,
          "typeName": {
            "type": "Identifier",
            "start": 3530,
            "end": 3537,
            "decorators": [],
            "name": "Partial",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3537,
            "end": 3543,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 3538,
                "end": 3542,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 3538,
                  "end": 3539,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3538,
                    "end": 3539,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 3540,
                  "end": 3541,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3540,
                    "end": 3541,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ]
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 3544,
        "end": 3564,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 3550,
            "end": 3562,
            "argument": {
              "type": "MemberExpression",
              "start": 3557,
              "end": 3561,
              "object": {
                "type": "Identifier",
                "start": 3557,
                "end": 3558,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 3559,
                "end": 3560,
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": true
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3566,
      "end": 3693,
      "id": {
        "type": "Identifier",
        "start": 3575,
        "end": 3578,
        "decorators": [],
        "name": "f82",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3578,
        "end": 3625,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3579,
            "end": 3580,
            "name": {
              "type": "Identifier",
              "start": 3579,
              "end": 3580,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 3582,
            "end": 3600,
            "name": {
              "type": "Identifier",
              "start": 3582,
              "end": 3584,
              "decorators": [],
              "name": "K1",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 3593,
              "end": 3600,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3599,
                "end": 3600,
                "typeName": {
                  "type": "Identifier",
                  "start": 3599,
                  "end": 3600,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3602,
            "end": 3624,
            "name": {
              "type": "Identifier",
              "start": 3602,
              "end": 3604,
              "decorators": [],
              "name": "K2",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 3613,
              "end": 3624,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 3619,
                "end": 3624,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 3619,
                  "end": 3620,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3619,
                    "end": 3620,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 3621,
                  "end": 3623,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3621,
                    "end": 3623,
                    "decorators": [],
                    "name": "K1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
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
          "start": 3626,
          "end": 3630,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3627,
            "end": 3630,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3629,
              "end": 3630,
              "typeName": {
                "type": "Identifier",
                "start": 3629,
                "end": 3630,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 3632,
          "end": 3638,
          "decorators": [],
          "name": "k1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3634,
            "end": 3638,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3636,
              "end": 3638,
              "typeName": {
                "type": "Identifier",
                "start": 3636,
                "end": 3638,
                "decorators": [],
                "name": "K1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 3640,
          "end": 3646,
          "decorators": [],
          "name": "k2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3642,
            "end": 3646,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3644,
              "end": 3646,
              "typeName": {
                "type": "Identifier",
                "start": 3644,
                "end": 3646,
                "decorators": [],
                "name": "K2",
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
        "start": 3647,
        "end": 3667,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3649,
          "end": 3667,
          "typeName": {
            "type": "Identifier",
            "start": 3649,
            "end": 3656,
            "decorators": [],
            "name": "Partial",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3656,
            "end": 3667,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 3657,
                "end": 3666,
                "objectType": {
                  "type": "TSIndexedAccessType",
                  "start": 3657,
                  "end": 3662,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 3657,
                    "end": 3658,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3657,
                      "end": 3658,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 3659,
                    "end": 3661,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3659,
                      "end": 3661,
                      "decorators": [],
                      "name": "K1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 3663,
                  "end": 3665,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3663,
                    "end": 3665,
                    "decorators": [],
                    "name": "K2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ]
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 3668,
        "end": 3693,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 3674,
            "end": 3691,
            "argument": {
              "type": "MemberExpression",
              "start": 3681,
              "end": 3690,
              "object": {
                "type": "MemberExpression",
                "start": 3681,
                "end": 3686,
                "object": {
                  "type": "Identifier",
                  "start": 3681,
                  "end": 3682,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 3683,
                  "end": 3685,
                  "decorators": [],
                  "name": "k1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              },
              "property": {
                "type": "Identifier",
                "start": 3687,
                "end": 3689,
                "decorators": [],
                "name": "k2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": true
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3705,
      "end": 3751,
      "id": {
        "type": "Identifier",
        "start": 3710,
        "end": 3717,
        "decorators": [],
        "name": "Numeric",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3717,
        "end": 3720,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3718,
            "end": 3719,
            "name": {
              "type": "Identifier",
              "start": 3718,
              "end": 3719,
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
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 3723,
        "end": 3750,
        "key": {
          "type": "Identifier",
          "start": 3726,
          "end": 3727,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 3731,
          "end": 3738,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 3737,
            "end": 3738,
            "typeName": {
              "type": "Identifier",
              "start": 3737,
              "end": 3738,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 3742,
          "end": 3748
        },
        "optional": true,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3752,
      "end": 3831,
      "id": {
        "type": "Identifier",
        "start": 3761,
        "end": 3764,
        "decorators": [],
        "name": "f90",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3764,
        "end": 3789,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3765,
            "end": 3788,
            "name": {
              "type": "Identifier",
              "start": 3765,
              "end": 3766,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 3775,
              "end": 3788,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 3777,
                  "end": 3786,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3777,
                    "end": 3778,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3778,
                    "end": 3786,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3780,
                      "end": 3786
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 3792,
        "end": 3831,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3798,
            "end": 3829,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3804,
                "end": 3828,
                "id": {
                  "type": "Identifier",
                  "start": 3804,
                  "end": 3817,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3805,
                    "end": 3817,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3807,
                      "end": 3817,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3807,
                        "end": 3814,
                        "decorators": [],
                        "name": "Numeric",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 3814,
                        "end": 3817,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 3815,
                            "end": 3816,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3815,
                              "end": 3816,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 3820,
                  "end": 3828,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 3822,
                      "end": 3826,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 3822,
                        "end": 3823,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 3825,
                        "end": 3826,
                        "value": 1,
                        "raw": "1"
                      },
                      "method": false,
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
    {
      "type": "FunctionDeclaration",
      "start": 3833,
      "end": 3910,
      "id": {
        "type": "Identifier",
        "start": 3842,
        "end": 3843,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3843,
        "end": 3864,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3844,
            "end": 3863,
            "name": {
              "type": "Identifier",
              "start": 3844,
              "end": 3845,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 3854,
              "end": 3863,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 3856,
                  "end": 3861,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3856,
                    "end": 3857,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3857,
                    "end": 3861,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 3859,
                      "end": 3861,
                      "members": []
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3866,
        "end": 3878,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3868,
          "end": 3878,
          "typeName": {
            "type": "Identifier",
            "start": 3868,
            "end": 3875,
            "decorators": [],
            "name": "Partial",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3875,
            "end": 3878,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 3876,
                "end": 3877,
                "typeName": {
                  "type": "Identifier",
                  "start": 3876,
                  "end": 3877,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 3879,
        "end": 3910,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 3885,
            "end": 3908,
            "argument": {
              "type": "TSAsExpression",
              "start": 3892,
              "end": 3907,
              "expression": {
                "type": "TSNonNullExpression",
                "start": 3892,
                "end": 3902,
                "expression": {
                  "type": "Identifier",
                  "start": 3892,
                  "end": 3901,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3906,
                "end": 3907,
                "typeName": {
                  "type": "Identifier",
                  "start": 3906,
                  "end": 3907,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 3922,
      "end": 4025,
      "id": {
        "type": "Identifier",
        "start": 3932,
        "end": 3945,
        "decorators": [],
        "name": "SettingsTypes",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 3946,
        "end": 4025,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 3950,
            "end": 3983,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3950,
              "end": 3955,
              "decorators": [],
              "name": "audio",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3955,
              "end": 3982,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 3957,
                "end": 3982,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 3963,
                    "end": 3978,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3963,
                      "end": 3969,
                      "decorators": [],
                      "name": "volume",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3969,
                      "end": 3977,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3971,
                        "end": 3977
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
            "start": 3986,
            "end": 4023,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3986,
              "end": 3991,
              "decorators": [],
              "name": "video",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3991,
              "end": 4022,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 3993,
                "end": 4022,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 3999,
                    "end": 4018,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3999,
                      "end": 4009,
                      "decorators": [],
                      "name": "resolution",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4009,
                      "end": 4017,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 4011,
                        "end": 4017
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
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 4026,
      "end": 4115,
      "id": {
        "type": "Identifier",
        "start": 4036,
        "end": 4044,
        "decorators": [],
        "name": "Settings",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4044,
        "end": 4093,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4045,
            "end": 4092,
            "name": {
              "type": "Identifier",
              "start": 4045,
              "end": 4051,
              "decorators": [],
              "name": "Params",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSMappedType",
              "start": 4060,
              "end": 4092,
              "key": {
                "type": "Identifier",
                "start": 4063,
                "end": 4064,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 4068,
                "end": 4080,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 4074,
                  "end": 4080,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4074,
                    "end": 4080,
                    "decorators": [],
                    "name": "Params",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 4084,
                "end": 4090
              },
              "optional": true,
              "readonly": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 4094,
        "end": 4115,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 4098,
            "end": 4113,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 4098,
              "end": 4104,
              "decorators": [],
              "name": "config",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4104,
              "end": 4112,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4106,
                "end": 4112,
                "typeName": {
                  "type": "Identifier",
                  "start": 4106,
                  "end": 4112,
                  "decorators": [],
                  "name": "Params",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "type": "TSTypeAliasDeclaration",
      "start": 4116,
      "end": 4180,
      "id": {
        "type": "Identifier",
        "start": 4121,
        "end": 4144,
        "decorators": [],
        "name": "ConcreteSettingsResult1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 4147,
        "end": 4179,
        "typeName": {
          "type": "Identifier",
          "start": 4147,
          "end": 4155,
          "decorators": [],
          "name": "Settings",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 4155,
          "end": 4179,
          "params": [
            {
              "type": "TSIndexedAccessType",
              "start": 4156,
              "end": 4178,
              "objectType": {
                "type": "TSTypeReference",
                "start": 4156,
                "end": 4169,
                "typeName": {
                  "type": "Identifier",
                  "start": 4156,
                  "end": 4169,
                  "decorators": [],
                  "name": "SettingsTypes",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSLiteralType",
                "start": 4170,
                "end": 4177,
                "literal": {
                  "type": "Literal",
                  "start": 4170,
                  "end": 4177,
                  "value": "audio",
                  "raw": "\"audio\""
                }
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4181,
      "end": 4255,
      "id": {
        "type": "Identifier",
        "start": 4186,
        "end": 4209,
        "decorators": [],
        "name": "ConcreteSettingsResult2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 4212,
        "end": 4254,
        "typeName": {
          "type": "Identifier",
          "start": 4212,
          "end": 4220,
          "decorators": [],
          "name": "Settings",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 4220,
          "end": 4254,
          "params": [
            {
              "type": "TSIndexedAccessType",
              "start": 4221,
              "end": 4253,
              "objectType": {
                "type": "TSTypeReference",
                "start": 4221,
                "end": 4234,
                "typeName": {
                  "type": "Identifier",
                  "start": 4221,
                  "end": 4234,
                  "decorators": [],
                  "name": "SettingsTypes",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSUnionType",
                "start": 4235,
                "end": 4252,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 4235,
                    "end": 4242,
                    "literal": {
                      "type": "Literal",
                      "start": 4235,
                      "end": 4242,
                      "value": "audio",
                      "raw": "\"audio\""
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 4245,
                    "end": 4252,
                    "literal": {
                      "type": "Literal",
                      "start": 4245,
                      "end": 4252,
                      "value": "video",
                      "raw": "\"video\""
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4256,
      "end": 4343,
      "id": {
        "type": "Identifier",
        "start": 4261,
        "end": 4282,
        "decorators": [],
        "name": "GenericSettingsAccess",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4282,
        "end": 4313,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4283,
            "end": 4312,
            "name": {
              "type": "Identifier",
              "start": 4283,
              "end": 4284,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 4293,
              "end": 4312,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4299,
                "end": 4312,
                "typeName": {
                  "type": "Identifier",
                  "start": 4299,
                  "end": 4312,
                  "decorators": [],
                  "name": "SettingsTypes",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 4316,
        "end": 4342,
        "typeName": {
          "type": "Identifier",
          "start": 4316,
          "end": 4324,
          "decorators": [],
          "name": "Settings",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 4324,
          "end": 4342,
          "params": [
            {
              "type": "TSIndexedAccessType",
              "start": 4325,
              "end": 4341,
              "objectType": {
                "type": "TSTypeReference",
                "start": 4325,
                "end": 4338,
                "typeName": {
                  "type": "Identifier",
                  "start": 4325,
                  "end": 4338,
                  "decorators": [],
                  "name": "SettingsTypes",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 4339,
                "end": 4340,
                "typeName": {
                  "type": "Identifier",
                  "start": 4339,
                  "end": 4340,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4344,
      "end": 4405,
      "id": {
        "type": "Identifier",
        "start": 4349,
        "end": 4371,
        "decorators": [],
        "name": "GenericSettingsResult1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 4374,
        "end": 4404,
        "typeName": {
          "type": "Identifier",
          "start": 4374,
          "end": 4395,
          "decorators": [],
          "name": "GenericSettingsAccess",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 4395,
          "end": 4404,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 4396,
              "end": 4403,
              "literal": {
                "type": "Literal",
                "start": 4396,
                "end": 4403,
                "value": "audio",
                "raw": "\"audio\""
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4406,
      "end": 4477,
      "id": {
        "type": "Identifier",
        "start": 4411,
        "end": 4433,
        "decorators": [],
        "name": "GenericSettingsResult2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 4436,
        "end": 4476,
        "typeName": {
          "type": "Identifier",
          "start": 4436,
          "end": 4457,
          "decorators": [],
          "name": "GenericSettingsAccess",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 4457,
          "end": 4476,
          "params": [
            {
              "type": "TSUnionType",
              "start": 4458,
              "end": 4475,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 4458,
                  "end": 4465,
                  "literal": {
                    "type": "Literal",
                    "start": 4458,
                    "end": 4465,
                    "value": "audio",
                    "raw": "\"audio\""
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 4468,
                  "end": 4475,
                  "literal": {
                    "type": "Literal",
                    "start": 4468,
                    "end": 4475,
                    "value": "video",
                    "raw": "\"video\""
                  }
                }
              ]
            }
          ]
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
