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
        "start": 46,
        "end": 47
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
          "start": 48,
          "end": 51
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "xyz",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 66,
                  "end": 69
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 70,
                  "end": 73
                },
                "optional": false,
                "computed": false,
                "start": 66,
                "end": 73
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 74,
                "end": 75
              },
              "optional": false,
              "computed": false,
              "start": 66,
              "end": 75
            },
            "start": 59,
            "end": 76
          }
        ],
        "start": 53,
        "end": 78
      },
      "expression": false,
      "start": 37,
      "end": 78
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 37,
  "end": 78
}
```
