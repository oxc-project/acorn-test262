__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 94,
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
      "end": 51,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 50,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 19,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 22,
            "end": 50,
            "alternate": {
              "type": "FunctionExpression",
              "start": 36,
              "end": 49,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 47,
                "end": 49,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            },
            "consequent": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
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
    },
    {
      "type": "VariableDeclaration",
      "start": 52,
      "end": 93,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 58,
          "end": 92,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 58,
            "end": 59,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 62,
            "end": 92,
            "alternate": {
              "type": "FunctionExpression",
              "start": 77,
              "end": 90,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 88,
                "end": 90,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            },
            "consequent": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "test": {
              "type": "Literal",
              "start": 62,
              "end": 66,
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
