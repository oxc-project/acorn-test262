__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 76,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 16,
      "end": 76,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 20,
          "end": 75,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 57,
            "name": "iter",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 24,
              "end": 57,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 26,
                "end": 57,
                "typeName": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 34,
                  "name": "Iterable",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 34,
                  "end": 57,
                  "params": [
                    {
                      "type": "TSFunctionType",
                      "start": 35,
                      "end": 56,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 36,
                          "end": 45,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 37,
                            "end": 45,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 39,
                              "end": 45
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 47,
                        "end": 56,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 50,
                          "end": 56
                        }
                      }
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 60,
            "end": 75,
            "elements": [
              {
                "type": "ArrowFunctionExpression",
                "start": 61,
                "end": 74,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 61,
                    "end": 62,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "MemberExpression",
                  "start": 66,
                  "end": 74,
                  "object": {
                    "type": "Identifier",
                    "start": 66,
                    "end": 67,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 68,
                    "end": 74,
                    "name": "length",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ]
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
