__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ObjectLiteral",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 23
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ThisInObjectLiteral",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 34,
                  "end": 53
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
                        "name": "_foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 66,
                        "end": 70
                      },
                      "value": {
                        "type": "Literal",
                        "value": "1",
                        "raw": "'1'",
                        "start": 72,
                        "end": 75
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 66,
                      "end": 75
                    },
                    {
                      "type": "Property",
                      "kind": "get",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 89,
                        "end": 92
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 96,
                            "end": 102
                          },
                          "start": 94,
                          "end": 102
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 124,
                                  "end": 128
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "_foo",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 129,
                                  "end": 133
                                },
                                "optional": false,
                                "computed": false,
                                "start": 124,
                                "end": 133
                              },
                              "start": 117,
                              "end": 134
                            }
                          ],
                          "start": 103,
                          "end": 144
                        },
                        "expression": false,
                        "start": 92,
                        "end": 144
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 85,
                      "end": 144
                    },
                    {
                      "type": "Property",
                      "kind": "set",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 158,
                        "end": 161
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
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 169,
                                "end": 175
                              },
                              "start": 167,
                              "end": 175
                            },
                            "start": 162,
                            "end": 175
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 191,
                                    "end": 195
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "_foo",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 196,
                                    "end": 200
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 191,
                                  "end": 200
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 203,
                                  "end": 208
                                },
                                "start": 191,
                                "end": 208
                              },
                              "directive": null,
                              "start": 191,
                              "end": 209
                            }
                          ],
                          "start": 177,
                          "end": 219
                        },
                        "expression": false,
                        "start": 161,
                        "end": 219
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 154,
                      "end": 219
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
                        "start": 229,
                        "end": 233
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
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 268,
                                  "end": 272
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "_foo",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 273,
                                  "end": 277
                                },
                                "optional": false,
                                "computed": false,
                                "start": 268,
                                "end": 277
                              },
                              "start": 261,
                              "end": 278
                            }
                          ],
                          "start": 247,
                          "end": 288
                        },
                        "expression": false,
                        "start": 235,
                        "end": 288
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 229,
                      "end": 288
                    }
                  ],
                  "start": 56,
                  "end": 294
                },
                "definite": false,
                "start": 34,
                "end": 294
              }
            ],
            "declare": false,
            "start": 30,
            "end": 294
          }
        ],
        "start": 24,
        "end": 296
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 296
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 297
}
```
