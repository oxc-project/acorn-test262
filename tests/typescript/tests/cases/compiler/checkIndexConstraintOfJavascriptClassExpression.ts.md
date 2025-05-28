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
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 315,
        "callee": {
          "type": "Identifier",
          "start": 0,
          "end": 12,
          "decorators": [],
          "name": "someFunction",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 13,
            "end": 314,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
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
            "body": {
              "type": "BlockStatement",
              "start": 33,
              "end": 314,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 39,
                  "end": 52,
                  "expression": {
                    "type": "Literal",
                    "start": 39,
                    "end": 51,
                    "value": "use strict",
                    "raw": "'use strict'"
                  },
                  "directive": "use strict"
                },
                {
                  "type": "VariableDeclaration",
                  "start": 57,
                  "end": 88,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 63,
                      "end": 87,
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
                        "value": "nop!",
                        "raw": "\"nop!\""
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ClassDeclaration",
                  "start": 93,
                  "end": 312,
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
                  "typeParameters": null,
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
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "start": 123,
                    "end": 312,
                    "body": [
                      {
                        "type": "MethodDefinition",
                        "start": 133,
                        "end": 209,
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
                        "value": {
                          "type": "FunctionExpression",
                          "start": 144,
                          "end": 209,
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "start": 147,
                            "end": 209,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 161,
                                "end": 169,
                                "expression": {
                                  "type": "CallExpression",
                                  "start": 161,
                                  "end": 168,
                                  "callee": {
                                    "type": "Super",
                                    "start": 161,
                                    "end": 166
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false
                                },
                                "directive": null
                              },
                              {
                                "type": "ExpressionStatement",
                                "start": 182,
                                "end": 199,
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "start": 182,
                                  "end": 198,
                                  "operator": "=",
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 182,
                                    "end": 190,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 182,
                                      "end": 186
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 187,
                                      "end": 190,
                                      "decorators": [],
                                      "name": "foo",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "start": 193,
                                    "end": 198,
                                    "value": "bar",
                                    "raw": "\"bar\""
                                  }
                                },
                                "directive": null
                              }
                            ]
                          },
                          "expression": false
                        },
                        "kind": "constructor",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null
                      },
                      {
                        "type": "MethodDefinition",
                        "start": 218,
                        "end": 306,
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
                        "value": {
                          "type": "FunctionExpression",
                          "start": 225,
                          "end": 306,
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
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
                          "body": {
                            "type": "BlockStatement",
                            "start": 233,
                            "end": 306,
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "start": 247,
                                "end": 296,
                                "kind": "const",
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 253,
                                    "end": 295,
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
                                      "left": {
                                        "type": "MemberExpression",
                                        "start": 263,
                                        "end": 276,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 263,
                                          "end": 268,
                                          "decorators": [],
                                          "name": "error",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 269,
                                          "end": 276,
                                          "decorators": [],
                                          "name": "message",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      "operator": "||",
                                      "right": {
                                        "type": "Identifier",
                                        "start": 280,
                                        "end": 295,
                                        "decorators": [],
                                        "name": "DEFAULT_MESSAGE",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "definite": false
                                  }
                                ],
                                "declare": false
                              }
                            ]
                          },
                          "expression": false
                        },
                        "kind": "method",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null
                      }
                    ]
                  },
                  "abstract": false,
                  "declare": false
                }
              ]
            },
            "expression": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
