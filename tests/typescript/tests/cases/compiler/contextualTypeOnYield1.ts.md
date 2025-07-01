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
        "name": "FuncOrGeneratorFunc",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 24
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
                "start": 34,
                "end": 40
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Generator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 43,
                  "end": 52
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
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
                              "start": 59,
                              "end": 65
                            },
                            "start": 57,
                            "end": 65
                          },
                          "start": 54,
                          "end": 65
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 70,
                          "end": 74
                        },
                        "start": 67,
                        "end": 74
                      },
                      "start": 53,
                      "end": 74
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 76,
                      "end": 79
                    },
                    {
                      "type": "TSVoidKeyword",
                      "start": 81,
                      "end": 85
                    }
                  ],
                  "start": 52,
                  "end": 86
                },
                "start": 43,
                "end": 86
              }
            ],
            "start": 34,
            "end": 86
          },
          "start": 30,
          "end": 87
        },
        "start": 27,
        "end": 87
      },
      "declare": false,
      "start": 0,
      "end": 87
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
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FuncOrGeneratorFunc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 98,
                  "end": 117
                },
                "typeArguments": null,
                "start": 98,
                "end": 117
              },
              "start": 96,
              "end": 117
            },
            "start": 95,
            "end": 117
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "YieldExpression",
                    "delegate": false,
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
                          "start": 143,
                          "end": 146
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
                            "start": 151,
                            "end": 158
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 159,
                            "end": 162
                          },
                          "optional": false,
                          "computed": false,
                          "start": 151,
                          "end": 162
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "num",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 163,
                            "end": 166
                          }
                        ],
                        "optional": false,
                        "start": 151,
                        "end": 167
                      },
                      "id": null,
                      "generator": false,
                      "start": 142,
                      "end": 167
                    },
                    "start": 136,
                    "end": 167
                  },
                  "directive": null,
                  "start": 136,
                  "end": 168
                }
              ],
              "start": 132,
              "end": 221
            },
            "expression": false,
            "start": 120,
            "end": 221
          },
          "definite": false,
          "start": 95,
          "end": 221
        }
      ],
      "declare": false,
      "start": 89,
      "end": 221
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 221
}
```
