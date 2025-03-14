__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 100,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 100,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 99,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 10,
            "end": 99,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 25,
              "end": 99,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 31,
                  "end": 58,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 35,
                      "end": 57,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 35,
                        "end": 57,
                        "decorators": [],
                        "name": "intermediate",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 47,
                          "end": 57,
                          "typeAnnotation": {
                            "type": "TSTupleType",
                            "start": 49,
                            "end": 57,
                            "elementTypes": [
                              {
                                "type": "TSStringKeyword",
                                "start": 50,
                                "end": 56
                              }
                            ]
                          }
                        }
                      },
                      "init": null
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                },
                {
                  "type": "ReturnStatement",
                  "start": 63,
                  "end": 97,
                  "argument": {
                    "type": "AssignmentExpression",
                    "start": 70,
                    "end": 96,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 70,
                      "end": 82,
                      "decorators": [],
                      "name": "intermediate",
                      "optional": false
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "start": 85,
                      "end": 96,
                      "elements": [
                        {
                          "type": "Identifier",
                          "start": 86,
                          "end": 95,
                          "decorators": [],
                          "name": "undefined",
                          "optional": false
                        }
                      ]
                    }
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 19,
              "end": 22,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "params": []
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
