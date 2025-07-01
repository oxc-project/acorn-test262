__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 8,
              "end": 13
            },
            "operator": "===",
            "right": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": "bar",
                "raw": "\"bar\"",
                "start": 18,
                "end": 23
              },
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 27,
                "end": 33
              },
              "start": 18,
              "end": 33
            },
            "start": 8,
            "end": 33
          },
          "definite": false,
          "start": 4,
          "end": 33
        }
      ],
      "declare": false,
      "start": 0,
      "end": 34
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 39,
            "end": 40
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 43,
              "end": 48
            },
            "operator": "!==",
            "right": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": "bar",
                "raw": "\"bar\"",
                "start": 54,
                "end": 59
              },
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 63,
                "end": 69
              },
              "start": 54,
              "end": 69
            },
            "start": 43,
            "end": 70
          },
          "definite": false,
          "start": 39,
          "end": 70
        }
      ],
      "declare": false,
      "start": 35,
      "end": 71
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 76,
            "end": 77
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 80,
              "end": 85
            },
            "operator": "==",
            "right": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 91,
                "end": 94
              },
              "expression": {
                "type": "Literal",
                "value": "bar",
                "raw": "\"bar\"",
                "start": 95,
                "end": 100
              },
              "start": 90,
              "end": 100
            },
            "start": 80,
            "end": 101
          },
          "definite": false,
          "start": 76,
          "end": 101
        }
      ],
      "declare": false,
      "start": 72,
      "end": 102
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 102
}
```
