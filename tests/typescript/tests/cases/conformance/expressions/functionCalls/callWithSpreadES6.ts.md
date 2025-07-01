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
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 18,
            "end": 60
          }
        ],
        "start": 12,
        "end": 62
      },
      "declare": false,
      "start": 0,
      "end": 62
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 76
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
              "start": 80,
              "end": 86
            },
            "start": 78,
            "end": 86
          },
          "start": 77,
          "end": 86
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
              "start": 91,
              "end": 97
            },
            "start": 89,
            "end": 97
          },
          "start": 88,
          "end": 97
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
            "start": 102,
            "end": 103
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 105,
                "end": 111
              },
              "start": 105,
              "end": 113
            },
            "start": 103,
            "end": 113
          },
          "value": null,
          "start": 99,
          "end": 113
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 115,
        "end": 118
      },
      "expression": false,
      "start": 64,
      "end": 118
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
                  "start": 127,
                  "end": 133
                },
                "start": 127,
                "end": 135
              },
              "start": 125,
              "end": 135
            },
            "start": 124,
            "end": 135
          },
          "init": null,
          "definite": false,
          "start": 124,
          "end": 135
        }
      ],
      "declare": false,
      "start": 120,
      "end": 136
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
                  "start": 144,
                  "end": 150
                },
                "start": 144,
                "end": 152
              },
              "start": 142,
              "end": 152
            },
            "start": 141,
            "end": 152
          },
          "init": null,
          "definite": false,
          "start": 141,
          "end": 152
        }
      ],
      "declare": false,
      "start": 137,
      "end": 153
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
                  "start": 163,
                  "end": 164
                },
                "typeArguments": null,
                "start": 163,
                "end": 164
              },
              "start": 161,
              "end": 164
            },
            "start": 158,
            "end": 164
          },
          "init": null,
          "definite": false,
          "start": 158,
          "end": 164
        }
      ],
      "declare": false,
      "start": 154,
      "end": 165
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
                    "start": 174,
                    "end": 175
                  },
                  "typeArguments": null,
                  "start": 174,
                  "end": 175
                },
                "start": 174,
                "end": 177
              },
              "start": 172,
              "end": 177
            },
            "start": 170,
            "end": 177
          },
          "init": null,
          "definite": false,
          "start": 170,
          "end": 177
        }
      ],
      "declare": false,
      "start": 166,
      "end": 178
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
          "start": 180,
          "end": 183
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 184,
            "end": 185
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 187,
            "end": 188
          },
          {
            "type": "Literal",
            "value": "abc",
            "raw": "\"abc\"",
            "start": 190,
            "end": 195
          }
        ],
        "optional": false,
        "start": 180,
        "end": 196
      },
      "directive": null,
      "start": 180,
      "end": 197
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
          "start": 198,
          "end": 201
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 202,
            "end": 203
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 205,
            "end": 206
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 211,
              "end": 212
            },
            "start": 208,
            "end": 212
          }
        ],
        "optional": false,
        "start": 198,
        "end": 213
      },
      "directive": null,
      "start": 198,
      "end": 214
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
          "start": 215,
          "end": 218
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 219,
            "end": 220
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 222,
            "end": 223
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 228,
              "end": 229
            },
            "start": 225,
            "end": 229
          },
          {
            "type": "Literal",
            "value": "abc",
            "raw": "\"abc\"",
            "start": 231,
            "end": 236
          }
        ],
        "optional": false,
        "start": 215,
        "end": 237
      },
      "directive": null,
      "start": 215,
      "end": 238
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
            "start": 240,
            "end": 243
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 244,
            "end": 247
          },
          "optional": false,
          "computed": false,
          "start": 240,
          "end": 247
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 248,
            "end": 249
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 251,
            "end": 252
          },
          {
            "type": "Literal",
            "value": "abc",
            "raw": "\"abc\"",
            "start": 254,
            "end": 259
          }
        ],
        "optional": false,
        "start": 240,
        "end": 260
      },
      "directive": null,
      "start": 240,
      "end": 261
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
            "start": 262,
            "end": 265
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 266,
            "end": 269
          },
          "optional": false,
          "computed": false,
          "start": 262,
          "end": 269
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 270,
            "end": 271
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 273,
            "end": 274
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 279,
              "end": 280
            },
            "start": 276,
            "end": 280
          }
        ],
        "optional": false,
        "start": 262,
        "end": 281
      },
      "directive": null,
      "start": 262,
      "end": 282
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
            "start": 283,
            "end": 286
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 287,
            "end": 290
          },
          "optional": false,
          "computed": false,
          "start": 283,
          "end": 290
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 291,
            "end": 292
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 294,
            "end": 295
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 300,
              "end": 301
            },
            "start": 297,
            "end": 301
          },
          {
            "type": "Literal",
            "value": "abc",
            "raw": "\"abc\"",
            "start": 303,
            "end": 308
          }
        ],
        "optional": false,
        "start": 283,
        "end": 309
      },
      "directive": null,
      "start": 283,
      "end": 310
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
            "start": 313,
            "end": 316
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 317,
            "end": 320
          },
          "optional": false,
          "computed": false,
          "start": 313,
          "end": 320
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 322,
            "end": 323
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 325,
            "end": 326
          },
          {
            "type": "Literal",
            "value": "abc",
            "raw": "\"abc\"",
            "start": 328,
            "end": 333
          }
        ],
        "optional": false,
        "start": 312,
        "end": 334
      },
      "directive": null,
      "start": 312,
      "end": 335
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
            "start": 337,
            "end": 340
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 341,
            "end": 344
          },
          "optional": false,
          "computed": false,
          "start": 337,
          "end": 344
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 346,
            "end": 347
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 349,
            "end": 350
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 355,
              "end": 356
            },
            "start": 352,
            "end": 356
          }
        ],
        "optional": false,
        "start": 336,
        "end": 357
      },
      "directive": null,
      "start": 336,
      "end": 358
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
            "start": 360,
            "end": 363
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 364,
            "end": 367
          },
          "optional": false,
          "computed": false,
          "start": 360,
          "end": 367
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 369,
            "end": 370
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 372,
            "end": 373
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 378,
              "end": 379
            },
            "start": 375,
            "end": 379
          },
          {
            "type": "Literal",
            "value": "abc",
            "raw": "\"abc\"",
            "start": 381,
            "end": 386
          }
        ],
        "optional": false,
        "start": 359,
        "end": 387
      },
      "directive": null,
      "start": 359,
      "end": 388
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
              "start": 390,
              "end": 392
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 393,
              "end": 394
            },
            "optional": false,
            "computed": true,
            "start": 390,
            "end": 395
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 396,
            "end": 399
          },
          "optional": false,
          "computed": false,
          "start": 390,
          "end": 399
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 400,
            "end": 401
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 403,
            "end": 404
          },
          {
            "type": "Literal",
            "value": "abc",
            "raw": "\"abc\"",
            "start": 406,
            "end": 411
          }
        ],
        "optional": false,
        "start": 390,
        "end": 412
      },
      "directive": null,
      "start": 390,
      "end": 413
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
              "start": 414,
              "end": 416
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 417,
              "end": 418
            },
            "optional": false,
            "computed": true,
            "start": 414,
            "end": 419
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 420,
            "end": 423
          },
          "optional": false,
          "computed": false,
          "start": 414,
          "end": 423
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 424,
            "end": 425
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 427,
            "end": 428
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 433,
              "end": 434
            },
            "start": 430,
            "end": 434
          }
        ],
        "optional": false,
        "start": 414,
        "end": 435
      },
      "directive": null,
      "start": 414,
      "end": 436
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
              "start": 437,
              "end": 439
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 440,
              "end": 441
            },
            "optional": false,
            "computed": true,
            "start": 437,
            "end": 442
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 443,
            "end": 446
          },
          "optional": false,
          "computed": false,
          "start": 437,
          "end": 446
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 447,
            "end": 448
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 450,
            "end": 451
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 456,
              "end": 457
            },
            "start": 453,
            "end": 457
          },
          {
            "type": "Literal",
            "value": "abc",
            "raw": "\"abc\"",
            "start": 459,
            "end": 464
          }
        ],
        "optional": false,
        "start": 437,
        "end": 465
      },
      "directive": null,
      "start": 437,
      "end": 466
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
              "start": 470,
              "end": 478
            },
            "typeArguments": null,
            "start": 470,
            "end": 478
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
                "start": 479,
                "end": 481
              },
              "property": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 482,
                "end": 483
              },
              "optional": false,
              "computed": true,
              "start": 479,
              "end": 484
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 485,
              "end": 488
            },
            "optional": false,
            "computed": false,
            "start": 479,
            "end": 488
          },
          "start": 469,
          "end": 488
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
                  "start": 494,
                  "end": 495
                },
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 497,
                  "end": 498
                },
                {
                  "type": "Literal",
                  "value": "abc",
                  "raw": "\"abc\"",
                  "start": 500,
                  "end": 505
                }
              ],
              "start": 493,
              "end": 506
            },
            "start": 490,
            "end": 506
          }
        ],
        "optional": false,
        "start": 468,
        "end": 507
      },
      "directive": null,
      "start": 468,
      "end": 508
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
        "start": 516,
        "end": 517
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
              "start": 524,
              "end": 535
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
                      "start": 539,
                      "end": 545
                    },
                    "start": 537,
                    "end": 545
                  },
                  "start": 536,
                  "end": 545
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
                      "start": 550,
                      "end": 556
                    },
                    "start": 548,
                    "end": 556
                  },
                  "start": 547,
                  "end": 556
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
                    "start": 561,
                    "end": 562
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 564,
                        "end": 570
                      },
                      "start": 564,
                      "end": 572
                    },
                    "start": 562,
                    "end": 572
                  },
                  "value": null,
                  "start": 558,
                  "end": 572
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
                          "start": 584,
                          "end": 588
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 589,
                          "end": 592
                        },
                        "optional": false,
                        "computed": false,
                        "start": 584,
                        "end": 592
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 593,
                          "end": 594
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 596,
                          "end": 597
                        }
                      ],
                      "optional": false,
                      "start": 584,
                      "end": 598
                    },
                    "directive": null,
                    "start": 584,
                    "end": 599
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 608,
                          "end": 612
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 613,
                          "end": 616
                        },
                        "optional": false,
                        "computed": false,
                        "start": 608,
                        "end": 616
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 617,
                          "end": 618
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 620,
                          "end": 621
                        },
                        {
                          "type": "SpreadElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 626,
                            "end": 627
                          },
                          "start": 623,
                          "end": 627
                        }
                      ],
                      "optional": false,
                      "start": 608,
                      "end": 628
                    },
                    "directive": null,
                    "start": 608,
                    "end": 629
                  }
                ],
                "start": 574,
                "end": 635
              },
              "expression": false,
              "start": 535,
              "end": 635
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 524,
            "end": 635
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
              "start": 640,
              "end": 643
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
                      "start": 647,
                      "end": 653
                    },
                    "start": 645,
                    "end": 653
                  },
                  "start": 644,
                  "end": 653
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
                      "start": 658,
                      "end": 664
                    },
                    "start": 656,
                    "end": 664
                  },
                  "start": 655,
                  "end": 664
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
                    "start": 669,
                    "end": 670
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 672,
                        "end": 678
                      },
                      "start": 672,
                      "end": 680
                    },
                    "start": 670,
                    "end": 680
                  },
                  "value": null,
                  "start": 666,
                  "end": 680
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 682,
                "end": 689
              },
              "expression": false,
              "start": 643,
              "end": 689
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 640,
            "end": 689
          }
        ],
        "start": 518,
        "end": 691
      },
      "abstract": false,
      "declare": false,
      "start": 510,
      "end": 691
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
        "start": 699,
        "end": 700
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 709,
        "end": 710
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
              "start": 717,
              "end": 728
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
                        "start": 741,
                        "end": 746
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 747,
                          "end": 748
                        },
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 750,
                          "end": 751
                        }
                      ],
                      "optional": false,
                      "start": 741,
                      "end": 752
                    },
                    "directive": null,
                    "start": 741,
                    "end": 753
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 762,
                        "end": 767
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 768,
                          "end": 769
                        },
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 771,
                          "end": 772
                        },
                        {
                          "type": "SpreadElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 777,
                            "end": 778
                          },
                          "start": 774,
                          "end": 778
                        }
                      ],
                      "optional": false,
                      "start": 762,
                      "end": 779
                    },
                    "directive": null,
                    "start": 762,
                    "end": 780
                  }
                ],
                "start": 731,
                "end": 786
              },
              "expression": false,
              "start": 728,
              "end": 786
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 717,
            "end": 786
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
              "start": 791,
              "end": 794
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
                          "start": 807,
                          "end": 812
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 813,
                          "end": 816
                        },
                        "optional": false,
                        "computed": false,
                        "start": 807,
                        "end": 816
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 817,
                          "end": 818
                        },
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 820,
                          "end": 821
                        }
                      ],
                      "optional": false,
                      "start": 807,
                      "end": 822
                    },
                    "directive": null,
                    "start": 807,
                    "end": 823
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 832,
                          "end": 837
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 838,
                          "end": 841
                        },
                        "optional": false,
                        "computed": false,
                        "start": 832,
                        "end": 841
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 842,
                          "end": 843
                        },
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 845,
                          "end": 846
                        },
                        {
                          "type": "SpreadElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 851,
                            "end": 852
                          },
                          "start": 848,
                          "end": 852
                        }
                      ],
                      "optional": false,
                      "start": 832,
                      "end": 853
                    },
                    "directive": null,
                    "start": 832,
                    "end": 854
                  }
                ],
                "start": 797,
                "end": 860
              },
              "expression": false,
              "start": 794,
              "end": 860
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 791,
            "end": 860
          }
        ],
        "start": 711,
        "end": 862
      },
      "abstract": false,
      "declare": false,
      "start": 693,
      "end": 862
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 862
}
```
