__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 158,
  "body": [
    {
      "type": "ReturnStatement",
      "start": 0,
      "end": 158,
      "argument": {
        "type": "CallExpression",
        "start": 7,
        "end": 157,
        "callee": {
          "type": "MemberExpression",
          "start": 7,
          "end": 32,
          "object": {
            "type": "CallExpression",
            "start": 7,
            "end": 22,
            "callee": {
              "type": "MemberExpression",
              "start": 7,
              "end": 16,
              "object": {
                "type": "ThisExpression",
                "start": 7,
                "end": 11
              },
              "property": {
                "type": "Identifier",
                "start": 12,
                "end": 16,
                "decorators": [],
                "name": "edit",
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
                "start": 17,
                "end": 21,
                "decorators": [],
                "name": "role",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 28,
            "end": 32,
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 33,
            "end": 156,
            "expression": true,
            "async": false,
            "typeParameters": null,
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
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "start": 57,
              "end": 156,
              "callee": {
                "type": "MemberExpression",
                "start": 57,
                "end": 101,
                "object": {
                  "type": "CallExpression",
                  "start": 57,
                  "end": 83,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 57,
                    "end": 77,
                    "object": {
                      "type": "MemberExpression",
                      "start": 57,
                      "end": 73,
                      "object": {
                        "type": "ThisExpression",
                        "start": 57,
                        "end": 61
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 62,
                        "end": 73,
                        "decorators": [],
                        "name": "roleService",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 74,
                      "end": 77,
                      "decorators": [],
                      "name": "add",
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
                      "start": 78,
                      "end": 82,
                      "decorators": [],
                      "name": "role",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 101,
                  "decorators": [],
                  "name": "then",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 102,
                  "end": 155,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
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
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 112,
                              "end": 135,
                              "decorators": [],
                              "name": "IHttpPromiseCallbackArg",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
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
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "MemberExpression",
                    "start": 146,
                    "end": 155,
                    "object": {
                      "type": "Identifier",
                      "start": 146,
                      "end": 150,
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 151,
                      "end": 155,
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "id": null,
                  "generator": false
                }
              ],
              "optional": false
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
