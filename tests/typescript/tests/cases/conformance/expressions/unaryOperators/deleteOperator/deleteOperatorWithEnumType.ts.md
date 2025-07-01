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
        "name": "ENUM",
        "optional": false,
        "typeAnnotation": null,
        "start": 39,
        "end": 43
      },
      "body": {
        "type": "TSEnumBody",
        "members": [],
        "start": 44,
        "end": 47
      },
      "const": false,
      "declare": false,
      "start": 34,
      "end": 47
    },
    {
      "type": "EmptyStatement",
      "start": 47,
      "end": 48
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ENUM1",
        "optional": false,
        "typeAnnotation": null,
        "start": 54,
        "end": 59
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 62,
              "end": 63
            },
            "initializer": null,
            "computed": false,
            "start": 62,
            "end": 63
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 66
            },
            "initializer": null,
            "computed": false,
            "start": 65,
            "end": 66
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 68,
              "end": 70
            },
            "initializer": null,
            "computed": false,
            "start": 68,
            "end": 70
          }
        ],
        "start": 60,
        "end": 72
      },
      "const": false,
      "declare": false,
      "start": 49,
      "end": 72
    },
    {
      "type": "EmptyStatement",
      "start": 72,
      "end": 73
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
            "name": "ResultIsBoolean1",
            "optional": false,
            "typeAnnotation": null,
            "start": 96,
            "end": 112
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ENUM",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 126
            },
            "prefix": true,
            "start": 115,
            "end": 126
          },
          "definite": false,
          "start": 96,
          "end": 126
        }
      ],
      "declare": false,
      "start": 92,
      "end": 127
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
            "name": "ResultIsBoolean2",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 148
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ENUM1",
              "optional": false,
              "typeAnnotation": null,
              "start": 158,
              "end": 163
            },
            "prefix": true,
            "start": 151,
            "end": 163
          },
          "definite": false,
          "start": 132,
          "end": 163
        }
      ],
      "declare": false,
      "start": 128,
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
            "name": "ResultIsBoolean3",
            "optional": false,
            "typeAnnotation": null,
            "start": 195,
            "end": 211
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ENUM1",
                "optional": false,
                "typeAnnotation": null,
                "start": 221,
                "end": 226
              },
              "property": {
                "type": "Literal",
                "value": "A",
                "raw": "\"A\"",
                "start": 227,
                "end": 230
              },
              "optional": false,
              "computed": true,
              "start": 221,
              "end": 231
            },
            "prefix": true,
            "start": 214,
            "end": 231
          },
          "definite": false,
          "start": 195,
          "end": 231
        }
      ],
      "declare": false,
      "start": 191,
      "end": 232
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
            "name": "ResultIsBoolean4",
            "optional": false,
            "typeAnnotation": null,
            "start": 237,
            "end": 253
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ENUM",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 264,
                  "end": 268
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 269,
                  "end": 270
                },
                "optional": false,
                "computed": true,
                "start": 264,
                "end": 271
              },
              "operator": "+",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ENUM1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 274,
                  "end": 279
                },
                "property": {
                  "type": "Literal",
                  "value": "B",
                  "raw": "\"B\"",
                  "start": 280,
                  "end": 283
                },
                "optional": false,
                "computed": true,
                "start": 274,
                "end": 284
              },
              "start": 264,
              "end": 284
            },
            "prefix": true,
            "start": 256,
            "end": 285
          },
          "definite": false,
          "start": 237,
          "end": 285
        }
      ],
      "declare": false,
      "start": 233,
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
            "name": "ResultIsBoolean5",
            "optional": false,
            "typeAnnotation": null,
            "start": 322,
            "end": 338
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "UnaryExpression",
              "operator": "delete",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "ENUM",
                "optional": false,
                "typeAnnotation": null,
                "start": 355,
                "end": 359
              },
              "prefix": true,
              "start": 348,
              "end": 359
            },
            "prefix": true,
            "start": 341,
            "end": 359
          },
          "definite": false,
          "start": 322,
          "end": 359
        }
      ],
      "declare": false,
      "start": 318,
      "end": 360
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
            "name": "ResultIsBoolean6",
            "optional": false,
            "typeAnnotation": null,
            "start": 365,
            "end": 381
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "UnaryExpression",
              "operator": "delete",
              "argument": {
                "type": "UnaryExpression",
                "operator": "delete",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ENUM",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 406,
                      "end": 410
                    },
                    "property": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 411,
                      "end": 412
                    },
                    "optional": false,
                    "computed": true,
                    "start": 406,
                    "end": 413
                  },
                  "operator": "+",
                  "right": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ENUM1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 416,
                      "end": 421
                    },
                    "property": {
                      "type": "Literal",
                      "value": "B",
                      "raw": "\"B\"",
                      "start": 422,
                      "end": 425
                    },
                    "optional": false,
                    "computed": true,
                    "start": 416,
                    "end": 426
                  },
                  "start": 406,
                  "end": 426
                },
                "prefix": true,
                "start": 398,
                "end": 427
              },
              "prefix": true,
              "start": 391,
              "end": 427
            },
            "prefix": true,
            "start": 384,
            "end": 427
          },
          "definite": false,
          "start": 365,
          "end": 427
        }
      ],
      "declare": false,
      "start": 361,
      "end": 428
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ENUM",
          "optional": false,
          "typeAnnotation": null,
          "start": 466,
          "end": 470
        },
        "prefix": true,
        "start": 459,
        "end": 470
      },
      "directive": null,
      "start": 459,
      "end": 471
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ENUM1",
          "optional": false,
          "typeAnnotation": null,
          "start": 479,
          "end": 484
        },
        "prefix": true,
        "start": 472,
        "end": 484
      },
      "directive": null,
      "start": 472,
      "end": 485
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ENUM1",
            "optional": false,
            "typeAnnotation": null,
            "start": 493,
            "end": 498
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 499,
            "end": 500
          },
          "optional": false,
          "computed": false,
          "start": 493,
          "end": 500
        },
        "prefix": true,
        "start": 486,
        "end": 500
      },
      "directive": null,
      "start": 486,
      "end": 501
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ENUM",
              "optional": false,
              "typeAnnotation": null,
              "start": 509,
              "end": 513
            },
            "prefix": true,
            "start": 502,
            "end": 513
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ENUM1",
            "optional": false,
            "typeAnnotation": null,
            "start": 515,
            "end": 520
          }
        ],
        "start": 502,
        "end": 520
      },
      "directive": null,
      "start": 502,
      "end": 521
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 34,
  "end": 521
}
```
