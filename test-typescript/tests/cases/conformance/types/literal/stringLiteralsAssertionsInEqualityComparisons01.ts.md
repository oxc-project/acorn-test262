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
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 6,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 9,
            "end": 34,
            "left": {
              "type": "Literal",
              "start": 9,
              "end": 14,
              "value": "foo",
              "raw": "\"foo\""
            },
            "operator": "===",
            "right": {
              "type": "TSAsExpression",
              "start": 19,
              "end": 34,
              "expression": {
                "type": "Literal",
                "start": 19,
                "end": 24,
                "value": "bar",
                "raw": "\"bar\""
              },
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 28,
                "end": 34
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 44,
            "end": 71,
            "left": {
              "type": "Literal",
              "start": 44,
              "end": 49,
              "value": "foo",
              "raw": "\"foo\""
            },
            "operator": "!==",
            "right": {
              "type": "TSAsExpression",
              "start": 55,
              "end": 70,
              "expression": {
                "type": "Literal",
                "start": 55,
                "end": 60,
                "value": "bar",
                "raw": "\"bar\""
              },
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 64,
                "end": 70
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 77,
            "end": 78,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 81,
            "end": 102,
            "left": {
              "type": "Literal",
              "start": 81,
              "end": 86,
              "value": "foo",
              "raw": "\"foo\""
            },
            "operator": "==",
            "right": {
              "type": "TSTypeAssertion",
              "start": 91,
              "end": 101,
              "expression": {
                "type": "Literal",
                "start": 96,
                "end": 101,
                "value": "bar",
                "raw": "\"bar\""
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 92,
                "end": 95
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
