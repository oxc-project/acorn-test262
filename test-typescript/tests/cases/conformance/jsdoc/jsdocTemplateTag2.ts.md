__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 109,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 109,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 108,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 10,
            "end": 108,
            "properties": [
              {
                "type": "Property",
                "start": 73,
                "end": 105,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 73,
                  "end": 74,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 76,
                  "end": 105,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 89,
                    "end": 105,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 93,
                        "end": 102,
                        "argument": {
                          "type": "Identifier",
                          "start": 100,
                          "end": 101,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 86,
                      "end": 87,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
