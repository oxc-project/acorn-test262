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
        "start": 32,
        "end": 33
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 40
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "'A'",
                  "start": 42,
                  "end": 45
                },
                "start": 42,
                "end": 45
              },
              "start": 40,
              "end": 45
            },
            "accessibility": null,
            "static": false,
            "start": 36,
            "end": 45
          }
        ],
        "start": 34,
        "end": 47
      },
      "declare": false,
      "start": 22,
      "end": 47
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 58,
        "end": 59
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 62,
              "end": 66
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "B",
                  "raw": "'B'",
                  "start": 68,
                  "end": 71
                },
                "start": 68,
                "end": 71
              },
              "start": 66,
              "end": 71
            },
            "accessibility": null,
            "static": false,
            "start": 62,
            "end": 71
          }
        ],
        "start": 60,
        "end": 73
      },
      "declare": false,
      "start": 48,
      "end": 73
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isA",
        "optional": false,
        "typeAnnotation": null,
        "start": 84,
        "end": 87
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
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 91,
                    "end": 92
                  },
                  "typeArguments": null,
                  "start": 91,
                  "end": 92
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 95,
                    "end": 96
                  },
                  "typeArguments": null,
                  "start": 95,
                  "end": 96
                }
              ],
              "start": 91,
              "end": 96
            },
            "start": 89,
            "end": 96
          },
          "start": 88,
          "end": 96
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 100
          },
          "asserts": false,
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
                "start": 104,
                "end": 105
              },
              "typeArguments": null,
              "start": 104,
              "end": 105
            },
            "start": 104,
            "end": 105
          },
          "start": 99,
          "end": 105
        },
        "start": 97,
        "end": 105
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 115,
                  "end": 116
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 117,
                  "end": 121
                },
                "optional": false,
                "computed": false,
                "start": 115,
                "end": 121
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "A",
                "raw": "'A'",
                "start": 126,
                "end": 129
              },
              "start": 115,
              "end": 129
            },
            "start": 108,
            "end": 130
          }
        ],
        "start": 106,
        "end": 132
      },
      "expression": false,
      "start": 75,
      "end": 132
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isB",
        "optional": false,
        "typeAnnotation": null,
        "start": 142,
        "end": 145
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
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 149,
                    "end": 150
                  },
                  "typeArguments": null,
                  "start": 149,
                  "end": 150
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 153,
                    "end": 154
                  },
                  "typeArguments": null,
                  "start": 153,
                  "end": 154
                }
              ],
              "start": 149,
              "end": 154
            },
            "start": 147,
            "end": 154
          },
          "start": 146,
          "end": 154
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 157,
            "end": 158
          },
          "asserts": false,
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
                "start": 162,
                "end": 163
              },
              "typeArguments": null,
              "start": 162,
              "end": 163
            },
            "start": 162,
            "end": 163
          },
          "start": 157,
          "end": 163
        },
        "start": 155,
        "end": 163
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 173,
                  "end": 174
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 175,
                  "end": 179
                },
                "optional": false,
                "computed": false,
                "start": 173,
                "end": 179
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "B",
                "raw": "'B'",
                "start": 184,
                "end": 187
              },
              "start": 173,
              "end": 187
            },
            "start": 166,
            "end": 188
          }
        ],
        "start": 164,
        "end": 190
      },
      "expression": false,
      "start": 133,
      "end": 190
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 201,
        "end": 205
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
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 209,
                    "end": 210
                  },
                  "typeArguments": null,
                  "start": 209,
                  "end": 210
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 213,
                    "end": 214
                  },
                  "typeArguments": null,
                  "start": 213,
                  "end": 214
                }
              ],
              "start": 209,
              "end": 214
            },
            "start": 207,
            "end": 214
          },
          "start": 206,
          "end": 214
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 217,
          "end": 220
        },
        "start": 215,
        "end": 220
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 227,
              "end": 228
            },
            "directive": null,
            "start": 227,
            "end": 229
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isA",
                "optional": false,
                "typeAnnotation": null,
                "start": 248,
                "end": 251
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 252,
                  "end": 253
                }
              ],
              "optional": false,
              "start": 248,
              "end": 254
            },
            "consequent": {
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
                    "start": 273,
                    "end": 274
                  },
                  "start": 266,
                  "end": 275
                }
              ],
              "start": 256,
              "end": 287
            },
            "alternate": null,
            "start": 244,
            "end": 287
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 292,
              "end": 293
            },
            "directive": null,
            "start": 292,
            "end": 294
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isB",
                "optional": false,
                "typeAnnotation": null,
                "start": 309,
                "end": 312
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 313,
                  "end": 314
                }
              ],
              "optional": false,
              "start": 309,
              "end": 315
            },
            "consequent": {
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
                    "start": 334,
                    "end": 335
                  },
                  "start": 327,
                  "end": 336
                }
              ],
              "start": 317,
              "end": 348
            },
            "alternate": null,
            "start": 305,
            "end": 348
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 353,
              "end": 354
            },
            "directive": null,
            "start": 353,
            "end": 355
          }
        ],
        "start": 221,
        "end": 367
      },
      "expression": false,
      "start": 192,
      "end": 367
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 378,
        "end": 382
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
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 386,
                    "end": 387
                  },
                  "typeArguments": null,
                  "start": 386,
                  "end": 387
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 390,
                    "end": 391
                  },
                  "typeArguments": null,
                  "start": 390,
                  "end": 391
                }
              ],
              "start": 386,
              "end": 391
            },
            "start": 384,
            "end": 391
          },
          "start": 383,
          "end": 391
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 394,
          "end": 397
        },
        "start": 392,
        "end": 397
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 404,
              "end": 405
            },
            "directive": null,
            "start": 404,
            "end": 406
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 425,
                  "end": 426
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 427,
                  "end": 431
                },
                "optional": false,
                "computed": false,
                "start": 425,
                "end": 431
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "A",
                "raw": "'A'",
                "start": 436,
                "end": 439
              },
              "start": 425,
              "end": 439
            },
            "consequent": {
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
                    "start": 458,
                    "end": 459
                  },
                  "start": 451,
                  "end": 460
                }
              ],
              "start": 441,
              "end": 472
            },
            "alternate": null,
            "start": 421,
            "end": 472
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 477,
              "end": 478
            },
            "directive": null,
            "start": 477,
            "end": 479
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 494,
                  "end": 495
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 496,
                  "end": 500
                },
                "optional": false,
                "computed": false,
                "start": 494,
                "end": 500
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "B",
                "raw": "'B'",
                "start": 505,
                "end": 508
              },
              "start": 494,
              "end": 508
            },
            "consequent": {
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
                    "start": 527,
                    "end": 528
                  },
                  "start": 520,
                  "end": 529
                }
              ],
              "start": 510,
              "end": 541
            },
            "alternate": null,
            "start": 490,
            "end": 541
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 546,
              "end": 547
            },
            "directive": null,
            "start": 546,
            "end": 548
          }
        ],
        "start": 398,
        "end": 560
      },
      "expression": false,
      "start": 369,
      "end": 560
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 560
}
```
