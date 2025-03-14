destructuringVoidStrictNullChecks.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 37,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 22,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 21,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 21,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 21,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 17,
                "end": 21
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 23,
      "end": 36,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 29,
          "end": 35,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 29,
            "end": 31,
            "decorators": [],
            "optional": false,
            "properties": []
          },
          "init": {
            "type": "Identifier",
            "start": 34,
            "end": 35,
            "decorators": [],
            "name": "v",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
