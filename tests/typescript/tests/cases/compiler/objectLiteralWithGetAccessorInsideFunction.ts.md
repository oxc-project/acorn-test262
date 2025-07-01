__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
      },
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
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 25,
                  "end": 26
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "get",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_extraOccluded",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 43,
                        "end": 57
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
                              "type": "VariableDeclaration",
                              "kind": "var",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "occluded",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 78,
                                    "end": 86
                                  },
                                  "init": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 89,
                                    "end": 90
                                  },
                                  "definite": false,
                                  "start": 78,
                                  "end": 90
                                }
                              ],
                              "declare": false,
                              "start": 74,
                              "end": 91
                            },
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "occluded",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 111,
                                "end": 119
                              },
                              "start": 104,
                              "end": 120
                            }
                          ],
                          "start": 60,
                          "end": 130
                        },
                        "expression": false,
                        "start": 57,
                        "end": 130
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 39,
                      "end": 130
                    }
                  ],
                  "start": 29,
                  "end": 137
                },
                "definite": false,
                "start": 25,
                "end": 137
              }
            ],
            "declare": false,
            "start": 21,
            "end": 137
          }
        ],
        "start": 15,
        "end": 139
      },
      "expression": false,
      "start": 0,
      "end": 139
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 139
}
```
