__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 103,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 35,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 34,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 6,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 9,
            "end": 34,
            "operator": "===",
            "left": {
              "type": "Literal",
              "start": 9,
              "end": 14,
              "raw": "\"foo\"",
              "value": "foo"
            },
            "right": {
              "type": "TSAsExpression",
              "start": 19,
              "end": 34,
              "expression": {
                "type": "Literal",
                "start": 19,
                "end": 24,
                "raw": "\"bar\"",
                "value": "bar"
              },
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 28,
                "end": 34
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
      "start": 36,
      "end": 72,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 71,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 44,
            "end": 71,
            "operator": "!==",
            "left": {
              "type": "Literal",
              "start": 44,
              "end": 49,
              "raw": "\"foo\"",
              "value": "foo"
            },
            "right": {
              "type": "TSAsExpression",
              "start": 55,
              "end": 70,
              "expression": {
                "type": "Literal",
                "start": 55,
                "end": 60,
                "raw": "\"bar\"",
                "value": "bar"
              },
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 64,
                "end": 70
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
      "start": 73,
      "end": 103,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 77,
          "end": 102,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 77,
            "end": 78,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 81,
            "end": 102,
            "operator": "==",
            "left": {
              "type": "Literal",
              "start": 81,
              "end": 86,
              "raw": "\"foo\"",
              "value": "foo"
            },
            "right": {
              "type": "TSTypeAssertion",
              "start": 91,
              "end": 101,
              "expression": {
                "type": "Literal",
                "start": 96,
                "end": 101,
                "raw": "\"bar\"",
                "value": "bar"
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 92,
                "end": 95
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
