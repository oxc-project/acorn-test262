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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 44,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 15,
                  "end": 18,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 18,
                  "end": 42,
                  "id": null,
                  "generator": true,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
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
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
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
