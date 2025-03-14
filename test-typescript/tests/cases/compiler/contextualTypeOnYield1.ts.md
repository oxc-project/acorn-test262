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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 24,
        "decorators": [],
        "name": "FuncOrGeneratorFunc",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 27,
        "end": 87,
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
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 52,
                  "end": 86,
                  "params": [
                    {
                      "type": "TSFunctionType",
                      "start": 53,
                      "end": 74,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 54,
                          "end": 65,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 57,
                            "end": 65,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 59,
                              "end": 65
                            }
                          }
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 52,
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
      "start": 89,
      "end": 221,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 95,
          "end": 221,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 95,
            "end": 117,
            "decorators": [],
            "name": "f",
            "optional": false,
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
                  "decorators": [],
                  "name": "FuncOrGeneratorFunc",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 120,
            "end": 221,
            "async": false,
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
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "start": 142,
                      "end": 167,
                      "async": false,
                      "body": {
                        "type": "CallExpression",
                        "start": 151,
                        "end": 167,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 163,
                            "end": 166,
                            "decorators": [],
                            "name": "num",
                            "optional": false
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 151,
                          "end": 162,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 151,
                            "end": 158,
                            "decorators": [],
                            "name": "console",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 159,
                            "end": 162,
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
                          "start": 143,
                          "end": 146,
                          "decorators": [],
                          "name": "num",
                          "optional": false
                        }
                      ]
                    },
                    "delegate": false
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
  "sourceType": "script",
  "hashbang": null
}
```
