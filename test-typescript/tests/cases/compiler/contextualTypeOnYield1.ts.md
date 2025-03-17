__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 221,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 87,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 24,
        "name": "FuncOrGeneratorFunc",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 27,
        "end": 87,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 30,
          "end": 87,
          "typeAnnotation": {
            "type": "TSUnionType",
            "start": 34,
            "end": 86,
            "types": [
              {
                "type": "TSNumberKeyword",
                "start": 34,
                "end": 40
              },
              {
                "type": "TSTypeReference",
                "start": 43,
                "end": 86,
                "typeName": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 52,
                  "name": "Generator",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 52,
                  "end": 86,
                  "params": [
                    {
                      "type": "TSFunctionType",
                      "start": 53,
                      "end": 74,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 54,
                          "end": 65,
                          "name": "arg",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 57,
                            "end": 65,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 59,
                              "end": 65
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 67,
                        "end": 74,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 70,
                          "end": 74
                        }
                      }
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
      "start": 89,
      "end": 221,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 95,
          "end": 221,
          "id": {
            "type": "Identifier",
            "start": 95,
            "end": 117,
            "name": "f",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 96,
              "end": 117,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 98,
                "end": 117,
                "typeName": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 117,
                  "name": "FuncOrGeneratorFunc",
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
            "start": 120,
            "end": 221,
            "id": null,
            "expression": false,
            "generator": true,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 132,
              "end": 221,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 136,
                  "end": 168,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 136,
                    "end": 167,
                    "delegate": false,
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "start": 142,
                      "end": 167,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 143,
                          "end": 146,
                          "name": "num",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "CallExpression",
                        "start": 151,
                        "end": 167,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 151,
                          "end": 162,
                          "object": {
                            "type": "Identifier",
                            "start": 151,
                            "end": 158,
                            "name": "console",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 159,
                            "end": 162,
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
                            "start": 163,
                            "end": 166,
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
                  },
                  "directive": null
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
