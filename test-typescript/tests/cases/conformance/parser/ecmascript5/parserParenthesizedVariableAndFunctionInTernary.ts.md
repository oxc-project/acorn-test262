__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 50,
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
            "end": 10,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 10,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 7,
                "end": 10
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 12,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 48,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 19,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 22,
            "end": 48,
            "alternate": {
              "type": "FunctionExpression",
              "start": 35,
              "end": 48,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 46,
                "end": 48,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            },
            "consequent": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "test": {
              "type": "Literal",
              "start": 22,
              "end": 26,
              "raw": "true",
              "value": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
