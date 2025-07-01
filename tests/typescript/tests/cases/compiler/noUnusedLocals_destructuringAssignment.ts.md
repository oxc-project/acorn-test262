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
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 23
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 26,
              "end": 27
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 14,
            "end": 28
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 35
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 39,
                  "end": 45
                },
                "start": 37,
                "end": 45
              },
              "body": {
                "type": "BlockStatement",
                "body": [
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
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 63,
                              "end": 69
                            },
                            "start": 61,
                            "end": 69
                          },
                          "start": 60,
                          "end": 69
                        },
                        "init": null,
                        "definite": false,
                        "start": 60,
                        "end": 69
                      }
                    ],
                    "declare": false,
                    "start": 56,
                    "end": 70
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
                              "start": 82,
                              "end": 83
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 82,
                              "end": 83
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 82,
                            "end": 83
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 80,
                        "end": 85
                      },
                      "right": {
                        "type": "ThisExpression",
                        "start": 88,
                        "end": 92
                      },
                      "start": 80,
                      "end": 92
                    },
                    "directive": null,
                    "start": 79,
                    "end": 94
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 110,
                      "end": 111
                    },
                    "start": 103,
                    "end": 112
                  }
                ],
                "start": 46,
                "end": 118
              },
              "expression": false,
              "start": 35,
              "end": 118
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 34,
            "end": 118
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 132,
              "end": 133
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Function",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 137,
                    "end": 145
                  },
                  "typeArguments": null,
                  "start": 137,
                  "end": 145
                },
                "start": 135,
                "end": 145
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Function",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 163,
                                "end": 171
                              },
                              "typeArguments": null,
                              "start": 163,
                              "end": 171
                            },
                            "start": 161,
                            "end": 171
                          },
                          "start": 160,
                          "end": 171
                        },
                        "init": null,
                        "definite": false,
                        "start": 160,
                        "end": 171
                      }
                    ],
                    "declare": false,
                    "start": 156,
                    "end": 172
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
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 184,
                              "end": 185
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 184,
                              "end": 185
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 184,
                            "end": 185
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 182,
                        "end": 187
                      },
                      "right": {
                        "type": "ThisExpression",
                        "start": 190,
                        "end": 194
                      },
                      "start": 182,
                      "end": 194
                    },
                    "directive": null,
                    "start": 181,
                    "end": 196
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 212,
                      "end": 213
                    },
                    "start": 205,
                    "end": 214
                  }
                ],
                "start": 146,
                "end": 220
              },
              "expression": false,
              "start": 133,
              "end": 220
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 124,
            "end": 220
          }
        ],
        "start": 8,
        "end": 222
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 222
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 222
}
```
