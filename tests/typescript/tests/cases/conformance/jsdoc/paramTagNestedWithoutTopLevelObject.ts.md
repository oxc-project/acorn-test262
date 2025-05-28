__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 33,
  "end": 70,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 33,
      "end": 70,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 43,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 44,
          "end": 47,
          "decorators": [],
          "name": "xyz",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 49,
        "end": 70,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 55,
            "end": 68,
            "argument": {
              "type": "MemberExpression",
              "start": 62,
              "end": 67,
              "object": {
                "type": "Identifier",
                "start": 62,
                "end": 65,
                "decorators": [],
                "name": "xyz",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 66,
                "end": 67,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
