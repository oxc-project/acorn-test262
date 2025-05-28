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
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 17,
        "end": 47,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 21,
            "end": 45,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 25,
                "end": 45,
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
                      "kind": "init",
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
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
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
