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
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 62,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
            "properties": [
              {
                "type": "Property",
                "start": 65,
                "end": 70,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 70,
                  "decorators": [],
                  "name": "cause",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 70,
                  "decorators": [],
                  "name": "cause",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "ObjectExpression",
            "start": 75,
            "end": 77,
            "properties": []
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
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
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
