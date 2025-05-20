__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 102,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 34,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 33,
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
            "type": "BinaryExpression",
            "start": 8,
            "end": 33,
            "operator": "===",
            "left": {
              "type": "Literal",
              "start": 8,
              "end": 13,
              "raw": "\"foo\"",
              "value": "foo"
            },
            "right": {
              "type": "TSAsExpression",
              "start": 18,
              "end": 33,
              "expression": {
                "type": "Literal",
                "start": 18,
                "end": 23,
                "raw": "\"bar\"",
                "value": "bar"
              },
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 27,
                "end": 33
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 35,
      "end": 71,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 39,
          "end": 70,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 39,
            "end": 40,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 43,
            "end": 70,
            "operator": "!==",
            "left": {
              "type": "Literal",
              "start": 43,
              "end": 48,
              "raw": "\"foo\"",
              "value": "foo"
            },
            "right": {
              "type": "TSAsExpression",
              "start": 54,
              "end": 69,
              "expression": {
                "type": "Literal",
                "start": 54,
                "end": 59,
                "raw": "\"bar\"",
                "value": "bar"
              },
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 63,
                "end": 69
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 72,
      "end": 102,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 76,
          "end": 101,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 76,
            "end": 77,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 80,
            "end": 101,
            "operator": "==",
            "left": {
              "type": "Literal",
              "start": 80,
              "end": 85,
              "raw": "\"foo\"",
              "value": "foo"
            },
            "right": {
              "type": "TSTypeAssertion",
              "start": 90,
              "end": 100,
              "expression": {
                "type": "Literal",
                "start": 95,
                "end": 100,
                "raw": "\"bar\"",
                "value": "bar"
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 91,
                "end": 94
              }
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
