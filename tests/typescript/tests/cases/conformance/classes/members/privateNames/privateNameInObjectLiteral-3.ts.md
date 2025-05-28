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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 56,
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
                "kind": "get",
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
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
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
                  "expression": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
