__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 75,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 10,
            "raw": "20",
            "value": 20
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 12,
      "end": 32,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 16,
          "end": 31,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 20,
            "end": 31,
            "expression": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 25,
              "end": 31
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 50,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 49,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 39,
            "decorators": [],
            "name": "as",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 42,
            "end": 49,
            "raw": "\"hello\"",
            "value": "hello"
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 51,
      "end": 74,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 73,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 58,
            "decorators": [],
            "name": "as1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 61,
            "end": 73,
            "expression": {
              "type": "Identifier",
              "start": 61,
              "end": 63,
              "decorators": [],
              "name": "as",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 67,
              "end": 73
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
