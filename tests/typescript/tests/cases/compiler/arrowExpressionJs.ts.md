__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 95,
  "end": 159,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 95,
      "end": 159,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 101,
          "end": 158,
          "id": {
            "type": "Identifier",
            "start": 101,
            "end": 116,
            "decorators": [],
            "name": "cloneObjectGood",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 119,
            "end": 158,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 119,
                "end": 124,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "start": 145,
              "end": 157,
              "properties": [
                {
                  "type": "SpreadElement",
                  "start": 147,
                  "end": 155,
                  "argument": {
                    "type": "Identifier",
                    "start": 150,
                    "end": 155,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
