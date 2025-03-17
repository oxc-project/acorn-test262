__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 104,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 103,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 103,
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
            "type": "ArrowFunctionExpression",
            "start": 10,
            "end": 103,
            "id": null,
            "expression": false,
            "generator": false,
            "async": true,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 37,
              "end": 103,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 88,
                  "end": 101,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 92,
                      "end": 100,
                      "id": {
                        "type": "Identifier",
                        "start": 92,
                        "end": 100,
                        "name": "v",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 93,
                          "end": 100,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 95,
                            "end": 100,
                            "typeName": {
                              "type": "Identifier",
                              "start": 95,
                              "end": 100,
                              "name": "await",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                }
              ]
            },
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 33,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 20,
                "end": 33,
                "typeName": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 27,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 27,
                  "end": 33,
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "start": 28,
                      "end": 32
                    }
                  ]
                }
              }
            }
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
