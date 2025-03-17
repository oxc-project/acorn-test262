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
        "name": "bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 43,
                        "end": 57,
                        "name": "_extraOccluded",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 57,
                        "end": 130,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
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
                                  "id": {
                                    "type": "Identifier",
                                    "start": 78,
                                    "end": 86,
                                    "name": "occluded",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
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
                              "kind": "var",
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
                                "name": "occluded",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
