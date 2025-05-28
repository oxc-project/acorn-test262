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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 222,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 28,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 26,
              "end": 27,
              "value": 0,
              "raw": "0"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 34,
            "end": 118,
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
            "value": {
              "type": "FunctionExpression",
              "start": 35,
              "end": 118,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 46,
                "end": 118,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 56,
                    "end": 70,
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 60,
                        "end": 69,
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
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 79,
                    "end": 94,
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
                        "properties": [
                          {
                            "type": "Property",
                            "start": 82,
                            "end": 83,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 82,
                              "end": 83,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 82,
                              "end": 83,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ThisExpression",
                        "start": 88,
                        "end": 92
                      }
                    },
                    "directive": null
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
            "start": 124,
            "end": 220,
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
            "value": {
              "type": "FunctionExpression",
              "start": 133,
              "end": 220,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 135,
                "end": 145,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 137,
                  "end": 145,
                  "typeName": {
                    "type": "Identifier",
                    "start": 137,
                    "end": 145,
                    "decorators": [],
                    "name": "Function",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 146,
                "end": 220,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 156,
                    "end": 172,
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 160,
                        "end": 171,
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
                              "typeName": {
                                "type": "Identifier",
                                "start": 163,
                                "end": 171,
                                "decorators": [],
                                "name": "Function",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 181,
                    "end": 196,
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
                        "properties": [
                          {
                            "type": "Property",
                            "start": 184,
                            "end": 185,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 184,
                              "end": 185,
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 184,
                              "end": 185,
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "ThisExpression",
                        "start": 190,
                        "end": 194
                      }
                    },
                    "directive": null
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
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private"
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
