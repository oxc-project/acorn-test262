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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 99,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 10,
            "end": 99,
            "id": {
              "type": "Identifier",
              "start": 19,
              "end": 22,
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
              "start": 25,
              "end": 99,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 31,
                  "end": 58,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 35,
                      "end": 57,
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
                      "init": null,
                      "definite": false
                    }
                  ],
                  "declare": false
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
                      "optional": false,
                      "typeAnnotation": null
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
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ]
                    }
                  }
                }
              ]
            },
            "expression": false
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
