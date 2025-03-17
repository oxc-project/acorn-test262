__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 295,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 293,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 20,
        "name": "ObjectLiteral",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 31,
                "end": 291,
                "id": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 50,
                  "name": "ThisInObjectLiteral",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 63,
                        "end": 67,
                        "name": "_foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 69,
                        "end": 72,
                        "value": "1",
                        "raw": "'1'"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 82,
                      "end": 141,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 86,
                        "end": 89,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 89,
                        "end": 141,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
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
                                  "name": "_foo",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              }
                            }
                          ]
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 91,
                          "end": 99,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 93,
                            "end": 99
                          }
                        }
                      },
                      "kind": "get",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 151,
                      "end": 216,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 155,
                        "end": 158,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 158,
                        "end": 216,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 159,
                            "end": 172,
                            "name": "value",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 164,
                              "end": 172,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 166,
                                "end": 172
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
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
                                    "name": "_foo",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 200,
                                  "end": 205,
                                  "name": "value",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "directive": null
                            }
                          ]
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": null
                      },
                      "kind": "set",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 226,
                      "end": 285,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 226,
                        "end": 230,
                        "name": "test",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 232,
                        "end": 285,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
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
                                  "name": "_foo",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              }
                            }
                          ]
                        },
                        "declare": false,
                        "typeParameters": null,
                        "returnType": null
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
