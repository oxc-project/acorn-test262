__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 139,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 139,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 139,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 21,
            "end": 137,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 25,
                "end": 137,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 29,
                  "end": 137,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 39,
                      "end": 130,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 43,
                        "end": 57,
                        "decorators": [],
                        "name": "_extraOccluded",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "get",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "FunctionExpression",
                        "start": 57,
                        "end": 130,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 60,
                          "end": 130,
                          "body": [
                            {
                              "type": "VariableDeclaration",
                              "start": 74,
                              "end": 91,
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 78,
                                  "end": 90,
                                  "definite": false,
                                  "id": {
                                    "type": "Identifier",
                                    "start": 78,
                                    "end": 86,
                                    "decorators": [],
                                    "name": "occluded",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "init": {
                                    "type": "Literal",
                                    "start": 89,
                                    "end": 90,
                                    "raw": "0",
                                    "value": 0
                                  }
                                }
                              ],
                              "declare": false,
                              "kind": "var"
                            },
                            {
                              "type": "ReturnStatement",
                              "start": 104,
                              "end": 120,
                              "argument": {
                                "type": "Identifier",
                                "start": 111,
                                "end": 119,
                                "decorators": [],
                                "name": "occluded",
                                "optional": false,
                                "typeAnnotation": null
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
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
