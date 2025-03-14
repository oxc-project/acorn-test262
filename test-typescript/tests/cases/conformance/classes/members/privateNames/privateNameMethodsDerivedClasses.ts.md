__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 222,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 120,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 120,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 48,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 17,
              "end": 22,
              "name": "prop"
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 22,
              "end": 48,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 32,
                "end": 48,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 34,
                    "end": 46,
                    "argument": {
                      "type": "Literal",
                      "start": 42,
                      "end": 45,
                      "raw": "123",
                      "value": 123
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
                "start": 24,
                "end": 32,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 26,
                  "end": 32
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 53,
            "end": 118,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 60,
              "end": 66,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 66,
              "end": 118,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 79,
                "end": 118,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 89,
                    "end": 112,
                    "expression": {
                      "type": "CallExpression",
                      "start": 89,
                      "end": 111,
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "start": 101,
                          "end": 110,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 101,
                            "end": 108,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 101,
                              "end": 102,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 103,
                              "end": 108,
                              "name": "prop"
                            }
                          },
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 89,
                        "end": 100,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 89,
                          "end": 96,
                          "decorators": [],
                          "name": "console",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 97,
                          "end": 100,
                          "decorators": [],
                          "name": "log",
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
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 67,
                  "end": 77,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 68,
                    "end": 77,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 70,
                      "end": 77,
                      "typeName": {
                        "type": "Identifier",
                        "start": 70,
                        "end": 77,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false
                      }
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
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 121,
      "end": 221,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 148,
        "end": 221,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 154,
            "end": 219,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 161,
              "end": 167,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 167,
              "end": 219,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 180,
                "end": 219,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 190,
                    "end": 213,
                    "expression": {
                      "type": "CallExpression",
                      "start": 190,
                      "end": 212,
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "start": 202,
                          "end": 211,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 202,
                            "end": 209,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 202,
                              "end": 203,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 204,
                              "end": 209,
                              "name": "prop"
                            }
                          },
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 190,
                        "end": 201,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 190,
                          "end": 197,
                          "decorators": [],
                          "name": "console",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 198,
                          "end": 201,
                          "decorators": [],
                          "name": "log",
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
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 168,
                  "end": 178,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 169,
                    "end": 178,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 171,
                      "end": 178,
                      "typeName": {
                        "type": "Identifier",
                        "start": 171,
                        "end": 178,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false
                      }
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
        "start": 127,
        "end": 134,
        "decorators": [],
        "name": "Derived",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 143,
        "end": 147,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
