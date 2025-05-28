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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 20,
          "end": 57,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 21,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 24,
            "end": 57,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 25,
              "end": 31,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "start": 30,
                "end": 31,
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null
              },
              "id": null,
              "generator": false
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
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 38,
                    "end": 46,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 40,
                      "end": 46
                    }
                  }
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
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
