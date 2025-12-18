__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 91,
        "end": 93
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 95
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 104,
                "end": 105
              },
              "typeArguments": null,
              "start": 104,
              "end": 105
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 94,
            "end": 105
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 108
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 107,
            "end": 108
          }
        ],
        "start": 93,
        "end": 109
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 113,
                "end": 114
              },
              "typeArguments": null,
              "start": 113,
              "end": 114
            },
            "start": 111,
            "end": 114
          },
          "start": 110,
          "end": 114
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 119,
                "end": 120
              },
              "typeArguments": null,
              "start": 119,
              "end": 120
            },
            "start": 117,
            "end": 120
          },
          "start": 116,
          "end": 120
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 132,
                  "end": 133
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 136,
                    "end": 140
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 143,
                    "end": 144
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 147,
                    "end": 148
                  },
                  "start": 136,
                  "end": 148
                },
                "definite": false,
                "start": 132,
                "end": 148
              }
            ],
            "declare": false,
            "start": 128,
            "end": 149
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 158,
                  "end": 159
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 162,
                    "end": 166
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 169,
                    "end": 170
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 173,
                    "end": 174
                  },
                  "start": 162,
                  "end": 174
                },
                "definite": false,
                "start": 158,
                "end": 174
              }
            ],
            "declare": false,
            "start": 154,
            "end": 175
          }
        ],
        "start": 122,
        "end": 177
      },
      "expression": false,
      "start": 82,
      "end": 177
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 201,
        "end": 203
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 204,
              "end": 205
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 214,
                "end": 215
              },
              "typeArguments": null,
              "start": 214,
              "end": 215
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 204,
            "end": 215
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 217,
              "end": 218
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 227,
                "end": 228
              },
              "typeArguments": null,
              "start": 227,
              "end": 228
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 217,
            "end": 228
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 230,
              "end": 231
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 230,
            "end": 231
          }
        ],
        "start": 203,
        "end": 232
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 236,
                "end": 237
              },
              "typeArguments": null,
              "start": 236,
              "end": 237
            },
            "start": 234,
            "end": 237
          },
          "start": 233,
          "end": 237
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 242,
                "end": 243
              },
              "typeArguments": null,
              "start": 242,
              "end": 243
            },
            "start": 240,
            "end": 243
          },
          "start": 239,
          "end": 243
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 248,
                "end": 249
              },
              "typeArguments": null,
              "start": 248,
              "end": 249
            },
            "start": 246,
            "end": 249
          },
          "start": 245,
          "end": 249
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 261,
                  "end": 262
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 265,
                    "end": 269
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 272,
                    "end": 273
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 276,
                    "end": 277
                  },
                  "start": 265,
                  "end": 277
                },
                "definite": false,
                "start": 261,
                "end": 277
              }
            ],
            "declare": false,
            "start": 257,
            "end": 278
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 287,
                  "end": 288
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 291,
                    "end": 295
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 298,
                    "end": 299
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 302,
                    "end": 303
                  },
                  "start": 291,
                  "end": 303
                },
                "definite": false,
                "start": 287,
                "end": 303
              }
            ],
            "declare": false,
            "start": 283,
            "end": 304
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 324,
                  "end": 326
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 329,
                    "end": 333
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 336,
                    "end": 337
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 340,
                    "end": 341
                  },
                  "start": 329,
                  "end": 341
                },
                "definite": false,
                "start": 324,
                "end": 341
              }
            ],
            "declare": false,
            "start": 320,
            "end": 342
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 351,
                  "end": 353
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 356,
                    "end": 360
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 363,
                    "end": 364
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 367,
                    "end": 368
                  },
                  "start": 356,
                  "end": 368
                },
                "definite": false,
                "start": 351,
                "end": 368
              }
            ],
            "declare": false,
            "start": 347,
            "end": 369
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r2a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 389,
                  "end": 392
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 395,
                    "end": 399
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 402,
                    "end": 403
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 406,
                    "end": 407
                  },
                  "start": 395,
                  "end": 407
                },
                "definite": false,
                "start": 389,
                "end": 407
              }
            ],
            "declare": false,
            "start": 385,
            "end": 408
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r2b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 417,
                  "end": 420
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 423,
                    "end": 427
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 430,
                    "end": 431
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 434,
                    "end": 435
                  },
                  "start": 423,
                  "end": 435
                },
                "definite": false,
                "start": 417,
                "end": 435
              }
            ],
            "declare": false,
            "start": 413,
            "end": 436
          }
        ],
        "start": 251,
        "end": 438
      },
      "expression": false,
      "start": 192,
      "end": 438
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 465,
        "end": 467
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 468,
              "end": 469
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 478,
                "end": 479
              },
              "typeArguments": null,
              "start": 478,
              "end": 479
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 468,
            "end": 479
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 481,
              "end": 482
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 491,
                "end": 495
              },
              "typeArguments": null,
              "start": 491,
              "end": 495
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 481,
            "end": 495
          }
        ],
        "start": 467,
        "end": 496
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 500,
                "end": 501
              },
              "typeArguments": null,
              "start": 500,
              "end": 501
            },
            "start": 498,
            "end": 501
          },
          "start": 497,
          "end": 501
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 506,
                "end": 507
              },
              "typeArguments": null,
              "start": 506,
              "end": 507
            },
            "start": 504,
            "end": 507
          },
          "start": 503,
          "end": 507
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 519,
                  "end": 520
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 523,
                    "end": 527
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 530,
                    "end": 531
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 534,
                    "end": 535
                  },
                  "start": 523,
                  "end": 535
                },
                "definite": false,
                "start": 519,
                "end": 535
              }
            ],
            "declare": false,
            "start": 515,
            "end": 536
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 545,
                  "end": 546
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 549,
                    "end": 553
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 556,
                    "end": 557
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 560,
                    "end": 561
                  },
                  "start": 549,
                  "end": 561
                },
                "definite": false,
                "start": 545,
                "end": 561
              }
            ],
            "declare": false,
            "start": 541,
            "end": 562
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 582,
                  "end": 584
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 587,
                    "end": 591
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 594,
                    "end": 595
                  },
                  "alternate": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 602,
                      "end": 606
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 598,
                    "end": 608
                  },
                  "start": 587,
                  "end": 608
                },
                "definite": false,
                "start": 582,
                "end": 608
              }
            ],
            "declare": false,
            "start": 578,
            "end": 609
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 619,
                  "end": 621
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 624,
                    "end": 628
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 635,
                      "end": 639
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 631,
                    "end": 641
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 644,
                    "end": 645
                  },
                  "start": 624,
                  "end": 645
                },
                "definite": false,
                "start": 619,
                "end": 645
              }
            ],
            "declare": false,
            "start": 615,
            "end": 646
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 666,
                  "end": 668
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 671,
                    "end": 675
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 678,
                    "end": 679
                  },
                  "alternate": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 686,
                      "end": 690
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 682,
                    "end": 692
                  },
                  "start": 671,
                  "end": 692
                },
                "definite": false,
                "start": 666,
                "end": 692
              }
            ],
            "declare": false,
            "start": 662,
            "end": 693
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 703,
                  "end": 705
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 708,
                    "end": 712
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 719,
                      "end": 723
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 715,
                    "end": 725
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 728,
                    "end": 729
                  },
                  "start": 708,
                  "end": 729
                },
                "definite": false,
                "start": 703,
                "end": 729
              }
            ],
            "declare": false,
            "start": 699,
            "end": 730
          }
        ],
        "start": 509,
        "end": 732
      },
      "expression": false,
      "start": 456,
      "end": 732
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null,
        "start": 745,
        "end": 747
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 750,
              "end": 753
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 755,
                "end": 761
              },
              "start": 753,
              "end": 761
            },
            "accessibility": null,
            "static": false,
            "start": 750,
            "end": 762
          }
        ],
        "start": 748,
        "end": 764
      },
      "declare": false,
      "start": 735,
      "end": 764
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 771,
        "end": 773
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 776,
              "end": 779
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 781,
                "end": 787
              },
              "start": 779,
              "end": 787
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 776,
            "end": 788
          }
        ],
        "start": 774,
        "end": 790
      },
      "abstract": false,
      "declare": false,
      "start": 765,
      "end": 790
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 797,
        "end": 799
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 800,
              "end": 801
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 800,
            "end": 801
          }
        ],
        "start": 799,
        "end": 802
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 805,
              "end": 808
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 810,
                  "end": 811
                },
                "typeArguments": null,
                "start": 810,
                "end": 811
              },
              "start": 808,
              "end": 811
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 805,
            "end": 812
          }
        ],
        "start": 803,
        "end": 814
      },
      "abstract": false,
      "declare": false,
      "start": 791,
      "end": 814
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 820,
        "end": 821
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 824,
              "end": 825
            },
            "initializer": null,
            "computed": false,
            "start": 824,
            "end": 825
          }
        ],
        "start": 822,
        "end": 827
      },
      "const": false,
      "declare": false,
      "start": 815,
      "end": 827
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 837,
        "end": 838
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 841,
        "end": 844
      },
      "expression": false,
      "start": 828,
      "end": 844
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 855,
        "end": 856
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 874,
                    "end": 877
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 880,
                    "end": 881
                  },
                  "definite": false,
                  "start": 874,
                  "end": 881
                }
              ],
              "declare": false,
              "start": 870,
              "end": 882
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 863,
            "end": 882
          }
        ],
        "start": 857,
        "end": 884
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 845,
      "end": 884
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 891,
        "end": 892
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 895,
              "end": 898
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 900,
                "end": 906
              },
              "start": 898,
              "end": 906
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 895,
            "end": 906
          }
        ],
        "start": 893,
        "end": 908
      },
      "abstract": false,
      "declare": false,
      "start": 885,
      "end": 908
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 919,
        "end": 920
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 938,
                    "end": 941
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 944,
                    "end": 945
                  },
                  "definite": false,
                  "start": 938,
                  "end": 945
                }
              ],
              "declare": false,
              "start": 934,
              "end": 946
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 927,
            "end": 946
          }
        ],
        "start": 921,
        "end": 948
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 909,
      "end": 948
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 959,
        "end": 961
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 962,
              "end": 963
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null,
                "start": 972,
                "end": 978
              },
              "typeArguments": null,
              "start": 972,
              "end": 978
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 962,
            "end": 978
          }
        ],
        "start": 961,
        "end": 979
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 983,
                "end": 984
              },
              "typeArguments": null,
              "start": 983,
              "end": 984
            },
            "start": 981,
            "end": 984
          },
          "start": 980,
          "end": 984
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 996,
                  "end": 998
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1001,
                    "end": 1005
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1008,
                    "end": 1009
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 1012,
                    "end": 1016
                  },
                  "start": 1001,
                  "end": 1016
                },
                "definite": false,
                "start": 996,
                "end": 1016
              }
            ],
            "declare": false,
            "start": 992,
            "end": 1017
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1032,
                  "end": 1034
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1037,
                    "end": 1041
                  },
                  "consequent": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 1044,
                    "end": 1048
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1051,
                    "end": 1052
                  },
                  "start": 1037,
                  "end": 1052
                },
                "definite": false,
                "start": 1032,
                "end": 1052
              }
            ],
            "declare": false,
            "start": 1028,
            "end": 1053
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1079,
                        "end": 1088
                      },
                      "typeArguments": null,
                      "start": 1072,
                      "end": 1088
                    },
                    "start": 1070,
                    "end": 1088
                  },
                  "start": 1069,
                  "end": 1088
                },
                "init": null,
                "definite": false,
                "start": 1069,
                "end": 1088
              }
            ],
            "declare": false,
            "start": 1065,
            "end": 1089
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r0b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1098,
                  "end": 1101
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1104,
                    "end": 1108
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1111,
                    "end": 1112
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1115,
                    "end": 1116
                  },
                  "start": 1104,
                  "end": 1116
                },
                "definite": false,
                "start": 1098,
                "end": 1116
              }
            ],
            "declare": false,
            "start": 1094,
            "end": 1117
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r0b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1132,
                  "end": 1135
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1138,
                    "end": 1142
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1145,
                    "end": 1146
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1149,
                    "end": 1150
                  },
                  "start": 1138,
                  "end": 1150
                },
                "definite": false,
                "start": 1132,
                "end": 1150
              }
            ],
            "declare": false,
            "start": 1128,
            "end": 1151
          }
        ],
        "start": 986,
        "end": 1159
      },
      "expression": false,
      "start": 950,
      "end": 1159
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1170,
        "end": 1172
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1173,
              "end": 1174
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null,
                "start": 1183,
                "end": 1189
              },
              "typeArguments": null,
              "start": 1183,
              "end": 1189
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1173,
            "end": 1189
          }
        ],
        "start": 1172,
        "end": 1190
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1194,
                "end": 1195
              },
              "typeArguments": null,
              "start": 1194,
              "end": 1195
            },
            "start": 1192,
            "end": 1195
          },
          "start": 1191,
          "end": 1195
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1207,
                  "end": 1209
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1212,
                    "end": 1216
                  },
                  "consequent": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1219,
                    "end": 1220
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1223,
                    "end": 1224
                  },
                  "start": 1212,
                  "end": 1224
                },
                "definite": false,
                "start": 1207,
                "end": 1224
              }
            ],
            "declare": false,
            "start": 1203,
            "end": 1225
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1240,
                  "end": 1242
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1245,
                    "end": 1249
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1252,
                    "end": 1253
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1256,
                    "end": 1257
                  },
                  "start": 1245,
                  "end": 1257
                },
                "definite": false,
                "start": 1240,
                "end": 1257
              }
            ],
            "declare": false,
            "start": 1236,
            "end": 1258
          }
        ],
        "start": 1197,
        "end": 1266
      },
      "expression": false,
      "start": 1161,
      "end": 1266
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1277,
        "end": 1279
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1280,
              "end": 1281
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "String",
                "optional": false,
                "typeAnnotation": null,
                "start": 1290,
                "end": 1296
              },
              "typeArguments": null,
              "start": 1290,
              "end": 1296
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1280,
            "end": 1296
          }
        ],
        "start": 1279,
        "end": 1297
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1301,
                "end": 1302
              },
              "typeArguments": null,
              "start": 1301,
              "end": 1302
            },
            "start": 1299,
            "end": 1302
          },
          "start": 1298,
          "end": 1302
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1314,
                  "end": 1316
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1319,
                    "end": 1323
                  },
                  "consequent": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 1326,
                    "end": 1328
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1331,
                    "end": 1332
                  },
                  "start": 1319,
                  "end": 1332
                },
                "definite": false,
                "start": 1314,
                "end": 1332
              }
            ],
            "declare": false,
            "start": 1310,
            "end": 1333
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1348,
                  "end": 1350
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1353,
                    "end": 1357
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1360,
                    "end": 1361
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 1364,
                    "end": 1366
                  },
                  "start": 1353,
                  "end": 1366
                },
                "definite": false,
                "start": 1348,
                "end": 1366
              }
            ],
            "declare": false,
            "start": 1344,
            "end": 1367
          }
        ],
        "start": 1304,
        "end": 1375
      },
      "expression": false,
      "start": 1268,
      "end": 1375
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1386,
        "end": 1388
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1389,
              "end": 1390
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Boolean",
                "optional": false,
                "typeAnnotation": null,
                "start": 1399,
                "end": 1406
              },
              "typeArguments": null,
              "start": 1399,
              "end": 1406
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1389,
            "end": 1406
          }
        ],
        "start": 1388,
        "end": 1407
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1411,
                "end": 1412
              },
              "typeArguments": null,
              "start": 1411,
              "end": 1412
            },
            "start": 1409,
            "end": 1412
          },
          "start": 1408,
          "end": 1412
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1424,
                  "end": 1426
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1429,
                    "end": 1433
                  },
                  "consequent": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1436,
                    "end": 1440
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1443,
                    "end": 1444
                  },
                  "start": 1429,
                  "end": 1444
                },
                "definite": false,
                "start": 1424,
                "end": 1444
              }
            ],
            "declare": false,
            "start": 1420,
            "end": 1445
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1460,
                  "end": 1462
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1465,
                    "end": 1469
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1472,
                    "end": 1473
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1476,
                    "end": 1480
                  },
                  "start": 1465,
                  "end": 1480
                },
                "definite": false,
                "start": 1460,
                "end": 1480
              }
            ],
            "declare": false,
            "start": 1456,
            "end": 1481
          }
        ],
        "start": 1414,
        "end": 1489
      },
      "expression": false,
      "start": 1377,
      "end": 1489
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1500,
        "end": 1502
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1503,
              "end": 1504
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 1513,
                "end": 1517
              },
              "typeArguments": null,
              "start": 1513,
              "end": 1517
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1503,
            "end": 1517
          }
        ],
        "start": 1502,
        "end": 1518
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1522,
                "end": 1523
              },
              "typeArguments": null,
              "start": 1522,
              "end": 1523
            },
            "start": 1520,
            "end": 1523
          },
          "start": 1519,
          "end": 1523
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1535,
                  "end": 1537
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1540,
                    "end": 1544
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1551,
                      "end": 1555
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1547,
                    "end": 1557
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1560,
                    "end": 1561
                  },
                  "start": 1540,
                  "end": 1561
                },
                "definite": false,
                "start": 1535,
                "end": 1561
              }
            ],
            "declare": false,
            "start": 1531,
            "end": 1562
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1577,
                  "end": 1579
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1582,
                    "end": 1586
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1589,
                    "end": 1590
                  },
                  "alternate": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1597,
                      "end": 1601
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1593,
                    "end": 1603
                  },
                  "start": 1582,
                  "end": 1603
                },
                "definite": false,
                "start": 1577,
                "end": 1603
              }
            ],
            "declare": false,
            "start": 1573,
            "end": 1604
          }
        ],
        "start": 1525,
        "end": 1612
      },
      "expression": false,
      "start": 1491,
      "end": 1612
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1623,
        "end": 1625
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1626,
              "end": 1627
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "RegExp",
                "optional": false,
                "typeAnnotation": null,
                "start": 1636,
                "end": 1642
              },
              "typeArguments": null,
              "start": 1636,
              "end": 1642
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1626,
            "end": 1642
          }
        ],
        "start": 1625,
        "end": 1643
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1647,
                "end": 1648
              },
              "typeArguments": null,
              "start": 1647,
              "end": 1648
            },
            "start": 1645,
            "end": 1648
          },
          "start": 1644,
          "end": 1648
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1660,
                  "end": 1662
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1665,
                    "end": 1669
                  },
                  "consequent": {
                    "type": "Literal",
                    "value": null,
                    "raw": "/1/",
                    "regex": {
                      "pattern": "1",
                      "flags": ""
                    },
                    "start": 1672,
                    "end": 1675
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1678,
                    "end": 1679
                  },
                  "start": 1665,
                  "end": 1679
                },
                "definite": false,
                "start": 1660,
                "end": 1679
              }
            ],
            "declare": false,
            "start": 1656,
            "end": 1680
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1695,
                  "end": 1697
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1700,
                    "end": 1704
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1707,
                    "end": 1708
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": null,
                    "raw": "/1/",
                    "regex": {
                      "pattern": "1",
                      "flags": ""
                    },
                    "start": 1711,
                    "end": 1714
                  },
                  "start": 1700,
                  "end": 1714
                },
                "definite": false,
                "start": 1695,
                "end": 1714
              }
            ],
            "declare": false,
            "start": 1691,
            "end": 1715
          }
        ],
        "start": 1650,
        "end": 1723
      },
      "expression": false,
      "start": 1614,
      "end": 1723
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1734,
        "end": 1737
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1738,
              "end": 1739
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1750,
                    "end": 1753
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1755,
                      "end": 1761
                    },
                    "start": 1753,
                    "end": 1761
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1750,
                  "end": 1761
                }
              ],
              "start": 1748,
              "end": 1763
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1738,
            "end": 1763
          }
        ],
        "start": 1737,
        "end": 1764
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1768,
                "end": 1769
              },
              "typeArguments": null,
              "start": 1768,
              "end": 1769
            },
            "start": 1766,
            "end": 1769
          },
          "start": 1765,
          "end": 1769
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1781,
                  "end": 1783
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1786,
                    "end": 1790
                  },
                  "consequent": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1795,
                          "end": 1798
                        },
                        "value": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1800,
                          "end": 1801
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1795,
                        "end": 1801
                      }
                    ],
                    "start": 1793,
                    "end": 1803
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1806,
                    "end": 1807
                  },
                  "start": 1786,
                  "end": 1807
                },
                "definite": false,
                "start": 1781,
                "end": 1807
              }
            ],
            "declare": false,
            "start": 1777,
            "end": 1808
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1823,
                  "end": 1825
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1828,
                    "end": 1832
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1835,
                    "end": 1836
                  },
                  "alternate": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1841,
                          "end": 1844
                        },
                        "value": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1846,
                          "end": 1847
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 1841,
                        "end": 1847
                      }
                    ],
                    "start": 1839,
                    "end": 1849
                  },
                  "start": 1828,
                  "end": 1849
                },
                "definite": false,
                "start": 1823,
                "end": 1849
              }
            ],
            "declare": false,
            "start": 1819,
            "end": 1850
          }
        ],
        "start": 1771,
        "end": 1858
      },
      "expression": false,
      "start": 1725,
      "end": 1858
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1869,
        "end": 1872
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1873,
              "end": 1874
            },
            "constraint": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1889,
                  "end": 1893
                },
                "start": 1886,
                "end": 1893
              },
              "start": 1883,
              "end": 1893
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1873,
            "end": 1893
          }
        ],
        "start": 1872,
        "end": 1894
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1898,
                "end": 1899
              },
              "typeArguments": null,
              "start": 1898,
              "end": 1899
            },
            "start": 1896,
            "end": 1899
          },
          "start": 1895,
          "end": 1899
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1911,
                  "end": 1913
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1916,
                    "end": 1920
                  },
                  "consequent": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1929,
                      "end": 1932
                    },
                    "id": null,
                    "generator": false,
                    "start": 1923,
                    "end": 1932
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1935,
                    "end": 1936
                  },
                  "start": 1916,
                  "end": 1936
                },
                "definite": false,
                "start": 1911,
                "end": 1936
              }
            ],
            "declare": false,
            "start": 1907,
            "end": 1937
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1952,
                  "end": 1954
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1957,
                    "end": 1961
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1964,
                    "end": 1965
                  },
                  "alternate": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1974,
                      "end": 1977
                    },
                    "id": null,
                    "generator": false,
                    "start": 1968,
                    "end": 1977
                  },
                  "start": 1957,
                  "end": 1977
                },
                "definite": false,
                "start": 1952,
                "end": 1977
              }
            ],
            "declare": false,
            "start": 1948,
            "end": 1978
          }
        ],
        "start": 1901,
        "end": 1986
      },
      "expression": false,
      "start": 1860,
      "end": 1986
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1997,
        "end": 2000
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2001,
              "end": 2002
            },
            "constraint": {
              "type": "TSFunctionType",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2012,
                      "end": 2013
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2012,
                    "end": 2013
                  }
                ],
                "start": 2011,
                "end": 2014
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2018,
                        "end": 2019
                      },
                      "typeArguments": null,
                      "start": 2018,
                      "end": 2019
                    },
                    "start": 2016,
                    "end": 2019
                  },
                  "start": 2015,
                  "end": 2019
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2024,
                    "end": 2025
                  },
                  "typeArguments": null,
                  "start": 2024,
                  "end": 2025
                },
                "start": 2021,
                "end": 2025
              },
              "start": 2011,
              "end": 2025
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2001,
            "end": 2025
          }
        ],
        "start": 2000,
        "end": 2026
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2030,
                "end": 2031
              },
              "typeArguments": null,
              "start": 2030,
              "end": 2031
            },
            "start": 2028,
            "end": 2031
          },
          "start": 2027,
          "end": 2031
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2043,
                  "end": 2045
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 2048,
                    "end": 2052
                  },
                  "consequent": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2056,
                            "end": 2057
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 2056,
                          "end": 2057
                        }
                      ],
                      "start": 2055,
                      "end": 2058
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2062,
                              "end": 2063
                            },
                            "typeArguments": null,
                            "start": 2062,
                            "end": 2063
                          },
                          "start": 2060,
                          "end": 2063
                        },
                        "start": 2059,
                        "end": 2063
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2077,
                            "end": 2078
                          },
                          "start": 2070,
                          "end": 2078
                        }
                      ],
                      "start": 2068,
                      "end": 2080
                    },
                    "id": null,
                    "generator": false,
                    "start": 2055,
                    "end": 2080
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2083,
                    "end": 2084
                  },
                  "start": 2048,
                  "end": 2084
                },
                "definite": false,
                "start": 2043,
                "end": 2084
              }
            ],
            "declare": false,
            "start": 2039,
            "end": 2085
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r8b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2100,
                  "end": 2103
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 2106,
                    "end": 2110
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2113,
                    "end": 2114
                  },
                  "alternate": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2118,
                            "end": 2119
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 2118,
                          "end": 2119
                        }
                      ],
                      "start": 2117,
                      "end": 2120
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2124,
                              "end": 2125
                            },
                            "typeArguments": null,
                            "start": 2124,
                            "end": 2125
                          },
                          "start": 2122,
                          "end": 2125
                        },
                        "start": 2121,
                        "end": 2125
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2139,
                            "end": 2140
                          },
                          "start": 2132,
                          "end": 2140
                        }
                      ],
                      "start": 2130,
                      "end": 2142
                    },
                    "id": null,
                    "generator": false,
                    "start": 2117,
                    "end": 2142
                  },
                  "start": 2106,
                  "end": 2142
                },
                "definite": false,
                "start": 2100,
                "end": 2142
              }
            ],
            "declare": false,
            "start": 2096,
            "end": 2143
          }
        ],
        "start": 2033,
        "end": 2202
      },
      "expression": false,
      "start": 1988,
      "end": 2202
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2213,
        "end": 2216
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2217,
              "end": 2218
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2227,
                "end": 2229
              },
              "typeArguments": null,
              "start": 2227,
              "end": 2229
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2217,
            "end": 2229
          }
        ],
        "start": 2216,
        "end": 2230
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2234,
                "end": 2235
              },
              "typeArguments": null,
              "start": 2234,
              "end": 2235
            },
            "start": 2232,
            "end": 2235
          },
          "start": 2231,
          "end": 2235
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2251,
                        "end": 2253
                      },
                      "typeArguments": null,
                      "start": 2251,
                      "end": 2253
                    },
                    "start": 2249,
                    "end": 2253
                  },
                  "start": 2247,
                  "end": 2253
                },
                "init": null,
                "definite": false,
                "start": 2247,
                "end": 2253
              }
            ],
            "declare": false,
            "start": 2243,
            "end": 2254
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2263,
                  "end": 2265
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 2268,
                    "end": 2272
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2275,
                    "end": 2277
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2280,
                    "end": 2281
                  },
                  "start": 2268,
                  "end": 2281
                },
                "definite": false,
                "start": 2263,
                "end": 2281
              }
            ],
            "declare": false,
            "start": 2259,
            "end": 2282
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2297,
                  "end": 2299
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 2302,
                    "end": 2306
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2309,
                    "end": 2310
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2313,
                    "end": 2315
                  },
                  "start": 2302,
                  "end": 2315
                },
                "definite": false,
                "start": 2297,
                "end": 2315
              }
            ],
            "declare": false,
            "start": 2293,
            "end": 2316
          }
        ],
        "start": 2237,
        "end": 2324
      },
      "expression": false,
      "start": 2204,
      "end": 2324
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2335,
        "end": 2338
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2339,
              "end": 2340
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2349,
                "end": 2351
              },
              "typeArguments": null,
              "start": 2349,
              "end": 2351
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2339,
            "end": 2351
          }
        ],
        "start": 2338,
        "end": 2352
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2356,
                "end": 2357
              },
              "typeArguments": null,
              "start": 2356,
              "end": 2357
            },
            "start": 2354,
            "end": 2357
          },
          "start": 2353,
          "end": 2357
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2373,
                        "end": 2375
                      },
                      "typeArguments": null,
                      "start": 2373,
                      "end": 2375
                    },
                    "start": 2371,
                    "end": 2375
                  },
                  "start": 2369,
                  "end": 2375
                },
                "init": null,
                "definite": false,
                "start": 2369,
                "end": 2375
              }
            ],
            "declare": false,
            "start": 2365,
            "end": 2376
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2385,
                  "end": 2388
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 2391,
                    "end": 2395
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2398,
                    "end": 2400
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2403,
                    "end": 2404
                  },
                  "start": 2391,
                  "end": 2404
                },
                "definite": false,
                "start": 2385,
                "end": 2404
              }
            ],
            "declare": false,
            "start": 2381,
            "end": 2405
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2420,
                  "end": 2423
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 2426,
                    "end": 2430
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2433,
                    "end": 2434
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2437,
                    "end": 2439
                  },
                  "start": 2426,
                  "end": 2439
                },
                "definite": false,
                "start": 2420,
                "end": 2439
              }
            ],
            "declare": false,
            "start": 2416,
            "end": 2440
          }
        ],
        "start": 2359,
        "end": 2448
      },
      "expression": false,
      "start": 2326,
      "end": 2448
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2459,
        "end": 2462
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2463,
              "end": 2464
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2473,
                "end": 2475
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 2476,
                    "end": 2482
                  }
                ],
                "start": 2475,
                "end": 2483
              },
              "start": 2473,
              "end": 2483
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2463,
            "end": 2483
          }
        ],
        "start": 2462,
        "end": 2484
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2488,
                "end": 2489
              },
              "typeArguments": null,
              "start": 2488,
              "end": 2489
            },
            "start": 2486,
            "end": 2489
          },
          "start": 2485,
          "end": 2489
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2505,
                        "end": 2507
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 2508,
                            "end": 2514
                          }
                        ],
                        "start": 2507,
                        "end": 2515
                      },
                      "start": 2505,
                      "end": 2515
                    },
                    "start": 2503,
                    "end": 2515
                  },
                  "start": 2501,
                  "end": 2515
                },
                "init": null,
                "definite": false,
                "start": 2501,
                "end": 2515
              }
            ],
            "declare": false,
            "start": 2497,
            "end": 2516
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r12",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2525,
                  "end": 2528
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 2531,
                    "end": 2535
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2538,
                    "end": 2540
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2543,
                    "end": 2544
                  },
                  "start": 2531,
                  "end": 2544
                },
                "definite": false,
                "start": 2525,
                "end": 2544
              }
            ],
            "declare": false,
            "start": 2521,
            "end": 2545
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r12",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2560,
                  "end": 2563
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 2566,
                    "end": 2570
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2573,
                    "end": 2574
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2577,
                    "end": 2579
                  },
                  "start": 2566,
                  "end": 2579
                },
                "definite": false,
                "start": 2560,
                "end": 2579
              }
            ],
            "declare": false,
            "start": 2556,
            "end": 2580
          }
        ],
        "start": 2491,
        "end": 2588
      },
      "expression": false,
      "start": 2450,
      "end": 2588
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f16",
        "optional": false,
        "typeAnnotation": null,
        "start": 2599,
        "end": 2602
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2603,
              "end": 2604
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 2613,
                "end": 2614
              },
              "typeArguments": null,
              "start": 2613,
              "end": 2614
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2603,
            "end": 2614
          }
        ],
        "start": 2602,
        "end": 2615
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2619,
                "end": 2620
              },
              "typeArguments": null,
              "start": 2619,
              "end": 2620
            },
            "start": 2617,
            "end": 2620
          },
          "start": 2616,
          "end": 2620
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r13",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2632,
                  "end": 2635
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 2638,
                    "end": 2642
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2645,
                    "end": 2646
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2649,
                    "end": 2650
                  },
                  "start": 2638,
                  "end": 2650
                },
                "definite": false,
                "start": 2632,
                "end": 2650
              }
            ],
            "declare": false,
            "start": 2628,
            "end": 2651
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r13",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2666,
                  "end": 2669
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 2672,
                    "end": 2676
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2679,
                    "end": 2680
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2683,
                    "end": 2684
                  },
                  "start": 2672,
                  "end": 2684
                },
                "definite": false,
                "start": 2666,
                "end": 2684
              }
            ],
            "declare": false,
            "start": 2662,
            "end": 2685
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r14",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2701,
                  "end": 2704
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 2707,
                    "end": 2711
                  },
                  "consequent": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2714,
                      "end": 2715
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2716,
                      "end": 2717
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2714,
                    "end": 2717
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2720,
                    "end": 2721
                  },
                  "start": 2707,
                  "end": 2721
                },
                "definite": false,
                "start": 2701,
                "end": 2721
              }
            ],
            "declare": false,
            "start": 2697,
            "end": 2722
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r14",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2737,
                  "end": 2740
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 2743,
                    "end": 2747
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2750,
                    "end": 2751
                  },
                  "alternate": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2754,
                      "end": 2755
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2756,
                      "end": 2757
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2754,
                    "end": 2757
                  },
                  "start": 2743,
                  "end": 2757
                },
                "definite": false,
                "start": 2737,
                "end": 2757
              }
            ],
            "declare": false,
            "start": 2733,
            "end": 2758
          }
        ],
        "start": 2622,
        "end": 2766
      },
      "expression": false,
      "start": 2590,
      "end": 2766
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f17",
        "optional": false,
        "typeAnnotation": null,
        "start": 2777,
        "end": 2780
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2781,
              "end": 2782
            },
            "constraint": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 2798,
                "end": 2799
              },
              "typeArguments": null,
              "start": 2791,
              "end": 2799
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2781,
            "end": 2799
          }
        ],
        "start": 2780,
        "end": 2800
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2804,
                "end": 2805
              },
              "typeArguments": null,
              "start": 2804,
              "end": 2805
            },
            "start": 2802,
            "end": 2805
          },
          "start": 2801,
          "end": 2805
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "af",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2828,
                        "end": 2829
                      },
                      "typeArguments": null,
                      "start": 2821,
                      "end": 2829
                    },
                    "start": 2819,
                    "end": 2829
                  },
                  "start": 2817,
                  "end": 2829
                },
                "init": null,
                "definite": false,
                "start": 2817,
                "end": 2829
              }
            ],
            "declare": false,
            "start": 2813,
            "end": 2830
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r15",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2839,
                  "end": 2842
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 2845,
                    "end": 2849
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "af",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2852,
                    "end": 2854
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2857,
                    "end": 2858
                  },
                  "start": 2845,
                  "end": 2858
                },
                "definite": false,
                "start": 2839,
                "end": 2858
              }
            ],
            "declare": false,
            "start": 2835,
            "end": 2859
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r15",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2874,
                  "end": 2877
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 2880,
                    "end": 2884
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2887,
                    "end": 2888
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "af",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2891,
                    "end": 2893
                  },
                  "start": 2880,
                  "end": 2893
                },
                "definite": false,
                "start": 2874,
                "end": 2893
              }
            ],
            "declare": false,
            "start": 2870,
            "end": 2894
          }
        ],
        "start": 2807,
        "end": 2902
      },
      "expression": false,
      "start": 2768,
      "end": 2902
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f18",
        "optional": false,
        "typeAnnotation": null,
        "start": 2913,
        "end": 2916
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2917,
              "end": 2918
            },
            "constraint": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 2934,
                "end": 2935
              },
              "typeArguments": null,
              "start": 2927,
              "end": 2935
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2917,
            "end": 2935
          }
        ],
        "start": 2916,
        "end": 2936
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2940,
                "end": 2941
              },
              "typeArguments": null,
              "start": 2940,
              "end": 2941
            },
            "start": 2938,
            "end": 2941
          },
          "start": 2937,
          "end": 2941
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ac",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2964,
                        "end": 2965
                      },
                      "typeArguments": null,
                      "start": 2957,
                      "end": 2965
                    },
                    "start": 2955,
                    "end": 2965
                  },
                  "start": 2953,
                  "end": 2965
                },
                "init": null,
                "definite": false,
                "start": 2953,
                "end": 2965
              }
            ],
            "declare": false,
            "start": 2949,
            "end": 2966
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r16",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2975,
                  "end": 2978
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 2981,
                    "end": 2985
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ac",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2988,
                    "end": 2990
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2993,
                    "end": 2994
                  },
                  "start": 2981,
                  "end": 2994
                },
                "definite": false,
                "start": 2975,
                "end": 2994
              }
            ],
            "declare": false,
            "start": 2971,
            "end": 2995
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r16",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3010,
                  "end": 3013
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 3016,
                    "end": 3020
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3023,
                    "end": 3024
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ac",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3027,
                    "end": 3029
                  },
                  "start": 3016,
                  "end": 3029
                },
                "definite": false,
                "start": 3010,
                "end": 3029
              }
            ],
            "declare": false,
            "start": 3006,
            "end": 3030
          }
        ],
        "start": 2943,
        "end": 3038
      },
      "expression": false,
      "start": 2904,
      "end": 3038
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f19",
        "optional": false,
        "typeAnnotation": null,
        "start": 3049,
        "end": 3052
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3053,
              "end": 3054
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3053,
            "end": 3054
          }
        ],
        "start": 3052,
        "end": 3055
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3059,
                "end": 3060
              },
              "typeArguments": null,
              "start": 3059,
              "end": 3060
            },
            "start": 3057,
            "end": 3060
          },
          "start": 3056,
          "end": 3060
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f17",
              "optional": false,
              "typeAnnotation": null,
              "start": 3077,
              "end": 3080
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3081,
                    "end": 3082
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3091,
                      "end": 3092
                    },
                    "typeArguments": null,
                    "start": 3091,
                    "end": 3092
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3081,
                  "end": 3092
                }
              ],
              "start": 3080,
              "end": 3093
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3097,
                      "end": 3098
                    },
                    "typeArguments": null,
                    "start": 3097,
                    "end": 3098
                  },
                  "start": 3095,
                  "end": 3098
                },
                "start": 3094,
                "end": 3098
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r17",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3114,
                        "end": 3117
                      },
                      "init": {
                        "type": "ConditionalExpression",
                        "test": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 3120,
                          "end": 3124
                        },
                        "consequent": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3127,
                          "end": 3128
                        },
                        "alternate": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3131,
                          "end": 3132
                        },
                        "start": 3120,
                        "end": 3132
                      },
                      "definite": false,
                      "start": 3114,
                      "end": 3132
                    }
                  ],
                  "declare": false,
                  "start": 3110,
                  "end": 3133
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r17",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3152,
                        "end": 3155
                      },
                      "init": {
                        "type": "ConditionalExpression",
                        "test": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 3158,
                          "end": 3162
                        },
                        "consequent": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3165,
                          "end": 3166
                        },
                        "alternate": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3169,
                          "end": 3170
                        },
                        "start": 3158,
                        "end": 3170
                      },
                      "definite": false,
                      "start": 3152,
                      "end": 3170
                    }
                  ],
                  "declare": false,
                  "start": 3148,
                  "end": 3171
                }
              ],
              "start": 3100,
              "end": 3183
            },
            "expression": false,
            "start": 3068,
            "end": 3183
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f18",
              "optional": false,
              "typeAnnotation": null,
              "start": 3198,
              "end": 3201
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3202,
                    "end": 3203
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3212,
                      "end": 3213
                    },
                    "typeArguments": null,
                    "start": 3212,
                    "end": 3213
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3202,
                  "end": 3213
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3215,
                    "end": 3216
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3225,
                      "end": 3226
                    },
                    "typeArguments": null,
                    "start": 3225,
                    "end": 3226
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3215,
                  "end": 3226
                }
              ],
              "start": 3201,
              "end": 3227
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3231,
                      "end": 3232
                    },
                    "typeArguments": null,
                    "start": 3231,
                    "end": 3232
                  },
                  "start": 3229,
                  "end": 3232
                },
                "start": 3228,
                "end": 3232
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r18",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3248,
                        "end": 3251
                      },
                      "init": {
                        "type": "ConditionalExpression",
                        "test": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 3254,
                          "end": 3258
                        },
                        "consequent": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3261,
                          "end": 3262
                        },
                        "alternate": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3265,
                          "end": 3266
                        },
                        "start": 3254,
                        "end": 3266
                      },
                      "definite": false,
                      "start": 3248,
                      "end": 3266
                    }
                  ],
                  "declare": false,
                  "start": 3244,
                  "end": 3267
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r18",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3286,
                        "end": 3289
                      },
                      "init": {
                        "type": "ConditionalExpression",
                        "test": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 3292,
                          "end": 3296
                        },
                        "consequent": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3299,
                          "end": 3300
                        },
                        "alternate": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3303,
                          "end": 3304
                        },
                        "start": 3292,
                        "end": 3304
                      },
                      "definite": false,
                      "start": 3286,
                      "end": 3304
                    }
                  ],
                  "declare": false,
                  "start": 3282,
                  "end": 3305
                }
              ],
              "start": 3234,
              "end": 3317
            },
            "expression": false,
            "start": 3189,
            "end": 3317
          }
        ],
        "start": 3062,
        "end": 3319
      },
      "expression": false,
      "start": 3040,
      "end": 3319
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f20",
        "optional": false,
        "typeAnnotation": null,
        "start": 3330,
        "end": 3333
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3334,
              "end": 3335
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null,
                "start": 3344,
                "end": 3350
              },
              "typeArguments": null,
              "start": 3344,
              "end": 3350
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3334,
            "end": 3350
          }
        ],
        "start": 3333,
        "end": 3351
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3355,
                "end": 3356
              },
              "typeArguments": null,
              "start": 3355,
              "end": 3356
            },
            "start": 3353,
            "end": 3356
          },
          "start": 3352,
          "end": 3356
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r19",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3368,
                  "end": 3371
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 3374,
                    "end": 3378
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Object",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3385,
                      "end": 3391
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 3381,
                    "end": 3393
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3396,
                    "end": 3397
                  },
                  "start": 3374,
                  "end": 3397
                },
                "definite": false,
                "start": 3368,
                "end": 3397
              }
            ],
            "declare": false,
            "start": 3364,
            "end": 3398
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r19",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3413,
                  "end": 3416
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 3419,
                    "end": 3423
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3426,
                    "end": 3427
                  },
                  "alternate": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Object",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3434,
                      "end": 3440
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 3430,
                    "end": 3442
                  },
                  "start": 3419,
                  "end": 3442
                },
                "definite": false,
                "start": 3413,
                "end": 3442
              }
            ],
            "declare": false,
            "start": 3409,
            "end": 3443
          }
        ],
        "start": 3358,
        "end": 3451
      },
      "expression": false,
      "start": 3321,
      "end": 3451
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f21",
        "optional": false,
        "typeAnnotation": null,
        "start": 3462,
        "end": 3465
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3466,
              "end": 3467
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null,
                "start": 3476,
                "end": 3482
              },
              "typeArguments": null,
              "start": 3476,
              "end": 3482
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3466,
            "end": 3482
          }
        ],
        "start": 3465,
        "end": 3483
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3487,
                "end": 3488
              },
              "typeArguments": null,
              "start": 3487,
              "end": 3488
            },
            "start": 3485,
            "end": 3488
          },
          "start": 3484,
          "end": 3488
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r20",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3500,
                  "end": 3503
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 3506,
                    "end": 3510
                  },
                  "consequent": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 3513,
                    "end": 3515
                  },
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3518,
                    "end": 3519
                  },
                  "start": 3506,
                  "end": 3519
                },
                "definite": false,
                "start": 3500,
                "end": 3519
              }
            ],
            "declare": false,
            "start": 3496,
            "end": 3520
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r20",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3535,
                  "end": 3538
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 3541,
                    "end": 3545
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3548,
                    "end": 3549
                  },
                  "alternate": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 3552,
                    "end": 3554
                  },
                  "start": 3541,
                  "end": 3554
                },
                "definite": false,
                "start": 3535,
                "end": 3554
              }
            ],
            "declare": false,
            "start": 3531,
            "end": 3555
          }
        ],
        "start": 3490,
        "end": 3563
      },
      "expression": false,
      "start": 3453,
      "end": 3563
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 82,
  "end": 3563
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 82,
    "end": 90,
    "range": [
      82,
      90
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 91,
    "end": 93,
    "range": [
      91,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 96,
    "end": 103,
    "range": [
      96,
      103
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 128,
    "end": 131,
    "range": [
      128,
      131
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 136,
    "end": 140,
    "range": [
      136,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 154,
    "end": 157,
    "range": [
      154,
      157
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 162,
    "end": 166,
    "range": [
      162,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 192,
    "end": 200,
    "range": [
      192,
      200
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 201,
    "end": 203,
    "range": [
      201,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 206,
    "end": 213,
    "range": [
      206,
      213
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 219,
    "end": 226,
    "range": [
      219,
      226
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 257,
    "end": 260,
    "range": [
      257,
      260
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 265,
    "end": 269,
    "range": [
      265,
      269
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 274,
    "end": 275,
    "range": [
      274,
      275
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 277,
    "end": 278,
    "range": [
      277,
      278
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 283,
    "end": 286,
    "range": [
      283,
      286
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 291,
    "end": 295,
    "range": [
      291,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 303,
    "end": 304,
    "range": [
      303,
      304
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 320,
    "end": 323,
    "range": [
      320,
      323
    ]
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 324,
    "end": 326,
    "range": [
      324,
      326
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 329,
    "end": 333,
    "range": [
      329,
      333
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 334,
    "end": 335,
    "range": [
      334,
      335
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 338,
    "end": 339,
    "range": [
      338,
      339
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 340,
    "end": 341,
    "range": [
      340,
      341
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 341,
    "end": 342,
    "range": [
      341,
      342
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 347,
    "end": 350,
    "range": [
      347,
      350
    ]
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 351,
    "end": 353,
    "range": [
      351,
      353
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 356,
    "end": 360,
    "range": [
      356,
      360
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 368,
    "end": 369,
    "range": [
      368,
      369
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 385,
    "end": 388,
    "range": [
      385,
      388
    ]
  },
  {
    "type": "Identifier",
    "value": "r2a",
    "start": 389,
    "end": 392,
    "range": [
      389,
      392
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 395,
    "end": 399,
    "range": [
      395,
      399
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 400,
    "end": 401,
    "range": [
      400,
      401
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 402,
    "end": 403,
    "range": [
      402,
      403
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 413,
    "end": 416,
    "range": [
      413,
      416
    ]
  },
  {
    "type": "Identifier",
    "value": "r2b",
    "start": 417,
    "end": 420,
    "range": [
      417,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 421,
    "end": 422,
    "range": [
      421,
      422
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 423,
    "end": 427,
    "range": [
      423,
      427
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 428,
    "end": 429,
    "range": [
      428,
      429
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 430,
    "end": 431,
    "range": [
      430,
      431
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 434,
    "end": 435,
    "range": [
      434,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 435,
    "end": 436,
    "range": [
      435,
      436
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 437,
    "end": 438,
    "range": [
      437,
      438
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 456,
    "end": 464,
    "range": [
      456,
      464
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 465,
    "end": 467,
    "range": [
      465,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 468,
    "end": 469,
    "range": [
      468,
      469
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 470,
    "end": 477,
    "range": [
      470,
      477
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 479,
    "end": 480,
    "range": [
      479,
      480
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 481,
    "end": 482,
    "range": [
      481,
      482
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 483,
    "end": 490,
    "range": [
      483,
      490
    ]
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 491,
    "end": 495,
    "range": [
      491,
      495
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 495,
    "end": 496,
    "range": [
      495,
      496
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 500,
    "end": 501,
    "range": [
      500,
      501
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 501,
    "end": 502,
    "range": [
      501,
      502
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 503,
    "end": 504,
    "range": [
      503,
      504
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 504,
    "end": 505,
    "range": [
      504,
      505
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 509,
    "end": 510,
    "range": [
      509,
      510
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 515,
    "end": 518,
    "range": [
      515,
      518
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 519,
    "end": 520,
    "range": [
      519,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 523,
    "end": 527,
    "range": [
      523,
      527
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 528,
    "end": 529,
    "range": [
      528,
      529
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 530,
    "end": 531,
    "range": [
      530,
      531
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 532,
    "end": 533,
    "range": [
      532,
      533
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 534,
    "end": 535,
    "range": [
      534,
      535
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 535,
    "end": 536,
    "range": [
      535,
      536
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 541,
    "end": 544,
    "range": [
      541,
      544
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 545,
    "end": 546,
    "range": [
      545,
      546
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 547,
    "end": 548,
    "range": [
      547,
      548
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 549,
    "end": 553,
    "range": [
      549,
      553
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 554,
    "end": 555,
    "range": [
      554,
      555
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 556,
    "end": 557,
    "range": [
      556,
      557
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 558,
    "end": 559,
    "range": [
      558,
      559
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 560,
    "end": 561,
    "range": [
      560,
      561
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 561,
    "end": 562,
    "range": [
      561,
      562
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 578,
    "end": 581,
    "range": [
      578,
      581
    ]
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 582,
    "end": 584,
    "range": [
      582,
      584
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 585,
    "end": 586,
    "range": [
      585,
      586
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 587,
    "end": 591,
    "range": [
      587,
      591
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 592,
    "end": 593,
    "range": [
      592,
      593
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 594,
    "end": 595,
    "range": [
      594,
      595
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 596,
    "end": 597,
    "range": [
      596,
      597
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 598,
    "end": 601,
    "range": [
      598,
      601
    ]
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 602,
    "end": 606,
    "range": [
      602,
      606
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 606,
    "end": 607,
    "range": [
      606,
      607
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 607,
    "end": 608,
    "range": [
      607,
      608
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 608,
    "end": 609,
    "range": [
      608,
      609
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 615,
    "end": 618,
    "range": [
      615,
      618
    ]
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 619,
    "end": 621,
    "range": [
      619,
      621
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 624,
    "end": 628,
    "range": [
      624,
      628
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 629,
    "end": 630,
    "range": [
      629,
      630
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 631,
    "end": 634,
    "range": [
      631,
      634
    ]
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 635,
    "end": 639,
    "range": [
      635,
      639
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 639,
    "end": 640,
    "range": [
      639,
      640
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 640,
    "end": 641,
    "range": [
      640,
      641
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 642,
    "end": 643,
    "range": [
      642,
      643
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 644,
    "end": 645,
    "range": [
      644,
      645
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 645,
    "end": 646,
    "range": [
      645,
      646
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 662,
    "end": 665,
    "range": [
      662,
      665
    ]
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 666,
    "end": 668,
    "range": [
      666,
      668
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 669,
    "end": 670,
    "range": [
      669,
      670
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 671,
    "end": 675,
    "range": [
      671,
      675
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 676,
    "end": 677,
    "range": [
      676,
      677
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 678,
    "end": 679,
    "range": [
      678,
      679
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 680,
    "end": 681,
    "range": [
      680,
      681
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 682,
    "end": 685,
    "range": [
      682,
      685
    ]
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 686,
    "end": 690,
    "range": [
      686,
      690
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 690,
    "end": 691,
    "range": [
      690,
      691
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 691,
    "end": 692,
    "range": [
      691,
      692
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 692,
    "end": 693,
    "range": [
      692,
      693
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 699,
    "end": 702,
    "range": [
      699,
      702
    ]
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 703,
    "end": 705,
    "range": [
      703,
      705
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 706,
    "end": 707,
    "range": [
      706,
      707
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 708,
    "end": 712,
    "range": [
      708,
      712
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 713,
    "end": 714,
    "range": [
      713,
      714
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 715,
    "end": 718,
    "range": [
      715,
      718
    ]
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 719,
    "end": 723,
    "range": [
      719,
      723
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 723,
    "end": 724,
    "range": [
      723,
      724
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 724,
    "end": 725,
    "range": [
      724,
      725
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 726,
    "end": 727,
    "range": [
      726,
      727
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 728,
    "end": 729,
    "range": [
      728,
      729
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 729,
    "end": 730,
    "range": [
      729,
      730
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 731,
    "end": 732,
    "range": [
      731,
      732
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 735,
    "end": 744,
    "range": [
      735,
      744
    ]
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 745,
    "end": 747,
    "range": [
      745,
      747
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 748,
    "end": 749,
    "range": [
      748,
      749
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 750,
    "end": 753,
    "range": [
      750,
      753
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 753,
    "end": 754,
    "range": [
      753,
      754
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 755,
    "end": 761,
    "range": [
      755,
      761
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 761,
    "end": 762,
    "range": [
      761,
      762
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 763,
    "end": 764,
    "range": [
      763,
      764
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 765,
    "end": 770,
    "range": [
      765,
      770
    ]
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 771,
    "end": 773,
    "range": [
      771,
      773
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 774,
    "end": 775,
    "range": [
      774,
      775
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 776,
    "end": 779,
    "range": [
      776,
      779
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 779,
    "end": 780,
    "range": [
      779,
      780
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 781,
    "end": 787,
    "range": [
      781,
      787
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 787,
    "end": 788,
    "range": [
      787,
      788
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 789,
    "end": 790,
    "range": [
      789,
      790
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 791,
    "end": 796,
    "range": [
      791,
      796
    ]
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 797,
    "end": 799,
    "range": [
      797,
      799
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 799,
    "end": 800,
    "range": [
      799,
      800
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 800,
    "end": 801,
    "range": [
      800,
      801
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 801,
    "end": 802,
    "range": [
      801,
      802
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 803,
    "end": 804,
    "range": [
      803,
      804
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 805,
    "end": 808,
    "range": [
      805,
      808
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 808,
    "end": 809,
    "range": [
      808,
      809
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 810,
    "end": 811,
    "range": [
      810,
      811
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 811,
    "end": 812,
    "range": [
      811,
      812
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 813,
    "end": 814,
    "range": [
      813,
      814
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 815,
    "end": 819,
    "range": [
      815,
      819
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 820,
    "end": 821,
    "range": [
      820,
      821
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 822,
    "end": 823,
    "range": [
      822,
      823
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 826,
    "end": 827,
    "range": [
      826,
      827
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 828,
    "end": 836,
    "range": [
      828,
      836
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 837,
    "end": 838,
    "range": [
      837,
      838
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 838,
    "end": 839,
    "range": [
      838,
      839
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 839,
    "end": 840,
    "range": [
      839,
      840
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 841,
    "end": 842,
    "range": [
      841,
      842
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 843,
    "end": 844,
    "range": [
      843,
      844
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 845,
    "end": 854,
    "range": [
      845,
      854
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 855,
    "end": 856,
    "range": [
      855,
      856
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 857,
    "end": 858,
    "range": [
      857,
      858
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 863,
    "end": 869,
    "range": [
      863,
      869
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 870,
    "end": 873,
    "range": [
      870,
      873
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 874,
    "end": 877,
    "range": [
      874,
      877
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 878,
    "end": 879,
    "range": [
      878,
      879
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 880,
    "end": 881,
    "range": [
      880,
      881
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 881,
    "end": 882,
    "range": [
      881,
      882
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 883,
    "end": 884,
    "range": [
      883,
      884
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 885,
    "end": 890,
    "range": [
      885,
      890
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 891,
    "end": 892,
    "range": [
      891,
      892
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 893,
    "end": 894,
    "range": [
      893,
      894
    ]
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 895,
    "end": 898,
    "range": [
      895,
      898
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 898,
    "end": 899,
    "range": [
      898,
      899
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 900,
    "end": 906,
    "range": [
      900,
      906
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 907,
    "end": 908,
    "range": [
      907,
      908
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 909,
    "end": 918,
    "range": [
      909,
      918
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 919,
    "end": 920,
    "range": [
      919,
      920
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 921,
    "end": 922,
    "range": [
      921,
      922
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 927,
    "end": 933,
    "range": [
      927,
      933
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 934,
    "end": 937,
    "range": [
      934,
      937
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 938,
    "end": 941,
    "range": [
      938,
      941
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 942,
    "end": 943,
    "range": [
      942,
      943
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 944,
    "end": 945,
    "range": [
      944,
      945
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 945,
    "end": 946,
    "range": [
      945,
      946
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 947,
    "end": 948,
    "range": [
      947,
      948
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 950,
    "end": 958,
    "range": [
      950,
      958
    ]
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 959,
    "end": 961,
    "range": [
      959,
      961
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 961,
    "end": 962,
    "range": [
      961,
      962
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 962,
    "end": 963,
    "range": [
      962,
      963
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 964,
    "end": 971,
    "range": [
      964,
      971
    ]
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 972,
    "end": 978,
    "range": [
      972,
      978
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 978,
    "end": 979,
    "range": [
      978,
      979
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 979,
    "end": 980,
    "range": [
      979,
      980
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 980,
    "end": 981,
    "range": [
      980,
      981
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 981,
    "end": 982,
    "range": [
      981,
      982
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 983,
    "end": 984,
    "range": [
      983,
      984
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 984,
    "end": 985,
    "range": [
      984,
      985
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 986,
    "end": 987,
    "range": [
      986,
      987
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 992,
    "end": 995,
    "range": [
      992,
      995
    ]
  },
  {
    "type": "Identifier",
    "value": "r0",
    "start": 996,
    "end": 998,
    "range": [
      996,
      998
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 999,
    "end": 1000,
    "range": [
      999,
      1000
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1001,
    "end": 1005,
    "range": [
      1001,
      1005
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1006,
    "end": 1007,
    "range": [
      1006,
      1007
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1008,
    "end": 1009,
    "range": [
      1008,
      1009
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1010,
    "end": 1011,
    "range": [
      1010,
      1011
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1012,
    "end": 1016,
    "range": [
      1012,
      1016
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1016,
    "end": 1017,
    "range": [
      1016,
      1017
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1028,
    "end": 1031,
    "range": [
      1028,
      1031
    ]
  },
  {
    "type": "Identifier",
    "value": "r0",
    "start": 1032,
    "end": 1034,
    "range": [
      1032,
      1034
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1035,
    "end": 1036,
    "range": [
      1035,
      1036
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1037,
    "end": 1041,
    "range": [
      1037,
      1041
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1042,
    "end": 1043,
    "range": [
      1042,
      1043
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1044,
    "end": 1048,
    "range": [
      1044,
      1048
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1049,
    "end": 1050,
    "range": [
      1049,
      1050
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1051,
    "end": 1052,
    "range": [
      1051,
      1052
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1052,
    "end": 1053,
    "range": [
      1052,
      1053
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1065,
    "end": 1068,
    "range": [
      1065,
      1068
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1069,
    "end": 1070,
    "range": [
      1069,
      1070
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1070,
    "end": 1071,
    "range": [
      1070,
      1071
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1072,
    "end": 1078,
    "range": [
      1072,
      1078
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1079,
    "end": 1088,
    "range": [
      1079,
      1088
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1088,
    "end": 1089,
    "range": [
      1088,
      1089
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1094,
    "end": 1097,
    "range": [
      1094,
      1097
    ]
  },
  {
    "type": "Identifier",
    "value": "r0b",
    "start": 1098,
    "end": 1101,
    "range": [
      1098,
      1101
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1102,
    "end": 1103,
    "range": [
      1102,
      1103
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1104,
    "end": 1108,
    "range": [
      1104,
      1108
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1109,
    "end": 1110,
    "range": [
      1109,
      1110
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1111,
    "end": 1112,
    "range": [
      1111,
      1112
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1113,
    "end": 1114,
    "range": [
      1113,
      1114
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1115,
    "end": 1116,
    "range": [
      1115,
      1116
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1116,
    "end": 1117,
    "range": [
      1116,
      1117
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1128,
    "end": 1131,
    "range": [
      1128,
      1131
    ]
  },
  {
    "type": "Identifier",
    "value": "r0b",
    "start": 1132,
    "end": 1135,
    "range": [
      1132,
      1135
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1136,
    "end": 1137,
    "range": [
      1136,
      1137
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1138,
    "end": 1142,
    "range": [
      1138,
      1142
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1143,
    "end": 1144,
    "range": [
      1143,
      1144
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1145,
    "end": 1146,
    "range": [
      1145,
      1146
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1147,
    "end": 1148,
    "range": [
      1147,
      1148
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1149,
    "end": 1150,
    "range": [
      1149,
      1150
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1150,
    "end": 1151,
    "range": [
      1150,
      1151
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1158,
    "end": 1159,
    "range": [
      1158,
      1159
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1161,
    "end": 1169,
    "range": [
      1161,
      1169
    ]
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 1170,
    "end": 1172,
    "range": [
      1170,
      1172
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1172,
    "end": 1173,
    "range": [
      1172,
      1173
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1173,
    "end": 1174,
    "range": [
      1173,
      1174
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1175,
    "end": 1182,
    "range": [
      1175,
      1182
    ]
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 1183,
    "end": 1189,
    "range": [
      1183,
      1189
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1189,
    "end": 1190,
    "range": [
      1189,
      1190
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1190,
    "end": 1191,
    "range": [
      1190,
      1191
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1191,
    "end": 1192,
    "range": [
      1191,
      1192
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1192,
    "end": 1193,
    "range": [
      1192,
      1193
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1194,
    "end": 1195,
    "range": [
      1194,
      1195
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1195,
    "end": 1196,
    "range": [
      1195,
      1196
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1197,
    "end": 1198,
    "range": [
      1197,
      1198
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1203,
    "end": 1206,
    "range": [
      1203,
      1206
    ]
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 1207,
    "end": 1209,
    "range": [
      1207,
      1209
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1210,
    "end": 1211,
    "range": [
      1210,
      1211
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1212,
    "end": 1216,
    "range": [
      1212,
      1216
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1217,
    "end": 1218,
    "range": [
      1217,
      1218
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1219,
    "end": 1220,
    "range": [
      1219,
      1220
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1221,
    "end": 1222,
    "range": [
      1221,
      1222
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1223,
    "end": 1224,
    "range": [
      1223,
      1224
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1224,
    "end": 1225,
    "range": [
      1224,
      1225
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1236,
    "end": 1239,
    "range": [
      1236,
      1239
    ]
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 1240,
    "end": 1242,
    "range": [
      1240,
      1242
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1243,
    "end": 1244,
    "range": [
      1243,
      1244
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1245,
    "end": 1249,
    "range": [
      1245,
      1249
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1250,
    "end": 1251,
    "range": [
      1250,
      1251
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1252,
    "end": 1253,
    "range": [
      1252,
      1253
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1254,
    "end": 1255,
    "range": [
      1254,
      1255
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1256,
    "end": 1257,
    "range": [
      1256,
      1257
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1257,
    "end": 1258,
    "range": [
      1257,
      1258
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1265,
    "end": 1266,
    "range": [
      1265,
      1266
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1268,
    "end": 1276,
    "range": [
      1268,
      1276
    ]
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 1277,
    "end": 1279,
    "range": [
      1277,
      1279
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1279,
    "end": 1280,
    "range": [
      1279,
      1280
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1280,
    "end": 1281,
    "range": [
      1280,
      1281
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1282,
    "end": 1289,
    "range": [
      1282,
      1289
    ]
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 1290,
    "end": 1296,
    "range": [
      1290,
      1296
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1296,
    "end": 1297,
    "range": [
      1296,
      1297
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1297,
    "end": 1298,
    "range": [
      1297,
      1298
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1298,
    "end": 1299,
    "range": [
      1298,
      1299
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1299,
    "end": 1300,
    "range": [
      1299,
      1300
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1301,
    "end": 1302,
    "range": [
      1301,
      1302
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1302,
    "end": 1303,
    "range": [
      1302,
      1303
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1304,
    "end": 1305,
    "range": [
      1304,
      1305
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1310,
    "end": 1313,
    "range": [
      1310,
      1313
    ]
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 1314,
    "end": 1316,
    "range": [
      1314,
      1316
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1317,
    "end": 1318,
    "range": [
      1317,
      1318
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1319,
    "end": 1323,
    "range": [
      1319,
      1323
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1324,
    "end": 1325,
    "range": [
      1324,
      1325
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 1326,
    "end": 1328,
    "range": [
      1326,
      1328
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1329,
    "end": 1330,
    "range": [
      1329,
      1330
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1331,
    "end": 1332,
    "range": [
      1331,
      1332
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1332,
    "end": 1333,
    "range": [
      1332,
      1333
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1344,
    "end": 1347,
    "range": [
      1344,
      1347
    ]
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 1348,
    "end": 1350,
    "range": [
      1348,
      1350
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1351,
    "end": 1352,
    "range": [
      1351,
      1352
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1353,
    "end": 1357,
    "range": [
      1353,
      1357
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1358,
    "end": 1359,
    "range": [
      1358,
      1359
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1360,
    "end": 1361,
    "range": [
      1360,
      1361
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1362,
    "end": 1363,
    "range": [
      1362,
      1363
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 1364,
    "end": 1366,
    "range": [
      1364,
      1366
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1366,
    "end": 1367,
    "range": [
      1366,
      1367
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1374,
    "end": 1375,
    "range": [
      1374,
      1375
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1377,
    "end": 1385,
    "range": [
      1377,
      1385
    ]
  },
  {
    "type": "Identifier",
    "value": "f7",
    "start": 1386,
    "end": 1388,
    "range": [
      1386,
      1388
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1388,
    "end": 1389,
    "range": [
      1388,
      1389
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1389,
    "end": 1390,
    "range": [
      1389,
      1390
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1391,
    "end": 1398,
    "range": [
      1391,
      1398
    ]
  },
  {
    "type": "Identifier",
    "value": "Boolean",
    "start": 1399,
    "end": 1406,
    "range": [
      1399,
      1406
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1406,
    "end": 1407,
    "range": [
      1406,
      1407
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1407,
    "end": 1408,
    "range": [
      1407,
      1408
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1408,
    "end": 1409,
    "range": [
      1408,
      1409
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1409,
    "end": 1410,
    "range": [
      1409,
      1410
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1411,
    "end": 1412,
    "range": [
      1411,
      1412
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1412,
    "end": 1413,
    "range": [
      1412,
      1413
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1414,
    "end": 1415,
    "range": [
      1414,
      1415
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1420,
    "end": 1423,
    "range": [
      1420,
      1423
    ]
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 1424,
    "end": 1426,
    "range": [
      1424,
      1426
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1427,
    "end": 1428,
    "range": [
      1427,
      1428
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1429,
    "end": 1433,
    "range": [
      1429,
      1433
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1434,
    "end": 1435,
    "range": [
      1434,
      1435
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1436,
    "end": 1440,
    "range": [
      1436,
      1440
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1441,
    "end": 1442,
    "range": [
      1441,
      1442
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1443,
    "end": 1444,
    "range": [
      1443,
      1444
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1444,
    "end": 1445,
    "range": [
      1444,
      1445
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1456,
    "end": 1459,
    "range": [
      1456,
      1459
    ]
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 1460,
    "end": 1462,
    "range": [
      1460,
      1462
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1463,
    "end": 1464,
    "range": [
      1463,
      1464
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1465,
    "end": 1469,
    "range": [
      1465,
      1469
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1470,
    "end": 1471,
    "range": [
      1470,
      1471
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1472,
    "end": 1473,
    "range": [
      1472,
      1473
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1474,
    "end": 1475,
    "range": [
      1474,
      1475
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1476,
    "end": 1480,
    "range": [
      1476,
      1480
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1480,
    "end": 1481,
    "range": [
      1480,
      1481
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1488,
    "end": 1489,
    "range": [
      1488,
      1489
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1491,
    "end": 1499,
    "range": [
      1491,
      1499
    ]
  },
  {
    "type": "Identifier",
    "value": "f8",
    "start": 1500,
    "end": 1502,
    "range": [
      1500,
      1502
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1502,
    "end": 1503,
    "range": [
      1502,
      1503
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1503,
    "end": 1504,
    "range": [
      1503,
      1504
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1505,
    "end": 1512,
    "range": [
      1505,
      1512
    ]
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1513,
    "end": 1517,
    "range": [
      1513,
      1517
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1517,
    "end": 1518,
    "range": [
      1517,
      1518
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1518,
    "end": 1519,
    "range": [
      1518,
      1519
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1519,
    "end": 1520,
    "range": [
      1519,
      1520
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1520,
    "end": 1521,
    "range": [
      1520,
      1521
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1522,
    "end": 1523,
    "range": [
      1522,
      1523
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1523,
    "end": 1524,
    "range": [
      1523,
      1524
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1525,
    "end": 1526,
    "range": [
      1525,
      1526
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1531,
    "end": 1534,
    "range": [
      1531,
      1534
    ]
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 1535,
    "end": 1537,
    "range": [
      1535,
      1537
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1538,
    "end": 1539,
    "range": [
      1538,
      1539
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1540,
    "end": 1544,
    "range": [
      1540,
      1544
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1545,
    "end": 1546,
    "range": [
      1545,
      1546
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1547,
    "end": 1550,
    "range": [
      1547,
      1550
    ]
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1551,
    "end": 1555,
    "range": [
      1551,
      1555
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1555,
    "end": 1556,
    "range": [
      1555,
      1556
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1556,
    "end": 1557,
    "range": [
      1556,
      1557
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1558,
    "end": 1559,
    "range": [
      1558,
      1559
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1560,
    "end": 1561,
    "range": [
      1560,
      1561
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1561,
    "end": 1562,
    "range": [
      1561,
      1562
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1573,
    "end": 1576,
    "range": [
      1573,
      1576
    ]
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 1577,
    "end": 1579,
    "range": [
      1577,
      1579
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1580,
    "end": 1581,
    "range": [
      1580,
      1581
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1582,
    "end": 1586,
    "range": [
      1582,
      1586
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1587,
    "end": 1588,
    "range": [
      1587,
      1588
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1589,
    "end": 1590,
    "range": [
      1589,
      1590
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1591,
    "end": 1592,
    "range": [
      1591,
      1592
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1593,
    "end": 1596,
    "range": [
      1593,
      1596
    ]
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1597,
    "end": 1601,
    "range": [
      1597,
      1601
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1601,
    "end": 1602,
    "range": [
      1601,
      1602
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1602,
    "end": 1603,
    "range": [
      1602,
      1603
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1603,
    "end": 1604,
    "range": [
      1603,
      1604
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1611,
    "end": 1612,
    "range": [
      1611,
      1612
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1614,
    "end": 1622,
    "range": [
      1614,
      1622
    ]
  },
  {
    "type": "Identifier",
    "value": "f9",
    "start": 1623,
    "end": 1625,
    "range": [
      1623,
      1625
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1625,
    "end": 1626,
    "range": [
      1625,
      1626
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1626,
    "end": 1627,
    "range": [
      1626,
      1627
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1628,
    "end": 1635,
    "range": [
      1628,
      1635
    ]
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 1636,
    "end": 1642,
    "range": [
      1636,
      1642
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1642,
    "end": 1643,
    "range": [
      1642,
      1643
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1643,
    "end": 1644,
    "range": [
      1643,
      1644
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1644,
    "end": 1645,
    "range": [
      1644,
      1645
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1645,
    "end": 1646,
    "range": [
      1645,
      1646
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1647,
    "end": 1648,
    "range": [
      1647,
      1648
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1648,
    "end": 1649,
    "range": [
      1648,
      1649
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1650,
    "end": 1651,
    "range": [
      1650,
      1651
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1656,
    "end": 1659,
    "range": [
      1656,
      1659
    ]
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 1660,
    "end": 1662,
    "range": [
      1660,
      1662
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1663,
    "end": 1664,
    "range": [
      1663,
      1664
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1665,
    "end": 1669,
    "range": [
      1665,
      1669
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1670,
    "end": 1671,
    "range": [
      1670,
      1671
    ]
  },
  {
    "type": "RegularExpression",
    "value": "/1/",
    "regex": {
      "flags": "",
      "pattern": "1"
    },
    "start": 1672,
    "end": 1675,
    "range": [
      1672,
      1675
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1676,
    "end": 1677,
    "range": [
      1676,
      1677
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1678,
    "end": 1679,
    "range": [
      1678,
      1679
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1679,
    "end": 1680,
    "range": [
      1679,
      1680
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1691,
    "end": 1694,
    "range": [
      1691,
      1694
    ]
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 1695,
    "end": 1697,
    "range": [
      1695,
      1697
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1698,
    "end": 1699,
    "range": [
      1698,
      1699
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1700,
    "end": 1704,
    "range": [
      1700,
      1704
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1705,
    "end": 1706,
    "range": [
      1705,
      1706
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1707,
    "end": 1708,
    "range": [
      1707,
      1708
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1709,
    "end": 1710,
    "range": [
      1709,
      1710
    ]
  },
  {
    "type": "RegularExpression",
    "value": "/1/",
    "regex": {
      "flags": "",
      "pattern": "1"
    },
    "start": 1711,
    "end": 1714,
    "range": [
      1711,
      1714
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1714,
    "end": 1715,
    "range": [
      1714,
      1715
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1722,
    "end": 1723,
    "range": [
      1722,
      1723
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1725,
    "end": 1733,
    "range": [
      1725,
      1733
    ]
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 1734,
    "end": 1737,
    "range": [
      1734,
      1737
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1737,
    "end": 1738,
    "range": [
      1737,
      1738
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1738,
    "end": 1739,
    "range": [
      1738,
      1739
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1740,
    "end": 1747,
    "range": [
      1740,
      1747
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1748,
    "end": 1749,
    "range": [
      1748,
      1749
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1750,
    "end": 1753,
    "range": [
      1750,
      1753
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1753,
    "end": 1754,
    "range": [
      1753,
      1754
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1755,
    "end": 1761,
    "range": [
      1755,
      1761
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1762,
    "end": 1763,
    "range": [
      1762,
      1763
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1763,
    "end": 1764,
    "range": [
      1763,
      1764
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1764,
    "end": 1765,
    "range": [
      1764,
      1765
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1765,
    "end": 1766,
    "range": [
      1765,
      1766
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1766,
    "end": 1767,
    "range": [
      1766,
      1767
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1768,
    "end": 1769,
    "range": [
      1768,
      1769
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1769,
    "end": 1770,
    "range": [
      1769,
      1770
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1771,
    "end": 1772,
    "range": [
      1771,
      1772
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1777,
    "end": 1780,
    "range": [
      1777,
      1780
    ]
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 1781,
    "end": 1783,
    "range": [
      1781,
      1783
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1784,
    "end": 1785,
    "range": [
      1784,
      1785
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1786,
    "end": 1790,
    "range": [
      1786,
      1790
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1791,
    "end": 1792,
    "range": [
      1791,
      1792
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1793,
    "end": 1794,
    "range": [
      1793,
      1794
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1795,
    "end": 1798,
    "range": [
      1795,
      1798
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1798,
    "end": 1799,
    "range": [
      1798,
      1799
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1800,
    "end": 1801,
    "range": [
      1800,
      1801
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1802,
    "end": 1803,
    "range": [
      1802,
      1803
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1804,
    "end": 1805,
    "range": [
      1804,
      1805
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1806,
    "end": 1807,
    "range": [
      1806,
      1807
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1807,
    "end": 1808,
    "range": [
      1807,
      1808
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1819,
    "end": 1822,
    "range": [
      1819,
      1822
    ]
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 1823,
    "end": 1825,
    "range": [
      1823,
      1825
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1826,
    "end": 1827,
    "range": [
      1826,
      1827
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1828,
    "end": 1832,
    "range": [
      1828,
      1832
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1833,
    "end": 1834,
    "range": [
      1833,
      1834
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1835,
    "end": 1836,
    "range": [
      1835,
      1836
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1837,
    "end": 1838,
    "range": [
      1837,
      1838
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1839,
    "end": 1840,
    "range": [
      1839,
      1840
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1841,
    "end": 1844,
    "range": [
      1841,
      1844
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1844,
    "end": 1845,
    "range": [
      1844,
      1845
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1846,
    "end": 1847,
    "range": [
      1846,
      1847
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1848,
    "end": 1849,
    "range": [
      1848,
      1849
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1849,
    "end": 1850,
    "range": [
      1849,
      1850
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1857,
    "end": 1858,
    "range": [
      1857,
      1858
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1860,
    "end": 1868,
    "range": [
      1860,
      1868
    ]
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 1869,
    "end": 1872,
    "range": [
      1869,
      1872
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1872,
    "end": 1873,
    "range": [
      1872,
      1873
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1873,
    "end": 1874,
    "range": [
      1873,
      1874
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1875,
    "end": 1882,
    "range": [
      1875,
      1882
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1883,
    "end": 1884,
    "range": [
      1883,
      1884
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1884,
    "end": 1885,
    "range": [
      1884,
      1885
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1886,
    "end": 1888,
    "range": [
      1886,
      1888
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1889,
    "end": 1893,
    "range": [
      1889,
      1893
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1893,
    "end": 1894,
    "range": [
      1893,
      1894
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1894,
    "end": 1895,
    "range": [
      1894,
      1895
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1895,
    "end": 1896,
    "range": [
      1895,
      1896
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1896,
    "end": 1897,
    "range": [
      1896,
      1897
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1898,
    "end": 1899,
    "range": [
      1898,
      1899
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1899,
    "end": 1900,
    "range": [
      1899,
      1900
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1901,
    "end": 1902,
    "range": [
      1901,
      1902
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1907,
    "end": 1910,
    "range": [
      1907,
      1910
    ]
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 1911,
    "end": 1913,
    "range": [
      1911,
      1913
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1914,
    "end": 1915,
    "range": [
      1914,
      1915
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1916,
    "end": 1920,
    "range": [
      1916,
      1920
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1921,
    "end": 1922,
    "range": [
      1921,
      1922
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1923,
    "end": 1924,
    "range": [
      1923,
      1924
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1924,
    "end": 1925,
    "range": [
      1924,
      1925
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1926,
    "end": 1928,
    "range": [
      1926,
      1928
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1929,
    "end": 1930,
    "range": [
      1929,
      1930
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1931,
    "end": 1932,
    "range": [
      1931,
      1932
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1933,
    "end": 1934,
    "range": [
      1933,
      1934
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1935,
    "end": 1936,
    "range": [
      1935,
      1936
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1936,
    "end": 1937,
    "range": [
      1936,
      1937
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1948,
    "end": 1951,
    "range": [
      1948,
      1951
    ]
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 1952,
    "end": 1954,
    "range": [
      1952,
      1954
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1955,
    "end": 1956,
    "range": [
      1955,
      1956
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1957,
    "end": 1961,
    "range": [
      1957,
      1961
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1962,
    "end": 1963,
    "range": [
      1962,
      1963
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1964,
    "end": 1965,
    "range": [
      1964,
      1965
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1966,
    "end": 1967,
    "range": [
      1966,
      1967
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1968,
    "end": 1969,
    "range": [
      1968,
      1969
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1969,
    "end": 1970,
    "range": [
      1969,
      1970
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1971,
    "end": 1973,
    "range": [
      1971,
      1973
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1974,
    "end": 1975,
    "range": [
      1974,
      1975
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1976,
    "end": 1977,
    "range": [
      1976,
      1977
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1977,
    "end": 1978,
    "range": [
      1977,
      1978
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1985,
    "end": 1986,
    "range": [
      1985,
      1986
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1988,
    "end": 1996,
    "range": [
      1988,
      1996
    ]
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 1997,
    "end": 2000,
    "range": [
      1997,
      2000
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2000,
    "end": 2001,
    "range": [
      2000,
      2001
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2001,
    "end": 2002,
    "range": [
      2001,
      2002
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2003,
    "end": 2010,
    "range": [
      2003,
      2010
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2011,
    "end": 2012,
    "range": [
      2011,
      2012
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2012,
    "end": 2013,
    "range": [
      2012,
      2013
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2013,
    "end": 2014,
    "range": [
      2013,
      2014
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2014,
    "end": 2015,
    "range": [
      2014,
      2015
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2015,
    "end": 2016,
    "range": [
      2015,
      2016
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2016,
    "end": 2017,
    "range": [
      2016,
      2017
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2018,
    "end": 2019,
    "range": [
      2018,
      2019
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2019,
    "end": 2020,
    "range": [
      2019,
      2020
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2021,
    "end": 2023,
    "range": [
      2021,
      2023
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2024,
    "end": 2025,
    "range": [
      2024,
      2025
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2025,
    "end": 2026,
    "range": [
      2025,
      2026
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2026,
    "end": 2027,
    "range": [
      2026,
      2027
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2027,
    "end": 2028,
    "range": [
      2027,
      2028
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2028,
    "end": 2029,
    "range": [
      2028,
      2029
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2030,
    "end": 2031,
    "range": [
      2030,
      2031
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2031,
    "end": 2032,
    "range": [
      2031,
      2032
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2033,
    "end": 2034,
    "range": [
      2033,
      2034
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2039,
    "end": 2042,
    "range": [
      2039,
      2042
    ]
  },
  {
    "type": "Identifier",
    "value": "r8",
    "start": 2043,
    "end": 2045,
    "range": [
      2043,
      2045
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2046,
    "end": 2047,
    "range": [
      2046,
      2047
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2048,
    "end": 2052,
    "range": [
      2048,
      2052
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2053,
    "end": 2054,
    "range": [
      2053,
      2054
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2055,
    "end": 2056,
    "range": [
      2055,
      2056
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2056,
    "end": 2057,
    "range": [
      2056,
      2057
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2057,
    "end": 2058,
    "range": [
      2057,
      2058
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2058,
    "end": 2059,
    "range": [
      2058,
      2059
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2059,
    "end": 2060,
    "range": [
      2059,
      2060
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2060,
    "end": 2061,
    "range": [
      2060,
      2061
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2062,
    "end": 2063,
    "range": [
      2062,
      2063
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2063,
    "end": 2064,
    "range": [
      2063,
      2064
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2065,
    "end": 2067,
    "range": [
      2065,
      2067
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2068,
    "end": 2069,
    "range": [
      2068,
      2069
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2070,
    "end": 2076,
    "range": [
      2070,
      2076
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2077,
    "end": 2078,
    "range": [
      2077,
      2078
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2079,
    "end": 2080,
    "range": [
      2079,
      2080
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2081,
    "end": 2082,
    "range": [
      2081,
      2082
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2083,
    "end": 2084,
    "range": [
      2083,
      2084
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2084,
    "end": 2085,
    "range": [
      2084,
      2085
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2096,
    "end": 2099,
    "range": [
      2096,
      2099
    ]
  },
  {
    "type": "Identifier",
    "value": "r8b",
    "start": 2100,
    "end": 2103,
    "range": [
      2100,
      2103
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2104,
    "end": 2105,
    "range": [
      2104,
      2105
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2106,
    "end": 2110,
    "range": [
      2106,
      2110
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2111,
    "end": 2112,
    "range": [
      2111,
      2112
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2113,
    "end": 2114,
    "range": [
      2113,
      2114
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2115,
    "end": 2116,
    "range": [
      2115,
      2116
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2117,
    "end": 2118,
    "range": [
      2117,
      2118
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2118,
    "end": 2119,
    "range": [
      2118,
      2119
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2119,
    "end": 2120,
    "range": [
      2119,
      2120
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2120,
    "end": 2121,
    "range": [
      2120,
      2121
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2121,
    "end": 2122,
    "range": [
      2121,
      2122
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2122,
    "end": 2123,
    "range": [
      2122,
      2123
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2124,
    "end": 2125,
    "range": [
      2124,
      2125
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2125,
    "end": 2126,
    "range": [
      2125,
      2126
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2127,
    "end": 2129,
    "range": [
      2127,
      2129
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2130,
    "end": 2131,
    "range": [
      2130,
      2131
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2132,
    "end": 2138,
    "range": [
      2132,
      2138
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2139,
    "end": 2140,
    "range": [
      2139,
      2140
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2141,
    "end": 2142,
    "range": [
      2141,
      2142
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2142,
    "end": 2143,
    "range": [
      2142,
      2143
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2201,
    "end": 2202,
    "range": [
      2201,
      2202
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2204,
    "end": 2212,
    "range": [
      2204,
      2212
    ]
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 2213,
    "end": 2216,
    "range": [
      2213,
      2216
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2216,
    "end": 2217,
    "range": [
      2216,
      2217
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2217,
    "end": 2218,
    "range": [
      2217,
      2218
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2219,
    "end": 2226,
    "range": [
      2219,
      2226
    ]
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 2227,
    "end": 2229,
    "range": [
      2227,
      2229
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2229,
    "end": 2230,
    "range": [
      2229,
      2230
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2230,
    "end": 2231,
    "range": [
      2230,
      2231
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2231,
    "end": 2232,
    "range": [
      2231,
      2232
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2232,
    "end": 2233,
    "range": [
      2232,
      2233
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2234,
    "end": 2235,
    "range": [
      2234,
      2235
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2235,
    "end": 2236,
    "range": [
      2235,
      2236
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2237,
    "end": 2238,
    "range": [
      2237,
      2238
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2243,
    "end": 2246,
    "range": [
      2243,
      2246
    ]
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 2247,
    "end": 2249,
    "range": [
      2247,
      2249
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2249,
    "end": 2250,
    "range": [
      2249,
      2250
    ]
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 2251,
    "end": 2253,
    "range": [
      2251,
      2253
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2253,
    "end": 2254,
    "range": [
      2253,
      2254
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2259,
    "end": 2262,
    "range": [
      2259,
      2262
    ]
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 2263,
    "end": 2265,
    "range": [
      2263,
      2265
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2266,
    "end": 2267,
    "range": [
      2266,
      2267
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2268,
    "end": 2272,
    "range": [
      2268,
      2272
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2273,
    "end": 2274,
    "range": [
      2273,
      2274
    ]
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 2275,
    "end": 2277,
    "range": [
      2275,
      2277
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2278,
    "end": 2279,
    "range": [
      2278,
      2279
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2280,
    "end": 2281,
    "range": [
      2280,
      2281
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2281,
    "end": 2282,
    "range": [
      2281,
      2282
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2293,
    "end": 2296,
    "range": [
      2293,
      2296
    ]
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 2297,
    "end": 2299,
    "range": [
      2297,
      2299
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2300,
    "end": 2301,
    "range": [
      2300,
      2301
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2302,
    "end": 2306,
    "range": [
      2302,
      2306
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2307,
    "end": 2308,
    "range": [
      2307,
      2308
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2309,
    "end": 2310,
    "range": [
      2309,
      2310
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2311,
    "end": 2312,
    "range": [
      2311,
      2312
    ]
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 2313,
    "end": 2315,
    "range": [
      2313,
      2315
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2315,
    "end": 2316,
    "range": [
      2315,
      2316
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2323,
    "end": 2324,
    "range": [
      2323,
      2324
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2326,
    "end": 2334,
    "range": [
      2326,
      2334
    ]
  },
  {
    "type": "Identifier",
    "value": "f14",
    "start": 2335,
    "end": 2338,
    "range": [
      2335,
      2338
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2338,
    "end": 2339,
    "range": [
      2338,
      2339
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2339,
    "end": 2340,
    "range": [
      2339,
      2340
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2341,
    "end": 2348,
    "range": [
      2341,
      2348
    ]
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 2349,
    "end": 2351,
    "range": [
      2349,
      2351
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2351,
    "end": 2352,
    "range": [
      2351,
      2352
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2352,
    "end": 2353,
    "range": [
      2352,
      2353
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2353,
    "end": 2354,
    "range": [
      2353,
      2354
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2354,
    "end": 2355,
    "range": [
      2354,
      2355
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2356,
    "end": 2357,
    "range": [
      2356,
      2357
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2357,
    "end": 2358,
    "range": [
      2357,
      2358
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2359,
    "end": 2360,
    "range": [
      2359,
      2360
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2365,
    "end": 2368,
    "range": [
      2365,
      2368
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 2369,
    "end": 2371,
    "range": [
      2369,
      2371
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2371,
    "end": 2372,
    "range": [
      2371,
      2372
    ]
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 2373,
    "end": 2375,
    "range": [
      2373,
      2375
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2375,
    "end": 2376,
    "range": [
      2375,
      2376
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2381,
    "end": 2384,
    "range": [
      2381,
      2384
    ]
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 2385,
    "end": 2388,
    "range": [
      2385,
      2388
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2389,
    "end": 2390,
    "range": [
      2389,
      2390
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2391,
    "end": 2395,
    "range": [
      2391,
      2395
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2396,
    "end": 2397,
    "range": [
      2396,
      2397
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 2398,
    "end": 2400,
    "range": [
      2398,
      2400
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2401,
    "end": 2402,
    "range": [
      2401,
      2402
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2403,
    "end": 2404,
    "range": [
      2403,
      2404
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2404,
    "end": 2405,
    "range": [
      2404,
      2405
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2416,
    "end": 2419,
    "range": [
      2416,
      2419
    ]
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 2420,
    "end": 2423,
    "range": [
      2420,
      2423
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2424,
    "end": 2425,
    "range": [
      2424,
      2425
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2426,
    "end": 2430,
    "range": [
      2426,
      2430
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2431,
    "end": 2432,
    "range": [
      2431,
      2432
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2433,
    "end": 2434,
    "range": [
      2433,
      2434
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2435,
    "end": 2436,
    "range": [
      2435,
      2436
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 2437,
    "end": 2439,
    "range": [
      2437,
      2439
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2439,
    "end": 2440,
    "range": [
      2439,
      2440
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2447,
    "end": 2448,
    "range": [
      2447,
      2448
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2450,
    "end": 2458,
    "range": [
      2450,
      2458
    ]
  },
  {
    "type": "Identifier",
    "value": "f15",
    "start": 2459,
    "end": 2462,
    "range": [
      2459,
      2462
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2462,
    "end": 2463,
    "range": [
      2462,
      2463
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2463,
    "end": 2464,
    "range": [
      2463,
      2464
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2465,
    "end": 2472,
    "range": [
      2465,
      2472
    ]
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 2473,
    "end": 2475,
    "range": [
      2473,
      2475
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2475,
    "end": 2476,
    "range": [
      2475,
      2476
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2476,
    "end": 2482,
    "range": [
      2476,
      2482
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2482,
    "end": 2483,
    "range": [
      2482,
      2483
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2483,
    "end": 2484,
    "range": [
      2483,
      2484
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2484,
    "end": 2485,
    "range": [
      2484,
      2485
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2485,
    "end": 2486,
    "range": [
      2485,
      2486
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2486,
    "end": 2487,
    "range": [
      2486,
      2487
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2488,
    "end": 2489,
    "range": [
      2488,
      2489
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2489,
    "end": 2490,
    "range": [
      2489,
      2490
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2491,
    "end": 2492,
    "range": [
      2491,
      2492
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2497,
    "end": 2500,
    "range": [
      2497,
      2500
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 2501,
    "end": 2503,
    "range": [
      2501,
      2503
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2503,
    "end": 2504,
    "range": [
      2503,
      2504
    ]
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 2505,
    "end": 2507,
    "range": [
      2505,
      2507
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2507,
    "end": 2508,
    "range": [
      2507,
      2508
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2508,
    "end": 2514,
    "range": [
      2508,
      2514
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2514,
    "end": 2515,
    "range": [
      2514,
      2515
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2515,
    "end": 2516,
    "range": [
      2515,
      2516
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2521,
    "end": 2524,
    "range": [
      2521,
      2524
    ]
  },
  {
    "type": "Identifier",
    "value": "r12",
    "start": 2525,
    "end": 2528,
    "range": [
      2525,
      2528
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2529,
    "end": 2530,
    "range": [
      2529,
      2530
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2531,
    "end": 2535,
    "range": [
      2531,
      2535
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2536,
    "end": 2537,
    "range": [
      2536,
      2537
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 2538,
    "end": 2540,
    "range": [
      2538,
      2540
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2541,
    "end": 2542,
    "range": [
      2541,
      2542
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2543,
    "end": 2544,
    "range": [
      2543,
      2544
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2544,
    "end": 2545,
    "range": [
      2544,
      2545
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2556,
    "end": 2559,
    "range": [
      2556,
      2559
    ]
  },
  {
    "type": "Identifier",
    "value": "r12",
    "start": 2560,
    "end": 2563,
    "range": [
      2560,
      2563
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2564,
    "end": 2565,
    "range": [
      2564,
      2565
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2566,
    "end": 2570,
    "range": [
      2566,
      2570
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2571,
    "end": 2572,
    "range": [
      2571,
      2572
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2573,
    "end": 2574,
    "range": [
      2573,
      2574
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2575,
    "end": 2576,
    "range": [
      2575,
      2576
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 2577,
    "end": 2579,
    "range": [
      2577,
      2579
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2579,
    "end": 2580,
    "range": [
      2579,
      2580
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2587,
    "end": 2588,
    "range": [
      2587,
      2588
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2590,
    "end": 2598,
    "range": [
      2590,
      2598
    ]
  },
  {
    "type": "Identifier",
    "value": "f16",
    "start": 2599,
    "end": 2602,
    "range": [
      2599,
      2602
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2602,
    "end": 2603,
    "range": [
      2602,
      2603
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2603,
    "end": 2604,
    "range": [
      2603,
      2604
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2605,
    "end": 2612,
    "range": [
      2605,
      2612
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2613,
    "end": 2614,
    "range": [
      2613,
      2614
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2614,
    "end": 2615,
    "range": [
      2614,
      2615
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2615,
    "end": 2616,
    "range": [
      2615,
      2616
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2616,
    "end": 2617,
    "range": [
      2616,
      2617
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2617,
    "end": 2618,
    "range": [
      2617,
      2618
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2619,
    "end": 2620,
    "range": [
      2619,
      2620
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2620,
    "end": 2621,
    "range": [
      2620,
      2621
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2622,
    "end": 2623,
    "range": [
      2622,
      2623
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2628,
    "end": 2631,
    "range": [
      2628,
      2631
    ]
  },
  {
    "type": "Identifier",
    "value": "r13",
    "start": 2632,
    "end": 2635,
    "range": [
      2632,
      2635
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2636,
    "end": 2637,
    "range": [
      2636,
      2637
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2638,
    "end": 2642,
    "range": [
      2638,
      2642
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2643,
    "end": 2644,
    "range": [
      2643,
      2644
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2645,
    "end": 2646,
    "range": [
      2645,
      2646
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2647,
    "end": 2648,
    "range": [
      2647,
      2648
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2649,
    "end": 2650,
    "range": [
      2649,
      2650
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2650,
    "end": 2651,
    "range": [
      2650,
      2651
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2662,
    "end": 2665,
    "range": [
      2662,
      2665
    ]
  },
  {
    "type": "Identifier",
    "value": "r13",
    "start": 2666,
    "end": 2669,
    "range": [
      2666,
      2669
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2670,
    "end": 2671,
    "range": [
      2670,
      2671
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2672,
    "end": 2676,
    "range": [
      2672,
      2676
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2677,
    "end": 2678,
    "range": [
      2677,
      2678
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2679,
    "end": 2680,
    "range": [
      2679,
      2680
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2681,
    "end": 2682,
    "range": [
      2681,
      2682
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2683,
    "end": 2684,
    "range": [
      2683,
      2684
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2684,
    "end": 2685,
    "range": [
      2684,
      2685
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2697,
    "end": 2700,
    "range": [
      2697,
      2700
    ]
  },
  {
    "type": "Identifier",
    "value": "r14",
    "start": 2701,
    "end": 2704,
    "range": [
      2701,
      2704
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2705,
    "end": 2706,
    "range": [
      2705,
      2706
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2707,
    "end": 2711,
    "range": [
      2707,
      2711
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2712,
    "end": 2713,
    "range": [
      2712,
      2713
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2714,
    "end": 2715,
    "range": [
      2714,
      2715
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2715,
    "end": 2716,
    "range": [
      2715,
      2716
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2716,
    "end": 2717,
    "range": [
      2716,
      2717
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2718,
    "end": 2719,
    "range": [
      2718,
      2719
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2720,
    "end": 2721,
    "range": [
      2720,
      2721
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2721,
    "end": 2722,
    "range": [
      2721,
      2722
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2733,
    "end": 2736,
    "range": [
      2733,
      2736
    ]
  },
  {
    "type": "Identifier",
    "value": "r14",
    "start": 2737,
    "end": 2740,
    "range": [
      2737,
      2740
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2741,
    "end": 2742,
    "range": [
      2741,
      2742
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2743,
    "end": 2747,
    "range": [
      2743,
      2747
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2748,
    "end": 2749,
    "range": [
      2748,
      2749
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2750,
    "end": 2751,
    "range": [
      2750,
      2751
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2752,
    "end": 2753,
    "range": [
      2752,
      2753
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2754,
    "end": 2755,
    "range": [
      2754,
      2755
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2755,
    "end": 2756,
    "range": [
      2755,
      2756
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2756,
    "end": 2757,
    "range": [
      2756,
      2757
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2757,
    "end": 2758,
    "range": [
      2757,
      2758
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2765,
    "end": 2766,
    "range": [
      2765,
      2766
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2768,
    "end": 2776,
    "range": [
      2768,
      2776
    ]
  },
  {
    "type": "Identifier",
    "value": "f17",
    "start": 2777,
    "end": 2780,
    "range": [
      2777,
      2780
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2780,
    "end": 2781,
    "range": [
      2780,
      2781
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2781,
    "end": 2782,
    "range": [
      2781,
      2782
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2783,
    "end": 2790,
    "range": [
      2783,
      2790
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2791,
    "end": 2797,
    "range": [
      2791,
      2797
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2798,
    "end": 2799,
    "range": [
      2798,
      2799
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2799,
    "end": 2800,
    "range": [
      2799,
      2800
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2800,
    "end": 2801,
    "range": [
      2800,
      2801
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2801,
    "end": 2802,
    "range": [
      2801,
      2802
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2802,
    "end": 2803,
    "range": [
      2802,
      2803
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2804,
    "end": 2805,
    "range": [
      2804,
      2805
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2805,
    "end": 2806,
    "range": [
      2805,
      2806
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2807,
    "end": 2808,
    "range": [
      2807,
      2808
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2813,
    "end": 2816,
    "range": [
      2813,
      2816
    ]
  },
  {
    "type": "Identifier",
    "value": "af",
    "start": 2817,
    "end": 2819,
    "range": [
      2817,
      2819
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2819,
    "end": 2820,
    "range": [
      2819,
      2820
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2821,
    "end": 2827,
    "range": [
      2821,
      2827
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2828,
    "end": 2829,
    "range": [
      2828,
      2829
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2829,
    "end": 2830,
    "range": [
      2829,
      2830
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2835,
    "end": 2838,
    "range": [
      2835,
      2838
    ]
  },
  {
    "type": "Identifier",
    "value": "r15",
    "start": 2839,
    "end": 2842,
    "range": [
      2839,
      2842
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2843,
    "end": 2844,
    "range": [
      2843,
      2844
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2845,
    "end": 2849,
    "range": [
      2845,
      2849
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2850,
    "end": 2851,
    "range": [
      2850,
      2851
    ]
  },
  {
    "type": "Identifier",
    "value": "af",
    "start": 2852,
    "end": 2854,
    "range": [
      2852,
      2854
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2855,
    "end": 2856,
    "range": [
      2855,
      2856
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2857,
    "end": 2858,
    "range": [
      2857,
      2858
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2858,
    "end": 2859,
    "range": [
      2858,
      2859
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2870,
    "end": 2873,
    "range": [
      2870,
      2873
    ]
  },
  {
    "type": "Identifier",
    "value": "r15",
    "start": 2874,
    "end": 2877,
    "range": [
      2874,
      2877
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2878,
    "end": 2879,
    "range": [
      2878,
      2879
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2880,
    "end": 2884,
    "range": [
      2880,
      2884
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2885,
    "end": 2886,
    "range": [
      2885,
      2886
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2887,
    "end": 2888,
    "range": [
      2887,
      2888
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2889,
    "end": 2890,
    "range": [
      2889,
      2890
    ]
  },
  {
    "type": "Identifier",
    "value": "af",
    "start": 2891,
    "end": 2893,
    "range": [
      2891,
      2893
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2893,
    "end": 2894,
    "range": [
      2893,
      2894
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2901,
    "end": 2902,
    "range": [
      2901,
      2902
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2904,
    "end": 2912,
    "range": [
      2904,
      2912
    ]
  },
  {
    "type": "Identifier",
    "value": "f18",
    "start": 2913,
    "end": 2916,
    "range": [
      2913,
      2916
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2916,
    "end": 2917,
    "range": [
      2916,
      2917
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2917,
    "end": 2918,
    "range": [
      2917,
      2918
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2919,
    "end": 2926,
    "range": [
      2919,
      2926
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2927,
    "end": 2933,
    "range": [
      2927,
      2933
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2934,
    "end": 2935,
    "range": [
      2934,
      2935
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2935,
    "end": 2936,
    "range": [
      2935,
      2936
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2936,
    "end": 2937,
    "range": [
      2936,
      2937
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2937,
    "end": 2938,
    "range": [
      2937,
      2938
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2938,
    "end": 2939,
    "range": [
      2938,
      2939
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2940,
    "end": 2941,
    "range": [
      2940,
      2941
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2941,
    "end": 2942,
    "range": [
      2941,
      2942
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2943,
    "end": 2944,
    "range": [
      2943,
      2944
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2949,
    "end": 2952,
    "range": [
      2949,
      2952
    ]
  },
  {
    "type": "Identifier",
    "value": "ac",
    "start": 2953,
    "end": 2955,
    "range": [
      2953,
      2955
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2955,
    "end": 2956,
    "range": [
      2955,
      2956
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2957,
    "end": 2963,
    "range": [
      2957,
      2963
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2964,
    "end": 2965,
    "range": [
      2964,
      2965
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2965,
    "end": 2966,
    "range": [
      2965,
      2966
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2971,
    "end": 2974,
    "range": [
      2971,
      2974
    ]
  },
  {
    "type": "Identifier",
    "value": "r16",
    "start": 2975,
    "end": 2978,
    "range": [
      2975,
      2978
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2979,
    "end": 2980,
    "range": [
      2979,
      2980
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2981,
    "end": 2985,
    "range": [
      2981,
      2985
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2986,
    "end": 2987,
    "range": [
      2986,
      2987
    ]
  },
  {
    "type": "Identifier",
    "value": "ac",
    "start": 2988,
    "end": 2990,
    "range": [
      2988,
      2990
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2991,
    "end": 2992,
    "range": [
      2991,
      2992
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2993,
    "end": 2994,
    "range": [
      2993,
      2994
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2994,
    "end": 2995,
    "range": [
      2994,
      2995
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3006,
    "end": 3009,
    "range": [
      3006,
      3009
    ]
  },
  {
    "type": "Identifier",
    "value": "r16",
    "start": 3010,
    "end": 3013,
    "range": [
      3010,
      3013
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3014,
    "end": 3015,
    "range": [
      3014,
      3015
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3016,
    "end": 3020,
    "range": [
      3016,
      3020
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3021,
    "end": 3022,
    "range": [
      3021,
      3022
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3023,
    "end": 3024,
    "range": [
      3023,
      3024
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3025,
    "end": 3026,
    "range": [
      3025,
      3026
    ]
  },
  {
    "type": "Identifier",
    "value": "ac",
    "start": 3027,
    "end": 3029,
    "range": [
      3027,
      3029
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3029,
    "end": 3030,
    "range": [
      3029,
      3030
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3037,
    "end": 3038,
    "range": [
      3037,
      3038
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3040,
    "end": 3048,
    "range": [
      3040,
      3048
    ]
  },
  {
    "type": "Identifier",
    "value": "f19",
    "start": 3049,
    "end": 3052,
    "range": [
      3049,
      3052
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3052,
    "end": 3053,
    "range": [
      3052,
      3053
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3053,
    "end": 3054,
    "range": [
      3053,
      3054
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3054,
    "end": 3055,
    "range": [
      3054,
      3055
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3055,
    "end": 3056,
    "range": [
      3055,
      3056
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3056,
    "end": 3057,
    "range": [
      3056,
      3057
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3057,
    "end": 3058,
    "range": [
      3057,
      3058
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3059,
    "end": 3060,
    "range": [
      3059,
      3060
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3060,
    "end": 3061,
    "range": [
      3060,
      3061
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3062,
    "end": 3063,
    "range": [
      3062,
      3063
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3068,
    "end": 3076,
    "range": [
      3068,
      3076
    ]
  },
  {
    "type": "Identifier",
    "value": "f17",
    "start": 3077,
    "end": 3080,
    "range": [
      3077,
      3080
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3080,
    "end": 3081,
    "range": [
      3080,
      3081
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3081,
    "end": 3082,
    "range": [
      3081,
      3082
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3083,
    "end": 3090,
    "range": [
      3083,
      3090
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3091,
    "end": 3092,
    "range": [
      3091,
      3092
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3092,
    "end": 3093,
    "range": [
      3092,
      3093
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3093,
    "end": 3094,
    "range": [
      3093,
      3094
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3094,
    "end": 3095,
    "range": [
      3094,
      3095
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3095,
    "end": 3096,
    "range": [
      3095,
      3096
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3097,
    "end": 3098,
    "range": [
      3097,
      3098
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3098,
    "end": 3099,
    "range": [
      3098,
      3099
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3100,
    "end": 3101,
    "range": [
      3100,
      3101
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3110,
    "end": 3113,
    "range": [
      3110,
      3113
    ]
  },
  {
    "type": "Identifier",
    "value": "r17",
    "start": 3114,
    "end": 3117,
    "range": [
      3114,
      3117
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3118,
    "end": 3119,
    "range": [
      3118,
      3119
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3120,
    "end": 3124,
    "range": [
      3120,
      3124
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3125,
    "end": 3126,
    "range": [
      3125,
      3126
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3127,
    "end": 3128,
    "range": [
      3127,
      3128
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3129,
    "end": 3130,
    "range": [
      3129,
      3130
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3131,
    "end": 3132,
    "range": [
      3131,
      3132
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3132,
    "end": 3133,
    "range": [
      3132,
      3133
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3148,
    "end": 3151,
    "range": [
      3148,
      3151
    ]
  },
  {
    "type": "Identifier",
    "value": "r17",
    "start": 3152,
    "end": 3155,
    "range": [
      3152,
      3155
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3156,
    "end": 3157,
    "range": [
      3156,
      3157
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3158,
    "end": 3162,
    "range": [
      3158,
      3162
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3163,
    "end": 3164,
    "range": [
      3163,
      3164
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3165,
    "end": 3166,
    "range": [
      3165,
      3166
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3167,
    "end": 3168,
    "range": [
      3167,
      3168
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3169,
    "end": 3170,
    "range": [
      3169,
      3170
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3170,
    "end": 3171,
    "range": [
      3170,
      3171
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3182,
    "end": 3183,
    "range": [
      3182,
      3183
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3189,
    "end": 3197,
    "range": [
      3189,
      3197
    ]
  },
  {
    "type": "Identifier",
    "value": "f18",
    "start": 3198,
    "end": 3201,
    "range": [
      3198,
      3201
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3201,
    "end": 3202,
    "range": [
      3201,
      3202
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 3202,
    "end": 3203,
    "range": [
      3202,
      3203
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3204,
    "end": 3211,
    "range": [
      3204,
      3211
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3212,
    "end": 3213,
    "range": [
      3212,
      3213
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3213,
    "end": 3214,
    "range": [
      3213,
      3214
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3215,
    "end": 3216,
    "range": [
      3215,
      3216
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3217,
    "end": 3224,
    "range": [
      3217,
      3224
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3225,
    "end": 3226,
    "range": [
      3225,
      3226
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3226,
    "end": 3227,
    "range": [
      3226,
      3227
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3227,
    "end": 3228,
    "range": [
      3227,
      3228
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3228,
    "end": 3229,
    "range": [
      3228,
      3229
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3229,
    "end": 3230,
    "range": [
      3229,
      3230
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 3231,
    "end": 3232,
    "range": [
      3231,
      3232
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3232,
    "end": 3233,
    "range": [
      3232,
      3233
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3234,
    "end": 3235,
    "range": [
      3234,
      3235
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3244,
    "end": 3247,
    "range": [
      3244,
      3247
    ]
  },
  {
    "type": "Identifier",
    "value": "r18",
    "start": 3248,
    "end": 3251,
    "range": [
      3248,
      3251
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3252,
    "end": 3253,
    "range": [
      3252,
      3253
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3254,
    "end": 3258,
    "range": [
      3254,
      3258
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3259,
    "end": 3260,
    "range": [
      3259,
      3260
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3261,
    "end": 3262,
    "range": [
      3261,
      3262
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3263,
    "end": 3264,
    "range": [
      3263,
      3264
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3265,
    "end": 3266,
    "range": [
      3265,
      3266
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3266,
    "end": 3267,
    "range": [
      3266,
      3267
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3282,
    "end": 3285,
    "range": [
      3282,
      3285
    ]
  },
  {
    "type": "Identifier",
    "value": "r18",
    "start": 3286,
    "end": 3289,
    "range": [
      3286,
      3289
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3290,
    "end": 3291,
    "range": [
      3290,
      3291
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3292,
    "end": 3296,
    "range": [
      3292,
      3296
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3297,
    "end": 3298,
    "range": [
      3297,
      3298
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3299,
    "end": 3300,
    "range": [
      3299,
      3300
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3301,
    "end": 3302,
    "range": [
      3301,
      3302
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3303,
    "end": 3304,
    "range": [
      3303,
      3304
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3304,
    "end": 3305,
    "range": [
      3304,
      3305
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3316,
    "end": 3317,
    "range": [
      3316,
      3317
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3318,
    "end": 3319,
    "range": [
      3318,
      3319
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3321,
    "end": 3329,
    "range": [
      3321,
      3329
    ]
  },
  {
    "type": "Identifier",
    "value": "f20",
    "start": 3330,
    "end": 3333,
    "range": [
      3330,
      3333
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3333,
    "end": 3334,
    "range": [
      3333,
      3334
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3334,
    "end": 3335,
    "range": [
      3334,
      3335
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3336,
    "end": 3343,
    "range": [
      3336,
      3343
    ]
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 3344,
    "end": 3350,
    "range": [
      3344,
      3350
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3350,
    "end": 3351,
    "range": [
      3350,
      3351
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3351,
    "end": 3352,
    "range": [
      3351,
      3352
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3352,
    "end": 3353,
    "range": [
      3352,
      3353
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3353,
    "end": 3354,
    "range": [
      3353,
      3354
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3355,
    "end": 3356,
    "range": [
      3355,
      3356
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3356,
    "end": 3357,
    "range": [
      3356,
      3357
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3358,
    "end": 3359,
    "range": [
      3358,
      3359
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3364,
    "end": 3367,
    "range": [
      3364,
      3367
    ]
  },
  {
    "type": "Identifier",
    "value": "r19",
    "start": 3368,
    "end": 3371,
    "range": [
      3368,
      3371
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3372,
    "end": 3373,
    "range": [
      3372,
      3373
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3374,
    "end": 3378,
    "range": [
      3374,
      3378
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3379,
    "end": 3380,
    "range": [
      3379,
      3380
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3381,
    "end": 3384,
    "range": [
      3381,
      3384
    ]
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 3385,
    "end": 3391,
    "range": [
      3385,
      3391
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3391,
    "end": 3392,
    "range": [
      3391,
      3392
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3392,
    "end": 3393,
    "range": [
      3392,
      3393
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3394,
    "end": 3395,
    "range": [
      3394,
      3395
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3396,
    "end": 3397,
    "range": [
      3396,
      3397
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3397,
    "end": 3398,
    "range": [
      3397,
      3398
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3409,
    "end": 3412,
    "range": [
      3409,
      3412
    ]
  },
  {
    "type": "Identifier",
    "value": "r19",
    "start": 3413,
    "end": 3416,
    "range": [
      3413,
      3416
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3417,
    "end": 3418,
    "range": [
      3417,
      3418
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3419,
    "end": 3423,
    "range": [
      3419,
      3423
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3424,
    "end": 3425,
    "range": [
      3424,
      3425
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3426,
    "end": 3427,
    "range": [
      3426,
      3427
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3428,
    "end": 3429,
    "range": [
      3428,
      3429
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3430,
    "end": 3433,
    "range": [
      3430,
      3433
    ]
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 3434,
    "end": 3440,
    "range": [
      3434,
      3440
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3440,
    "end": 3441,
    "range": [
      3440,
      3441
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3441,
    "end": 3442,
    "range": [
      3441,
      3442
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3442,
    "end": 3443,
    "range": [
      3442,
      3443
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3450,
    "end": 3451,
    "range": [
      3450,
      3451
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3453,
    "end": 3461,
    "range": [
      3453,
      3461
    ]
  },
  {
    "type": "Identifier",
    "value": "f21",
    "start": 3462,
    "end": 3465,
    "range": [
      3462,
      3465
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3465,
    "end": 3466,
    "range": [
      3465,
      3466
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3466,
    "end": 3467,
    "range": [
      3466,
      3467
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3468,
    "end": 3475,
    "range": [
      3468,
      3475
    ]
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 3476,
    "end": 3482,
    "range": [
      3476,
      3482
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3482,
    "end": 3483,
    "range": [
      3482,
      3483
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3483,
    "end": 3484,
    "range": [
      3483,
      3484
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3484,
    "end": 3485,
    "range": [
      3484,
      3485
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3485,
    "end": 3486,
    "range": [
      3485,
      3486
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3487,
    "end": 3488,
    "range": [
      3487,
      3488
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3488,
    "end": 3489,
    "range": [
      3488,
      3489
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3490,
    "end": 3491,
    "range": [
      3490,
      3491
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3496,
    "end": 3499,
    "range": [
      3496,
      3499
    ]
  },
  {
    "type": "Identifier",
    "value": "r20",
    "start": 3500,
    "end": 3503,
    "range": [
      3500,
      3503
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3504,
    "end": 3505,
    "range": [
      3504,
      3505
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3506,
    "end": 3510,
    "range": [
      3506,
      3510
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3511,
    "end": 3512,
    "range": [
      3511,
      3512
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3513,
    "end": 3514,
    "range": [
      3513,
      3514
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3514,
    "end": 3515,
    "range": [
      3514,
      3515
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3516,
    "end": 3517,
    "range": [
      3516,
      3517
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3518,
    "end": 3519,
    "range": [
      3518,
      3519
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3519,
    "end": 3520,
    "range": [
      3519,
      3520
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3531,
    "end": 3534,
    "range": [
      3531,
      3534
    ]
  },
  {
    "type": "Identifier",
    "value": "r20",
    "start": 3535,
    "end": 3538,
    "range": [
      3535,
      3538
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3539,
    "end": 3540,
    "range": [
      3539,
      3540
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3541,
    "end": 3545,
    "range": [
      3541,
      3545
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3546,
    "end": 3547,
    "range": [
      3546,
      3547
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3548,
    "end": 3549,
    "range": [
      3548,
      3549
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3550,
    "end": 3551,
    "range": [
      3550,
      3551
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3552,
    "end": 3553,
    "range": [
      3552,
      3553
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3553,
    "end": 3554,
    "range": [
      3553,
      3554
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3554,
    "end": 3555,
    "range": [
      3554,
      3555
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3562,
    "end": 3563,
    "range": [
      3562,
      3563
    ]
  }
]
```
