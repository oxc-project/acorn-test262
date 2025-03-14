externFunc.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 60,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 43,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 25,
        "decorators": [],
        "name": "parseInt",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 26,
          "end": 34,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 27,
            "end": 34,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 28,
              "end": 34
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 35,
        "end": 42,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 36,
          "end": 42
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 45,
      "end": 59,
      "expression": {
        "type": "CallExpression",
        "start": 45,
        "end": 58,
        "arguments": [
          {
            "type": "Literal",
            "start": 54,
            "end": 57,
            "raw": "\"2\"",
            "value": "2"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 45,
          "end": 53,
          "decorators": [],
          "name": "parseInt",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
