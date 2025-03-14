__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 267,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 266,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 266,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 20,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 17,
              "end": 19,
              "name": "x"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 25,
            "end": 264,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 36,
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
              "start": 36,
              "end": 264,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 39,
                "end": 264,
                "body": [
                  {
                    "type": "ClassDeclaration",
                    "start": 49,
                    "end": 258,
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "start": 63,
                      "end": 258,
                      "body": [
                        {
                          "type": "PropertyDefinition",
                          "start": 77,
                          "end": 80,
                          "computed": false,
                          "declare": false,
                          "decorators": [],
                          "definite": false,
                          "key": {
                            "type": "PrivateIdentifier",
                            "start": 77,
                            "end": 79,
                            "name": "x"
                          },
                          "optional": false,
                          "override": false,
                          "readonly": false,
                          "static": false,
                          "value": null
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 93,
                          "end": 161,
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 93,
                            "end": 101,
                            "decorators": [],
                            "name": "testBase",
                            "optional": false
                          },
                          "kind": "method",
                          "optional": false,
                          "override": false,
                          "static": false,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 101,
                            "end": 161,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 111,
                              "end": 161,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 129,
                                  "end": 147,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 129,
                                    "end": 146,
                                    "arguments": [
                                      {
                                        "type": "MemberExpression",
                                        "start": 141,
                                        "end": 145,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 141,
                                          "end": 142,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "PrivateIdentifier",
                                          "start": 143,
                                          "end": 145,
                                          "name": "x"
                                        }
                                      }
                                    ],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 129,
                                      "end": 140,
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 129,
                                        "end": 136,
                                        "decorators": [],
                                        "name": "console",
                                        "optional": false
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 137,
                                        "end": 140,
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
                                "start": 102,
                                "end": 109,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 103,
                                  "end": 109,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 105,
                                    "end": 109,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 105,
                                      "end": 109,
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false
                                    }
                                  }
                                }
                              }
                            ]
                          }
                        },
                        {
                          "type": "MethodDefinition",
                          "start": 174,
                          "end": 248,
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 174,
                            "end": 185,
                            "decorators": [],
                            "name": "testDerived",
                            "optional": false
                          },
                          "kind": "method",
                          "optional": false,
                          "override": false,
                          "static": false,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 185,
                            "end": 248,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 198,
                              "end": 248,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 216,
                                  "end": 234,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 216,
                                    "end": 233,
                                    "arguments": [
                                      {
                                        "type": "MemberExpression",
                                        "start": 228,
                                        "end": 232,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 228,
                                          "end": 229,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "PrivateIdentifier",
                                          "start": 230,
                                          "end": 232,
                                          "name": "x"
                                        }
                                      }
                                    ],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 216,
                                      "end": 227,
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 216,
                                        "end": 223,
                                        "decorators": [],
                                        "name": "console",
                                        "optional": false
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 224,
                                        "end": 227,
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
                                "start": 186,
                                "end": 196,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 187,
                                  "end": 196,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 189,
                                    "end": 196,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 189,
                                      "end": 196,
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
                      "start": 55,
                      "end": 62,
                      "decorators": [],
                      "name": "Derived",
                      "optional": false
                    },
                    "implements": [],
                    "superClass": null
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
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
