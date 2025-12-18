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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 115,
        "end": 118
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 122,
          "end": 126
        },
        "start": 120,
        "end": 126
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 136,
              "end": 145
            },
            "start": 129,
            "end": 145
          }
        ],
        "start": 127,
        "end": 147
      },
      "expression": false,
      "start": 106,
      "end": 147
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
                "type": "TSBooleanKeyword",
                "start": 156,
                "end": 163
              },
              "start": 154,
              "end": 163
            },
            "start": 153,
            "end": 163
          },
          "init": null,
          "definite": false,
          "start": 153,
          "end": 163
        }
      ],
      "declare": false,
      "start": 149,
      "end": 164
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
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 172,
                  "end": 178
                },
                "typeArguments": null,
                "start": 172,
                "end": 178
              },
              "start": 170,
              "end": 178
            },
            "start": 169,
            "end": 178
          },
          "init": null,
          "definite": false,
          "start": 169,
          "end": 178
        }
      ],
      "declare": false,
      "start": 165,
      "end": 179
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
                "type": "TSVoidKeyword",
                "start": 187,
                "end": 191
              },
              "start": 185,
              "end": 191
            },
            "start": 184,
            "end": 191
          },
          "init": null,
          "definite": false,
          "start": 184,
          "end": 191
        }
      ],
      "declare": false,
      "start": 180,
      "end": 192
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
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Number",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 200,
                  "end": 206
                },
                "typeArguments": null,
                "start": 200,
                "end": 206
              },
              "start": 198,
              "end": 206
            },
            "start": 197,
            "end": 206
          },
          "init": null,
          "definite": false,
          "start": 197,
          "end": 206
        }
      ],
      "declare": false,
      "start": 193,
      "end": 207
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
            "start": 243,
            "end": 245
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 248,
              "end": 257
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 260,
              "end": 261
            },
            "start": 248,
            "end": 261
          },
          "definite": false,
          "start": 243,
          "end": 261
        }
      ],
      "declare": false,
      "start": 239,
      "end": 262
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
            "start": 267,
            "end": 269
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 272,
              "end": 281
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 284,
              "end": 285
            },
            "start": 272,
            "end": 285
          },
          "definite": false,
          "start": 267,
          "end": 285
        }
      ],
      "declare": false,
      "start": 263,
      "end": 286
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
            "start": 291,
            "end": 293
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 296,
              "end": 305
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 308,
              "end": 309
            },
            "start": 296,
            "end": 309
          },
          "definite": false,
          "start": 291,
          "end": 309
        }
      ],
      "declare": false,
      "start": 287,
      "end": 310
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
            "start": 315,
            "end": 317
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 320,
              "end": 321
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 333
            },
            "start": 320,
            "end": 333
          },
          "definite": false,
          "start": 315,
          "end": 333
        }
      ],
      "declare": false,
      "start": 311,
      "end": 334
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
            "start": 339,
            "end": 341
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 344,
              "end": 345
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 348,
              "end": 357
            },
            "start": 344,
            "end": 357
          },
          "definite": false,
          "start": 339,
          "end": 357
        }
      ],
      "declare": false,
      "start": 335,
      "end": 358
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
            "start": 363,
            "end": 365
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 368,
              "end": 377
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 380,
              "end": 381
            },
            "start": 368,
            "end": 381
          },
          "definite": false,
          "start": 363,
          "end": 381
        }
      ],
      "declare": false,
      "start": 359,
      "end": 382
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
            "start": 403,
            "end": 405
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 408,
              "end": 417
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 420,
              "end": 421
            },
            "start": 408,
            "end": 421
          },
          "definite": false,
          "start": 403,
          "end": 421
        }
      ],
      "declare": false,
      "start": 399,
      "end": 422
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
            "name": "r8",
            "optional": false,
            "typeAnnotation": null,
            "start": 427,
            "end": 429
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 432,
              "end": 441
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 444,
              "end": 448
            },
            "start": 432,
            "end": 448
          },
          "definite": false,
          "start": 427,
          "end": 448
        }
      ],
      "declare": false,
      "start": 423,
      "end": 449
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
            "start": 454,
            "end": 456
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 459,
              "end": 468
            },
            "operator": "+",
            "right": {
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
                    "start": 473,
                    "end": 474
                  },
                  "value": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 476,
                    "end": 478
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 473,
                  "end": 478
                }
              ],
              "start": 471,
              "end": 480
            },
            "start": 459,
            "end": 480
          },
          "definite": false,
          "start": 454,
          "end": 480
        }
      ],
      "declare": false,
      "start": 450,
      "end": 481
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
            "start": 486,
            "end": 489
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 492,
              "end": 501
            },
            "operator": "+",
            "right": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 504,
                "end": 507
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 504,
              "end": 509
            },
            "start": 492,
            "end": 509
          },
          "definite": false,
          "start": 486,
          "end": 509
        }
      ],
      "declare": false,
      "start": 482,
      "end": 510
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
            "name": "r11",
            "optional": false,
            "typeAnnotation": null,
            "start": 515,
            "end": 518
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 521,
              "end": 530
            },
            "operator": "+",
            "right": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 540,
                "end": 543
              },
              "id": null,
              "generator": false,
              "start": 534,
              "end": 543
            },
            "start": 521,
            "end": 544
          },
          "definite": false,
          "start": 515,
          "end": 544
        }
      ],
      "declare": false,
      "start": 511,
      "end": 545
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 106,
  "end": 545
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 106,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 115,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 120,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 122,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 127,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 129,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 136,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 146,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 149,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 156,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 165,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 172,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 180,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 185,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 187,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 193,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 200,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 206,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 239,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 243,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 248,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 261,
    "end": 262
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 263,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 267,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 272,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 285,
    "end": 286
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 287,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 291,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 296,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 309,
    "end": 310
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 311,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 315,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 324,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 333,
    "end": 334
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 335,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 339,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 348,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 357,
    "end": 358
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 359,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 363,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 368,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 381,
    "end": 382
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 399,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 403,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 408,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 421,
    "end": 422
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 423,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "r8",
    "start": 427,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 432,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 442,
    "end": 443
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 444,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 448,
    "end": 449
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 450,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 454,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 459,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 474,
    "end": 475
  },
  {
    "type": "String",
    "value": "''",
    "start": 476,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 480,
    "end": 481
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 482,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 486,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 492,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 504,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 509,
    "end": 510
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 511,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "r11",
    "start": 515,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 521,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 537,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 544,
    "end": 545
  }
]
```
