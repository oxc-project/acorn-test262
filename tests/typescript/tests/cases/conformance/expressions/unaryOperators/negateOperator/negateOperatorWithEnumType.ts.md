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
            "operator": "-",
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
            "start": 135,
            "end": 150
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ENUM1",
                "optional": false,
                "typeAnnotation": null,
                "start": 154,
                "end": 159
              },
              "property": {
                "type": "Literal",
                "value": "B",
                "raw": "\"B\"",
                "start": 160,
                "end": 163
              },
              "optional": false,
              "computed": true,
              "start": 154,
              "end": 164
            },
            "prefix": true,
            "start": 153,
            "end": 164
          },
          "definite": false,
          "start": 135,
          "end": 164
        }
      ],
      "declare": false,
      "start": 131,
      "end": 165
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
            "start": 170,
            "end": 185
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "-",
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
                  "start": 190,
                  "end": 195
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 196,
                  "end": 197
                },
                "optional": false,
                "computed": false,
                "start": 190,
                "end": 197
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
                  "start": 200,
                  "end": 205
                },
                "property": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 206,
                  "end": 208
                },
                "optional": false,
                "computed": true,
                "start": 200,
                "end": 209
              },
              "start": 190,
              "end": 209
            },
            "prefix": true,
            "start": 188,
            "end": 210
          },
          "definite": false,
          "start": 170,
          "end": 210
        }
      ],
      "declare": false,
      "start": 166,
      "end": 211
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "-",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ENUM",
          "optional": false,
          "typeAnnotation": null,
          "start": 243,
          "end": 247
        },
        "prefix": true,
        "start": 242,
        "end": 247
      },
      "directive": null,
      "start": 242,
      "end": 248
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "-",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ENUM1",
          "optional": false,
          "typeAnnotation": null,
          "start": 250,
          "end": 255
        },
        "prefix": true,
        "start": 249,
        "end": 255
      },
      "directive": null,
      "start": 249,
      "end": 256
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "-",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ENUM1",
            "optional": false,
            "typeAnnotation": null,
            "start": 258,
            "end": 263
          },
          "property": {
            "type": "Literal",
            "value": "B",
            "raw": "\"B\"",
            "start": 264,
            "end": 267
          },
          "optional": false,
          "computed": true,
          "start": 258,
          "end": 268
        },
        "prefix": true,
        "start": 257,
        "end": 268
      },
      "directive": null,
      "start": 257,
      "end": 269
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ENUM",
              "optional": false,
              "typeAnnotation": null,
              "start": 271,
              "end": 275
            },
            "prefix": true,
            "start": 270,
            "end": 275
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ENUM1",
            "optional": false,
            "typeAnnotation": null,
            "start": 277,
            "end": 282
          }
        ],
        "start": 270,
        "end": 282
      },
      "directive": null,
      "start": 270,
      "end": 283
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 28,
  "end": 283
}
```
