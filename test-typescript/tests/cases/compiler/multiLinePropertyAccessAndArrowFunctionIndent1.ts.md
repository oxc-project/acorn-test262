multiLinePropertyAccessAndArrowFunctionIndent1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 159,
  "body": [
    {
      "type": "ReturnStatement",
      "start": 0,
      "end": 158,
      "argument": {
        "type": "CallExpression",
        "start": 7,
        "end": 157,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 33,
            "end": 156,
            "async": false,
            "body": {
              "type": "CallExpression",
              "start": 57,
              "end": 156,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 102,
                  "end": 155,
                  "async": false,
                  "body": {
                    "type": "MemberExpression",
                    "start": 146,
                    "end": 155,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 146,
                      "end": 150,
                      "decorators": [],
                      "name": "data",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 151,
                      "end": 155,
                      "decorators": [],
                      "name": "data",
                      "optional": false
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 103,
                      "end": 141,
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 107,
                        "end": 141,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 109,
                          "end": 141,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 135,
                            "end": 141,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 136,
                                "end": 140,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 136,
                                  "end": 140,
                                  "decorators": [],
                                  "name": "Role",
                                  "optional": false
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 109,
                            "end": 135,
                            "left": {
                              "type": "Identifier",
                              "start": 109,
                              "end": 111,
                              "decorators": [],
                              "name": "ng",
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 112,
                              "end": 135,
                              "decorators": [],
                              "name": "IHttpPromiseCallbackArg",
                              "optional": false
                            }
                          }
                        }
                      }
                    }
                  ]
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 57,
                "end": 101,
                "computed": false,
                "object": {
                  "type": "CallExpression",
                  "start": 57,
                  "end": 83,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 78,
                      "end": 82,
                      "decorators": [],
                      "name": "role",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 57,
                    "end": 77,
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "start": 57,
                      "end": 73,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 57,
                        "end": 61
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 62,
                        "end": 73,
                        "decorators": [],
                        "name": "roleService",
                        "optional": false
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 74,
                      "end": 77,
                      "decorators": [],
                      "name": "add",
                      "optional": false
                    }
                  },
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 101,
                  "decorators": [],
                  "name": "then",
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
                "start": 34,
                "end": 44,
                "decorators": [],
                "name": "role",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 38,
                  "end": 44,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 40,
                    "end": 44,
                    "typeName": {
                      "type": "Identifier",
                      "start": 40,
                      "end": 44,
                      "decorators": [],
                      "name": "Role",
                      "optional": false
                    }
                  }
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 7,
          "end": 32,
          "computed": false,
          "object": {
            "type": "CallExpression",
            "start": 7,
            "end": 22,
            "arguments": [
              {
                "type": "Identifier",
                "start": 17,
                "end": 21,
                "decorators": [],
                "name": "role",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 7,
              "end": 16,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 7,
                "end": 11
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 12,
                "end": 16,
                "decorators": [],
                "name": "edit",
                "optional": false
              }
            },
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 28,
            "end": 32,
            "decorators": [],
            "name": "then",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
