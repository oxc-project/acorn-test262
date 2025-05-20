__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 47,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 47,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 17,
        "end": 47,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 21,
            "end": 45,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 25,
                "end": 45,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 29,
                  "end": 45,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 31,
                      "end": 43,
                      "computed": true,
                      "key": {
                        "type": "YieldExpression",
                        "start": 32,
                        "end": 37,
                        "argument": null,
                        "delegate": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "start": 40,
                        "end": 43,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 14,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
