__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 161,
  "end": 307,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 161,
      "end": 177,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 165,
          "end": 176,
          "id": {
            "type": "Identifier",
            "start": 165,
            "end": 176,
            "name": "num",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 168,
              "end": 176,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 170,
                "end": 176
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 178,
      "end": 204,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 182,
          "end": 203,
          "id": {
            "type": "Identifier",
            "start": 182,
            "end": 203,
            "name": "var1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 186,
              "end": 203,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 188,
                "end": 203,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 188,
                    "end": 194
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 197,
                    "end": 203
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 205,
      "end": 306,
      "test": {
        "type": "BinaryExpression",
        "start": 209,
        "end": 233,
        "left": {
          "type": "UnaryExpression",
          "start": 209,
          "end": 220,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 216,
            "end": 220,
            "name": "var1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 225,
          "end": 233,
          "value": "string",
          "raw": "\"string\""
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 235,
        "end": 271,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 241,
            "end": 259,
            "expression": {
              "type": "AssignmentExpression",
              "start": 241,
              "end": 258,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 241,
                "end": 244,
                "name": "num",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 247,
                "end": 258,
                "object": {
                  "type": "Identifier",
                  "start": 247,
                  "end": 251,
                  "name": "var1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 258,
                  "name": "length",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 277,
        "end": 306,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 283,
            "end": 294,
            "expression": {
              "type": "AssignmentExpression",
              "start": 283,
              "end": 293,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 283,
                "end": 286,
                "name": "num",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 289,
                "end": 293,
                "name": "var1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
