__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 203,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 26,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 25,
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 27,
      "end": 53,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 33,
          "end": 52,
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 55,
      "end": 131,
      "test": {
        "type": "BinaryExpression",
        "start": 58,
        "end": 82,
        "left": {
          "type": "UnaryExpression",
          "start": 58,
          "end": 66,
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "start": 65,
            "end": 66,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "prefix": true
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 71,
          "end": 82,
          "value": "undefined",
          "raw": "\"undefined\""
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 84,
        "end": 131,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 90,
            "end": 91,
            "expression": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 133,
      "end": 203,
      "test": {
        "type": "BinaryExpression",
        "start": 136,
        "end": 160,
        "left": {
          "type": "UnaryExpression",
          "start": 136,
          "end": 144,
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "start": 143,
            "end": 144,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "prefix": true
        },
        "operator": "!==",
        "right": {
          "type": "Literal",
          "start": 149,
          "end": 160,
          "value": "undefined",
          "raw": "\"undefined\""
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 162,
        "end": 203,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 168,
            "end": 169,
            "expression": {
              "type": "Identifier",
              "start": 168,
              "end": 169,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
