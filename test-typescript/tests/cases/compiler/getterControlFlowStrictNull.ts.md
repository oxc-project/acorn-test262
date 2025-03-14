getterControlFlowStrictNull.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 524,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 152,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 152,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 13,
            "end": 150,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 14,
              "end": 150,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 32,
                "end": 150,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 42,
                    "end": 101,
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 67,
                      "end": 101,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 81,
                          "end": 91,
                          "argument": {
                            "type": "Literal",
                            "start": 88,
                            "end": 90,
                            "raw": "''",
                            "value": ""
                          }
                        }
                      ]
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 46,
                      "end": 65,
                      "operator": ">",
                      "left": {
                        "type": "CallExpression",
                        "start": 46,
                        "end": 59,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 46,
                          "end": 57,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 46,
                            "end": 50,
                            "decorators": [],
                            "name": "Math",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 51,
                            "end": 57,
                            "decorators": [],
                            "name": "random",
                            "optional": false
                          }
                        },
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 62,
                        "end": 65,
                        "raw": "0.5",
                        "value": 0.5
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 16,
                "end": 31,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 18,
                  "end": 31,
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 18,
                      "end": 24
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 27,
                      "end": 31
                    }
                  ]
                }
              }
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
      "start": 153,
      "end": 329,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 161,
        "end": 329,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 167,
            "end": 327,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 171,
              "end": 172,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 172,
              "end": 327,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 190,
                "end": 327,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 200,
                    "end": 259,
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 225,
                      "end": 259,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 239,
                          "end": 249,
                          "argument": {
                            "type": "Literal",
                            "start": 246,
                            "end": 248,
                            "raw": "''",
                            "value": ""
                          }
                        }
                      ]
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 204,
                      "end": 223,
                      "operator": ">",
                      "left": {
                        "type": "CallExpression",
                        "start": 204,
                        "end": 217,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 204,
                          "end": 215,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 204,
                            "end": 208,
                            "decorators": [],
                            "name": "Math",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 209,
                            "end": 215,
                            "decorators": [],
                            "name": "random",
                            "optional": false
                          }
                        },
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 220,
                        "end": 223,
                        "raw": "0.5",
                        "value": 0.5
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 174,
                "end": 189,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 176,
                  "end": 189,
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 176,
                      "end": 182
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 185,
                      "end": 189
                    }
                  ]
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 159,
        "end": 160,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 330,
      "end": 524,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 338,
        "end": 524,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 344,
            "end": 488,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 348,
              "end": 349,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 349,
              "end": 488,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 352,
                "end": 488,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 362,
                    "end": 420,
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 387,
                      "end": 420,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 401,
                          "end": 410,
                          "argument": {
                            "type": "Literal",
                            "start": 408,
                            "end": 409,
                            "raw": "0",
                            "value": 0
                          }
                        }
                      ]
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 366,
                      "end": 385,
                      "operator": ">",
                      "left": {
                        "type": "CallExpression",
                        "start": 366,
                        "end": 379,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 366,
                          "end": 377,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 366,
                            "end": 370,
                            "decorators": [],
                            "name": "Math",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 371,
                            "end": 377,
                            "decorators": [],
                            "name": "random",
                            "optional": false
                          }
                        },
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 382,
                        "end": 385,
                        "raw": "0.5",
                        "value": 0.5
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
          },
          {
            "type": "MethodDefinition",
            "start": 494,
            "end": 522,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 498,
              "end": 499,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 499,
              "end": 522,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 515,
                "end": 522,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 500,
                  "end": 513,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 505,
                    "end": 513,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 507,
                      "end": 513
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 336,
        "end": 337,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
