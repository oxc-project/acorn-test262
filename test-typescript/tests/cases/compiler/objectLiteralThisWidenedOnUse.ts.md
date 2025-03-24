__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 19,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 28,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 21,
                "end": 28
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 46,
            "name": "GlobalIns",
            "typeAnnotation": null,
            "decorators": [],
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 58,
                  "name": "prop1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 60,
                  "end": 61,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 65,
                "end": 73,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 70,
                  "name": "prop2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 72,
                  "end": 73,
                  "value": 2,
                  "raw": "2"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 77,
                "end": 85,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 82,
                  "name": "prop3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 84,
                  "end": 85,
                  "value": 3,
                  "raw": "3"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 89,
                "end": 129,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 93,
                  "name": "test",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 94,
                  "end": 129,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
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
                          "callee": {
                            "type": "MemberExpression",
                            "start": 103,
                            "end": 118,
                            "object": {
                              "type": "ThisExpression",
                              "start": 103,
                              "end": 107
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 108,
                              "end": 118,
                              "name": "accept_foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "ThisExpression",
                              "start": 119,
                              "end": 123
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "directive": null
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 133,
                "end": 200,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 133,
                  "end": 143,
                  "name": "accept_foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 144,
                  "end": 200,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 145,
                      "end": 153,
                      "name": "foo",
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
                            "name": "Foo",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
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
                          "left": {
                            "type": "UnaryExpression",
                            "start": 177,
                            "end": 182,
                            "operator": "!",
                            "prefix": true,
                            "argument": {
                              "type": "UnaryExpression",
                              "start": 178,
                              "end": 182,
                              "operator": "!",
                              "prefix": true,
                              "argument": {
                                "type": "Identifier",
                                "start": 179,
                                "end": 182,
                                "name": "foo",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            }
                          },
                          "operator": "&&",
                          "right": {
                            "type": "UnaryExpression",
                            "start": 186,
                            "end": 195,
                            "operator": "!",
                            "prefix": true,
                            "argument": {
                              "type": "UnaryExpression",
                              "start": 187,
                              "end": 195,
                              "operator": "!",
                              "prefix": true,
                              "argument": {
                                "type": "MemberExpression",
                                "start": 188,
                                "end": 195,
                                "object": {
                                  "type": "Identifier",
                                  "start": 188,
                                  "end": 191,
                                  "name": "foo",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 192,
                                  "end": 195,
                                  "name": "bar",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              }
                            }
                          }
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
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
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
