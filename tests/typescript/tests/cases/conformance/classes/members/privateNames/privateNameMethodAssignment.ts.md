__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A3",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 8
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "method",
              "start": 15,
              "end": 22
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
                "body": [],
                "start": 25,
                "end": 28
              },
              "expression": false,
              "start": 22,
              "end": 28
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 15,
            "end": 28
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 45
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 49,
                        "end": 51
                      },
                      "typeArguments": null,
                      "start": 49,
                      "end": 51
                    },
                    "start": 47,
                    "end": 51
                  },
                  "start": 46,
                  "end": 51
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 56,
                      "end": 59
                    },
                    "start": 54,
                    "end": 59
                  },
                  "start": 53,
                  "end": 59
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
                          "start": 71,
                          "end": 75
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "method",
                          "start": 76,
                          "end": 83
                        },
                        "optional": false,
                        "computed": false,
                        "start": 71,
                        "end": 83
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 92,
                          "end": 94
                        },
                        "id": null,
                        "generator": false,
                        "start": 86,
                        "end": 94
                      },
                      "start": 71,
                      "end": 94
                    },
                    "directive": null,
                    "start": 71,
                    "end": 94
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 127,
                          "end": 128
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "method",
                          "start": 129,
                          "end": 136
                        },
                        "optional": false,
                        "computed": false,
                        "start": 127,
                        "end": 136
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 145,
                          "end": 148
                        },
                        "id": null,
                        "generator": false,
                        "start": 139,
                        "end": 148
                      },
                      "start": 127,
                      "end": 148
                    },
                    "directive": null,
                    "start": 127,
                    "end": 149
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 182,
                          "end": 183
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "method",
                          "start": 184,
                          "end": 191
                        },
                        "optional": false,
                        "computed": false,
                        "start": 182,
                        "end": 191
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 201,
                          "end": 204
                        },
                        "id": null,
                        "generator": false,
                        "start": 195,
                        "end": 204
                      },
                      "start": 182,
                      "end": 204
                    },
                    "directive": null,
                    "start": 182,
                    "end": 204
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 239,
                              "end": 240
                            },
                            "value": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 242,
                                "end": 246
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "name": "method",
                                "start": 247,
                                "end": 254
                              },
                              "optional": false,
                              "computed": false,
                              "start": 242,
                              "end": 254
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 239,
                            "end": 254
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 237,
                        "end": 256
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 261,
                              "end": 262
                            },
                            "value": {
                              "type": "ArrowFunctionExpression",
                              "expression": false,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [],
                                "start": 270,
                                "end": 272
                              },
                              "id": null,
                              "generator": false,
                              "start": 264,
                              "end": 272
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 261,
                            "end": 272
                          }
                        ],
                        "start": 259,
                        "end": 273
                      },
                      "start": 237,
                      "end": 273
                    },
                    "directive": null,
                    "start": 236,
                    "end": 275
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 311,
                          "end": 312
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 315,
                            "end": 319
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "method",
                            "start": 320,
                            "end": 327
                          },
                          "optional": false,
                          "computed": false,
                          "start": 315,
                          "end": 327
                        },
                        "definite": false,
                        "start": 311,
                        "end": 327
                      }
                    ],
                    "declare": false,
                    "start": 307,
                    "end": 328
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 337,
                          "end": 338
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "method",
                          "start": 339,
                          "end": 346
                        },
                        "optional": false,
                        "computed": false,
                        "start": 337,
                        "end": 346
                      },
                      "start": 337,
                      "end": 348
                    },
                    "directive": null,
                    "start": 337,
                    "end": 348
                  }
                ],
                "start": 61,
                "end": 377
              },
              "expression": false,
              "start": 45,
              "end": 377
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 34,
            "end": 377
          }
        ],
        "start": 9,
        "end": 379
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 379
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 379
}
```
