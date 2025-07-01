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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 20,
            "end": 21
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 25,
                  "end": 26
                }
              ],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 30,
                "end": 31
              },
              "id": null,
              "generator": false,
              "start": 25,
              "end": 31
            },
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 40,
                      "end": 46
                    },
                    "start": 38,
                    "end": 46
                  },
                  "start": 37,
                  "end": 46
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 51,
                  "end": 57
                },
                "start": 48,
                "end": 57
              },
              "start": 36,
              "end": 57
            },
            "start": 24,
            "end": 57
          },
          "definite": false,
          "start": 20,
          "end": 57
        }
      ],
      "declare": false,
      "start": 16,
      "end": 58
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 16,
  "end": 58
}
```
