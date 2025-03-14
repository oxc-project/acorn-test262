fileTs.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 48,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 47,
      "expression": {
        "type": "ConditionalExpression",
        "start": 0,
        "end": 46,
        "alternate": {
          "type": "Identifier",
          "start": 45,
          "end": 46,
          "decorators": [],
          "name": "e",
          "optional": false
        },
        "consequent": {
          "type": "ArrowFunctionExpression",
          "start": 6,
          "end": 42,
          "async": false,
          "body": {
            "type": "CallExpression",
            "start": 39,
            "end": 42,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "decorators": [],
              "name": "d",
              "optional": false
            },
            "optional": false
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 7,
              "end": 16,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 8,
                "end": 16,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 10,
                  "end": 16
                }
              }
            },
            {
              "type": "Identifier",
              "start": 18,
              "end": 28,
              "decorators": [],
              "name": "c",
              "optional": true,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 20,
                "end": 28,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 22,
                  "end": 28
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 29,
            "end": 35,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 31,
              "end": 35
            }
          }
        },
        "test": {
          "type": "CallExpression",
          "start": 0,
          "end": 3,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 0,
            "end": 1,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "optional": false
        }
      }
    }
  ],
  "sourceType": "module"
}
```
