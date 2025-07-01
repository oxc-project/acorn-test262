__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 15,
                "end": 18
              },
              "start": 13,
              "end": 18
            },
            "start": 12,
            "end": 18
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 18
        }
      ],
      "declare": true,
      "start": 0,
      "end": 19
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 25,
          "end": 26
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Function",
          "optional": false,
          "typeAnnotation": null,
          "start": 38,
          "end": 46
        },
        "start": 25,
        "end": 46
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 110,
                "end": 111
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 110,
              "end": 113
            },
            "directive": null,
            "start": 110,
            "end": 114
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 119,
                "end": 120
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 121,
                  "end": 122
                },
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 124,
                  "end": 125
                },
                {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 127,
                  "end": 128
                }
              ],
              "optional": false,
              "start": 119,
              "end": 129
            },
            "directive": null,
            "start": 119,
            "end": 130
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 135,
                "end": 136
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "hello!",
                  "raw": "\"hello!\"",
                  "start": 137,
                  "end": 145
                }
              ],
              "optional": false,
              "start": 135,
              "end": 146
            },
            "directive": null,
            "start": 135,
            "end": 147
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 152,
                "end": 153
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null,
                "start": 154,
                "end": 158
              },
              "optional": false,
              "computed": false,
              "start": 152,
              "end": 158
            },
            "directive": null,
            "start": 152,
            "end": 159
          }
        ],
        "start": 48,
        "end": 161
      },
      "alternate": null,
      "start": 21,
      "end": 161
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 167,
          "end": 168
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Object",
          "optional": false,
          "typeAnnotation": null,
          "start": 180,
          "end": 186
        },
        "start": 167,
        "end": 186
      },
      "consequent": {
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 248,
                  "end": 249
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 250,
                  "end": 256
                },
                "optional": false,
                "computed": false,
                "start": 248,
                "end": 256
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 248,
              "end": 258
            },
            "directive": null,
            "start": 248,
            "end": 259
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 264,
                "end": 265
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 264,
              "end": 267
            },
            "directive": null,
            "start": 264,
            "end": 268
          }
        ],
        "start": 188,
        "end": 270
      },
      "alternate": null,
      "start": 163,
      "end": 270
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 276,
          "end": 277
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Error",
          "optional": false,
          "typeAnnotation": null,
          "start": 289,
          "end": 294
        },
        "start": 276,
        "end": 294
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 363,
                "end": 364
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "message",
                "optional": false,
                "typeAnnotation": null,
                "start": 365,
                "end": 372
              },
              "optional": false,
              "computed": false,
              "start": 363,
              "end": 372
            },
            "directive": null,
            "start": 363,
            "end": 373
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 378,
                "end": 379
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "mesage",
                "optional": false,
                "typeAnnotation": null,
                "start": 380,
                "end": 386
              },
              "optional": false,
              "computed": false,
              "start": 378,
              "end": 386
            },
            "directive": null,
            "start": 378,
            "end": 387
          }
        ],
        "start": 296,
        "end": 389
      },
      "alternate": null,
      "start": 272,
      "end": 389
    },
    {
      "type": "IfStatement",
      "test": {
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
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Date",
          "optional": false,
          "typeAnnotation": null,
          "start": 408,
          "end": 412
        },
        "start": 395,
        "end": 412
      },
      "consequent": {
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 420,
                  "end": 421
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getDate",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 422,
                  "end": 429
                },
                "optional": false,
                "computed": false,
                "start": 420,
                "end": 429
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 420,
              "end": 431
            },
            "directive": null,
            "start": 420,
            "end": 432
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 437,
                  "end": 438
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getHuors",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 439,
                  "end": 447
                },
                "optional": false,
                "computed": false,
                "start": 437,
                "end": 447
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 437,
              "end": 449
            },
            "directive": null,
            "start": 437,
            "end": 450
          }
        ],
        "start": 414,
        "end": 452
      },
      "alternate": null,
      "start": 391,
      "end": 452
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 452
}
```
