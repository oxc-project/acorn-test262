__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 26,
            "end": 27
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 36,
                  "end": 39
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "setTimeout",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 52,
                            "end": 62
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "FunctionExpression",
                              "id": null,
                              "generator": false,
                              "async": false,
                              "declare": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "arguments",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 76,
                                      "end": 85
                                    },
                                    "directive": null,
                                    "start": 76,
                                    "end": 85
                                  }
                                ],
                                "start": 74,
                                "end": 87
                              },
                              "expression": false,
                              "start": 63,
                              "end": 87
                            },
                            {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 89,
                              "end": 90
                            }
                          ],
                          "optional": false,
                          "start": 52,
                          "end": 91
                        },
                        "directive": null,
                        "start": 52,
                        "end": 92
                      }
                    ],
                    "start": 42,
                    "end": 98
                  },
                  "expression": false,
                  "start": 39,
                  "end": 98
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 36,
                "end": 98
              }
            ],
            "start": 30,
            "end": 100
          },
          "definite": false,
          "start": 26,
          "end": 100
        }
      ],
      "declare": false,
      "start": 20,
      "end": 100
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 20,
  "end": 100
}
```
