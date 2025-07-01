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
            "type": "Literal",
            "value": 20,
            "raw": "20",
            "start": 8,
            "end": 10
          },
          "definite": false,
          "start": 4,
          "end": 10
        }
      ],
      "declare": false,
      "start": 0,
      "end": 11
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
            "start": 16,
            "end": 17
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 21
            },
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 25,
              "end": 31
            },
            "start": 20,
            "end": 31
          },
          "definite": false,
          "start": 16,
          "end": 31
        }
      ],
      "declare": false,
      "start": 12,
      "end": 32
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
            "name": "as",
            "optional": false,
            "typeAnnotation": null,
            "start": 37,
            "end": 39
          },
          "init": {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 42,
            "end": 49
          },
          "definite": false,
          "start": 37,
          "end": 49
        }
      ],
      "declare": false,
      "start": 33,
      "end": 50
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
            "name": "as1",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 58
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "as",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 63
            },
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 67,
              "end": 73
            },
            "start": 61,
            "end": 73
          },
          "definite": false,
          "start": 55,
          "end": 73
        }
      ],
      "declare": false,
      "start": 51,
      "end": 74
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 74
}
```
