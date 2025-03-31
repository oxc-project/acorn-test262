__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 58,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 16,
      "end": 58,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 20,
          "end": 57,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 21,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 24,
            "end": 57,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 25,
              "end": 31,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "Identifier",
                "start": 30,
                "end": 31,
                "name": "v",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "returnType": null
            },
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 36,
              "end": 57,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 37,
                  "end": 46,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 38,
                    "end": 46,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 40,
                      "end": 46
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 48,
                "end": 57,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 51,
                  "end": 57
                }
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
