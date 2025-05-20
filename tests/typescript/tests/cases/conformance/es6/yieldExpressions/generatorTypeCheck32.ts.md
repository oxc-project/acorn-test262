__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 51,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 13,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 7,
                "end": 13
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 15,
      "end": 51,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 19,
          "end": 50,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 19,
            "end": 34,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 34,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 22,
                "end": 34,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 25,
                  "end": 34,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 28,
                    "end": 34
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 37,
            "end": 50,
            "async": false,
            "body": {
              "type": "YieldExpression",
              "start": 43,
              "end": 50,
              "argument": {
                "type": "Identifier",
                "start": 49,
                "end": 50,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "delegate": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
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
