__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 31,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 8,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 8,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 7,
                "end": 8,
                "literal": {
                  "type": "Literal",
                  "start": 7,
                  "end": 8,
                  "value": 1,
                  "raw": "1"
                }
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "start": 11,
            "end": 13,
            "operator": "+",
            "argument": {
              "type": "Literal",
              "start": 12,
              "end": 13,
              "value": 1,
              "raw": "1"
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 16,
      "end": 31,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 20,
          "end": 30,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 25,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 25,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 23,
                "end": 25,
                "literal": {
                  "type": "UnaryExpression",
                  "start": 23,
                  "end": 25,
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "start": 24,
                    "end": 25,
                    "value": 1,
                    "raw": "1"
                  },
                  "prefix": true
                }
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "start": 28,
            "end": 30,
            "operator": "-",
            "argument": {
              "type": "Literal",
              "start": 29,
              "end": 30,
              "value": 1,
              "raw": "1"
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
