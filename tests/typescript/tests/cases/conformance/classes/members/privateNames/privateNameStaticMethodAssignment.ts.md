__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 387,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 387,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "A3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 387,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 35,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 22,
              "end": 29,
              "name": "method"
            },
            "value": {
              "type": "FunctionExpression",
              "start": 29,
              "end": 35,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 32,
                "end": 35,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 41,
            "end": 385,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 41,
              "end": 52,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 52,
              "end": 385,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 53,
                  "end": 65,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
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
                        "decorators": [],
                        "name": "A3",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 67,
                  "end": 73,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 68,
                    "end": 73,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 70,
                      "end": 73
                    }
                  }
                }
              ],
              "returnType": null,
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
                          "decorators": [],
                          "name": "A3",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 88,
                          "end": 95,
                          "name": "method"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "start": 98,
                        "end": 106,
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 104,
                          "end": 106,
                          "body": []
                        },
                        "id": null,
                        "generator": false
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
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 141,
                          "end": 148,
                          "name": "method"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "start": 151,
                        "end": 160,
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 157,
                          "end": 160,
                          "body": []
                        },
                        "id": null,
                        "generator": false
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
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 196,
                          "end": 203,
                          "name": "method"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "start": 207,
                        "end": 216,
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 213,
                          "end": 216,
                          "body": []
                        },
                        "id": null,
                        "generator": false
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
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "start": 251,
                            "end": 264,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 251,
                              "end": 252,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "MemberExpression",
                              "start": 254,
                              "end": 264,
                              "object": {
                                "type": "Identifier",
                                "start": 254,
                                "end": 256,
                                "decorators": [],
                                "name": "A3",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "start": 257,
                                "end": 264,
                                "name": "method"
                              },
                              "optional": false,
                              "computed": false
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ],
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
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 271,
                              "end": 272,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "ArrowFunctionExpression",
                              "start": 274,
                              "end": 282,
                              "expression": false,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "start": 280,
                                "end": 282,
                                "body": []
                              },
                              "id": null,
                              "generator": false
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
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
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 321,
                        "end": 335,
                        "id": {
                          "type": "Identifier",
                          "start": 321,
                          "end": 322,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 325,
                          "end": 335,
                          "object": {
                            "type": "Identifier",
                            "start": 325,
                            "end": 327,
                            "decorators": [],
                            "name": "A3",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 328,
                            "end": 335,
                            "name": "method"
                          },
                          "optional": false,
                          "computed": false
                        },
                        "definite": false
                      }
                    ],
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
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 347,
                          "end": 354,
                          "name": "method"
                        },
                        "optional": false,
                        "computed": false
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
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
