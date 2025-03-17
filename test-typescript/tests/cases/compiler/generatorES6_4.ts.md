__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 44,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 44,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 44,
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
            "end": 44,
            "properties": [
              {
                "type": "Property",
                "start": 14,
                "end": 42,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 15,
                  "end": 18,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 18,
                  "end": 42,
                  "id": null,
                  "expression": false,
                  "generator": true,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 21,
                    "end": 42,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 30,
                        "end": 37,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 30,
                          "end": 37,
                          "delegate": false,
                          "argument": {
                            "type": "Literal",
                            "start": 36,
                            "end": 37,
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
