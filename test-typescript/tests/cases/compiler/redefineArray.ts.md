redefineArray.ts
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
          "decorators": [],
          "name": "Array",
          "optional": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 8,
          "end": 49,
          "async": false,
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
                  "decorators": [],
                  "name": "n",
                  "optional": false
                }
              }
            ]
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 18,
              "end": 26,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 19,
                "end": 26,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 20,
                  "end": 26
                }
              }
            },
            {
              "type": "Identifier",
              "start": 28,
              "end": 36,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 29,
                "end": 36,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 30,
                  "end": 36
                }
              }
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script"
}
```
