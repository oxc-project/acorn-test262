objectLiteralThisWidenedOnUse.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 203,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 31,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 31,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 16,
            "end": 29,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 19,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 28,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 21,
                "end": 28
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 203,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 202,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 46,
            "decorators": [],
            "name": "GlobalIns",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 49,
            "end": 202,
            "properties": [
              {
                "type": "Property",
                "start": 53,
                "end": 61,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 58,
                  "decorators": [],
                  "name": "prop1",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 60,
                  "end": 61,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 65,
                "end": 73,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 70,
                  "decorators": [],
                  "name": "prop2",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 72,
                  "end": 73,
                  "raw": "2",
                  "value": 2
                }
              },
              {
                "type": "Property",
                "start": 77,
                "end": 85,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 82,
                  "decorators": [],
                  "name": "prop3",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 84,
                  "end": 85,
                  "raw": "3",
                  "value": 3
                }
              },
              {
                "type": "Property",
                "start": 89,
                "end": 129,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 93,
                  "decorators": [],
                  "name": "test",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 94,
                  "end": 129,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 97,
                    "end": 129,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 103,
                        "end": 125,
                        "expression": {
                          "type": "CallExpression",
                          "start": 103,
                          "end": 124,
                          "arguments": [
                            {
                              "type": "ThisExpression",
                              "start": 119,
                              "end": 123
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 103,
                            "end": 118,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 103,
                              "end": 107
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 108,
                              "end": 118,
                              "decorators": [],
                              "name": "accept_foo",
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
                  "params": []
                }
              },
              {
                "type": "Property",
                "start": 133,
                "end": 200,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 133,
                  "end": 143,
                  "decorators": [],
                  "name": "accept_foo",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 144,
                  "end": 200,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 164,
                    "end": 200,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 170,
                        "end": 196,
                        "argument": {
                          "type": "LogicalExpression",
                          "start": 177,
                          "end": 195,
                          "operator": "&&",
                          "left": {
                            "type": "UnaryExpression",
                            "start": 177,
                            "end": 182,
                            "argument": {
                              "type": "UnaryExpression",
                              "start": 178,
                              "end": 182,
                              "argument": {
                                "type": "Identifier",
                                "start": 179,
                                "end": 182,
                                "decorators": [],
                                "name": "foo",
                                "optional": false
                              },
                              "operator": "!",
                              "prefix": true
                            },
                            "operator": "!",
                            "prefix": true
                          },
                          "right": {
                            "type": "UnaryExpression",
                            "start": 186,
                            "end": 195,
                            "argument": {
                              "type": "UnaryExpression",
                              "start": 187,
                              "end": 195,
                              "argument": {
                                "type": "MemberExpression",
                                "start": 188,
                                "end": 195,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 188,
                                  "end": 191,
                                  "decorators": [],
                                  "name": "foo",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 192,
                                  "end": 195,
                                  "decorators": [],
                                  "name": "bar",
                                  "optional": false
                                }
                              },
                              "operator": "!",
                              "prefix": true
                            },
                            "operator": "!",
                            "prefix": true
                          }
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
                      "start": 145,
                      "end": 153,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 148,
                        "end": 153,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 150,
                          "end": 153,
                          "typeName": {
                            "type": "Identifier",
                            "start": 150,
                            "end": 153,
                            "decorators": [],
                            "name": "Foo",
                            "optional": false
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 154,
                    "end": 163,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 156,
                      "end": 163
                    }
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
