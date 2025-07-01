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
              "start": 22,
              "end": 29
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
                "start": 32,
                "end": 35
              },
              "expression": false,
              "start": 29,
              "end": 35
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 15,
            "end": 35
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
              "start": 41,
              "end": 52
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
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 63,
                        "end": 65
                      },
                      "typeArguments": null,
                      "start": 56,
                      "end": 65
                    },
                    "start": 54,
                    "end": 65
                  },
                  "start": 53,
                  "end": 65
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
                      "start": 70,
                      "end": 73
                    },
                    "start": 68,
                    "end": 73
                  },
                  "start": 67,
                  "end": 73
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A3",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 85,
                          "end": 87
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "method",
                          "start": 88,
                          "end": 95
                        },
                        "optional": false,
                        "computed": false,
                        "start": 85,
                        "end": 95
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
                          "start": 104,
                          "end": 106
                        },
                        "id": null,
                        "generator": false,
                        "start": 98,
                        "end": 106
                      },
                      "start": 85,
                      "end": 106
                    },
                    "directive": null,
                    "start": 85,
                    "end": 106
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
                          "start": 139,
                          "end": 140
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "method",
                          "start": 141,
                          "end": 148
                        },
                        "optional": false,
                        "computed": false,
                        "start": 139,
                        "end": 148
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
                          "start": 157,
                          "end": 160
                        },
                        "id": null,
                        "generator": false,
                        "start": 151,
                        "end": 160
                      },
                      "start": 139,
                      "end": 160
                    },
                    "directive": null,
                    "start": 139,
                    "end": 161
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
                          "start": 194,
                          "end": 195
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "method",
                          "start": 196,
                          "end": 203
                        },
                        "optional": false,
                        "computed": false,
                        "start": 194,
                        "end": 203
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
                          "start": 213,
                          "end": 216
                        },
                        "id": null,
                        "generator": false,
                        "start": 207,
                        "end": 216
                      },
                      "start": 194,
                      "end": 216
                    },
                    "directive": null,
                    "start": 194,
                    "end": 216
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
                              "start": 251,
                              "end": 252
                            },
                            "value": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 254,
                                "end": 256
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "name": "method",
                                "start": 257,
                                "end": 264
                              },
                              "optional": false,
                              "computed": false,
                              "start": 254,
                              "end": 264
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 251,
                            "end": 264
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 249,
                        "end": 266
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
                              "start": 271,
                              "end": 272
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
                                "start": 280,
                                "end": 282
                              },
                              "id": null,
                              "generator": false,
                              "start": 274,
                              "end": 282
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 271,
                            "end": 282
                          }
                        ],
                        "start": 269,
                        "end": 283
                      },
                      "start": 249,
                      "end": 283
                    },
                    "directive": null,
                    "start": 248,
                    "end": 285
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
                          "start": 321,
                          "end": 322
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A3",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 325,
                            "end": 327
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "method",
                            "start": 328,
                            "end": 335
                          },
                          "optional": false,
                          "computed": false,
                          "start": 325,
                          "end": 335
                        },
                        "definite": false,
                        "start": 321,
                        "end": 335
                      }
                    ],
                    "declare": false,
                    "start": 317,
                    "end": 336
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
                          "start": 345,
                          "end": 346
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "method",
                          "start": 347,
                          "end": 354
                        },
                        "optional": false,
                        "computed": false,
                        "start": 345,
                        "end": 354
                      },
                      "start": 345,
                      "end": 356
                    },
                    "directive": null,
                    "start": 345,
                    "end": 356
                  }
                ],
                "start": 75,
                "end": 385
              },
              "expression": false,
              "start": 52,
              "end": 385
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 41,
            "end": 385
          }
        ],
        "start": 9,
        "end": 387
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 387
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 387
}
```
