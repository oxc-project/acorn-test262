__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 78,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 77,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 77,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "v",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 8,
            "end": 77,
            "properties": [
              {
                "type": "Property",
                "start": 40,
                "end": 75,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 47,
                  "decorators": [],
                  "name": "bar",
                  "optional": false
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 47,
                  "end": 75,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 58,
                    "end": 75,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 62,
                        "end": 72,
                        "argument": {
                          "type": "Literal",
                          "start": 69,
                          "end": 71,
                          "raw": "12",
                          "value": 12
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 49,
                    "end": 57,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 51,
                      "end": 57
                    }
                  }
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
