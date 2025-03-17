__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 50,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 50,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 49,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 0,
          "end": 5,
          "name": "Array",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 8,
          "end": 49,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 18,
              "end": 26,
              "name": "n",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 19,
                "end": 26,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 20,
                  "end": 26
                }
              },
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 28,
              "end": 36,
              "name": "s",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 29,
                "end": 36,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 30,
                  "end": 36
                }
              },
              "decorators": [],
              "optional": false
            }
          ],
          "body": {
            "type": "BlockStatement",
            "start": 38,
            "end": 49,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 39,
                "end": 48,
                "argument": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 47,
                  "name": "n",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "declare": false,
          "typeParameters": null,
          "returnType": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
