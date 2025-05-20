__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 77,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 24,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 14,
        "decorators": [],
        "name": "undefined",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSStringKeyword",
        "start": 17,
        "end": 23
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 25,
      "end": 77,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 55,
        "end": 77,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 58,
            "end": 75,
            "argument": {
              "type": "Identifier",
              "start": 65,
              "end": 74,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 35,
        "decorators": [],
        "name": "p",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 36,
          "end": 53,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 36,
            "end": 45,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 48,
            "end": 53,
            "raw": "\"wat\"",
            "value": "wat"
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
