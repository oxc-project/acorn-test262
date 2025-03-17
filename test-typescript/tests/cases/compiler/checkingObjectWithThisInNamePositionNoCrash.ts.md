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
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 174,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 174,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 18,
              "decorators": [],
              "name": "thing",
              "optional": false,
              "typeAnnotation": null
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
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 27,
                    "end": 31,
                    "decorators": [],
                    "name": "doit",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": true,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 31,
                    "end": 172,
                    "async": false,
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
                                "computed": true,
                                "key": {
                                  "type": "MemberExpression",
                                  "start": 66,
                                  "end": 72,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 66,
                                    "end": 70
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 71,
                                    "end": 72,
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "Literal",
                                  "start": 75,
                                  "end": 77,
                                  "raw": "\"\"",
                                  "value": ""
                                }
                              }
                            ]
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
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
