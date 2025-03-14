inOperator.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 109,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 9,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 8,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 6,
            "end": 8,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ForInStatement",
      "start": 11,
      "end": 30,
      "body": {
        "type": "BlockStatement",
        "start": 28,
        "end": 30,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 16,
        "end": 21,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 20,
            "end": 21,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "decorators": [],
        "name": "a",
        "optional": false
      }
    },
    {
      "type": "IfStatement",
      "start": 32,
      "end": 46,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 44,
        "end": 46,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 36,
        "end": 42,
        "operator": "in",
        "left": {
          "type": "Literal",
          "start": 36,
          "end": 37,
          "raw": "3",
          "value": 3
        },
        "right": {
          "type": "Identifier",
          "start": 41,
          "end": 42,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 48,
      "end": 64,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 52,
          "end": 63,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 52,
            "end": 53,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 56,
            "end": 63,
            "operator": "in",
            "left": {
              "type": "Literal",
              "start": 56,
              "end": 58,
              "raw": "''",
              "value": ""
            },
            "right": {
              "type": "Literal",
              "start": 62,
              "end": 63,
              "raw": "0",
              "value": 0
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 66,
      "end": 77,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 70,
          "end": 76,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 70,
            "end": 76,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 71,
              "end": 76,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 73,
                "end": 76
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 78,
      "end": 92,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 82,
          "end": 91,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 82,
            "end": 91,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 83,
              "end": 91,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 85,
                "end": 91
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 93,
      "end": 108,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 105,
        "end": 108,
        "body": []
      },
      "test": {
        "type": "BinaryExpression",
        "start": 97,
        "end": 103,
        "operator": "in",
        "left": {
          "type": "Identifier",
          "start": 97,
          "end": 98,
          "decorators": [],
          "name": "y",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 102,
          "end": 103,
          "decorators": [],
          "name": "c",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
