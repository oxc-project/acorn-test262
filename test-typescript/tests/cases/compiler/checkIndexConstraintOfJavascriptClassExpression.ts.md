__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 316,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 316,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 315,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 13,
            "end": 314,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 33,
              "end": 314,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 39,
                  "end": 52,
                  "directive": "use strict",
                  "expression": {
                    "type": "Literal",
                    "start": 39,
                    "end": 51,
                    "raw": "'use strict'",
                    "value": "use strict"
                  }
                },
                {
                  "type": "VariableDeclaration",
                  "start": 57,
                  "end": 88,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 63,
                      "end": 87,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 63,
                        "end": 78,
                        "decorators": [],
                        "name": "DEFAULT_MESSAGE",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Literal",
                        "start": 81,
                        "end": 87,
                        "raw": "\"nop!\"",
                        "value": "nop!"
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "ClassDeclaration",
                  "start": 93,
                  "end": 312,
                  "abstract": false,
                  "body": {
                    "type": "ClassBody",
                    "start": 123,
                    "end": 312,
                    "body": [
                      {
                        "type": "MethodDefinition",
                        "start": 133,
                        "end": 209,
                        "accessibility": null,
                        "computed": false,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 133,
                          "end": 144,
                          "decorators": [],
                          "name": "constructor",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "constructor",
                        "optional": false,
                        "override": false,
                        "static": false,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 144,
                          "end": 209,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 147,
                            "end": 209,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 161,
                                "end": 169,
                                "directive": null,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 161,
                                  "end": 168,
                                  "arguments": [],
                                  "callee": {
                                    "type": "Super",
                                    "start": 161,
                                    "end": 166
                                  },
                                  "optional": false,
                                  "typeArguments": null
                                }
                              },
                              {
                                "type": "ExpressionStatement",
                                "start": 182,
                                "end": 199,
                                "directive": null,
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "start": 182,
                                  "end": 198,
                                  "operator": "=",
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 182,
                                    "end": 190,
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 182,
                                      "end": 186
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 187,
                                      "end": 190,
                                      "decorators": [],
                                      "name": "foo",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "start": 193,
                                    "end": 198,
                                    "raw": "\"bar\"",
                                    "value": "bar"
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
                          "returnType": null,
                          "typeParameters": null
                        }
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 218,
                        "end": 306,
                        "accessibility": null,
                        "computed": false,
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "start": 218,
                          "end": 225,
                          "decorators": [],
                          "name": "_render",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "method",
                        "optional": false,
                        "override": false,
                        "static": false,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 225,
                          "end": 306,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 233,
                            "end": 306,
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "start": 247,
                                "end": 296,
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 253,
                                    "end": 295,
                                    "definite": false,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 253,
                                      "end": 260,
                                      "decorators": [],
                                      "name": "message",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "init": {
                                      "type": "LogicalExpression",
                                      "start": 263,
                                      "end": 295,
                                      "operator": "||",
                                      "left": {
                                        "type": "MemberExpression",
                                        "start": 263,
                                        "end": 276,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 263,
                                          "end": 268,
                                          "decorators": [],
                                          "name": "error",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 269,
                                          "end": 276,
                                          "decorators": [],
                                          "name": "message",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "start": 280,
                                        "end": 295,
                                        "decorators": [],
                                        "name": "DEFAULT_MESSAGE",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  }
                                ],
                                "declare": false,
                                "kind": "const"
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
                              "start": 226,
                              "end": 231,
                              "decorators": [],
                              "name": "error",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "start": 99,
                    "end": 104,
                    "decorators": [],
                    "name": "Hello",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "implements": [],
                  "superClass": {
                    "type": "Identifier",
                    "start": 113,
                    "end": 122,
                    "decorators": [],
                    "name": "BaseClass",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "superTypeArguments": null,
                  "typeParameters": null
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
                "start": 22,
                "end": 31,
                "decorators": [],
                "name": "BaseClass",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 0,
          "end": 12,
          "decorators": [],
          "name": "someFunction",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
