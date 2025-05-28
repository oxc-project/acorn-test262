__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 81,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 81,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 80,
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
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 29,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 29,
                  "end": 78,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
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
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
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
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
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
                            "optional": false
                          },
                          "id": null,
                          "generator": false
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
