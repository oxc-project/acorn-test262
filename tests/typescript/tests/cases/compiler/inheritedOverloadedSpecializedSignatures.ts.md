__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 21,
                    "end": 27
                  },
                  "start": 20,
                  "end": 27
                },
                "start": 17,
                "end": 27
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 29,
                "end": 33
              },
              "start": 28,
              "end": 33
            },
            "start": 16,
            "end": 34
          }
        ],
        "start": 12,
        "end": 36
      },
      "declare": false,
      "start": 0,
      "end": 36
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 49
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 58,
            "end": 59
          },
          "typeArguments": null,
          "start": 58,
          "end": 59
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "'foo'",
                      "start": 69,
                      "end": 74
                    },
                    "start": 69,
                    "end": 74
                  },
                  "start": 68,
                  "end": 74
                },
                "start": 65,
                "end": 74
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 76,
                "end": 82
              },
              "start": 75,
              "end": 82
            },
            "start": 64,
            "end": 83
          }
        ],
        "start": 60,
        "end": 85
      },
      "declare": false,
      "start": 38,
      "end": 85
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 93,
                  "end": 94
                },
                "typeArguments": null,
                "start": 93,
                "end": 94
              },
              "start": 92,
              "end": 94
            },
            "start": 91,
            "end": 94
          },
          "init": null,
          "definite": false,
          "start": 91,
          "end": 94
        }
      ],
      "declare": false,
      "start": 87,
      "end": 95
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 117
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 118,
                "end": 123
              }
            ],
            "optional": false,
            "start": 116,
            "end": 124
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "charAt",
            "optional": false,
            "typeAnnotation": null,
            "start": 125,
            "end": 131
          },
          "optional": false,
          "computed": false,
          "start": 116,
          "end": 131
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 132,
            "end": 133
          }
        ],
        "optional": false,
        "start": 116,
        "end": 134
      },
      "directive": null,
      "start": 116,
      "end": 135
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 147,
        "end": 148
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "A1",
                      "raw": "'A1'",
                      "start": 159,
                      "end": 163
                    },
                    "start": 159,
                    "end": 163
                  },
                  "start": 157,
                  "end": 163
                },
                "start": 156,
                "end": 163
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 166,
                "end": 172
              },
              "start": 164,
              "end": 172
            },
            "start": 155,
            "end": 173
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 182,
                    "end": 188
                  },
                  "start": 180,
                  "end": 188
                },
                "start": 179,
                "end": 188
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 191,
                "end": 195
              },
              "start": 189,
              "end": 195
            },
            "start": 178,
            "end": 196
          }
        ],
        "start": 149,
        "end": 198
      },
      "declare": false,
      "start": 137,
      "end": 198
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 210,
        "end": 211
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 220,
            "end": 221
          },
          "typeArguments": null,
          "start": 220,
          "end": 221
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "B1",
                      "raw": "'B1'",
                      "start": 232,
                      "end": 236
                    },
                    "start": 232,
                    "end": 236
                  },
                  "start": 230,
                  "end": 236
                },
                "start": 229,
                "end": 236
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 239,
                "end": 245
              },
              "start": 237,
              "end": 245
            },
            "start": 228,
            "end": 246
          }
        ],
        "start": 222,
        "end": 248
      },
      "declare": false,
      "start": 200,
      "end": 248
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 260,
        "end": 261
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "A2",
                      "raw": "'A2'",
                      "start": 272,
                      "end": 276
                    },
                    "start": 272,
                    "end": 276
                  },
                  "start": 270,
                  "end": 276
                },
                "start": 269,
                "end": 276
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 279,
                "end": 286
              },
              "start": 277,
              "end": 286
            },
            "start": 268,
            "end": 287
          }
        ],
        "start": 262,
        "end": 289
      },
      "declare": false,
      "start": 250,
      "end": 289
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 301,
        "end": 302
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "B2",
                      "raw": "'B2'",
                      "start": 314,
                      "end": 318
                    },
                    "start": 314,
                    "end": 318
                  },
                  "start": 312,
                  "end": 318
                },
                "start": 311,
                "end": 318
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 321,
                  "end": 327
                },
                "start": 321,
                "end": 329
              },
              "start": 319,
              "end": 329
            },
            "start": 310,
            "end": 330
          }
        ],
        "start": 304,
        "end": 332
      },
      "declare": false,
      "start": 291,
      "end": 332
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 344,
        "end": 346
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 355,
            "end": 356
          },
          "typeArguments": null,
          "start": 355,
          "end": 356
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "C1",
                      "raw": "'C1'",
                      "start": 364,
                      "end": 368
                    },
                    "start": 364,
                    "end": 368
                  },
                  "start": 362,
                  "end": 368
                },
                "start": 361,
                "end": 368
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 371,
                  "end": 377
                },
                "start": 371,
                "end": 379
              },
              "start": 369,
              "end": 379
            },
            "start": 360,
            "end": 380
          }
        ],
        "start": 357,
        "end": 382
      },
      "declare": false,
      "start": 334,
      "end": 382
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 394,
        "end": 396
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 405,
            "end": 406
          },
          "typeArguments": null,
          "start": 405,
          "end": 406
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "C2",
                      "raw": "'C2'",
                      "start": 414,
                      "end": 418
                    },
                    "start": 414,
                    "end": 418
                  },
                  "start": 412,
                  "end": 418
                },
                "start": 411,
                "end": 418
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSBooleanKeyword",
                  "start": 421,
                  "end": 428
                },
                "start": 421,
                "end": 430
              },
              "start": 419,
              "end": 430
            },
            "start": 410,
            "end": 431
          }
        ],
        "start": 407,
        "end": 433
      },
      "declare": false,
      "start": 384,
      "end": 433
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 445,
        "end": 446
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "C1",
            "optional": false,
            "typeAnnotation": null,
            "start": 455,
            "end": 457
          },
          "typeArguments": null,
          "start": 455,
          "end": 457
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "C2",
            "optional": false,
            "typeAnnotation": null,
            "start": 459,
            "end": 461
          },
          "typeArguments": null,
          "start": 459,
          "end": 461
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "C",
                      "raw": "'C'",
                      "start": 469,
                      "end": 472
                    },
                    "start": 469,
                    "end": 472
                  },
                  "start": 467,
                  "end": 472
                },
                "start": 466,
                "end": 472
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 475,
                "end": 481
              },
              "start": 473,
              "end": 481
            },
            "start": 465,
            "end": 482
          }
        ],
        "start": 462,
        "end": 484
      },
      "declare": false,
      "start": 435,
      "end": 484
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 493,
                  "end": 494
                },
                "typeArguments": null,
                "start": 493,
                "end": 494
              },
              "start": 491,
              "end": 494
            },
            "start": 490,
            "end": 494
          },
          "init": null,
          "definite": false,
          "start": 490,
          "end": 494
        }
      ],
      "declare": false,
      "start": 486,
      "end": 495
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 540,
                  "end": 546
                },
                "start": 540,
                "end": 548
              },
              "start": 538,
              "end": 548
            },
            "start": 536,
            "end": 548
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 551,
              "end": 552
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "B2",
                "raw": "'B2'",
                "start": 553,
                "end": 557
              }
            ],
            "optional": false,
            "start": 551,
            "end": 558
          },
          "definite": false,
          "start": 536,
          "end": 558
        }
      ],
      "declare": false,
      "start": 532,
      "end": 559
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
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 568,
                "end": 574
              },
              "start": 566,
              "end": 574
            },
            "start": 564,
            "end": 574
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 577,
              "end": 578
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "B1",
                "raw": "'B1'",
                "start": 579,
                "end": 583
              }
            ],
            "optional": false,
            "start": 577,
            "end": 584
          },
          "definite": false,
          "start": 564,
          "end": 584
        }
      ],
      "declare": false,
      "start": 560,
      "end": 585
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
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 594,
                "end": 601
              },
              "start": 592,
              "end": 601
            },
            "start": 590,
            "end": 601
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 604,
              "end": 605
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "A2",
                "raw": "'A2'",
                "start": 606,
                "end": 610
              }
            ],
            "optional": false,
            "start": 604,
            "end": 611
          },
          "definite": false,
          "start": 590,
          "end": 611
        }
      ],
      "declare": false,
      "start": 586,
      "end": 612
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
            "name": "x4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 621,
                "end": 627
              },
              "start": 619,
              "end": 627
            },
            "start": 617,
            "end": 627
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 630,
              "end": 631
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "A1",
                "raw": "'A1'",
                "start": 632,
                "end": 636
              }
            ],
            "optional": false,
            "start": 630,
            "end": 637
          },
          "definite": false,
          "start": 617,
          "end": 637
        }
      ],
      "declare": false,
      "start": 613,
      "end": 638
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
            "name": "x5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 647,
                "end": 651
              },
              "start": 645,
              "end": 651
            },
            "start": 643,
            "end": 651
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 654,
              "end": 655
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "A0",
                "raw": "'A0'",
                "start": 656,
                "end": 660
              }
            ],
            "optional": false,
            "start": 654,
            "end": 661
          },
          "definite": false,
          "start": 643,
          "end": 661
        }
      ],
      "declare": false,
      "start": 639,
      "end": 662
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
            "name": "x6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 671,
                  "end": 677
                },
                "start": 671,
                "end": 679
              },
              "start": 669,
              "end": 679
            },
            "start": 667,
            "end": 679
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 682,
              "end": 683
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "C1",
                "raw": "'C1'",
                "start": 684,
                "end": 688
              }
            ],
            "optional": false,
            "start": 682,
            "end": 689
          },
          "definite": false,
          "start": 667,
          "end": 689
        }
      ],
      "declare": false,
      "start": 663,
      "end": 690
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
            "name": "x7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSBooleanKeyword",
                  "start": 699,
                  "end": 706
                },
                "start": 699,
                "end": 708
              },
              "start": 697,
              "end": 708
            },
            "start": 695,
            "end": 708
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 711,
              "end": 712
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "C2",
                "raw": "'C2'",
                "start": 713,
                "end": 717
              }
            ],
            "optional": false,
            "start": 711,
            "end": 718
          },
          "definite": false,
          "start": 695,
          "end": 718
        }
      ],
      "declare": false,
      "start": 691,
      "end": 719
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
            "name": "x8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 728,
                "end": 734
              },
              "start": 726,
              "end": 734
            },
            "start": 724,
            "end": 734
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 737,
              "end": 738
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "C",
                "raw": "'C'",
                "start": 739,
                "end": 742
              }
            ],
            "optional": false,
            "start": 737,
            "end": 743
          },
          "definite": false,
          "start": 724,
          "end": 743
        }
      ],
      "declare": false,
      "start": 720,
      "end": 744
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
            "name": "x9",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 753,
                "end": 757
              },
              "start": 751,
              "end": 757
            },
            "start": 749,
            "end": 757
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 760,
              "end": 761
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "generic",
                "raw": "'generic'",
                "start": 762,
                "end": 771
              }
            ],
            "optional": false,
            "start": 760,
            "end": 772
          },
          "definite": false,
          "start": 749,
          "end": 772
        }
      ],
      "declare": false,
      "start": 745,
      "end": 773
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 773
}
```
