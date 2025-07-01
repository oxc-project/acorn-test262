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
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": true,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 20,
                  "end": 27
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "start": 28,
                      "end": 32
                    }
                  ],
                  "start": 27,
                  "end": 33
                },
                "start": 20,
                "end": 33
              },
              "start": 18,
              "end": 33
            },
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "await",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 95,
                              "end": 100
                            },
                            "typeArguments": null,
                            "start": 95,
                            "end": 100
                          },
                          "start": 93,
                          "end": 100
                        },
                        "start": 92,
                        "end": 100
                      },
                      "init": null,
                      "definite": false,
                      "start": 92,
                      "end": 100
                    }
                  ],
                  "declare": false,
                  "start": 88,
                  "end": 101
                }
              ],
              "start": 37,
              "end": 103
            },
            "id": null,
            "generator": false,
            "start": 10,
            "end": 103
          },
          "definite": false,
          "start": 4,
          "end": 103
        }
      ],
      "declare": false,
      "start": 0,
      "end": 103
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 103
}
```
