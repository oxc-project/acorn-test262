__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OrGen",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 10
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSNumberKeyword",
                "start": 20,
                "end": 26
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Generator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 29,
                  "end": 38
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 39,
                      "end": 45
                    },
                    {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 53,
                              "end": 59
                            },
                            "start": 51,
                            "end": 59
                          },
                          "start": 48,
                          "end": 59
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 64,
                          "end": 68
                        },
                        "start": 61,
                        "end": 68
                      },
                      "start": 47,
                      "end": 68
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 70,
                      "end": 79
                    }
                  ],
                  "start": 38,
                  "end": 80
                },
                "start": 29,
                "end": 80
              }
            ],
            "start": 20,
            "end": 80
          },
          "start": 16,
          "end": 81
        },
        "start": 13,
        "end": 81
      },
      "declare": false,
      "start": 0,
      "end": 82
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OrGen",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 92,
                  "end": 97
                },
                "typeArguments": null,
                "start": 92,
                "end": 97
              },
              "start": 90,
              "end": 97
            },
            "start": 89,
            "end": 97
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "num",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 127,
                        "end": 130
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 135,
                          "end": 142
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 143,
                          "end": 146
                        },
                        "optional": false,
                        "computed": false,
                        "start": 135,
                        "end": 146
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "num",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 147,
                          "end": 150
                        }
                      ],
                      "optional": false,
                      "start": 135,
                      "end": 151
                    },
                    "id": null,
                    "generator": false,
                    "start": 126,
                    "end": 151
                  },
                  "start": 119,
                  "end": 152
                }
              ],
              "start": 113,
              "end": 154
            },
            "expression": false,
            "start": 100,
            "end": 154
          },
          "definite": false,
          "start": 89,
          "end": 154
        }
      ],
      "declare": false,
      "start": 83,
      "end": 154
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 154
}
```
