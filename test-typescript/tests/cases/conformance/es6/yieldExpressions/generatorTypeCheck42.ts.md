__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 70,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 70,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 70,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 20,
            "end": 68,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 24,
                "end": 68,
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
                  "end": 68,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 38,
                      "end": 62,
                      "computed": true,
                      "key": {
                        "type": "YieldExpression",
                        "start": 39,
                        "end": 46,
                        "argument": {
                          "type": "Literal",
                          "start": 45,
                          "end": 46,
                          "raw": "0",
                          "value": 0
                        },
                        "delegate": false
                      },
                      "kind": "init",
                      "method": true,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 47,
                        "end": 62,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 50,
                          "end": 62,
                          "body": []
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
