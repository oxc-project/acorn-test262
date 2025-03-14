emitThisInSuperMethodCall.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 403,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 37,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 37,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 35,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 25,
              "decorators": [],
              "name": "sayHello",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 25,
              "end": 35,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 28,
                "end": 35,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "User",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 39,
      "end": 402,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 73,
        "end": 402,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 79,
            "end": 196,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 80,
              "end": 196,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 83,
                "end": 196,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 93,
                    "end": 190,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 93,
                      "end": 189,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 99,
                        "end": 189,
                        "body": [
                          {
                            "type": "FunctionDeclaration",
                            "start": 113,
                            "end": 179,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 130,
                              "end": 179,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 148,
                                  "end": 165,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 148,
                                    "end": 164,
                                    "arguments": [],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 148,
                                      "end": 162,
                                      "computed": false,
                                      "object": {
                                        "type": "Super",
                                        "start": 148,
                                        "end": 153
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 154,
                                        "end": 162,
                                        "decorators": [],
                                        "name": "sayHello",
                                        "optional": false
                                      }
                                    },
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "declare": false,
                            "expression": false,
                            "generator": false,
                            "id": {
                              "type": "Identifier",
                              "start": 122,
                              "end": 127,
                              "decorators": [],
                              "name": "inner",
                              "optional": false
                            },
                            "params": []
                          }
                        ]
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": []
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 201,
            "end": 317,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 201,
              "end": 202,
              "decorators": [],
              "name": "g",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 202,
              "end": 317,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 205,
                "end": 317,
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "start": 215,
                    "end": 311,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 232,
                      "end": 311,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 246,
                          "end": 301,
                          "expression": {
                            "type": "ArrowFunctionExpression",
                            "start": 246,
                            "end": 301,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 252,
                              "end": 301,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 270,
                                  "end": 287,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 270,
                                    "end": 286,
                                    "arguments": [],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 270,
                                      "end": 284,
                                      "computed": false,
                                      "object": {
                                        "type": "Super",
                                        "start": 270,
                                        "end": 275
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 276,
                                        "end": 284,
                                        "decorators": [],
                                        "name": "sayHello",
                                        "optional": false
                                      }
                                    },
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "expression": false,
                            "generator": false,
                            "id": null,
                            "params": []
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": {
                      "type": "Identifier",
                      "start": 224,
                      "end": 229,
                      "decorators": [],
                      "name": "inner",
                      "optional": false
                    },
                    "params": []
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 322,
            "end": 400,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 322,
              "end": 323,
              "decorators": [],
              "name": "h",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 323,
              "end": 400,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 326,
                "end": 400,
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "start": 336,
                    "end": 394,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 353,
                      "end": 394,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 367,
                          "end": 384,
                          "expression": {
                            "type": "CallExpression",
                            "start": 367,
                            "end": 383,
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 367,
                              "end": 381,
                              "computed": false,
                              "object": {
                                "type": "Super",
                                "start": 367,
                                "end": 372
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 373,
                                "end": 381,
                                "decorators": [],
                                "name": "sayHello",
                                "optional": false
                              }
                            },
                            "optional": false
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": {
                      "type": "Identifier",
                      "start": 345,
                      "end": 350,
                      "decorators": [],
                      "name": "inner",
                      "optional": false
                    },
                    "params": []
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 59,
        "decorators": [],
        "name": "RegisteredUser",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 68,
        "end": 72,
        "decorators": [],
        "name": "User",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
