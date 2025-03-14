classExpression2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 41,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 11,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 11,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 12,
      "end": 41,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 16,
          "end": 40,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "decorators": [],
            "name": "v",
            "optional": false
          },
          "init": {
            "type": "ClassExpression",
            "start": 20,
            "end": 40,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 38,
              "end": 40,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "D",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
