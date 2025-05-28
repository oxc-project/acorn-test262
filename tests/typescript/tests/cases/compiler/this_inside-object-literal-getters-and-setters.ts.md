__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 294,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 293,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 20,
        "decorators": [],
        "name": "ObjectLiteral",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 293,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 27,
            "end": 291,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 31,
                "end": 291,
                "id": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 50,
                  "decorators": [],
                  "name": "ThisInObjectLiteral",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 53,
                  "end": 291,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 63,
                      "end": 72,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 63,
                        "end": 67,
                        "decorators": [],
                        "name": "_foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 69,
                        "end": 72,
                        "value": "1",
                        "raw": "'1'"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 82,
                      "end": 141,
                      "kind": "get",
                      "key": {
                        "type": "Identifier",
                        "start": 86,
                        "end": 89,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 89,
                        "end": 141,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 91,
                          "end": 99,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 93,
                            "end": 99
                          }
                        },
                        "body": {
                          "type": "BlockStatement",
                          "start": 100,
                          "end": 141,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 114,
                              "end": 131,
                              "argument": {
                                "type": "MemberExpression",
                                "start": 121,
                                "end": 130,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 121,
                                  "end": 125
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 126,
                                  "end": 130,
                                  "decorators": [],
                                  "name": "_foo",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              }
                            }
                          ]
                        },
                        "expression": false
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 151,
                      "end": 216,
                      "kind": "set",
                      "key": {
                        "type": "Identifier",
                        "start": 155,
                        "end": 158,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 158,
                        "end": 216,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 159,
                            "end": 172,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 164,
                              "end": 172,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 166,
                                "end": 172
                              }
                            }
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 174,
                          "end": 216,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 188,
                              "end": 206,
                              "expression": {
                                "type": "AssignmentExpression",
                                "start": 188,
                                "end": 205,
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 188,
                                  "end": 197,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 188,
                                    "end": 192
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 193,
                                    "end": 197,
                                    "decorators": [],
                                    "name": "_foo",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 200,
                                  "end": 205,
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "directive": null
                            }
                          ]
                        },
                        "expression": false
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 226,
                      "end": 285,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 226,
                        "end": 230,
                        "decorators": [],
                        "name": "test",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 232,
                        "end": 285,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 244,
                          "end": 285,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 258,
                              "end": 275,
                              "argument": {
                                "type": "MemberExpression",
                                "start": 265,
                                "end": 274,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 265,
                                  "end": 269
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 270,
                                  "end": 274,
                                  "decorators": [],
                                  "name": "_foo",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              }
                            }
                          ]
                        },
                        "expression": false
                      },
                      "method": false,
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
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
