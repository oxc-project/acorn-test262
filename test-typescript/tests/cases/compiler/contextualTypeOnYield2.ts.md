contextualTypeOnYield2.ts
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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 10,
        "decorators": [],
        "name": "OrGen",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 13,
        "end": 81,
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 29,
                  "end": 38,
                  "decorators": [],
                  "name": "Generator",
                  "optional": false
                }
              }
            ]
          }
        }
      }
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
          "definite": false,
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
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 100,
            "end": 154,
            "async": false,
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
                    "async": false,
                    "body": {
                      "type": "CallExpression",
                      "start": 135,
                      "end": 151,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 147,
                          "end": 150,
                          "decorators": [],
                          "name": "num",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 135,
                        "end": 146,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 135,
                          "end": 142,
                          "decorators": [],
                          "name": "console",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 143,
                          "end": 146,
                          "decorators": [],
                          "name": "log",
                          "optional": false
                        }
                      },
                      "optional": false
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 127,
                        "end": 130,
                        "decorators": [],
                        "name": "num",
                        "optional": false
                      }
                    ]
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
