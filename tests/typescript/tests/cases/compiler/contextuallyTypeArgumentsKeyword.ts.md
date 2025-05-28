__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 20,
  "end": 100,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 20,
      "end": 100,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 26,
          "end": 100,
          "id": {
            "type": "Identifier",
            "start": 26,
            "end": 27,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 30,
            "end": 100,
            "properties": [
              {
                "type": "Property",
                "start": 36,
                "end": 98,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 39,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 39,
                  "end": 98,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 42,
                    "end": 98,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 52,
                        "end": 92,
                        "expression": {
                          "type": "CallExpression",
                          "start": 52,
                          "end": 91,
                          "callee": {
                            "type": "Identifier",
                            "start": 52,
                            "end": 62,
                            "decorators": [],
                            "name": "setTimeout",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "FunctionExpression",
                              "start": 63,
                              "end": 87,
                              "id": null,
                              "generator": false,
                              "async": false,
                              "declare": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "start": 74,
                                "end": 87,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 76,
                                    "end": 85,
                                    "expression": {
                                      "type": "Identifier",
                                      "start": 76,
                                      "end": 85,
                                      "decorators": [],
                                      "name": "arguments",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "directive": null
                                  }
                                ]
                              },
                              "expression": false
                            },
                            {
                              "type": "Literal",
                              "start": 89,
                              "end": 90,
                              "value": 0,
                              "raw": "0"
                            }
                          ],
                          "optional": false
                        },
                        "directive": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
