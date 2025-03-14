for-of10.ts
```json
{
  "type": "Program",
  "start": 16,
  "end": 49,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 16,
      "end": 30,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 20,
          "end": 29,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 29,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 29,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 23,
                "end": 29
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
      "type": "ForOfStatement",
      "start": 31,
      "end": 49,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 46,
        "end": 49,
        "body": []
      },
      "left": {
        "type": "Identifier",
        "start": 36,
        "end": 37,
        "decorators": [],
        "name": "v",
        "optional": false
      },
      "right": {
        "type": "ArrayExpression",
        "start": 41,
        "end": 44,
        "elements": [
          {
            "type": "Literal",
            "start": 42,
            "end": 43,
            "raw": "0",
            "value": 0
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
