__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 35,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 35,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 34,
          "definite": false,
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
            "end": 34,
            "properties": [
              {
                "type": "Property",
                "start": 10,
                "end": 32,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 14,
                  "end": 17,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 17,
                  "end": 32,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 29,
                    "end": 32,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 18,
                      "end": 27,
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 19,
                        "end": 27,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 21,
                          "end": 27
                        }
                      }
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
