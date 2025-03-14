__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 97,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 10,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 9,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 9,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 12,
      "end": 22,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 16,
          "end": 21,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 20,
            "end": 21,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 24,
      "end": 46,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 46,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 29,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 33,
            "end": 46,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "right": {
              "type": "UnaryExpression",
              "start": 39,
              "end": 46,
              "argument": {
                "type": "UnaryExpression",
                "start": 42,
                "end": 46,
                "argument": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 46,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "operator": "+",
                "prefix": true
              },
              "operator": "+",
              "prefix": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 49,
      "end": 59,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 53,
          "end": 58,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 54,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 57,
            "end": 58,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 61,
      "end": 71,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 65,
          "end": 70,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 65,
            "end": 66,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 69,
            "end": 70,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 73,
      "end": 95,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 77,
          "end": 95,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 77,
            "end": 78,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 82,
            "end": 95,
            "operator": "-",
            "left": {
              "type": "Identifier",
              "start": 82,
              "end": 83,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "right": {
              "type": "UnaryExpression",
              "start": 88,
              "end": 95,
              "argument": {
                "type": "UnaryExpression",
                "start": 91,
                "end": 95,
                "argument": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 95,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "operator": "-",
                "prefix": true
              },
              "operator": "-",
              "prefix": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
