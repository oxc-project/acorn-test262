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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 174,
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 27,
                    "end": 31,
                    "decorators": [],
                    "name": "doit",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 31,
                    "end": 172,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
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
                                "kind": "init",
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
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "value": {
                                  "type": "Literal",
                                  "start": 75,
                                  "end": 77,
                                  "value": "",
                                  "raw": "\"\""
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": true,
                                "optional": false
                              }
                            ]
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "method": true,
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
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
