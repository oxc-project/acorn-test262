__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foof",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 13
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 19,
              "end": 25
            },
            "start": 17,
            "end": 25
          },
          "start": 14,
          "end": 25
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 27,
          "end": 28
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 31,
          "end": 37
        },
        "start": 29,
        "end": 37
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 38
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foof",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 52
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 58,
              "end": 64
            },
            "start": 56,
            "end": 64
          },
          "start": 53,
          "end": 64
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 66,
          "end": 67
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 70,
          "end": 76
        },
        "start": 68,
        "end": 76
      },
      "body": null,
      "expression": false,
      "start": 39,
      "end": 77
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foof",
        "optional": false,
        "typeAnnotation": null,
        "start": 87,
        "end": 91
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 97,
              "end": 100
            },
            "start": 95,
            "end": 100
          },
          "start": 92,
          "end": 100
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 103,
          "end": 106
        },
        "start": 101,
        "end": 106
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 119
            },
            "start": 109,
            "end": 119
          }
        ],
        "start": 107,
        "end": 121
      },
      "expression": false,
      "start": 78,
      "end": 121
    },
    {
      "type": "EmptyStatement",
      "start": 121,
      "end": 122
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
            "name": "x",
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
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foof",
              "optional": false,
              "typeAnnotation": null,
              "start": 139,
              "end": 143
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "s",
                "raw": "\"s\"",
                "start": 144,
                "end": 147
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 149,
                "end": 153
              }
            ],
            "optional": false,
            "start": 139,
            "end": 154
          },
          "definite": false,
          "start": 127,
          "end": 154
        }
      ],
      "declare": false,
      "start": 123,
      "end": 155
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 163,
                "end": 169
              },
              "start": 161,
              "end": 169
            },
            "start": 160,
            "end": 169
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foof",
              "optional": false,
              "typeAnnotation": null,
              "start": 172,
              "end": 176
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "s",
                "raw": "\"s\"",
                "start": 177,
                "end": 180
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 182,
                "end": 186
              }
            ],
            "optional": false,
            "start": 172,
            "end": 187
          },
          "definite": false,
          "start": 160,
          "end": 187
        }
      ],
      "declare": false,
      "start": 156,
      "end": 188
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foof2",
        "optional": false,
        "typeAnnotation": null,
        "start": 199,
        "end": 204
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 210,
              "end": 216
            },
            "start": 208,
            "end": 216
          },
          "start": 205,
          "end": 216
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 218,
          "end": 219
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 222,
          "end": 228
        },
        "start": 220,
        "end": 228
      },
      "body": null,
      "expression": false,
      "start": 190,
      "end": 229
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foof2",
        "optional": false,
        "typeAnnotation": null,
        "start": 239,
        "end": 244
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 250,
              "end": 256
            },
            "start": 248,
            "end": 256
          },
          "start": 245,
          "end": 256
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 258,
          "end": 259
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 262,
          "end": 268
        },
        "start": 260,
        "end": 268
      },
      "body": null,
      "expression": false,
      "start": 230,
      "end": 269
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foof2",
        "optional": false,
        "typeAnnotation": null,
        "start": 279,
        "end": 284
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 290,
              "end": 293
            },
            "start": 288,
            "end": 293
          },
          "start": 285,
          "end": 293
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 296,
          "end": 299
        },
        "start": 294,
        "end": 299
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 309,
              "end": 312
            },
            "start": 302,
            "end": 312
          }
        ],
        "start": 300,
        "end": 314
      },
      "expression": false,
      "start": 270,
      "end": 314
    },
    {
      "type": "EmptyStatement",
      "start": 314,
      "end": 315
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
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 324,
                "end": 330
              },
              "start": 322,
              "end": 330
            },
            "start": 320,
            "end": 330
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foof2",
              "optional": false,
              "typeAnnotation": null,
              "start": 333,
              "end": 338
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "s",
                "raw": "\"s\"",
                "start": 339,
                "end": 342
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 344,
                "end": 348
              }
            ],
            "optional": false,
            "start": 333,
            "end": 349
          },
          "definite": false,
          "start": 320,
          "end": 349
        }
      ],
      "declare": false,
      "start": 316,
      "end": 350
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
            "name": "y2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 359,
                "end": 365
              },
              "start": 357,
              "end": 365
            },
            "start": 355,
            "end": 365
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foof2",
              "optional": false,
              "typeAnnotation": null,
              "start": 368,
              "end": 373
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "s",
                "raw": "\"s\"",
                "start": 374,
                "end": 377
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 379,
                "end": 383
              }
            ],
            "optional": false,
            "start": 368,
            "end": 384
          },
          "definite": false,
          "start": 355,
          "end": 384
        }
      ],
      "declare": false,
      "start": 351,
      "end": 385
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 385
}
```
