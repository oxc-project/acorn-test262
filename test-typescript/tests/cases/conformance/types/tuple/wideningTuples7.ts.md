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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 10,
            "end": 99,
            "id": {
              "type": "Identifier",
              "start": 19,
              "end": 22,
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
                      "id": {
                        "type": "Identifier",
                        "start": 35,
                        "end": 57,
                        "name": "intermediate",
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
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "let",
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
                      "name": "intermediate",
                      "typeAnnotation": null,
                      "decorators": [],
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
                          "name": "undefined",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ]
                    }
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
