__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 60,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 60,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 59,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 41,
            "decorators": [],
            "name": "iter",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 8,
              "end": 41,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 10,
                "end": 41,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 18,
                  "end": 41,
                  "params": [
                    {
                      "type": "TSFunctionType",
                      "start": 19,
                      "end": 40,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 20,
                          "end": 29,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 21,
                            "end": 29,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 23,
                              "end": 29
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 31,
                        "end": 40,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 34,
                          "end": 40
                        }
                      },
                      "typeParameters": null
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 10,
                  "end": 18,
                  "decorators": [],
                  "name": "Iterable",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 44,
            "end": 59,
            "elements": [
              {
                "type": "ArrowFunctionExpression",
                "start": 45,
                "end": 58,
                "async": false,
                "body": {
                  "type": "MemberExpression",
                  "start": 50,
                  "end": 58,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 50,
                    "end": 51,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 58,
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 45,
                    "end": 46,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ]
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
