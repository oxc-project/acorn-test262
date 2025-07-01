__ESTREE_TEST__:PASS:
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
