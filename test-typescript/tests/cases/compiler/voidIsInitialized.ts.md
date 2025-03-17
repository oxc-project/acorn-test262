__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 204,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 26,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 25,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 13,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 13,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 9,
                "end": 13
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 16,
            "end": 25,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 27,
      "end": 53,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 33,
          "end": 52,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 33,
            "end": 40,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 40,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 36,
                "end": 40
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 43,
            "end": 52,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "IfStatement",
      "start": 55,
      "end": 131,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 84,
        "end": 131,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 90,
            "end": 91,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 58,
        "end": 82,
        "operator": "===",
        "left": {
          "type": "UnaryExpression",
          "start": 58,
          "end": 66,
          "argument": {
            "type": "Identifier",
            "start": 65,
            "end": 66,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "typeof",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 71,
          "end": 82,
          "raw": "\"undefined\"",
          "value": "undefined"
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 133,
      "end": 203,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 162,
        "end": 203,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 168,
            "end": 169,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 168,
              "end": 169,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 136,
        "end": 160,
        "operator": "!==",
        "left": {
          "type": "UnaryExpression",
          "start": 136,
          "end": 144,
          "argument": {
            "type": "Identifier",
            "start": 143,
            "end": 144,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "typeof",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 149,
          "end": 160,
          "raw": "\"undefined\"",
          "value": "undefined"
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
