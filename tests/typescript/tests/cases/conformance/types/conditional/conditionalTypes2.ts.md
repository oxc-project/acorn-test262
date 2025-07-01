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
