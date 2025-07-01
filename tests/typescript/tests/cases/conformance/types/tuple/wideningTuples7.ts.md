__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 7
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 22
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
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "intermediate",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTupleType",
                            "elementTypes": [
                              {
                                "type": "TSStringKeyword",
                                "start": 50,
                                "end": 56
                              }
                            ],
                            "start": 49,
                            "end": 57
                          },
                          "start": 47,
                          "end": 57
                        },
                        "start": 35,
                        "end": 57
                      },
                      "init": null,
                      "definite": false,
                      "start": 35,
                      "end": 57
                    }
                  ],
                  "declare": false,
                  "start": 31,
                  "end": 58
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "intermediate",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 70,
                      "end": 82
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 86,
                          "end": 95
                        }
                      ],
                      "start": 85,
                      "end": 96
                    },
                    "start": 70,
                    "end": 96
                  },
                  "start": 63,
                  "end": 97
                }
              ],
              "start": 25,
              "end": 99
            },
            "expression": false,
            "start": 10,
            "end": 99
          },
          "definite": false,
          "start": 4,
          "end": 99
        }
      ],
      "declare": false,
      "start": 0,
      "end": 100
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 100
}
```
