__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 67,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 67,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 13,
        "end": 67,
        "body": [
          {
            "type": "WithStatement",
            "start": 16,
            "end": 65,
            "object": {
              "type": "ObjectExpression",
              "start": 21,
              "end": 23,
              "properties": []
            },
            "body": {
              "type": "BlockStatement",
              "start": 25,
              "end": 65,
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "start": 29,
                  "end": 62,
                  "id": {
                    "type": "Identifier",
                    "start": 38,
                    "end": 39,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 42,
                    "end": 62,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 47,
                        "end": 58,
                        "expression": {
                          "type": "ArrowFunctionExpression",
                          "start": 47,
                          "end": 57,
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "ThisExpression",
                            "start": 53,
                            "end": 57
                          },
                          "id": null,
                          "generator": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "expression": false
                }
              ]
            }
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
