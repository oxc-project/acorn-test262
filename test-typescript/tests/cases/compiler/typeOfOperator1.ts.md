__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 62,
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
            "optional": false,
            "typeAnnotation": null
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
      "start": 11,
      "end": 36,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 15,
          "end": 35,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 15,
            "end": 24,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 24,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 18,
                "end": 24
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "start": 27,
            "end": 35,
            "argument": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "typeof",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 37,
      "end": 62,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 41,
          "end": 61,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 50,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 50,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 44,
                "end": 50
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "start": 53,
            "end": 61,
            "argument": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "typeof",
            "prefix": true
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
