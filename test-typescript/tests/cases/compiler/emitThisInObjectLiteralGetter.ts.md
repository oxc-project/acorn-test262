__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 82,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 81,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 80,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 13,
            "decorators": [],
            "name": "example",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 16,
            "end": 80,
            "properties": [
              {
                "type": "Property",
                "start": 22,
                "end": 78,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 29,
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
                  "start": 29,
                  "end": 78,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 32,
                    "end": 78,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 42,
                        "end": 72,
                        "argument": {
                          "type": "ArrowFunctionExpression",
                          "start": 49,
                          "end": 71,
                          "async": false,
                          "body": {
                            "type": "CallExpression",
                            "start": 57,
                            "end": 71,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 66,
                                "end": 70,
                                "decorators": [],
                                "name": "item",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 57,
                              "end": 65,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 57,
                                "end": 61
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 62,
                                "end": 65,
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "optional": false,
                            "typeArguments": null
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 49,
                              "end": 53,
                              "decorators": [],
                              "name": "item",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
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
