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
          "operator": "==",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 193,
            "end": 194
          },
          "start": 188,
          "end": 194
        },
        "start": 184,
        "end": 194
      },
      "directive": null,
      "start": 184,
      "end": 195
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
          "start": 196,
          "end": 197
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 200,
            "end": 205
          },
          "operator": "==",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 209,
            "end": 210
          },
          "start": 200,
          "end": 210
        },
        "start": 196,
        "end": 210
      },
      "directive": null,
      "start": 196,
      "end": 210
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
          "start": 211,
          "end": 212
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 215,
            "end": 216
          },
          "operator": "==",
          "right": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 220,
            "end": 225
          },
          "start": 215,
          "end": 225
        },
        "start": 211,
        "end": 225
      },
      "directive": null,
      "start": 211,
      "end": 226
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
          "start": 227,
          "end": 228
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 231,
            "end": 236
          },
          "operator": "==",
          "right": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 240,
            "end": 245
          },
          "start": 231,
          "end": 245
        },
        "start": 227,
        "end": 245
      },
      "directive": null,
      "start": 227,
      "end": 246
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
          "start": 247,
          "end": 248
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 251,
            "end": 256
          },
          "operator": "==",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 260,
            "end": 261
          },
          "start": 251,
          "end": 261
        },
        "start": 247,
        "end": 261
      },
      "directive": null,
      "start": 247,
      "end": 262
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
          "start": 263,
          "end": 264
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 267,
            "end": 268
          },
          "operator": "==",
          "right": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 272,
            "end": 277
          },
          "start": 267,
          "end": 277
        },
        "start": 263,
        "end": 277
      },
      "directive": null,
      "start": 263,
      "end": 278
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
          "start": 279,
          "end": 280
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 283,
            "end": 284
          },
          "operator": "==",
          "right": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 288,
            "end": 293
          },
          "start": 283,
          "end": 293
        },
        "start": 279,
        "end": 293
      },
      "directive": null,
      "start": 279,
      "end": 294
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
          "start": 295,
          "end": 296
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 299,
            "end": 304
          },
          "operator": "==",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 308,
            "end": 309
          },
          "start": 299,
          "end": 309
        },
        "start": 295,
        "end": 309
      },
      "directive": null,
      "start": 295,
      "end": 310
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
          "start": 312,
          "end": 313
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 316,
            "end": 317
          },
          "operator": "!=",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 321,
            "end": 322
          },
          "start": 316,
          "end": 322
        },
        "start": 312,
        "end": 322
      },
      "directive": null,
      "start": 312,
      "end": 323
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
          "start": 324,
          "end": 325
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 328,
            "end": 333
          },
          "operator": "!=",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 337,
            "end": 338
          },
          "start": 328,
          "end": 338
        },
        "start": 324,
        "end": 338
      },
      "directive": null,
      "start": 324,
      "end": 338
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
          "start": 339,
          "end": 340
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 343,
            "end": 344
          },
          "operator": "!=",
          "right": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 348,
            "end": 353
          },
          "start": 343,
          "end": 353
        },
        "start": 339,
        "end": 353
      },
      "directive": null,
      "start": 339,
      "end": 354
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
          "start": 355,
          "end": 356
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 359,
            "end": 364
          },
          "operator": "!=",
          "right": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 368,
            "end": 373
          },
          "start": 359,
          "end": 373
        },
        "start": 355,
        "end": 373
      },
      "directive": null,
      "start": 355,
      "end": 374
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
          "start": 375,
          "end": 376
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 379,
            "end": 384
          },
          "operator": "!=",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 388,
            "end": 389
          },
          "start": 379,
          "end": 389
        },
        "start": 375,
        "end": 389
      },
      "directive": null,
      "start": 375,
      "end": 390
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
          "start": 391,
          "end": 392
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 395,
            "end": 396
          },
          "operator": "!=",
          "right": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 400,
            "end": 405
          },
          "start": 395,
          "end": 405
        },
        "start": 391,
        "end": 405
      },
      "directive": null,
      "start": 391,
      "end": 406
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
          "start": 407,
          "end": 408
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 411,
            "end": 412
          },
          "operator": "!=",
          "right": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 416,
            "end": 421
          },
          "start": 411,
          "end": 421
        },
        "start": 407,
        "end": 421
      },
      "directive": null,
      "start": 407,
      "end": 422
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
          "start": 423,
          "end": 424
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 427,
            "end": 432
          },
          "operator": "!=",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 436,
            "end": 437
          },
          "start": 427,
          "end": 437
        },
        "start": 423,
        "end": 437
      },
      "directive": null,
      "start": 423,
      "end": 438
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 438
}
```
