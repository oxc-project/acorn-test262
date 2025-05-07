__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 57,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 57,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 56,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 12,
            "end": 56,
            "properties": [
              {
                "type": "Property",
                "start": 18,
                "end": 54,
                "computed": false,
                "key": {
                  "type": "PrivateIdentifier",
                  "start": 22,
                  "end": 26,
                  "name": "foo"
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 26,
                  "end": 54,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 29,
                    "end": 54,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 39,
                        "end": 48,
                        "argument": {
                          "type": "Literal",
                          "start": 46,
                          "end": 48,
                          "raw": "\"\"",
                          "value": "",
                          "regex": null,
                          "bigint": null
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
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
