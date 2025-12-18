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
        "start": 68,
        "end": 71
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
              "start": 72,
              "end": 73
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 72,
            "end": 73
          }
        ],
        "start": 71,
        "end": 74
      },
      "params": [
        {
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
                "start": 78,
                "end": 79
              },
              "typeArguments": null,
              "start": 78,
              "end": 79
            },
            "start": 76,
            "end": 79
          },
          "start": 75,
          "end": 79
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 94,
                      "end": 97
                    },
                    "start": 92,
                    "end": 97
                  },
                  "start": 91,
                  "end": 97
                },
                "init": null,
                "definite": false,
                "start": 91,
                "end": 97
              }
            ],
            "declare": false,
            "start": 87,
            "end": 98
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
                      "type": "TSBooleanKeyword",
                      "start": 110,
                      "end": 117
                    },
                    "start": 108,
                    "end": 117
                  },
                  "start": 107,
                  "end": 117
                },
                "init": null,
                "definite": false,
                "start": 107,
                "end": 117
              }
            ],
            "declare": false,
            "start": 103,
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 130,
                      "end": 136
                    },
                    "start": 128,
                    "end": 136
                  },
                  "start": 127,
                  "end": 136
                },
                "init": null,
                "definite": false,
                "start": 127,
                "end": 136
              }
            ],
            "declare": false,
            "start": 123,
            "end": 137
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
                      "type": "TSStringKeyword",
                      "start": 149,
                      "end": 155
                    },
                    "start": 147,
                    "end": 155
                  },
                  "start": 146,
                  "end": 155
                },
                "init": null,
                "definite": false,
                "start": 146,
                "end": 155
              }
            ],
            "declare": false,
            "start": 142,
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
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 168,
                      "end": 170
                    },
                    "start": 166,
                    "end": 170
                  },
                  "start": 165,
                  "end": 170
                },
                "init": null,
                "definite": false,
                "start": 165,
                "end": 170
              }
            ],
            "declare": false,
            "start": 161,
            "end": 171
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
                  "name": "r1a1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 181,
                  "end": 185
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 188,
                    "end": 189
                  },
                  "operator": "**",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 193,
                    "end": 194
                  },
                  "start": 188,
                  "end": 194
                },
                "definite": false,
                "start": 181,
                "end": 194
              }
            ],
            "declare": false,
            "start": 177,
            "end": 195
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
                  "name": "r2a1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 204,
                  "end": 208
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 211,
                    "end": 212
                  },
                  "operator": "**",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 216,
                    "end": 217
                  },
                  "start": 211,
                  "end": 217
                },
                "definite": false,
                "start": 204,
                "end": 217
              }
            ],
            "declare": false,
            "start": 200,
            "end": 218
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
                  "name": "r1b1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 227,
                  "end": 231
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 234,
                    "end": 235
                  },
                  "operator": "**",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 239,
                    "end": 240
                  },
                  "start": 234,
                  "end": 240
                },
                "definite": false,
                "start": 227,
                "end": 240
              }
            ],
            "declare": false,
            "start": 223,
            "end": 241
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
                  "name": "r2b1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 250,
                  "end": 254
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 257,
                    "end": 258
                  },
                  "operator": "**",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 262,
                    "end": 263
                  },
                  "start": 257,
                  "end": 263
                },
                "definite": false,
                "start": 250,
                "end": 263
              }
            ],
            "declare": false,
            "start": 246,
            "end": 264
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
                  "name": "r1c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 273,
                  "end": 277
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 280,
                    "end": 281
                  },
                  "operator": "**",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 285,
                    "end": 286
                  },
                  "start": 280,
                  "end": 286
                },
                "definite": false,
                "start": 273,
                "end": 286
              }
            ],
            "declare": false,
            "start": 269,
            "end": 287
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
                  "name": "r2c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 296,
                  "end": 300
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 303,
                    "end": 304
                  },
                  "operator": "**",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 308,
                    "end": 309
                  },
                  "start": 303,
                  "end": 309
                },
                "definite": false,
                "start": 296,
                "end": 309
              }
            ],
            "declare": false,
            "start": 292,
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
                  "name": "r1d1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 319,
                  "end": 323
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 326,
                    "end": 327
                  },
                  "operator": "**",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 331,
                    "end": 332
                  },
                  "start": 326,
                  "end": 332
                },
                "definite": false,
                "start": 319,
                "end": 332
              }
            ],
            "declare": false,
            "start": 315,
            "end": 333
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
                  "name": "r2d1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 342,
                  "end": 346
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 349,
                    "end": 350
                  },
                  "operator": "**",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 354,
                    "end": 355
                  },
                  "start": 349,
                  "end": 355
                },
                "definite": false,
                "start": 342,
                "end": 355
              }
            ],
            "declare": false,
            "start": 338,
            "end": 356
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
                  "name": "r1e1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 365,
                  "end": 369
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 372,
                    "end": 373
                  },
                  "operator": "**",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 377,
                    "end": 378
                  },
                  "start": 372,
                  "end": 378
                },
                "definite": false,
                "start": 365,
                "end": 378
              }
            ],
            "declare": false,
            "start": 361,
            "end": 379
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
                  "name": "r2e1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 388,
                  "end": 392
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 395,
                    "end": 396
                  },
                  "operator": "**",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 400,
                    "end": 401
                  },
                  "start": 395,
                  "end": 401
                },
                "definite": false,
                "start": 388,
                "end": 401
              }
            ],
            "declare": false,
            "start": 384,
            "end": 402
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
                  "name": "r1f1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 411,
                  "end": 415
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 418,
                    "end": 419
                  },
                  "operator": "**",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 423,
                    "end": 424
                  },
                  "start": 418,
                  "end": 424
                },
                "definite": false,
                "start": 411,
                "end": 424
              }
            ],
            "declare": false,
            "start": 407,
            "end": 425
          }
        ],
        "start": 81,
        "end": 427
      },
      "expression": false,
      "start": 59,
      "end": 427
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 59,
  "end": 427
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 59,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 68,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 87,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 94,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 103,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 110,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 117,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 123,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 130,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 136,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 142,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 149,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 161,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 170,
    "end": 171
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 177,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "r1a1",
    "start": 181,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 190,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 194,
    "end": 195
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 200,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "r2a1",
    "start": 204,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 213,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 217,
    "end": 218
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 223,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "r1b1",
    "start": 227,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 236,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 240,
    "end": 241
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 246,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "r2b1",
    "start": 250,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 259,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 263,
    "end": 264
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 269,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "r1c1",
    "start": 273,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 282,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 286,
    "end": 287
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 292,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "r2c1",
    "start": 296,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 305,
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
    "start": 315,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "r1d1",
    "start": 319,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 328,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 332,
    "end": 333
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 338,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "r2d1",
    "start": 342,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 351,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 355,
    "end": 356
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 361,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "r1e1",
    "start": 365,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 374,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 378,
    "end": 379
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 384,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "r2e1",
    "start": 388,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 397,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 401,
    "end": 402
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 407,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "r1f1",
    "start": 411,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 420,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 426,
    "end": 427
  }
]
```
