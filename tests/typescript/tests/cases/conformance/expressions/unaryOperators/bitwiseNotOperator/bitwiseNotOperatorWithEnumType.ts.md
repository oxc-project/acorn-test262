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
        "name": "ENUM1",
        "optional": false,
        "typeAnnotation": null,
        "start": 33,
        "end": 38
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
              "start": 41,
              "end": 42
            },
            "initializer": null,
            "computed": false,
            "start": 41,
            "end": 42
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 45
            },
            "initializer": null,
            "computed": false,
            "start": 44,
            "end": 45
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 47,
              "end": 49
            },
            "initializer": null,
            "computed": false,
            "start": 47,
            "end": 49
          }
        ],
        "start": 39,
        "end": 51
      },
      "const": false,
      "declare": false,
      "start": 28,
      "end": 51
    },
    {
      "type": "EmptyStatement",
      "start": 51,
      "end": 52
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
            "name": "ResultIsNumber1",
            "optional": false,
            "typeAnnotation": null,
            "start": 75,
            "end": 90
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ENUM1",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 99
            },
            "prefix": true,
            "start": 93,
            "end": 99
          },
          "definite": false,
          "start": 75,
          "end": 99
        }
      ],
      "declare": false,
      "start": 71,
      "end": 100
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
            "name": "ResultIsNumber2",
            "optional": false,
            "typeAnnotation": null,
            "start": 131,
            "end": 146
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ENUM1",
                "optional": false,
                "typeAnnotation": null,
                "start": 150,
                "end": 155
              },
              "property": {
                "type": "Literal",
                "value": "A",
                "raw": "\"A\"",
                "start": 156,
                "end": 159
              },
              "optional": false,
              "computed": true,
              "start": 150,
              "end": 160
            },
            "prefix": true,
            "start": 149,
            "end": 160
          },
          "definite": false,
          "start": 131,
          "end": 160
        }
      ],
      "declare": false,
      "start": 127,
      "end": 161
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
            "name": "ResultIsNumber3",
            "optional": false,
            "typeAnnotation": null,
            "start": 166,
            "end": 181
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ENUM1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 186,
                  "end": 191
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 192,
                  "end": 193
                },
                "optional": false,
                "computed": false,
                "start": 186,
                "end": 193
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
                  "start": 196,
                  "end": 201
                },
                "property": {
                  "type": "Literal",
                  "value": "B",
                  "raw": "\"B\"",
                  "start": 202,
                  "end": 205
                },
                "optional": false,
                "computed": true,
                "start": 196,
                "end": 206
              },
              "start": 186,
              "end": 206
            },
            "prefix": true,
            "start": 184,
            "end": 207
          },
          "definite": false,
          "start": 166,
          "end": 207
        }
      ],
      "declare": false,
      "start": 162,
      "end": 208
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
            "name": "ResultIsNumber4",
            "optional": false,
            "typeAnnotation": null,
            "start": 238,
            "end": 253
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "UnaryExpression",
              "operator": "~",
              "argument": {
                "type": "UnaryExpression",
                "operator": "~",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ENUM1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 260,
                      "end": 265
                    },
                    "property": {
                      "type": "Literal",
                      "value": "A",
                      "raw": "\"A\"",
                      "start": 266,
                      "end": 269
                    },
                    "optional": false,
                    "computed": true,
                    "start": 260,
                    "end": 270
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
                      "start": 273,
                      "end": 278
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 279,
                      "end": 280
                    },
                    "optional": false,
                    "computed": false,
                    "start": 273,
                    "end": 280
                  },
                  "start": 260,
                  "end": 280
                },
                "prefix": true,
                "start": 258,
                "end": 281
              },
              "prefix": true,
              "start": 257,
              "end": 281
            },
            "prefix": true,
            "start": 256,
            "end": 281
          },
          "definite": false,
          "start": 238,
          "end": 281
        }
      ],
      "declare": false,
      "start": 234,
      "end": 282
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "~",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ENUM1",
          "optional": false,
          "typeAnnotation": null,
          "start": 314,
          "end": 319
        },
        "prefix": true,
        "start": 313,
        "end": 319
      },
      "directive": null,
      "start": 313,
      "end": 320
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "~",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ENUM1",
            "optional": false,
            "typeAnnotation": null,
            "start": 322,
            "end": 327
          },
          "property": {
            "type": "Literal",
            "value": "A",
            "raw": "\"A\"",
            "start": 328,
            "end": 331
          },
          "optional": false,
          "computed": true,
          "start": 322,
          "end": 332
        },
        "prefix": true,
        "start": 321,
        "end": 332
      },
      "directive": null,
      "start": 321,
      "end": 333
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ENUM1",
                "optional": false,
                "typeAnnotation": null,
                "start": 335,
                "end": 340
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 341,
                "end": 342
              },
              "optional": false,
              "computed": false,
              "start": 335,
              "end": 342
            },
            "prefix": true,
            "start": 334,
            "end": 342
          },
          {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ENUM1",
                "optional": false,
                "typeAnnotation": null,
                "start": 345,
                "end": 350
              },
              "property": {
                "type": "Literal",
                "value": "B",
                "raw": "\"B\"",
                "start": 351,
                "end": 354
              },
              "optional": false,
              "computed": true,
              "start": 345,
              "end": 355
            },
            "prefix": true,
            "start": 344,
            "end": 355
          }
        ],
        "start": 334,
        "end": 355
      },
      "directive": null,
      "start": 334,
      "end": 356
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 28,
  "end": 356
}
```
