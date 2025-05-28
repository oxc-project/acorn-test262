__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 60,
  "end": 101,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 60,
      "end": 101,
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 70,
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
          "start": 71,
          "end": 74,
          "decorators": [],
          "name": "xyz",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 76,
        "end": 101,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 82,
            "end": 99,
            "argument": {
              "type": "MemberExpression",
              "start": 89,
              "end": 98,
              "object": {
                "type": "MemberExpression",
                "start": 89,
                "end": 96,
                "object": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 92,
                  "decorators": [],
                  "name": "xyz",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 96,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 97,
                "end": 98,
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
