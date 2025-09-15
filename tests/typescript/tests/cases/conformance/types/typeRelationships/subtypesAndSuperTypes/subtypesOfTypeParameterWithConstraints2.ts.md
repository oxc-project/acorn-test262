__ESTREE_TEST__:PASS:
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
