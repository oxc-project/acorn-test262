__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 174,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 174,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 174,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 174,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 18,
              "name": "thing",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ObjectExpression",
              "start": 21,
              "end": 174,
              "properties": [
                {
                  "type": "Property",
                  "start": 27,
                  "end": 172,
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 27,
                    "end": 31,
                    "name": "doit",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 31,
                    "end": 172,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 34,
                      "end": 172,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 44,
                          "end": 166,
                          "argument": {
                            "type": "ObjectExpression",
                            "start": 51,
                            "end": 166,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 65,
                                "end": 77,
                                "method": false,
                                "shorthand": false,
                                "computed": true,
                                "key": {
                                  "type": "MemberExpression",
                                  "start": 66,
                                  "end": 72,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 66,
                                    "end": 70
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 71,
                                    "end": 72,
                                    "name": "a",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "value": {
                                  "type": "Literal",
                                  "start": 75,
                                  "end": 77,
                                  "value": "",
                                  "raw": "\"\""
                                },
                                "kind": "init",
                                "optional": false
                              }
                            ]
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
