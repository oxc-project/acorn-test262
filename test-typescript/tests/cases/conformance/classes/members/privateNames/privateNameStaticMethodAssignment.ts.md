__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 388,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 387,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "name": "A3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 387,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 35,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 22,
              "end": 29,
              "name": "method"
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 29,
              "end": 35,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 32,
                "end": 35,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 41,
            "end": 385,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 41,
              "end": 52,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 52,
              "end": 385,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 53,
                  "end": 65,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 54,
                    "end": 65,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 56,
                      "end": 65,
                      "exprName": {
                        "type": "Identifier",
                        "start": 63,
                        "end": 65,
                        "name": "A3",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 67,
                  "end": 73,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 68,
                    "end": 73,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 70,
                      "end": 73
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 75,
                "end": 385,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 85,
                    "end": 106,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 85,
                      "end": 106,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 85,
                        "end": 95,
                        "object": {
                          "type": "Identifier",
                          "start": 85,
                          "end": 87,
                          "name": "A3",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 88,
                          "end": 95,
                          "name": "method"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "start": 98,
                        "end": 106,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 104,
                          "end": 106,
                          "body": []
                        },
                        "typeParameters": null,
                        "returnType": null
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 139,
                    "end": 161,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 139,
                      "end": 160,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 139,
                        "end": 148,
                        "object": {
                          "type": "Identifier",
                          "start": 139,
                          "end": 140,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 141,
                          "end": 148,
                          "name": "method"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "start": 151,
                        "end": 160,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 157,
                          "end": 160,
                          "body": []
                        },
                        "typeParameters": null,
                        "returnType": null
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 194,
                    "end": 216,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 194,
                      "end": 216,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 194,
                        "end": 203,
                        "object": {
                          "type": "Identifier",
                          "start": 194,
                          "end": 195,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 196,
                          "end": 203,
                          "name": "method"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "start": 207,
                        "end": 216,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 213,
                          "end": 216,
                          "body": []
                        },
                        "typeParameters": null,
                        "returnType": null
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 248,
                    "end": 285,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 249,
                      "end": 283,
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "start": 249,
                        "end": 266,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 251,
                            "end": 264,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 251,
                              "end": 252,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "MemberExpression",
                              "start": 254,
                              "end": 264,
                              "object": {
                                "type": "Identifier",
                                "start": 254,
                                "end": 256,
                                "name": "A3",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "start": 257,
                                "end": 264,
                                "name": "method"
                              },
                              "computed": false,
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ],
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 269,
                        "end": 283,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 271,
                            "end": 282,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 271,
                              "end": 272,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "ArrowFunctionExpression",
                              "start": 274,
                              "end": 282,
                              "id": null,
                              "expression": false,
                              "generator": false,
                              "async": false,
                              "params": [],
                              "body": {
                                "type": "BlockStatement",
                                "start": 280,
                                "end": 282,
                                "body": []
                              },
                              "typeParameters": null,
                              "returnType": null
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 317,
                    "end": 336,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 321,
                        "end": 335,
                        "id": {
                          "type": "Identifier",
                          "start": 321,
                          "end": 322,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 325,
                          "end": 335,
                          "object": {
                            "type": "Identifier",
                            "start": 325,
                            "end": 327,
                            "name": "A3",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 328,
                            "end": 335,
                            "name": "method"
                          },
                          "computed": false,
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "let",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 345,
                    "end": 356,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 345,
                      "end": 356,
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 345,
                        "end": 354,
                        "object": {
                          "type": "Identifier",
                          "start": 345,
                          "end": 346,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 347,
                          "end": 354,
                          "name": "method"
                        },
                        "computed": false,
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
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
