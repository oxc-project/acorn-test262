__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 95,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 95,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "g",
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
        "start": 14,
        "end": 95,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 20,
            "end": 93,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 24,
                "end": 93,
                "id": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 25,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 28,
                  "end": 93,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 38,
                      "end": 87,
                      "kind": "get",
                      "key": {
                        "type": "YieldExpression",
                        "start": 43,
                        "end": 50,
                        "delegate": false,
                        "argument": {
                          "type": "Literal",
                          "start": 49,
                          "end": 50,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 51,
                        "end": 87,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 54,
                          "end": 87,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 68,
                              "end": 77,
                              "argument": {
                                "type": "Literal",
                                "start": 75,
                                "end": 76,
                                "value": 0,
                                "raw": "0"
                              }
                            }
                          ]
                        },
                        "expression": false
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
