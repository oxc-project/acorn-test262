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
        "name": "Runnable",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 18
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
              "name": "isRunning",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 34
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 36,
                "end": 43
              },
              "start": 34,
              "end": 43
            },
            "accessibility": null,
            "static": false,
            "start": 25,
            "end": 44
          }
        ],
        "start": 19,
        "end": 46
      },
      "declare": false,
      "start": 0,
      "end": 46
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Refrigerator",
        "optional": false,
        "typeAnnotation": null,
        "start": 58,
        "end": 70
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Runnable",
            "optional": false,
            "typeAnnotation": null,
            "start": 79,
            "end": 87
          },
          "typeArguments": null,
          "start": 79,
          "end": 87
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
              "name": "makesFoodGoBrrr",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 109
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 111,
                "end": 118
              },
              "start": 109,
              "end": 118
            },
            "accessibility": null,
            "static": false,
            "start": 94,
            "end": 119
          }
        ],
        "start": 88,
        "end": 121
      },
      "declare": false,
      "start": 48,
      "end": 121
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
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
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 145,
                      "end": 150
                    },
                    "start": 145,
                    "end": 150
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Refrigerator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 153,
                      "end": 165
                    },
                    "typeArguments": null,
                    "start": 153,
                    "end": 165
                  }
                ],
                "start": 145,
                "end": 165
              },
              "start": 143,
              "end": 165
            },
            "start": 142,
            "end": 165
          },
          "init": null,
          "definite": false,
          "start": 142,
          "end": 165
        }
      ],
      "declare": false,
      "start": 138,
      "end": 166
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
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
                "start": 175,
                "end": 182
              },
              "start": 173,
              "end": 182
            },
            "start": 172,
            "end": 182
          },
          "init": null,
          "definite": false,
          "start": 172,
          "end": 182
        }
      ],
      "declare": false,
      "start": 168,
      "end": 183
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
          "start": 184,
          "end": 185
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 188,
            "end": 189
          },
          "operator": "===",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 194,
            "end": 195
          },
          "start": 188,
          "end": 195
        },
        "start": 184,
        "end": 195
      },
      "directive": null,
      "start": 184,
      "end": 196
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
          "start": 197,
          "end": 198
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 201,
            "end": 206
          },
          "operator": "===",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 211,
            "end": 212
          },
          "start": 201,
          "end": 212
        },
        "start": 197,
        "end": 212
      },
      "directive": null,
      "start": 197,
      "end": 212
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
          "start": 213,
          "end": 214
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 217,
            "end": 218
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 223,
            "end": 228
          },
          "start": 217,
          "end": 228
        },
        "start": 213,
        "end": 228
      },
      "directive": null,
      "start": 213,
      "end": 229
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
          "start": 230,
          "end": 231
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 234,
            "end": 239
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 244,
            "end": 249
          },
          "start": 234,
          "end": 249
        },
        "start": 230,
        "end": 249
      },
      "directive": null,
      "start": 230,
      "end": 250
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
          "start": 251,
          "end": 252
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 255,
            "end": 260
          },
          "operator": "===",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 265,
            "end": 266
          },
          "start": 255,
          "end": 266
        },
        "start": 251,
        "end": 266
      },
      "directive": null,
      "start": 251,
      "end": 267
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
          "start": 268,
          "end": 269
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 272,
            "end": 273
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 278,
            "end": 283
          },
          "start": 272,
          "end": 283
        },
        "start": 268,
        "end": 283
      },
      "directive": null,
      "start": 268,
      "end": 284
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
          "start": 285,
          "end": 286
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 289,
            "end": 290
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 295,
            "end": 300
          },
          "start": 289,
          "end": 300
        },
        "start": 285,
        "end": 300
      },
      "directive": null,
      "start": 285,
      "end": 301
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
          "start": 302,
          "end": 303
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 306,
            "end": 311
          },
          "operator": "===",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 316,
            "end": 317
          },
          "start": 306,
          "end": 317
        },
        "start": 302,
        "end": 317
      },
      "directive": null,
      "start": 302,
      "end": 318
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
          "start": 320,
          "end": 321
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 324,
            "end": 325
          },
          "operator": "!==",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 330,
            "end": 331
          },
          "start": 324,
          "end": 331
        },
        "start": 320,
        "end": 331
      },
      "directive": null,
      "start": 320,
      "end": 332
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
          "start": 333,
          "end": 334
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 337,
            "end": 342
          },
          "operator": "!==",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 347,
            "end": 348
          },
          "start": 337,
          "end": 348
        },
        "start": 333,
        "end": 348
      },
      "directive": null,
      "start": 333,
      "end": 348
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
          "start": 349,
          "end": 350
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 353,
            "end": 354
          },
          "operator": "!==",
          "right": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 359,
            "end": 364
          },
          "start": 353,
          "end": 364
        },
        "start": 349,
        "end": 364
      },
      "directive": null,
      "start": 349,
      "end": 365
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
          "start": 366,
          "end": 367
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 370,
            "end": 375
          },
          "operator": "!==",
          "right": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 380,
            "end": 385
          },
          "start": 370,
          "end": 385
        },
        "start": 366,
        "end": 385
      },
      "directive": null,
      "start": 366,
      "end": 386
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
          "start": 387,
          "end": 388
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 391,
            "end": 396
          },
          "operator": "!==",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 401,
            "end": 402
          },
          "start": 391,
          "end": 402
        },
        "start": 387,
        "end": 402
      },
      "directive": null,
      "start": 387,
      "end": 403
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
          "start": 404,
          "end": 405
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 408,
            "end": 409
          },
          "operator": "!==",
          "right": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 414,
            "end": 419
          },
          "start": 408,
          "end": 419
        },
        "start": 404,
        "end": 419
      },
      "directive": null,
      "start": 404,
      "end": 420
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
          "start": 421,
          "end": 422
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 425,
            "end": 426
          },
          "operator": "!==",
          "right": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 431,
            "end": 436
          },
          "start": 425,
          "end": 436
        },
        "start": 421,
        "end": 436
      },
      "directive": null,
      "start": 421,
      "end": 437
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
          "start": 438,
          "end": 439
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 442,
            "end": 447
          },
          "operator": "!==",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 452,
            "end": 453
          },
          "start": 442,
          "end": 453
        },
        "start": 438,
        "end": 453
      },
      "directive": null,
      "start": 438,
      "end": 454
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 454
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "Runnable",
    "start": 10,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "isRunning",
    "start": 25,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 36,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 45,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 48,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "Refrigerator",
    "start": 58,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 71,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "Runnable",
    "start": 79,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "makesFoodGoBrrr",
    "start": 94,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 111,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 120,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 123,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "string",
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
    "value": "let",
    "start": 138,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 143,
    "end": 144
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 145,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "Refrigerator",
    "start": 153,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 168,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 175,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 184,
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
    "value": "x",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 190,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 199,
    "end": 200
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 201,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 207,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 219,
    "end": 222
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 223,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 232,
    "end": 233
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 234,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 240,
    "end": 243
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 244,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 253,
    "end": 254
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 255,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 261,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 268,
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
    "value": "x",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 274,
    "end": 277
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 278,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 291,
    "end": 294
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 295,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 304,
    "end": 305
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 306,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 312,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 326,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 335,
    "end": 336
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 337,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 343,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 355,
    "end": 358
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 359,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 368,
    "end": 369
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 370,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 376,
    "end": 379
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 380,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 389,
    "end": 390
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 391,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 397,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 404,
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
    "value": "x",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 410,
    "end": 413
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 414,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 427,
    "end": 430
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 431,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 440,
    "end": 441
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 442,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 448,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 453,
    "end": 454
  }
]
```
