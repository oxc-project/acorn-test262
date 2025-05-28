__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 154,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 82,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 10,
        "decorators": [],
        "name": "OrGen",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 13,
        "end": 81,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 16,
          "end": 81,
          "typeAnnotation": {
            "type": "TSUnionType",
            "start": 20,
            "end": 80,
            "types": [
              {
                "type": "TSNumberKeyword",
                "start": 20,
                "end": 26
              },
              {
                "type": "TSTypeReference",
                "start": 29,
                "end": 80,
                "typeName": {
                  "type": "Identifier",
                  "start": 29,
                  "end": 38,
                  "decorators": [],
                  "name": "Generator",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 38,
                  "end": 80,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 39,
                      "end": 45
                    },
                    {
                      "type": "TSFunctionType",
                      "start": 47,
                      "end": 68,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 48,
                          "end": 59,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 51,
                            "end": 59,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 53,
                              "end": 59
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 61,
                        "end": 68,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 64,
                          "end": 68
                        }
                      }
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 70,
                      "end": 79
                    }
                  ]
                }
              }
            ]
          }
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 83,
      "end": 154,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 89,
          "end": 154,
          "id": {
            "type": "Identifier",
            "start": 89,
            "end": 97,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 97,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 92,
                "end": 97,
                "typeName": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 97,
                  "decorators": [],
                  "name": "OrGen",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 100,
            "end": 154,
            "id": null,
            "generator": true,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 113,
              "end": 154,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 119,
                  "end": 152,
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "start": 126,
                    "end": 151,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 127,
                        "end": 130,
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "CallExpression",
                      "start": 135,
                      "end": 151,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 135,
                        "end": 146,
                        "object": {
                          "type": "Identifier",
                          "start": 135,
                          "end": 142,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 143,
                          "end": 146,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 147,
                          "end": 150,
                          "decorators": [],
                          "name": "num",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "id": null,
                    "generator": false
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
