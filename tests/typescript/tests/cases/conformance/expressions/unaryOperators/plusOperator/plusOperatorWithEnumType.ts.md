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
        "start": 33,
        "end": 37
      },
      "body": {
        "type": "TSEnumBody",
        "members": [],
        "start": 38,
        "end": 41
      },
      "const": false,
      "declare": false,
      "start": 28,
      "end": 41
    },
    {
      "type": "EmptyStatement",
      "start": 41,
      "end": 42
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ENUM1",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 53
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
              "start": 56,
              "end": 57
            },
            "initializer": null,
            "computed": false,
            "start": 56,
            "end": 57
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 60
            },
            "initializer": null,
            "computed": false,
            "start": 59,
            "end": 60
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 62,
              "end": 64
            },
            "initializer": null,
            "computed": false,
            "start": 62,
            "end": 64
          }
        ],
        "start": 54,
        "end": 66
      },
      "const": false,
      "declare": false,
      "start": 43,
      "end": 66
    },
    {
      "type": "EmptyStatement",
      "start": 66,
      "end": 67
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
            "start": 90,
            "end": 105
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ENUM",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 113
            },
            "prefix": true,
            "start": 108,
            "end": 113
          },
          "definite": false,
          "start": 90,
          "end": 113
        }
      ],
      "declare": false,
      "start": 86,
      "end": 114
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
            "start": 119,
            "end": 134
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ENUM1",
              "optional": false,
              "typeAnnotation": null,
              "start": 138,
              "end": 143
            },
            "prefix": true,
            "start": 137,
            "end": 143
          },
          "definite": false,
          "start": 119,
          "end": 143
        }
      ],
      "declare": false,
      "start": 115,
      "end": 144
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
            "start": 175,
            "end": 190
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ENUM1",
                "optional": false,
                "typeAnnotation": null,
                "start": 194,
                "end": 199
              },
              "property": {
                "type": "Literal",
                "value": "A",
                "raw": "\"A\"",
                "start": 200,
                "end": 203
              },
              "optional": false,
              "computed": true,
              "start": 194,
              "end": 204
            },
            "prefix": true,
            "start": 193,
            "end": 204
          },
          "definite": false,
          "start": 175,
          "end": 204
        }
      ],
      "declare": false,
      "start": 171,
      "end": 205
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
            "start": 210,
            "end": 225
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
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
                  "start": 230,
                  "end": 234
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 235,
                  "end": 236
                },
                "optional": false,
                "computed": true,
                "start": 230,
                "end": 237
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
                  "start": 240,
                  "end": 245
                },
                "property": {
                  "type": "Literal",
                  "value": "B",
                  "raw": "\"B\"",
                  "start": 246,
                  "end": 249
                },
                "optional": false,
                "computed": true,
                "start": 240,
                "end": 250
              },
              "start": 230,
              "end": 250
            },
            "prefix": true,
            "start": 228,
            "end": 251
          },
          "definite": false,
          "start": 210,
          "end": 251
        }
      ],
      "declare": false,
      "start": 206,
      "end": 252
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "+",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ENUM",
          "optional": false,
          "typeAnnotation": null,
          "start": 284,
          "end": 288
        },
        "prefix": true,
        "start": 283,
        "end": 288
      },
      "directive": null,
      "start": 283,
      "end": 289
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "+",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ENUM1",
          "optional": false,
          "typeAnnotation": null,
          "start": 291,
          "end": 296
        },
        "prefix": true,
        "start": 290,
        "end": 296
      },
      "directive": null,
      "start": 290,
      "end": 297
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "+",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ENUM1",
            "optional": false,
            "typeAnnotation": null,
            "start": 299,
            "end": 304
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 305,
            "end": 306
          },
          "optional": false,
          "computed": false,
          "start": 299,
          "end": 306
        },
        "prefix": true,
        "start": 298,
        "end": 306
      },
      "directive": null,
      "start": 298,
      "end": 307
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ENUM",
              "optional": false,
              "typeAnnotation": null,
              "start": 309,
              "end": 313
            },
            "prefix": true,
            "start": 308,
            "end": 313
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ENUM1",
            "optional": false,
            "typeAnnotation": null,
            "start": 315,
            "end": 320
          }
        ],
        "start": 308,
        "end": 320
      },
      "directive": null,
      "start": 308,
      "end": 321
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 28,
  "end": 321
}
```
