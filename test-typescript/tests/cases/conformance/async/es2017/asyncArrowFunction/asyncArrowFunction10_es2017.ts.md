asyncArrowFunction10_es2017.ts
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
            "type": "ArrowFunctionExpression",
            "start": 10,
            "end": 103,
            "async": true,
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
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 92,
                        "end": 100,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
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
                              "decorators": [],
                              "name": "await",
                              "optional": false
                            }
                          }
                        }
                      },
                      "init": null
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 33,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 20,
                "end": 33,
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 27,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false
                }
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
