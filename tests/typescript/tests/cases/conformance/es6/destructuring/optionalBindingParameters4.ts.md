__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 50,
  "end": 100,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 50,
      "end": 100,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 79,
        "end": 100,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 85,
            "end": 98,
            "argument": {
              "type": "Identifier",
              "start": 92,
              "end": 97,
              "decorators": [],
              "name": "cause",
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
        "start": 59,
        "end": 62,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 63,
          "end": 77,
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "start": 63,
            "end": 72,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 65,
                "end": 70,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 70,
                  "decorators": [],
                  "name": "cause",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 70,
                  "decorators": [],
                  "name": "cause",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "ObjectExpression",
            "start": 75,
            "end": 77,
            "properties": []
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
