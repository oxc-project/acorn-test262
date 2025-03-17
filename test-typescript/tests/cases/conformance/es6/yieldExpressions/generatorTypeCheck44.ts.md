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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 95,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 20,
            "end": 93,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 24,
                "end": 93,
                "definite": false,
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
                      "computed": true,
                      "key": {
                        "type": "YieldExpression",
                        "start": 43,
                        "end": 50,
                        "argument": {
                          "type": "Literal",
                          "start": 49,
                          "end": 50,
                          "raw": "0",
                          "value": 0
                        },
                        "delegate": false
                      },
                      "kind": "get",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 51,
                        "end": 87,
                        "async": false,
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
                                "raw": "0",
                                "value": 0
                              }
                            }
                          ]
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "returnType": null,
                        "typeParameters": null
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "g",
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
