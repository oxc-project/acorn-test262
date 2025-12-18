__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Covariant",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 19
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
              "start": 20,
              "end": 21
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 20,
            "end": 21
          }
        ],
        "start": 19,
        "end": 22
      },
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
              "start": 29,
              "end": 32
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 34,
                    "end": 35
                  },
                  "typeArguments": null,
                  "start": 34,
                  "end": 35
                },
                "extendsType": {
                  "type": "TSStringKeyword",
                  "start": 44,
                  "end": 50
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 53,
                    "end": 54
                  },
                  "typeArguments": null,
                  "start": 53,
                  "end": 54
                },
                "falseType": {
                  "type": "TSNumberKeyword",
                  "start": 57,
                  "end": 63
                },
                "start": 34,
                "end": 63
              },
              "start": 32,
              "end": 63
            },
            "accessibility": null,
            "static": false,
            "start": 29,
            "end": 64
          }
        ],
        "start": 23,
        "end": 66
      },
      "declare": false,
      "start": 0,
      "end": 66
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Contravariant",
        "optional": false,
        "typeAnnotation": null,
        "start": 78,
        "end": 91
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
              "start": 92,
              "end": 93
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 92,
            "end": 93
          }
        ],
        "start": 91,
        "end": 94
      },
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
              "start": 101,
              "end": 104
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 106,
                    "end": 107
                  },
                  "typeArguments": null,
                  "start": 106,
                  "end": 107
                },
                "extendsType": {
                  "type": "TSStringKeyword",
                  "start": 116,
                  "end": 122
                },
                "trueType": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 131,
                      "end": 132
                    },
                    "typeArguments": null,
                    "start": 131,
                    "end": 132
                  },
                  "start": 125,
                  "end": 132
                },
                "falseType": {
                  "type": "TSNumberKeyword",
                  "start": 135,
                  "end": 141
                },
                "start": 106,
                "end": 141
              },
              "start": 104,
              "end": 141
            },
            "accessibility": null,
            "static": false,
            "start": 101,
            "end": 142
          }
        ],
        "start": 95,
        "end": 144
      },
      "declare": false,
      "start": 68,
      "end": 144
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Invariant",
        "optional": false,
        "typeAnnotation": null,
        "start": 156,
        "end": 165
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
              "start": 166,
              "end": 167
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 166,
            "end": 167
          }
        ],
        "start": 165,
        "end": 168
      },
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
              "start": 175,
              "end": 178
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 180,
                    "end": 181
                  },
                  "typeArguments": null,
                  "start": 180,
                  "end": 181
                },
                "extendsType": {
                  "type": "TSStringKeyword",
                  "start": 190,
                  "end": 196
                },
                "trueType": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 205,
                      "end": 206
                    },
                    "typeArguments": null,
                    "start": 205,
                    "end": 206
                  },
                  "start": 199,
                  "end": 206
                },
                "falseType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 209,
                    "end": 210
                  },
                  "typeArguments": null,
                  "start": 209,
                  "end": 210
                },
                "start": 180,
                "end": 210
              },
              "start": 178,
              "end": 210
            },
            "accessibility": null,
            "static": false,
            "start": 175,
            "end": 211
          }
        ],
        "start": 169,
        "end": 213
      },
      "declare": false,
      "start": 146,
      "end": 213
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 224,
        "end": 226
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 227,
              "end": 228
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 227,
            "end": 228
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 230,
              "end": 231
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 240,
                "end": 241
              },
              "typeArguments": null,
              "start": 240,
              "end": 241
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 230,
            "end": 241
          }
        ],
        "start": 226,
        "end": 242
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
                "name": "Covariant",
                "optional": false,
                "typeAnnotation": null,
                "start": 246,
                "end": 255
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 256,
                      "end": 257
                    },
                    "typeArguments": null,
                    "start": 256,
                    "end": 257
                  }
                ],
                "start": 255,
                "end": 258
              },
              "start": 246,
              "end": 258
            },
            "start": 244,
            "end": 258
          },
          "start": 243,
          "end": 258
        },
        {
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
                "name": "Covariant",
                "optional": false,
                "typeAnnotation": null,
                "start": 263,
                "end": 272
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 273,
                      "end": 274
                    },
                    "typeArguments": null,
                    "start": 273,
                    "end": 274
                  }
                ],
                "start": 272,
                "end": 275
              },
              "start": 263,
              "end": 275
            },
            "start": 261,
            "end": 275
          },
          "start": 260,
          "end": 275
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 283,
                "end": 284
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 287,
                "end": 288
              },
              "start": 283,
              "end": 288
            },
            "directive": null,
            "start": 283,
            "end": 289
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 294,
                "end": 295
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 298,
                "end": 299
              },
              "start": 294,
              "end": 299
            },
            "directive": null,
            "start": 294,
            "end": 300
          }
        ],
        "start": 277,
        "end": 312
      },
      "expression": false,
      "start": 215,
      "end": 312
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 323,
        "end": 325
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 326,
              "end": 327
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 326,
            "end": 327
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 329,
              "end": 330
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 339,
                "end": 340
              },
              "typeArguments": null,
              "start": 339,
              "end": 340
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 329,
            "end": 340
          }
        ],
        "start": 325,
        "end": 341
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
                "name": "Contravariant",
                "optional": false,
                "typeAnnotation": null,
                "start": 345,
                "end": 358
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 359,
                      "end": 360
                    },
                    "typeArguments": null,
                    "start": 359,
                    "end": 360
                  }
                ],
                "start": 358,
                "end": 361
              },
              "start": 345,
              "end": 361
            },
            "start": 343,
            "end": 361
          },
          "start": 342,
          "end": 361
        },
        {
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
                "name": "Contravariant",
                "optional": false,
                "typeAnnotation": null,
                "start": 366,
                "end": 379
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 380,
                      "end": 381
                    },
                    "typeArguments": null,
                    "start": 380,
                    "end": 381
                  }
                ],
                "start": 379,
                "end": 382
              },
              "start": 366,
              "end": 382
            },
            "start": 364,
            "end": 382
          },
          "start": 363,
          "end": 382
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 390,
                "end": 391
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 394,
                "end": 395
              },
              "start": 390,
              "end": 395
            },
            "directive": null,
            "start": 390,
            "end": 396
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 411,
                "end": 412
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 415,
                "end": 416
              },
              "start": 411,
              "end": 416
            },
            "directive": null,
            "start": 411,
            "end": 417
          }
        ],
        "start": 384,
        "end": 419
      },
      "expression": false,
      "start": 314,
      "end": 419
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 430,
        "end": 432
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 433,
              "end": 434
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 433,
            "end": 434
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 436,
              "end": 437
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 446,
                "end": 447
              },
              "typeArguments": null,
              "start": 446,
              "end": 447
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 436,
            "end": 447
          }
        ],
        "start": 432,
        "end": 448
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
                "name": "Invariant",
                "optional": false,
                "typeAnnotation": null,
                "start": 452,
                "end": 461
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 462,
                      "end": 463
                    },
                    "typeArguments": null,
                    "start": 462,
                    "end": 463
                  }
                ],
                "start": 461,
                "end": 464
              },
              "start": 452,
              "end": 464
            },
            "start": 450,
            "end": 464
          },
          "start": 449,
          "end": 464
        },
        {
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
                "name": "Invariant",
                "optional": false,
                "typeAnnotation": null,
                "start": 469,
                "end": 478
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 479,
                      "end": 480
                    },
                    "typeArguments": null,
                    "start": 479,
                    "end": 480
                  }
                ],
                "start": 478,
                "end": 481
              },
              "start": 469,
              "end": 481
            },
            "start": 467,
            "end": 481
          },
          "start": 466,
          "end": 481
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 489,
                "end": 490
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 493,
                "end": 494
              },
              "start": 489,
              "end": 494
            },
            "directive": null,
            "start": 489,
            "end": 495
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 510,
                "end": 511
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 514,
                "end": 515
              },
              "start": 510,
              "end": 515
            },
            "directive": null,
            "start": 510,
            "end": 516
          }
        ],
        "start": 483,
        "end": 528
      },
      "expression": false,
      "start": 421,
      "end": 528
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 601,
        "end": 611
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
              "start": 612,
              "end": 613
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 612,
            "end": 613
          }
        ],
        "start": 611,
        "end": 614
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
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
                "start": 622,
                "end": 623
              },
              "typeArguments": null,
              "start": 622,
              "end": 623
            },
            "start": 620,
            "end": 623
          },
          "start": 615,
          "end": 623
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 626,
            "end": 631
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Extract",
                "optional": false,
                "typeAnnotation": null,
                "start": 635,
                "end": 642
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 643,
                      "end": 644
                    },
                    "typeArguments": null,
                    "start": 643,
                    "end": 644
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Function",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 646,
                      "end": 654
                    },
                    "typeArguments": null,
                    "start": 646,
                    "end": 654
                  }
                ],
                "start": 642,
                "end": 655
              },
              "start": 635,
              "end": 655
            },
            "start": 635,
            "end": 655
          },
          "start": 626,
          "end": 655
        },
        "start": 624,
        "end": 655
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 676,
                  "end": 681
                },
                "prefix": true,
                "start": 669,
                "end": 681
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "function",
                "raw": "\"function\"",
                "start": 686,
                "end": 696
              },
              "start": 669,
              "end": 696
            },
            "start": 662,
            "end": 697
          }
        ],
        "start": 656,
        "end": 699
      },
      "expression": false,
      "start": 592,
      "end": 699
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 710,
        "end": 721
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
              "start": 722,
              "end": 723
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 722,
            "end": 723
          }
        ],
        "start": 721,
        "end": 724
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "item",
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
                "start": 731,
                "end": 732
              },
              "typeArguments": null,
              "start": 731,
              "end": 732
            },
            "start": 729,
            "end": 732
          },
          "start": 725,
          "end": 732
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 744,
                "end": 754
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "item",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 755,
                  "end": 759
                }
              ],
              "optional": false,
              "start": 744,
              "end": 760
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 779,
                    "end": 783
                  },
                  "start": 772,
                  "end": 784
                }
              ],
              "start": 762,
              "end": 790
            },
            "alternate": null,
            "start": 740,
            "end": 790
          },
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null,
                "start": 805,
                "end": 810
              },
              "typeArguments": null,
              "arguments": [],
              "start": 801,
              "end": 812
            },
            "start": 795,
            "end": 813
          }
        ],
        "start": 734,
        "end": 815
      },
      "expression": false,
      "start": 701,
      "end": 815
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 826,
        "end": 829
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
              "start": 830,
              "end": 831
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 830,
            "end": 831
          }
        ],
        "start": 829,
        "end": 832
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
                "start": 836,
                "end": 837
              },
              "typeArguments": null,
              "start": 836,
              "end": 837
            },
            "start": 834,
            "end": 837
          },
          "start": 833,
          "end": 837
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 849,
                "end": 859
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 860,
                  "end": 861
                }
              ],
              "optional": false,
              "start": 849,
              "end": 862
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Function",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 883,
                              "end": 891
                            },
                            "typeArguments": null,
                            "start": 883,
                            "end": 891
                          },
                          "start": 881,
                          "end": 891
                        },
                        "start": 880,
                        "end": 891
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 894,
                        "end": 895
                      },
                      "definite": false,
                      "start": 880,
                      "end": 895
                    }
                  ],
                  "declare": false,
                  "start": 874,
                  "end": 896
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
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
                              "start": 914,
                              "end": 915
                            },
                            "typeArguments": null,
                            "start": 914,
                            "end": 915
                          },
                          "start": 912,
                          "end": 915
                        },
                        "start": 911,
                        "end": 915
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 918,
                        "end": 919
                      },
                      "definite": false,
                      "start": 911,
                      "end": 919
                    }
                  ],
                  "declare": false,
                  "start": 905,
                  "end": 920
                }
              ],
              "start": 864,
              "end": 926
            },
            "alternate": null,
            "start": 845,
            "end": 926
          }
        ],
        "start": 839,
        "end": 928
      },
      "expression": false,
      "start": 817,
      "end": 928
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 939,
        "end": 942
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 946,
                  "end": 952
                },
                {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 962,
                      "end": 968
                    },
                    "start": 959,
                    "end": 968
                  },
                  "start": 956,
                  "end": 968
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 972,
                  "end": 981
                }
              ],
              "start": 946,
              "end": 981
            },
            "start": 944,
            "end": 981
          },
          "start": 943,
          "end": 981
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 993,
                "end": 1003
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1004,
                  "end": 1005
                }
              ],
              "optional": false,
              "start": 993,
              "end": 1006
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1018,
                      "end": 1019
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1018,
                    "end": 1021
                  },
                  "directive": null,
                  "start": 1018,
                  "end": 1022
                }
              ],
              "start": 1008,
              "end": 1028
            },
            "alternate": null,
            "start": 989,
            "end": 1028
          }
        ],
        "start": 983,
        "end": 1030
      },
      "expression": false,
      "start": 930,
      "end": 1030
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1041,
        "end": 1044
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 1048,
                  "end": 1054
                },
                {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1064,
                      "end": 1070
                    },
                    "start": 1061,
                    "end": 1070
                  },
                  "start": 1058,
                  "end": 1070
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1074,
                  "end": 1083
                }
              ],
              "start": 1048,
              "end": 1083
            },
            "start": 1046,
            "end": 1083
          },
          "start": 1045,
          "end": 1083
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1097,
                  "end": 1098
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1101,
                    "end": 1112
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1113,
                      "end": 1114
                    }
                  ],
                  "optional": false,
                  "start": 1101,
                  "end": 1115
                },
                "definite": false,
                "start": 1097,
                "end": 1115
              }
            ],
            "declare": false,
            "start": 1091,
            "end": 1116
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 1138,
                "end": 1139
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1138,
              "end": 1141
            },
            "directive": null,
            "start": 1138,
            "end": 1142
          }
        ],
        "start": 1085,
        "end": 1144
      },
      "expression": false,
      "start": 1032,
      "end": 1144
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1151,
        "end": 1154
      },
      "typeParameters": null,
      "typeAnnotation": {
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
              "start": 1159,
              "end": 1162
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1164,
                "end": 1170
              },
              "start": 1162,
              "end": 1170
            },
            "accessibility": null,
            "static": false,
            "start": 1159,
            "end": 1170
          }
        ],
        "start": 1157,
        "end": 1172
      },
      "declare": false,
      "start": 1146,
      "end": 1173
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 1179,
        "end": 1182
      },
      "typeParameters": null,
      "typeAnnotation": {
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 1187,
              "end": 1190
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1192,
                "end": 1198
              },
              "start": 1190,
              "end": 1198
            },
            "accessibility": null,
            "static": false,
            "start": 1187,
            "end": 1198
          }
        ],
        "start": 1185,
        "end": 1200
      },
      "declare": false,
      "start": 1174,
      "end": 1201
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fooBar",
        "optional": false,
        "typeAnnotation": null,
        "start": 1220,
        "end": 1226
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                    "start": 1232,
                    "end": 1235
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1237,
                      "end": 1243
                    },
                    "start": 1235,
                    "end": 1243
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1232,
                  "end": 1244
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1245,
                    "end": 1248
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1250,
                      "end": 1256
                    },
                    "start": 1248,
                    "end": 1256
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1245,
                  "end": 1256
                }
              ],
              "start": 1230,
              "end": 1258
            },
            "start": 1228,
            "end": 1258
          },
          "start": 1227,
          "end": 1258
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1261,
          "end": 1265
        },
        "start": 1259,
        "end": 1265
      },
      "body": null,
      "expression": false,
      "start": 1203,
      "end": 1266
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fooBat",
        "optional": false,
        "typeAnnotation": null,
        "start": 1284,
        "end": 1290
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                    "start": 1296,
                    "end": 1299
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1301,
                      "end": 1307
                    },
                    "start": 1299,
                    "end": 1307
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1296,
                  "end": 1308
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bat",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1309,
                    "end": 1312
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1314,
                      "end": 1320
                    },
                    "start": 1312,
                    "end": 1320
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1309,
                  "end": 1320
                }
              ],
              "start": 1294,
              "end": 1322
            },
            "start": 1292,
            "end": 1322
          },
          "start": 1291,
          "end": 1322
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1325,
          "end": 1329
        },
        "start": 1323,
        "end": 1329
      },
      "body": null,
      "expression": false,
      "start": 1267,
      "end": 1330
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Extract2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1337,
        "end": 1345
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
              "start": 1346,
              "end": 1347
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1346,
            "end": 1347
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1349,
              "end": 1350
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1349,
            "end": 1350
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 1352,
              "end": 1353
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1352,
            "end": 1353
          }
        ],
        "start": 1345,
        "end": 1354
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1357,
            "end": 1358
          },
          "typeArguments": null,
          "start": 1357,
          "end": 1358
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 1367,
            "end": 1368
          },
          "typeArguments": null,
          "start": 1367,
          "end": 1368
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1371,
              "end": 1372
            },
            "typeArguments": null,
            "start": 1371,
            "end": 1372
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 1381,
              "end": 1382
            },
            "typeArguments": null,
            "start": 1381,
            "end": 1382
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1385,
              "end": 1386
            },
            "typeArguments": null,
            "start": 1385,
            "end": 1386
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1389,
            "end": 1394
          },
          "start": 1371,
          "end": 1394
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1397,
          "end": 1402
        },
        "start": 1357,
        "end": 1402
      },
      "declare": false,
      "start": 1332,
      "end": 1403
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f20",
        "optional": false,
        "typeAnnotation": null,
        "start": 1414,
        "end": 1417
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
              "start": 1418,
              "end": 1419
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1418,
            "end": 1419
          }
        ],
        "start": 1417,
        "end": 1420
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
                "name": "Extract",
                "optional": false,
                "typeAnnotation": null,
                "start": 1424,
                "end": 1431
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Extract",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1432,
                      "end": 1439
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1440,
                            "end": 1441
                          },
                          "typeArguments": null,
                          "start": 1440,
                          "end": 1441
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1443,
                            "end": 1446
                          },
                          "typeArguments": null,
                          "start": 1443,
                          "end": 1446
                        }
                      ],
                      "start": 1439,
                      "end": 1447
                    },
                    "start": 1432,
                    "end": 1447
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1449,
                      "end": 1452
                    },
                    "typeArguments": null,
                    "start": 1449,
                    "end": 1452
                  }
                ],
                "start": 1431,
                "end": 1453
              },
              "start": 1424,
              "end": 1453
            },
            "start": 1422,
            "end": 1453
          },
          "start": 1421,
          "end": 1453
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
                "name": "Extract",
                "optional": false,
                "typeAnnotation": null,
                "start": 1458,
                "end": 1465
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1466,
                      "end": 1467
                    },
                    "typeArguments": null,
                    "start": 1466,
                    "end": 1467
                  },
                  {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1469,
                          "end": 1472
                        },
                        "typeArguments": null,
                        "start": 1469,
                        "end": 1472
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1475,
                          "end": 1478
                        },
                        "typeArguments": null,
                        "start": 1475,
                        "end": 1478
                      }
                    ],
                    "start": 1469,
                    "end": 1478
                  }
                ],
                "start": 1465,
                "end": 1479
              },
              "start": 1458,
              "end": 1479
            },
            "start": 1456,
            "end": 1479
          },
          "start": 1455,
          "end": 1479
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
                "name": "Extract2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1484,
                "end": 1492
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1493,
                      "end": 1494
                    },
                    "typeArguments": null,
                    "start": 1493,
                    "end": 1494
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1496,
                      "end": 1499
                    },
                    "typeArguments": null,
                    "start": 1496,
                    "end": 1499
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1501,
                      "end": 1504
                    },
                    "typeArguments": null,
                    "start": 1501,
                    "end": 1504
                  }
                ],
                "start": 1492,
                "end": 1505
              },
              "start": 1484,
              "end": 1505
            },
            "start": 1482,
            "end": 1505
          },
          "start": 1481,
          "end": 1505
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "fooBar",
                "optional": false,
                "typeAnnotation": null,
                "start": 1513,
                "end": 1519
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1520,
                  "end": 1521
                }
              ],
              "optional": false,
              "start": 1513,
              "end": 1522
            },
            "directive": null,
            "start": 1513,
            "end": 1523
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "fooBar",
                "optional": false,
                "typeAnnotation": null,
                "start": 1528,
                "end": 1534
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1535,
                  "end": 1536
                }
              ],
              "optional": false,
              "start": 1528,
              "end": 1537
            },
            "directive": null,
            "start": 1528,
            "end": 1538
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "fooBar",
                "optional": false,
                "typeAnnotation": null,
                "start": 1543,
                "end": 1549
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1550,
                  "end": 1551
                }
              ],
              "optional": false,
              "start": 1543,
              "end": 1552
            },
            "directive": null,
            "start": 1543,
            "end": 1553
          }
        ],
        "start": 1507,
        "end": 1555
      },
      "expression": false,
      "start": 1405,
      "end": 1555
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f21",
        "optional": false,
        "typeAnnotation": null,
        "start": 1566,
        "end": 1569
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
              "start": 1570,
              "end": 1571
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1570,
            "end": 1571
          }
        ],
        "start": 1569,
        "end": 1572
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
                "name": "Extract",
                "optional": false,
                "typeAnnotation": null,
                "start": 1576,
                "end": 1583
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Extract",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1584,
                      "end": 1591
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1592,
                            "end": 1593
                          },
                          "typeArguments": null,
                          "start": 1592,
                          "end": 1593
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1595,
                            "end": 1598
                          },
                          "typeArguments": null,
                          "start": 1595,
                          "end": 1598
                        }
                      ],
                      "start": 1591,
                      "end": 1599
                    },
                    "start": 1584,
                    "end": 1599
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1601,
                      "end": 1604
                    },
                    "typeArguments": null,
                    "start": 1601,
                    "end": 1604
                  }
                ],
                "start": 1583,
                "end": 1605
              },
              "start": 1576,
              "end": 1605
            },
            "start": 1574,
            "end": 1605
          },
          "start": 1573,
          "end": 1605
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
                "name": "Extract",
                "optional": false,
                "typeAnnotation": null,
                "start": 1610,
                "end": 1617
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1618,
                      "end": 1619
                    },
                    "typeArguments": null,
                    "start": 1618,
                    "end": 1619
                  },
                  {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1621,
                          "end": 1624
                        },
                        "typeArguments": null,
                        "start": 1621,
                        "end": 1624
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1627,
                          "end": 1630
                        },
                        "typeArguments": null,
                        "start": 1627,
                        "end": 1630
                      }
                    ],
                    "start": 1621,
                    "end": 1630
                  }
                ],
                "start": 1617,
                "end": 1631
              },
              "start": 1610,
              "end": 1631
            },
            "start": 1608,
            "end": 1631
          },
          "start": 1607,
          "end": 1631
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
                "name": "Extract2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1636,
                "end": 1644
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1645,
                      "end": 1646
                    },
                    "typeArguments": null,
                    "start": 1645,
                    "end": 1646
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1648,
                      "end": 1651
                    },
                    "typeArguments": null,
                    "start": 1648,
                    "end": 1651
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1653,
                      "end": 1656
                    },
                    "typeArguments": null,
                    "start": 1653,
                    "end": 1656
                  }
                ],
                "start": 1644,
                "end": 1657
              },
              "start": 1636,
              "end": 1657
            },
            "start": 1634,
            "end": 1657
          },
          "start": 1633,
          "end": 1657
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "fooBat",
                "optional": false,
                "typeAnnotation": null,
                "start": 1665,
                "end": 1671
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1672,
                  "end": 1673
                }
              ],
              "optional": false,
              "start": 1665,
              "end": 1674
            },
            "directive": null,
            "start": 1665,
            "end": 1675
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "fooBat",
                "optional": false,
                "typeAnnotation": null,
                "start": 1690,
                "end": 1696
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1697,
                  "end": 1698
                }
              ],
              "optional": false,
              "start": 1690,
              "end": 1699
            },
            "directive": null,
            "start": 1690,
            "end": 1700
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "fooBat",
                "optional": false,
                "typeAnnotation": null,
                "start": 1715,
                "end": 1721
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1722,
                  "end": 1723
                }
              ],
              "optional": false,
              "start": 1715,
              "end": 1724
            },
            "directive": null,
            "start": 1715,
            "end": 1725
          }
        ],
        "start": 1659,
        "end": 1737
      },
      "expression": false,
      "start": 1557,
      "end": 1737
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Opt",
        "optional": false,
        "typeAnnotation": null,
        "start": 1768,
        "end": 1771
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
              "start": 1772,
              "end": 1773
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1772,
            "end": 1773
          }
        ],
        "start": 1771,
        "end": 1774
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toVector",
              "optional": false,
              "typeAnnotation": null,
              "start": 1781,
              "end": 1789
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Vector",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1793,
                    "end": 1799
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1800,
                          "end": 1801
                        },
                        "typeArguments": null,
                        "start": 1800,
                        "end": 1801
                      }
                    ],
                    "start": 1799,
                    "end": 1802
                  },
                  "start": 1793,
                  "end": 1802
                },
                "start": 1791,
                "end": 1802
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSTypeAssertion",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1821,
                        "end": 1824
                      },
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1825,
                        "end": 1834
                      },
                      "start": 1820,
                      "end": 1834
                    },
                    "start": 1813,
                    "end": 1835
                  }
                ],
                "start": 1803,
                "end": 1841
              },
              "expression": false,
              "start": 1789,
              "end": 1841
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1781,
            "end": 1841
          }
        ],
        "start": 1775,
        "end": 1843
      },
      "abstract": false,
      "declare": false,
      "start": 1762,
      "end": 1843
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Seq",
        "optional": false,
        "typeAnnotation": null,
        "start": 1855,
        "end": 1858
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
              "start": 1859,
              "end": 1860
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1859,
            "end": 1860
          }
        ],
        "start": 1858,
        "end": 1861
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "tail",
              "optional": false,
              "typeAnnotation": null,
              "start": 1868,
              "end": 1872
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Opt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1876,
                  "end": 1879
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Seq",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1880,
                        "end": 1883
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1884,
                              "end": 1885
                            },
                            "typeArguments": null,
                            "start": 1884,
                            "end": 1885
                          }
                        ],
                        "start": 1883,
                        "end": 1886
                      },
                      "start": 1880,
                      "end": 1886
                    }
                  ],
                  "start": 1879,
                  "end": 1887
                },
                "start": 1876,
                "end": 1887
              },
              "start": 1874,
              "end": 1887
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1868,
            "end": 1888
          }
        ],
        "start": 1862,
        "end": 1890
      },
      "declare": false,
      "start": 1845,
      "end": 1890
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Vector",
        "optional": false,
        "typeAnnotation": null,
        "start": 1898,
        "end": 1904
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
              "start": 1905,
              "end": 1906
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1905,
            "end": 1906
          }
        ],
        "start": 1904,
        "end": 1907
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Seq",
            "optional": false,
            "typeAnnotation": null,
            "start": 1919,
            "end": 1922
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1923,
                  "end": 1924
                },
                "typeArguments": null,
                "start": 1923,
                "end": 1924
              }
            ],
            "start": 1922,
            "end": 1925
          },
          "start": 1919,
          "end": 1925
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "tail",
              "optional": false,
              "typeAnnotation": null,
              "start": 1932,
              "end": 1936
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Opt",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1940,
                    "end": 1943
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Vector",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1944,
                          "end": 1950
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1951,
                                "end": 1952
                              },
                              "typeArguments": null,
                              "start": 1951,
                              "end": 1952
                            }
                          ],
                          "start": 1950,
                          "end": 1953
                        },
                        "start": 1944,
                        "end": 1953
                      }
                    ],
                    "start": 1943,
                    "end": 1954
                  },
                  "start": 1940,
                  "end": 1954
                },
                "start": 1938,
                "end": 1954
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSTypeAssertion",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1973,
                        "end": 1976
                      },
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1977,
                        "end": 1986
                      },
                      "start": 1972,
                      "end": 1986
                    },
                    "start": 1965,
                    "end": 1987
                  }
                ],
                "start": 1955,
                "end": 1993
              },
              "expression": false,
              "start": 1936,
              "end": 1993
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1932,
            "end": 1993
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "partition2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1998,
              "end": 2008
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "start": 2009,
                      "end": 2010
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2019,
                        "end": 2020
                      },
                      "typeArguments": null,
                      "start": 2019,
                      "end": 2020
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2009,
                    "end": 2020
                  }
                ],
                "start": 2008,
                "end": 2021
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "predicate",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v",
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
                                "start": 2035,
                                "end": 2036
                              },
                              "typeArguments": null,
                              "start": 2035,
                              "end": 2036
                            },
                            "start": 2034,
                            "end": 2036
                          },
                          "start": 2033,
                          "end": 2036
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypePredicate",
                          "parameterName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "v",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2039,
                            "end": 2040
                          },
                          "asserts": false,
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
                                "start": 2044,
                                "end": 2045
                              },
                              "typeArguments": null,
                              "start": 2044,
                              "end": 2045
                            },
                            "start": 2044,
                            "end": 2045
                          },
                          "start": 2039,
                          "end": 2045
                        },
                        "start": 2037,
                        "end": 2045
                      },
                      "start": 2032,
                      "end": 2045
                    },
                    "start": 2031,
                    "end": 2045
                  },
                  "start": 2022,
                  "end": 2045
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Vector",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2049,
                        "end": 2055
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2056,
                              "end": 2057
                            },
                            "typeArguments": null,
                            "start": 2056,
                            "end": 2057
                          }
                        ],
                        "start": 2055,
                        "end": 2058
                      },
                      "start": 2049,
                      "end": 2058
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Vector",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2059,
                        "end": 2065
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Exclude",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2066,
                              "end": 2073
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2074,
                                    "end": 2075
                                  },
                                  "typeArguments": null,
                                  "start": 2074,
                                  "end": 2075
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2077,
                                    "end": 2078
                                  },
                                  "typeArguments": null,
                                  "start": 2077,
                                  "end": 2078
                                }
                              ],
                              "start": 2073,
                              "end": 2079
                            },
                            "start": 2066,
                            "end": 2079
                          }
                        ],
                        "start": 2065,
                        "end": 2080
                      },
                      "start": 2059,
                      "end": 2080
                    }
                  ],
                  "start": 2048,
                  "end": 2081
                },
                "start": 2046,
                "end": 2081
              },
              "body": null,
              "expression": false,
              "start": 2008,
              "end": 2082
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1998,
            "end": 2082
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "partition2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2087,
              "end": 2097
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "predicate",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2111,
                                "end": 2112
                              },
                              "typeArguments": null,
                              "start": 2111,
                              "end": 2112
                            },
                            "start": 2110,
                            "end": 2112
                          },
                          "start": 2109,
                          "end": 2112
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 2115,
                          "end": 2122
                        },
                        "start": 2113,
                        "end": 2122
                      },
                      "start": 2108,
                      "end": 2122
                    },
                    "start": 2107,
                    "end": 2122
                  },
                  "start": 2098,
                  "end": 2122
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Vector",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2126,
                        "end": 2132
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2133,
                              "end": 2134
                            },
                            "typeArguments": null,
                            "start": 2133,
                            "end": 2134
                          }
                        ],
                        "start": 2132,
                        "end": 2135
                      },
                      "start": 2126,
                      "end": 2135
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Vector",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2136,
                        "end": 2142
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2143,
                              "end": 2144
                            },
                            "typeArguments": null,
                            "start": 2143,
                            "end": 2144
                          }
                        ],
                        "start": 2142,
                        "end": 2145
                      },
                      "start": 2136,
                      "end": 2145
                    }
                  ],
                  "start": 2125,
                  "end": 2146
                },
                "start": 2123,
                "end": 2146
              },
              "body": null,
              "expression": false,
              "start": 2097,
              "end": 2147
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2087,
            "end": 2147
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "partition2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2152,
              "end": 2162
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 2163,
                      "end": 2164
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2173,
                        "end": 2174
                      },
                      "typeArguments": null,
                      "start": 2173,
                      "end": 2174
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2163,
                    "end": 2174
                  }
                ],
                "start": 2162,
                "end": 2175
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "predicate",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v",
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
                                "start": 2189,
                                "end": 2190
                              },
                              "typeArguments": null,
                              "start": 2189,
                              "end": 2190
                            },
                            "start": 2188,
                            "end": 2190
                          },
                          "start": 2187,
                          "end": 2190
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 2193,
                          "end": 2200
                        },
                        "start": 2191,
                        "end": 2200
                      },
                      "start": 2186,
                      "end": 2200
                    },
                    "start": 2185,
                    "end": 2200
                  },
                  "start": 2176,
                  "end": 2200
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Vector",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2204,
                        "end": 2210
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2211,
                              "end": 2212
                            },
                            "typeArguments": null,
                            "start": 2211,
                            "end": 2212
                          }
                        ],
                        "start": 2210,
                        "end": 2213
                      },
                      "start": 2204,
                      "end": 2213
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Vector",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2214,
                        "end": 2220
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "start": 2221,
                            "end": 2224
                          }
                        ],
                        "start": 2220,
                        "end": 2225
                      },
                      "start": 2214,
                      "end": 2225
                    }
                  ],
                  "start": 2203,
                  "end": 2226
                },
                "start": 2201,
                "end": 2226
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSTypeAssertion",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 2245,
                        "end": 2248
                      },
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2249,
                        "end": 2258
                      },
                      "start": 2244,
                      "end": 2258
                    },
                    "start": 2237,
                    "end": 2259
                  }
                ],
                "start": 2227,
                "end": 2265
              },
              "expression": false,
              "start": 2162,
              "end": 2265
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2152,
            "end": 2265
          }
        ],
        "start": 1926,
        "end": 2267
      },
      "abstract": false,
      "declare": false,
      "start": 1892,
      "end": 2267
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2279,
        "end": 2281
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
              "start": 2282,
              "end": 2283
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2282,
            "end": 2283
          }
        ],
        "start": 2281,
        "end": 2284
      },
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
              "name": "bat",
              "optional": false,
              "typeAnnotation": null,
              "start": 2291,
              "end": 2294
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2296,
                  "end": 2298
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2299,
                        "end": 2301
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2302,
                              "end": 2303
                            },
                            "typeArguments": null,
                            "start": 2302,
                            "end": 2303
                          }
                        ],
                        "start": 2301,
                        "end": 2304
                      },
                      "start": 2299,
                      "end": 2304
                    }
                  ],
                  "start": 2298,
                  "end": 2305
                },
                "start": 2296,
                "end": 2305
              },
              "start": 2294,
              "end": 2305
            },
            "accessibility": null,
            "static": false,
            "start": 2291,
            "end": 2306
          }
        ],
        "start": 2285,
        "end": 2308
      },
      "declare": false,
      "start": 2269,
      "end": 2308
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2320,
        "end": 2322
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
              "start": 2323,
              "end": 2324
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2323,
            "end": 2324
          }
        ],
        "start": 2322,
        "end": 2325
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2334,
            "end": 2336
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2337,
                  "end": 2338
                },
                "typeArguments": null,
                "start": 2337,
                "end": 2338
              }
            ],
            "start": 2336,
            "end": 2339
          },
          "start": 2334,
          "end": 2339
        }
      ],
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
              "name": "bat",
              "optional": false,
              "typeAnnotation": null,
              "start": 2346,
              "end": 2349
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2351,
                  "end": 2353
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2354,
                        "end": 2356
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2357,
                              "end": 2358
                            },
                            "typeArguments": null,
                            "start": 2357,
                            "end": 2358
                          }
                        ],
                        "start": 2356,
                        "end": 2359
                      },
                      "start": 2354,
                      "end": 2359
                    }
                  ],
                  "start": 2353,
                  "end": 2360
                },
                "start": 2351,
                "end": 2360
              },
              "start": 2349,
              "end": 2360
            },
            "accessibility": null,
            "static": false,
            "start": 2346,
            "end": 2361
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "boom",
              "optional": false,
              "typeAnnotation": null,
              "start": 2366,
              "end": 2370
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2372,
                    "end": 2373
                  },
                  "typeArguments": null,
                  "start": 2372,
                  "end": 2373
                },
                "extendsType": {
                  "type": "TSAnyKeyword",
                  "start": 2382,
                  "end": 2385
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 2388,
                    "end": 2392
                  },
                  "start": 2388,
                  "end": 2392
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 2395,
                    "end": 2399
                  },
                  "start": 2395,
                  "end": 2399
                },
                "start": 2372,
                "end": 2399
              },
              "start": 2370,
              "end": 2399
            },
            "accessibility": null,
            "static": false,
            "start": 2366,
            "end": 2399
          }
        ],
        "start": 2340,
        "end": 2401
      },
      "declare": false,
      "start": 2310,
      "end": 2401
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "toString1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2442,
        "end": 2451
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSObjectKeyword",
                  "start": 2459,
                  "end": 2465
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Function",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2468,
                    "end": 2476
                  },
                  "typeArguments": null,
                  "start": 2468,
                  "end": 2476
                }
              ],
              "start": 2459,
              "end": 2476
            },
            "start": 2457,
            "end": 2476
          },
          "start": 2452,
          "end": 2476
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 2479,
          "end": 2485
        },
        "start": 2477,
        "end": 2485
      },
      "body": null,
      "expression": false,
      "start": 2425,
      "end": 2487
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "toString2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2505,
        "end": 2514
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null,
                "start": 2522,
                "end": 2530
              },
              "typeArguments": null,
              "start": 2522,
              "end": 2530
            },
            "start": 2520,
            "end": 2530
          },
          "start": 2515,
          "end": 2530
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 2533,
          "end": 2539
        },
        "start": 2531,
        "end": 2539
      },
      "body": null,
      "expression": false,
      "start": 2488,
      "end": 2541
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 2552,
        "end": 2555
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
              "start": 2556,
              "end": 2557
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2556,
            "end": 2557
          }
        ],
        "start": 2555,
        "end": 2558
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
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
                "start": 2566,
                "end": 2567
              },
              "typeArguments": null,
              "start": 2566,
              "end": 2567
            },
            "start": 2564,
            "end": 2567
          },
          "start": 2559,
          "end": 2567
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 2579,
                "end": 2589
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2590,
                  "end": 2595
                }
              ],
              "optional": false,
              "start": 2579,
              "end": 2596
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toString1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2608,
                      "end": 2617
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2618,
                        "end": 2623
                      }
                    ],
                    "optional": false,
                    "start": 2608,
                    "end": 2624
                  },
                  "directive": null,
                  "start": 2608,
                  "end": 2625
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toString2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2634,
                      "end": 2643
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2644,
                        "end": 2649
                      }
                    ],
                    "optional": false,
                    "start": 2634,
                    "end": 2650
                  },
                  "directive": null,
                  "start": 2634,
                  "end": 2651
                }
              ],
              "start": 2598,
              "end": 2657
            },
            "alternate": null,
            "start": 2575,
            "end": 2657
          }
        ],
        "start": 2569,
        "end": 2659
      },
      "expression": false,
      "start": 2543,
      "end": 2659
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 2688,
        "end": 2689
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
              "start": 2690,
              "end": 2691
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2690,
            "end": 2691
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 2693,
              "end": 2694
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2693,
            "end": 2694
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 2696,
              "end": 2697
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2696,
            "end": 2697
          }
        ],
        "start": 2689,
        "end": 2698
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 2703,
            "end": 2704
          },
          "typeArguments": null,
          "start": 2703,
          "end": 2704
        },
        "extendsType": {
          "type": "TSObjectKeyword",
          "start": 2713,
          "end": 2719
        },
        "trueType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "Q",
            "optional": false,
            "typeAnnotation": null,
            "start": 2729,
            "end": 2730
          },
          "constraint": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 2737,
                "end": 2738
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2748,
                    "end": 2749
                  },
                  "typeArguments": null,
                  "start": 2748,
                  "end": 2749
                },
                "start": 2742,
                "end": 2749
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2752,
                      "end": 2753
                    },
                    "typeArguments": null,
                    "start": 2752,
                    "end": 2753
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2754,
                      "end": 2755
                    },
                    "typeArguments": null,
                    "start": 2754,
                    "end": 2755
                  },
                  "start": 2752,
                  "end": 2756
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2765,
                    "end": 2766
                  },
                  "typeArguments": null,
                  "start": 2765,
                  "end": 2766
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2769,
                    "end": 2770
                  },
                  "typeArguments": null,
                  "start": 2769,
                  "end": 2770
                },
                "falseType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2773,
                    "end": 2774
                  },
                  "typeArguments": null,
                  "start": 2773,
                  "end": 2774
                },
                "start": 2752,
                "end": 2774
              },
              "optional": false,
              "readonly": null,
              "start": 2734,
              "end": 2777
            },
            "indexType": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2784,
                  "end": 2785
                },
                "typeArguments": null,
                "start": 2784,
                "end": 2785
              },
              "start": 2778,
              "end": 2785
            },
            "start": 2734,
            "end": 2786
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 2789,
              "end": 2790
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2791,
                      "end": 2792
                    },
                    "typeArguments": null,
                    "start": 2791,
                    "end": 2792
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Q",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2793,
                      "end": 2794
                    },
                    "typeArguments": null,
                    "start": 2793,
                    "end": 2794
                  },
                  "start": 2791,
                  "end": 2795
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2797,
                    "end": 2798
                  },
                  "typeArguments": null,
                  "start": 2797,
                  "end": 2798
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2800,
                    "end": 2801
                  },
                  "typeArguments": null,
                  "start": 2800,
                  "end": 2801
                }
              ],
              "start": 2790,
              "end": 2802
            },
            "start": 2789,
            "end": 2802
          },
          "optional": false,
          "readonly": null,
          "start": 2726,
          "end": 2805
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2812,
              "end": 2813
            },
            "typeArguments": null,
            "start": 2812,
            "end": 2813
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 2822,
              "end": 2823
            },
            "typeArguments": null,
            "start": 2822,
            "end": 2823
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2826,
              "end": 2827
            },
            "typeArguments": null,
            "start": 2826,
            "end": 2827
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 2830,
            "end": 2835
          },
          "start": 2812,
          "end": 2835
        },
        "start": 2703,
        "end": 2835
      },
      "declare": false,
      "start": 2683,
      "end": 2836
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 2843,
        "end": 2844
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
              "start": 2845,
              "end": 2846
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2845,
            "end": 2846
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 2848,
              "end": 2849
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2848,
            "end": 2849
          }
        ],
        "start": 2844,
        "end": 2850
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 2855,
            "end": 2856
          },
          "typeArguments": null,
          "start": 2855,
          "end": 2856
        },
        "extendsType": {
          "type": "TSObjectKeyword",
          "start": 2865,
          "end": 2871
        },
        "trueType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "Q",
            "optional": false,
            "typeAnnotation": null,
            "start": 2881,
            "end": 2882
          },
          "constraint": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 2889,
                "end": 2890
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2900,
                    "end": 2901
                  },
                  "typeArguments": null,
                  "start": 2900,
                  "end": 2901
                },
                "start": 2894,
                "end": 2901
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2904,
                      "end": 2905
                    },
                    "typeArguments": null,
                    "start": 2904,
                    "end": 2905
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2906,
                      "end": 2907
                    },
                    "typeArguments": null,
                    "start": 2906,
                    "end": 2907
                  },
                  "start": 2904,
                  "end": 2908
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2917,
                    "end": 2918
                  },
                  "typeArguments": null,
                  "start": 2917,
                  "end": 2918
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2921,
                    "end": 2922
                  },
                  "typeArguments": null,
                  "start": 2921,
                  "end": 2922
                },
                "falseType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2925,
                    "end": 2926
                  },
                  "typeArguments": null,
                  "start": 2925,
                  "end": 2926
                },
                "start": 2904,
                "end": 2926
              },
              "optional": false,
              "readonly": null,
              "start": 2886,
              "end": 2929
            },
            "indexType": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2936,
                  "end": 2937
                },
                "typeArguments": null,
                "start": 2936,
                "end": 2937
              },
              "start": 2930,
              "end": 2937
            },
            "start": 2886,
            "end": 2938
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 2941,
              "end": 2942
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2943,
                      "end": 2944
                    },
                    "typeArguments": null,
                    "start": 2943,
                    "end": 2944
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Q",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2945,
                      "end": 2946
                    },
                    "typeArguments": null,
                    "start": 2945,
                    "end": 2946
                  },
                  "start": 2943,
                  "end": 2947
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2949,
                    "end": 2950
                  },
                  "typeArguments": null,
                  "start": 2949,
                  "end": 2950
                }
              ],
              "start": 2942,
              "end": 2951
            },
            "start": 2941,
            "end": 2951
          },
          "optional": false,
          "readonly": null,
          "start": 2878,
          "end": 2954
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2961,
              "end": 2962
            },
            "typeArguments": null,
            "start": 2961,
            "end": 2962
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 2971,
              "end": 2972
            },
            "typeArguments": null,
            "start": 2971,
            "end": 2972
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2975,
              "end": 2976
            },
            "typeArguments": null,
            "start": 2975,
            "end": 2976
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 2979,
            "end": 2984
          },
          "start": 2961,
          "end": 2984
        },
        "start": 2855,
        "end": 2984
      },
      "declare": false,
      "start": 2838,
      "end": 2985
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 2992,
        "end": 2993
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
              "start": 2994,
              "end": 2995
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2994,
            "end": 2995
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 2997,
              "end": 2998
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2997,
            "end": 2998
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 3000,
              "end": 3001
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3000,
            "end": 3001
          }
        ],
        "start": 2993,
        "end": 3002
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "Q",
          "optional": false,
          "typeAnnotation": null,
          "start": 3010,
          "end": 3011
        },
        "constraint": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 3018,
              "end": 3019
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3029,
                  "end": 3030
                },
                "typeArguments": null,
                "start": 3029,
                "end": 3030
              },
              "start": 3023,
              "end": 3030
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3033,
                    "end": 3034
                  },
                  "typeArguments": null,
                  "start": 3033,
                  "end": 3034
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3035,
                    "end": 3036
                  },
                  "typeArguments": null,
                  "start": 3035,
                  "end": 3036
                },
                "start": 3033,
                "end": 3037
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3046,
                  "end": 3047
                },
                "typeArguments": null,
                "start": 3046,
                "end": 3047
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3050,
                  "end": 3051
                },
                "typeArguments": null,
                "start": 3050,
                "end": 3051
              },
              "falseType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3054,
                  "end": 3055
                },
                "typeArguments": null,
                "start": 3054,
                "end": 3055
              },
              "start": 3033,
              "end": 3055
            },
            "optional": false,
            "readonly": null,
            "start": 3015,
            "end": 3058
          },
          "indexType": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3065,
                "end": 3066
              },
              "typeArguments": null,
              "start": 3065,
              "end": 3066
            },
            "start": 3059,
            "end": 3066
          },
          "start": 3015,
          "end": 3067
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 3070,
            "end": 3071
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3072,
                    "end": 3073
                  },
                  "typeArguments": null,
                  "start": 3072,
                  "end": 3073
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Q",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3074,
                    "end": 3075
                  },
                  "typeArguments": null,
                  "start": 3074,
                  "end": 3075
                },
                "start": 3072,
                "end": 3076
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3078,
                  "end": 3079
                },
                "typeArguments": null,
                "start": 3078,
                "end": 3079
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3081,
                  "end": 3082
                },
                "typeArguments": null,
                "start": 3081,
                "end": 3082
              }
            ],
            "start": 3071,
            "end": 3083
          },
          "start": 3070,
          "end": 3083
        },
        "optional": false,
        "readonly": null,
        "start": 3007,
        "end": 3086
      },
      "declare": false,
      "start": 2987,
      "end": 3087
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3116,
        "end": 3118
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
              "start": 3119,
              "end": 3120
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3119,
            "end": 3120
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 3122,
              "end": 3123
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3122,
            "end": 3123
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 3125,
              "end": 3126
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3125,
            "end": 3126
          }
        ],
        "start": 3118,
        "end": 3127
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 3134,
            "end": 3135
          },
          "typeArguments": null,
          "start": 3134,
          "end": 3135
        },
        "extendsType": {
          "type": "TSObjectKeyword",
          "start": 3144,
          "end": 3150
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3153,
              "end": 3154
            },
            "typeArguments": null,
            "start": 3153,
            "end": 3154
          },
          "extendsType": {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSAnyKeyword",
              "start": 3163,
              "end": 3166
            },
            "start": 3163,
            "end": 3168
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3171,
              "end": 3172
            },
            "typeArguments": null,
            "start": 3171,
            "end": 3172
          },
          "falseType": {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Q",
              "optional": false,
              "typeAnnotation": null,
              "start": 3178,
              "end": 3179
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3189,
                  "end": 3190
                },
                "typeArguments": null,
                "start": 3189,
                "end": 3190
              },
              "start": 3183,
              "end": 3190
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3193,
                "end": 3195
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3196,
                        "end": 3197
                      },
                      "typeArguments": null,
                      "start": 3196,
                      "end": 3197
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Q",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3198,
                        "end": 3199
                      },
                      "typeArguments": null,
                      "start": 3198,
                      "end": 3199
                    },
                    "start": 3196,
                    "end": 3200
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3202,
                      "end": 3203
                    },
                    "typeArguments": null,
                    "start": 3202,
                    "end": 3203
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3205,
                      "end": 3206
                    },
                    "typeArguments": null,
                    "start": 3205,
                    "end": 3206
                  }
                ],
                "start": 3195,
                "end": 3207
              },
              "start": 3193,
              "end": 3207
            },
            "optional": false,
            "readonly": null,
            "start": 3175,
            "end": 3210
          },
          "start": 3153,
          "end": 3210
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 3213,
            "end": 3214
          },
          "typeArguments": null,
          "start": 3213,
          "end": 3214
        },
        "start": 3134,
        "end": 3214
      },
      "declare": false,
      "start": 3111,
      "end": 3215
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3222,
        "end": 3224
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
              "start": 3225,
              "end": 3226
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3225,
            "end": 3226
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 3228,
              "end": 3229
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3228,
            "end": 3229
          }
        ],
        "start": 3224,
        "end": 3230
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 3237,
            "end": 3238
          },
          "typeArguments": null,
          "start": 3237,
          "end": 3238
        },
        "extendsType": {
          "type": "TSObjectKeyword",
          "start": 3247,
          "end": 3253
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3256,
              "end": 3257
            },
            "typeArguments": null,
            "start": 3256,
            "end": 3257
          },
          "extendsType": {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSAnyKeyword",
              "start": 3266,
              "end": 3269
            },
            "start": 3266,
            "end": 3271
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3274,
              "end": 3275
            },
            "typeArguments": null,
            "start": 3274,
            "end": 3275
          },
          "falseType": {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Q",
              "optional": false,
              "typeAnnotation": null,
              "start": 3281,
              "end": 3282
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3292,
                  "end": 3293
                },
                "typeArguments": null,
                "start": 3292,
                "end": 3293
              },
              "start": 3286,
              "end": 3293
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3296,
                "end": 3298
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3299,
                        "end": 3300
                      },
                      "typeArguments": null,
                      "start": 3299,
                      "end": 3300
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Q",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3301,
                        "end": 3302
                      },
                      "typeArguments": null,
                      "start": 3301,
                      "end": 3302
                    },
                    "start": 3299,
                    "end": 3303
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3305,
                      "end": 3306
                    },
                    "typeArguments": null,
                    "start": 3305,
                    "end": 3306
                  }
                ],
                "start": 3298,
                "end": 3307
              },
              "start": 3296,
              "end": 3307
            },
            "optional": false,
            "readonly": null,
            "start": 3278,
            "end": 3310
          },
          "start": 3256,
          "end": 3310
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 3313,
            "end": 3314
          },
          "typeArguments": null,
          "start": 3313,
          "end": 3314
        },
        "start": 3237,
        "end": 3314
      },
      "declare": false,
      "start": 3217,
      "end": 3315
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3322,
        "end": 3324
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
              "start": 3325,
              "end": 3326
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3325,
            "end": 3326
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 3328,
              "end": 3329
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3328,
            "end": 3329
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 3331,
              "end": 3332
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3331,
            "end": 3332
          }
        ],
        "start": 3324,
        "end": 3333
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 3340,
            "end": 3341
          },
          "typeArguments": null,
          "start": 3340,
          "end": 3341
        },
        "extendsType": {
          "type": "TSObjectKeyword",
          "start": 3350,
          "end": 3356
        },
        "trueType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "Q",
            "optional": false,
            "typeAnnotation": null,
            "start": 3362,
            "end": 3363
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3373,
                "end": 3374
              },
              "typeArguments": null,
              "start": 3373,
              "end": 3374
            },
            "start": 3367,
            "end": 3374
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "C2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3377,
              "end": 3379
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3380,
                      "end": 3381
                    },
                    "typeArguments": null,
                    "start": 3380,
                    "end": 3381
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Q",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3382,
                      "end": 3383
                    },
                    "typeArguments": null,
                    "start": 3382,
                    "end": 3383
                  },
                  "start": 3380,
                  "end": 3384
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3386,
                    "end": 3387
                  },
                  "typeArguments": null,
                  "start": 3386,
                  "end": 3387
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3389,
                    "end": 3390
                  },
                  "typeArguments": null,
                  "start": 3389,
                  "end": 3390
                }
              ],
              "start": 3379,
              "end": 3391
            },
            "start": 3377,
            "end": 3391
          },
          "optional": false,
          "readonly": null,
          "start": 3359,
          "end": 3394
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 3397,
            "end": 3398
          },
          "typeArguments": null,
          "start": 3397,
          "end": 3398
        },
        "start": 3340,
        "end": 3398
      },
      "declare": false,
      "start": 3317,
      "end": 3399
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MaybeTrue",
        "optional": false,
        "typeAnnotation": null,
        "start": 3428,
        "end": 3437
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
              "start": 3438,
              "end": 3439
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3450,
                    "end": 3451
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 3453,
                      "end": 3460
                    },
                    "start": 3451,
                    "end": 3460
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3450,
                  "end": 3460
                }
              ],
              "start": 3448,
              "end": 3462
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3438,
            "end": 3462
          }
        ],
        "start": 3437,
        "end": 3463
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 3466,
            "end": 3470
          },
          "start": 3466,
          "end": 3470
        },
        "extendsType": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3479,
              "end": 3480
            },
            "typeArguments": null,
            "start": 3479,
            "end": 3480
          },
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "b",
              "raw": "\"b\"",
              "start": 3481,
              "end": 3484
            },
            "start": 3481,
            "end": 3484
          },
          "start": 3479,
          "end": 3485
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "yes",
            "raw": "\"yes\"",
            "start": 3488,
            "end": 3493
          },
          "start": 3488,
          "end": 3493
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "no",
            "raw": "\"no\"",
            "start": 3496,
            "end": 3500
          },
          "start": 3496,
          "end": 3500
        },
        "start": 3466,
        "end": 3500
      },
      "declare": false,
      "start": 3423,
      "end": 3501
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T0",
        "optional": false,
        "typeAnnotation": null,
        "start": 3508,
        "end": 3510
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "MaybeTrue",
          "optional": false,
          "typeAnnotation": null,
          "start": 3513,
          "end": 3522
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3525,
                    "end": 3526
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNeverKeyword",
                      "start": 3528,
                      "end": 3533
                    },
                    "start": 3526,
                    "end": 3533
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3525,
                  "end": 3533
                }
              ],
              "start": 3523,
              "end": 3535
            }
          ],
          "start": 3522,
          "end": 3536
        },
        "start": 3513,
        "end": 3536
      },
      "declare": false,
      "start": 3503,
      "end": 3536
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 3554,
        "end": 3556
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "MaybeTrue",
          "optional": false,
          "typeAnnotation": null,
          "start": 3559,
          "end": 3568
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3571,
                    "end": 3572
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 3574,
                        "end": 3579
                      },
                      "start": 3574,
                      "end": 3579
                    },
                    "start": 3572,
                    "end": 3579
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3571,
                  "end": 3579
                }
              ],
              "start": 3569,
              "end": 3581
            }
          ],
          "start": 3568,
          "end": 3582
        },
        "start": 3559,
        "end": 3582
      },
      "declare": false,
      "start": 3549,
      "end": 3583
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3600,
        "end": 3602
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "MaybeTrue",
          "optional": false,
          "typeAnnotation": null,
          "start": 3605,
          "end": 3614
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3617,
                    "end": 3618
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 3620,
                        "end": 3624
                      },
                      "start": 3620,
                      "end": 3624
                    },
                    "start": 3618,
                    "end": 3624
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3617,
                  "end": 3624
                }
              ],
              "start": 3615,
              "end": 3626
            }
          ],
          "start": 3614,
          "end": 3627
        },
        "start": 3605,
        "end": 3627
      },
      "declare": false,
      "start": 3595,
      "end": 3628
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 3647,
        "end": 3649
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "MaybeTrue",
          "optional": false,
          "typeAnnotation": null,
          "start": 3652,
          "end": 3661
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3664,
                    "end": 3665
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 3667,
                      "end": 3674
                    },
                    "start": 3665,
                    "end": 3674
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3664,
                  "end": 3674
                }
              ],
              "start": 3662,
              "end": 3676
            }
          ],
          "start": 3661,
          "end": 3677
        },
        "start": 3652,
        "end": 3677
      },
      "declare": false,
      "start": 3642,
      "end": 3678
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Union",
        "optional": false,
        "typeAnnotation": null,
        "start": 3717,
        "end": 3722
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "a",
              "raw": "'a'",
              "start": 3725,
              "end": 3728
            },
            "start": 3725,
            "end": 3728
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "b",
              "raw": "'b'",
              "start": 3731,
              "end": 3734
            },
            "start": 3731,
            "end": 3734
          }
        ],
        "start": 3725,
        "end": 3734
      },
      "declare": false,
      "start": 3712,
      "end": 3735
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Product",
        "optional": false,
        "typeAnnotation": null,
        "start": 3741,
        "end": 3748
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 3749,
              "end": 3750
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Union",
                "optional": false,
                "typeAnnotation": null,
                "start": 3759,
                "end": 3764
              },
              "typeArguments": null,
              "start": 3759,
              "end": 3764
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3749,
            "end": 3764
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 3766,
              "end": 3767
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3766,
            "end": 3767
          }
        ],
        "start": 3748,
        "end": 3768
      },
      "typeAnnotation": {
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
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 3773,
              "end": 3775
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3777,
                  "end": 3778
                },
                "typeArguments": null,
                "start": 3777,
                "end": 3778
              },
              "start": 3775,
              "end": 3778
            },
            "accessibility": null,
            "static": false,
            "start": 3773,
            "end": 3779
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3780,
              "end": 3782
            },
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
                  "start": 3784,
                  "end": 3785
                },
                "typeArguments": null,
                "start": 3784,
                "end": 3785
              },
              "start": 3782,
              "end": 3785
            },
            "accessibility": null,
            "static": false,
            "start": 3780,
            "end": 3785
          }
        ],
        "start": 3771,
        "end": 3786
      },
      "declare": false,
      "start": 3736,
      "end": 3787
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ProductUnion",
        "optional": false,
        "typeAnnotation": null,
        "start": 3793,
        "end": 3805
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Product",
              "optional": false,
              "typeAnnotation": null,
              "start": 3808,
              "end": 3815
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 3816,
                    "end": 3819
                  },
                  "start": 3816,
                  "end": 3819
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 3821,
                    "end": 3822
                  },
                  "start": 3821,
                  "end": 3822
                }
              ],
              "start": 3815,
              "end": 3823
            },
            "start": 3808,
            "end": 3823
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Product",
              "optional": false,
              "typeAnnotation": null,
              "start": 3826,
              "end": 3833
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "'b'",
                    "start": 3834,
                    "end": 3837
                  },
                  "start": 3834,
                  "end": 3837
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 3839,
                    "end": 3840
                  },
                  "start": 3839,
                  "end": 3840
                }
              ],
              "start": 3833,
              "end": 3841
            },
            "start": 3826,
            "end": 3841
          }
        ],
        "start": 3808,
        "end": 3841
      },
      "declare": false,
      "start": 3788,
      "end": 3842
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnionComplement",
        "optional": false,
        "typeAnnotation": null,
        "start": 3869,
        "end": 3884
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 3892,
          "end": 3893
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Union",
            "optional": false,
            "typeAnnotation": null,
            "start": 3897,
            "end": 3902
          },
          "typeArguments": null,
          "start": 3897,
          "end": 3902
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Exclude",
            "optional": false,
            "typeAnnotation": null,
            "start": 3905,
            "end": 3912
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Union",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3913,
                  "end": 3918
                },
                "typeArguments": null,
                "start": 3913,
                "end": 3918
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3920,
                  "end": 3921
                },
                "typeArguments": null,
                "start": 3920,
                "end": 3921
              }
            ],
            "start": 3912,
            "end": 3922
          },
          "start": 3905,
          "end": 3922
        },
        "optional": false,
        "readonly": null,
        "start": 3887,
        "end": 3924
      },
      "declare": false,
      "start": 3864,
      "end": 3925
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UCA",
        "optional": false,
        "typeAnnotation": null,
        "start": 3931,
        "end": 3934
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "UnionComplement",
            "optional": false,
            "typeAnnotation": null,
            "start": 3937,
            "end": 3952
          },
          "typeArguments": null,
          "start": 3937,
          "end": 3952
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "a",
            "raw": "'a'",
            "start": 3953,
            "end": 3956
          },
          "start": 3953,
          "end": 3956
        },
        "start": 3937,
        "end": 3957
      },
      "declare": false,
      "start": 3926,
      "end": 3958
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UCB",
        "optional": false,
        "typeAnnotation": null,
        "start": 3964,
        "end": 3967
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "UnionComplement",
            "optional": false,
            "typeAnnotation": null,
            "start": 3970,
            "end": 3985
          },
          "typeArguments": null,
          "start": 3970,
          "end": 3985
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "b",
            "raw": "'b'",
            "start": 3986,
            "end": 3989
          },
          "start": 3986,
          "end": 3989
        },
        "start": 3970,
        "end": 3990
      },
      "declare": false,
      "start": 3959,
      "end": 3991
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnionComplementComplement",
        "optional": false,
        "typeAnnotation": null,
        "start": 4018,
        "end": 4043
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 4051,
          "end": 4052
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Union",
            "optional": false,
            "typeAnnotation": null,
            "start": 4056,
            "end": 4061
          },
          "typeArguments": null,
          "start": 4056,
          "end": 4061
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Exclude",
            "optional": false,
            "typeAnnotation": null,
            "start": 4064,
            "end": 4071
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Union",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4072,
                  "end": 4077
                },
                "typeArguments": null,
                "start": 4072,
                "end": 4077
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Exclude",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4079,
                  "end": 4086
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Union",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4087,
                        "end": 4092
                      },
                      "typeArguments": null,
                      "start": 4087,
                      "end": 4092
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4094,
                        "end": 4095
                      },
                      "typeArguments": null,
                      "start": 4094,
                      "end": 4095
                    }
                  ],
                  "start": 4086,
                  "end": 4096
                },
                "start": 4079,
                "end": 4096
              }
            ],
            "start": 4071,
            "end": 4097
          },
          "start": 4064,
          "end": 4097
        },
        "optional": false,
        "readonly": null,
        "start": 4046,
        "end": 4099
      },
      "declare": false,
      "start": 4013,
      "end": 4100
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UCCA",
        "optional": false,
        "typeAnnotation": null,
        "start": 4106,
        "end": 4110
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "UnionComplementComplement",
            "optional": false,
            "typeAnnotation": null,
            "start": 4113,
            "end": 4138
          },
          "typeArguments": null,
          "start": 4113,
          "end": 4138
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "a",
            "raw": "'a'",
            "start": 4139,
            "end": 4142
          },
          "start": 4139,
          "end": 4142
        },
        "start": 4113,
        "end": 4143
      },
      "declare": false,
      "start": 4101,
      "end": 4144
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UCCB",
        "optional": false,
        "typeAnnotation": null,
        "start": 4150,
        "end": 4154
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "UnionComplementComplement",
            "optional": false,
            "typeAnnotation": null,
            "start": 4157,
            "end": 4182
          },
          "typeArguments": null,
          "start": 4157,
          "end": 4182
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "b",
            "raw": "'b'",
            "start": 4183,
            "end": 4186
          },
          "start": 4183,
          "end": 4186
        },
        "start": 4157,
        "end": 4187
      },
      "declare": false,
      "start": 4145,
      "end": 4188
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ProductComplement",
        "optional": false,
        "typeAnnotation": null,
        "start": 4239,
        "end": 4256
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 4264,
          "end": 4265
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Union",
            "optional": false,
            "typeAnnotation": null,
            "start": 4269,
            "end": 4274
          },
          "typeArguments": null,
          "start": 4269,
          "end": 4274
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Exclude",
            "optional": false,
            "typeAnnotation": null,
            "start": 4277,
            "end": 4284
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ProductUnion",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4285,
                  "end": 4297
                },
                "typeArguments": null,
                "start": 4285,
                "end": 4297
              },
              {
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
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4301,
                      "end": 4303
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4305,
                          "end": 4306
                        },
                        "typeArguments": null,
                        "start": 4305,
                        "end": 4306
                      },
                      "start": 4303,
                      "end": 4306
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 4301,
                    "end": 4306
                  }
                ],
                "start": 4299,
                "end": 4308
              }
            ],
            "start": 4284,
            "end": 4309
          },
          "start": 4277,
          "end": 4309
        },
        "optional": false,
        "readonly": null,
        "start": 4259,
        "end": 4311
      },
      "declare": false,
      "start": 4234,
      "end": 4312
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PCA",
        "optional": false,
        "typeAnnotation": null,
        "start": 4318,
        "end": 4321
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ProductComplement",
            "optional": false,
            "typeAnnotation": null,
            "start": 4324,
            "end": 4341
          },
          "typeArguments": null,
          "start": 4324,
          "end": 4341
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "a",
            "raw": "'a'",
            "start": 4342,
            "end": 4345
          },
          "start": 4342,
          "end": 4345
        },
        "start": 4324,
        "end": 4346
      },
      "declare": false,
      "start": 4313,
      "end": 4347
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PCB",
        "optional": false,
        "typeAnnotation": null,
        "start": 4353,
        "end": 4356
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ProductComplement",
            "optional": false,
            "typeAnnotation": null,
            "start": 4359,
            "end": 4376
          },
          "typeArguments": null,
          "start": 4359,
          "end": 4376
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "b",
            "raw": "'b'",
            "start": 4377,
            "end": 4380
          },
          "start": 4377,
          "end": 4380
        },
        "start": 4359,
        "end": 4381
      },
      "declare": false,
      "start": 4348,
      "end": 4382
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ProductComplementComplement",
        "optional": false,
        "typeAnnotation": null,
        "start": 4433,
        "end": 4460
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 4468,
          "end": 4469
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Union",
            "optional": false,
            "typeAnnotation": null,
            "start": 4473,
            "end": 4478
          },
          "typeArguments": null,
          "start": 4473,
          "end": 4478
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Exclude",
            "optional": false,
            "typeAnnotation": null,
            "start": 4481,
            "end": 4488
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ProductUnion",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4489,
                  "end": 4501
                },
                "typeArguments": null,
                "start": 4489,
                "end": 4501
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Exclude",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4503,
                  "end": 4510
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ProductUnion",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4511,
                        "end": 4523
                      },
                      "typeArguments": null,
                      "start": 4511,
                      "end": 4523
                    },
                    {
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
                            "name": "f1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4527,
                            "end": 4529
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "K",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4531,
                                "end": 4532
                              },
                              "typeArguments": null,
                              "start": 4531,
                              "end": 4532
                            },
                            "start": 4529,
                            "end": 4532
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 4527,
                          "end": 4532
                        }
                      ],
                      "start": 4525,
                      "end": 4534
                    }
                  ],
                  "start": 4510,
                  "end": 4535
                },
                "start": 4503,
                "end": 4535
              }
            ],
            "start": 4488,
            "end": 4536
          },
          "start": 4481,
          "end": 4536
        },
        "optional": false,
        "readonly": null,
        "start": 4463,
        "end": 4538
      },
      "declare": false,
      "start": 4428,
      "end": 4539
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PCCA",
        "optional": false,
        "typeAnnotation": null,
        "start": 4545,
        "end": 4549
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ProductComplementComplement",
            "optional": false,
            "typeAnnotation": null,
            "start": 4552,
            "end": 4579
          },
          "typeArguments": null,
          "start": 4552,
          "end": 4579
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "a",
            "raw": "'a'",
            "start": 4580,
            "end": 4583
          },
          "start": 4580,
          "end": 4583
        },
        "start": 4552,
        "end": 4584
      },
      "declare": false,
      "start": 4540,
      "end": 4585
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PCCB",
        "optional": false,
        "typeAnnotation": null,
        "start": 4591,
        "end": 4595
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ProductComplementComplement",
            "optional": false,
            "typeAnnotation": null,
            "start": 4598,
            "end": 4625
          },
          "typeArguments": null,
          "start": 4598,
          "end": 4625
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "b",
            "raw": "'b'",
            "start": 4626,
            "end": 4629
          },
          "start": 4626,
          "end": 4629
        },
        "start": 4598,
        "end": 4630
      },
      "declare": false,
      "start": 4586,
      "end": 4631
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Hmm",
        "optional": false,
        "typeAnnotation": null,
        "start": 4660,
        "end": 4663
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
              "start": 4664,
              "end": 4665
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4664,
            "end": 4665
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 4667,
              "end": 4668
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 4677,
                "end": 4678
              },
              "typeArguments": null,
              "start": 4677,
              "end": 4678
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4667,
            "end": 4678
          }
        ],
        "start": 4663,
        "end": 4679
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 4682,
            "end": 4683
          },
          "typeArguments": null,
          "start": 4682,
          "end": 4683
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 4692,
            "end": 4693
          },
          "typeArguments": null,
          "start": 4692,
          "end": 4693
        },
        "trueType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 4699,
            "end": 4700
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 4710,
                "end": 4711
              },
              "typeArguments": null,
              "start": 4710,
              "end": 4711
            },
            "start": 4704,
            "end": 4711
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 4714,
            "end": 4720
          },
          "optional": false,
          "readonly": null,
          "start": 4696,
          "end": 4722
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 4725,
          "end": 4730
        },
        "start": 4682,
        "end": 4730
      },
      "declare": false,
      "start": 4655,
      "end": 4731
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "What",
        "optional": false,
        "typeAnnotation": null,
        "start": 4737,
        "end": 4741
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Hmm",
          "optional": false,
          "typeAnnotation": null,
          "start": 4744,
          "end": 4747
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 4748,
              "end": 4750
            },
            {
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4754,
                    "end": 4755
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 4757,
                      "end": 4763
                    },
                    "start": 4755,
                    "end": 4763
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4754,
                  "end": 4763
                }
              ],
              "start": 4752,
              "end": 4765
            }
          ],
          "start": 4747,
          "end": 4766
        },
        "start": 4744,
        "end": 4766
      },
      "declare": false,
      "start": 4732,
      "end": 4766
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "w",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "What",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4776,
                  "end": 4780
                },
                "typeArguments": null,
                "start": 4776,
                "end": 4780
              },
              "start": 4774,
              "end": 4780
            },
            "start": 4773,
            "end": 4780
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4785,
                  "end": 4786
                },
                "value": {
                  "type": "Literal",
                  "value": 4,
                  "raw": "4",
                  "start": 4788,
                  "end": 4789
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 4785,
                "end": 4789
              }
            ],
            "start": 4783,
            "end": 4791
          },
          "definite": false,
          "start": 4773,
          "end": 4791
        }
      ],
      "declare": false,
      "start": 4767,
      "end": 4792
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "save",
        "optional": false,
        "typeAnnotation": null,
        "start": 4833,
        "end": 4837
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_response",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IRootResponse",
                "optional": false,
                "typeAnnotation": null,
                "start": 4849,
                "end": 4862
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 4863,
                    "end": 4869
                  }
                ],
                "start": 4862,
                "end": 4870
              },
              "start": 4849,
              "end": 4870
            },
            "start": 4847,
            "end": 4870
          },
          "start": 4838,
          "end": 4870
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 4873,
          "end": 4877
        },
        "start": 4871,
        "end": 4877
      },
      "body": null,
      "expression": false,
      "start": 4816,
      "end": 4878
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "exportCommand",
          "optional": false,
          "typeAnnotation": null,
          "start": 4880,
          "end": 4893
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "save",
            "optional": false,
            "typeAnnotation": null,
            "start": 4894,
            "end": 4898
          }
        ],
        "optional": false,
        "start": 4880,
        "end": 4899
      },
      "directive": null,
      "start": 4880,
      "end": 4900
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "exportCommand",
        "optional": false,
        "typeAnnotation": null,
        "start": 4919,
        "end": 4932
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TResponse",
              "optional": false,
              "typeAnnotation": null,
              "start": 4933,
              "end": 4942
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4933,
            "end": 4942
          }
        ],
        "start": 4932,
        "end": 4943
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "functionToCall",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IExportCallback",
                "optional": false,
                "typeAnnotation": null,
                "start": 4960,
                "end": 4975
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TResponse",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4976,
                      "end": 4985
                    },
                    "typeArguments": null,
                    "start": 4976,
                    "end": 4985
                  }
                ],
                "start": 4975,
                "end": 4986
              },
              "start": 4960,
              "end": 4986
            },
            "start": 4958,
            "end": 4986
          },
          "start": 4944,
          "end": 4986
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 4989,
          "end": 4993
        },
        "start": 4987,
        "end": 4993
      },
      "body": null,
      "expression": false,
      "start": 4902,
      "end": 4994
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IExportCallback",
        "optional": false,
        "typeAnnotation": null,
        "start": 5006,
        "end": 5021
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TResponse",
              "optional": false,
              "typeAnnotation": null,
              "start": 5022,
              "end": 5031
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5022,
            "end": 5031
          }
        ],
        "start": 5021,
        "end": 5032
      },
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
                "name": "response",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IRootResponse",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5047,
                      "end": 5060
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TResponse",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5061,
                            "end": 5070
                          },
                          "typeArguments": null,
                          "start": 5061,
                          "end": 5070
                        }
                      ],
                      "start": 5060,
                      "end": 5071
                    },
                    "start": 5047,
                    "end": 5071
                  },
                  "start": 5045,
                  "end": 5071
                },
                "start": 5037,
                "end": 5071
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 5074,
                "end": 5078
              },
              "start": 5072,
              "end": 5078
            },
            "start": 5036,
            "end": 5079
          }
        ],
        "start": 5033,
        "end": 5081
      },
      "declare": false,
      "start": 4996,
      "end": 5081
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IRootResponse",
        "optional": false,
        "typeAnnotation": null,
        "start": 5088,
        "end": 5101
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TResponse",
              "optional": false,
              "typeAnnotation": null,
              "start": 5102,
              "end": 5111
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5102,
            "end": 5111
          }
        ],
        "start": 5101,
        "end": 5112
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TResponse",
            "optional": false,
            "typeAnnotation": null,
            "start": 5116,
            "end": 5125
          },
          "typeArguments": null,
          "start": 5116,
          "end": 5125
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IRecord",
            "optional": false,
            "typeAnnotation": null,
            "start": 5134,
            "end": 5141
          },
          "typeArguments": null,
          "start": 5134,
          "end": 5141
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IRecordResponse",
            "optional": false,
            "typeAnnotation": null,
            "start": 5144,
            "end": 5159
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TResponse",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5160,
                  "end": 5169
                },
                "typeArguments": null,
                "start": 5160,
                "end": 5169
              }
            ],
            "start": 5159,
            "end": 5170
          },
          "start": 5144,
          "end": 5170
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IResponse",
            "optional": false,
            "typeAnnotation": null,
            "start": 5173,
            "end": 5182
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TResponse",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5183,
                  "end": 5192
                },
                "typeArguments": null,
                "start": 5183,
                "end": 5192
              }
            ],
            "start": 5182,
            "end": 5193
          },
          "start": 5173,
          "end": 5193
        },
        "start": 5116,
        "end": 5193
      },
      "declare": false,
      "start": 5083,
      "end": 5194
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IRecord",
        "optional": false,
        "typeAnnotation": null,
        "start": 5206,
        "end": 5213
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
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Id",
              "optional": false,
              "typeAnnotation": null,
              "start": 5226,
              "end": 5228
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 5230,
                "end": 5236
              },
              "start": 5228,
              "end": 5236
            },
            "accessibility": null,
            "static": false,
            "start": 5217,
            "end": 5237
          }
        ],
        "start": 5214,
        "end": 5239
      },
      "declare": false,
      "start": 5196,
      "end": 5239
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IRecordResponse",
        "optional": false,
        "typeAnnotation": null,
        "start": 5254,
        "end": 5269
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
              "start": 5270,
              "end": 5271
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IRecord",
                "optional": false,
                "typeAnnotation": null,
                "start": 5280,
                "end": 5287
              },
              "typeArguments": null,
              "start": 5280,
              "end": 5287
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5270,
            "end": 5287
          }
        ],
        "start": 5269,
        "end": 5288
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "IResponse",
              "optional": false,
              "typeAnnotation": null,
              "start": 5291,
              "end": 5300
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5301,
                    "end": 5302
                  },
                  "typeArguments": null,
                  "start": 5301,
                  "end": 5302
                }
              ],
              "start": 5300,
              "end": 5303
            },
            "start": 5291,
            "end": 5303
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSMethodSignature",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sendRecord",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5309,
                  "end": 5319
                },
                "computed": false,
                "optional": false,
                "kind": "method",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 5323,
                    "end": 5327
                  },
                  "start": 5321,
                  "end": 5327
                },
                "accessibility": null,
                "readonly": false,
                "static": false,
                "start": 5309,
                "end": 5328
              }
            ],
            "start": 5306,
            "end": 5330
          }
        ],
        "start": 5291,
        "end": 5330
      },
      "declare": true,
      "start": 5241,
      "end": 5331
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IResponse",
        "optional": false,
        "typeAnnotation": null,
        "start": 5346,
        "end": 5355
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
              "start": 5356,
              "end": 5357
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5356,
            "end": 5357
          }
        ],
        "start": 5355,
        "end": 5358
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sendValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 5364,
              "end": 5373
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "GetAllPropertiesOfType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5386,
                        "end": 5408
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5409,
                              "end": 5410
                            },
                            "typeArguments": null,
                            "start": 5409,
                            "end": 5410
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 5412,
                            "end": 5418
                          }
                        ],
                        "start": 5408,
                        "end": 5419
                      },
                      "start": 5386,
                      "end": 5419
                    },
                    "start": 5380,
                    "end": 5419
                  },
                  "start": 5378,
                  "end": 5419
                },
                "start": 5374,
                "end": 5419
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 5422,
                "end": 5426
              },
              "start": 5420,
              "end": 5426
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 5364,
            "end": 5427
          }
        ],
        "start": 5361,
        "end": 5429
      },
      "declare": true,
      "start": 5333,
      "end": 5430
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GetPropertyNamesOfType",
        "optional": false,
        "typeAnnotation": null,
        "start": 5445,
        "end": 5467
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
              "start": 5468,
              "end": 5469
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5468,
            "end": 5469
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "RestrictToType",
              "optional": false,
              "typeAnnotation": null,
              "start": 5471,
              "end": 5485
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5471,
            "end": 5485
          }
        ],
        "start": 5467,
        "end": 5486
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "PropertyName",
            "optional": false,
            "typeAnnotation": null,
            "start": 5493,
            "end": 5505
          },
          "constraint": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Extract",
              "optional": false,
              "typeAnnotation": null,
              "start": 5509,
              "end": 5516
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5523,
                      "end": 5524
                    },
                    "typeArguments": null,
                    "start": 5523,
                    "end": 5524
                  },
                  "start": 5517,
                  "end": 5524
                },
                {
                  "type": "TSStringKeyword",
                  "start": 5526,
                  "end": 5532
                }
              ],
              "start": 5516,
              "end": 5533
            },
            "start": 5509,
            "end": 5533
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5536,
                  "end": 5537
                },
                "typeArguments": null,
                "start": 5536,
                "end": 5537
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PropertyName",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5538,
                  "end": 5550
                },
                "typeArguments": null,
                "start": 5538,
                "end": 5550
              },
              "start": 5536,
              "end": 5551
            },
            "extendsType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "RestrictToType",
                "optional": false,
                "typeAnnotation": null,
                "start": 5560,
                "end": 5574
              },
              "typeArguments": null,
              "start": 5560,
              "end": 5574
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PropertyName",
                "optional": false,
                "typeAnnotation": null,
                "start": 5577,
                "end": 5589
              },
              "typeArguments": null,
              "start": 5577,
              "end": 5589
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 5592,
              "end": 5597
            },
            "start": 5536,
            "end": 5597
          },
          "optional": false,
          "readonly": null,
          "start": 5489,
          "end": 5599
        },
        "indexType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Extract",
            "optional": false,
            "typeAnnotation": null,
            "start": 5600,
            "end": 5607
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5614,
                    "end": 5615
                  },
                  "typeArguments": null,
                  "start": 5614,
                  "end": 5615
                },
                "start": 5608,
                "end": 5615
              },
              {
                "type": "TSStringKeyword",
                "start": 5617,
                "end": 5623
              }
            ],
            "start": 5607,
            "end": 5624
          },
          "start": 5600,
          "end": 5624
        },
        "start": 5489,
        "end": 5625
      },
      "declare": true,
      "start": 5432,
      "end": 5626
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GetAllPropertiesOfType",
        "optional": false,
        "typeAnnotation": null,
        "start": 5641,
        "end": 5663
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
              "start": 5664,
              "end": 5665
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5664,
            "end": 5665
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "RestrictToType",
              "optional": false,
              "typeAnnotation": null,
              "start": 5667,
              "end": 5681
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5667,
            "end": 5681
          }
        ],
        "start": 5663,
        "end": 5682
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pick",
          "optional": false,
          "typeAnnotation": null,
          "start": 5685,
          "end": 5689
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 5692,
                "end": 5693
              },
              "typeArguments": null,
              "start": 5692,
              "end": 5693
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "GetPropertyNamesOfType",
                "optional": false,
                "typeAnnotation": null,
                "start": 5696,
                "end": 5718
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Required",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5719,
                      "end": 5727
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5728,
                            "end": 5729
                          },
                          "typeArguments": null,
                          "start": 5728,
                          "end": 5729
                        }
                      ],
                      "start": 5727,
                      "end": 5730
                    },
                    "start": 5719,
                    "end": 5730
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RestrictToType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5732,
                      "end": 5746
                    },
                    "typeArguments": null,
                    "start": 5732,
                    "end": 5746
                  }
                ],
                "start": 5718,
                "end": 5747
              },
              "start": 5696,
              "end": 5747
            }
          ],
          "start": 5689,
          "end": 5749
        },
        "start": 5685,
        "end": 5749
      },
      "declare": true,
      "start": 5628,
      "end": 5750
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ff",
        "optional": false,
        "typeAnnotation": null,
        "start": 5791,
        "end": 5793
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo3",
                "optional": false,
                "typeAnnotation": null,
                "start": 5797,
                "end": 5801
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 5802,
                    "end": 5808
                  }
                ],
                "start": 5801,
                "end": 5809
              },
              "start": 5797,
              "end": 5809
            },
            "start": 5795,
            "end": 5809
          },
          "start": 5794,
          "end": 5809
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 5812,
          "end": 5816
        },
        "start": 5810,
        "end": 5816
      },
      "body": null,
      "expression": false,
      "start": 5774,
      "end": 5817
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "gg",
        "optional": false,
        "typeAnnotation": null,
        "start": 5835,
        "end": 5837
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 5838,
              "end": 5839
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5838,
            "end": 5839
          }
        ],
        "start": 5837,
        "end": 5840
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5848,
                        "end": 5852
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5853,
                              "end": 5854
                            },
                            "typeArguments": null,
                            "start": 5853,
                            "end": 5854
                          }
                        ],
                        "start": 5852,
                        "end": 5855
                      },
                      "start": 5848,
                      "end": 5855
                    },
                    "start": 5846,
                    "end": 5855
                  },
                  "start": 5845,
                  "end": 5855
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 5860,
                  "end": 5864
                },
                "start": 5857,
                "end": 5864
              },
              "start": 5844,
              "end": 5864
            },
            "start": 5842,
            "end": 5864
          },
          "start": 5841,
          "end": 5864
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 5867,
          "end": 5871
        },
        "start": 5865,
        "end": 5871
      },
      "body": null,
      "expression": false,
      "start": 5818,
      "end": 5872
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 5878,
        "end": 5882
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
              "start": 5883,
              "end": 5884
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5883,
            "end": 5884
          }
        ],
        "start": 5882,
        "end": 5885
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 5888,
            "end": 5889
          },
          "typeArguments": null,
          "start": 5888,
          "end": 5889
        },
        "extendsType": {
          "type": "TSNumberKeyword",
          "start": 5898,
          "end": 5904
        },
        "trueType": {
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
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 5909,
                "end": 5910
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
                    "start": 5912,
                    "end": 5913
                  },
                  "typeArguments": null,
                  "start": 5912,
                  "end": 5913
                },
                "start": 5910,
                "end": 5913
              },
              "accessibility": null,
              "static": false,
              "start": 5909,
              "end": 5913
            }
          ],
          "start": 5907,
          "end": 5915
        },
        "falseType": {
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 5920,
                "end": 5921
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
                    "start": 5923,
                    "end": 5924
                  },
                  "typeArguments": null,
                  "start": 5923,
                  "end": 5924
                },
                "start": 5921,
                "end": 5924
              },
              "accessibility": null,
              "static": false,
              "start": 5920,
              "end": 5924
            }
          ],
          "start": 5918,
          "end": 5926
        },
        "start": 5888,
        "end": 5926
      },
      "declare": false,
      "start": 5873,
      "end": 5927
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "gg",
          "optional": false,
          "typeAnnotation": null,
          "start": 5928,
          "end": 5930
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ff",
            "optional": false,
            "typeAnnotation": null,
            "start": 5931,
            "end": 5933
          }
        ],
        "optional": false,
        "start": 5928,
        "end": 5934
      },
      "directive": null,
      "start": 5928,
      "end": 5935
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Wat",
        "optional": false,
        "typeAnnotation": null,
        "start": 5964,
        "end": 5967
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 5968,
              "end": 5969
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 5978,
              "end": 5984
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5968,
            "end": 5984
          }
        ],
        "start": 5967,
        "end": 5985
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 5990,
                "end": 5991
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
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
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5995,
                        "end": 5996
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 5998,
                            "end": 5999
                          },
                          "start": 5998,
                          "end": 5999
                        },
                        "start": 5996,
                        "end": 5999
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 5995,
                      "end": 6000
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6001,
                        "end": 6002
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 6004,
                            "end": 6005
                          },
                          "start": 6004,
                          "end": 6005
                        },
                        "start": 6002,
                        "end": 6005
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 6001,
                      "end": 6005
                    }
                  ],
                  "start": 5993,
                  "end": 6007
                },
                "start": 5991,
                "end": 6007
              },
              "accessibility": null,
              "static": false,
              "start": 5990,
              "end": 6007
            }
          ],
          "start": 5988,
          "end": 6009
        },
        "extendsType": {
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 6020,
                "end": 6021
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSMappedType",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6026,
                    "end": 6027
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6031,
                      "end": 6032
                    },
                    "typeArguments": null,
                    "start": 6031,
                    "end": 6032
                  },
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 6035,
                      "end": 6036
                    },
                    "start": 6035,
                    "end": 6036
                  },
                  "optional": false,
                  "readonly": null,
                  "start": 6023,
                  "end": 6038
                },
                "start": 6021,
                "end": 6038
              },
              "accessibility": null,
              "static": false,
              "start": 6020,
              "end": 6038
            }
          ],
          "start": 6018,
          "end": 6040
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 6043,
            "end": 6047
          },
          "start": 6043,
          "end": 6047
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 6050,
            "end": 6055
          },
          "start": 6050,
          "end": 6055
        },
        "start": 5988,
        "end": 6055
      },
      "declare": false,
      "start": 5959,
      "end": 6056
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Huh",
        "optional": false,
        "typeAnnotation": null,
        "start": 6064,
        "end": 6067
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Wat",
          "optional": false,
          "typeAnnotation": null,
          "start": 6070,
          "end": 6073
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "y",
                "raw": "\"y\"",
                "start": 6074,
                "end": 6077
              },
              "start": 6074,
              "end": 6077
            }
          ],
          "start": 6073,
          "end": 6078
        },
        "start": 6070,
        "end": 6078
      },
      "declare": false,
      "start": 6059,
      "end": 6079
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 6088
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9,
    "range": [
      0,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "Covariant",
    "start": 10,
    "end": 19,
    "range": [
      10,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 29,
    "end": 32,
    "range": [
      29,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 36,
    "end": 43,
    "range": [
      36,
      43
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 44,
    "end": 50,
    "range": [
      44,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 57,
    "end": 63,
    "range": [
      57,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 68,
    "end": 77,
    "range": [
      68,
      77
    ]
  },
  {
    "type": "Identifier",
    "value": "Contravariant",
    "start": 78,
    "end": 91,
    "range": [
      78,
      91
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 101,
    "end": 104,
    "range": [
      101,
      104
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 108,
    "end": 115,
    "range": [
      108,
      115
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 116,
    "end": 122,
    "range": [
      116,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 125,
    "end": 130,
    "range": [
      125,
      130
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 135,
    "end": 141,
    "range": [
      135,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 146,
    "end": 155,
    "range": [
      146,
      155
    ]
  },
  {
    "type": "Identifier",
    "value": "Invariant",
    "start": 156,
    "end": 165,
    "range": [
      156,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 175,
    "end": 178,
    "range": [
      175,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 182,
    "end": 189,
    "range": [
      182,
      189
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 190,
    "end": 196,
    "range": [
      190,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 199,
    "end": 204,
    "range": [
      199,
      204
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 215,
    "end": 223,
    "range": [
      215,
      223
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 224,
    "end": 226,
    "range": [
      224,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "value": "B",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 232,
    "end": 239,
    "range": [
      232,
      239
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Identifier",
    "value": "Covariant",
    "start": 246,
    "end": 255,
    "range": [
      246,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Identifier",
    "value": "Covariant",
    "start": 263,
    "end": 272,
    "range": [
      263,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 274,
    "end": 275,
    "range": [
      274,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 277,
    "end": 278,
    "range": [
      277,
      278
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 288,
    "end": 289,
    "range": [
      288,
      289
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 314,
    "end": 322,
    "range": [
      314,
      322
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 323,
    "end": 325,
    "range": [
      323,
      325
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 326,
    "end": 327,
    "range": [
      326,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 329,
    "end": 330,
    "range": [
      329,
      330
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 331,
    "end": 338,
    "range": [
      331,
      338
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 339,
    "end": 340,
    "range": [
      339,
      340
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 340,
    "end": 341,
    "range": [
      340,
      341
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 341,
    "end": 342,
    "range": [
      341,
      342
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 343,
    "end": 344,
    "range": [
      343,
      344
    ]
  },
  {
    "type": "Identifier",
    "value": "Contravariant",
    "start": 345,
    "end": 358,
    "range": [
      345,
      358
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 360,
    "end": 361,
    "range": [
      360,
      361
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "start": 364,
    "end": 365,
    "range": [
      364,
      365
    ]
  },
  {
    "type": "Identifier",
    "value": "Contravariant",
    "start": 366,
    "end": 379,
    "range": [
      366,
      379
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 379,
    "end": 380,
    "range": [
      379,
      380
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 380,
    "end": 381,
    "range": [
      380,
      381
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 381,
    "end": 382,
    "range": [
      381,
      382
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 382,
    "end": 383,
    "range": [
      382,
      383
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 390,
    "end": 391,
    "range": [
      390,
      391
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 392,
    "end": 393,
    "range": [
      392,
      393
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 394,
    "end": 395,
    "range": [
      394,
      395
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 395,
    "end": 396,
    "range": [
      395,
      396
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 411,
    "end": 412,
    "range": [
      411,
      412
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 413,
    "end": 414,
    "range": [
      413,
      414
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 421,
    "end": 429,
    "range": [
      421,
      429
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 430,
    "end": 432,
    "range": [
      430,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 433,
    "end": 434,
    "range": [
      433,
      434
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 434,
    "end": 435,
    "range": [
      434,
      435
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 438,
    "end": 445,
    "range": [
      438,
      445
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 447,
    "end": 448,
    "range": [
      447,
      448
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 449,
    "end": 450,
    "range": [
      449,
      450
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 450,
    "end": 451,
    "range": [
      450,
      451
    ]
  },
  {
    "type": "Identifier",
    "value": "Invariant",
    "start": 452,
    "end": 461,
    "range": [
      452,
      461
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 461,
    "end": 462,
    "range": [
      461,
      462
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 462,
    "end": 463,
    "range": [
      462,
      463
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Identifier",
    "value": "Invariant",
    "start": 469,
    "end": 478,
    "range": [
      469,
      478
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 479,
    "end": 480,
    "range": [
      479,
      480
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 481,
    "end": 482,
    "range": [
      481,
      482
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 494,
    "end": 495,
    "range": [
      494,
      495
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 512,
    "end": 513,
    "range": [
      512,
      513
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 514,
    "end": 515,
    "range": [
      514,
      515
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 515,
    "end": 516,
    "range": [
      515,
      516
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 527,
    "end": 528,
    "range": [
      527,
      528
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 592,
    "end": 600,
    "range": [
      592,
      600
    ]
  },
  {
    "type": "Identifier",
    "value": "isFunction",
    "start": 601,
    "end": 611,
    "range": [
      601,
      611
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 611,
    "end": 612,
    "range": [
      611,
      612
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 612,
    "end": 613,
    "range": [
      612,
      613
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 613,
    "end": 614,
    "range": [
      613,
      614
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 615,
    "end": 620,
    "range": [
      615,
      620
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 620,
    "end": 621,
    "range": [
      620,
      621
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 626,
    "end": 631,
    "range": [
      626,
      631
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 632,
    "end": 634,
    "range": [
      632,
      634
    ]
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 635,
    "end": 642,
    "range": [
      635,
      642
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 642,
    "end": 643,
    "range": [
      642,
      643
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 643,
    "end": 644,
    "range": [
      643,
      644
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 644,
    "end": 645,
    "range": [
      644,
      645
    ]
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 646,
    "end": 654,
    "range": [
      646,
      654
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 654,
    "end": 655,
    "range": [
      654,
      655
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 656,
    "end": 657,
    "range": [
      656,
      657
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 662,
    "end": 668,
    "range": [
      662,
      668
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 669,
    "end": 675,
    "range": [
      669,
      675
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 676,
    "end": 681,
    "range": [
      676,
      681
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 682,
    "end": 685,
    "range": [
      682,
      685
    ]
  },
  {
    "type": "String",
    "value": "\"function\"",
    "start": 686,
    "end": 696,
    "range": [
      686,
      696
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 696,
    "end": 697,
    "range": [
      696,
      697
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 698,
    "end": 699,
    "range": [
      698,
      699
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 701,
    "end": 709,
    "range": [
      701,
      709
    ]
  },
  {
    "type": "Identifier",
    "value": "getFunction",
    "start": 710,
    "end": 721,
    "range": [
      710,
      721
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 721,
    "end": 722,
    "range": [
      721,
      722
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 722,
    "end": 723,
    "range": [
      722,
      723
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 723,
    "end": 724,
    "range": [
      723,
      724
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 724,
    "end": 725,
    "range": [
      724,
      725
    ]
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 725,
    "end": 729,
    "range": [
      725,
      729
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 729,
    "end": 730,
    "range": [
      729,
      730
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 731,
    "end": 732,
    "range": [
      731,
      732
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 732,
    "end": 733,
    "range": [
      732,
      733
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 734,
    "end": 735,
    "range": [
      734,
      735
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 740,
    "end": 742,
    "range": [
      740,
      742
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 743,
    "end": 744,
    "range": [
      743,
      744
    ]
  },
  {
    "type": "Identifier",
    "value": "isFunction",
    "start": 744,
    "end": 754,
    "range": [
      744,
      754
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 754,
    "end": 755,
    "range": [
      754,
      755
    ]
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 755,
    "end": 759,
    "range": [
      755,
      759
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 759,
    "end": 760,
    "range": [
      759,
      760
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 760,
    "end": 761,
    "range": [
      760,
      761
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 762,
    "end": 763,
    "range": [
      762,
      763
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 772,
    "end": 778,
    "range": [
      772,
      778
    ]
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 779,
    "end": 783,
    "range": [
      779,
      783
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 783,
    "end": 784,
    "range": [
      783,
      784
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
    "value": "throw",
    "start": 795,
    "end": 800,
    "range": [
      795,
      800
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 801,
    "end": 804,
    "range": [
      801,
      804
    ]
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 805,
    "end": 810,
    "range": [
      805,
      810
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 810,
    "end": 811,
    "range": [
      810,
      811
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 811,
    "end": 812,
    "range": [
      811,
      812
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 812,
    "end": 813,
    "range": [
      812,
      813
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 814,
    "end": 815,
    "range": [
      814,
      815
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 817,
    "end": 825,
    "range": [
      817,
      825
    ]
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 826,
    "end": 829,
    "range": [
      826,
      829
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 829,
    "end": 830,
    "range": [
      829,
      830
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 830,
    "end": 831,
    "range": [
      830,
      831
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 831,
    "end": 832,
    "range": [
      831,
      832
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 832,
    "end": 833,
    "range": [
      832,
      833
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 833,
    "end": 834,
    "range": [
      833,
      834
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 834,
    "end": 835,
    "range": [
      834,
      835
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 836,
    "end": 837,
    "range": [
      836,
      837
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 837,
    "end": 838,
    "range": [
      837,
      838
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 839,
    "end": 840,
    "range": [
      839,
      840
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 845,
    "end": 847,
    "range": [
      845,
      847
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 848,
    "end": 849,
    "range": [
      848,
      849
    ]
  },
  {
    "type": "Identifier",
    "value": "isFunction",
    "start": 849,
    "end": 859,
    "range": [
      849,
      859
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 859,
    "end": 860,
    "range": [
      859,
      860
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 860,
    "end": 861,
    "range": [
      860,
      861
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 861,
    "end": 862,
    "range": [
      861,
      862
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 862,
    "end": 863,
    "range": [
      862,
      863
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 864,
    "end": 865,
    "range": [
      864,
      865
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 874,
    "end": 879,
    "range": [
      874,
      879
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 880,
    "end": 881,
    "range": [
      880,
      881
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 881,
    "end": 882,
    "range": [
      881,
      882
    ]
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 883,
    "end": 891,
    "range": [
      883,
      891
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 892,
    "end": 893,
    "range": [
      892,
      893
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 894,
    "end": 895,
    "range": [
      894,
      895
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 895,
    "end": 896,
    "range": [
      895,
      896
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 905,
    "end": 910,
    "range": [
      905,
      910
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 911,
    "end": 912,
    "range": [
      911,
      912
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 912,
    "end": 913,
    "range": [
      912,
      913
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 914,
    "end": 915,
    "range": [
      914,
      915
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 916,
    "end": 917,
    "range": [
      916,
      917
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 918,
    "end": 919,
    "range": [
      918,
      919
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 919,
    "end": 920,
    "range": [
      919,
      920
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 925,
    "end": 926,
    "range": [
      925,
      926
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 927,
    "end": 928,
    "range": [
      927,
      928
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 930,
    "end": 938,
    "range": [
      930,
      938
    ]
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 939,
    "end": 942,
    "range": [
      939,
      942
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 942,
    "end": 943,
    "range": [
      942,
      943
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 943,
    "end": 944,
    "range": [
      943,
      944
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 944,
    "end": 945,
    "range": [
      944,
      945
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 946,
    "end": 952,
    "range": [
      946,
      952
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 953,
    "end": 954,
    "range": [
      953,
      954
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 955,
    "end": 956,
    "range": [
      955,
      956
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 956,
    "end": 957,
    "range": [
      956,
      957
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 957,
    "end": 958,
    "range": [
      957,
      958
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 959,
    "end": 961,
    "range": [
      959,
      961
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 962,
    "end": 968,
    "range": [
      962,
      968
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 968,
    "end": 969,
    "range": [
      968,
      969
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 970,
    "end": 971,
    "range": [
      970,
      971
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 972,
    "end": 981,
    "range": [
      972,
      981
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 981,
    "end": 982,
    "range": [
      981,
      982
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 983,
    "end": 984,
    "range": [
      983,
      984
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 989,
    "end": 991,
    "range": [
      989,
      991
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 992,
    "end": 993,
    "range": [
      992,
      993
    ]
  },
  {
    "type": "Identifier",
    "value": "isFunction",
    "start": 993,
    "end": 1003,
    "range": [
      993,
      1003
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1003,
    "end": 1004,
    "range": [
      1003,
      1004
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1004,
    "end": 1005,
    "range": [
      1004,
      1005
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1005,
    "end": 1006,
    "range": [
      1005,
      1006
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1006,
    "end": 1007,
    "range": [
      1006,
      1007
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1008,
    "end": 1009,
    "range": [
      1008,
      1009
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1018,
    "end": 1019,
    "range": [
      1018,
      1019
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1019,
    "end": 1020,
    "range": [
      1019,
      1020
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1020,
    "end": 1021,
    "range": [
      1020,
      1021
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1021,
    "end": 1022,
    "range": [
      1021,
      1022
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1027,
    "end": 1028,
    "range": [
      1027,
      1028
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1029,
    "end": 1030,
    "range": [
      1029,
      1030
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1032,
    "end": 1040,
    "range": [
      1032,
      1040
    ]
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 1041,
    "end": 1044,
    "range": [
      1041,
      1044
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1044,
    "end": 1045,
    "range": [
      1044,
      1045
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1045,
    "end": 1046,
    "range": [
      1045,
      1046
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1046,
    "end": 1047,
    "range": [
      1046,
      1047
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1048,
    "end": 1054,
    "range": [
      1048,
      1054
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1055,
    "end": 1056,
    "range": [
      1055,
      1056
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1057,
    "end": 1058,
    "range": [
      1057,
      1058
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1058,
    "end": 1059,
    "range": [
      1058,
      1059
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1059,
    "end": 1060,
    "range": [
      1059,
      1060
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1061,
    "end": 1063,
    "range": [
      1061,
      1063
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1064,
    "end": 1070,
    "range": [
      1064,
      1070
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1070,
    "end": 1071,
    "range": [
      1070,
      1071
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1072,
    "end": 1073,
    "range": [
      1072,
      1073
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1074,
    "end": 1083,
    "range": [
      1074,
      1083
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1083,
    "end": 1084,
    "range": [
      1083,
      1084
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1085,
    "end": 1086,
    "range": [
      1085,
      1086
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1091,
    "end": 1096,
    "range": [
      1091,
      1096
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1097,
    "end": 1098,
    "range": [
      1097,
      1098
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1099,
    "end": 1100,
    "range": [
      1099,
      1100
    ]
  },
  {
    "type": "Identifier",
    "value": "getFunction",
    "start": 1101,
    "end": 1112,
    "range": [
      1101,
      1112
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1112,
    "end": 1113,
    "range": [
      1112,
      1113
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1113,
    "end": 1114,
    "range": [
      1113,
      1114
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1114,
    "end": 1115,
    "range": [
      1114,
      1115
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1115,
    "end": 1116,
    "range": [
      1115,
      1116
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1138,
    "end": 1139,
    "range": [
      1138,
      1139
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1139,
    "end": 1140,
    "range": [
      1139,
      1140
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1140,
    "end": 1141,
    "range": [
      1140,
      1141
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1141,
    "end": 1142,
    "range": [
      1141,
      1142
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1143,
    "end": 1144,
    "range": [
      1143,
      1144
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1146,
    "end": 1150,
    "range": [
      1146,
      1150
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1151,
    "end": 1154,
    "range": [
      1151,
      1154
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1155,
    "end": 1156,
    "range": [
      1155,
      1156
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1157,
    "end": 1158,
    "range": [
      1157,
      1158
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1159,
    "end": 1162,
    "range": [
      1159,
      1162
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1162,
    "end": 1163,
    "range": [
      1162,
      1163
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1164,
    "end": 1170,
    "range": [
      1164,
      1170
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1171,
    "end": 1172,
    "range": [
      1171,
      1172
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1172,
    "end": 1173,
    "range": [
      1172,
      1173
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1174,
    "end": 1178,
    "range": [
      1174,
      1178
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 1179,
    "end": 1182,
    "range": [
      1179,
      1182
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1183,
    "end": 1184,
    "range": [
      1183,
      1184
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1185,
    "end": 1186,
    "range": [
      1185,
      1186
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1187,
    "end": 1190,
    "range": [
      1187,
      1190
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1190,
    "end": 1191,
    "range": [
      1190,
      1191
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1192,
    "end": 1198,
    "range": [
      1192,
      1198
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1199,
    "end": 1200,
    "range": [
      1199,
      1200
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1200,
    "end": 1201,
    "range": [
      1200,
      1201
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1203,
    "end": 1210,
    "range": [
      1203,
      1210
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1211,
    "end": 1219,
    "range": [
      1211,
      1219
    ]
  },
  {
    "type": "Identifier",
    "value": "fooBar",
    "start": 1220,
    "end": 1226,
    "range": [
      1220,
      1226
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1226,
    "end": 1227,
    "range": [
      1226,
      1227
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1227,
    "end": 1228,
    "range": [
      1227,
      1228
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1228,
    "end": 1229,
    "range": [
      1228,
      1229
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1230,
    "end": 1231,
    "range": [
      1230,
      1231
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1232,
    "end": 1235,
    "range": [
      1232,
      1235
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1235,
    "end": 1236,
    "range": [
      1235,
      1236
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1237,
    "end": 1243,
    "range": [
      1237,
      1243
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1243,
    "end": 1244,
    "range": [
      1243,
      1244
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1245,
    "end": 1248,
    "range": [
      1245,
      1248
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1248,
    "end": 1249,
    "range": [
      1248,
      1249
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1250,
    "end": 1256,
    "range": [
      1250,
      1256
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1257,
    "end": 1258,
    "range": [
      1257,
      1258
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1258,
    "end": 1259,
    "range": [
      1258,
      1259
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1259,
    "end": 1260,
    "range": [
      1259,
      1260
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1261,
    "end": 1265,
    "range": [
      1261,
      1265
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1265,
    "end": 1266,
    "range": [
      1265,
      1266
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1267,
    "end": 1274,
    "range": [
      1267,
      1274
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1275,
    "end": 1283,
    "range": [
      1275,
      1283
    ]
  },
  {
    "type": "Identifier",
    "value": "fooBat",
    "start": 1284,
    "end": 1290,
    "range": [
      1284,
      1290
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1290,
    "end": 1291,
    "range": [
      1290,
      1291
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1291,
    "end": 1292,
    "range": [
      1291,
      1292
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1292,
    "end": 1293,
    "range": [
      1292,
      1293
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1294,
    "end": 1295,
    "range": [
      1294,
      1295
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1296,
    "end": 1299,
    "range": [
      1296,
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
    "value": "string",
    "start": 1301,
    "end": 1307,
    "range": [
      1301,
      1307
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1307,
    "end": 1308,
    "range": [
      1307,
      1308
    ]
  },
  {
    "type": "Identifier",
    "value": "bat",
    "start": 1309,
    "end": 1312,
    "range": [
      1309,
      1312
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1312,
    "end": 1313,
    "range": [
      1312,
      1313
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1314,
    "end": 1320,
    "range": [
      1314,
      1320
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1321,
    "end": 1322,
    "range": [
      1321,
      1322
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1322,
    "end": 1323,
    "range": [
      1322,
      1323
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1323,
    "end": 1324,
    "range": [
      1323,
      1324
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1325,
    "end": 1329,
    "range": [
      1325,
      1329
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1329,
    "end": 1330,
    "range": [
      1329,
      1330
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1332,
    "end": 1336,
    "range": [
      1332,
      1336
    ]
  },
  {
    "type": "Identifier",
    "value": "Extract2",
    "start": 1337,
    "end": 1345,
    "range": [
      1337,
      1345
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1345,
    "end": 1346,
    "range": [
      1345,
      1346
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1346,
    "end": 1347,
    "range": [
      1346,
      1347
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1347,
    "end": 1348,
    "range": [
      1347,
      1348
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1349,
    "end": 1350,
    "range": [
      1349,
      1350
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1350,
    "end": 1351,
    "range": [
      1350,
      1351
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1352,
    "end": 1353,
    "range": [
      1352,
      1353
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1353,
    "end": 1354,
    "range": [
      1353,
      1354
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1355,
    "end": 1356,
    "range": [
      1355,
      1356
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1357,
    "end": 1358,
    "range": [
      1357,
      1358
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1359,
    "end": 1366,
    "range": [
      1359,
      1366
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1367,
    "end": 1368,
    "range": [
      1367,
      1368
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1369,
    "end": 1370,
    "range": [
      1369,
      1370
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1371,
    "end": 1372,
    "range": [
      1371,
      1372
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1373,
    "end": 1380,
    "range": [
      1373,
      1380
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1381,
    "end": 1382,
    "range": [
      1381,
      1382
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1383,
    "end": 1384,
    "range": [
      1383,
      1384
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1385,
    "end": 1386,
    "range": [
      1385,
      1386
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1387,
    "end": 1388,
    "range": [
      1387,
      1388
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1389,
    "end": 1394,
    "range": [
      1389,
      1394
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1395,
    "end": 1396,
    "range": [
      1395,
      1396
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1397,
    "end": 1402,
    "range": [
      1397,
      1402
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1402,
    "end": 1403,
    "range": [
      1402,
      1403
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1405,
    "end": 1413,
    "range": [
      1405,
      1413
    ]
  },
  {
    "type": "Identifier",
    "value": "f20",
    "start": 1414,
    "end": 1417,
    "range": [
      1414,
      1417
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1417,
    "end": 1418,
    "range": [
      1417,
      1418
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1418,
    "end": 1419,
    "range": [
      1418,
      1419
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1419,
    "end": 1420,
    "range": [
      1419,
      1420
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1420,
    "end": 1421,
    "range": [
      1420,
      1421
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1421,
    "end": 1422,
    "range": [
      1421,
      1422
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1422,
    "end": 1423,
    "range": [
      1422,
      1423
    ]
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 1424,
    "end": 1431,
    "range": [
      1424,
      1431
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1431,
    "end": 1432,
    "range": [
      1431,
      1432
    ]
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 1432,
    "end": 1439,
    "range": [
      1432,
      1439
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1439,
    "end": 1440,
    "range": [
      1439,
      1440
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1440,
    "end": 1441,
    "range": [
      1440,
      1441
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1441,
    "end": 1442,
    "range": [
      1441,
      1442
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1443,
    "end": 1446,
    "range": [
      1443,
      1446
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1446,
    "end": 1447,
    "range": [
      1446,
      1447
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1447,
    "end": 1448,
    "range": [
      1447,
      1448
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 1449,
    "end": 1452,
    "range": [
      1449,
      1452
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1452,
    "end": 1453,
    "range": [
      1452,
      1453
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1453,
    "end": 1454,
    "range": [
      1453,
      1454
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1455,
    "end": 1456,
    "range": [
      1455,
      1456
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1456,
    "end": 1457,
    "range": [
      1456,
      1457
    ]
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 1458,
    "end": 1465,
    "range": [
      1458,
      1465
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1465,
    "end": 1466,
    "range": [
      1465,
      1466
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1466,
    "end": 1467,
    "range": [
      1466,
      1467
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1467,
    "end": 1468,
    "range": [
      1467,
      1468
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1469,
    "end": 1472,
    "range": [
      1469,
      1472
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1473,
    "end": 1474,
    "range": [
      1473,
      1474
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 1475,
    "end": 1478,
    "range": [
      1475,
      1478
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1478,
    "end": 1479,
    "range": [
      1478,
      1479
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1479,
    "end": 1480,
    "range": [
      1479,
      1480
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1481,
    "end": 1482,
    "range": [
      1481,
      1482
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1482,
    "end": 1483,
    "range": [
      1482,
      1483
    ]
  },
  {
    "type": "Identifier",
    "value": "Extract2",
    "start": 1484,
    "end": 1492,
    "range": [
      1484,
      1492
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1492,
    "end": 1493,
    "range": [
      1492,
      1493
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1493,
    "end": 1494,
    "range": [
      1493,
      1494
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1494,
    "end": 1495,
    "range": [
      1494,
      1495
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1496,
    "end": 1499,
    "range": [
      1496,
      1499
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1499,
    "end": 1500,
    "range": [
      1499,
      1500
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 1501,
    "end": 1504,
    "range": [
      1501,
      1504
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1504,
    "end": 1505,
    "range": [
      1504,
      1505
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1505,
    "end": 1506,
    "range": [
      1505,
      1506
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1507,
    "end": 1508,
    "range": [
      1507,
      1508
    ]
  },
  {
    "type": "Identifier",
    "value": "fooBar",
    "start": 1513,
    "end": 1519,
    "range": [
      1513,
      1519
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1519,
    "end": 1520,
    "range": [
      1519,
      1520
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1520,
    "end": 1521,
    "range": [
      1520,
      1521
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1521,
    "end": 1522,
    "range": [
      1521,
      1522
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1522,
    "end": 1523,
    "range": [
      1522,
      1523
    ]
  },
  {
    "type": "Identifier",
    "value": "fooBar",
    "start": 1528,
    "end": 1534,
    "range": [
      1528,
      1534
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1534,
    "end": 1535,
    "range": [
      1534,
      1535
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1535,
    "end": 1536,
    "range": [
      1535,
      1536
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1536,
    "end": 1537,
    "range": [
      1536,
      1537
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1537,
    "end": 1538,
    "range": [
      1537,
      1538
    ]
  },
  {
    "type": "Identifier",
    "value": "fooBar",
    "start": 1543,
    "end": 1549,
    "range": [
      1543,
      1549
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1549,
    "end": 1550,
    "range": [
      1549,
      1550
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1550,
    "end": 1551,
    "range": [
      1550,
      1551
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1551,
    "end": 1552,
    "range": [
      1551,
      1552
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1552,
    "end": 1553,
    "range": [
      1552,
      1553
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1554,
    "end": 1555,
    "range": [
      1554,
      1555
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1557,
    "end": 1565,
    "range": [
      1557,
      1565
    ]
  },
  {
    "type": "Identifier",
    "value": "f21",
    "start": 1566,
    "end": 1569,
    "range": [
      1566,
      1569
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1569,
    "end": 1570,
    "range": [
      1569,
      1570
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1570,
    "end": 1571,
    "range": [
      1570,
      1571
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1571,
    "end": 1572,
    "range": [
      1571,
      1572
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1572,
    "end": 1573,
    "range": [
      1572,
      1573
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1573,
    "end": 1574,
    "range": [
      1573,
      1574
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1574,
    "end": 1575,
    "range": [
      1574,
      1575
    ]
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 1576,
    "end": 1583,
    "range": [
      1576,
      1583
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1583,
    "end": 1584,
    "range": [
      1583,
      1584
    ]
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 1584,
    "end": 1591,
    "range": [
      1584,
      1591
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1591,
    "end": 1592,
    "range": [
      1591,
      1592
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1592,
    "end": 1593,
    "range": [
      1592,
      1593
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1593,
    "end": 1594,
    "range": [
      1593,
      1594
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1595,
    "end": 1598,
    "range": [
      1595,
      1598
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1598,
    "end": 1599,
    "range": [
      1598,
      1599
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1599,
    "end": 1600,
    "range": [
      1599,
      1600
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 1601,
    "end": 1604,
    "range": [
      1601,
      1604
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1604,
    "end": 1605,
    "range": [
      1604,
      1605
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1605,
    "end": 1606,
    "range": [
      1605,
      1606
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1607,
    "end": 1608,
    "range": [
      1607,
      1608
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1608,
    "end": 1609,
    "range": [
      1608,
      1609
    ]
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 1610,
    "end": 1617,
    "range": [
      1610,
      1617
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1617,
    "end": 1618,
    "range": [
      1617,
      1618
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1618,
    "end": 1619,
    "range": [
      1618,
      1619
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1619,
    "end": 1620,
    "range": [
      1619,
      1620
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1621,
    "end": 1624,
    "range": [
      1621,
      1624
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1625,
    "end": 1626,
    "range": [
      1625,
      1626
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 1627,
    "end": 1630,
    "range": [
      1627,
      1630
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1630,
    "end": 1631,
    "range": [
      1630,
      1631
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1631,
    "end": 1632,
    "range": [
      1631,
      1632
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1633,
    "end": 1634,
    "range": [
      1633,
      1634
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1634,
    "end": 1635,
    "range": [
      1634,
      1635
    ]
  },
  {
    "type": "Identifier",
    "value": "Extract2",
    "start": 1636,
    "end": 1644,
    "range": [
      1636,
      1644
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1644,
    "end": 1645,
    "range": [
      1644,
      1645
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1645,
    "end": 1646,
    "range": [
      1645,
      1646
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1646,
    "end": 1647,
    "range": [
      1646,
      1647
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1648,
    "end": 1651,
    "range": [
      1648,
      1651
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1651,
    "end": 1652,
    "range": [
      1651,
      1652
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 1653,
    "end": 1656,
    "range": [
      1653,
      1656
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1656,
    "end": 1657,
    "range": [
      1656,
      1657
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1657,
    "end": 1658,
    "range": [
      1657,
      1658
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1659,
    "end": 1660,
    "range": [
      1659,
      1660
    ]
  },
  {
    "type": "Identifier",
    "value": "fooBat",
    "start": 1665,
    "end": 1671,
    "range": [
      1665,
      1671
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1671,
    "end": 1672,
    "range": [
      1671,
      1672
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1672,
    "end": 1673,
    "range": [
      1672,
      1673
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1673,
    "end": 1674,
    "range": [
      1673,
      1674
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1674,
    "end": 1675,
    "range": [
      1674,
      1675
    ]
  },
  {
    "type": "Identifier",
    "value": "fooBat",
    "start": 1690,
    "end": 1696,
    "range": [
      1690,
      1696
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1696,
    "end": 1697,
    "range": [
      1696,
      1697
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1697,
    "end": 1698,
    "range": [
      1697,
      1698
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1698,
    "end": 1699,
    "range": [
      1698,
      1699
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1699,
    "end": 1700,
    "range": [
      1699,
      1700
    ]
  },
  {
    "type": "Identifier",
    "value": "fooBat",
    "start": 1715,
    "end": 1721,
    "range": [
      1715,
      1721
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1721,
    "end": 1722,
    "range": [
      1721,
      1722
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1722,
    "end": 1723,
    "range": [
      1722,
      1723
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1723,
    "end": 1724,
    "range": [
      1723,
      1724
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1724,
    "end": 1725,
    "range": [
      1724,
      1725
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1736,
    "end": 1737,
    "range": [
      1736,
      1737
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1762,
    "end": 1767,
    "range": [
      1762,
      1767
    ]
  },
  {
    "type": "Identifier",
    "value": "Opt",
    "start": 1768,
    "end": 1771,
    "range": [
      1768,
      1771
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1771,
    "end": 1772,
    "range": [
      1771,
      1772
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1772,
    "end": 1773,
    "range": [
      1772,
      1773
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1773,
    "end": 1774,
    "range": [
      1773,
      1774
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1775,
    "end": 1776,
    "range": [
      1775,
      1776
    ]
  },
  {
    "type": "Identifier",
    "value": "toVector",
    "start": 1781,
    "end": 1789,
    "range": [
      1781,
      1789
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1789,
    "end": 1790,
    "range": [
      1789,
      1790
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1790,
    "end": 1791,
    "range": [
      1790,
      1791
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1791,
    "end": 1792,
    "range": [
      1791,
      1792
    ]
  },
  {
    "type": "Identifier",
    "value": "Vector",
    "start": 1793,
    "end": 1799,
    "range": [
      1793,
      1799
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1799,
    "end": 1800,
    "range": [
      1799,
      1800
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1800,
    "end": 1801,
    "range": [
      1800,
      1801
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1801,
    "end": 1802,
    "range": [
      1801,
      1802
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1803,
    "end": 1804,
    "range": [
      1803,
      1804
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1813,
    "end": 1819,
    "range": [
      1813,
      1819
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1820,
    "end": 1821,
    "range": [
      1820,
      1821
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1821,
    "end": 1824,
    "range": [
      1821,
      1824
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1824,
    "end": 1825,
    "range": [
      1824,
      1825
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1825,
    "end": 1834,
    "range": [
      1825,
      1834
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1834,
    "end": 1835,
    "range": [
      1834,
      1835
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1840,
    "end": 1841,
    "range": [
      1840,
      1841
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1842,
    "end": 1843,
    "range": [
      1842,
      1843
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1845,
    "end": 1854,
    "range": [
      1845,
      1854
    ]
  },
  {
    "type": "Identifier",
    "value": "Seq",
    "start": 1855,
    "end": 1858,
    "range": [
      1855,
      1858
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1858,
    "end": 1859,
    "range": [
      1858,
      1859
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1859,
    "end": 1860,
    "range": [
      1859,
      1860
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1860,
    "end": 1861,
    "range": [
      1860,
      1861
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1862,
    "end": 1863,
    "range": [
      1862,
      1863
    ]
  },
  {
    "type": "Identifier",
    "value": "tail",
    "start": 1868,
    "end": 1872,
    "range": [
      1868,
      1872
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1872,
    "end": 1873,
    "range": [
      1872,
      1873
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1873,
    "end": 1874,
    "range": [
      1873,
      1874
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1874,
    "end": 1875,
    "range": [
      1874,
      1875
    ]
  },
  {
    "type": "Identifier",
    "value": "Opt",
    "start": 1876,
    "end": 1879,
    "range": [
      1876,
      1879
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1879,
    "end": 1880,
    "range": [
      1879,
      1880
    ]
  },
  {
    "type": "Identifier",
    "value": "Seq",
    "start": 1880,
    "end": 1883,
    "range": [
      1880,
      1883
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1883,
    "end": 1884,
    "range": [
      1883,
      1884
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1884,
    "end": 1885,
    "range": [
      1884,
      1885
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1885,
    "end": 1886,
    "range": [
      1885,
      1886
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1886,
    "end": 1887,
    "range": [
      1886,
      1887
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1887,
    "end": 1888,
    "range": [
      1887,
      1888
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1889,
    "end": 1890,
    "range": [
      1889,
      1890
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1892,
    "end": 1897,
    "range": [
      1892,
      1897
    ]
  },
  {
    "type": "Identifier",
    "value": "Vector",
    "start": 1898,
    "end": 1904,
    "range": [
      1898,
      1904
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1904,
    "end": 1905,
    "range": [
      1904,
      1905
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1905,
    "end": 1906,
    "range": [
      1905,
      1906
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1906,
    "end": 1907,
    "range": [
      1906,
      1907
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 1908,
    "end": 1918,
    "range": [
      1908,
      1918
    ]
  },
  {
    "type": "Identifier",
    "value": "Seq",
    "start": 1919,
    "end": 1922,
    "range": [
      1919,
      1922
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1922,
    "end": 1923,
    "range": [
      1922,
      1923
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1923,
    "end": 1924,
    "range": [
      1923,
      1924
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1924,
    "end": 1925,
    "range": [
      1924,
      1925
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1926,
    "end": 1927,
    "range": [
      1926,
      1927
    ]
  },
  {
    "type": "Identifier",
    "value": "tail",
    "start": 1932,
    "end": 1936,
    "range": [
      1932,
      1936
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1936,
    "end": 1937,
    "range": [
      1936,
      1937
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1937,
    "end": 1938,
    "range": [
      1937,
      1938
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1938,
    "end": 1939,
    "range": [
      1938,
      1939
    ]
  },
  {
    "type": "Identifier",
    "value": "Opt",
    "start": 1940,
    "end": 1943,
    "range": [
      1940,
      1943
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1943,
    "end": 1944,
    "range": [
      1943,
      1944
    ]
  },
  {
    "type": "Identifier",
    "value": "Vector",
    "start": 1944,
    "end": 1950,
    "range": [
      1944,
      1950
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1950,
    "end": 1951,
    "range": [
      1950,
      1951
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1951,
    "end": 1952,
    "range": [
      1951,
      1952
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1952,
    "end": 1953,
    "range": [
      1952,
      1953
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1953,
    "end": 1954,
    "range": [
      1953,
      1954
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1955,
    "end": 1956,
    "range": [
      1955,
      1956
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1965,
    "end": 1971,
    "range": [
      1965,
      1971
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1972,
    "end": 1973,
    "range": [
      1972,
      1973
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1973,
    "end": 1976,
    "range": [
      1973,
      1976
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1976,
    "end": 1977,
    "range": [
      1976,
      1977
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1977,
    "end": 1986,
    "range": [
      1977,
      1986
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1986,
    "end": 1987,
    "range": [
      1986,
      1987
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1992,
    "end": 1993,
    "range": [
      1992,
      1993
    ]
  },
  {
    "type": "Identifier",
    "value": "partition2",
    "start": 1998,
    "end": 2008,
    "range": [
      1998,
      2008
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2008,
    "end": 2009,
    "range": [
      2008,
      2009
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2009,
    "end": 2010,
    "range": [
      2009,
      2010
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2011,
    "end": 2018,
    "range": [
      2011,
      2018
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2019,
    "end": 2020,
    "range": [
      2019,
      2020
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2020,
    "end": 2021,
    "range": [
      2020,
      2021
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2021,
    "end": 2022,
    "range": [
      2021,
      2022
    ]
  },
  {
    "type": "Identifier",
    "value": "predicate",
    "start": 2022,
    "end": 2031,
    "range": [
      2022,
      2031
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2031,
    "end": 2032,
    "range": [
      2031,
      2032
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2032,
    "end": 2033,
    "range": [
      2032,
      2033
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2033,
    "end": 2034,
    "range": [
      2033,
      2034
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2034,
    "end": 2035,
    "range": [
      2034,
      2035
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2035,
    "end": 2036,
    "range": [
      2035,
      2036
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2036,
    "end": 2037,
    "range": [
      2036,
      2037
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2037,
    "end": 2039,
    "range": [
      2037,
      2039
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2039,
    "end": 2040,
    "range": [
      2039,
      2040
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 2041,
    "end": 2043,
    "range": [
      2041,
      2043
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2044,
    "end": 2045,
    "range": [
      2044,
      2045
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2045,
    "end": 2046,
    "range": [
      2045,
      2046
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2046,
    "end": 2047,
    "range": [
      2046,
      2047
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2048,
    "end": 2049,
    "range": [
      2048,
      2049
    ]
  },
  {
    "type": "Identifier",
    "value": "Vector",
    "start": 2049,
    "end": 2055,
    "range": [
      2049,
      2055
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
    "value": "U",
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
    "value": ",",
    "start": 2058,
    "end": 2059,
    "range": [
      2058,
      2059
    ]
  },
  {
    "type": "Identifier",
    "value": "Vector",
    "start": 2059,
    "end": 2065,
    "range": [
      2059,
      2065
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2065,
    "end": 2066,
    "range": [
      2065,
      2066
    ]
  },
  {
    "type": "Identifier",
    "value": "Exclude",
    "start": 2066,
    "end": 2073,
    "range": [
      2066,
      2073
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2073,
    "end": 2074,
    "range": [
      2073,
      2074
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2074,
    "end": 2075,
    "range": [
      2074,
      2075
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2075,
    "end": 2076,
    "range": [
      2075,
      2076
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2077,
    "end": 2078,
    "range": [
      2077,
      2078
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2078,
    "end": 2079,
    "range": [
      2078,
      2079
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2079,
    "end": 2080,
    "range": [
      2079,
      2080
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2080,
    "end": 2081,
    "range": [
      2080,
      2081
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2081,
    "end": 2082,
    "range": [
      2081,
      2082
    ]
  },
  {
    "type": "Identifier",
    "value": "partition2",
    "start": 2087,
    "end": 2097,
    "range": [
      2087,
      2097
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2097,
    "end": 2098,
    "range": [
      2097,
      2098
    ]
  },
  {
    "type": "Identifier",
    "value": "predicate",
    "start": 2098,
    "end": 2107,
    "range": [
      2098,
      2107
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2107,
    "end": 2108,
    "range": [
      2107,
      2108
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2108,
    "end": 2109,
    "range": [
      2108,
      2109
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2109,
    "end": 2110,
    "range": [
      2109,
      2110
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2110,
    "end": 2111,
    "range": [
      2110,
      2111
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2111,
    "end": 2112,
    "range": [
      2111,
      2112
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2112,
    "end": 2113,
    "range": [
      2112,
      2113
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2113,
    "end": 2115,
    "range": [
      2113,
      2115
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2115,
    "end": 2122,
    "range": [
      2115,
      2122
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2122,
    "end": 2123,
    "range": [
      2122,
      2123
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2123,
    "end": 2124,
    "range": [
      2123,
      2124
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2125,
    "end": 2126,
    "range": [
      2125,
      2126
    ]
  },
  {
    "type": "Identifier",
    "value": "Vector",
    "start": 2126,
    "end": 2132,
    "range": [
      2126,
      2132
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2132,
    "end": 2133,
    "range": [
      2132,
      2133
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2133,
    "end": 2134,
    "range": [
      2133,
      2134
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2134,
    "end": 2135,
    "range": [
      2134,
      2135
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2135,
    "end": 2136,
    "range": [
      2135,
      2136
    ]
  },
  {
    "type": "Identifier",
    "value": "Vector",
    "start": 2136,
    "end": 2142,
    "range": [
      2136,
      2142
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2142,
    "end": 2143,
    "range": [
      2142,
      2143
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2143,
    "end": 2144,
    "range": [
      2143,
      2144
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2144,
    "end": 2145,
    "range": [
      2144,
      2145
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2145,
    "end": 2146,
    "range": [
      2145,
      2146
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2146,
    "end": 2147,
    "range": [
      2146,
      2147
    ]
  },
  {
    "type": "Identifier",
    "value": "partition2",
    "start": 2152,
    "end": 2162,
    "range": [
      2152,
      2162
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2162,
    "end": 2163,
    "range": [
      2162,
      2163
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2163,
    "end": 2164,
    "range": [
      2163,
      2164
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2165,
    "end": 2172,
    "range": [
      2165,
      2172
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2173,
    "end": 2174,
    "range": [
      2173,
      2174
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2174,
    "end": 2175,
    "range": [
      2174,
      2175
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2175,
    "end": 2176,
    "range": [
      2175,
      2176
    ]
  },
  {
    "type": "Identifier",
    "value": "predicate",
    "start": 2176,
    "end": 2185,
    "range": [
      2176,
      2185
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2185,
    "end": 2186,
    "range": [
      2185,
      2186
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2186,
    "end": 2187,
    "range": [
      2186,
      2187
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 2187,
    "end": 2188,
    "range": [
      2187,
      2188
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2188,
    "end": 2189,
    "range": [
      2188,
      2189
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2189,
    "end": 2190,
    "range": [
      2189,
      2190
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2190,
    "end": 2191,
    "range": [
      2190,
      2191
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2191,
    "end": 2193,
    "range": [
      2191,
      2193
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2193,
    "end": 2200,
    "range": [
      2193,
      2200
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2200,
    "end": 2201,
    "range": [
      2200,
      2201
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2201,
    "end": 2202,
    "range": [
      2201,
      2202
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2203,
    "end": 2204,
    "range": [
      2203,
      2204
    ]
  },
  {
    "type": "Identifier",
    "value": "Vector",
    "start": 2204,
    "end": 2210,
    "range": [
      2204,
      2210
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2210,
    "end": 2211,
    "range": [
      2210,
      2211
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2211,
    "end": 2212,
    "range": [
      2211,
      2212
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2212,
    "end": 2213,
    "range": [
      2212,
      2213
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2213,
    "end": 2214,
    "range": [
      2213,
      2214
    ]
  },
  {
    "type": "Identifier",
    "value": "Vector",
    "start": 2214,
    "end": 2220,
    "range": [
      2214,
      2220
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2220,
    "end": 2221,
    "range": [
      2220,
      2221
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2221,
    "end": 2224,
    "range": [
      2221,
      2224
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2224,
    "end": 2225,
    "range": [
      2224,
      2225
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2225,
    "end": 2226,
    "range": [
      2225,
      2226
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2227,
    "end": 2228,
    "range": [
      2227,
      2228
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2237,
    "end": 2243,
    "range": [
      2237,
      2243
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2244,
    "end": 2245,
    "range": [
      2244,
      2245
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2245,
    "end": 2248,
    "range": [
      2245,
      2248
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2248,
    "end": 2249,
    "range": [
      2248,
      2249
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2249,
    "end": 2258,
    "range": [
      2249,
      2258
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2258,
    "end": 2259,
    "range": [
      2258,
      2259
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2264,
    "end": 2265,
    "range": [
      2264,
      2265
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2266,
    "end": 2267,
    "range": [
      2266,
      2267
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2269,
    "end": 2278,
    "range": [
      2269,
      2278
    ]
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 2279,
    "end": 2281,
    "range": [
      2279,
      2281
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2281,
    "end": 2282,
    "range": [
      2281,
      2282
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2282,
    "end": 2283,
    "range": [
      2282,
      2283
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2283,
    "end": 2284,
    "range": [
      2283,
      2284
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2285,
    "end": 2286,
    "range": [
      2285,
      2286
    ]
  },
  {
    "type": "Identifier",
    "value": "bat",
    "start": 2291,
    "end": 2294,
    "range": [
      2291,
      2294
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2294,
    "end": 2295,
    "range": [
      2294,
      2295
    ]
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 2296,
    "end": 2298,
    "range": [
      2296,
      2298
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2298,
    "end": 2299,
    "range": [
      2298,
      2299
    ]
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 2299,
    "end": 2301,
    "range": [
      2299,
      2301
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2301,
    "end": 2302,
    "range": [
      2301,
      2302
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2302,
    "end": 2303,
    "range": [
      2302,
      2303
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2303,
    "end": 2304,
    "range": [
      2303,
      2304
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2304,
    "end": 2305,
    "range": [
      2304,
      2305
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2305,
    "end": 2306,
    "range": [
      2305,
      2306
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2307,
    "end": 2308,
    "range": [
      2307,
      2308
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2310,
    "end": 2319,
    "range": [
      2310,
      2319
    ]
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 2320,
    "end": 2322,
    "range": [
      2320,
      2322
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2322,
    "end": 2323,
    "range": [
      2322,
      2323
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2323,
    "end": 2324,
    "range": [
      2323,
      2324
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2324,
    "end": 2325,
    "range": [
      2324,
      2325
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2326,
    "end": 2333,
    "range": [
      2326,
      2333
    ]
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 2334,
    "end": 2336,
    "range": [
      2334,
      2336
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2336,
    "end": 2337,
    "range": [
      2336,
      2337
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2337,
    "end": 2338,
    "range": [
      2337,
      2338
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2338,
    "end": 2339,
    "range": [
      2338,
      2339
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2340,
    "end": 2341,
    "range": [
      2340,
      2341
    ]
  },
  {
    "type": "Identifier",
    "value": "bat",
    "start": 2346,
    "end": 2349,
    "range": [
      2346,
      2349
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2349,
    "end": 2350,
    "range": [
      2349,
      2350
    ]
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 2351,
    "end": 2353,
    "range": [
      2351,
      2353
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2353,
    "end": 2354,
    "range": [
      2353,
      2354
    ]
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 2354,
    "end": 2356,
    "range": [
      2354,
      2356
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2356,
    "end": 2357,
    "range": [
      2356,
      2357
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2357,
    "end": 2358,
    "range": [
      2357,
      2358
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2358,
    "end": 2359,
    "range": [
      2358,
      2359
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2359,
    "end": 2360,
    "range": [
      2359,
      2360
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2360,
    "end": 2361,
    "range": [
      2360,
      2361
    ]
  },
  {
    "type": "Identifier",
    "value": "boom",
    "start": 2366,
    "end": 2370,
    "range": [
      2366,
      2370
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2370,
    "end": 2371,
    "range": [
      2370,
      2371
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2372,
    "end": 2373,
    "range": [
      2372,
      2373
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2374,
    "end": 2381,
    "range": [
      2374,
      2381
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2382,
    "end": 2385,
    "range": [
      2382,
      2385
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2386,
    "end": 2387,
    "range": [
      2386,
      2387
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2388,
    "end": 2392,
    "range": [
      2388,
      2392
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2393,
    "end": 2394,
    "range": [
      2393,
      2394
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2395,
    "end": 2399,
    "range": [
      2395,
      2399
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2400,
    "end": 2401,
    "range": [
      2400,
      2401
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2425,
    "end": 2432,
    "range": [
      2425,
      2432
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2433,
    "end": 2441,
    "range": [
      2433,
      2441
    ]
  },
  {
    "type": "Identifier",
    "value": "toString1",
    "start": 2442,
    "end": 2451,
    "range": [
      2442,
      2451
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2451,
    "end": 2452,
    "range": [
      2451,
      2452
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2452,
    "end": 2457,
    "range": [
      2452,
      2457
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2457,
    "end": 2458,
    "range": [
      2457,
      2458
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 2459,
    "end": 2465,
    "range": [
      2459,
      2465
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2466,
    "end": 2467,
    "range": [
      2466,
      2467
    ]
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 2468,
    "end": 2476,
    "range": [
      2468,
      2476
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2476,
    "end": 2477,
    "range": [
      2476,
      2477
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2477,
    "end": 2478,
    "range": [
      2477,
      2478
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2479,
    "end": 2485,
    "range": [
      2479,
      2485
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2486,
    "end": 2487,
    "range": [
      2486,
      2487
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2488,
    "end": 2495,
    "range": [
      2488,
      2495
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2496,
    "end": 2504,
    "range": [
      2496,
      2504
    ]
  },
  {
    "type": "Identifier",
    "value": "toString2",
    "start": 2505,
    "end": 2514,
    "range": [
      2505,
      2514
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2514,
    "end": 2515,
    "range": [
      2514,
      2515
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2515,
    "end": 2520,
    "range": [
      2515,
      2520
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2520,
    "end": 2521,
    "range": [
      2520,
      2521
    ]
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 2522,
    "end": 2530,
    "range": [
      2522,
      2530
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2530,
    "end": 2531,
    "range": [
      2530,
      2531
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2531,
    "end": 2532,
    "range": [
      2531,
      2532
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2533,
    "end": 2539,
    "range": [
      2533,
      2539
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2540,
    "end": 2541,
    "range": [
      2540,
      2541
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2543,
    "end": 2551,
    "range": [
      2543,
      2551
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2552,
    "end": 2555,
    "range": [
      2552,
      2555
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2555,
    "end": 2556,
    "range": [
      2555,
      2556
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2556,
    "end": 2557,
    "range": [
      2556,
      2557
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2557,
    "end": 2558,
    "range": [
      2557,
      2558
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2558,
    "end": 2559,
    "range": [
      2558,
      2559
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2559,
    "end": 2564,
    "range": [
      2559,
      2564
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2564,
    "end": 2565,
    "range": [
      2564,
      2565
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2566,
    "end": 2567,
    "range": [
      2566,
      2567
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2567,
    "end": 2568,
    "range": [
      2567,
      2568
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2569,
    "end": 2570,
    "range": [
      2569,
      2570
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2575,
    "end": 2577,
    "range": [
      2575,
      2577
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2578,
    "end": 2579,
    "range": [
      2578,
      2579
    ]
  },
  {
    "type": "Identifier",
    "value": "isFunction",
    "start": 2579,
    "end": 2589,
    "range": [
      2579,
      2589
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2589,
    "end": 2590,
    "range": [
      2589,
      2590
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2590,
    "end": 2595,
    "range": [
      2590,
      2595
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2595,
    "end": 2596,
    "range": [
      2595,
      2596
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2596,
    "end": 2597,
    "range": [
      2596,
      2597
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2598,
    "end": 2599,
    "range": [
      2598,
      2599
    ]
  },
  {
    "type": "Identifier",
    "value": "toString1",
    "start": 2608,
    "end": 2617,
    "range": [
      2608,
      2617
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2617,
    "end": 2618,
    "range": [
      2617,
      2618
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2618,
    "end": 2623,
    "range": [
      2618,
      2623
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2623,
    "end": 2624,
    "range": [
      2623,
      2624
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2624,
    "end": 2625,
    "range": [
      2624,
      2625
    ]
  },
  {
    "type": "Identifier",
    "value": "toString2",
    "start": 2634,
    "end": 2643,
    "range": [
      2634,
      2643
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2643,
    "end": 2644,
    "range": [
      2643,
      2644
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2644,
    "end": 2649,
    "range": [
      2644,
      2649
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 2656,
    "end": 2657,
    "range": [
      2656,
      2657
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2658,
    "end": 2659,
    "range": [
      2658,
      2659
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2683,
    "end": 2687,
    "range": [
      2683,
      2687
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2688,
    "end": 2689,
    "range": [
      2688,
      2689
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2689,
    "end": 2690,
    "range": [
      2689,
      2690
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2690,
    "end": 2691,
    "range": [
      2690,
      2691
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2691,
    "end": 2692,
    "range": [
      2691,
      2692
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2693,
    "end": 2694,
    "range": [
      2693,
      2694
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2694,
    "end": 2695,
    "range": [
      2694,
      2695
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2696,
    "end": 2697,
    "range": [
      2696,
      2697
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2697,
    "end": 2698,
    "range": [
      2697,
      2698
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2699,
    "end": 2700,
    "range": [
      2699,
      2700
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2703,
    "end": 2704,
    "range": [
      2703,
      2704
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2705,
    "end": 2712,
    "range": [
      2705,
      2712
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 2713,
    "end": 2719,
    "range": [
      2713,
      2719
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2724,
    "end": 2725,
    "range": [
      2724,
      2725
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2726,
    "end": 2727,
    "range": [
      2726,
      2727
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2728,
    "end": 2729,
    "range": [
      2728,
      2729
    ]
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 2729,
    "end": 2730,
    "range": [
      2729,
      2730
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2731,
    "end": 2733,
    "range": [
      2731,
      2733
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2734,
    "end": 2735,
    "range": [
      2734,
      2735
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2736,
    "end": 2737,
    "range": [
      2736,
      2737
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2737,
    "end": 2738,
    "range": [
      2737,
      2738
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2739,
    "end": 2741,
    "range": [
      2739,
      2741
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2742,
    "end": 2747,
    "range": [
      2742,
      2747
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2748,
    "end": 2749,
    "range": [
      2748,
      2749
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2749,
    "end": 2750,
    "range": [
      2749,
      2750
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2750,
    "end": 2751,
    "range": [
      2750,
      2751
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2752,
    "end": 2753,
    "range": [
      2752,
      2753
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2753,
    "end": 2754,
    "range": [
      2753,
      2754
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2754,
    "end": 2755,
    "range": [
      2754,
      2755
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2755,
    "end": 2756,
    "range": [
      2755,
      2756
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2757,
    "end": 2764,
    "range": [
      2757,
      2764
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2765,
    "end": 2766,
    "range": [
      2765,
      2766
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2767,
    "end": 2768,
    "range": [
      2767,
      2768
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2769,
    "end": 2770,
    "range": [
      2769,
      2770
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2771,
    "end": 2772,
    "range": [
      2771,
      2772
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2773,
    "end": 2774,
    "range": [
      2773,
      2774
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2774,
    "end": 2775,
    "range": [
      2774,
      2775
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2776,
    "end": 2777,
    "range": [
      2776,
      2777
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2777,
    "end": 2778,
    "range": [
      2777,
      2778
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2778,
    "end": 2783,
    "range": [
      2778,
      2783
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2784,
    "end": 2785,
    "range": [
      2784,
      2785
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2785,
    "end": 2786,
    "range": [
      2785,
      2786
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2786,
    "end": 2787,
    "range": [
      2786,
      2787
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2787,
    "end": 2788,
    "range": [
      2787,
      2788
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2789,
    "end": 2790,
    "range": [
      2789,
      2790
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2790,
    "end": 2791,
    "range": [
      2790,
      2791
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2791,
    "end": 2792,
    "range": [
      2791,
      2792
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2792,
    "end": 2793,
    "range": [
      2792,
      2793
    ]
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 2793,
    "end": 2794,
    "range": [
      2793,
      2794
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2794,
    "end": 2795,
    "range": [
      2794,
      2795
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2795,
    "end": 2796,
    "range": [
      2795,
      2796
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2797,
    "end": 2798,
    "range": [
      2797,
      2798
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2798,
    "end": 2799,
    "range": [
      2798,
      2799
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2800,
    "end": 2801,
    "range": [
      2800,
      2801
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2801,
    "end": 2802,
    "range": [
      2801,
      2802
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2802,
    "end": 2803,
    "range": [
      2802,
      2803
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2804,
    "end": 2805,
    "range": [
      2804,
      2805
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2810,
    "end": 2811,
    "range": [
      2810,
      2811
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2812,
    "end": 2813,
    "range": [
      2812,
      2813
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2814,
    "end": 2821,
    "range": [
      2814,
      2821
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2822,
    "end": 2823,
    "range": [
      2822,
      2823
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2824,
    "end": 2825,
    "range": [
      2824,
      2825
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2826,
    "end": 2827,
    "range": [
      2826,
      2827
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2828,
    "end": 2829,
    "range": [
      2828,
      2829
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2830,
    "end": 2835,
    "range": [
      2830,
      2835
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2835,
    "end": 2836,
    "range": [
      2835,
      2836
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2838,
    "end": 2842,
    "range": [
      2838,
      2842
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2843,
    "end": 2844,
    "range": [
      2843,
      2844
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2844,
    "end": 2845,
    "range": [
      2844,
      2845
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2845,
    "end": 2846,
    "range": [
      2845,
      2846
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2846,
    "end": 2847,
    "range": [
      2846,
      2847
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2848,
    "end": 2849,
    "range": [
      2848,
      2849
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2849,
    "end": 2850,
    "range": [
      2849,
      2850
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2851,
    "end": 2852,
    "range": [
      2851,
      2852
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2855,
    "end": 2856,
    "range": [
      2855,
      2856
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2857,
    "end": 2864,
    "range": [
      2857,
      2864
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 2865,
    "end": 2871,
    "range": [
      2865,
      2871
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2876,
    "end": 2877,
    "range": [
      2876,
      2877
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2878,
    "end": 2879,
    "range": [
      2878,
      2879
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2880,
    "end": 2881,
    "range": [
      2880,
      2881
    ]
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 2881,
    "end": 2882,
    "range": [
      2881,
      2882
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2883,
    "end": 2885,
    "range": [
      2883,
      2885
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2886,
    "end": 2887,
    "range": [
      2886,
      2887
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2888,
    "end": 2889,
    "range": [
      2888,
      2889
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2889,
    "end": 2890,
    "range": [
      2889,
      2890
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2891,
    "end": 2893,
    "range": [
      2891,
      2893
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2894,
    "end": 2899,
    "range": [
      2894,
      2899
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2900,
    "end": 2901,
    "range": [
      2900,
      2901
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2901,
    "end": 2902,
    "range": [
      2901,
      2902
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2902,
    "end": 2903,
    "range": [
      2902,
      2903
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2904,
    "end": 2905,
    "range": [
      2904,
      2905
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2905,
    "end": 2906,
    "range": [
      2905,
      2906
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2906,
    "end": 2907,
    "range": [
      2906,
      2907
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2907,
    "end": 2908,
    "range": [
      2907,
      2908
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2909,
    "end": 2916,
    "range": [
      2909,
      2916
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2917,
    "end": 2918,
    "range": [
      2917,
      2918
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2919,
    "end": 2920,
    "range": [
      2919,
      2920
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2921,
    "end": 2922,
    "range": [
      2921,
      2922
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2923,
    "end": 2924,
    "range": [
      2923,
      2924
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 2925,
    "end": 2926,
    "range": [
      2925,
      2926
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2926,
    "end": 2927,
    "range": [
      2926,
      2927
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2928,
    "end": 2929,
    "range": [
      2928,
      2929
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2929,
    "end": 2930,
    "range": [
      2929,
      2930
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2930,
    "end": 2935,
    "range": [
      2930,
      2935
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2936,
    "end": 2937,
    "range": [
      2936,
      2937
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2937,
    "end": 2938,
    "range": [
      2937,
      2938
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2938,
    "end": 2939,
    "range": [
      2938,
      2939
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2939,
    "end": 2940,
    "range": [
      2939,
      2940
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2941,
    "end": 2942,
    "range": [
      2941,
      2942
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2942,
    "end": 2943,
    "range": [
      2942,
      2943
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2943,
    "end": 2944,
    "range": [
      2943,
      2944
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2944,
    "end": 2945,
    "range": [
      2944,
      2945
    ]
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 2945,
    "end": 2946,
    "range": [
      2945,
      2946
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2946,
    "end": 2947,
    "range": [
      2946,
      2947
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2947,
    "end": 2948,
    "range": [
      2947,
      2948
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2949,
    "end": 2950,
    "range": [
      2949,
      2950
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2950,
    "end": 2951,
    "range": [
      2950,
      2951
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2951,
    "end": 2952,
    "range": [
      2951,
      2952
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2953,
    "end": 2954,
    "range": [
      2953,
      2954
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2959,
    "end": 2960,
    "range": [
      2959,
      2960
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2961,
    "end": 2962,
    "range": [
      2961,
      2962
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2963,
    "end": 2970,
    "range": [
      2963,
      2970
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2971,
    "end": 2972,
    "range": [
      2971,
      2972
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2973,
    "end": 2974,
    "range": [
      2973,
      2974
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2975,
    "end": 2976,
    "range": [
      2975,
      2976
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2977,
    "end": 2978,
    "range": [
      2977,
      2978
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2979,
    "end": 2984,
    "range": [
      2979,
      2984
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2984,
    "end": 2985,
    "range": [
      2984,
      2985
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2987,
    "end": 2991,
    "range": [
      2987,
      2991
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2992,
    "end": 2993,
    "range": [
      2992,
      2993
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2993,
    "end": 2994,
    "range": [
      2993,
      2994
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2994,
    "end": 2995,
    "range": [
      2994,
      2995
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2995,
    "end": 2996,
    "range": [
      2995,
      2996
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2997,
    "end": 2998,
    "range": [
      2997,
      2998
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2998,
    "end": 2999,
    "range": [
      2998,
      2999
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 3000,
    "end": 3001,
    "range": [
      3000,
      3001
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3001,
    "end": 3002,
    "range": [
      3001,
      3002
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3003,
    "end": 3004,
    "range": [
      3003,
      3004
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3007,
    "end": 3008,
    "range": [
      3007,
      3008
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3009,
    "end": 3010,
    "range": [
      3009,
      3010
    ]
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 3010,
    "end": 3011,
    "range": [
      3010,
      3011
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3012,
    "end": 3014,
    "range": [
      3012,
      3014
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3015,
    "end": 3016,
    "range": [
      3015,
      3016
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3017,
    "end": 3018,
    "range": [
      3017,
      3018
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3018,
    "end": 3019,
    "range": [
      3018,
      3019
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3020,
    "end": 3022,
    "range": [
      3020,
      3022
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3023,
    "end": 3028,
    "range": [
      3023,
      3028
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3029,
    "end": 3030,
    "range": [
      3029,
      3030
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3030,
    "end": 3031,
    "range": [
      3030,
      3031
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3031,
    "end": 3032,
    "range": [
      3031,
      3032
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3033,
    "end": 3034,
    "range": [
      3033,
      3034
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3034,
    "end": 3035,
    "range": [
      3034,
      3035
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3035,
    "end": 3036,
    "range": [
      3035,
      3036
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3036,
    "end": 3037,
    "range": [
      3036,
      3037
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3038,
    "end": 3045,
    "range": [
      3038,
      3045
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 3046,
    "end": 3047,
    "range": [
      3046,
      3047
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3048,
    "end": 3049,
    "range": [
      3048,
      3049
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3050,
    "end": 3051,
    "range": [
      3050,
      3051
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3052,
    "end": 3053,
    "range": [
      3052,
      3053
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 3054,
    "end": 3055,
    "range": [
      3054,
      3055
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3055,
    "end": 3056,
    "range": [
      3055,
      3056
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3057,
    "end": 3058,
    "range": [
      3057,
      3058
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3058,
    "end": 3059,
    "range": [
      3058,
      3059
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3059,
    "end": 3064,
    "range": [
      3059,
      3064
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3065,
    "end": 3066,
    "range": [
      3065,
      3066
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3066,
    "end": 3067,
    "range": [
      3066,
      3067
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3067,
    "end": 3068,
    "range": [
      3067,
      3068
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3068,
    "end": 3069,
    "range": [
      3068,
      3069
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 3070,
    "end": 3071,
    "range": [
      3070,
      3071
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3071,
    "end": 3072,
    "range": [
      3071,
      3072
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3072,
    "end": 3073,
    "range": [
      3072,
      3073
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3073,
    "end": 3074,
    "range": [
      3073,
      3074
    ]
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 3074,
    "end": 3075,
    "range": [
      3074,
      3075
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3075,
    "end": 3076,
    "range": [
      3075,
      3076
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3076,
    "end": 3077,
    "range": [
      3076,
      3077
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 3078,
    "end": 3079,
    "range": [
      3078,
      3079
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3079,
    "end": 3080,
    "range": [
      3079,
      3080
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 3081,
    "end": 3082,
    "range": [
      3081,
      3082
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3082,
    "end": 3083,
    "range": [
      3082,
      3083
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3083,
    "end": 3084,
    "range": [
      3083,
      3084
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3085,
    "end": 3086,
    "range": [
      3085,
      3086
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3086,
    "end": 3087,
    "range": [
      3086,
      3087
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3111,
    "end": 3115,
    "range": [
      3111,
      3115
    ]
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 3116,
    "end": 3118,
    "range": [
      3116,
      3118
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3118,
    "end": 3119,
    "range": [
      3118,
      3119
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3119,
    "end": 3120,
    "range": [
      3119,
      3120
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3120,
    "end": 3121,
    "range": [
      3120,
      3121
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 3122,
    "end": 3123,
    "range": [
      3122,
      3123
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3123,
    "end": 3124,
    "range": [
      3123,
      3124
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 3125,
    "end": 3126,
    "range": [
      3125,
      3126
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3126,
    "end": 3127,
    "range": [
      3126,
      3127
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3128,
    "end": 3129,
    "range": [
      3128,
      3129
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3134,
    "end": 3135,
    "range": [
      3134,
      3135
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3136,
    "end": 3143,
    "range": [
      3136,
      3143
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 3144,
    "end": 3150,
    "range": [
      3144,
      3150
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3151,
    "end": 3152,
    "range": [
      3151,
      3152
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3153,
    "end": 3154,
    "range": [
      3153,
      3154
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3155,
    "end": 3162,
    "range": [
      3155,
      3162
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3163,
    "end": 3166,
    "range": [
      3163,
      3166
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3166,
    "end": 3167,
    "range": [
      3166,
      3167
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3167,
    "end": 3168,
    "range": [
      3167,
      3168
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3169,
    "end": 3170,
    "range": [
      3169,
      3170
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3171,
    "end": 3172,
    "range": [
      3171,
      3172
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3173,
    "end": 3174,
    "range": [
      3173,
      3174
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3175,
    "end": 3176,
    "range": [
      3175,
      3176
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3177,
    "end": 3178,
    "range": [
      3177,
      3178
    ]
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 3178,
    "end": 3179,
    "range": [
      3178,
      3179
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3180,
    "end": 3182,
    "range": [
      3180,
      3182
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3183,
    "end": 3188,
    "range": [
      3183,
      3188
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3189,
    "end": 3190,
    "range": [
      3189,
      3190
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3190,
    "end": 3191,
    "range": [
      3190,
      3191
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3191,
    "end": 3192,
    "range": [
      3191,
      3192
    ]
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 3193,
    "end": 3195,
    "range": [
      3193,
      3195
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3195,
    "end": 3196,
    "range": [
      3195,
      3196
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3196,
    "end": 3197,
    "range": [
      3196,
      3197
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3197,
    "end": 3198,
    "range": [
      3197,
      3198
    ]
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 3198,
    "end": 3199,
    "range": [
      3198,
      3199
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3199,
    "end": 3200,
    "range": [
      3199,
      3200
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3200,
    "end": 3201,
    "range": [
      3200,
      3201
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
    "type": "Punctuator",
    "value": ",",
    "start": 3203,
    "end": 3204,
    "range": [
      3203,
      3204
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 3205,
    "end": 3206,
    "range": [
      3205,
      3206
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3206,
    "end": 3207,
    "range": [
      3206,
      3207
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3207,
    "end": 3208,
    "range": [
      3207,
      3208
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3209,
    "end": 3210,
    "range": [
      3209,
      3210
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3211,
    "end": 3212,
    "range": [
      3211,
      3212
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3213,
    "end": 3214,
    "range": [
      3213,
      3214
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3214,
    "end": 3215,
    "range": [
      3214,
      3215
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3217,
    "end": 3221,
    "range": [
      3217,
      3221
    ]
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 3222,
    "end": 3224,
    "range": [
      3222,
      3224
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3224,
    "end": 3225,
    "range": [
      3224,
      3225
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
    "value": ",",
    "start": 3226,
    "end": 3227,
    "range": [
      3226,
      3227
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 3228,
    "end": 3229,
    "range": [
      3228,
      3229
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3229,
    "end": 3230,
    "range": [
      3229,
      3230
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3231,
    "end": 3232,
    "range": [
      3231,
      3232
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3237,
    "end": 3238,
    "range": [
      3237,
      3238
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3239,
    "end": 3246,
    "range": [
      3239,
      3246
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 3247,
    "end": 3253,
    "range": [
      3247,
      3253
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3254,
    "end": 3255,
    "range": [
      3254,
      3255
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3256,
    "end": 3257,
    "range": [
      3256,
      3257
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3258,
    "end": 3265,
    "range": [
      3258,
      3265
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3266,
    "end": 3269,
    "range": [
      3266,
      3269
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3269,
    "end": 3270,
    "range": [
      3269,
      3270
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3270,
    "end": 3271,
    "range": [
      3270,
      3271
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3272,
    "end": 3273,
    "range": [
      3272,
      3273
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3274,
    "end": 3275,
    "range": [
      3274,
      3275
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3276,
    "end": 3277,
    "range": [
      3276,
      3277
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3278,
    "end": 3279,
    "range": [
      3278,
      3279
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3280,
    "end": 3281,
    "range": [
      3280,
      3281
    ]
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 3281,
    "end": 3282,
    "range": [
      3281,
      3282
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3283,
    "end": 3285,
    "range": [
      3283,
      3285
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3286,
    "end": 3291,
    "range": [
      3286,
      3291
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3292,
    "end": 3293,
    "range": [
      3292,
      3293
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3293,
    "end": 3294,
    "range": [
      3293,
      3294
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3294,
    "end": 3295,
    "range": [
      3294,
      3295
    ]
  },
  {
    "type": "Identifier",
    "value": "B2",
    "start": 3296,
    "end": 3298,
    "range": [
      3296,
      3298
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3298,
    "end": 3299,
    "range": [
      3298,
      3299
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3299,
    "end": 3300,
    "range": [
      3299,
      3300
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3300,
    "end": 3301,
    "range": [
      3300,
      3301
    ]
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 3301,
    "end": 3302,
    "range": [
      3301,
      3302
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3302,
    "end": 3303,
    "range": [
      3302,
      3303
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3303,
    "end": 3304,
    "range": [
      3303,
      3304
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 3305,
    "end": 3306,
    "range": [
      3305,
      3306
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3306,
    "end": 3307,
    "range": [
      3306,
      3307
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3307,
    "end": 3308,
    "range": [
      3307,
      3308
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3309,
    "end": 3310,
    "range": [
      3309,
      3310
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3311,
    "end": 3312,
    "range": [
      3311,
      3312
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3313,
    "end": 3314,
    "range": [
      3313,
      3314
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3314,
    "end": 3315,
    "range": [
      3314,
      3315
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3317,
    "end": 3321,
    "range": [
      3317,
      3321
    ]
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 3322,
    "end": 3324,
    "range": [
      3322,
      3324
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3324,
    "end": 3325,
    "range": [
      3324,
      3325
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3325,
    "end": 3326,
    "range": [
      3325,
      3326
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3326,
    "end": 3327,
    "range": [
      3326,
      3327
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 3328,
    "end": 3329,
    "range": [
      3328,
      3329
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3329,
    "end": 3330,
    "range": [
      3329,
      3330
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 3331,
    "end": 3332,
    "range": [
      3331,
      3332
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3332,
    "end": 3333,
    "range": [
      3332,
      3333
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3334,
    "end": 3335,
    "range": [
      3334,
      3335
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3340,
    "end": 3341,
    "range": [
      3340,
      3341
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3342,
    "end": 3349,
    "range": [
      3342,
      3349
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 3350,
    "end": 3356,
    "range": [
      3350,
      3356
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3357,
    "end": 3358,
    "range": [
      3357,
      3358
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3359,
    "end": 3360,
    "range": [
      3359,
      3360
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3361,
    "end": 3362,
    "range": [
      3361,
      3362
    ]
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 3362,
    "end": 3363,
    "range": [
      3362,
      3363
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3364,
    "end": 3366,
    "range": [
      3364,
      3366
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3367,
    "end": 3372,
    "range": [
      3367,
      3372
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3373,
    "end": 3374,
    "range": [
      3373,
      3374
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3374,
    "end": 3375,
    "range": [
      3374,
      3375
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3375,
    "end": 3376,
    "range": [
      3375,
      3376
    ]
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 3377,
    "end": 3379,
    "range": [
      3377,
      3379
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3379,
    "end": 3380,
    "range": [
      3379,
      3380
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3380,
    "end": 3381,
    "range": [
      3380,
      3381
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3381,
    "end": 3382,
    "range": [
      3381,
      3382
    ]
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 3382,
    "end": 3383,
    "range": [
      3382,
      3383
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3383,
    "end": 3384,
    "range": [
      3383,
      3384
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3384,
    "end": 3385,
    "range": [
      3384,
      3385
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 3386,
    "end": 3387,
    "range": [
      3386,
      3387
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3387,
    "end": 3388,
    "range": [
      3387,
      3388
    ]
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 3389,
    "end": 3390,
    "range": [
      3389,
      3390
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3390,
    "end": 3391,
    "range": [
      3390,
      3391
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3391,
    "end": 3392,
    "range": [
      3391,
      3392
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3393,
    "end": 3394,
    "range": [
      3393,
      3394
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3395,
    "end": 3396,
    "range": [
      3395,
      3396
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3397,
    "end": 3398,
    "range": [
      3397,
      3398
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3398,
    "end": 3399,
    "range": [
      3398,
      3399
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3423,
    "end": 3427,
    "range": [
      3423,
      3427
    ]
  },
  {
    "type": "Identifier",
    "value": "MaybeTrue",
    "start": 3428,
    "end": 3437,
    "range": [
      3428,
      3437
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3437,
    "end": 3438,
    "range": [
      3437,
      3438
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3438,
    "end": 3439,
    "range": [
      3438,
      3439
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3440,
    "end": 3447,
    "range": [
      3440,
      3447
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3448,
    "end": 3449,
    "range": [
      3448,
      3449
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3450,
    "end": 3451,
    "range": [
      3450,
      3451
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3451,
    "end": 3452,
    "range": [
      3451,
      3452
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3453,
    "end": 3460,
    "range": [
      3453,
      3460
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3461,
    "end": 3462,
    "range": [
      3461,
      3462
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3462,
    "end": 3463,
    "range": [
      3462,
      3463
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3464,
    "end": 3465,
    "range": [
      3464,
      3465
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3466,
    "end": 3470,
    "range": [
      3466,
      3470
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3471,
    "end": 3478,
    "range": [
      3471,
      3478
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3479,
    "end": 3480,
    "range": [
      3479,
      3480
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3480,
    "end": 3481,
    "range": [
      3480,
      3481
    ]
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 3481,
    "end": 3484,
    "range": [
      3481,
      3484
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3484,
    "end": 3485,
    "range": [
      3484,
      3485
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3486,
    "end": 3487,
    "range": [
      3486,
      3487
    ]
  },
  {
    "type": "String",
    "value": "\"yes\"",
    "start": 3488,
    "end": 3493,
    "range": [
      3488,
      3493
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3494,
    "end": 3495,
    "range": [
      3494,
      3495
    ]
  },
  {
    "type": "String",
    "value": "\"no\"",
    "start": 3496,
    "end": 3500,
    "range": [
      3496,
      3500
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3500,
    "end": 3501,
    "range": [
      3500,
      3501
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3503,
    "end": 3507,
    "range": [
      3503,
      3507
    ]
  },
  {
    "type": "Identifier",
    "value": "T0",
    "start": 3508,
    "end": 3510,
    "range": [
      3508,
      3510
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3511,
    "end": 3512,
    "range": [
      3511,
      3512
    ]
  },
  {
    "type": "Identifier",
    "value": "MaybeTrue",
    "start": 3513,
    "end": 3522,
    "range": [
      3513,
      3522
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3522,
    "end": 3523,
    "range": [
      3522,
      3523
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3523,
    "end": 3524,
    "range": [
      3523,
      3524
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3525,
    "end": 3526,
    "range": [
      3525,
      3526
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3526,
    "end": 3527,
    "range": [
      3526,
      3527
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3528,
    "end": 3533,
    "range": [
      3528,
      3533
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3534,
    "end": 3535,
    "range": [
      3534,
      3535
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3535,
    "end": 3536,
    "range": [
      3535,
      3536
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3549,
    "end": 3553,
    "range": [
      3549,
      3553
    ]
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 3554,
    "end": 3556,
    "range": [
      3554,
      3556
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3557,
    "end": 3558,
    "range": [
      3557,
      3558
    ]
  },
  {
    "type": "Identifier",
    "value": "MaybeTrue",
    "start": 3559,
    "end": 3568,
    "range": [
      3559,
      3568
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3568,
    "end": 3569,
    "range": [
      3568,
      3569
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3569,
    "end": 3570,
    "range": [
      3569,
      3570
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3571,
    "end": 3572,
    "range": [
      3571,
      3572
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3572,
    "end": 3573,
    "range": [
      3572,
      3573
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 3574,
    "end": 3579,
    "range": [
      3574,
      3579
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3580,
    "end": 3581,
    "range": [
      3580,
      3581
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3581,
    "end": 3582,
    "range": [
      3581,
      3582
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3582,
    "end": 3583,
    "range": [
      3582,
      3583
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3595,
    "end": 3599,
    "range": [
      3595,
      3599
    ]
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 3600,
    "end": 3602,
    "range": [
      3600,
      3602
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3603,
    "end": 3604,
    "range": [
      3603,
      3604
    ]
  },
  {
    "type": "Identifier",
    "value": "MaybeTrue",
    "start": 3605,
    "end": 3614,
    "range": [
      3605,
      3614
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3614,
    "end": 3615,
    "range": [
      3614,
      3615
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3615,
    "end": 3616,
    "range": [
      3615,
      3616
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3617,
    "end": 3618,
    "range": [
      3617,
      3618
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3618,
    "end": 3619,
    "range": [
      3618,
      3619
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3620,
    "end": 3624,
    "range": [
      3620,
      3624
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3625,
    "end": 3626,
    "range": [
      3625,
      3626
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3626,
    "end": 3627,
    "range": [
      3626,
      3627
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3627,
    "end": 3628,
    "range": [
      3627,
      3628
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3642,
    "end": 3646,
    "range": [
      3642,
      3646
    ]
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 3647,
    "end": 3649,
    "range": [
      3647,
      3649
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3650,
    "end": 3651,
    "range": [
      3650,
      3651
    ]
  },
  {
    "type": "Identifier",
    "value": "MaybeTrue",
    "start": 3652,
    "end": 3661,
    "range": [
      3652,
      3661
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3661,
    "end": 3662,
    "range": [
      3661,
      3662
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3662,
    "end": 3663,
    "range": [
      3662,
      3663
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3664,
    "end": 3665,
    "range": [
      3664,
      3665
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3665,
    "end": 3666,
    "range": [
      3665,
      3666
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3667,
    "end": 3674,
    "range": [
      3667,
      3674
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3675,
    "end": 3676,
    "range": [
      3675,
      3676
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3676,
    "end": 3677,
    "range": [
      3676,
      3677
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3677,
    "end": 3678,
    "range": [
      3677,
      3678
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3712,
    "end": 3716,
    "range": [
      3712,
      3716
    ]
  },
  {
    "type": "Identifier",
    "value": "Union",
    "start": 3717,
    "end": 3722,
    "range": [
      3717,
      3722
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3723,
    "end": 3724,
    "range": [
      3723,
      3724
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 3725,
    "end": 3728,
    "range": [
      3725,
      3728
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3729,
    "end": 3730,
    "range": [
      3729,
      3730
    ]
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 3731,
    "end": 3734,
    "range": [
      3731,
      3734
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3734,
    "end": 3735,
    "range": [
      3734,
      3735
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3736,
    "end": 3740,
    "range": [
      3736,
      3740
    ]
  },
  {
    "type": "Identifier",
    "value": "Product",
    "start": 3741,
    "end": 3748,
    "range": [
      3741,
      3748
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3748,
    "end": 3749,
    "range": [
      3748,
      3749
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 3749,
    "end": 3750,
    "range": [
      3749,
      3750
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3751,
    "end": 3758,
    "range": [
      3751,
      3758
    ]
  },
  {
    "type": "Identifier",
    "value": "Union",
    "start": 3759,
    "end": 3764,
    "range": [
      3759,
      3764
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3764,
    "end": 3765,
    "range": [
      3764,
      3765
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 3766,
    "end": 3767,
    "range": [
      3766,
      3767
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3767,
    "end": 3768,
    "range": [
      3767,
      3768
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3769,
    "end": 3770,
    "range": [
      3769,
      3770
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3771,
    "end": 3772,
    "range": [
      3771,
      3772
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 3773,
    "end": 3775,
    "range": [
      3773,
      3775
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3775,
    "end": 3776,
    "range": [
      3775,
      3776
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 3777,
    "end": 3778,
    "range": [
      3777,
      3778
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3778,
    "end": 3779,
    "range": [
      3778,
      3779
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 3780,
    "end": 3782,
    "range": [
      3780,
      3782
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3782,
    "end": 3783,
    "range": [
      3782,
      3783
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 3784,
    "end": 3785,
    "range": [
      3784,
      3785
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3785,
    "end": 3786,
    "range": [
      3785,
      3786
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3786,
    "end": 3787,
    "range": [
      3786,
      3787
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3788,
    "end": 3792,
    "range": [
      3788,
      3792
    ]
  },
  {
    "type": "Identifier",
    "value": "ProductUnion",
    "start": 3793,
    "end": 3805,
    "range": [
      3793,
      3805
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3806,
    "end": 3807,
    "range": [
      3806,
      3807
    ]
  },
  {
    "type": "Identifier",
    "value": "Product",
    "start": 3808,
    "end": 3815,
    "range": [
      3808,
      3815
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3815,
    "end": 3816,
    "range": [
      3815,
      3816
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 3816,
    "end": 3819,
    "range": [
      3816,
      3819
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3819,
    "end": 3820,
    "range": [
      3819,
      3820
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3821,
    "end": 3822,
    "range": [
      3821,
      3822
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3822,
    "end": 3823,
    "range": [
      3822,
      3823
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3824,
    "end": 3825,
    "range": [
      3824,
      3825
    ]
  },
  {
    "type": "Identifier",
    "value": "Product",
    "start": 3826,
    "end": 3833,
    "range": [
      3826,
      3833
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3833,
    "end": 3834,
    "range": [
      3833,
      3834
    ]
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 3834,
    "end": 3837,
    "range": [
      3834,
      3837
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3837,
    "end": 3838,
    "range": [
      3837,
      3838
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3839,
    "end": 3840,
    "range": [
      3839,
      3840
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3840,
    "end": 3841,
    "range": [
      3840,
      3841
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3841,
    "end": 3842,
    "range": [
      3841,
      3842
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3864,
    "end": 3868,
    "range": [
      3864,
      3868
    ]
  },
  {
    "type": "Identifier",
    "value": "UnionComplement",
    "start": 3869,
    "end": 3884,
    "range": [
      3869,
      3884
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3885,
    "end": 3886,
    "range": [
      3885,
      3886
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3887,
    "end": 3888,
    "range": [
      3887,
      3888
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3891,
    "end": 3892,
    "range": [
      3891,
      3892
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3892,
    "end": 3893,
    "range": [
      3892,
      3893
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3894,
    "end": 3896,
    "range": [
      3894,
      3896
    ]
  },
  {
    "type": "Identifier",
    "value": "Union",
    "start": 3897,
    "end": 3902,
    "range": [
      3897,
      3902
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3902,
    "end": 3903,
    "range": [
      3902,
      3903
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3903,
    "end": 3904,
    "range": [
      3903,
      3904
    ]
  },
  {
    "type": "Identifier",
    "value": "Exclude",
    "start": 3905,
    "end": 3912,
    "range": [
      3905,
      3912
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3912,
    "end": 3913,
    "range": [
      3912,
      3913
    ]
  },
  {
    "type": "Identifier",
    "value": "Union",
    "start": 3913,
    "end": 3918,
    "range": [
      3913,
      3918
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3918,
    "end": 3919,
    "range": [
      3918,
      3919
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3920,
    "end": 3921,
    "range": [
      3920,
      3921
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3921,
    "end": 3922,
    "range": [
      3921,
      3922
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3923,
    "end": 3924,
    "range": [
      3923,
      3924
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3924,
    "end": 3925,
    "range": [
      3924,
      3925
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3926,
    "end": 3930,
    "range": [
      3926,
      3930
    ]
  },
  {
    "type": "Identifier",
    "value": "UCA",
    "start": 3931,
    "end": 3934,
    "range": [
      3931,
      3934
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3935,
    "end": 3936,
    "range": [
      3935,
      3936
    ]
  },
  {
    "type": "Identifier",
    "value": "UnionComplement",
    "start": 3937,
    "end": 3952,
    "range": [
      3937,
      3952
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3952,
    "end": 3953,
    "range": [
      3952,
      3953
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 3953,
    "end": 3956,
    "range": [
      3953,
      3956
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3956,
    "end": 3957,
    "range": [
      3956,
      3957
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3957,
    "end": 3958,
    "range": [
      3957,
      3958
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3959,
    "end": 3963,
    "range": [
      3959,
      3963
    ]
  },
  {
    "type": "Identifier",
    "value": "UCB",
    "start": 3964,
    "end": 3967,
    "range": [
      3964,
      3967
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3968,
    "end": 3969,
    "range": [
      3968,
      3969
    ]
  },
  {
    "type": "Identifier",
    "value": "UnionComplement",
    "start": 3970,
    "end": 3985,
    "range": [
      3970,
      3985
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3985,
    "end": 3986,
    "range": [
      3985,
      3986
    ]
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 3986,
    "end": 3989,
    "range": [
      3986,
      3989
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3989,
    "end": 3990,
    "range": [
      3989,
      3990
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3990,
    "end": 3991,
    "range": [
      3990,
      3991
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4013,
    "end": 4017,
    "range": [
      4013,
      4017
    ]
  },
  {
    "type": "Identifier",
    "value": "UnionComplementComplement",
    "start": 4018,
    "end": 4043,
    "range": [
      4018,
      4043
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4044,
    "end": 4045,
    "range": [
      4044,
      4045
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4046,
    "end": 4047,
    "range": [
      4046,
      4047
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4050,
    "end": 4051,
    "range": [
      4050,
      4051
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4051,
    "end": 4052,
    "range": [
      4051,
      4052
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 4053,
    "end": 4055,
    "range": [
      4053,
      4055
    ]
  },
  {
    "type": "Identifier",
    "value": "Union",
    "start": 4056,
    "end": 4061,
    "range": [
      4056,
      4061
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4061,
    "end": 4062,
    "range": [
      4061,
      4062
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4062,
    "end": 4063,
    "range": [
      4062,
      4063
    ]
  },
  {
    "type": "Identifier",
    "value": "Exclude",
    "start": 4064,
    "end": 4071,
    "range": [
      4064,
      4071
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4071,
    "end": 4072,
    "range": [
      4071,
      4072
    ]
  },
  {
    "type": "Identifier",
    "value": "Union",
    "start": 4072,
    "end": 4077,
    "range": [
      4072,
      4077
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4077,
    "end": 4078,
    "range": [
      4077,
      4078
    ]
  },
  {
    "type": "Identifier",
    "value": "Exclude",
    "start": 4079,
    "end": 4086,
    "range": [
      4079,
      4086
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4086,
    "end": 4087,
    "range": [
      4086,
      4087
    ]
  },
  {
    "type": "Identifier",
    "value": "Union",
    "start": 4087,
    "end": 4092,
    "range": [
      4087,
      4092
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4092,
    "end": 4093,
    "range": [
      4092,
      4093
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4094,
    "end": 4095,
    "range": [
      4094,
      4095
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4095,
    "end": 4096,
    "range": [
      4095,
      4096
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4096,
    "end": 4097,
    "range": [
      4096,
      4097
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4098,
    "end": 4099,
    "range": [
      4098,
      4099
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4099,
    "end": 4100,
    "range": [
      4099,
      4100
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4101,
    "end": 4105,
    "range": [
      4101,
      4105
    ]
  },
  {
    "type": "Identifier",
    "value": "UCCA",
    "start": 4106,
    "end": 4110,
    "range": [
      4106,
      4110
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4111,
    "end": 4112,
    "range": [
      4111,
      4112
    ]
  },
  {
    "type": "Identifier",
    "value": "UnionComplementComplement",
    "start": 4113,
    "end": 4138,
    "range": [
      4113,
      4138
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4138,
    "end": 4139,
    "range": [
      4138,
      4139
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 4139,
    "end": 4142,
    "range": [
      4139,
      4142
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4142,
    "end": 4143,
    "range": [
      4142,
      4143
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4143,
    "end": 4144,
    "range": [
      4143,
      4144
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4145,
    "end": 4149,
    "range": [
      4145,
      4149
    ]
  },
  {
    "type": "Identifier",
    "value": "UCCB",
    "start": 4150,
    "end": 4154,
    "range": [
      4150,
      4154
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4155,
    "end": 4156,
    "range": [
      4155,
      4156
    ]
  },
  {
    "type": "Identifier",
    "value": "UnionComplementComplement",
    "start": 4157,
    "end": 4182,
    "range": [
      4157,
      4182
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4182,
    "end": 4183,
    "range": [
      4182,
      4183
    ]
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 4183,
    "end": 4186,
    "range": [
      4183,
      4186
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4186,
    "end": 4187,
    "range": [
      4186,
      4187
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4187,
    "end": 4188,
    "range": [
      4187,
      4188
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4234,
    "end": 4238,
    "range": [
      4234,
      4238
    ]
  },
  {
    "type": "Identifier",
    "value": "ProductComplement",
    "start": 4239,
    "end": 4256,
    "range": [
      4239,
      4256
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4257,
    "end": 4258,
    "range": [
      4257,
      4258
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4259,
    "end": 4260,
    "range": [
      4259,
      4260
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4263,
    "end": 4264,
    "range": [
      4263,
      4264
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4264,
    "end": 4265,
    "range": [
      4264,
      4265
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 4266,
    "end": 4268,
    "range": [
      4266,
      4268
    ]
  },
  {
    "type": "Identifier",
    "value": "Union",
    "start": 4269,
    "end": 4274,
    "range": [
      4269,
      4274
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4274,
    "end": 4275,
    "range": [
      4274,
      4275
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4275,
    "end": 4276,
    "range": [
      4275,
      4276
    ]
  },
  {
    "type": "Identifier",
    "value": "Exclude",
    "start": 4277,
    "end": 4284,
    "range": [
      4277,
      4284
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4284,
    "end": 4285,
    "range": [
      4284,
      4285
    ]
  },
  {
    "type": "Identifier",
    "value": "ProductUnion",
    "start": 4285,
    "end": 4297,
    "range": [
      4285,
      4297
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4297,
    "end": 4298,
    "range": [
      4297,
      4298
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4299,
    "end": 4300,
    "range": [
      4299,
      4300
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 4301,
    "end": 4303,
    "range": [
      4301,
      4303
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4303,
    "end": 4304,
    "range": [
      4303,
      4304
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4305,
    "end": 4306,
    "range": [
      4305,
      4306
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4307,
    "end": 4308,
    "range": [
      4307,
      4308
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4308,
    "end": 4309,
    "range": [
      4308,
      4309
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4310,
    "end": 4311,
    "range": [
      4310,
      4311
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4311,
    "end": 4312,
    "range": [
      4311,
      4312
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4313,
    "end": 4317,
    "range": [
      4313,
      4317
    ]
  },
  {
    "type": "Identifier",
    "value": "PCA",
    "start": 4318,
    "end": 4321,
    "range": [
      4318,
      4321
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4322,
    "end": 4323,
    "range": [
      4322,
      4323
    ]
  },
  {
    "type": "Identifier",
    "value": "ProductComplement",
    "start": 4324,
    "end": 4341,
    "range": [
      4324,
      4341
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4341,
    "end": 4342,
    "range": [
      4341,
      4342
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 4342,
    "end": 4345,
    "range": [
      4342,
      4345
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4345,
    "end": 4346,
    "range": [
      4345,
      4346
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4346,
    "end": 4347,
    "range": [
      4346,
      4347
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4348,
    "end": 4352,
    "range": [
      4348,
      4352
    ]
  },
  {
    "type": "Identifier",
    "value": "PCB",
    "start": 4353,
    "end": 4356,
    "range": [
      4353,
      4356
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4357,
    "end": 4358,
    "range": [
      4357,
      4358
    ]
  },
  {
    "type": "Identifier",
    "value": "ProductComplement",
    "start": 4359,
    "end": 4376,
    "range": [
      4359,
      4376
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4376,
    "end": 4377,
    "range": [
      4376,
      4377
    ]
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 4377,
    "end": 4380,
    "range": [
      4377,
      4380
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4380,
    "end": 4381,
    "range": [
      4380,
      4381
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4381,
    "end": 4382,
    "range": [
      4381,
      4382
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4428,
    "end": 4432,
    "range": [
      4428,
      4432
    ]
  },
  {
    "type": "Identifier",
    "value": "ProductComplementComplement",
    "start": 4433,
    "end": 4460,
    "range": [
      4433,
      4460
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4461,
    "end": 4462,
    "range": [
      4461,
      4462
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4463,
    "end": 4464,
    "range": [
      4463,
      4464
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4467,
    "end": 4468,
    "range": [
      4467,
      4468
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4468,
    "end": 4469,
    "range": [
      4468,
      4469
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 4470,
    "end": 4472,
    "range": [
      4470,
      4472
    ]
  },
  {
    "type": "Identifier",
    "value": "Union",
    "start": 4473,
    "end": 4478,
    "range": [
      4473,
      4478
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4478,
    "end": 4479,
    "range": [
      4478,
      4479
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4479,
    "end": 4480,
    "range": [
      4479,
      4480
    ]
  },
  {
    "type": "Identifier",
    "value": "Exclude",
    "start": 4481,
    "end": 4488,
    "range": [
      4481,
      4488
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4488,
    "end": 4489,
    "range": [
      4488,
      4489
    ]
  },
  {
    "type": "Identifier",
    "value": "ProductUnion",
    "start": 4489,
    "end": 4501,
    "range": [
      4489,
      4501
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4501,
    "end": 4502,
    "range": [
      4501,
      4502
    ]
  },
  {
    "type": "Identifier",
    "value": "Exclude",
    "start": 4503,
    "end": 4510,
    "range": [
      4503,
      4510
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4510,
    "end": 4511,
    "range": [
      4510,
      4511
    ]
  },
  {
    "type": "Identifier",
    "value": "ProductUnion",
    "start": 4511,
    "end": 4523,
    "range": [
      4511,
      4523
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4523,
    "end": 4524,
    "range": [
      4523,
      4524
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4525,
    "end": 4526,
    "range": [
      4525,
      4526
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 4527,
    "end": 4529,
    "range": [
      4527,
      4529
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4529,
    "end": 4530,
    "range": [
      4529,
      4530
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4531,
    "end": 4532,
    "range": [
      4531,
      4532
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4533,
    "end": 4534,
    "range": [
      4533,
      4534
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4534,
    "end": 4535,
    "range": [
      4534,
      4535
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4535,
    "end": 4536,
    "range": [
      4535,
      4536
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4537,
    "end": 4538,
    "range": [
      4537,
      4538
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4538,
    "end": 4539,
    "range": [
      4538,
      4539
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4540,
    "end": 4544,
    "range": [
      4540,
      4544
    ]
  },
  {
    "type": "Identifier",
    "value": "PCCA",
    "start": 4545,
    "end": 4549,
    "range": [
      4545,
      4549
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4550,
    "end": 4551,
    "range": [
      4550,
      4551
    ]
  },
  {
    "type": "Identifier",
    "value": "ProductComplementComplement",
    "start": 4552,
    "end": 4579,
    "range": [
      4552,
      4579
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4579,
    "end": 4580,
    "range": [
      4579,
      4580
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 4580,
    "end": 4583,
    "range": [
      4580,
      4583
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4583,
    "end": 4584,
    "range": [
      4583,
      4584
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4584,
    "end": 4585,
    "range": [
      4584,
      4585
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4586,
    "end": 4590,
    "range": [
      4586,
      4590
    ]
  },
  {
    "type": "Identifier",
    "value": "PCCB",
    "start": 4591,
    "end": 4595,
    "range": [
      4591,
      4595
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4596,
    "end": 4597,
    "range": [
      4596,
      4597
    ]
  },
  {
    "type": "Identifier",
    "value": "ProductComplementComplement",
    "start": 4598,
    "end": 4625,
    "range": [
      4598,
      4625
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4625,
    "end": 4626,
    "range": [
      4625,
      4626
    ]
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 4626,
    "end": 4629,
    "range": [
      4626,
      4629
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4629,
    "end": 4630,
    "range": [
      4629,
      4630
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4630,
    "end": 4631,
    "range": [
      4630,
      4631
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4655,
    "end": 4659,
    "range": [
      4655,
      4659
    ]
  },
  {
    "type": "Identifier",
    "value": "Hmm",
    "start": 4660,
    "end": 4663,
    "range": [
      4660,
      4663
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4663,
    "end": 4664,
    "range": [
      4663,
      4664
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4664,
    "end": 4665,
    "range": [
      4664,
      4665
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4665,
    "end": 4666,
    "range": [
      4665,
      4666
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4667,
    "end": 4668,
    "range": [
      4667,
      4668
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4669,
    "end": 4676,
    "range": [
      4669,
      4676
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4677,
    "end": 4678,
    "range": [
      4677,
      4678
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4678,
    "end": 4679,
    "range": [
      4678,
      4679
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4680,
    "end": 4681,
    "range": [
      4680,
      4681
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4682,
    "end": 4683,
    "range": [
      4682,
      4683
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4684,
    "end": 4691,
    "range": [
      4684,
      4691
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4692,
    "end": 4693,
    "range": [
      4692,
      4693
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4694,
    "end": 4695,
    "range": [
      4694,
      4695
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4696,
    "end": 4697,
    "range": [
      4696,
      4697
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4698,
    "end": 4699,
    "range": [
      4698,
      4699
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4699,
    "end": 4700,
    "range": [
      4699,
      4700
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 4701,
    "end": 4703,
    "range": [
      4701,
      4703
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4704,
    "end": 4709,
    "range": [
      4704,
      4709
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4710,
    "end": 4711,
    "range": [
      4710,
      4711
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4711,
    "end": 4712,
    "range": [
      4711,
      4712
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4712,
    "end": 4713,
    "range": [
      4712,
      4713
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4714,
    "end": 4720,
    "range": [
      4714,
      4720
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4721,
    "end": 4722,
    "range": [
      4721,
      4722
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4723,
    "end": 4724,
    "range": [
      4723,
      4724
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4725,
    "end": 4730,
    "range": [
      4725,
      4730
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4730,
    "end": 4731,
    "range": [
      4730,
      4731
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4732,
    "end": 4736,
    "range": [
      4732,
      4736
    ]
  },
  {
    "type": "Identifier",
    "value": "What",
    "start": 4737,
    "end": 4741,
    "range": [
      4737,
      4741
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4742,
    "end": 4743,
    "range": [
      4742,
      4743
    ]
  },
  {
    "type": "Identifier",
    "value": "Hmm",
    "start": 4744,
    "end": 4747,
    "range": [
      4744,
      4747
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4747,
    "end": 4748,
    "range": [
      4747,
      4748
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4748,
    "end": 4749,
    "range": [
      4748,
      4749
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4749,
    "end": 4750,
    "range": [
      4749,
      4750
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4750,
    "end": 4751,
    "range": [
      4750,
      4751
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4752,
    "end": 4753,
    "range": [
      4752,
      4753
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4754,
    "end": 4755,
    "range": [
      4754,
      4755
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4755,
    "end": 4756,
    "range": [
      4755,
      4756
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4757,
    "end": 4763,
    "range": [
      4757,
      4763
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4764,
    "end": 4765,
    "range": [
      4764,
      4765
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4765,
    "end": 4766,
    "range": [
      4765,
      4766
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4767,
    "end": 4772,
    "range": [
      4767,
      4772
    ]
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 4773,
    "end": 4774,
    "range": [
      4773,
      4774
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4774,
    "end": 4775,
    "range": [
      4774,
      4775
    ]
  },
  {
    "type": "Identifier",
    "value": "What",
    "start": 4776,
    "end": 4780,
    "range": [
      4776,
      4780
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4781,
    "end": 4782,
    "range": [
      4781,
      4782
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4783,
    "end": 4784,
    "range": [
      4783,
      4784
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4785,
    "end": 4786,
    "range": [
      4785,
      4786
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4786,
    "end": 4787,
    "range": [
      4786,
      4787
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 4788,
    "end": 4789,
    "range": [
      4788,
      4789
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4790,
    "end": 4791,
    "range": [
      4790,
      4791
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4791,
    "end": 4792,
    "range": [
      4791,
      4792
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4816,
    "end": 4823,
    "range": [
      4816,
      4823
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4824,
    "end": 4832,
    "range": [
      4824,
      4832
    ]
  },
  {
    "type": "Identifier",
    "value": "save",
    "start": 4833,
    "end": 4837,
    "range": [
      4833,
      4837
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4837,
    "end": 4838,
    "range": [
      4837,
      4838
    ]
  },
  {
    "type": "Identifier",
    "value": "_response",
    "start": 4838,
    "end": 4847,
    "range": [
      4838,
      4847
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4847,
    "end": 4848,
    "range": [
      4847,
      4848
    ]
  },
  {
    "type": "Identifier",
    "value": "IRootResponse",
    "start": 4849,
    "end": 4862,
    "range": [
      4849,
      4862
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4862,
    "end": 4863,
    "range": [
      4862,
      4863
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4863,
    "end": 4869,
    "range": [
      4863,
      4869
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4869,
    "end": 4870,
    "range": [
      4869,
      4870
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4870,
    "end": 4871,
    "range": [
      4870,
      4871
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4871,
    "end": 4872,
    "range": [
      4871,
      4872
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 4873,
    "end": 4877,
    "range": [
      4873,
      4877
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4877,
    "end": 4878,
    "range": [
      4877,
      4878
    ]
  },
  {
    "type": "Identifier",
    "value": "exportCommand",
    "start": 4880,
    "end": 4893,
    "range": [
      4880,
      4893
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4893,
    "end": 4894,
    "range": [
      4893,
      4894
    ]
  },
  {
    "type": "Identifier",
    "value": "save",
    "start": 4894,
    "end": 4898,
    "range": [
      4894,
      4898
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4898,
    "end": 4899,
    "range": [
      4898,
      4899
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4899,
    "end": 4900,
    "range": [
      4899,
      4900
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4902,
    "end": 4909,
    "range": [
      4902,
      4909
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4910,
    "end": 4918,
    "range": [
      4910,
      4918
    ]
  },
  {
    "type": "Identifier",
    "value": "exportCommand",
    "start": 4919,
    "end": 4932,
    "range": [
      4919,
      4932
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4932,
    "end": 4933,
    "range": [
      4932,
      4933
    ]
  },
  {
    "type": "Identifier",
    "value": "TResponse",
    "start": 4933,
    "end": 4942,
    "range": [
      4933,
      4942
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4942,
    "end": 4943,
    "range": [
      4942,
      4943
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4943,
    "end": 4944,
    "range": [
      4943,
      4944
    ]
  },
  {
    "type": "Identifier",
    "value": "functionToCall",
    "start": 4944,
    "end": 4958,
    "range": [
      4944,
      4958
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4958,
    "end": 4959,
    "range": [
      4958,
      4959
    ]
  },
  {
    "type": "Identifier",
    "value": "IExportCallback",
    "start": 4960,
    "end": 4975,
    "range": [
      4960,
      4975
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4975,
    "end": 4976,
    "range": [
      4975,
      4976
    ]
  },
  {
    "type": "Identifier",
    "value": "TResponse",
    "start": 4976,
    "end": 4985,
    "range": [
      4976,
      4985
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4985,
    "end": 4986,
    "range": [
      4985,
      4986
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4986,
    "end": 4987,
    "range": [
      4986,
      4987
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4987,
    "end": 4988,
    "range": [
      4987,
      4988
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 4989,
    "end": 4993,
    "range": [
      4989,
      4993
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4993,
    "end": 4994,
    "range": [
      4993,
      4994
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4996,
    "end": 5005,
    "range": [
      4996,
      5005
    ]
  },
  {
    "type": "Identifier",
    "value": "IExportCallback",
    "start": 5006,
    "end": 5021,
    "range": [
      5006,
      5021
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5021,
    "end": 5022,
    "range": [
      5021,
      5022
    ]
  },
  {
    "type": "Identifier",
    "value": "TResponse",
    "start": 5022,
    "end": 5031,
    "range": [
      5022,
      5031
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5031,
    "end": 5032,
    "range": [
      5031,
      5032
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5033,
    "end": 5034,
    "range": [
      5033,
      5034
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5036,
    "end": 5037,
    "range": [
      5036,
      5037
    ]
  },
  {
    "type": "Identifier",
    "value": "response",
    "start": 5037,
    "end": 5045,
    "range": [
      5037,
      5045
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5045,
    "end": 5046,
    "range": [
      5045,
      5046
    ]
  },
  {
    "type": "Identifier",
    "value": "IRootResponse",
    "start": 5047,
    "end": 5060,
    "range": [
      5047,
      5060
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5060,
    "end": 5061,
    "range": [
      5060,
      5061
    ]
  },
  {
    "type": "Identifier",
    "value": "TResponse",
    "start": 5061,
    "end": 5070,
    "range": [
      5061,
      5070
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5070,
    "end": 5071,
    "range": [
      5070,
      5071
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5071,
    "end": 5072,
    "range": [
      5071,
      5072
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5072,
    "end": 5073,
    "range": [
      5072,
      5073
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 5074,
    "end": 5078,
    "range": [
      5074,
      5078
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5078,
    "end": 5079,
    "range": [
      5078,
      5079
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5080,
    "end": 5081,
    "range": [
      5080,
      5081
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5083,
    "end": 5087,
    "range": [
      5083,
      5087
    ]
  },
  {
    "type": "Identifier",
    "value": "IRootResponse",
    "start": 5088,
    "end": 5101,
    "range": [
      5088,
      5101
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5101,
    "end": 5102,
    "range": [
      5101,
      5102
    ]
  },
  {
    "type": "Identifier",
    "value": "TResponse",
    "start": 5102,
    "end": 5111,
    "range": [
      5102,
      5111
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5111,
    "end": 5112,
    "range": [
      5111,
      5112
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5113,
    "end": 5114,
    "range": [
      5113,
      5114
    ]
  },
  {
    "type": "Identifier",
    "value": "TResponse",
    "start": 5116,
    "end": 5125,
    "range": [
      5116,
      5125
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5126,
    "end": 5133,
    "range": [
      5126,
      5133
    ]
  },
  {
    "type": "Identifier",
    "value": "IRecord",
    "start": 5134,
    "end": 5141,
    "range": [
      5134,
      5141
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5142,
    "end": 5143,
    "range": [
      5142,
      5143
    ]
  },
  {
    "type": "Identifier",
    "value": "IRecordResponse",
    "start": 5144,
    "end": 5159,
    "range": [
      5144,
      5159
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5159,
    "end": 5160,
    "range": [
      5159,
      5160
    ]
  },
  {
    "type": "Identifier",
    "value": "TResponse",
    "start": 5160,
    "end": 5169,
    "range": [
      5160,
      5169
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5169,
    "end": 5170,
    "range": [
      5169,
      5170
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5171,
    "end": 5172,
    "range": [
      5171,
      5172
    ]
  },
  {
    "type": "Identifier",
    "value": "IResponse",
    "start": 5173,
    "end": 5182,
    "range": [
      5173,
      5182
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5182,
    "end": 5183,
    "range": [
      5182,
      5183
    ]
  },
  {
    "type": "Identifier",
    "value": "TResponse",
    "start": 5183,
    "end": 5192,
    "range": [
      5183,
      5192
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5192,
    "end": 5193,
    "range": [
      5192,
      5193
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5193,
    "end": 5194,
    "range": [
      5193,
      5194
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5196,
    "end": 5205,
    "range": [
      5196,
      5205
    ]
  },
  {
    "type": "Identifier",
    "value": "IRecord",
    "start": 5206,
    "end": 5213,
    "range": [
      5206,
      5213
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5214,
    "end": 5215,
    "range": [
      5214,
      5215
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 5217,
    "end": 5225,
    "range": [
      5217,
      5225
    ]
  },
  {
    "type": "Identifier",
    "value": "Id",
    "start": 5226,
    "end": 5228,
    "range": [
      5226,
      5228
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5228,
    "end": 5229,
    "range": [
      5228,
      5229
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5230,
    "end": 5236,
    "range": [
      5230,
      5236
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5236,
    "end": 5237,
    "range": [
      5236,
      5237
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5238,
    "end": 5239,
    "range": [
      5238,
      5239
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5241,
    "end": 5248,
    "range": [
      5241,
      5248
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5249,
    "end": 5253,
    "range": [
      5249,
      5253
    ]
  },
  {
    "type": "Identifier",
    "value": "IRecordResponse",
    "start": 5254,
    "end": 5269,
    "range": [
      5254,
      5269
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5269,
    "end": 5270,
    "range": [
      5269,
      5270
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5270,
    "end": 5271,
    "range": [
      5270,
      5271
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5272,
    "end": 5279,
    "range": [
      5272,
      5279
    ]
  },
  {
    "type": "Identifier",
    "value": "IRecord",
    "start": 5280,
    "end": 5287,
    "range": [
      5280,
      5287
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5287,
    "end": 5288,
    "range": [
      5287,
      5288
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5289,
    "end": 5290,
    "range": [
      5289,
      5290
    ]
  },
  {
    "type": "Identifier",
    "value": "IResponse",
    "start": 5291,
    "end": 5300,
    "range": [
      5291,
      5300
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5300,
    "end": 5301,
    "range": [
      5300,
      5301
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5301,
    "end": 5302,
    "range": [
      5301,
      5302
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5302,
    "end": 5303,
    "range": [
      5302,
      5303
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 5304,
    "end": 5305,
    "range": [
      5304,
      5305
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5306,
    "end": 5307,
    "range": [
      5306,
      5307
    ]
  },
  {
    "type": "Identifier",
    "value": "sendRecord",
    "start": 5309,
    "end": 5319,
    "range": [
      5309,
      5319
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5319,
    "end": 5320,
    "range": [
      5319,
      5320
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5320,
    "end": 5321,
    "range": [
      5320,
      5321
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5321,
    "end": 5322,
    "range": [
      5321,
      5322
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 5323,
    "end": 5327,
    "range": [
      5323,
      5327
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5327,
    "end": 5328,
    "range": [
      5327,
      5328
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5329,
    "end": 5330,
    "range": [
      5329,
      5330
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5330,
    "end": 5331,
    "range": [
      5330,
      5331
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5333,
    "end": 5340,
    "range": [
      5333,
      5340
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5341,
    "end": 5345,
    "range": [
      5341,
      5345
    ]
  },
  {
    "type": "Identifier",
    "value": "IResponse",
    "start": 5346,
    "end": 5355,
    "range": [
      5346,
      5355
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5355,
    "end": 5356,
    "range": [
      5355,
      5356
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5356,
    "end": 5357,
    "range": [
      5356,
      5357
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5357,
    "end": 5358,
    "range": [
      5357,
      5358
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5359,
    "end": 5360,
    "range": [
      5359,
      5360
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5361,
    "end": 5362,
    "range": [
      5361,
      5362
    ]
  },
  {
    "type": "Identifier",
    "value": "sendValue",
    "start": 5364,
    "end": 5373,
    "range": [
      5364,
      5373
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5373,
    "end": 5374,
    "range": [
      5373,
      5374
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 5374,
    "end": 5378,
    "range": [
      5374,
      5378
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5378,
    "end": 5379,
    "range": [
      5378,
      5379
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 5380,
    "end": 5385,
    "range": [
      5380,
      5385
    ]
  },
  {
    "type": "Identifier",
    "value": "GetAllPropertiesOfType",
    "start": 5386,
    "end": 5408,
    "range": [
      5386,
      5408
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5408,
    "end": 5409,
    "range": [
      5408,
      5409
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5409,
    "end": 5410,
    "range": [
      5409,
      5410
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5410,
    "end": 5411,
    "range": [
      5410,
      5411
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5412,
    "end": 5418,
    "range": [
      5412,
      5418
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5418,
    "end": 5419,
    "range": [
      5418,
      5419
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5419,
    "end": 5420,
    "range": [
      5419,
      5420
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5420,
    "end": 5421,
    "range": [
      5420,
      5421
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 5422,
    "end": 5426,
    "range": [
      5422,
      5426
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5426,
    "end": 5427,
    "range": [
      5426,
      5427
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5428,
    "end": 5429,
    "range": [
      5428,
      5429
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5429,
    "end": 5430,
    "range": [
      5429,
      5430
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5432,
    "end": 5439,
    "range": [
      5432,
      5439
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5440,
    "end": 5444,
    "range": [
      5440,
      5444
    ]
  },
  {
    "type": "Identifier",
    "value": "GetPropertyNamesOfType",
    "start": 5445,
    "end": 5467,
    "range": [
      5445,
      5467
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5467,
    "end": 5468,
    "range": [
      5467,
      5468
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5468,
    "end": 5469,
    "range": [
      5468,
      5469
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5469,
    "end": 5470,
    "range": [
      5469,
      5470
    ]
  },
  {
    "type": "Identifier",
    "value": "RestrictToType",
    "start": 5471,
    "end": 5485,
    "range": [
      5471,
      5485
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5485,
    "end": 5486,
    "range": [
      5485,
      5486
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5487,
    "end": 5488,
    "range": [
      5487,
      5488
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5489,
    "end": 5490,
    "range": [
      5489,
      5490
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5492,
    "end": 5493,
    "range": [
      5492,
      5493
    ]
  },
  {
    "type": "Identifier",
    "value": "PropertyName",
    "start": 5493,
    "end": 5505,
    "range": [
      5493,
      5505
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 5506,
    "end": 5508,
    "range": [
      5506,
      5508
    ]
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 5509,
    "end": 5516,
    "range": [
      5509,
      5516
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5516,
    "end": 5517,
    "range": [
      5516,
      5517
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 5517,
    "end": 5522,
    "range": [
      5517,
      5522
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5523,
    "end": 5524,
    "range": [
      5523,
      5524
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5524,
    "end": 5525,
    "range": [
      5524,
      5525
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5526,
    "end": 5532,
    "range": [
      5526,
      5532
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5532,
    "end": 5533,
    "range": [
      5532,
      5533
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5533,
    "end": 5534,
    "range": [
      5533,
      5534
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5534,
    "end": 5535,
    "range": [
      5534,
      5535
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5536,
    "end": 5537,
    "range": [
      5536,
      5537
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5537,
    "end": 5538,
    "range": [
      5537,
      5538
    ]
  },
  {
    "type": "Identifier",
    "value": "PropertyName",
    "start": 5538,
    "end": 5550,
    "range": [
      5538,
      5550
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5550,
    "end": 5551,
    "range": [
      5550,
      5551
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5552,
    "end": 5559,
    "range": [
      5552,
      5559
    ]
  },
  {
    "type": "Identifier",
    "value": "RestrictToType",
    "start": 5560,
    "end": 5574,
    "range": [
      5560,
      5574
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5575,
    "end": 5576,
    "range": [
      5575,
      5576
    ]
  },
  {
    "type": "Identifier",
    "value": "PropertyName",
    "start": 5577,
    "end": 5589,
    "range": [
      5577,
      5589
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5590,
    "end": 5591,
    "range": [
      5590,
      5591
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 5592,
    "end": 5597,
    "range": [
      5592,
      5597
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5598,
    "end": 5599,
    "range": [
      5598,
      5599
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5599,
    "end": 5600,
    "range": [
      5599,
      5600
    ]
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 5600,
    "end": 5607,
    "range": [
      5600,
      5607
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5607,
    "end": 5608,
    "range": [
      5607,
      5608
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 5608,
    "end": 5613,
    "range": [
      5608,
      5613
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5614,
    "end": 5615,
    "range": [
      5614,
      5615
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5615,
    "end": 5616,
    "range": [
      5615,
      5616
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5617,
    "end": 5623,
    "range": [
      5617,
      5623
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5623,
    "end": 5624,
    "range": [
      5623,
      5624
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5624,
    "end": 5625,
    "range": [
      5624,
      5625
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5625,
    "end": 5626,
    "range": [
      5625,
      5626
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5628,
    "end": 5635,
    "range": [
      5628,
      5635
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5636,
    "end": 5640,
    "range": [
      5636,
      5640
    ]
  },
  {
    "type": "Identifier",
    "value": "GetAllPropertiesOfType",
    "start": 5641,
    "end": 5663,
    "range": [
      5641,
      5663
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5663,
    "end": 5664,
    "range": [
      5663,
      5664
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5664,
    "end": 5665,
    "range": [
      5664,
      5665
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5665,
    "end": 5666,
    "range": [
      5665,
      5666
    ]
  },
  {
    "type": "Identifier",
    "value": "RestrictToType",
    "start": 5667,
    "end": 5681,
    "range": [
      5667,
      5681
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5681,
    "end": 5682,
    "range": [
      5681,
      5682
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5683,
    "end": 5684,
    "range": [
      5683,
      5684
    ]
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 5685,
    "end": 5689,
    "range": [
      5685,
      5689
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5689,
    "end": 5690,
    "range": [
      5689,
      5690
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5692,
    "end": 5693,
    "range": [
      5692,
      5693
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5693,
    "end": 5694,
    "range": [
      5693,
      5694
    ]
  },
  {
    "type": "Identifier",
    "value": "GetPropertyNamesOfType",
    "start": 5696,
    "end": 5718,
    "range": [
      5696,
      5718
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5718,
    "end": 5719,
    "range": [
      5718,
      5719
    ]
  },
  {
    "type": "Identifier",
    "value": "Required",
    "start": 5719,
    "end": 5727,
    "range": [
      5719,
      5727
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5727,
    "end": 5728,
    "range": [
      5727,
      5728
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5728,
    "end": 5729,
    "range": [
      5728,
      5729
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5729,
    "end": 5730,
    "range": [
      5729,
      5730
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5730,
    "end": 5731,
    "range": [
      5730,
      5731
    ]
  },
  {
    "type": "Identifier",
    "value": "RestrictToType",
    "start": 5732,
    "end": 5746,
    "range": [
      5732,
      5746
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5746,
    "end": 5747,
    "range": [
      5746,
      5747
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5748,
    "end": 5749,
    "range": [
      5748,
      5749
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5749,
    "end": 5750,
    "range": [
      5749,
      5750
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5774,
    "end": 5781,
    "range": [
      5774,
      5781
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5782,
    "end": 5790,
    "range": [
      5782,
      5790
    ]
  },
  {
    "type": "Identifier",
    "value": "ff",
    "start": 5791,
    "end": 5793,
    "range": [
      5791,
      5793
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5793,
    "end": 5794,
    "range": [
      5793,
      5794
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5794,
    "end": 5795,
    "range": [
      5794,
      5795
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5795,
    "end": 5796,
    "range": [
      5795,
      5796
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo3",
    "start": 5797,
    "end": 5801,
    "range": [
      5797,
      5801
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5801,
    "end": 5802,
    "range": [
      5801,
      5802
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5802,
    "end": 5808,
    "range": [
      5802,
      5808
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5808,
    "end": 5809,
    "range": [
      5808,
      5809
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5809,
    "end": 5810,
    "range": [
      5809,
      5810
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5810,
    "end": 5811,
    "range": [
      5810,
      5811
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 5812,
    "end": 5816,
    "range": [
      5812,
      5816
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5816,
    "end": 5817,
    "range": [
      5816,
      5817
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5818,
    "end": 5825,
    "range": [
      5818,
      5825
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5826,
    "end": 5834,
    "range": [
      5826,
      5834
    ]
  },
  {
    "type": "Identifier",
    "value": "gg",
    "start": 5835,
    "end": 5837,
    "range": [
      5835,
      5837
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5837,
    "end": 5838,
    "range": [
      5837,
      5838
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5838,
    "end": 5839,
    "range": [
      5838,
      5839
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5839,
    "end": 5840,
    "range": [
      5839,
      5840
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5840,
    "end": 5841,
    "range": [
      5840,
      5841
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 5841,
    "end": 5842,
    "range": [
      5841,
      5842
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5842,
    "end": 5843,
    "range": [
      5842,
      5843
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5844,
    "end": 5845,
    "range": [
      5844,
      5845
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5845,
    "end": 5846,
    "range": [
      5845,
      5846
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5846,
    "end": 5847,
    "range": [
      5846,
      5847
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo3",
    "start": 5848,
    "end": 5852,
    "range": [
      5848,
      5852
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5852,
    "end": 5853,
    "range": [
      5852,
      5853
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5853,
    "end": 5854,
    "range": [
      5853,
      5854
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5854,
    "end": 5855,
    "range": [
      5854,
      5855
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5855,
    "end": 5856,
    "range": [
      5855,
      5856
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5857,
    "end": 5859,
    "range": [
      5857,
      5859
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 5860,
    "end": 5864,
    "range": [
      5860,
      5864
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5864,
    "end": 5865,
    "range": [
      5864,
      5865
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5865,
    "end": 5866,
    "range": [
      5865,
      5866
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 5867,
    "end": 5871,
    "range": [
      5867,
      5871
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5871,
    "end": 5872,
    "range": [
      5871,
      5872
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5873,
    "end": 5877,
    "range": [
      5873,
      5877
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo3",
    "start": 5878,
    "end": 5882,
    "range": [
      5878,
      5882
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5882,
    "end": 5883,
    "range": [
      5882,
      5883
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5883,
    "end": 5884,
    "range": [
      5883,
      5884
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5884,
    "end": 5885,
    "range": [
      5884,
      5885
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5886,
    "end": 5887,
    "range": [
      5886,
      5887
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5888,
    "end": 5889,
    "range": [
      5888,
      5889
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5890,
    "end": 5897,
    "range": [
      5890,
      5897
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5898,
    "end": 5904,
    "range": [
      5898,
      5904
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5905,
    "end": 5906,
    "range": [
      5905,
      5906
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5907,
    "end": 5908,
    "range": [
      5907,
      5908
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 5909,
    "end": 5910,
    "range": [
      5909,
      5910
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5910,
    "end": 5911,
    "range": [
      5910,
      5911
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5912,
    "end": 5913,
    "range": [
      5912,
      5913
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5914,
    "end": 5915,
    "range": [
      5914,
      5915
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5916,
    "end": 5917,
    "range": [
      5916,
      5917
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5918,
    "end": 5919,
    "range": [
      5918,
      5919
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5920,
    "end": 5921,
    "range": [
      5920,
      5921
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5921,
    "end": 5922,
    "range": [
      5921,
      5922
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5923,
    "end": 5924,
    "range": [
      5923,
      5924
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5925,
    "end": 5926,
    "range": [
      5925,
      5926
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5926,
    "end": 5927,
    "range": [
      5926,
      5927
    ]
  },
  {
    "type": "Identifier",
    "value": "gg",
    "start": 5928,
    "end": 5930,
    "range": [
      5928,
      5930
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5930,
    "end": 5931,
    "range": [
      5930,
      5931
    ]
  },
  {
    "type": "Identifier",
    "value": "ff",
    "start": 5931,
    "end": 5933,
    "range": [
      5931,
      5933
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5933,
    "end": 5934,
    "range": [
      5933,
      5934
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5934,
    "end": 5935,
    "range": [
      5934,
      5935
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5959,
    "end": 5963,
    "range": [
      5959,
      5963
    ]
  },
  {
    "type": "Identifier",
    "value": "Wat",
    "start": 5964,
    "end": 5967,
    "range": [
      5964,
      5967
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5967,
    "end": 5968,
    "range": [
      5967,
      5968
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 5968,
    "end": 5969,
    "range": [
      5968,
      5969
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5970,
    "end": 5977,
    "range": [
      5970,
      5977
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5978,
    "end": 5984,
    "range": [
      5978,
      5984
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5984,
    "end": 5985,
    "range": [
      5984,
      5985
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5986,
    "end": 5987,
    "range": [
      5986,
      5987
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5988,
    "end": 5989,
    "range": [
      5988,
      5989
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5990,
    "end": 5991,
    "range": [
      5990,
      5991
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5991,
    "end": 5992,
    "range": [
      5991,
      5992
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5993,
    "end": 5994,
    "range": [
      5993,
      5994
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 5995,
    "end": 5996,
    "range": [
      5995,
      5996
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5996,
    "end": 5997,
    "range": [
      5996,
      5997
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 5998,
    "end": 5999,
    "range": [
      5998,
      5999
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5999,
    "end": 6000,
    "range": [
      5999,
      6000
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 6001,
    "end": 6002,
    "range": [
      6001,
      6002
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6002,
    "end": 6003,
    "range": [
      6002,
      6003
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 6004,
    "end": 6005,
    "range": [
      6004,
      6005
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6006,
    "end": 6007,
    "range": [
      6006,
      6007
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6008,
    "end": 6009,
    "range": [
      6008,
      6009
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6010,
    "end": 6017,
    "range": [
      6010,
      6017
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6018,
    "end": 6019,
    "range": [
      6018,
      6019
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6020,
    "end": 6021,
    "range": [
      6020,
      6021
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6021,
    "end": 6022,
    "range": [
      6021,
      6022
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6023,
    "end": 6024,
    "range": [
      6023,
      6024
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6025,
    "end": 6026,
    "range": [
      6025,
      6026
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 6026,
    "end": 6027,
    "range": [
      6026,
      6027
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 6028,
    "end": 6030,
    "range": [
      6028,
      6030
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 6031,
    "end": 6032,
    "range": [
      6031,
      6032
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6032,
    "end": 6033,
    "range": [
      6032,
      6033
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6033,
    "end": 6034,
    "range": [
      6033,
      6034
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 6035,
    "end": 6036,
    "range": [
      6035,
      6036
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6037,
    "end": 6038,
    "range": [
      6037,
      6038
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6039,
    "end": 6040,
    "range": [
      6039,
      6040
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 6041,
    "end": 6042,
    "range": [
      6041,
      6042
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 6043,
    "end": 6047,
    "range": [
      6043,
      6047
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6048,
    "end": 6049,
    "range": [
      6048,
      6049
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 6050,
    "end": 6055,
    "range": [
      6050,
      6055
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6055,
    "end": 6056,
    "range": [
      6055,
      6056
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6059,
    "end": 6063,
    "range": [
      6059,
      6063
    ]
  },
  {
    "type": "Identifier",
    "value": "Huh",
    "start": 6064,
    "end": 6067,
    "range": [
      6064,
      6067
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6068,
    "end": 6069,
    "range": [
      6068,
      6069
    ]
  },
  {
    "type": "Identifier",
    "value": "Wat",
    "start": 6070,
    "end": 6073,
    "range": [
      6070,
      6073
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6073,
    "end": 6074,
    "range": [
      6073,
      6074
    ]
  },
  {
    "type": "String",
    "value": "\"y\"",
    "start": 6074,
    "end": 6077,
    "range": [
      6074,
      6077
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6077,
    "end": 6078,
    "range": [
      6077,
      6078
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6078,
    "end": 6079,
    "range": [
      6078,
      6079
    ]
  }
]
```
