__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 379,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 379,
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
        "end": 379,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 28,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 15,
              "end": 22,
              "name": "method"
            },
            "value": {
              "type": "FunctionExpression",
              "start": 22,
              "end": 28,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 25,
                "end": 28,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 34,
            "end": 377,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 45,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 45,
              "end": 377,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 46,
                  "end": 51,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 47,
                    "end": 51,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 49,
                      "end": 51,
                      "typeName": {
                        "type": "Identifier",
                        "start": 49,
                        "end": 51,
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
                  "start": 53,
                  "end": 59,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 54,
                    "end": 59,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 56,
                      "end": 59
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 61,
                "end": 377,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 71,
                    "end": 94,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 71,
                      "end": 94,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 71,
                        "end": 83,
                        "object": {
                          "type": "ThisExpression",
                          "start": 71,
                          "end": 75
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 76,
                          "end": 83,
                          "name": "method"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "start": 86,
                        "end": 94,
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 92,
                          "end": 94,
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
                    "start": 127,
                    "end": 149,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 127,
                      "end": 148,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 127,
                        "end": 136,
                        "object": {
                          "type": "Identifier",
                          "start": 127,
                          "end": 128,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 129,
                          "end": 136,
                          "name": "method"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "start": 139,
                        "end": 148,
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 145,
                          "end": 148,
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
                    "start": 182,
                    "end": 204,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 182,
                      "end": 204,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 182,
                        "end": 191,
                        "object": {
                          "type": "Identifier",
                          "start": 182,
                          "end": 183,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 184,
                          "end": 191,
                          "name": "method"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "start": 195,
                        "end": 204,
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 201,
                          "end": 204,
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
                    "start": 236,
                    "end": 275,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 237,
                      "end": 273,
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "start": 237,
                        "end": 256,
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "start": 239,
                            "end": 254,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 239,
                              "end": 240,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "MemberExpression",
                              "start": 242,
                              "end": 254,
                              "object": {
                                "type": "ThisExpression",
                                "start": 242,
                                "end": 246
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "start": 247,
                                "end": 254,
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
                        "start": 259,
                        "end": 273,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 261,
                            "end": 272,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 261,
                              "end": 262,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "ArrowFunctionExpression",
                              "start": 264,
                              "end": 272,
                              "expression": false,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "start": 270,
                                "end": 272,
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
                    "start": 307,
                    "end": 328,
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 311,
                        "end": 327,
                        "id": {
                          "type": "Identifier",
                          "start": 311,
                          "end": 312,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 315,
                          "end": 327,
                          "object": {
                            "type": "ThisExpression",
                            "start": 315,
                            "end": 319
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 320,
                            "end": 327,
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
                    "start": 337,
                    "end": 348,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 337,
                      "end": 348,
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 337,
                        "end": 346,
                        "object": {
                          "type": "Identifier",
                          "start": 337,
                          "end": 338,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 339,
                          "end": 346,
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
