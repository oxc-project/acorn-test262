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
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 14,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "key": {
                        "type": "YieldExpression",
                        "start": 32,
                        "end": 37,
                        "delegate": false,
                        "argument": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 40,
                        "end": 43,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
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
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
