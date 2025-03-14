classConstructorAccessibility4.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 412,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 204,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 204,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 39,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 33,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 33,
              "end": 39,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 36,
                "end": 39,
                "body": []
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
            "start": 45,
            "end": 202,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 51,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 51,
              "end": 202,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 54,
                "end": 202,
                "body": [
                  {
                    "type": "ClassDeclaration",
                    "start": 64,
                    "end": 151,
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "start": 72,
                      "end": 151,
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "start": 86,
                          "end": 141,
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 86,
                            "end": 92,
                            "decorators": [],
                            "name": "method",
                            "optional": false
                          },
                          "kind": "method",
                          "optional": false,
                          "override": false,
                          "static": false,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 92,
                            "end": 141,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 95,
                              "end": 141,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 113,
                                  "end": 121,
                                  "expression": {
                                    "type": "NewExpression",
                                    "start": 113,
                                    "end": 120,
                                    "arguments": [],
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 117,
                                      "end": 118,
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false
                                    }
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
                        }
                      ]
                    },
                    "declare": false,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "start": 70,
                      "end": 71,
                      "decorators": [],
                      "name": "B",
                      "optional": false
                    },
                    "implements": [],
                    "superClass": null
                  },
                  {
                    "type": "ClassDeclaration",
                    "start": 161,
                    "end": 196,
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "start": 179,
                      "end": 196,
                      "body": []
                    },
                    "declare": false,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "start": 167,
                      "end": 168,
                      "decorators": [],
                      "name": "C",
                      "optional": false
                    },
                    "implements": [],
                    "superClass": {
                      "type": "Identifier",
                      "start": 177,
                      "end": 178,
                      "decorators": [],
                      "name": "A",
                      "optional": false
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
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 206,
      "end": 412,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 214,
        "end": 412,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 220,
            "end": 247,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 230,
              "end": 241,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 241,
              "end": 247,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 244,
                "end": 247,
                "body": []
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
            "start": 253,
            "end": 410,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 253,
              "end": 259,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 259,
              "end": 410,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 262,
                "end": 410,
                "body": [
                  {
                    "type": "ClassDeclaration",
                    "start": 272,
                    "end": 359,
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "start": 280,
                      "end": 359,
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "start": 294,
                          "end": 349,
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 294,
                            "end": 300,
                            "decorators": [],
                            "name": "method",
                            "optional": false
                          },
                          "kind": "method",
                          "optional": false,
                          "override": false,
                          "static": false,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 300,
                            "end": 349,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 303,
                              "end": 349,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 321,
                                  "end": 329,
                                  "expression": {
                                    "type": "NewExpression",
                                    "start": 321,
                                    "end": 328,
                                    "arguments": [],
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 325,
                                      "end": 326,
                                      "decorators": [],
                                      "name": "D",
                                      "optional": false
                                    }
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
                        }
                      ]
                    },
                    "declare": false,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "start": 278,
                      "end": 279,
                      "decorators": [],
                      "name": "E",
                      "optional": false
                    },
                    "implements": [],
                    "superClass": null
                  },
                  {
                    "type": "ClassDeclaration",
                    "start": 369,
                    "end": 404,
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "start": 387,
                      "end": 404,
                      "body": []
                    },
                    "declare": false,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "start": 375,
                      "end": 376,
                      "decorators": [],
                      "name": "F",
                      "optional": false
                    },
                    "implements": [],
                    "superClass": {
                      "type": "Identifier",
                      "start": 385,
                      "end": 386,
                      "decorators": [],
                      "name": "D",
                      "optional": false
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
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 212,
        "end": 213,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
