__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Identity",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 13
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
              "start": 14,
              "end": 15
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 14,
            "end": 15
          }
        ],
        "start": 13,
        "end": 16
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 22,
          "end": 23
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
              "start": 33,
              "end": 34
            },
            "typeArguments": null,
            "start": 33,
            "end": 34
          },
          "start": 27,
          "end": 34
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 38
            },
            "typeArguments": null,
            "start": 37,
            "end": 38
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 40
            },
            "typeArguments": null,
            "start": 39,
            "end": 40
          },
          "start": 37,
          "end": 41
        },
        "optional": false,
        "readonly": null,
        "start": 19,
        "end": 43
      },
      "declare": false,
      "start": 0,
      "end": 44
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M0",
        "optional": false,
        "typeAnnotation": null,
        "start": 51,
        "end": 53
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 59
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 61,
                  "end": 62
                },
                "start": 61,
                "end": 62
              },
              "start": 59,
              "end": 62
            },
            "accessibility": null,
            "static": false,
            "start": 58,
            "end": 63
          },
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
              "start": 64,
              "end": 65
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 67,
                  "end": 68
                },
                "start": 67,
                "end": 68
              },
              "start": 65,
              "end": 68
            },
            "accessibility": null,
            "static": false,
            "start": 64,
            "end": 68
          }
        ],
        "start": 56,
        "end": 70
      },
      "declare": false,
      "start": 46,
      "end": 71
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M1",
        "optional": false,
        "typeAnnotation": null,
        "start": 78,
        "end": 80
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
          "start": 86,
          "end": 87
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Partial",
              "optional": false,
              "typeAnnotation": null,
              "start": 97,
              "end": 104
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 105,
                    "end": 107
                  },
                  "typeArguments": null,
                  "start": 105,
                  "end": 107
                }
              ],
              "start": 104,
              "end": 108
            },
            "start": 97,
            "end": 108
          },
          "start": 91,
          "end": 108
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "M0",
              "optional": false,
              "typeAnnotation": null,
              "start": 111,
              "end": 113
            },
            "typeArguments": null,
            "start": 111,
            "end": 113
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 115
            },
            "typeArguments": null,
            "start": 114,
            "end": 115
          },
          "start": 111,
          "end": 116
        },
        "optional": false,
        "readonly": null,
        "start": 83,
        "end": 118
      },
      "declare": false,
      "start": 73,
      "end": 119
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 126,
        "end": 128
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
          "start": 134,
          "end": 135
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Required",
              "optional": false,
              "typeAnnotation": null,
              "start": 145,
              "end": 153
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 154,
                    "end": 156
                  },
                  "typeArguments": null,
                  "start": 154,
                  "end": 156
                }
              ],
              "start": 153,
              "end": 157
            },
            "start": 145,
            "end": 157
          },
          "start": 139,
          "end": 157
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "M1",
              "optional": false,
              "typeAnnotation": null,
              "start": 160,
              "end": 162
            },
            "typeArguments": null,
            "start": 160,
            "end": 162
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 164
            },
            "typeArguments": null,
            "start": 163,
            "end": 164
          },
          "start": 160,
          "end": 165
        },
        "optional": false,
        "readonly": null,
        "start": 131,
        "end": 167
      },
      "declare": false,
      "start": 121,
      "end": 168
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M3",
        "optional": false,
        "typeAnnotation": null,
        "start": 175,
        "end": 177
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
          "start": 183,
          "end": 184
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Identity",
              "optional": false,
              "typeAnnotation": null,
              "start": 194,
              "end": 202
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Partial",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 203,
                    "end": 210
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "M0",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 211,
                          "end": 213
                        },
                        "typeArguments": null,
                        "start": 211,
                        "end": 213
                      }
                    ],
                    "start": 210,
                    "end": 214
                  },
                  "start": 203,
                  "end": 214
                }
              ],
              "start": 202,
              "end": 215
            },
            "start": 194,
            "end": 215
          },
          "start": 188,
          "end": 215
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "M0",
              "optional": false,
              "typeAnnotation": null,
              "start": 218,
              "end": 220
            },
            "typeArguments": null,
            "start": 218,
            "end": 220
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 221,
              "end": 222
            },
            "typeArguments": null,
            "start": 221,
            "end": 222
          },
          "start": 218,
          "end": 223
        },
        "optional": false,
        "readonly": null,
        "start": 180,
        "end": 225
      },
      "declare": false,
      "start": 170,
      "end": 226
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 237,
        "end": 240
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 241,
              "end": 242
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 257,
                  "end": 259
                },
                "typeArguments": null,
                "start": 257,
                "end": 259
              },
              "start": 251,
              "end": 259
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 241,
            "end": 259
          }
        ],
        "start": 240,
        "end": 260
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 265,
                  "end": 267
                },
                "typeArguments": null,
                "start": 265,
                "end": 267
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 268,
                  "end": 269
                },
                "typeArguments": null,
                "start": 268,
                "end": 269
              },
              "start": 265,
              "end": 270
            },
            "start": 263,
            "end": 270
          },
          "start": 261,
          "end": 270
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "m2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 276,
                  "end": 278
                },
                "typeArguments": null,
                "start": 276,
                "end": 278
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 279,
                  "end": 280
                },
                "typeArguments": null,
                "start": 279,
                "end": 280
              },
              "start": 276,
              "end": 281
            },
            "start": 274,
            "end": 281
          },
          "start": 272,
          "end": 281
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "m3",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 287,
                  "end": 289
                },
                "typeArguments": null,
                "start": 287,
                "end": 289
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 290,
                  "end": 291
                },
                "typeArguments": null,
                "start": 290,
                "end": 291
              },
              "start": 287,
              "end": 292
            },
            "start": 285,
            "end": 292
          },
          "start": 283,
          "end": 292
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 300,
                  "end": 302
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 303,
                  "end": 311
                },
                "optional": false,
                "computed": false,
                "start": 300,
                "end": 311
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 300,
              "end": 313
            },
            "directive": null,
            "start": 300,
            "end": 314
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ChainExpression",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 329,
                    "end": 331
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "toString",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 333,
                    "end": 341
                  },
                  "optional": true,
                  "computed": false,
                  "start": 329,
                  "end": 341
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 329,
                "end": 343
              },
              "start": 329,
              "end": 343
            },
            "directive": null,
            "start": 329,
            "end": 344
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 349,
                  "end": 351
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 352,
                  "end": 360
                },
                "optional": false,
                "computed": false,
                "start": 349,
                "end": 360
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 349,
              "end": 362
            },
            "directive": null,
            "start": 349,
            "end": 363
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ChainExpression",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 378,
                    "end": 380
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "toString",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 382,
                    "end": 390
                  },
                  "optional": true,
                  "computed": false,
                  "start": 378,
                  "end": 390
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 378,
                "end": 392
              },
              "start": 378,
              "end": 392
            },
            "directive": null,
            "start": 378,
            "end": 393
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 398,
                  "end": 400
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 401,
                  "end": 409
                },
                "optional": false,
                "computed": false,
                "start": 398,
                "end": 409
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 398,
              "end": 411
            },
            "directive": null,
            "start": 398,
            "end": 412
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ChainExpression",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 427,
                    "end": 429
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "toString",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 431,
                    "end": 439
                  },
                  "optional": true,
                  "computed": false,
                  "start": 427,
                  "end": 439
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 427,
                "end": 441
              },
              "start": 427,
              "end": 441
            },
            "directive": null,
            "start": 427,
            "end": 442
          }
        ],
        "start": 294,
        "end": 444
      },
      "expression": false,
      "start": 228,
      "end": 444
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj",
        "optional": false,
        "typeAnnotation": null,
        "start": 473,
        "end": 476
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 485,
              "end": 486
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 488,
                  "end": 489
                },
                "start": 488,
                "end": 489
              },
              "start": 486,
              "end": 489
            },
            "accessibility": null,
            "static": false,
            "start": 485,
            "end": 490
          },
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
              "start": 495,
              "end": 496
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 498,
                  "end": 499
                },
                "start": 498,
                "end": 499
              },
              "start": 496,
              "end": 499
            },
            "accessibility": null,
            "static": false,
            "start": 495,
            "end": 499
          }
        ],
        "start": 479,
        "end": 501
      },
      "declare": false,
      "start": 468,
      "end": 502
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
            "name": "mapped",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 521,
                  "end": 522
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Partial",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 532,
                      "end": 539
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Obj",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 540,
                            "end": 543
                          },
                          "typeArguments": null,
                          "start": 540,
                          "end": 543
                        }
                      ],
                      "start": 539,
                      "end": 544
                    },
                    "start": 532,
                    "end": 544
                  },
                  "start": 526,
                  "end": 544
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 547,
                      "end": 550
                    },
                    "typeArguments": null,
                    "start": 547,
                    "end": 550
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 551,
                      "end": 552
                    },
                    "typeArguments": null,
                    "start": 551,
                    "end": 552
                  },
                  "start": 547,
                  "end": 553
                },
                "optional": false,
                "readonly": null,
                "start": 518,
                "end": 555
              },
              "start": 516,
              "end": 555
            },
            "start": 510,
            "end": 555
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 558,
            "end": 560
          },
          "definite": false,
          "start": 510,
          "end": 560
        }
      ],
      "declare": false,
      "start": 504,
      "end": 561
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
            "name": "resolveMapped",
            "optional": false,
            "typeAnnotation": null,
            "start": 569,
            "end": 582
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "start": 586,
                    "end": 587
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "mapped",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 609,
                        "end": 615
                      },
                      "typeArguments": null,
                      "start": 602,
                      "end": 615
                    },
                    "start": 596,
                    "end": 615
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 586,
                  "end": 615
                }
              ],
              "start": 585,
              "end": 616
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
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
                "start": 617,
                "end": 623
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mapped",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 628,
                    "end": 634
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 635,
                    "end": 638
                  },
                  "optional": false,
                  "computed": true,
                  "start": 628,
                  "end": 639
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 640,
                  "end": 648
                },
                "optional": false,
                "computed": false,
                "start": 628,
                "end": 648
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 628,
              "end": 650
            },
            "id": null,
            "generator": false,
            "start": 585,
            "end": 650
          },
          "definite": false,
          "start": 569,
          "end": 650
        }
      ],
      "declare": false,
      "start": 563,
      "end": 651
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
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 702,
            "end": 705
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 709,
                  "end": 714
                },
                {
                  "type": "Literal",
                  "value": "12",
                  "raw": "\"12\"",
                  "start": 716,
                  "end": 720
                },
                {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 722,
                  "end": 724
                }
              ],
              "start": 708,
              "end": 725
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 729,
                "end": 734
              },
              "typeArguments": null,
              "start": 729,
              "end": 734
            },
            "start": 708,
            "end": 734
          },
          "definite": false,
          "start": 702,
          "end": 734
        }
      ],
      "declare": false,
      "start": 696,
      "end": 735
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mappings",
        "optional": false,
        "typeAnnotation": null,
        "start": 742,
        "end": 750
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
              "start": 755,
              "end": 758
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 760,
                "end": 767
              },
              "start": 758,
              "end": 767
            },
            "accessibility": null,
            "static": false,
            "start": 755,
            "end": 768
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "12",
              "raw": "\"12\"",
              "start": 769,
              "end": 773
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 775,
                "end": 781
              },
              "start": 773,
              "end": 781
            },
            "accessibility": null,
            "static": false,
            "start": 769,
            "end": 782
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 783,
              "end": 785
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 787,
                "end": 793
              },
              "start": 785,
              "end": 793
            },
            "accessibility": null,
            "static": false,
            "start": 783,
            "end": 793
          }
        ],
        "start": 753,
        "end": 795
      },
      "declare": false,
      "start": 737,
      "end": 796
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MapperArgs",
        "optional": false,
        "typeAnnotation": null,
        "start": 803,
        "end": 813
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
              "start": 814,
              "end": 815
            },
            "constraint": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 832,
                  "end": 835
                },
                "typeArguments": null,
                "start": 825,
                "end": 835
              },
              "indexType": {
                "type": "TSNumberKeyword",
                "start": 837,
                "end": 843
              },
              "start": 824,
              "end": 844
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 814,
            "end": 844
          }
        ],
        "start": 813,
        "end": 845
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
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 854,
              "end": 855
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
                  "start": 857,
                  "end": 858
                },
                "typeArguments": null,
                "start": 857,
                "end": 858
              },
              "start": 855,
              "end": 858
            },
            "accessibility": null,
            "static": false,
            "start": 854,
            "end": 859
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 864,
              "end": 865
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 867,
                "end": 873
              },
              "start": 865,
              "end": 873
            },
            "accessibility": null,
            "static": false,
            "start": 864,
            "end": 873
          }
        ],
        "start": 848,
        "end": 875
      },
      "declare": false,
      "start": 798,
      "end": 876
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SetOptional",
        "optional": false,
        "typeAnnotation": null,
        "start": 883,
        "end": 894
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
              "start": 895,
              "end": 896
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 895,
            "end": 896
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 898,
              "end": 899
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
                  "start": 914,
                  "end": 915
                },
                "typeArguments": null,
                "start": 914,
                "end": 915
              },
              "start": 908,
              "end": 915
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 898,
            "end": 915
          }
        ],
        "start": 894,
        "end": 916
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Omit",
              "optional": false,
              "typeAnnotation": null,
              "start": 919,
              "end": 923
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
                    "start": 924,
                    "end": 925
                  },
                  "typeArguments": null,
                  "start": 924,
                  "end": 925
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 927,
                    "end": 928
                  },
                  "typeArguments": null,
                  "start": 927,
                  "end": 928
                }
              ],
              "start": 923,
              "end": 929
            },
            "start": 919,
            "end": 929
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Partial",
              "optional": false,
              "typeAnnotation": null,
              "start": 932,
              "end": 939
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Pick",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 940,
                    "end": 944
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
                          "start": 945,
                          "end": 946
                        },
                        "typeArguments": null,
                        "start": 945,
                        "end": 946
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 948,
                          "end": 949
                        },
                        "typeArguments": null,
                        "start": 948,
                        "end": 949
                      }
                    ],
                    "start": 944,
                    "end": 950
                  },
                  "start": 940,
                  "end": 950
                }
              ],
              "start": 939,
              "end": 951
            },
            "start": 932,
            "end": 951
          }
        ],
        "start": 919,
        "end": 951
      },
      "declare": false,
      "start": 878,
      "end": 952
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PartMappings",
        "optional": false,
        "typeAnnotation": null,
        "start": 959,
        "end": 971
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "SetOptional",
          "optional": false,
          "typeAnnotation": null,
          "start": 974,
          "end": 985
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mappings",
                "optional": false,
                "typeAnnotation": null,
                "start": 986,
                "end": 994
              },
              "typeArguments": null,
              "start": 986,
              "end": 994
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 996,
                "end": 1001
              },
              "start": 996,
              "end": 1001
            }
          ],
          "start": 985,
          "end": 1002
        },
        "start": 974,
        "end": 1002
      },
      "declare": false,
      "start": 954,
      "end": 1003
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
            "name": "mapper",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1022,
                  "end": 1023
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PartMappings",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1033,
                      "end": 1045
                    },
                    "typeArguments": null,
                    "start": 1033,
                    "end": 1045
                  },
                  "start": 1027,
                  "end": 1045
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MapperArgs",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1052,
                            "end": 1062
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "K",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1063,
                                  "end": 1064
                                },
                                "typeArguments": null,
                                "start": 1063,
                                "end": 1064
                              }
                            ],
                            "start": 1062,
                            "end": 1065
                          },
                          "start": 1052,
                          "end": 1065
                        },
                        "start": 1050,
                        "end": 1065
                      },
                      "start": 1049,
                      "end": 1065
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "PartMappings",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1070,
                          "end": 1082
                        },
                        "typeArguments": null,
                        "start": 1070,
                        "end": 1082
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1083,
                          "end": 1084
                        },
                        "typeArguments": null,
                        "start": 1083,
                        "end": 1084
                      },
                      "start": 1070,
                      "end": 1085
                    },
                    "start": 1067,
                    "end": 1085
                  },
                  "start": 1048,
                  "end": 1085
                },
                "optional": false,
                "readonly": null,
                "start": 1019,
                "end": 1087
              },
              "start": 1017,
              "end": 1087
            },
            "start": 1011,
            "end": 1087
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1096,
                  "end": 1099
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "v",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1104,
                            "end": 1105
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "v",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1104,
                            "end": 1105
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 1104,
                          "end": 1105
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1107,
                            "end": 1108
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1107,
                            "end": 1108
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 1107,
                          "end": 1108
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1102,
                      "end": 1110
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1115,
                          "end": 1116
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1117,
                          "end": 1123
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1115,
                        "end": 1123
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1126,
                        "end": 1127
                      },
                      "start": 1115,
                      "end": 1127
                    },
                    "operator": ">",
                    "right": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 1130,
                      "end": 1131
                    },
                    "start": 1115,
                    "end": 1131
                  },
                  "id": null,
                  "generator": false,
                  "start": 1101,
                  "end": 1131
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1096,
                "end": 1131
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "12",
                  "raw": "\"12\"",
                  "start": 1137,
                  "end": 1141
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "v",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1146,
                            "end": 1147
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "v",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1146,
                            "end": 1147
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 1146,
                          "end": 1147
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1149,
                            "end": 1150
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1149,
                            "end": 1150
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 1149,
                          "end": 1150
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1144,
                      "end": 1152
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Number",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1157,
                        "end": 1163
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1164,
                          "end": 1165
                        }
                      ],
                      "optional": false,
                      "start": 1157,
                      "end": 1166
                    },
                    "operator": "+",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1169,
                      "end": 1170
                    },
                    "start": 1157,
                    "end": 1170
                  },
                  "id": null,
                  "generator": false,
                  "start": 1143,
                  "end": 1170
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1137,
                "end": 1170
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 1176,
                  "end": 1178
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "v",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1183,
                            "end": 1184
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "v",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1183,
                            "end": 1184
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 1183,
                          "end": 1184
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1186,
                            "end": 1187
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1186,
                            "end": 1187
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 1186,
                          "end": 1187
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1181,
                      "end": 1189
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": false,
                        "start": 1194,
                        "end": 1197
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": false,
                        "start": 1198,
                        "end": 1201
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 1202,
                        "end": 1204
                      }
                    ],
                    "expressions": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1197,
                        "end": 1198
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1201,
                        "end": 1202
                      }
                    ],
                    "start": 1194,
                    "end": 1204
                  },
                  "id": null,
                  "generator": false,
                  "start": 1180,
                  "end": 1204
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1176,
                "end": 1204
              }
            ],
            "start": 1090,
            "end": 1207
          },
          "definite": false,
          "start": 1011,
          "end": 1207
        }
      ],
      "declare": false,
      "start": 1005,
      "end": 1207
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
            "name": "resolveMapper1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1215,
            "end": 1229
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "start": 1233,
                    "end": 1234
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "mapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1256,
                        "end": 1262
                      },
                      "typeArguments": null,
                      "start": 1249,
                      "end": 1262
                    },
                    "start": 1243,
                    "end": 1262
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1233,
                  "end": 1262
                }
              ],
              "start": 1232,
              "end": 1263
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
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
                      "start": 1274,
                      "end": 1275
                    },
                    "typeArguments": null,
                    "start": 1274,
                    "end": 1275
                  },
                  "start": 1272,
                  "end": 1275
                },
                "start": 1269,
                "end": 1275
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MapperArgs",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1280,
                      "end": 1290
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1291,
                            "end": 1292
                          },
                          "typeArguments": null,
                          "start": 1291,
                          "end": 1292
                        }
                      ],
                      "start": 1290,
                      "end": 1293
                    },
                    "start": 1280,
                    "end": 1293
                  },
                  "start": 1278,
                  "end": 1293
                },
                "start": 1277,
                "end": 1293
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mapper",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1298,
                  "end": 1304
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1305,
                  "end": 1308
                },
                "optional": false,
                "computed": true,
                "start": 1298,
                "end": 1309
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1310,
                  "end": 1311
                }
              ],
              "optional": false,
              "start": 1298,
              "end": 1312
            },
            "id": null,
            "generator": false,
            "start": 1232,
            "end": 1312
          },
          "definite": false,
          "start": 1215,
          "end": 1312
        }
      ],
      "declare": false,
      "start": 1209,
      "end": 1313
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
            "name": "resolveMapper2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1331,
            "end": 1345
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "start": 1349,
                    "end": 1350
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "mapper",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1372,
                        "end": 1378
                      },
                      "typeArguments": null,
                      "start": 1365,
                      "end": 1378
                    },
                    "start": 1359,
                    "end": 1378
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1349,
                  "end": 1378
                }
              ],
              "start": 1348,
              "end": 1379
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
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
                      "start": 1390,
                      "end": 1391
                    },
                    "typeArguments": null,
                    "start": 1390,
                    "end": 1391
                  },
                  "start": 1388,
                  "end": 1391
                },
                "start": 1385,
                "end": 1391
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MapperArgs",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1396,
                      "end": 1406
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1407,
                            "end": 1408
                          },
                          "typeArguments": null,
                          "start": 1407,
                          "end": 1408
                        }
                      ],
                      "start": 1406,
                      "end": 1409
                    },
                    "start": 1396,
                    "end": 1409
                  },
                  "start": 1394,
                  "end": 1409
                },
                "start": 1393,
                "end": 1409
              }
            ],
            "returnType": null,
            "body": {
              "type": "ChainExpression",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mapper",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1414,
                    "end": 1420
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1421,
                    "end": 1424
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1414,
                  "end": 1425
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1428,
                    "end": 1429
                  }
                ],
                "optional": true,
                "start": 1414,
                "end": 1430
              },
              "start": 1414,
              "end": 1430
            },
            "id": null,
            "generator": false,
            "start": 1348,
            "end": 1430
          },
          "definite": false,
          "start": 1331,
          "end": 1430
        }
      ],
      "declare": false,
      "start": 1325,
      "end": 1430
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1459,
        "end": 1463
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1472,
              "end": 1473
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1475,
                "end": 1481
              },
              "start": 1473,
              "end": 1481
            },
            "accessibility": null,
            "static": false,
            "start": 1472,
            "end": 1482
          },
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
              "start": 1487,
              "end": 1488
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1490,
                "end": 1496
              },
              "start": 1488,
              "end": 1496
            },
            "accessibility": null,
            "static": false,
            "start": 1487,
            "end": 1497
          }
        ],
        "start": 1466,
        "end": 1499
      },
      "declare": false,
      "start": 1454,
      "end": 1500
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1507,
        "end": 1511
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1520,
              "end": 1521
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1523,
                "end": 1529
              },
              "start": 1521,
              "end": 1529
            },
            "accessibility": null,
            "static": false,
            "start": 1520,
            "end": 1530
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 1535,
              "end": 1536
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1538,
                "end": 1545
              },
              "start": 1536,
              "end": 1545
            },
            "accessibility": null,
            "static": false,
            "start": 1535,
            "end": 1546
          }
        ],
        "start": 1514,
        "end": 1548
      },
      "declare": false,
      "start": 1502,
      "end": 1549
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
            "name": "mapIntersection",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1589,
                  "end": 1590
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Partial",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1601,
                          "end": 1608
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Obj1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1609,
                                "end": 1613
                              },
                              "typeArguments": null,
                              "start": 1609,
                              "end": 1613
                            }
                          ],
                          "start": 1608,
                          "end": 1614
                        },
                        "start": 1601,
                        "end": 1614
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Required",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1617,
                          "end": 1625
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Obj2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1626,
                                "end": 1630
                              },
                              "typeArguments": null,
                              "start": 1626,
                              "end": 1630
                            }
                          ],
                          "start": 1625,
                          "end": 1631
                        },
                        "start": 1617,
                        "end": 1631
                      }
                    ],
                    "start": 1601,
                    "end": 1631
                  },
                  "start": 1594,
                  "end": 1632
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1635,
                  "end": 1641
                },
                "optional": false,
                "readonly": null,
                "start": 1582,
                "end": 1644
              },
              "start": 1580,
              "end": 1644
            },
            "start": 1565,
            "end": 1644
          },
          "init": null,
          "definite": false,
          "start": 1565,
          "end": 1644
        }
      ],
      "declare": true,
      "start": 1551,
      "end": 1645
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
            "name": "accessMapped",
            "optional": false,
            "typeAnnotation": null,
            "start": 1653,
            "end": 1665
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "start": 1669,
                    "end": 1670
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Obj2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1685,
                        "end": 1689
                      },
                      "typeArguments": null,
                      "start": 1685,
                      "end": 1689
                    },
                    "start": 1679,
                    "end": 1689
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1669,
                  "end": 1689
                }
              ],
              "start": 1668,
              "end": 1690
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
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
                      "start": 1696,
                      "end": 1697
                    },
                    "typeArguments": null,
                    "start": 1696,
                    "end": 1697
                  },
                  "start": 1694,
                  "end": 1697
                },
                "start": 1691,
                "end": 1697
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mapIntersection",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1702,
                    "end": 1717
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1718,
                    "end": 1721
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1702,
                  "end": 1722
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1723,
                  "end": 1731
                },
                "optional": false,
                "computed": false,
                "start": 1702,
                "end": 1731
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1702,
              "end": 1733
            },
            "id": null,
            "generator": false,
            "start": 1668,
            "end": 1733
          },
          "definite": false,
          "start": 1653,
          "end": 1733
        }
      ],
      "declare": false,
      "start": 1647,
      "end": 1734
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
            "name": "resolved",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1762,
                      "end": 1763
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 1766,
                            "end": 1772
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 1775,
                            "end": 1784
                          }
                        ],
                        "start": 1766,
                        "end": 1784
                      },
                      "start": 1764,
                      "end": 1784
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1762,
                    "end": 1785
                  },
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
                      "start": 1786,
                      "end": 1787
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1789,
                        "end": 1795
                      },
                      "start": 1787,
                      "end": 1795
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1786,
                    "end": 1796
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1797,
                      "end": 1798
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1800,
                        "end": 1806
                      },
                      "start": 1798,
                      "end": 1806
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1797,
                    "end": 1806
                  }
                ],
                "start": 1760,
                "end": 1808
              },
              "start": 1758,
              "end": 1808
            },
            "start": 1750,
            "end": 1808
          },
          "init": null,
          "definite": false,
          "start": 1750,
          "end": 1808
        }
      ],
      "declare": true,
      "start": 1736,
      "end": 1809
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
            "name": "accessResolved",
            "optional": false,
            "typeAnnotation": null,
            "start": 1817,
            "end": 1831
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "start": 1835,
                    "end": 1836
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Obj2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1851,
                        "end": 1855
                      },
                      "typeArguments": null,
                      "start": 1851,
                      "end": 1855
                    },
                    "start": 1845,
                    "end": 1855
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1835,
                  "end": 1855
                }
              ],
              "start": 1834,
              "end": 1856
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
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
                      "start": 1862,
                      "end": 1863
                    },
                    "typeArguments": null,
                    "start": 1862,
                    "end": 1863
                  },
                  "start": 1860,
                  "end": 1863
                },
                "start": 1857,
                "end": 1863
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "resolved",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1868,
                    "end": 1876
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1877,
                    "end": 1880
                  },
                  "optional": false,
                  "computed": true,
                  "start": 1868,
                  "end": 1881
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1882,
                  "end": 1890
                },
                "optional": false,
                "computed": false,
                "start": 1868,
                "end": 1890
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1868,
              "end": 1892
            },
            "id": null,
            "generator": false,
            "start": 1834,
            "end": 1892
          },
          "definite": false,
          "start": 1817,
          "end": 1892
        }
      ],
      "declare": false,
      "start": 1811,
      "end": 1893
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1933,
        "end": 1936
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 1945,
              "end": 1949
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1951,
                "end": 1957
              },
              "start": 1949,
              "end": 1957
            },
            "accessibility": null,
            "static": false,
            "start": 1945,
            "end": 1958
          }
        ],
        "start": 1939,
        "end": 1960
      },
      "declare": false,
      "start": 1928,
      "end": 1960
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 1971,
        "end": 1975
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1976,
              "end": 1977
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1992,
                  "end": 1995
                },
                "typeArguments": null,
                "start": 1992,
                "end": 1995
              },
              "start": 1986,
              "end": 1995
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1976,
            "end": 1995
          }
        ],
        "start": 1975,
        "end": 1996
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Pick",
                "optional": false,
                "typeAnnotation": null,
                "start": 2002,
                "end": 2006
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Required",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2007,
                          "end": 2015
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Foo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2016,
                                "end": 2019
                              },
                              "typeArguments": null,
                              "start": 2016,
                              "end": 2019
                            }
                          ],
                          "start": 2015,
                          "end": 2020
                        },
                        "start": 2007,
                        "end": 2020
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Partial",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2023,
                          "end": 2030
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Foo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2031,
                                "end": 2034
                              },
                              "typeArguments": null,
                              "start": 2031,
                              "end": 2034
                            }
                          ],
                          "start": 2030,
                          "end": 2035
                        },
                        "start": 2023,
                        "end": 2035
                      }
                    ],
                    "start": 2007,
                    "end": 2035
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2037,
                      "end": 2038
                    },
                    "typeArguments": null,
                    "start": 2037,
                    "end": 2038
                  }
                ],
                "start": 2006,
                "end": 2039
              },
              "start": 2002,
              "end": 2039
            },
            "start": 2000,
            "end": 2039
          },
          "start": 1997,
          "end": 2039
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
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
                "start": 2046,
                "end": 2047
              },
              "typeArguments": null,
              "start": 2046,
              "end": 2047
            },
            "start": 2044,
            "end": 2047
          },
          "start": 2041,
          "end": 2047
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2055,
                  "end": 2058
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2059,
                  "end": 2062
                },
                "optional": false,
                "computed": true,
                "start": 2055,
                "end": 2063
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 2064,
                "end": 2070
              },
              "optional": false,
              "computed": false,
              "start": 2055,
              "end": 2070
            },
            "directive": null,
            "start": 2055,
            "end": 2071
          }
        ],
        "start": 2049,
        "end": 2073
      },
      "expression": false,
      "start": 1962,
      "end": 2073
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2073
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4,
    "range": [
      0,
      4
    ]
  },
  {
    "type": "Identifier",
    "value": "Identity",
    "start": 5,
    "end": 13,
    "range": [
      5,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 17,
    "end": 18,
    "range": [
      17,
      18
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 24,
    "end": 26,
    "range": [
      24,
      26
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 27,
    "end": 32,
    "range": [
      27,
      32
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 46,
    "end": 50,
    "range": [
      46,
      50
    ]
  },
  {
    "type": "Identifier",
    "value": "M0",
    "start": 51,
    "end": 53,
    "range": [
      51,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 73,
    "end": 77,
    "range": [
      73,
      77
    ]
  },
  {
    "type": "Identifier",
    "value": "M1",
    "start": 78,
    "end": 80,
    "range": [
      78,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 88,
    "end": 90,
    "range": [
      88,
      90
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 91,
    "end": 96,
    "range": [
      91,
      96
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 97,
    "end": 104,
    "range": [
      97,
      104
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Identifier",
    "value": "M0",
    "start": 105,
    "end": 107,
    "range": [
      105,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Identifier",
    "value": "M0",
    "start": 111,
    "end": 113,
    "range": [
      111,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 121,
    "end": 125,
    "range": [
      121,
      125
    ]
  },
  {
    "type": "Identifier",
    "value": "M2",
    "start": 126,
    "end": 128,
    "range": [
      126,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 136,
    "end": 138,
    "range": [
      136,
      138
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 139,
    "end": 144,
    "range": [
      139,
      144
    ]
  },
  {
    "type": "Identifier",
    "value": "Required",
    "start": 145,
    "end": 153,
    "range": [
      145,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Identifier",
    "value": "M1",
    "start": 154,
    "end": 156,
    "range": [
      154,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Identifier",
    "value": "M1",
    "start": 160,
    "end": 162,
    "range": [
      160,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 170,
    "end": 174,
    "range": [
      170,
      174
    ]
  },
  {
    "type": "Identifier",
    "value": "M3",
    "start": 175,
    "end": 177,
    "range": [
      175,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 185,
    "end": 187,
    "range": [
      185,
      187
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 188,
    "end": 193,
    "range": [
      188,
      193
    ]
  },
  {
    "type": "Identifier",
    "value": "Identity",
    "start": 194,
    "end": 202,
    "range": [
      194,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 203,
    "end": 210,
    "range": [
      203,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Identifier",
    "value": "M0",
    "start": 211,
    "end": 213,
    "range": [
      211,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Identifier",
    "value": "M0",
    "start": 218,
    "end": 220,
    "range": [
      218,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 228,
    "end": 236,
    "range": [
      228,
      236
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 237,
    "end": 240,
    "range": [
      237,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 243,
    "end": 250,
    "range": [
      243,
      250
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 251,
    "end": 256,
    "range": [
      251,
      256
    ]
  },
  {
    "type": "Identifier",
    "value": "M0",
    "start": 257,
    "end": 259,
    "range": [
      257,
      259
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 261,
    "end": 263,
    "range": [
      261,
      263
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Identifier",
    "value": "M1",
    "start": 265,
    "end": 267,
    "range": [
      265,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 272,
    "end": 274,
    "range": [
      272,
      274
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
    "value": "M2",
    "start": 276,
    "end": 278,
    "range": [
      276,
      278
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 278,
    "end": 279,
    "range": [
      278,
      279
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 281,
    "end": 282,
    "range": [
      281,
      282
    ]
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 283,
    "end": 285,
    "range": [
      283,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Identifier",
    "value": "M3",
    "start": 287,
    "end": 289,
    "range": [
      287,
      289
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 300,
    "end": 302,
    "range": [
      300,
      302
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 303,
    "end": 311,
    "range": [
      303,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 329,
    "end": 331,
    "range": [
      329,
      331
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 331,
    "end": 333,
    "range": [
      331,
      333
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 333,
    "end": 341,
    "range": [
      333,
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
    "type": "Punctuator",
    "value": ")",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 343,
    "end": 344,
    "range": [
      343,
      344
    ]
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 349,
    "end": 351,
    "range": [
      349,
      351
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 352,
    "end": 360,
    "range": [
      352,
      360
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 360,
    "end": 361,
    "range": [
      360,
      361
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 378,
    "end": 380,
    "range": [
      378,
      380
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 380,
    "end": 382,
    "range": [
      380,
      382
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 382,
    "end": 390,
    "range": [
      382,
      390
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 390,
    "end": 391,
    "range": [
      390,
      391
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 391,
    "end": 392,
    "range": [
      391,
      392
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 392,
    "end": 393,
    "range": [
      392,
      393
    ]
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 398,
    "end": 400,
    "range": [
      398,
      400
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 400,
    "end": 401,
    "range": [
      400,
      401
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 401,
    "end": 409,
    "range": [
      401,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 411,
    "end": 412,
    "range": [
      411,
      412
    ]
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 427,
    "end": 429,
    "range": [
      427,
      429
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 429,
    "end": 431,
    "range": [
      429,
      431
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 431,
    "end": 439,
    "range": [
      431,
      439
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 439,
    "end": 440,
    "range": [
      439,
      440
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 441,
    "end": 442,
    "range": [
      441,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 443,
    "end": 444,
    "range": [
      443,
      444
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 468,
    "end": 472,
    "range": [
      468,
      472
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 473,
    "end": 476,
    "range": [
      473,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 477,
    "end": 478,
    "range": [
      477,
      478
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 479,
    "end": 480,
    "range": [
      479,
      480
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 485,
    "end": 486,
    "range": [
      485,
      486
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 486,
    "end": 487,
    "range": [
      486,
      487
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 488,
    "end": 489,
    "range": [
      488,
      489
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 495,
    "end": 496,
    "range": [
      495,
      496
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 500,
    "end": 501,
    "range": [
      500,
      501
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 501,
    "end": 502,
    "range": [
      501,
      502
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 504,
    "end": 509,
    "range": [
      504,
      509
    ]
  },
  {
    "type": "Identifier",
    "value": "mapped",
    "start": 510,
    "end": 516,
    "range": [
      510,
      516
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 518,
    "end": 519,
    "range": [
      518,
      519
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 523,
    "end": 525,
    "range": [
      523,
      525
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 526,
    "end": 531,
    "range": [
      526,
      531
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 532,
    "end": 539,
    "range": [
      532,
      539
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 539,
    "end": 540,
    "range": [
      539,
      540
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 540,
    "end": 543,
    "range": [
      540,
      543
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 543,
    "end": 544,
    "range": [
      543,
      544
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 544,
    "end": 545,
    "range": [
      544,
      545
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 545,
    "end": 546,
    "range": [
      545,
      546
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 547,
    "end": 550,
    "range": [
      547,
      550
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 550,
    "end": 551,
    "range": [
      550,
      551
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 551,
    "end": 552,
    "range": [
      551,
      552
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 552,
    "end": 553,
    "range": [
      552,
      553
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 554,
    "end": 555,
    "range": [
      554,
      555
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 556,
    "end": 557,
    "range": [
      556,
      557
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 558,
    "end": 559,
    "range": [
      558,
      559
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 559,
    "end": 560,
    "range": [
      559,
      560
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 560,
    "end": 561,
    "range": [
      560,
      561
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 563,
    "end": 568,
    "range": [
      563,
      568
    ]
  },
  {
    "type": "Identifier",
    "value": "resolveMapped",
    "start": 569,
    "end": 582,
    "range": [
      569,
      582
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 585,
    "end": 586,
    "range": [
      585,
      586
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 586,
    "end": 587,
    "range": [
      586,
      587
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 588,
    "end": 595,
    "range": [
      588,
      595
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 596,
    "end": 601,
    "range": [
      596,
      601
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 602,
    "end": 608,
    "range": [
      602,
      608
    ]
  },
  {
    "type": "Identifier",
    "value": "mapped",
    "start": 609,
    "end": 615,
    "range": [
      609,
      615
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 617,
    "end": 620,
    "range": [
      617,
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
    "value": "K",
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
    "value": "=>",
    "start": 625,
    "end": 627,
    "range": [
      625,
      627
    ]
  },
  {
    "type": "Identifier",
    "value": "mapped",
    "start": 628,
    "end": 634,
    "range": [
      628,
      634
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 634,
    "end": 635,
    "range": [
      634,
      635
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 635,
    "end": 638,
    "range": [
      635,
      638
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 638,
    "end": 639,
    "range": [
      638,
      639
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 639,
    "end": 640,
    "range": [
      639,
      640
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 640,
    "end": 648,
    "range": [
      640,
      648
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 648,
    "end": 649,
    "range": [
      648,
      649
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 649,
    "end": 650,
    "range": [
      649,
      650
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 650,
    "end": 651,
    "range": [
      650,
      651
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 696,
    "end": 701,
    "range": [
      696,
      701
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 702,
    "end": 705,
    "range": [
      702,
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
    "type": "Punctuator",
    "value": "[",
    "start": 708,
    "end": 709,
    "range": [
      708,
      709
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 709,
    "end": 714,
    "range": [
      709,
      714
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 714,
    "end": 715,
    "range": [
      714,
      715
    ]
  },
  {
    "type": "String",
    "value": "\"12\"",
    "start": 716,
    "end": 720,
    "range": [
      716,
      720
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 720,
    "end": 721,
    "range": [
      720,
      721
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 722,
    "end": 724,
    "range": [
      722,
      724
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 724,
    "end": 725,
    "range": [
      724,
      725
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 726,
    "end": 728,
    "range": [
      726,
      728
    ]
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 729,
    "end": 734,
    "range": [
      729,
      734
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 734,
    "end": 735,
    "range": [
      734,
      735
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 737,
    "end": 741,
    "range": [
      737,
      741
    ]
  },
  {
    "type": "Identifier",
    "value": "Mappings",
    "start": 742,
    "end": 750,
    "range": [
      742,
      750
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 751,
    "end": 752,
    "range": [
      751,
      752
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 753,
    "end": 754,
    "range": [
      753,
      754
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 755,
    "end": 758,
    "range": [
      755,
      758
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 758,
    "end": 759,
    "range": [
      758,
      759
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 760,
    "end": 767,
    "range": [
      760,
      767
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 767,
    "end": 768,
    "range": [
      767,
      768
    ]
  },
  {
    "type": "String",
    "value": "\"12\"",
    "start": 769,
    "end": 773,
    "range": [
      769,
      773
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 773,
    "end": 774,
    "range": [
      773,
      774
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 775,
    "end": 781,
    "range": [
      775,
      781
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 781,
    "end": 782,
    "range": [
      781,
      782
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 783,
    "end": 785,
    "range": [
      783,
      785
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 785,
    "end": 786,
    "range": [
      785,
      786
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 787,
    "end": 793,
    "range": [
      787,
      793
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 794,
    "end": 795,
    "range": [
      794,
      795
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 795,
    "end": 796,
    "range": [
      795,
      796
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 798,
    "end": 802,
    "range": [
      798,
      802
    ]
  },
  {
    "type": "Identifier",
    "value": "MapperArgs",
    "start": 803,
    "end": 813,
    "range": [
      803,
      813
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 813,
    "end": 814,
    "range": [
      813,
      814
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 814,
    "end": 815,
    "range": [
      814,
      815
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 816,
    "end": 823,
    "range": [
      816,
      823
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 825,
    "end": 831,
    "range": [
      825,
      831
    ]
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 832,
    "end": 835,
    "range": [
      832,
      835
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 835,
    "end": 836,
    "range": [
      835,
      836
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 836,
    "end": 837,
    "range": [
      836,
      837
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 837,
    "end": 843,
    "range": [
      837,
      843
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 843,
    "end": 844,
    "range": [
      843,
      844
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 844,
    "end": 845,
    "range": [
      844,
      845
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 846,
    "end": 847,
    "range": [
      846,
      847
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 848,
    "end": 849,
    "range": [
      848,
      849
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 854,
    "end": 855,
    "range": [
      854,
      855
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 855,
    "end": 856,
    "range": [
      855,
      856
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 857,
    "end": 858,
    "range": [
      857,
      858
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 858,
    "end": 859,
    "range": [
      858,
      859
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 864,
    "end": 865,
    "range": [
      864,
      865
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 865,
    "end": 866,
    "range": [
      865,
      866
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 867,
    "end": 873,
    "range": [
      867,
      873
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 874,
    "end": 875,
    "range": [
      874,
      875
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 875,
    "end": 876,
    "range": [
      875,
      876
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 878,
    "end": 882,
    "range": [
      878,
      882
    ]
  },
  {
    "type": "Identifier",
    "value": "SetOptional",
    "start": 883,
    "end": 894,
    "range": [
      883,
      894
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 894,
    "end": 895,
    "range": [
      894,
      895
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 895,
    "end": 896,
    "range": [
      895,
      896
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 896,
    "end": 897,
    "range": [
      896,
      897
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 898,
    "end": 899,
    "range": [
      898,
      899
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 900,
    "end": 907,
    "range": [
      900,
      907
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 908,
    "end": 913,
    "range": [
      908,
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
    "value": ">",
    "start": 915,
    "end": 916,
    "range": [
      915,
      916
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 917,
    "end": 918,
    "range": [
      917,
      918
    ]
  },
  {
    "type": "Identifier",
    "value": "Omit",
    "start": 919,
    "end": 923,
    "range": [
      919,
      923
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 923,
    "end": 924,
    "range": [
      923,
      924
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 924,
    "end": 925,
    "range": [
      924,
      925
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 925,
    "end": 926,
    "range": [
      925,
      926
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 927,
    "end": 928,
    "range": [
      927,
      928
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 928,
    "end": 929,
    "range": [
      928,
      929
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 930,
    "end": 931,
    "range": [
      930,
      931
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 932,
    "end": 939,
    "range": [
      932,
      939
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 939,
    "end": 940,
    "range": [
      939,
      940
    ]
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 940,
    "end": 944,
    "range": [
      940,
      944
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 944,
    "end": 945,
    "range": [
      944,
      945
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 945,
    "end": 946,
    "range": [
      945,
      946
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 946,
    "end": 947,
    "range": [
      946,
      947
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 948,
    "end": 949,
    "range": [
      948,
      949
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 949,
    "end": 950,
    "range": [
      949,
      950
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 950,
    "end": 951,
    "range": [
      950,
      951
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 951,
    "end": 952,
    "range": [
      951,
      952
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 954,
    "end": 958,
    "range": [
      954,
      958
    ]
  },
  {
    "type": "Identifier",
    "value": "PartMappings",
    "start": 959,
    "end": 971,
    "range": [
      959,
      971
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 972,
    "end": 973,
    "range": [
      972,
      973
    ]
  },
  {
    "type": "Identifier",
    "value": "SetOptional",
    "start": 974,
    "end": 985,
    "range": [
      974,
      985
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 985,
    "end": 986,
    "range": [
      985,
      986
    ]
  },
  {
    "type": "Identifier",
    "value": "Mappings",
    "start": 986,
    "end": 994,
    "range": [
      986,
      994
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 994,
    "end": 995,
    "range": [
      994,
      995
    ]
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 996,
    "end": 1001,
    "range": [
      996,
      1001
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1001,
    "end": 1002,
    "range": [
      1001,
      1002
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1002,
    "end": 1003,
    "range": [
      1002,
      1003
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1005,
    "end": 1010,
    "range": [
      1005,
      1010
    ]
  },
  {
    "type": "Identifier",
    "value": "mapper",
    "start": 1011,
    "end": 1017,
    "range": [
      1011,
      1017
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1017,
    "end": 1018,
    "range": [
      1017,
      1018
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1019,
    "end": 1020,
    "range": [
      1019,
      1020
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1021,
    "end": 1022,
    "range": [
      1021,
      1022
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1022,
    "end": 1023,
    "range": [
      1022,
      1023
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1024,
    "end": 1026,
    "range": [
      1024,
      1026
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1027,
    "end": 1032,
    "range": [
      1027,
      1032
    ]
  },
  {
    "type": "Identifier",
    "value": "PartMappings",
    "start": 1033,
    "end": 1045,
    "range": [
      1033,
      1045
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "(",
    "start": 1048,
    "end": 1049,
    "range": [
      1048,
      1049
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1049,
    "end": 1050,
    "range": [
      1049,
      1050
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1050,
    "end": 1051,
    "range": [
      1050,
      1051
    ]
  },
  {
    "type": "Identifier",
    "value": "MapperArgs",
    "start": 1052,
    "end": 1062,
    "range": [
      1052,
      1062
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1062,
    "end": 1063,
    "range": [
      1062,
      1063
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1063,
    "end": 1064,
    "range": [
      1063,
      1064
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1064,
    "end": 1065,
    "range": [
      1064,
      1065
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1065,
    "end": 1066,
    "range": [
      1065,
      1066
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1067,
    "end": 1069,
    "range": [
      1067,
      1069
    ]
  },
  {
    "type": "Identifier",
    "value": "PartMappings",
    "start": 1070,
    "end": 1082,
    "range": [
      1070,
      1082
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1082,
    "end": 1083,
    "range": [
      1082,
      1083
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1083,
    "end": 1084,
    "range": [
      1083,
      1084
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1084,
    "end": 1085,
    "range": [
      1084,
      1085
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1086,
    "end": 1087,
    "range": [
      1086,
      1087
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1088,
    "end": 1089,
    "range": [
      1088,
      1089
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1090,
    "end": 1091,
    "range": [
      1090,
      1091
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1096,
    "end": 1099,
    "range": [
      1096,
      1099
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1099,
    "end": 1100,
    "range": [
      1099,
      1100
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1101,
    "end": 1102,
    "range": [
      1101,
      1102
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1102,
    "end": 1103,
    "range": [
      1102,
      1103
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1104,
    "end": 1105,
    "range": [
      1104,
      1105
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1105,
    "end": 1106,
    "range": [
      1105,
      1106
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1107,
    "end": 1108,
    "range": [
      1107,
      1108
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1109,
    "end": 1110,
    "range": [
      1109,
      1110
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1110,
    "end": 1111,
    "range": [
      1110,
      1111
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1112,
    "end": 1114,
    "range": [
      1112,
      1114
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1115,
    "end": 1116,
    "range": [
      1115,
      1116
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1116,
    "end": 1117,
    "range": [
      1116,
      1117
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1117,
    "end": 1123,
    "range": [
      1117,
      1123
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1124,
    "end": 1125,
    "range": [
      1124,
      1125
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1126,
    "end": 1127,
    "range": [
      1126,
      1127
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1128,
    "end": 1129,
    "range": [
      1128,
      1129
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1130,
    "end": 1131,
    "range": [
      1130,
      1131
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1131,
    "end": 1132,
    "range": [
      1131,
      1132
    ]
  },
  {
    "type": "String",
    "value": "\"12\"",
    "start": 1137,
    "end": 1141,
    "range": [
      1137,
      1141
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1141,
    "end": 1142,
    "range": [
      1141,
      1142
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1143,
    "end": 1144,
    "range": [
      1143,
      1144
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1144,
    "end": 1145,
    "range": [
      1144,
      1145
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1146,
    "end": 1147,
    "range": [
      1146,
      1147
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1147,
    "end": 1148,
    "range": [
      1147,
      1148
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1149,
    "end": 1150,
    "range": [
      1149,
      1150
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1151,
    "end": 1152,
    "range": [
      1151,
      1152
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1152,
    "end": 1153,
    "range": [
      1152,
      1153
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1154,
    "end": 1156,
    "range": [
      1154,
      1156
    ]
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 1157,
    "end": 1163,
    "range": [
      1157,
      1163
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1163,
    "end": 1164,
    "range": [
      1163,
      1164
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1164,
    "end": 1165,
    "range": [
      1164,
      1165
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1165,
    "end": 1166,
    "range": [
      1165,
      1166
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1167,
    "end": 1168,
    "range": [
      1167,
      1168
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1169,
    "end": 1170,
    "range": [
      1169,
      1170
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1170,
    "end": 1171,
    "range": [
      1170,
      1171
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1176,
    "end": 1178,
    "range": [
      1176,
      1178
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1178,
    "end": 1179,
    "range": [
      1178,
      1179
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1180,
    "end": 1181,
    "range": [
      1180,
      1181
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1181,
    "end": 1182,
    "range": [
      1181,
      1182
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1183,
    "end": 1184,
    "range": [
      1183,
      1184
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1184,
    "end": 1185,
    "range": [
      1184,
      1185
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1186,
    "end": 1187,
    "range": [
      1186,
      1187
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1188,
    "end": 1189,
    "range": [
      1188,
      1189
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1189,
    "end": 1190,
    "range": [
      1189,
      1190
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1191,
    "end": 1193,
    "range": [
      1191,
      1193
    ]
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1194,
    "end": 1197,
    "range": [
      1194,
      1197
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1197,
    "end": 1198,
    "range": [
      1197,
      1198
    ]
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 1198,
    "end": 1201,
    "range": [
      1198,
      1201
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1201,
    "end": 1202,
    "range": [
      1201,
      1202
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1202,
    "end": 1204,
    "range": [
      1202,
      1204
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1204,
    "end": 1205,
    "range": [
      1204,
      1205
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1206,
    "end": 1207,
    "range": [
      1206,
      1207
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1209,
    "end": 1214,
    "range": [
      1209,
      1214
    ]
  },
  {
    "type": "Identifier",
    "value": "resolveMapper1",
    "start": 1215,
    "end": 1229,
    "range": [
      1215,
      1229
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1230,
    "end": 1231,
    "range": [
      1230,
      1231
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1232,
    "end": 1233,
    "range": [
      1232,
      1233
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1233,
    "end": 1234,
    "range": [
      1233,
      1234
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1235,
    "end": 1242,
    "range": [
      1235,
      1242
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1243,
    "end": 1248,
    "range": [
      1243,
      1248
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1249,
    "end": 1255,
    "range": [
      1249,
      1255
    ]
  },
  {
    "type": "Identifier",
    "value": "mapper",
    "start": 1256,
    "end": 1262,
    "range": [
      1256,
      1262
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1262,
    "end": 1263,
    "range": [
      1262,
      1263
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1263,
    "end": 1264,
    "range": [
      1263,
      1264
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1269,
    "end": 1272,
    "range": [
      1269,
      1272
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1272,
    "end": 1273,
    "range": [
      1272,
      1273
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1274,
    "end": 1275,
    "range": [
      1274,
      1275
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1275,
    "end": 1276,
    "range": [
      1275,
      1276
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1277,
    "end": 1278,
    "range": [
      1277,
      1278
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1278,
    "end": 1279,
    "range": [
      1278,
      1279
    ]
  },
  {
    "type": "Identifier",
    "value": "MapperArgs",
    "start": 1280,
    "end": 1290,
    "range": [
      1280,
      1290
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1290,
    "end": 1291,
    "range": [
      1290,
      1291
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1291,
    "end": 1292,
    "range": [
      1291,
      1292
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1292,
    "end": 1293,
    "range": [
      1292,
      1293
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1293,
    "end": 1294,
    "range": [
      1293,
      1294
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1295,
    "end": 1297,
    "range": [
      1295,
      1297
    ]
  },
  {
    "type": "Identifier",
    "value": "mapper",
    "start": 1298,
    "end": 1304,
    "range": [
      1298,
      1304
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1304,
    "end": 1305,
    "range": [
      1304,
      1305
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1305,
    "end": 1308,
    "range": [
      1305,
      1308
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1308,
    "end": 1309,
    "range": [
      1308,
      1309
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1309,
    "end": 1310,
    "range": [
      1309,
      1310
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1310,
    "end": 1311,
    "range": [
      1310,
      1311
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1311,
    "end": 1312,
    "range": [
      1311,
      1312
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1312,
    "end": 1313,
    "range": [
      1312,
      1313
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1325,
    "end": 1330,
    "range": [
      1325,
      1330
    ]
  },
  {
    "type": "Identifier",
    "value": "resolveMapper2",
    "start": 1331,
    "end": 1345,
    "range": [
      1331,
      1345
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1346,
    "end": 1347,
    "range": [
      1346,
      1347
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1348,
    "end": 1349,
    "range": [
      1348,
      1349
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1349,
    "end": 1350,
    "range": [
      1349,
      1350
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1351,
    "end": 1358,
    "range": [
      1351,
      1358
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1359,
    "end": 1364,
    "range": [
      1359,
      1364
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1365,
    "end": 1371,
    "range": [
      1365,
      1371
    ]
  },
  {
    "type": "Identifier",
    "value": "mapper",
    "start": 1372,
    "end": 1378,
    "range": [
      1372,
      1378
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1378,
    "end": 1379,
    "range": [
      1378,
      1379
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1379,
    "end": 1380,
    "range": [
      1379,
      1380
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1385,
    "end": 1388,
    "range": [
      1385,
      1388
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1388,
    "end": 1389,
    "range": [
      1388,
      1389
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1390,
    "end": 1391,
    "range": [
      1390,
      1391
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1391,
    "end": 1392,
    "range": [
      1391,
      1392
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1393,
    "end": 1394,
    "range": [
      1393,
      1394
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1394,
    "end": 1395,
    "range": [
      1394,
      1395
    ]
  },
  {
    "type": "Identifier",
    "value": "MapperArgs",
    "start": 1396,
    "end": 1406,
    "range": [
      1396,
      1406
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1406,
    "end": 1407,
    "range": [
      1406,
      1407
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1407,
    "end": 1408,
    "range": [
      1407,
      1408
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1408,
    "end": 1409,
    "range": [
      1408,
      1409
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1409,
    "end": 1410,
    "range": [
      1409,
      1410
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1411,
    "end": 1413,
    "range": [
      1411,
      1413
    ]
  },
  {
    "type": "Identifier",
    "value": "mapper",
    "start": 1414,
    "end": 1420,
    "range": [
      1414,
      1420
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1420,
    "end": 1421,
    "range": [
      1420,
      1421
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1421,
    "end": 1424,
    "range": [
      1421,
      1424
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1424,
    "end": 1425,
    "range": [
      1424,
      1425
    ]
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 1425,
    "end": 1427,
    "range": [
      1425,
      1427
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1427,
    "end": 1428,
    "range": [
      1427,
      1428
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1428,
    "end": 1429,
    "range": [
      1428,
      1429
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1429,
    "end": 1430,
    "range": [
      1429,
      1430
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1454,
    "end": 1458,
    "range": [
      1454,
      1458
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj1",
    "start": 1459,
    "end": 1463,
    "range": [
      1459,
      1463
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1464,
    "end": 1465,
    "range": [
      1464,
      1465
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1466,
    "end": 1467,
    "range": [
      1466,
      1467
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "start": 1473,
    "end": 1474,
    "range": [
      1473,
      1474
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1475,
    "end": 1481,
    "range": [
      1475,
      1481
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1481,
    "end": 1482,
    "range": [
      1481,
      1482
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1487,
    "end": 1488,
    "range": [
      1487,
      1488
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1488,
    "end": 1489,
    "range": [
      1488,
      1489
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1490,
    "end": 1496,
    "range": [
      1490,
      1496
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1496,
    "end": 1497,
    "range": [
      1496,
      1497
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1498,
    "end": 1499,
    "range": [
      1498,
      1499
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1499,
    "end": 1500,
    "range": [
      1499,
      1500
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1502,
    "end": 1506,
    "range": [
      1502,
      1506
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj2",
    "start": 1507,
    "end": 1511,
    "range": [
      1507,
      1511
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1512,
    "end": 1513,
    "range": [
      1512,
      1513
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1514,
    "end": 1515,
    "range": [
      1514,
      1515
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1520,
    "end": 1521,
    "range": [
      1520,
      1521
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1521,
    "end": 1522,
    "range": [
      1521,
      1522
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1523,
    "end": 1529,
    "range": [
      1523,
      1529
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1529,
    "end": 1530,
    "range": [
      1529,
      1530
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1535,
    "end": 1536,
    "range": [
      1535,
      1536
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1536,
    "end": 1537,
    "range": [
      1536,
      1537
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1538,
    "end": 1545,
    "range": [
      1538,
      1545
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1545,
    "end": 1546,
    "range": [
      1545,
      1546
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1547,
    "end": 1548,
    "range": [
      1547,
      1548
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1548,
    "end": 1549,
    "range": [
      1548,
      1549
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1551,
    "end": 1558,
    "range": [
      1551,
      1558
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1559,
    "end": 1564,
    "range": [
      1559,
      1564
    ]
  },
  {
    "type": "Identifier",
    "value": "mapIntersection",
    "start": 1565,
    "end": 1580,
    "range": [
      1565,
      1580
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1580,
    "end": 1581,
    "range": [
      1580,
      1581
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1582,
    "end": 1583,
    "range": [
      1582,
      1583
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1588,
    "end": 1589,
    "range": [
      1588,
      1589
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1589,
    "end": 1590,
    "range": [
      1589,
      1590
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1591,
    "end": 1593,
    "range": [
      1591,
      1593
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1594,
    "end": 1599,
    "range": [
      1594,
      1599
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1600,
    "end": 1601,
    "range": [
      1600,
      1601
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 1601,
    "end": 1608,
    "range": [
      1601,
      1608
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1608,
    "end": 1609,
    "range": [
      1608,
      1609
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj1",
    "start": 1609,
    "end": 1613,
    "range": [
      1609,
      1613
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1613,
    "end": 1614,
    "range": [
      1613,
      1614
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1615,
    "end": 1616,
    "range": [
      1615,
      1616
    ]
  },
  {
    "type": "Identifier",
    "value": "Required",
    "start": 1617,
    "end": 1625,
    "range": [
      1617,
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
    "value": "Obj2",
    "start": 1626,
    "end": 1630,
    "range": [
      1626,
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
    "value": ")",
    "start": 1631,
    "end": 1632,
    "range": [
      1631,
      1632
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1632,
    "end": 1633,
    "range": [
      1632,
      1633
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1633,
    "end": 1634,
    "range": [
      1633,
      1634
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1635,
    "end": 1641,
    "range": [
      1635,
      1641
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1641,
    "end": 1642,
    "range": [
      1641,
      1642
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1643,
    "end": 1644,
    "range": [
      1643,
      1644
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1644,
    "end": 1645,
    "range": [
      1644,
      1645
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1647,
    "end": 1652,
    "range": [
      1647,
      1652
    ]
  },
  {
    "type": "Identifier",
    "value": "accessMapped",
    "start": 1653,
    "end": 1665,
    "range": [
      1653,
      1665
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1666,
    "end": 1667,
    "range": [
      1666,
      1667
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1668,
    "end": 1669,
    "range": [
      1668,
      1669
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1669,
    "end": 1670,
    "range": [
      1669,
      1670
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1671,
    "end": 1678,
    "range": [
      1671,
      1678
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1679,
    "end": 1684,
    "range": [
      1679,
      1684
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj2",
    "start": 1685,
    "end": 1689,
    "range": [
      1685,
      1689
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1689,
    "end": 1690,
    "range": [
      1689,
      1690
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1690,
    "end": 1691,
    "range": [
      1690,
      1691
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1691,
    "end": 1694,
    "range": [
      1691,
      1694
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1694,
    "end": 1695,
    "range": [
      1694,
      1695
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1696,
    "end": 1697,
    "range": [
      1696,
      1697
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1697,
    "end": 1698,
    "range": [
      1697,
      1698
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1699,
    "end": 1701,
    "range": [
      1699,
      1701
    ]
  },
  {
    "type": "Identifier",
    "value": "mapIntersection",
    "start": 1702,
    "end": 1717,
    "range": [
      1702,
      1717
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1717,
    "end": 1718,
    "range": [
      1717,
      1718
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1718,
    "end": 1721,
    "range": [
      1718,
      1721
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1721,
    "end": 1722,
    "range": [
      1721,
      1722
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1722,
    "end": 1723,
    "range": [
      1722,
      1723
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 1723,
    "end": 1731,
    "range": [
      1723,
      1731
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1731,
    "end": 1732,
    "range": [
      1731,
      1732
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1732,
    "end": 1733,
    "range": [
      1732,
      1733
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1733,
    "end": 1734,
    "range": [
      1733,
      1734
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1736,
    "end": 1743,
    "range": [
      1736,
      1743
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1744,
    "end": 1749,
    "range": [
      1744,
      1749
    ]
  },
  {
    "type": "Identifier",
    "value": "resolved",
    "start": 1750,
    "end": 1758,
    "range": [
      1750,
      1758
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1758,
    "end": 1759,
    "range": [
      1758,
      1759
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1760,
    "end": 1761,
    "range": [
      1760,
      1761
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1762,
    "end": 1763,
    "range": [
      1762,
      1763
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1763,
    "end": 1764,
    "range": [
      1763,
      1764
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1764,
    "end": 1765,
    "range": [
      1764,
      1765
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1766,
    "end": 1772,
    "range": [
      1766,
      1772
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1773,
    "end": 1774,
    "range": [
      1773,
      1774
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1775,
    "end": 1784,
    "range": [
      1775,
      1784
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1784,
    "end": 1785,
    "range": [
      1784,
      1785
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1786,
    "end": 1787,
    "range": [
      1786,
      1787
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1787,
    "end": 1788,
    "range": [
      1787,
      1788
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1789,
    "end": 1795,
    "range": [
      1789,
      1795
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1795,
    "end": 1796,
    "range": [
      1795,
      1796
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1797,
    "end": 1798,
    "range": [
      1797,
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
    "type": "Identifier",
    "value": "number",
    "start": 1800,
    "end": 1806,
    "range": [
      1800,
      1806
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1807,
    "end": 1808,
    "range": [
      1807,
      1808
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1808,
    "end": 1809,
    "range": [
      1808,
      1809
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1811,
    "end": 1816,
    "range": [
      1811,
      1816
    ]
  },
  {
    "type": "Identifier",
    "value": "accessResolved",
    "start": 1817,
    "end": 1831,
    "range": [
      1817,
      1831
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1832,
    "end": 1833,
    "range": [
      1832,
      1833
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1834,
    "end": 1835,
    "range": [
      1834,
      1835
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1835,
    "end": 1836,
    "range": [
      1835,
      1836
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1837,
    "end": 1844,
    "range": [
      1837,
      1844
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1845,
    "end": 1850,
    "range": [
      1845,
      1850
    ]
  },
  {
    "type": "Identifier",
    "value": "Obj2",
    "start": 1851,
    "end": 1855,
    "range": [
      1851,
      1855
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1855,
    "end": 1856,
    "range": [
      1855,
      1856
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1856,
    "end": 1857,
    "range": [
      1856,
      1857
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1857,
    "end": 1860,
    "range": [
      1857,
      1860
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1860,
    "end": 1861,
    "range": [
      1860,
      1861
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1862,
    "end": 1863,
    "range": [
      1862,
      1863
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1863,
    "end": 1864,
    "range": [
      1863,
      1864
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1865,
    "end": 1867,
    "range": [
      1865,
      1867
    ]
  },
  {
    "type": "Identifier",
    "value": "resolved",
    "start": 1868,
    "end": 1876,
    "range": [
      1868,
      1876
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1876,
    "end": 1877,
    "range": [
      1876,
      1877
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1877,
    "end": 1880,
    "range": [
      1877,
      1880
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1880,
    "end": 1881,
    "range": [
      1880,
      1881
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1881,
    "end": 1882,
    "range": [
      1881,
      1882
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 1882,
    "end": 1890,
    "range": [
      1882,
      1890
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1890,
    "end": 1891,
    "range": [
      1890,
      1891
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1891,
    "end": 1892,
    "range": [
      1891,
      1892
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1892,
    "end": 1893,
    "range": [
      1892,
      1893
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1928,
    "end": 1932,
    "range": [
      1928,
      1932
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1933,
    "end": 1936,
    "range": [
      1933,
      1936
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1937,
    "end": 1938,
    "range": [
      1937,
      1938
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1939,
    "end": 1940,
    "range": [
      1939,
      1940
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1945,
    "end": 1949,
    "range": [
      1945,
      1949
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1949,
    "end": 1950,
    "range": [
      1949,
      1950
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1951,
    "end": 1957,
    "range": [
      1951,
      1957
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1957,
    "end": 1958,
    "range": [
      1957,
      1958
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1959,
    "end": 1960,
    "range": [
      1959,
      1960
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1962,
    "end": 1970,
    "range": [
      1962,
      1970
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 1971,
    "end": 1975,
    "range": [
      1971,
      1975
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1975,
    "end": 1976,
    "range": [
      1975,
      1976
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1976,
    "end": 1977,
    "range": [
      1976,
      1977
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1978,
    "end": 1985,
    "range": [
      1978,
      1985
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1986,
    "end": 1991,
    "range": [
      1986,
      1991
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1992,
    "end": 1995,
    "range": [
      1992,
      1995
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1995,
    "end": 1996,
    "range": [
      1995,
      1996
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1996,
    "end": 1997,
    "range": [
      1996,
      1997
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1997,
    "end": 2000,
    "range": [
      1997,
      2000
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2000,
    "end": 2001,
    "range": [
      2000,
      2001
    ]
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 2002,
    "end": 2006,
    "range": [
      2002,
      2006
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2006,
    "end": 2007,
    "range": [
      2006,
      2007
    ]
  },
  {
    "type": "Identifier",
    "value": "Required",
    "start": 2007,
    "end": 2015,
    "range": [
      2007,
      2015
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2015,
    "end": 2016,
    "range": [
      2015,
      2016
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 2016,
    "end": 2019,
    "range": [
      2016,
      2019
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2019,
    "end": 2020,
    "range": [
      2019,
      2020
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2021,
    "end": 2022,
    "range": [
      2021,
      2022
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 2023,
    "end": 2030,
    "range": [
      2023,
      2030
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2030,
    "end": 2031,
    "range": [
      2030,
      2031
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 2031,
    "end": 2034,
    "range": [
      2031,
      2034
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2034,
    "end": 2035,
    "range": [
      2034,
      2035
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2035,
    "end": 2036,
    "range": [
      2035,
      2036
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2037,
    "end": 2038,
    "range": [
      2037,
      2038
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2038,
    "end": 2039,
    "range": [
      2038,
      2039
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2039,
    "end": 2040,
    "range": [
      2039,
      2040
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2041,
    "end": 2044,
    "range": [
      2041,
      2044
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2044,
    "end": 2045,
    "range": [
      2044,
      2045
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2046,
    "end": 2047,
    "range": [
      2046,
      2047
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2047,
    "end": 2048,
    "range": [
      2047,
      2048
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2049,
    "end": 2050,
    "range": [
      2049,
      2050
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2055,
    "end": 2058,
    "range": [
      2055,
      2058
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2058,
    "end": 2059,
    "range": [
      2058,
      2059
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2059,
    "end": 2062,
    "range": [
      2059,
      2062
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2062,
    "end": 2063,
    "range": [
      2062,
      2063
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2063,
    "end": 2064,
    "range": [
      2063,
      2064
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 2064,
    "end": 2070,
    "range": [
      2064,
      2070
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2070,
    "end": 2071,
    "range": [
      2070,
      2071
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2072,
    "end": 2073,
    "range": [
      2072,
      2073
    ]
  }
]
```
