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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 57,
            "decorators": [],
            "name": "iter",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 24,
              "end": 57,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 26,
                "end": 57,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 34,
                  "end": 57,
                  "params": [
                    {
                      "type": "TSFunctionType",
                      "start": 35,
                      "end": 56,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 36,
                          "end": 45,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 37,
                            "end": 45,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 39,
                              "end": 45
                            }
                          }
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 34,
                  "decorators": [],
                  "name": "Iterable",
                  "optional": false
                }
              }
            }
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
                "async": false,
                "body": {
                  "type": "MemberExpression",
                  "start": 66,
                  "end": 74,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 66,
                    "end": 67,
                    "decorators": [],
                    "name": "s",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 68,
                    "end": 74,
                    "decorators": [],
                    "name": "length",
                    "optional": false
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 61,
                    "end": 62,
                    "decorators": [],
                    "name": "s",
                    "optional": false
                  }
                ]
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
