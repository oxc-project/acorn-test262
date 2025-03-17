__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 58,
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
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "PrivateIdentifier",
                  "start": 22,
                  "end": 26,
                  "name": "foo"
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 26,
                  "end": 54,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
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
                          "value": "",
                          "raw": "\"\""
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "get",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
