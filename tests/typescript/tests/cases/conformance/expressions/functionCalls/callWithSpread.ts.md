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
        "name": "X",
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
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 21
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "type": "TSNumberKeyword",
                    "start": 25,
                    "end": 31
                  },
                  "start": 23,
                  "end": 31
                },
                "start": 22,
                "end": 31
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 36,
                    "end": 42
                  },
                  "start": 34,
                  "end": 42
                },
                "start": 33,
                "end": 42
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 47,
                  "end": 48
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 50,
                      "end": 56
                    },
                    "start": 50,
                    "end": 58
                  },
                  "start": 48,
                  "end": 58
                },
                "value": null,
                "start": 44,
                "end": 58
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 61,
                  "end": 62
                },
                "typeArguments": null,
                "start": 61,
                "end": 62
              },
              "start": 59,
              "end": 62
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 18,
            "end": 63
          }
        ],
        "start": 12,
        "end": 65
      },
      "declare": false,
      "start": 0,
      "end": 65
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 76,
        "end": 79
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
              "type": "TSNumberKeyword",
              "start": 83,
              "end": 89
            },
            "start": 81,
            "end": 89
          },
          "start": 80,
          "end": 89
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 94,
              "end": 100
            },
            "start": 92,
            "end": 100
          },
          "start": 91,
          "end": 100
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 105,
            "end": 106
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 108,
                "end": 114
              },
              "start": 108,
              "end": 116
            },
            "start": 106,
            "end": 116
          },
          "value": null,
          "start": 102,
          "end": 116
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 118,
        "end": 121
      },
      "expression": false,
      "start": 67,
      "end": 121
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 130,
                  "end": 136
                },
                "start": 130,
                "end": 138
              },
              "start": 128,
              "end": 138
            },
            "start": 127,
            "end": 138
          },
          "init": null,
          "definite": false,
          "start": 127,
          "end": 138
        }
      ],
      "declare": false,
      "start": 123,
      "end": 139
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
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 147,
                  "end": 153
                },
                "start": 147,
                "end": 155
              },
              "start": 145,
              "end": 155
            },
            "start": 144,
            "end": 155
          },
          "init": null,
          "definite": false,
          "start": 144,
          "end": 155
        }
      ],
      "declare": false,
      "start": 140,
      "end": 156
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 166,
                  "end": 167
                },
                "typeArguments": null,
                "start": 166,
                "end": 167
              },
              "start": 164,
              "end": 167
            },
            "start": 161,
            "end": 167
          },
          "init": null,
          "definite": false,
          "start": 161,
          "end": 167
        }
      ],
      "declare": false,
      "start": 157,
      "end": 168
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
            "name": "xa",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 177,
                    "end": 178
                  },
                  "typeArguments": null,
                  "start": 177,
                  "end": 178
                },
                "start": 177,
                "end": 180
              },
              "start": 175,
              "end": 180
            },
            "start": 173,
            "end": 180
          },
          "init": null,
          "definite": false,
          "start": 173,
          "end": 180
        }
      ],
      "declare": false,
      "start": 169,
      "end": 181
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 183,
          "end": 186
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 187,
            "end": 188
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 190,
            "end": 191
          },
          {
            "type": "Literal",
            "value": "abc",
            "raw": "\"abc\"",
            "start": 193,
            "end": 198
          }
        ],
        "optional": false,
        "start": 183,
        "end": 199
      },
      "directive": null,
      "start": 183,
      "end": 200
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 201,
          "end": 204
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 205,
            "end": 206
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 208,
            "end": 209
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 214,
              "end": 215
            },
            "start": 211,
            "end": 215
          }
        ],
        "optional": false,
        "start": 201,
        "end": 216
      },
      "directive": null,
      "start": 201,
      "end": 217
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 218,
          "end": 221
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 222,
            "end": 223
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 225,
            "end": 226
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 231,
              "end": 232
            },
            "start": 228,
            "end": 232
          },
          {
            "type": "Literal",
            "value": "abc",
            "raw": "\"abc\"",
            "start": 234,
            "end": 239
          }
        ],
        "optional": false,
        "start": 218,
        "end": 240
      },
      "directive": null,
      "start": 218,
      "end": 241
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 243,
            "end": 246
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 247,
            "end": 250
          },
          "optional": false,
          "computed": false,
          "start": 243,
          "end": 250
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 251,
            "end": 252
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 254,
            "end": 255
          },
          {
            "type": "Literal",
            "value": "abc",
            "raw": "\"abc\"",
            "start": 257,
            "end": 262
          }
        ],
        "optional": false,
        "start": 243,
        "end": 263
      },
      "directive": null,
      "start": 243,
      "end": 264
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 265,
            "end": 268
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 269,
            "end": 272
          },
          "optional": false,
          "computed": false,
          "start": 265,
          "end": 272
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 273,
            "end": 274
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 276,
            "end": 277
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 282,
              "end": 283
            },
            "start": 279,
            "end": 283
          }
        ],
        "optional": false,
        "start": 265,
        "end": 284
      },
      "directive": null,
      "start": 265,
      "end": 285
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 286,
            "end": 289
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 290,
            "end": 293
          },
          "optional": false,
          "computed": false,
          "start": 286,
          "end": 293
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 294,
            "end": 295
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 297,
            "end": 298
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 303,
              "end": 304
            },
            "start": 300,
            "end": 304
          },
          {
            "type": "Literal",
            "value": "abc",
            "raw": "\"abc\"",
            "start": 306,
            "end": 311
          }
        ],
        "optional": false,
        "start": 286,
        "end": 312
      },
      "directive": null,
      "start": 286,
      "end": 313
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
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 315,
                "end": 318
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 319,
                "end": 322
              },
              "optional": false,
              "computed": false,
              "start": 315,
              "end": 322
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 323,
                "end": 324
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 326,
                "end": 327
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 332,
                  "end": 333
                },
                "start": 329,
                "end": 333
              }
            ],
            "optional": false,
            "start": 315,
            "end": 334
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 335,
            "end": 338
          },
          "optional": false,
          "computed": false,
          "start": 315,
          "end": 338
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 339,
            "end": 340
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 342,
            "end": 343
          },
          {
            "type": "Literal",
            "value": "abc",
            "raw": "\"abc\"",
            "start": 345,
            "end": 350
          }
        ],
        "optional": false,
        "start": 315,
        "end": 351
      },
      "directive": null,
      "start": 315,
      "end": 352
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
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 353,
                "end": 356
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 357,
                "end": 360
              },
              "optional": false,
              "computed": false,
              "start": 353,
              "end": 360
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 361,
                "end": 362
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 364,
                "end": 365
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 370,
                  "end": 371
                },
                "start": 367,
                "end": 371
              }
            ],
            "optional": false,
            "start": 353,
            "end": 372
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 373,
            "end": 376
          },
          "optional": false,
          "computed": false,
          "start": 353,
          "end": 376
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 377,
            "end": 378
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 380,
            "end": 381
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 386,
              "end": 387
            },
            "start": 383,
            "end": 387
          }
        ],
        "optional": false,
        "start": 353,
        "end": 388
      },
      "directive": null,
      "start": 353,
      "end": 389
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
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 390,
                "end": 393
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 394,
                "end": 397
              },
              "optional": false,
              "computed": false,
              "start": 390,
              "end": 397
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 398,
                "end": 399
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 401,
                "end": 402
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 407,
                  "end": 408
                },
                "start": 404,
                "end": 408
              }
            ],
            "optional": false,
            "start": 390,
            "end": 409
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 410,
            "end": 413
          },
          "optional": false,
          "computed": false,
          "start": 390,
          "end": 413
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 414,
            "end": 415
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 417,
            "end": 418
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 423,
              "end": 424
            },
            "start": 420,
            "end": 424
          },
          {
            "type": "Literal",
            "value": "abc",
            "raw": "\"abc\"",
            "start": 426,
            "end": 431
          }
        ],
        "optional": false,
        "start": 390,
        "end": 432
      },
      "directive": null,
      "start": 390,
      "end": 433
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 436,
            "end": 439
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 440,
            "end": 443
          },
          "optional": false,
          "computed": false,
          "start": 436,
          "end": 443
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 445,
            "end": 446
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 448,
            "end": 449
          },
          {
            "type": "Literal",
            "value": "abc",
            "raw": "\"abc\"",
            "start": 451,
            "end": 456
          }
        ],
        "optional": false,
        "start": 435,
        "end": 457
      },
      "directive": null,
      "start": 435,
      "end": 458
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 460,
            "end": 463
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 464,
            "end": 467
          },
          "optional": false,
          "computed": false,
          "start": 460,
          "end": 467
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 469,
            "end": 470
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 472,
            "end": 473
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 478,
              "end": 479
            },
            "start": 475,
            "end": 479
          }
        ],
        "optional": false,
        "start": 459,
        "end": 480
      },
      "directive": null,
      "start": 459,
      "end": 481
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 483,
            "end": 486
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 487,
            "end": 490
          },
          "optional": false,
          "computed": false,
          "start": 483,
          "end": 490
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 492,
            "end": 493
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 495,
            "end": 496
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 501,
              "end": 502
            },
            "start": 498,
            "end": 502
          },
          {
            "type": "Literal",
            "value": "abc",
            "raw": "\"abc\"",
            "start": 504,
            "end": 509
          }
        ],
        "optional": false,
        "start": 482,
        "end": 510
      },
      "directive": null,
      "start": 482,
      "end": 511
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
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 515,
                "end": 518
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 519,
                "end": 522
              },
              "optional": false,
              "computed": false,
              "start": 515,
              "end": 522
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 524,
                "end": 525
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 527,
                "end": 528
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 533,
                  "end": 534
                },
                "start": 530,
                "end": 534
              }
            ],
            "optional": false,
            "start": 514,
            "end": 535
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 536,
            "end": 539
          },
          "optional": false,
          "computed": false,
          "start": 514,
          "end": 539
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 541,
            "end": 542
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 544,
            "end": 545
          },
          {
            "type": "Literal",
            "value": "abc",
            "raw": "\"abc\"",
            "start": 547,
            "end": 552
          }
        ],
        "optional": false,
        "start": 513,
        "end": 553
      },
      "directive": null,
      "start": 513,
      "end": 554
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
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 557,
                "end": 560
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 561,
                "end": 564
              },
              "optional": false,
              "computed": false,
              "start": 557,
              "end": 564
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 566,
                "end": 567
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 569,
                "end": 570
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 575,
                  "end": 576
                },
                "start": 572,
                "end": 576
              }
            ],
            "optional": false,
            "start": 556,
            "end": 577
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 578,
            "end": 581
          },
          "optional": false,
          "computed": false,
          "start": 556,
          "end": 581
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 583,
            "end": 584
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 586,
            "end": 587
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 592,
              "end": 593
            },
            "start": 589,
            "end": 593
          }
        ],
        "optional": false,
        "start": 555,
        "end": 594
      },
      "directive": null,
      "start": 555,
      "end": 595
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
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 598,
                "end": 601
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 602,
                "end": 605
              },
              "optional": false,
              "computed": false,
              "start": 598,
              "end": 605
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 607,
                "end": 608
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 610,
                "end": 611
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 616,
                  "end": 617
                },
                "start": 613,
                "end": 617
              }
            ],
            "optional": false,
            "start": 597,
            "end": 618
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 619,
            "end": 622
          },
          "optional": false,
          "computed": false,
          "start": 597,
          "end": 622
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 624,
            "end": 625
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 627,
            "end": 628
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 633,
              "end": 634
            },
            "start": 630,
            "end": 634
          },
          {
            "type": "Literal",
            "value": "abc",
            "raw": "\"abc\"",
            "start": 636,
            "end": 641
          }
        ],
        "optional": false,
        "start": 596,
        "end": 642
      },
      "directive": null,
      "start": 596,
      "end": 643
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "xa",
              "optional": false,
              "typeAnnotation": null,
              "start": 645,
              "end": 647
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 648,
              "end": 649
            },
            "optional": false,
            "computed": true,
            "start": 645,
            "end": 650
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 651,
            "end": 654
          },
          "optional": false,
          "computed": false,
          "start": 645,
          "end": 654
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 655,
            "end": 656
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 658,
            "end": 659
          },
          {
            "type": "Literal",
            "value": "abc",
            "raw": "\"abc\"",
            "start": 661,
            "end": 666
          }
        ],
        "optional": false,
        "start": 645,
        "end": 667
      },
      "directive": null,
      "start": 645,
      "end": 668
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "xa",
              "optional": false,
              "typeAnnotation": null,
              "start": 669,
              "end": 671
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 672,
              "end": 673
            },
            "optional": false,
            "computed": true,
            "start": 669,
            "end": 674
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 675,
            "end": 678
          },
          "optional": false,
          "computed": false,
          "start": 669,
          "end": 678
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 679,
            "end": 680
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 682,
            "end": 683
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 688,
              "end": 689
            },
            "start": 685,
            "end": 689
          }
        ],
        "optional": false,
        "start": 669,
        "end": 690
      },
      "directive": null,
      "start": 669,
      "end": 691
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "xa",
              "optional": false,
              "typeAnnotation": null,
              "start": 692,
              "end": 694
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 695,
              "end": 696
            },
            "optional": false,
            "computed": true,
            "start": 692,
            "end": 697
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 698,
            "end": 701
          },
          "optional": false,
          "computed": false,
          "start": 692,
          "end": 701
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 702,
            "end": 703
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 705,
            "end": 706
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 711,
              "end": 712
            },
            "start": 708,
            "end": 712
          },
          {
            "type": "Literal",
            "value": "abc",
            "raw": "\"abc\"",
            "start": 714,
            "end": 719
          }
        ],
        "optional": false,
        "start": 692,
        "end": 720
      },
      "directive": null,
      "start": 692,
      "end": 721
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Function",
              "optional": false,
              "typeAnnotation": null,
              "start": 725,
              "end": 733
            },
            "typeArguments": null,
            "start": 725,
            "end": 733
          },
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "xa",
                "optional": false,
                "typeAnnotation": null,
                "start": 734,
                "end": 736
              },
              "property": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 737,
                "end": 738
              },
              "optional": false,
              "computed": true,
              "start": 734,
              "end": 739
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 740,
              "end": 743
            },
            "optional": false,
            "computed": false,
            "start": 734,
            "end": 743
          },
          "start": 724,
          "end": 743
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 749,
                  "end": 750
                },
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 752,
                  "end": 753
                },
                {
                  "type": "Literal",
                  "value": "abc",
                  "raw": "\"abc\"",
                  "start": 755,
                  "end": 760
                }
              ],
              "start": 748,
              "end": 761
            },
            "start": 745,
            "end": 761
          }
        ],
        "optional": false,
        "start": 723,
        "end": 762
      },
      "directive": null,
      "start": 723,
      "end": 763
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 771,
        "end": 772
      },
      "typeParameters": null,
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 779,
              "end": 790
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "type": "TSNumberKeyword",
                      "start": 794,
                      "end": 800
                    },
                    "start": 792,
                    "end": 800
                  },
                  "start": 791,
                  "end": 800
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 805,
                      "end": 811
                    },
                    "start": 803,
                    "end": 811
                  },
                  "start": 802,
                  "end": 811
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 816,
                    "end": 817
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 819,
                        "end": 825
                      },
                      "start": 819,
                      "end": 827
                    },
                    "start": 817,
                    "end": 827
                  },
                  "value": null,
                  "start": 813,
                  "end": 827
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
                          "type": "ThisExpression",
                          "start": 839,
                          "end": 843
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 844,
                          "end": 847
                        },
                        "optional": false,
                        "computed": false,
                        "start": 839,
                        "end": 847
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 848,
                          "end": 849
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 851,
                          "end": 852
                        }
                      ],
                      "optional": false,
                      "start": 839,
                      "end": 853
                    },
                    "directive": null,
                    "start": 839,
                    "end": 854
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 863,
                          "end": 867
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 868,
                          "end": 871
                        },
                        "optional": false,
                        "computed": false,
                        "start": 863,
                        "end": 871
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 872,
                          "end": 873
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 875,
                          "end": 876
                        },
                        {
                          "type": "SpreadElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 881,
                            "end": 882
                          },
                          "start": 878,
                          "end": 882
                        }
                      ],
                      "optional": false,
                      "start": 863,
                      "end": 883
                    },
                    "directive": null,
                    "start": 863,
                    "end": 884
                  }
                ],
                "start": 829,
                "end": 890
              },
              "expression": false,
              "start": 790,
              "end": 890
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 779,
            "end": 890
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 895,
              "end": 898
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "type": "TSNumberKeyword",
                      "start": 902,
                      "end": 908
                    },
                    "start": 900,
                    "end": 908
                  },
                  "start": 899,
                  "end": 908
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 913,
                      "end": 919
                    },
                    "start": 911,
                    "end": 919
                  },
                  "start": 910,
                  "end": 919
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 924,
                    "end": 925
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 927,
                        "end": 933
                      },
                      "start": 927,
                      "end": 935
                    },
                    "start": 925,
                    "end": 935
                  },
                  "value": null,
                  "start": 921,
                  "end": 935
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 937,
                "end": 944
              },
              "expression": false,
              "start": 898,
              "end": 944
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 895,
            "end": 944
          }
        ],
        "start": 773,
        "end": 946
      },
      "abstract": false,
      "declare": false,
      "start": 765,
      "end": 946
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 954,
        "end": 955
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 964,
        "end": 965
      },
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 972,
              "end": 983
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 996,
                        "end": 1001
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1002,
                          "end": 1003
                        },
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 1005,
                          "end": 1006
                        }
                      ],
                      "optional": false,
                      "start": 996,
                      "end": 1007
                    },
                    "directive": null,
                    "start": 996,
                    "end": 1008
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 1017,
                        "end": 1022
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1023,
                          "end": 1024
                        },
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 1026,
                          "end": 1027
                        },
                        {
                          "type": "SpreadElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1032,
                            "end": 1033
                          },
                          "start": 1029,
                          "end": 1033
                        }
                      ],
                      "optional": false,
                      "start": 1017,
                      "end": 1034
                    },
                    "directive": null,
                    "start": 1017,
                    "end": 1035
                  }
                ],
                "start": 986,
                "end": 1041
              },
              "expression": false,
              "start": 983,
              "end": 1041
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 972,
            "end": 1041
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1046,
              "end": 1049
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
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
                          "type": "Super",
                          "start": 1062,
                          "end": 1067
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1068,
                          "end": 1071
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1062,
                        "end": 1071
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1072,
                          "end": 1073
                        },
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 1075,
                          "end": 1076
                        }
                      ],
                      "optional": false,
                      "start": 1062,
                      "end": 1077
                    },
                    "directive": null,
                    "start": 1062,
                    "end": 1078
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 1087,
                          "end": 1092
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1093,
                          "end": 1096
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1087,
                        "end": 1096
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1097,
                          "end": 1098
                        },
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 1100,
                          "end": 1101
                        },
                        {
                          "type": "SpreadElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1106,
                            "end": 1107
                          },
                          "start": 1103,
                          "end": 1107
                        }
                      ],
                      "optional": false,
                      "start": 1087,
                      "end": 1108
                    },
                    "directive": null,
                    "start": 1087,
                    "end": 1109
                  }
                ],
                "start": 1052,
                "end": 1115
              },
              "expression": false,
              "start": 1049,
              "end": 1115
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1046,
            "end": 1115
          }
        ],
        "start": 966,
        "end": 1117
      },
      "abstract": false,
      "declare": false,
      "start": 948,
      "end": 1117
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1117
}
```
