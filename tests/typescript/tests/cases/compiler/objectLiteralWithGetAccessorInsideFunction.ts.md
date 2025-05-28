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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 139,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 21,
            "end": 137,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 25,
                "end": 137,
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
                      "kind": "get",
                      "key": {
                        "type": "Identifier",
                        "start": 43,
                        "end": 57,
                        "decorators": [],
                        "name": "_extraOccluded",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 57,
                        "end": 130,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 60,
                          "end": 130,
                          "body": [
                            {
                              "type": "VariableDeclaration",
                              "start": 74,
                              "end": 91,
                              "kind": "var",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 78,
                                  "end": 90,
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
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "definite": false
                                }
                              ],
                              "declare": false
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
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
