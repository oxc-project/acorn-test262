__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 43
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "xyz",
          "optional": false,
          "typeAnnotation": null,
          "start": 44,
          "end": 47
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "xyz",
                "optional": false,
                "typeAnnotation": null,
                "start": 62,
                "end": 65
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 66,
                "end": 67
              },
              "optional": false,
              "computed": false,
              "start": 62,
              "end": 67
            },
            "start": 55,
            "end": 68
          }
        ],
        "start": 49,
        "end": 70
      },
      "expression": false,
      "start": 33,
      "end": 70
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 33,
  "end": 70
}
```
