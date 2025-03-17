__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 380,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 379,
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
        "end": 379,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 28,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 15,
              "end": 22,
              "name": "method"
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 22,
              "end": 28,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 25,
                "end": 28,
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
            "start": 34,
            "end": 377,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 45,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 45,
              "end": 377,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 46,
                  "end": 51,
                  "name": "a",
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
                  "start": 53,
                  "end": 59,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 54,
                    "end": 59,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 56,
                      "end": 59
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "start": 86,
                        "end": 94,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 92,
                          "end": 94,
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
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 129,
                          "end": 136,
                          "name": "method"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "start": 139,
                        "end": 148,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 145,
                          "end": 148,
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
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 184,
                          "end": 191,
                          "name": "method"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "ArrowFunctionExpression",
                        "start": 195,
                        "end": 204,
                        "id": null,
                        "expression": false,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "BlockStatement",
                          "start": 201,
                          "end": 204,
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
                        "properties": [
                          {
                            "type": "Property",
                            "start": 239,
                            "end": 254,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 239,
                              "end": 240,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                        "start": 259,
                        "end": 273,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 261,
                            "end": 272,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 261,
                              "end": 262,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "ArrowFunctionExpression",
                              "start": 264,
                              "end": 272,
                              "id": null,
                              "expression": false,
                              "generator": false,
                              "async": false,
                              "params": [],
                              "body": {
                                "type": "BlockStatement",
                                "start": 270,
                                "end": 272,
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
                    "start": 307,
                    "end": 328,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 311,
                        "end": 327,
                        "id": {
                          "type": "Identifier",
                          "start": 311,
                          "end": 312,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 339,
                          "end": 346,
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
