__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 71,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 71,
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
        "end": 71,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 20,
            "end": 69,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 24,
                "end": 69,
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
                  "end": 69,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 38,
                      "end": 63,
                      "kind": "init",
                      "key": {
                        "type": "YieldExpression",
                        "start": 40,
                        "end": 47,
                        "delegate": false,
                        "argument": {
                          "type": "Literal",
                          "start": 46,
                          "end": 47,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 48,
                        "end": 63,
                        "id": null,
                        "generator": true,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 51,
                          "end": 63,
                          "body": []
                        },
                        "expression": false
                      },
                      "method": true,
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
