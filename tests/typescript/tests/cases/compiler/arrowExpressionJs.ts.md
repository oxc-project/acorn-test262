__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "cloneObjectGood",
            "optional": false,
            "typeAnnotation": null,
            "start": 101,
            "end": 116
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 119,
                "end": 124
              }
            ],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 150,
                    "end": 155
                  },
                  "start": 147,
                  "end": 155
                }
              ],
              "start": 145,
              "end": 157
            },
            "id": null,
            "generator": false,
            "start": 119,
            "end": 158
          },
          "definite": false,
          "start": 101,
          "end": 158
        }
      ],
      "declare": false,
      "start": 95,
      "end": 159
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 95,
  "end": 159
}
```
