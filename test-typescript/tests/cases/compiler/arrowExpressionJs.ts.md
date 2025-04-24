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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 101,
          "end": 158,
          "definite": false,
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
            "async": false,
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
            "expression": true,
            "generator": false,
            "id": null,
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
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
