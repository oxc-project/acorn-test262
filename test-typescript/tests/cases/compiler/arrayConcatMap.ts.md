__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 67,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 67,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 66,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 8,
            "end": 66,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 57,
                "end": 65,
                "async": false,
                "body": {
                  "type": "MemberExpression",
                  "start": 62,
                  "end": 65,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 62,
                    "end": 63,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 65,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 57,
                    "end": 58,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 8,
              "end": 56,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 8,
                "end": 41,
                "arguments": [
                  {
                    "type": "ArrayExpression",
                    "start": 18,
                    "end": 28,
                    "elements": [
                      {
                        "type": "ObjectExpression",
                        "start": 19,
                        "end": 27,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 21,
                            "end": 25,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 21,
                              "end": 22,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 24,
                              "end": 25,
                              "raw": "1",
                              "value": 1
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "ArrayExpression",
                    "start": 30,
                    "end": 40,
                    "elements": [
                      {
                        "type": "ObjectExpression",
                        "start": 31,
                        "end": 39,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 33,
                            "end": 37,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 33,
                              "end": 34,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 36,
                              "end": 37,
                              "raw": "2",
                              "value": 2
                            }
                          }
                        ]
                      }
                    ]
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 8,
                  "end": 17,
                  "computed": false,
                  "object": {
                    "type": "ArrayExpression",
                    "start": 8,
                    "end": 10,
                    "elements": []
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 11,
                    "end": 17,
                    "decorators": [],
                    "name": "concat",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 53,
                "end": 56,
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
