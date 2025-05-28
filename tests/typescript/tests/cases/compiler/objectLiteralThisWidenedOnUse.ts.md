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
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 202,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 46,
            "decorators": [],
            "name": "GlobalIns",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 58,
                  "decorators": [],
                  "name": "prop1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 60,
                  "end": 61,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 65,
                "end": 73,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 70,
                  "decorators": [],
                  "name": "prop2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 72,
                  "end": 73,
                  "value": 2,
                  "raw": "2"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 77,
                "end": 85,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 82,
                  "decorators": [],
                  "name": "prop3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 84,
                  "end": 85,
                  "value": 3,
                  "raw": "3"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 89,
                "end": 129,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 93,
                  "decorators": [],
                  "name": "test",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 94,
                  "end": 129,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
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
                              "decorators": [],
                              "name": "accept_foo",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ThisExpression",
                              "start": 119,
                              "end": 123
                            }
                          ],
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 133,
                "end": 200,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 133,
                  "end": 143,
                  "decorators": [],
                  "name": "accept_foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 144,
                  "end": 200,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
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
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
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
                  },
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
                            "argument": {
                              "type": "UnaryExpression",
                              "start": 178,
                              "end": 182,
                              "operator": "!",
                              "argument": {
                                "type": "Identifier",
                                "start": 179,
                                "end": 182,
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "prefix": true
                            },
                            "prefix": true
                          },
                          "operator": "&&",
                          "right": {
                            "type": "UnaryExpression",
                            "start": 186,
                            "end": 195,
                            "operator": "!",
                            "argument": {
                              "type": "UnaryExpression",
                              "start": 187,
                              "end": 195,
                              "operator": "!",
                              "argument": {
                                "type": "MemberExpression",
                                "start": 188,
                                "end": 195,
                                "object": {
                                  "type": "Identifier",
                                  "start": 188,
                                  "end": 191,
                                  "decorators": [],
                                  "name": "foo",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 192,
                                  "end": 195,
                                  "decorators": [],
                                  "name": "bar",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "prefix": true
                            },
                            "prefix": true
                          }
                        }
                      }
                    ]
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
