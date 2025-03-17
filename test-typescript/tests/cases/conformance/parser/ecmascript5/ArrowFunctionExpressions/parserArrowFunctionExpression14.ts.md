__ESTREE_TEST__:PASS:
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
        "test": {
          "type": "CallExpression",
          "start": 0,
          "end": 3,
          "callee": {
            "type": "Identifier",
            "start": 0,
            "end": 1,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        },
        "consequent": {
          "type": "ArrowFunctionExpression",
          "start": 6,
          "end": 42,
          "id": null,
          "expression": true,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 7,
              "end": 16,
              "name": "b",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 8,
                "end": 16,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 10,
                  "end": 16
                }
              },
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 18,
              "end": 28,
              "name": "c",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 20,
                "end": 28,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 22,
                  "end": 28
                }
              },
              "decorators": [],
              "optional": true
            }
          ],
          "body": {
            "type": "CallExpression",
            "start": 39,
            "end": 42,
            "callee": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "typeParameters": null,
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
        "alternate": {
          "type": "Identifier",
          "start": 45,
          "end": 46,
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
