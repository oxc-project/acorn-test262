__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 222,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 222,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 222,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 28,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 26,
              "end": 27,
              "raw": "0",
              "value": 0,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 34,
            "end": 118,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 35,
              "end": 118,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 46,
                "end": 118,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 56,
                    "end": 70,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 60,
                        "end": 69,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 60,
                          "end": 69,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 61,
                            "end": 69,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 63,
                              "end": 69
                            }
                          }
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 79,
                    "end": 94,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 80,
                      "end": 92,
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "start": 80,
                        "end": 85,
                        "decorators": [],
                        "optional": false,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 82,
                            "end": 83,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 82,
                              "end": 83,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": true,
                            "value": {
                              "type": "Identifier",
                              "start": 82,
                              "end": 83,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ],
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ThisExpression",
                        "start": 88,
                        "end": 92
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 103,
                    "end": 112,
                    "argument": {
                      "type": "Identifier",
                      "start": 110,
                      "end": 111,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 37,
                "end": 45,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 39,
                  "end": 45
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 124,
            "end": 220,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 132,
              "end": 133,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 133,
              "end": 220,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 146,
                "end": 220,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 156,
                    "end": 172,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 160,
                        "end": 171,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 160,
                          "end": 171,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 161,
                            "end": 171,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 163,
                              "end": 171,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 163,
                                "end": 171,
                                "decorators": [],
                                "name": "Function",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 181,
                    "end": 196,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 182,
                      "end": 194,
                      "operator": "=",
                      "left": {
                        "type": "ObjectPattern",
                        "start": 182,
                        "end": 187,
                        "decorators": [],
                        "optional": false,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 184,
                            "end": 185,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 184,
                              "end": 185,
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": true,
                            "value": {
                              "type": "Identifier",
                              "start": 184,
                              "end": 185,
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ],
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ThisExpression",
                        "start": 190,
                        "end": 194
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 205,
                    "end": 214,
                    "argument": {
                      "type": "Identifier",
                      "start": 212,
                      "end": 213,
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 135,
                "end": 145,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 137,
                  "end": 145,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 137,
                    "end": 145,
                    "decorators": [],
                    "name": "Function",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
