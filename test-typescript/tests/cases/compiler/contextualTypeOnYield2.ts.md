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
        "name": "OrGen",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                  "name": "Generator",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                          "name": "arg",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 51,
                            "end": 59,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 53,
                              "end": 59
                            }
                          },
                          "decorators": [],
                          "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 89,
          "end": 154,
          "id": {
            "type": "Identifier",
            "start": 89,
            "end": 97,
            "name": "g",
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
                  "name": "OrGen",
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
          "init": {
            "type": "FunctionExpression",
            "start": 100,
            "end": 154,
            "id": null,
            "expression": false,
            "generator": true,
            "async": false,
            "params": [],
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
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 127,
                        "end": 130,
                        "name": "num",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
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
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 143,
                          "end": 146,
                          "name": "log",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 147,
                          "end": 150,
                          "name": "num",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "typeParameters": null,
                    "returnType": null
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
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
