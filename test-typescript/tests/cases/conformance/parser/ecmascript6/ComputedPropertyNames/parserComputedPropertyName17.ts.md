__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 26,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 26,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 26,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "v",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 8,
            "end": 26,
            "properties": [
              {
                "type": "Property",
                "start": 10,
                "end": 24,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 15,
                  "end": 16,
                  "name": "e",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 17,
                  "end": 24,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 18,
                      "end": 19,
                      "name": "v",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 21,
                    "end": 24,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "set",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
