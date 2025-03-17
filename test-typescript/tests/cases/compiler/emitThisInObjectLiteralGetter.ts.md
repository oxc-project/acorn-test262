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
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 13,
            "name": "example",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 29,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 29,
                  "end": 78,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
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
                          "id": null,
                          "expression": true,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 49,
                              "end": 53,
                              "name": "item",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "CallExpression",
                            "start": 57,
                            "end": 71,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 57,
                              "end": 65,
                              "object": {
                                "type": "ThisExpression",
                                "start": 57,
                                "end": 61
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 62,
                                "end": 65,
                                "name": "bar",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 66,
                                "end": 70,
                                "name": "item",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          },
                          "typeParameters": null,
                          "returnType": null
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
