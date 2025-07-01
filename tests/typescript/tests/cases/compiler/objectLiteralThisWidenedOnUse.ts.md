__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 19
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 21,
                "end": 28
              },
              "start": 19,
              "end": 28
            },
            "accessibility": null,
            "static": false,
            "start": 16,
            "end": 29
          }
        ],
        "start": 14,
        "end": 31
      },
      "declare": false,
      "start": 0,
      "end": 31
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "GlobalIns",
            "optional": false,
            "typeAnnotation": null,
            "start": 37,
            "end": 46
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 53,
                  "end": 58
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 60,
                  "end": 61
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 53,
                "end": 61
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 65,
                  "end": 70
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 72,
                  "end": 73
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 65,
                "end": 73
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 77,
                  "end": 82
                },
                "value": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 84,
                  "end": 85
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 77,
                "end": 85
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 89,
                  "end": 93
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 103,
                              "end": 107
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "accept_foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 108,
                              "end": 118
                            },
                            "optional": false,
                            "computed": false,
                            "start": 103,
                            "end": 118
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ThisExpression",
                              "start": 119,
                              "end": 123
                            }
                          ],
                          "optional": false,
                          "start": 103,
                          "end": 124
                        },
                        "directive": null,
                        "start": 103,
                        "end": 125
                      }
                    ],
                    "start": 97,
                    "end": 129
                  },
                  "expression": false,
                  "start": 94,
                  "end": 129
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 89,
                "end": 129
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "accept_foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 133,
                  "end": 143
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 150,
                            "end": 153
                          },
                          "typeArguments": null,
                          "start": 150,
                          "end": 153
                        },
                        "start": 148,
                        "end": 153
                      },
                      "start": 145,
                      "end": 153
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 156,
                      "end": 163
                    },
                    "start": 154,
                    "end": 163
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "LogicalExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "!",
                            "argument": {
                              "type": "UnaryExpression",
                              "operator": "!",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 179,
                                "end": 182
                              },
                              "prefix": true,
                              "start": 178,
                              "end": 182
                            },
                            "prefix": true,
                            "start": 177,
                            "end": 182
                          },
                          "operator": "&&",
                          "right": {
                            "type": "UnaryExpression",
                            "operator": "!",
                            "argument": {
                              "type": "UnaryExpression",
                              "operator": "!",
                              "argument": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "foo",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 188,
                                  "end": 191
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "bar",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 192,
                                  "end": 195
                                },
                                "optional": false,
                                "computed": false,
                                "start": 188,
                                "end": 195
                              },
                              "prefix": true,
                              "start": 187,
                              "end": 195
                            },
                            "prefix": true,
                            "start": 186,
                            "end": 195
                          },
                          "start": 177,
                          "end": 195
                        },
                        "start": 170,
                        "end": 196
                      }
                    ],
                    "start": 164,
                    "end": 200
                  },
                  "expression": false,
                  "start": 144,
                  "end": 200
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 133,
                "end": 200
              }
            ],
            "start": 49,
            "end": 202
          },
          "definite": false,
          "start": 37,
          "end": 202
        }
      ],
      "declare": false,
      "start": 33,
      "end": 203
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 203
}
```
