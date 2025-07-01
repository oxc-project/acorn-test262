__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Nums",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Zero",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 20
            },
            "initializer": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 23,
              "end": 24
            },
            "computed": false,
            "start": 16,
            "end": 24
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "One",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 33
            },
            "initializer": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 36,
              "end": 37
            },
            "computed": false,
            "start": 30,
            "end": 37
          }
        ],
        "start": 10,
        "end": 40
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 40
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 49
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Nums",
                "optional": false,
                "typeAnnotation": null,
                "start": 52,
                "end": 56
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Zero",
                "optional": false,
                "typeAnnotation": null,
                "start": 57,
                "end": 61
              },
              "optional": false,
              "computed": false,
              "start": 52,
              "end": 61
            },
            "consequent": {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 64,
              "end": 67
            },
            "alternate": {
              "type": "Literal",
              "value": "b",
              "raw": "\"b\"",
              "start": 70,
              "end": 73
            },
            "start": 52,
            "end": 73
          },
          "definite": false,
          "start": 48,
          "end": 73
        }
      ],
      "declare": false,
      "start": 42,
      "end": 74
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 82
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Nums",
                "optional": false,
                "typeAnnotation": null,
                "start": 85,
                "end": 89
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "One",
                "optional": false,
                "typeAnnotation": null,
                "start": 90,
                "end": 93
              },
              "optional": false,
              "computed": false,
              "start": 85,
              "end": 93
            },
            "consequent": {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 96,
              "end": 99
            },
            "alternate": {
              "type": "Literal",
              "value": "b",
              "raw": "\"b\"",
              "start": 102,
              "end": 105
            },
            "start": 85,
            "end": 105
          },
          "definite": false,
          "start": 81,
          "end": 105
        }
      ],
      "declare": false,
      "start": 75,
      "end": 106
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Nums",
          "optional": false,
          "typeAnnotation": null,
          "start": 112,
          "end": 116
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Zero",
          "optional": false,
          "typeAnnotation": null,
          "start": 117,
          "end": 121
        },
        "optional": false,
        "computed": false,
        "start": 112,
        "end": 121
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Nums",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 133
            },
            "directive": null,
            "start": 129,
            "end": 134
          }
        ],
        "start": 123,
        "end": 136
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Nums",
              "optional": false,
              "typeAnnotation": null,
              "start": 148,
              "end": 152
            },
            "directive": null,
            "start": 148,
            "end": 153
          }
        ],
        "start": 142,
        "end": 155
      },
      "start": 108,
      "end": 155
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Nums",
          "optional": false,
          "typeAnnotation": null,
          "start": 162,
          "end": 166
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "One",
          "optional": false,
          "typeAnnotation": null,
          "start": 167,
          "end": 170
        },
        "optional": false,
        "computed": false,
        "start": 162,
        "end": 170
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Nums",
              "optional": false,
              "typeAnnotation": null,
              "start": 178,
              "end": 182
            },
            "directive": null,
            "start": 178,
            "end": 183
          }
        ],
        "start": 172,
        "end": 185
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Nums",
              "optional": false,
              "typeAnnotation": null,
              "start": 197,
              "end": 201
            },
            "directive": null,
            "start": 197,
            "end": 202
          }
        ],
        "start": 191,
        "end": 204
      },
      "start": 158,
      "end": 204
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Strs",
        "optional": false,
        "typeAnnotation": null,
        "start": 212,
        "end": 216
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Empty",
              "optional": false,
              "typeAnnotation": null,
              "start": 223,
              "end": 228
            },
            "initializer": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 231,
              "end": 233
            },
            "computed": false,
            "start": 223,
            "end": 233
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 239,
              "end": 240
            },
            "initializer": {
              "type": "Literal",
              "value": "A",
              "raw": "\"A\"",
              "start": 243,
              "end": 246
            },
            "computed": false,
            "start": 239,
            "end": 246
          }
        ],
        "start": 217,
        "end": 249
      },
      "const": false,
      "declare": false,
      "start": 207,
      "end": 249
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 257,
            "end": 258
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Strs",
                "optional": false,
                "typeAnnotation": null,
                "start": 261,
                "end": 265
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Empty",
                "optional": false,
                "typeAnnotation": null,
                "start": 266,
                "end": 271
              },
              "optional": false,
              "computed": false,
              "start": 261,
              "end": 271
            },
            "consequent": {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 274,
              "end": 277
            },
            "alternate": {
              "type": "Literal",
              "value": "b",
              "raw": "\"b\"",
              "start": 280,
              "end": 283
            },
            "start": 261,
            "end": 283
          },
          "definite": false,
          "start": 257,
          "end": 283
        }
      ],
      "declare": false,
      "start": 251,
      "end": 284
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 291,
            "end": 292
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Strs",
                "optional": false,
                "typeAnnotation": null,
                "start": 295,
                "end": 299
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 300,
                "end": 301
              },
              "optional": false,
              "computed": false,
              "start": 295,
              "end": 301
            },
            "consequent": {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 304,
              "end": 307
            },
            "alternate": {
              "type": "Literal",
              "value": "b",
              "raw": "\"b\"",
              "start": 310,
              "end": 313
            },
            "start": 295,
            "end": 313
          },
          "definite": false,
          "start": 291,
          "end": 313
        }
      ],
      "declare": false,
      "start": 285,
      "end": 314
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Strs",
          "optional": false,
          "typeAnnotation": null,
          "start": 320,
          "end": 324
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Empty",
          "optional": false,
          "typeAnnotation": null,
          "start": 325,
          "end": 330
        },
        "optional": false,
        "computed": false,
        "start": 320,
        "end": 330
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Strs",
              "optional": false,
              "typeAnnotation": null,
              "start": 338,
              "end": 342
            },
            "directive": null,
            "start": 338,
            "end": 343
          }
        ],
        "start": 332,
        "end": 345
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Strs",
              "optional": false,
              "typeAnnotation": null,
              "start": 357,
              "end": 361
            },
            "directive": null,
            "start": 357,
            "end": 362
          }
        ],
        "start": 351,
        "end": 364
      },
      "start": 316,
      "end": 364
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Strs",
          "optional": false,
          "typeAnnotation": null,
          "start": 371,
          "end": 375
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 376,
          "end": 377
        },
        "optional": false,
        "computed": false,
        "start": 371,
        "end": 377
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Strs",
              "optional": false,
              "typeAnnotation": null,
              "start": 385,
              "end": 389
            },
            "directive": null,
            "start": 385,
            "end": 390
          }
        ],
        "start": 379,
        "end": 392
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Strs",
              "optional": false,
              "typeAnnotation": null,
              "start": 404,
              "end": 408
            },
            "directive": null,
            "start": 404,
            "end": 409
          }
        ],
        "start": 398,
        "end": 411
      },
      "start": 367,
      "end": 411
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 411
}
```
